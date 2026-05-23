import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CallFAB from "@/components/CallFAB";
import { getSiteOrigin } from "@/config/site-url";
import { sitePageTitle } from "@/config/site-brand";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function n(h){if(!h)return"";var id=h.replace(/^#/,"").split("#").filter(Boolean)[0];return id?"#"+id:"";}function go(raw){var h=n(raw);if(!h)return;if(n(location.hash)!==h)history.replaceState(null,"",location.pathname+location.search+h);var el=document.getElementById(h.slice(1));if(el)requestAnimationFrame(function(){el.scrollIntoView({behavior:"smooth",block:"start"});});}function onHash(){go(location.hash);}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",onHash,{once:true});else onHash();window.addEventListener("hashchange",onHash,{passive:true});})();`,
          }}
        />
        <CallFAB />
        {children}
      </body>
    </html>
  );
}
