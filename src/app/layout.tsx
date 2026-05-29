import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getSiteOrigin } from "@/config/site-url";
import { sitePageTitle } from "@/config/site-brand";
import { HASH_SCROLL_SCRIPT } from "@/lib/hash-scroll";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: sitePageTitle("Entrümpelung in Wien"),
  description:
    "Schnelle, zuverlässige und günstige Räumung in Wien — Wohnung, Haus, Keller und mehr inklusive Entsorgung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" className={`${montserrat.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className={`${montserrat.className} min-h-screen bg-white antialiased`}>
        <GoogleAnalytics />
        <Script
          id="hash-scroll"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: HASH_SCROLL_SCRIPT }}
        />
        <WhatsAppFAB />
        {children}
      </body>
    </html>
  );
}
