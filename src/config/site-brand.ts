import type { Metadata } from "next";

/** Marka — jeder Seitentitel muss diesen Namen enthalten. */
export const SITE_BRAND = "Sofort Entrümpelung";

/**
 * Next.js `metadata.title.template` in `app/layout.tsx`.
 * Kind-Seiten setzen nur den `%s`-Teil (z. B. `title: "Preise & Fixpreis"`).
 */
export const SITE_TITLE_TEMPLATE = `${SITE_BRAND} | %s`;

/** Vollständiger Document-Title: Marka zuerst — `Sofort Entrümpelung | Seitename` */
export function sitePageTitle(pageLabel: string): string {
  const t = pageLabel.trim();
  if (!t) return SITE_BRAND;
  return `${SITE_BRAND} | ${t}`;
}

/** Root-Layout: Default-Titel + Template für alle Unterseiten. */
export function rootLayoutTitle(): NonNullable<Metadata["title"]> {
  return {
    default: sitePageTitle("Entrümpelung in Wien"),
    template: SITE_TITLE_TEMPLATE,
  };
}

/** Nur der Seitenteil — wird mit `SITE_TITLE_TEMPLATE` zum vollen `<title>`. */
export function pageTitleSegment(label: string): string {
  return label.trim();
}
