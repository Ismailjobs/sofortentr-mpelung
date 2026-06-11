/**
 * VORLAGE — nicht in registry.ts eintragen, bis der Inhalt fertig ist.
 *
 * Neuen Artikel anlegen:
 * 1. Diese Datei kopieren → z. B. `was-kostet-entruempelung-wien.tsx`
 * 2. `meta` anpassen (slug = Dateiname ohne .tsx)
 * 3. Inhalt in der default-Funktion schreiben
 * 4. In `src/data/ratgeber/registry.ts` importieren & registrieren
 */
import RatgeberArticleBody, {
  RatgeberCtaBox,
  RatgeberH2,
  RatgeberInternalLink,
  RatgeberLead,
  RatgeberLi,
  RatgeberP,
  RatgeberUl,
} from "@/components/ratgeber/RatgeberArticleBody";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";

export const meta: RatgeberArticleMeta = {
  slug: "beispiel-artikel-slug",
  title: "Beispiel-Titel — Keyword hier einfügen",
  seoTitle: "Beispiel SEO-Titel mit Keyword & Jahr",
  ogTitle: "Kurzer OG-Titel für Social Sharing",
  focusKeyword: "Entrümpelung Wien",
  description:
    "Kurze Meta-Description mit Fokus-Keyword für Google (ca. 150 Zeichen).",
  excerpt: "Ein Satz für die Karte auf der Ratgeber-Übersichtsseite.",
  publishedAt: "2024-01-15",
  updatedAt: "2026-01-10",
  keywords: ["Entrümpelung Wien", "Haushaltsauflösung"],
  faq: [
    {
      question: "Beispiel-Frage für FAQ-Schema?",
      answer: "Kurze, präzise Antwort — erhöht Chancen auf Rich Results in Google.",
    },
  ],
  readingTimeMinutes: 5,
};

export default function VorlageArtikel() {
  return (
    <RatgeberArticleBody>
      <RatgeberLead>
        Der erste Absatz — fett hervorgehoben. Hier das wichtigste Keyword und die Kernaussage
        platzieren.
      </RatgeberLead>

      <RatgeberP>
        Weitere Absätze mit normalem Fließtext. Interne Links zu Leistungen stärken die
        Seitenstruktur:
      </RatgeberP>

      <RatgeberH2>Überschrift für einen Abschnitt</RatgeberH2>
      <RatgeberP>
        Mehr Inhalt … Verlinkung zur passenden Leistung:{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsentruempelung">
          Wohnungsentrümpelung
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberUl>
        <RatgeberLi>Punkt eins mit Nutzen oder Tipp</RatgeberLi>
        <RatgeberLi>Punkt zwei</RatgeberLi>
        <RatgeberLi>Punkt drei</RatgeberLi>
      </RatgeberUl>

      <RatgeberCtaBox>
        <RatgeberP>
          <strong>Kostenloses Angebot?</strong> Wir besichtigen vor Ort und nennen einen Festpreis —
          unverbindlich.
        </RatgeberP>
        <p className="mt-3">
          <RatgeberInternalLink href="/#kontakt">Jetzt Termin anfragen →</RatgeberInternalLink>
        </p>
      </RatgeberCtaBox>
    </RatgeberArticleBody>
  );
}
