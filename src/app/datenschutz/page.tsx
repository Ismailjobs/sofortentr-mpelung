import type { Metadata } from "next";
import Link from "next/link";
import { sitePageTitle } from "@/config/site-brand";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { CONTACT_BLOCK } from "@/data/site-content";

export const metadata: Metadata = {
  title: sitePageTitle("Datenschutz"),
  description: "Hinweise zur Verarbeitung personenbezogener Daten bei Sofort Entrümpelung.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-muted pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Rechtliches</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Datenschutz
          </h1>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
            <p>
              Wir verarbeiten personenbezogene Daten nur im Rahmen der geltenden Datenschutzgesetze — insbesondere bei
              Anfragen über unser Kontaktformular Name, E-Mail, optional Telefon und Ihre Nachricht.
            </p>
            <p>
              Eine ausführliche Datenschutzerklärung können Sie hier fortlaufend ergänzen. Bei Fragen erreichen Sie uns
              unter{" "}
              <a href={`mailto:${CONTACT_BLOCK.email}`} className="font-semibold text-brand-orange underline">
                {CONTACT_BLOCK.email}
              </a>
              .
            </p>
            <p>
              <Link href="#kontakt-formular" className="font-semibold text-brand-orange underline">
                Zum Kontaktformular
              </Link>
            </p>
          </div>
        </div>
      </main>
      <ContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
