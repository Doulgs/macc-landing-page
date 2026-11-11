"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { navigation } from "@/lib/content";
import { ContactLink } from "./contact-link";

export function Header({ contact }: { contact: string | null }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="shell header-inner">
        <a className="brand" href="#inicio" aria-label="MACC — início" onClick={() => setOpen(false)}>
          <Image
            src="/visual/logo.webp"
            alt=""
            width={320}
            height={160}
            sizes="(min-width: 1024px) 103px, 91px"
          />
        </a>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="navegacao" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className="main-nav" id="navegacao" aria-label="Navegação principal" data-open={open}>
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="mobile-quote" onClick={() => setOpen(false)}>
            <ContactLink href={contact} icon="arrow">Solicitar orçamento</ContactLink>
          </div>
        </nav>
        <div className="desktop-quote">
          <ContactLink href={contact} icon="arrow">Solicitar orçamento</ContactLink>
        </div>
      </div>
    </header>
  );
}
