import Breadcrumbs from "@/components/Breadcrumbs";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import RatgeberCard from "@/components/ratgeber/RatgeberCard";
import RatgeberCollectionJsonLd from "@/components/ratgeber/RatgeberCollectionJsonLd";
import RatgeberHero from "@/components/ratgeber/RatgeberHero";
import { RATGEBER_ARTICLES } from "@/data/ratgeber/registry";
import { buildRatgeberIndexMetadata } from "@/lib/ratgeber-seo";

export const revalidate = 86_400;

export const metadata = buildRatgeberIndexMetadata();

export default function RatgeberIndexPage() {
  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber" },
  ];

  return (
    <>
      <RatgeberCollectionJsonLd articles={RATGEBER_ARTICLES} breadcrumbs={breadcrumbs} />
      <Header />
      <main className="bg-brand-muted">
        <RatgeberHero
          eyebrow="Wissen & Tipps"
          title="Ratgeber"
          subtitle="Antworten auf häufige Fragen zu Entrümpelung, Haushaltsauflösung, Kosten und Ablauf in Wien und Umgebung — praxisnah und verständlich."
          priority
        />

        <Breadcrumbs items={breadcrumbs} />

        <section className="py-14 sm:py-20" aria-labelledby="ratgeber-list-heading">
          <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <h2 id="ratgeber-list-heading" className="sr-only">
              Alle Ratgeber-Artikel
            </h2>

            {RATGEBER_ARTICLES.length > 0 ? (
              <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {RATGEBER_ARTICLES.map((article) => (
                  <li key={article.slug}>
                    <RatgeberCard {...article} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-2xl border border-dashed border-black/10 bg-white px-6 py-16 text-center shadow-sm ring-1 ring-black/[0.04] sm:px-10">
                <p className="text-lg font-bold text-brand-dark">Bald neue Artikel</p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                  Hier erscheinen in Kürze Ratgeber zu Entrümpelung, Kosten und Ablauf. Haben Sie bis dahin Fragen?
                  Rufen Sie uns an oder nutzen Sie das Kontaktformular.
                </p>
              </div>
            )}
          </div>
        </section>

        <ContactPanel />
        <LazyContactFormSection />
      </main>
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
