import type { ServiceCardData } from "@/data/site-content";
import { SERVICES } from "@/data/site-content";

const WERTAUSGLEICH_ID = "wertausgleich";

/** Pro Leistungsseite zwei thematisch passende Slugs — Wertausgleich wird immer ergänzt. */
const RELATED_BY_SLUG: Record<string, string[]> = {
  hausentruempelung: ["dachbodenentruempelung", "kellerentruempelung"],
  wohnungsentruempelung: ["haushaltsaufloesung", "wohnungsaufloesung"],
  kellerentruempelung: ["garagenentruempelung", "hausentruempelung"],
  lagerentruempelung: ["bueroentruempelung", "kellerentruempelung"],
  bueroentruempelung: ["lagerentruempelung", "haushaltsaufloesung"],
  garagenentruempelung: ["kellerentruempelung", "gartenentruempelung"],
  dachbodenentruempelung: ["hausentruempelung", "kellerentruempelung"],
  "messie-entruempelung": ["wohnungsentruempelung", "nachlass"],
  gartenentruempelung: ["garagenentruempelung", "hausentruempelung"],
  verlassenschaft: ["nachlass", "erbschaftshaus"],
  nachlass: ["verlassenschaft", "erbschaftshaus"],
  haushaltsaufloesung: ["wohnungsaufloesung", "nachlass"],
  wohnungsaufloesung: ["haushaltsaufloesung", "wohnungsentruempelung"],
  erbschaftshaus: ["nachlass", "haushaltsaufloesung"],
  wertausgleich: ["ankauf", "haushaltsaufloesung"],
  ankauf: ["erbschaftshaus", "nachlass"],
};

const FALLBACK_RELATED = ["haushaltsaufloesung", "wohnungsentruempelung"] as const;

export function getRelatedServicesForSlug(currentSlug: string): ServiceCardData[] {
  const ordered: string[] = [];

  if (currentSlug !== WERTAUSGLEICH_ID) {
    ordered.push(WERTAUSGLEICH_ID);
  }

  const extras = RELATED_BY_SLUG[currentSlug] ?? [...FALLBACK_RELATED];
  for (const id of extras) {
    if (id !== currentSlug && !ordered.includes(id)) {
      ordered.push(id);
    }
  }

  if (ordered.length < 3) {
    for (const service of SERVICES) {
      if (service.id === currentSlug || ordered.includes(service.id)) continue;
      ordered.push(service.id);
      if (ordered.length >= 3) break;
    }
  }

  return ordered
    .slice(0, 3)
    .map((id) => SERVICES.find((s) => s.id === id))
    .filter((s): s is ServiceCardData => Boolean(s));
}
