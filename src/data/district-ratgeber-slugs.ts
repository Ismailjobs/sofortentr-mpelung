import { RATGEBER_PATH } from "@/data/site-content";

/**
 * Bezirks-Landing (`/entruempelung-wien-{PLZ}`) → passender Ratgeber-Slug.
 * Nur Einträge mit veröffentlichtem Ratgeber-Artikel.
 */
export const DISTRICT_RATGEBER_SLUG: Readonly<Record<string, string>> = {
  "1010": "entruempelung-1010-wien",
  "1020": "entruempelung-leopoldstadt-wien-1020",
  "1100": "entruempelung-favoriten-wien-1100",
  "1120": "entruempelung-meidling-wien-1120",
  "1160": "entruempelung-ottakring-wien-1160",
  "1210": "entruempelung-floridsdorf-wien-1210",
  "1220": "entruempelung-donaustadt-wien-1220",
  "1230": "entruempelung-liesing-wien-1230",
};

export function getDistrictRatgeberPath(zip: number): string | undefined {
  const slug = DISTRICT_RATGEBER_SLUG[String(zip)];
  return slug ? `${RATGEBER_PATH}/${slug}` : undefined;
}
