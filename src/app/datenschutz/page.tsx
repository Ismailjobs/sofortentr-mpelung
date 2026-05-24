import type { Metadata } from "next";
import { sitePageTitle } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import DatenschutzBody from "./DatenschutzBody";

export const metadata: Metadata = {
  title: sitePageTitle("Datenschutz"),
  description: "Datenschutzerklärung — Verarbeitung personenbezogener Daten bei Sofort Entrümpelung.",
};

function siteHostLabel(): string {
  try {
    return new URL(getSiteOrigin()).host;
  } catch {
    return "sofortentrumpelung.at";
  }
}

export default function DatenschutzPage() {
  const siteHost = siteHostLabel();
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Datenschutz" },
  ];

  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbListJsonLd items={breadcrumbs} id="breadcrumb-datenschutz" />
      <Header />
      <main className="bg-brand-muted pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8 rounded-xl border border-black/[0.06]" />
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Rechtliches</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <div className="mt-10">
            <DatenschutzBody siteHost={siteHost} />
          </div>
        </div>
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
