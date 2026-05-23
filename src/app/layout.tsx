import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CallFAB from "@/components/CallFAB";
import HashScrollHandler from "@/components/HashScrollHandler";
import { getSiteOrigin } from "@/config/site-url";
import { sitePageTitle } from "@/config/site-brand";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
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
        <HashScrollHandler />
        <CallFAB />
        {children}
      </body>
    </html>
  );
}
