import type { ViennaDistrict } from "@/data/vienna-districts";
import { SITE_BRAND } from "@/config/site-brand";
import {
  BUSINESS_SAME_AS,
  CONTACT_BLOCK,
  CONTACT_LEGAL_NAME,
  CONTACT_MAP,
  GISA_NUMBER,
  GOOGLE_AGGREGATE_RATING,
  OPENING_HOURS_SCHEMA_SPEC,
  OPENING_HOURS_TEXT_LINE,
  PHONE_TEL_NUMBER,
} from "@/data/site-content";
import {
  SCHEMA_BURGENLAND_CITIES,
  SCHEMA_NOE_SATELLITE_CITIES,
  SCHEMA_VIENNA_POSTAL_CODES,
} from "@/data/schema-area-served";

// ─── Typen & Konstanten (Single Source of Truth) ─────────────────────────────

/** Kategorien für HomeAndConstructionBusiness-JSON-LD (`category`-Array). */
export const LOCAL_BUSINESS_CATEGORIES = [
  "Räumungsservice",
  "Entrümpelungsservice",
  "Haushaltsauflösung",
  "Sperrmüllabholung",
  "Entsorgungsservice",
  "Wohnungsauflösung",
  "Wohnungsentrümpelung",
  "Hausentrümpelung",
  "Kellerentrümpelung",
  "Dachbodenentrümpelung",
  "Garagenentrümpelung",
  "Lagerentrümpelung",
  "Büroentrümpelung",
  "Gartenentrümpelung",
  "Messie Entrümpelung",
  "Verlassenschaftsentrümpelung",
  "Nachlass Entrümpelung",
  "Erbschaftshaus Entrümpelung",
  "Wertausgleich Entrümpelung",
  "Altwaren Ankauf",
] as const;

export type LocalBusinessCategory = (typeof LOCAL_BUSINESS_CATEGORIES)[number];

export const DEFAULT_SERVICE_CATEGORY: LocalBusinessCategory = LOCAL_BUSINESS_CATEGORIES[1];

/** JSON-LD `@type` für den operativen Standort — zentral verwaltet. */
export const LOCAL_BUSINESS_SCHEMA_TYPES = ["LocalBusiness", "HomeAndConstructionBusiness"] as const;

export type LocalBusinessSchemaType = (typeof LOCAL_BUSINESS_SCHEMA_TYPES)[number];

const SERVICE_CATALOG_CATEGORY_BY_SLUG: Record<string, LocalBusinessCategory | string> = {
  hausentruempelung: "Hausentrümpelung",
  wohnungsentruempelung: "Wohnungsentrümpelung",
  "messie-entruempelung": "Messie Entrümpelung",
  kellerentruempelung: "Kellerentrümpelung",
  lagerentruempelung: "Lagerentrümpelung",
  garagenentruempelung: "Garagenentrümpelung",
  dachbodenentruempelung: "Dachbodenentrümpelung",
  bueroentruempelung: "Büroentrümpelung",
  gartenentruempelung: "Gartenentrümpelung",
  verlassenschaft: "Verlassenschaftsentrümpelung",
  nachlass: "Nachlass Entrümpelung",
  haushaltsaufloesung: "Haushaltsauflösung",
  wohnungsaufloesung: "Wohnungsauflösung",
  erbschaftshaus: "Erbschaftshaus Entrümpelung",
  wertausgleich: "Wertausgleich Entrümpelung",
  ankauf: "Altwaren Ankauf",
};

// ─── IDs & Hilfsfunktionen ───────────────────────────────────────────────────

export function schemaOriginIds(origin: string) {
  return {
    organizationId: `${origin}/#organization`,
    businessId: `${origin}/#localbusiness`,
    areaWienId: `${origin}/#area-wien`,
    catalogId: `${origin}/#offer-catalog`,
    websiteId: `${origin}/#website`,
  } as const;
}

/** E.164-Telefonnummer für Schema.org (`+4368181130962`). */
export function schemaTelephoneE164(): string {
  return `+${PHONE_TEL_NUMBER}`;
}

/** Passende `category` pro Leistungs-Slug (OfferCatalog & Service-Seiten). */
export function serviceCatalogCategory(slug: string): string {
  const exact = SERVICE_CATALOG_CATEGORY_BY_SLUG[slug];
  if (exact) return exact;
  if (/keller/i.test(slug)) return "Kellerentrümpelung";
  if (/^haus/i.test(slug) || slug === "haus") return "Hausentrümpelung";
  return DEFAULT_SERVICE_CATEGORY;
}

/** GISA-Sicilnummer — Organization & HomeAndConstructionBusiness. */
export function gisaPropertyValueIdentifier() {
  return {
    "@type": "PropertyValue" as const,
    name: "GISA-Nr",
    value: GISA_NUMBER,
  };
}

/** Kontaktpunkt — HomeAndConstructionBusiness & Organization. */
export function schemaContactPoint() {
  return {
    "@type": "ContactPoint" as const,
    telephone: schemaTelephoneE164(),
    contactType: "customer service",
    availableLanguage: ["German", "English"] as const,
  };
}

/** Festpreis-Signal auf Business-Ebene (`makesOffer`). */
export function businessMakesOffer(origin: string) {
  return {
    "@type": "Offer" as const,
    name: "Festpreis-Angebot",
    url: `${origin}/preise`,
  };
}

/** Erweitertes Angebot für einzelne Service-Seiten (`offers`). */
export function festpreisOffer(origin: string) {
  return {
    ...businessMakesOffer(origin),
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description:
      "Festpreis nach kostenloser Besichtigung — Entsorgung, An- und Abfahrt inklusive",
    priceSpecification: {
      "@type": "PriceSpecification" as const,
      priceCurrency: "EUR",
      description:
        "Verbindliches Angebot nach Objektbesichtigung; transparente Richtpreise online",
    },
  };
}

export function organizationPostalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: CONTACT_BLOCK.streetAddress,
    postalCode: CONTACT_BLOCK.postalCode,
    addressLocality: CONTACT_BLOCK.addressLocality,
    addressRegion: CONTACT_BLOCK.addressRegion,
    addressCountry: CONTACT_BLOCK.addressCountry,
  };
}

// ─── @graph-Knoten-Builder ───────────────────────────────────────────────────

/** Organisation (Marke / Rechtsträger). */
export function organizationGraphNode(
  organizationId: string,
  logoId: string,
  logoUrl: string,
  origin: string,
) {
  return {
    "@type": "Organization" as const,
    "@id": organizationId,
    name: SITE_BRAND,
    legalName: CONTACT_LEGAL_NAME,
    url: origin,
    logo: { "@id": logoId },
    image: logoUrl,
    telephone: schemaTelephoneE164(),
    email: CONTACT_BLOCK.email,
    address: organizationPostalAddress(),
    identifier: gisaPropertyValueIdentifier(),
    contactPoint: schemaContactPoint(),
    sameAs: [...BUSINESS_SAME_AS],
    knowsLanguage: "de-AT",
  };
}

export type HomeAndConstructionBusinessGraphParams = {
  origin: string;
  businessId: string;
  organizationId: string;
  catalogId: string;
  logoId: string;
  logoUrl: string;
  areaServed: ReturnType<typeof areaServedForSchema>;
};

/** HomeAndConstructionBusiness — operativer Standort mit allen Pflichtsignalen. */
export function homeAndConstructionBusinessGraphNode({
  origin,
  businessId,
  organizationId,
  catalogId,
  logoId,
  logoUrl,
  areaServed,
}: HomeAndConstructionBusinessGraphParams) {
  return {
    "@type": [...LOCAL_BUSINESS_SCHEMA_TYPES],
    "@id": businessId,
    parentOrganization: { "@id": organizationId },
    name: SITE_BRAND,
    legalName: CONTACT_LEGAL_NAME,
    description:
      "Entrümpelung und Haushaltsauflösung in Wien — Festpreis nach Besichtigung. Was kostet eine Entrümpelung? Wohnungsauflösung, Messie Wohnung reinigen & Entrümpelung nach Todesfall.",
    url: `${origin}/`,
    image: [logoUrl],
    logo: {
      "@type": "ImageObject" as const,
      "@id": logoId,
      url: logoUrl,
      contentUrl: logoUrl,
      width: 620,
      height: 150,
      caption: SITE_BRAND,
    },
    telephone: schemaTelephoneE164(),
    email: CONTACT_BLOCK.email,
    contactPoint: schemaContactPoint(),
    hasMap: CONTACT_MAP.openHref,
    identifier: gisaPropertyValueIdentifier(),
    isAcceptingNewClients: true,
    makesOffer: businessMakesOffer(origin),
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Barzahlung, Banküberweisung, Debitkarte, Kreditkarte",
    knowsLanguage: "de-AT",
    category: [...LOCAL_BUSINESS_CATEGORIES],
    address: organizationPostalAddress(),
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: CONTACT_BLOCK.geo.latitude,
      longitude: CONTACT_BLOCK.geo.longitude,
    },
    areaServed,
    openingHours: OPENING_HOURS_TEXT_LINE,
    openingHoursSpecification: OPENING_HOURS_SCHEMA_SPEC.map((row) => ({
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [...row.dayOfWeek],
      opens: row.opens,
      closes: row.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating" as const,
      ratingValue: GOOGLE_AGGREGATE_RATING.ratingValue,
      reviewCount: GOOGLE_AGGREGATE_RATING.reviewCount,
      bestRating: GOOGLE_AGGREGATE_RATING.bestRating,
      worstRating: GOOGLE_AGGREGATE_RATING.worstRating,
    },
    sameAs: [...BUSINESS_SAME_AS],
    hasOfferCatalog: { "@id": catalogId },
  };
}

/** Wien mit PLZ-Abdeckung & alternateName. */
export function wienCityGraphNode(areaWienId: string) {
  return {
    "@type": "City" as const,
    "@id": areaWienId,
    name: "Wien",
    alternateName: "Vienna",
    postalCode: [...SCHEMA_VIENNA_POSTAL_CODES],
    containedInPlace: {
      "@type": "AdministrativeArea" as const,
      name: "Wien",
    },
  };
}

function satelliteCity(name: string, region: "Niederösterreich" | "Burgenland") {
  return {
    "@type": "City" as const,
    name,
    containedInPlace: {
      "@type": "AdministrativeArea" as const,
      name: region,
    },
  };
}

/**
 * Standard-`areaServed` für HomeAndConstructionBusiness, OfferCatalog-Services und Leistungsseiten.
 * Wien wird per `@id` referenziert (Details im `@graph`-Knoten `#area-wien`).
 */
export function baseAreaServed(areaWienId: string) {
  return [
    { "@id": areaWienId },
    { "@type": "AdministrativeArea" as const, name: "Niederösterreich" },
    { "@type": "AdministrativeArea" as const, name: "Burgenland" },
    ...SCHEMA_NOE_SATELLITE_CITIES.map((name) => satelliteCity(name, "Niederösterreich")),
    ...SCHEMA_BURGENLAND_CITIES.map((name) => satelliteCity(name, "Burgenland")),
    { "@type": "Country" as const, name: "Österreich" },
  ];
}

/** @deprecated Alias — bitte `baseAreaServed` verwenden. */
export const defaultAreaServed = baseAreaServed;

export function areaServedForSchema(
  district: ViennaDistrict | undefined,
  areaWienId: string,
  priorityRegionName?: string | null,
) {
  const base = baseAreaServed(areaWienId);

  if (priorityRegionName) {
    const rest = base.filter(
      (item) => !("name" in item && item.name === priorityRegionName),
    );
    return [
      { "@type": "AdministrativeArea" as const, name: priorityRegionName },
      ...rest,
    ];
  }

  if (!district) return base;

  const priorityPlace = {
    "@type": "Place" as const,
    name: `${district.name} (PLZ ${district.zip}, Wien)`,
    containedInPlace: { "@id": areaWienId },
    address: {
      "@type": "PostalAddress" as const,
      postalCode: String(district.zip),
      addressLocality: "Wien",
      addressRegion: "Wien",
      addressCountry: "AT",
    },
  };
  return [priorityPlace, ...base];
}

export type SchemaBreadcrumbItem = {
  label: string;
  href?: string;
};

export function breadcrumbListSchema(
  origin: string,
  items: SchemaBreadcrumbItem[],
  id?: string,
) {
  return {
    "@type": "BreadcrumbList" as const,
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: item.href.startsWith("http") ? item.href : `${origin}${item.href}` }
        : {}),
    })),
  };
}
