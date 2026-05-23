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
            __html: `(function(){function s(h){if(!h)return;var id=h.replace(/^#/,"");var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}function r(){s(location.hash);}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",r);else r();window.addEventListener("hashchange",r);var cb=document.getElementById("mobile-nav-toggle");if(cb){var mq=window.matchMedia("(max-width:1147px)");var y=0;function unlock(){document.body.style.position="";document.body.style.top="";document.body.style.left="";document.body.style.right="";document.body.style.width="";window.scrollTo(0,y);}function lock(){if(!mq.matches)return;y=window.scrollY;document.body.style.position="fixed";document.body.style.top="-"+y+"px";document.body.style.left="0";document.body.style.right="0";document.body.style.width="100%";}cb.addEventListener("change",function(){cb.checked?lock():unlock();});mq.addEventListener("change",function(){if(!mq.matches&&cb.checked){cb.checked=false;unlock();}});}})();`,
          }}
        />
        <CallFAB />
        {children}
      </body>
    </html>
  );
}
