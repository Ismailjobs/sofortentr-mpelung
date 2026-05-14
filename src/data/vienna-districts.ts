export type ViennaDistrict = {
  id: number;
  zip: number;
  name: string;
  /** URL-Segment, z. B. entruempelung-wien-1010 */
  slug: string;
};

/**
 * Alle 23 Wiener Gemeindebezirke — PLZ, Name, programmatisches URL-Segment.
 * Slug-Schema: entruempelung-wien-{PLZ}
 */
export const VIENNA_DISTRICTS: readonly ViennaDistrict[] = [
  { id: 1, zip: 1010, name: "Innere Stadt", slug: "entruempelung-wien-1010" },
  { id: 2, zip: 1020, name: "Leopoldstadt", slug: "entruempelung-wien-1020" },
  { id: 3, zip: 1030, name: "Landstraße", slug: "entruempelung-wien-1030" },
  { id: 4, zip: 1040, name: "Wieden", slug: "entruempelung-wien-1040" },
  { id: 5, zip: 1050, name: "Margareten", slug: "entruempelung-wien-1050" },
  { id: 6, zip: 1060, name: "Mariahilf", slug: "entruempelung-wien-1060" },
  { id: 7, zip: 1070, name: "Neubau", slug: "entruempelung-wien-1070" },
  { id: 8, zip: 1080, name: "Josefstadt", slug: "entruempelung-wien-1080" },
  { id: 9, zip: 1090, name: "Alsergrund", slug: "entruempelung-wien-1090" },
  { id: 10, zip: 1100, name: "Favoriten", slug: "entruempelung-wien-1100" },
  { id: 11, zip: 1110, name: "Simmering", slug: "entruempelung-wien-1110" },
  { id: 12, zip: 1120, name: "Meidling", slug: "entruempelung-wien-1120" },
  { id: 13, zip: 1130, name: "Hietzing", slug: "entruempelung-wien-1130" },
  { id: 14, zip: 1140, name: "Penzing", slug: "entruempelung-wien-1140" },
  { id: 15, zip: 1150, name: "Rudolfsheim-Fünfhaus", slug: "entruempelung-wien-1150" },
  { id: 16, zip: 1160, name: "Ottakring", slug: "entruempelung-wien-1160" },
  { id: 17, zip: 1170, name: "Hernals", slug: "entruempelung-wien-1170" },
  { id: 18, zip: 1180, name: "Währing", slug: "entruempelung-wien-1180" },
  { id: 19, zip: 1190, name: "Döbling", slug: "entruempelung-wien-1190" },
  { id: 20, zip: 1200, name: "Brigittenau", slug: "entruempelung-wien-1200" },
  { id: 21, zip: 1210, name: "Floridsdorf", slug: "entruempelung-wien-1210" },
  { id: 22, zip: 1220, name: "Donaustadt", slug: "entruempelung-wien-1220" },
  { id: 23, zip: 1230, name: "Liesing", slug: "entruempelung-wien-1230" },
] as const;

const slugToDistrict = new Map<string, ViennaDistrict>(
  VIENNA_DISTRICTS.map((d) => [d.slug, d]),
);

export function getDistrictBySlug(slug: string): ViennaDistrict | undefined {
  return slugToDistrict.get(slug);
}

export function isViennaDistrictSlug(slug: string): boolean {
  return slugToDistrict.has(slug);
}
