import type { ViennaDistrict } from "@/data/vienna-districts";

export const DEFAULT_SERVICE_CATEGORY = "Entrümpelung & Haushaltsauflösung";

export function schemaOriginIds(origin: string) {
  return {
    businessId: `${origin}/#localbusiness`,
    areaWienId: `${origin}/#area-wien`,
    catalogId: `${origin}/#offer-catalog`,
    websiteId: `${origin}/#website`,
  };
}

export function defaultAreaServed(areaWienId: string) {
  return [
    { "@id": areaWienId },
    { "@type": "AdministrativeArea" as const, name: "Niederösterreich" },
    { "@type": "AdministrativeArea" as const, name: "Burgenland" },
  ];
}

export function areaServedForSchema(
  district: ViennaDistrict | undefined,
  areaWienId: string,
  priorityRegionName?: string | null,
) {
  const tail = defaultAreaServed(areaWienId);

  if (priorityRegionName) {
    const rest = tail.filter(
      (item) => !("name" in item && item.name === priorityRegionName),
    );
    return [
      { "@type": "AdministrativeArea" as const, name: priorityRegionName },
      ...rest,
    ];
  }

  if (!district) return tail;
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
  return [priorityPlace, ...tail];
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
