const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";

export const whatsappNumber = /^[1-9]\d{7,14}$/.test(configuredNumber) ? configuredNumber : null;

function publicSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url;
  } catch {
    return null;
  }

  return null;
}

export const siteUrl = publicSiteUrl();
export const businessName = "MACC — Montagem de Ar-Condicionado Central";
export const description =
  "Montagem e manutenção de ar-condicionado central, fabricação de dutos e soluções metálicas sob medida para projetos comerciais e industriais.";

export const defaultMessage = "Olá! Conheci a MACC pelo site e gostaria de solicitar um orçamento.";

export function whatsappHref(message = defaultMessage) {
  return whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : null;
}
