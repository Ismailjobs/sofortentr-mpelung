import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PARTNER_URL = "https://objektraeumung.at";
const PARTNER_NAME = "Objekträumung";

export const metadata: Metadata = buildPageMetadata({
  title: "Partner & Kooperationen",
  description:
    "Unsere Partner im Bereich professionelle Entrümpelung und Objekträumung in Österreich — verlässliche Zusammenarbeit für Kundinnen und Kunden.",
  path: "/partner",
});

export default function PartnerPage() {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Partner" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd items={breadcrumbs} id="breadcrumb-partner" />
      <Header />
      <main className="bg-brand-muted pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8 rounded-xl border border-black/[0.06] bg-white" />
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Netzwerk</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Partner
          </h1>

          <article className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-800 sm:text-base">
            <p>
              Für anspruchsvolle Räumungen und Entrümpelungen arbeiten wir mit erfahrenen Spezialisten zusammen, die
              dieselben Qualitätsansprüche teilen: transparente Abläufe, faire Festpreise nach Besichtigung und
              zuverlässige Entsorgung aus einer Hand.
            </p>
            <p>
              Unser Partner <strong>{PARTNER_NAME}</strong> unterstützt Kundinnen und Kunden in Österreich bei
              professioneller Objekträumung — von Wohnungs- und Haushaltsauflösungen bis zu Keller-, Büro- und
              Nachlassentrümpelungen. Wer eine zusätzliche regionale Anlaufstelle sucht, findet dort kompetente Beratung
              und termingerechte Umsetzung.
            </p>
            <p>
              Mehr Informationen, Leistungen und Kontaktmöglichkeiten finden Sie direkt auf der Website unseres
              Partners:
            </p>
            <p>
              <a
                href={PARTNER_URL}
                className="font-semibold text-brand-orange underline decoration-brand-orange/50 underline-offset-4 transition hover:decoration-brand-orange"
              >
                {PARTNER_URL.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </article>
        </div>
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
