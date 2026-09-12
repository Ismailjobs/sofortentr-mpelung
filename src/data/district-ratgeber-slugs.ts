import { RATGEBER_PATH } from "@/data/site-content";

/**
 * Bezirks-Landing (`/entruempelung-wien-{PLZ}`) → passender Ratgeber-Slug.
 * Nur Einträge mit veröffentlichtem Ratgeber-Artikel.
 */
export const DISTRICT_RATGEBER_SLUG: Readonly<Record<string, string>> = {
  "1010": "entruempelung-1010-wien",
  "1020": "entruempelung-leopoldstadt-wien-1020",
  "1030": "entruempelung-landstrasse-wien-1030",
  "1040": "entruempelung-wieden-wien-1040",
  "1050": "entruempelung-margareten-wien-1050",
  "1060": "entruempelung-mariahilf-wien-1060",
  "1070": "entruempelung-neubau-wien-1070",
  "1080": "entruempelung-josefstadt-wien-1080",
  "1090": "entruempelung-alsergrund-wien-1090",
  "1100": "entruempelung-favoriten-wien-1100",
  "1110": "entruempelung-simmering-wien-1110",
  "1120": "entruempelung-meidling-wien-1120",
  "1130": "entruempelung-hietzing-wien-1130",
  "1140": "entruempelung-penzing-wien-1140",
  "1150": "entruempelung-rudolfsheim-fuenfhaus-wien-1150",
  "1160": "entruempelung-ottakring-wien-1160",
  "1170": "entruempelung-hernals-wien-1170",
  "1180": "entruempelung-waehring-wien-1180",
  "1190": "entruempelung-doebling-wien-1190",
  "1200": "entruempelung-brigittenau-wien-1200",
  "1210": "entruempelung-floridsdorf-wien-1210",
  "1220": "entruempelung-donaustadt-wien-1220",
  "1230": "entruempelung-liesing-wien-1230",
};

export function getDistrictRatgeberPath(zip: number): string | undefined {
  const slug = DISTRICT_RATGEBER_SLUG[String(zip)];
  return slug ? `${RATGEBER_PATH}/${slug}` : undefined;
}
