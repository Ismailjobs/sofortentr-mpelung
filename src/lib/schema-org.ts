import type { ViennaDistrict } from "@/data/vienna-districts";
import {
  SCHEMA_BURGENLAND_CITIES,
  SCHEMA_NOE_SATELLITE_CITIES,
  SCHEMA_VIENNA_POSTAL_CODES,
} from "@/data/schema-area-served";

export const DEFAULT_SERVICE_CATEGORY = "Entrümpelung & Haushaltsauflösung";

export function schemaOriginIds(origin: string) {
  return {
    businessId: `${origin}/#localbusiness`,
    areaWienId: `${origin}/#area-wien`,
    catalogId: `${origin}/#offer-catalog`,
    websiteId: `${origin}/#website`,
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
 * Standard-`areaServed` für LocalBusiness, OfferCatalog-Services und Leistungsseiten.
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
