/** Marka — jeder Seitentitel muss diesen Namen enthalten. */
export const SITE_BRAND = "Sofort Entrümpelung";

/** Vollständiger Document-Title: Marka zuerst — `Sofort Entrümpelung | Seitename` */
export function sitePageTitle(pageLabel: string): string {
  const t = pageLabel.trim();
  if (!t) return SITE_BRAND;
  return `${SITE_BRAND} | ${t}`;
}
