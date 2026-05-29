import type { Metadata } from "next";
import Link from "next/link";
import { SITE_BRAND, sitePageTitle } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import {
  CONTACT_BLOCK,
  CONTACT_LEGAL_NAME,
  DATENSCHUTZ_PATH,
  PHONE_DISPLAY,
} from "@/data/site-content";
import PhoneLink from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: sitePageTitle("Impressum"),
  description: `Impressum und Anbieterkennzeichnung — ${SITE_BRAND}, ${CONTACT_LEGAL_NAME}.`,
};

function siteUrlDisplay(): string {
  try {
    return getSiteOrigin().replace(/^https?:\/\//i, "");
  } catch {
    return "sofortentrumpelung.at";
  }
}

export default function ImpressumPage() {
  const web = siteUrlDisplay();
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Impressum" },
  ];

  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbListJsonLd items={breadcrumbs} id="breadcrumb-impressum" />
      <Header />
      <main className="bg-brand-muted pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8 rounded-xl border border-black/[0.06] bg-white" />
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Rechtliches</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Impressum
          </h1>

          <article className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-800 sm:text-base">
            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                Angaben gemäß § 5 E-Commerce-Gesetz (ECG)
              </h2>
              <p>
                <strong>{CONTACT_LEGAL_NAME}</strong>
                <br />
                {SITE_BRAND}
              </p>
              <p>
                {CONTACT_BLOCK.streetAddress}
                <br />
                {CONTACT_BLOCK.postalCode} {CONTACT_BLOCK.addressLocality}
                <br />
                {CONTACT_BLOCK.addressCountry === "AT" ? "Österreich" : CONTACT_BLOCK.addressCountry}
              </p>
              <p>
                Telefon:{" "}
                <PhoneLink className="font-semibold text-brand-orange underline">
                  {PHONE_DISPLAY}
                </PhoneLink>
                <br />
                E-Mail:{" "}
                <a className="font-semibold text-brand-orange underline" href={`mailto:${CONTACT_BLOCK.email}`}>
                  {CONTACT_BLOCK.email}
                </a>
                <br />
                Web:{" "}
                <a className="font-semibold text-brand-orange underline" href={getSiteOrigin()}>
                  {web}
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">Unternehmensgegenstand</h2>
              <p>
                Professionelle Entrümpelung, Haushaltsauflösungen, Räumungen und zugehörige Entsorgungsleistungen in
                Wien und Umgebung — inklusive Festpreisangeboten nach Besichtigung vor Ort.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">Geschäftszeiten</h2>
              <p>{CONTACT_BLOCK.hours}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                Aufsichtsbehörde / Gewerbebehörde
              </h2>
              <p>
                Zuständige Behörden richten sich nach dem Sitz des Unternehmens in Wien. Angaben zu GISA oder
                Gewerbeberechtigung können auf Anfrage mitgeteilt werden.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                Mitgliedschaft bei der Wirtschaftskammer
              </h2>
              <p>
                Mitglied der Wirtschaftskammer Österreich, Landesstelle Wien (WKÖ). Die anwendbare Rechtsordnung ist
                österreichisches Recht.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                Diensteanbieter sind wir gemäß § 18 Abs. 1 MedienG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">Haftung für Links</h2>
              <p>
                Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Zum
                Zeitpunkt der Verlinkung waren rechtswidrige Inhalte nicht erkennbar. Bei Bekanntwerden von
                Rechtsverletzungen werden derartige Links umgehend entfernt.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                Streitbeilegung / Online-Streitbeilegung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  className="font-semibold text-brand-orange underline"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind weder verpflichtet noch grundsätzlich bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
                österreichischen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </section>

            <section className="space-y-3">
              <p className="text-xs text-neutral-500">
                Hinweis: Dieses Impressum ist eine allgemeine Vorlage und ersetzt keine Rechtsberatung. Ergänzen Sie
                ggf. UID-Nummer, Firmenbuchdaten, GISA und Berufsbezeichnungen nach Vorgabe Ihrer Behörden.
              </p>
              <p>
                <Link href={DATENSCHUTZ_PATH} className="font-semibold text-brand-orange underline">
                  Zur Datenschutzerklärung
                </Link>
              </p>
            </section>
          </article>
        </div>
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
