import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, FileCheck, Truck } from "lucide-react";
import Link from "next/link";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import HeroBackdrop from "@/components/HeroBackdrop";
import PricingOverview from "@/components/PricingOverview";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import { sitePageTitle } from "@/config/site-brand";

export const metadata: Metadata = {
  title: sitePageTitle("Preise & Fixpreis"),
  description:
    "Was kostet eine Entrümpelung? Transparente Richtpreise für Haushaltsauflösung und Entrümpelung in Wien — Festpreis nach kostenloser Besichtigung.",
};

const PRICE_NOTES: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: FileCheck,
    title: "Festpreis",
    text: "Nach Besichtigung erhalten Sie ein verbindliches Angebot — ohne Überraschungen.",
  },
  {
    icon: Truck,
    title: "Entsorgung inklusive",
    text: "Abtransport & fachgerechte Entsorgung sind bereits einkalkuliert.",
  },
  {
    icon: ClipboardCheck,
    title: "Kostenlose Besichtigung",
    text: "Wir kommen vor Ort, bewerten Aufwand & Volumen und nennen Ihnen den Fixpreis.",
  },
];

export default function PreisePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Header />
      <main className="bg-brand-muted">
        <section className="relative isolate min-h-[min(72svh,40rem)] overflow-hidden pt-20 pb-8 text-white sm:pt-24 sm:pb-10">
          <HeroBackdrop />
          <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
              Transparente Preise
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
              Entrümpelung mit Fixpreis-Garantie
            </h1>
            <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">
              Klare Richtpreise nach Objektgröße — mit möglicher Wertanrechnung oft deutlich günstiger. Verbindlich
              wird der Festpreis nach kostenloser Besichtigung.
            </p>
            <Link
              href="#preise-uebersicht"
              className="mt-8 inline-flex items-center justify-center rounded-btn bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
            >
              Zu den Richtpreisen
            </Link>
          </div>
        </section>

        <section id="preise-uebersicht" className="scroll-mt-28 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
          <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <PricingOverview />

            <ul className="mx-auto mt-14 grid max-w-2xl gap-4 text-sm text-neutral-600 sm:mt-16 sm:grid-cols-3 lg:max-w-none">
              {PRICE_NOTES.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex flex-col items-center rounded-2xl border border-black/[0.06] bg-white/70 px-4 py-5 text-center shadow-sm backdrop-blur-sm sm:px-5"
                >
                  <span className="mb-3 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange bg-white text-brand-orange">
                    <Icon className="h-7 w-7" strokeWidth={1.85} aria-hidden />
                  </span>
                  <p className="font-extrabold uppercase tracking-wide text-brand-dark">{title}</p>
                  <p className="mt-2 leading-relaxed text-neutral-600">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactPanel />
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
