import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteOrigin } from "@/config/site-url";
import { sitePageTitle } from "@/config/site-brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="de-AT" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>{children}</body>
    </html>
  );
}
