import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { sitePageTitle } from "@/config/site-brand";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import { SERVICES } from "@/data/site-content";

const LEISTUNGEN_COVER = SERVICES.find((s) => s.id === "hausentruempelung") ?? SERVICES[0];

export const metadata: Metadata = {
  title: sitePageTitle("Leistungen"),
  description:
    "Haus-, Wohnungs-, Keller- und Büroentrümpelung in Wien — alle Services im Überblick.",
};

export default function LeistungenPage() {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Leistungen" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd items={breadcrumbs} id="breadcrumb-leistungen" />
      <Header />
      <main className="bg-brand-muted">
        <section className="relative isolate min-h-[min(52svh,26rem)] overflow-hidden sm:min-h-[min(56svh,30rem)]">
          <Image
            src={LEISTUNGEN_COVER.imageSrc}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-dark/78" />
          <div className="relative mx-auto flex min-h-[min(52svh,26rem)] max-w-[min(100%,88rem)] flex-col justify-end px-3 pb-16 pt-24 text-white sm:min-h-[min(56svh,30rem)] sm:px-5 sm:pb-20 sm:pt-20 lg:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
              Unsere Entrümpelung
            </p>
            <h1 className="mt-4 flex max-w-4xl flex-col gap-1 text-balance text-4xl font-extrabold uppercase leading-tight tracking-tight sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2 sm:gap-y-0 sm:text-5xl">
              <span>Alle</span>
              <span>Entrümpelungs</span>
              <span>Services</span>
              <span>in Wien</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
              Von Haus und Wohnung über Keller, Lager und Büro bis Messie und Garten — Festpreis nach Besichtigung,
              Entsorgung inklusive.
            </p>
          </div>
        </section>

        <Breadcrumbs items={breadcrumbs} />
        <ServicesSection services={SERVICES} showSectionHeader={false} />
        <ContactPanel />
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
