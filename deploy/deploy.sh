#!/usr/bin/env bash
set -euo pipefail

cd /opt/macc-landing-page
exec 9>deploy.lock
flock -w 180 9

read -r -t 10 digest
read -r -t 10 actor
read -r -t 10 registry_token
[[ "$digest" =~ ^sha256:[a-f0-9]{64}$ ]]
[[ "$actor" =~ ^[a-zA-Z0-9_-]+(\[bot\])?$ ]]
[[ "$registry_token" =~ ^[-_.a-zA-Z0-9]+$ ]]

image="ghcr.io/doulgs/macc-landing-page@$digest"
registry_config="$(mktemp -d)"
trap 'rm -rf "$registry_config"' EXIT
printf '%s\n' "$registry_token" | docker --config "$registry_config" login ghcr.io --username "$actor" --password-stdin
unset registry_token

compose() { docker --config "$registry_config" compose --project-name macc-landing-page "$@"; }
export MACC_IMAGE="$image"
compose pull landing-page

previous=
if [[ -f current.env ]]; then
  read -r previous < current.env
  previous="${previous#MACC_IMAGE=}"
fi

if compose up -d --wait --wait-timeout 60 --pull never landing-page; then
  printf 'MACC_IMAGE=%s\n' "$image" > current.env.tmp
  mv current.env.tmp current.env
  printf 'Landing page healthy at %s\n' "$image"
else
  if [[ -n "$previous" ]]; then
    printf 'Restoring previous version %s\n' "$previous" >&2
    MACC_IMAGE="$previous" compose up -d --wait --wait-timeout 60 --pull never landing-page
  else
    compose stop landing-page
  fi
  exit 1
fi
