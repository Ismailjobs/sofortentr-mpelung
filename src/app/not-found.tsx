import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { sitePageTitle } from "@/config/site-brand";

export const metadata: Metadata = {
  title: sitePageTitle("Seite nicht gefunden"),
  description: "Die angeforderte Seite gibt es nicht — Sofort Entrümpelung Wien.",
};

export default function NotFound() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Header />
      <main className="bg-brand-muted pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-3 text-center sm:px-5 lg:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">404</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
            Diese Adresse existiert nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orange/90"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
