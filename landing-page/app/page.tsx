import Image from "next/image";
import { ArrowDown, ArrowUp, ArrowUpRight, Check } from "lucide-react";
import { ContactLink, WhatsAppIcon } from "@/components/contact-link";
import { Header } from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { advantages, navigation, projects, questions, services, steps } from "@/lib/content";
import { businessName, description, siteUrl, whatsappHref } from "@/lib/site";

export default function Home() {
  const contact = whatsappHref();
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName,
    alternateName: "MACC",
    description,
    ...(siteUrl && { url: siteUrl.href, logo: new URL("/visual/logo.webp", siteUrl).href }),
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header contact={contact} />
      <main id="conteudo" tabIndex={-1}>
        <section id="inicio" className="hero dark" aria-labelledby="titulo">
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Projetos comerciais e industriais</p>
              <h1 id="titulo">Climatização central. <em>Metal sob medida.</em></h1>
              <p className="hero-description">Instalação e manutenção de ar-condicionado central, fabricação de dutos e soluções em chapas metálicas para comércio e indústria.</p>
              <div className="hero-actions">
                <ContactLink href={contact}>Solicitar orçamento</ContactLink>
                <a className="button button-outline" href="#servicos">Explorar serviços <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-visual">
              <figure className="hero-image">
                <Image src="/visual/hero.webp" alt="Casa de máquinas ilustrativa com equipamentos de climatização e dutos metálicos suspensos" fill preload sizes="(max-width: 899px) 94vw, (max-width: 1350px) 52vw, 650px" />
              </figure>
              <nav className="hero-shortcuts" aria-label="Áreas de atuação">
                {services.map(({ id, icon: Icon, shortTitle }) => (
                  <a key={id} href={`#${id}`}>
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    <span>{shortTitle}</span>
                    <ArrowUpRight className="shortcut-arrow" size={16} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section id="servicos" className="section surface" aria-labelledby="servicos-titulo">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow"><span /> Serviços</p><h2 id="servicos-titulo">O que a MACC faz</h2></div>
              <p>Da montagem de sistemas centrais à fabricação das peças que integram a instalação.</p>
            </div>
            <div className="service-grid">
              {services.map(({ id, icon: Icon, title, description, items, action, message, image }) => (
                <article key={id} id={id} className="service-card">
                  <figure className="service-image">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 699px) 94vw, (max-width: 1350px) 46vw, 620px" />
                  </figure>
                  <div className="service-body">
                    <span className="icon-tile"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                      {items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>)}
                    </ul>
                    <ContactLink href={whatsappHref(message)} variant="text" icon="arrow">{action}</ContactLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section shell about" aria-labelledby="sobre-titulo">
          <figure className="about-figure">
            <div className="about-photo">
              <Image src="/visual/equipe.webp" alt="Ilustração de técnicos inspecionando a montagem de um duto metálico" fill sizes="(max-width: 819px) 94vw, 47vw" />
            </div>
          </figure>
          <div className="about-copy">
            <p className="eyebrow"><span /> Sobre a MACC</p>
            <h2 id="sobre-titulo">Do sistema de ar à peça metálica.</h2>
            <p>A MACC monta e mantém sistemas de ar-condicionado central e fabrica os dutos, as estruturas e os componentes que cada instalação exige.</p>
            <p>As soluções seguem as especificações de cada projeto, com foco na segurança da montagem e na precisão dos acabamentos.</p>
            <a href="#diferenciais" className="button button-text">Conheça nossos diferenciais <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <section id="diferenciais" className="section shell advantages" aria-labelledby="diferenciais-titulo">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Diferenciais</p><h2 id="diferenciais-titulo">Como a MACC trabalha</h2></div>
          </div>
          <ul className="advantage-grid">
            {advantages.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon size={27} strokeWidth={1.65} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projetos" className="section gallery dark" aria-labelledby="projetos-titulo">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow"><span /> Projetos e aplicações</p><h2 id="projetos-titulo">Onde nossas soluções se aplicam</h2></div>
            </div>
            <div className="project-grid">
              {projects.map(({ image, category, title, alt }) => (
                <figure key={image} className="project">
                  <div className="project-image">
                    <Image src={`/visual/${image}.webp`} alt={alt} fill sizes="(max-width: 639px) 94vw, (max-width: 1023px) 46vw, 56vw" />
                  </div>
                  <figcaption><p>{category}</p><h3>{title}</h3></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" aria-labelledby="processo-titulo">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Processo de atendimento</p><h2 id="processo-titulo">Do primeiro contato à execução</h2></div>
          </div>
          <ol className="steps">
            {steps.map(({ title, text }, index) => (
              <li key={title}>
                <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3><p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section faq surface" aria-labelledby="faq-titulo">
          <div className="shell faq-grid">
            <div><p className="eyebrow"><span /> FAQ</p><h2 id="faq-titulo">Perguntas frequentes</h2></div>
            <Accordion type="single" collapsible aria-label="Perguntas frequentes">
              {questions.map(({ question, answer }, index) => (
                <AccordionItem className="faq-item" key={question} value={`pergunta-${index + 1}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contato" className="contact-section shell" aria-labelledby="contato-titulo">
          <div className="contact-panel dark">
            <div>
              <p className="eyebrow"><span /> Solicite um orçamento</p>
              <h2 id="contato-titulo">Vamos conversar sobre seu projeto?</h2>
              <p className="contact-description">Conte o que você precisa instalar, manter ou fabricar. A MACC avalia seu projeto e prepara uma proposta de acordo com o escopo.</p>
            </div>
            <div className="contact-action">
              {contact ? (
                <ContactLink href={contact}>Conversar com um especialista</ContactLink>
              ) : (
                <p className="contact-status" id="status-contato" tabIndex={-1}><WhatsAppIcon /> WhatsApp comercial com configuração pendente.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer dark">
        <div className="shell">
          <div className="footer-grid">
            <div>
              <a href="#inicio" aria-label="MACC — início"><Image src="/visual/logo.webp" alt="" width={114} height={57} /></a>
              <p>Montagem de ar-condicionado central e fabricação metálica para comércio e indústria.</p>
            </div>
            <nav aria-label="Links rápidos">
              <h2>Navegação</h2>
              <ul>{navigation.slice(1).map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
            </nav>
            <nav aria-label="Serviços no rodapé">
              <h2>Serviços</h2>
              <ul>{services.map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ul>
            </nav>
            <div>
              <h2>Contato</h2>
              <ContactLink href={contact} variant="outline">WhatsApp</ContactLink>
            </div>
          </div>
          <div className="footer-bottom">
            <small>© {new Date().getFullYear()} MACC. Todos os direitos reservados.</small>
            <a href="#inicio">Voltar ao início <ArrowUp size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <a className="floating-contact" href={contact ?? "#status-contato"} aria-label={contact ? "Conversar com a MACC pelo WhatsApp" : "Consultar disponibilidade do WhatsApp da MACC"}>
        <WhatsAppIcon size={23} /> <span>WhatsApp</span>
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
    </>
  );
}
