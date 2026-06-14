import type { ViennaDistrict } from "@/data/vienna-districts";
import { SITE_BRAND } from "@/config/site-brand";
import {
  BUSINESS_SAME_AS,
  CONTACT_BLOCK,
  CONTACT_LEGAL_NAME,
  CONTACT_MAP,
  GISA_NUMBER,
} from "@/data/site-content";
import {
  SCHEMA_BURGENLAND_CITIES,
  SCHEMA_NOE_SATELLITE_CITIES,
  SCHEMA_VIENNA_POSTAL_CODES,
} from "@/data/schema-area-served";

/** Kategorien für LocalBusiness-JSON-LD (`category`-Array). */
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

export const DEFAULT_SERVICE_CATEGORY = LOCAL_BUSINESS_CATEGORIES[1];

/** JSON-LD `@type` für den operativen Standort (Entrümpelung / Haushaltsauflösung). */
export const LOCAL_BUSINESS_SCHEMA_TYPES = ["LocalBusiness", "HomeAndConstructionBusiness"] as const;

const SERVICE_CATALOG_CATEGORY_BY_SLUG: Record<string, string> = {
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

/** Passende `category` pro Leistungs-Slug (OfferCatalog & Service-Seiten). */
export function serviceCatalogCategory(slug: string): string {
  return SERVICE_CATALOG_CATEGORY_BY_SLUG[slug] ?? DEFAULT_SERVICE_CATEGORY;
}

export function gisaPropertyValueIdentifier() {
  return {
    "@type": "PropertyValue" as const,
    propertyID: "GISA-Nummer",
    name: "Gewerbeinformationssystem Austria (GISA)",
    value: GISA_NUMBER,
  };
}

export function schemaContactPoint(telephone: string, email: string, origin: string) {
  return {
    "@type": "ContactPoint" as const,
    telephone,
    email,
    contactType: "customer service",
    areaServed: "AT",
    availableLanguage: ["de-AT", "German"],
    url: `${origin}/#kontakt-formular`,
  };
}

export function schemaOriginIds(origin: string) {
  return {
    organizationId: `${origin}/#organization`,
    businessId: `${origin}/#localbusiness`,
    areaWienId: `${origin}/#area-wien`,
    catalogId: `${origin}/#offer-catalog`,
    websiteId: `${origin}/#website`,
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

/** `@graph`-Knoten: Organisation (Marke / Rechtsträger) — verlinkt mit LocalBusiness & WebSite. */
export function organizationGraphNode(
  organizationId: string,
  logoId: string,
  logoUrl: string,
  origin: string,
  telephone: string,
) {
  return {
    "@type": "Organization" as const,
    "@id": organizationId,
    name: SITE_BRAND,
    legalName: CONTACT_LEGAL_NAME,
    url: origin,
    logo: { "@id": logoId },
    image: logoUrl,
    telephone,
    email: CONTACT_BLOCK.email,
    address: organizationPostalAddress(),
    identifier: gisaPropertyValueIdentifier(),
    contactPoint: schemaContactPoint(telephone, CONTACT_BLOCK.email, origin),
    sameAs: [...BUSINESS_SAME_AS],
    knowsLanguage: "de-AT",
  };
}

/** `@graph`-Knoten: Wien mit PLZ-Abdeckung & alternateName. */
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

/** Festpreis-Angebot — verlinkt Richtpreise, ohne irreführende Fixbeträge pro Leistung. */
export function festpreisOffer(origin: string) {
  return {
    "@type": "Offer" as const,
    url: `${origin}/preise`,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description:
      "Festpreis nach kostenloser Besichtigung — Entsorgung, An- und Abfahrt inklusive",
    priceSpecification: {
      "@type": "PriceSpecification" as const,
      priceCurrency: "EUR",
      description: "Verbindliches Angebot nach Objektbesichtigung; transparente Richtpreise online",
    },
  };
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
      ...(item.href ? { item: item.href.startsWith("http") ? item.href : `${origin}${item.href}` } : {}),
    })),
  };
}
