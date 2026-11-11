import type { Metadata } from "next";
import localFont from "next/font/local";
import { businessName, description, siteUrl } from "@/lib/site";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

const display = localFont({ src: "./fonts/barlow-condensed.woff2", weight: "600", variable: "--font-display", display: "swap" });
const body = localFont({ src: "./fonts/manrope.woff2", weight: "400 800", variable: "--font-body", display: "swap" });
const title = "MACC | Ar-condicionado central e fabricação metálica";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: siteUrl ?? undefined,
  alternates: siteUrl ? { canonical: siteUrl.href } : undefined,
  openGraph: {
    title, description, type: "website", locale: "pt_BR", siteName: "MACC",
    ...(siteUrl && { url: siteUrl.href, images: [{ url: withBasePath("/visual/macc-social.jpg"), width: 1200, height: 630, alt: businessName }] }),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title, description,
    ...(siteUrl && { images: [withBasePath("/visual/macc-social.jpg")] }),
  },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
