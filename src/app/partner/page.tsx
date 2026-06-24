import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { partnerHost, SITE_PARTNERS } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Partner & Kooperationen in Österreich",
  description:
    "Unsere Partner für Entrümpelung, Räumung und Umzug in Österreich — Objekträumung, Swift Umzug, Oberösterreich, Steiermark und Salzburg. Verlässliche regionale Anlaufstellen.",
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

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-800 sm:text-base">
            <p>
              Für anspruchsvolle Räumungen und Entrümpelungen arbeiten wir mit erfahrenen Spezialisten in ganz
              Österreich zusammen — dieselben Qualitätsansprüche: transparente Abläufe, faire Festpreise nach
              Besichtigung und zuverlässige Entsorgung.
            </p>

            {SITE_PARTNERS.map((partner) => (
              <section key={partner.url} className="space-y-2">
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                  {partner.name}
                  <span className="ml-2 text-sm font-semibold normal-case tracking-normal text-brand-orange">
                    ({partner.region})
                  </span>
                </h2>
                <p>{partner.description}</p>
                <p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-orange underline decoration-brand-orange/50 underline-offset-4 transition hover:decoration-brand-orange"
                  >
                    {partnerHost(partner.url)}
                  </a>
                </p>
              </section>
            ))}

            <p className="text-neutral-600">
              Sie betreiben einen Entrümpelungs- oder Umzugsservice in Österreich und möchten Partner werden?{" "}
              <a href="/#kontakt" className="font-semibold text-brand-orange underline">
                Kontaktieren Sie uns
              </a>
              .
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
