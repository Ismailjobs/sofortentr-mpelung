import { VIENNA_DISTRICTS } from "@/data/vienna-districts";

/** Alle Wiener Gemeindebezirks-PLZ für schema.org `postalCode`. */
export const SCHEMA_VIENNA_POSTAL_CODES = VIENNA_DISTRICTS.map((d) => String(d.zip));

/** Kritische Umland-Städte (NÖ) — Local SEO / GEO Targeting. */
export const SCHEMA_NOE_SATELLITE_CITIES = [
  "Mödling",
  "Baden",
  "Wiener Neustadt",
  "Schwechat",
  "Perchtoldsdorf",
  "Brunn am Gebirge",
] as const;

/** Burgenland — Einzugsgebiet Grenznähe Wien. */
export const SCHEMA_BURGENLAND_CITIES = ["Eisenstadt", "Neusiedl am See"] as const;
