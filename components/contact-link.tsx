import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function WhatsAppIcon({ size = 21 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a9.9 9.9 0 0 0-8.6 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.2.9.8-3.1-.2-.3a8.2 8.2 0 1 1 7.1 3.8Zm4.5-6.1-1.7-.8c-.2-.1-.4-.2-.6.1l-.7.8c-.1.2-.3.2-.5.1-1.6-.6-2.7-1.5-3.6-3.1-.2-.3.2-.4.6-1 .1-.2.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.8.8-.8 2 0 3.4 1 1.8 2.6 3.4 4.5 4.3.7.3 1.6.7 2.5.7.7 0 1.6-.3 1.9-.9.2-.5.2-1 .1-1.1l-.1-.3Z" />
    </svg>
  );
}

type ContactLinkProps = {
  href: string | null;
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  icon?: "whatsapp" | "arrow";
};

export function ContactLink({ href, children, variant = "primary", icon = "whatsapp" }: ContactLinkProps) {
  return (
    <a className={`button button-${variant}`} href={href ?? "#status-contato"}>
      {icon === "whatsapp" && <WhatsAppIcon size={19} />}
      {children}
      {icon === "arrow" && <ArrowUpRight size={17} aria-hidden="true" />}
    </a>
  );
}
