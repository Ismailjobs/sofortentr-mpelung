import type { ComponentType } from "react";
import { RATGEBER_PATH } from "@/data/site-content";
import type { RatgeberArticleEntry, RatgeberArticleMeta } from "./types";

export { RATGEBER_PATH };

/**
 * Neue Artikel hinzufügen:
 * 1. Datei unter `src/components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. `meta` exportieren + default-Komponente mit Inhalt
 * 3. Unten importieren und in `RATGEBER_ARTICLES` eintragen
 */

import Ma48VsEntruempelungsfirmaWien, {
  meta as ma48VsEntruempelungsfirmaWienMeta,
} from "@/components/ratgeber/articles/ma-48-vs-entruempelungsfirma-wien";
import WasKostetEntruempelungWien, {
  meta as wasKostetEntruempelungWienMeta,
} from "@/components/ratgeber/articles/was-kostet-entruempelung-wien";

function register(meta: RatgeberArticleMeta, Component: ComponentType): RatgeberArticleEntry {
  return { ...meta, Component };
}

const _entries: RatgeberArticleEntry[] = [
  register(ma48VsEntruempelungsfirmaWienMeta, Ma48VsEntruempelungsfirmaWien),
  register(wasKostetEntruempelungWienMeta, WasKostetEntruempelungWien),
];

/** Alle veröffentlichten Ratgeber — neueste zuerst sortiert. */
export const RATGEBER_ARTICLES: RatgeberArticleEntry[] = [..._entries].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
);

export function getRatgeberArticle(slug: string): RatgeberArticleEntry | undefined {
  return RATGEBER_ARTICLES.find((a) => a.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((a) => a.slug);
}

export function getRelatedRatgeberArticles(currentSlug: string, limit = 3): RatgeberArticleEntry[] {
  return RATGEBER_ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, limit);
}

/** Hero & OG — gleiches Bild wie Startseite. */
export const RATGEBER_HERO_IMAGE = "/hero.webp";

export const RATGEBER_HERO_IMAGE_ALT =
  "Professionelle Entrümpelung in Wien — Sofort Entrümpelung";
