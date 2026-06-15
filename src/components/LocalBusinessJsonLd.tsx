import { getSiteOrigin } from "@/config/site-url";
import { SITE_BRAND } from "@/config/site-brand";
import { SERVICES, SERVICE_IMAGE_DIR } from "@/data/site-content";
import { getLocationBySlug } from "@/data/location-landings";
import {
  areaServedForSchema,
  homeAndConstructionBusinessGraphNode,
  organizationGraphNode,
  schemaOriginIds,
  serviceCatalogCategory,
  wienCityGraphNode,
} from "@/lib/schema-org";

const SERVICE_ENTRIES = [
  {
    slug: "hausentruempelung",
    name: "Hausentrümpelung",
    image: "hausentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Professionelle Hausentrümpelung in Wien und Umgebung — von der Besichtigung bis zur besenreinen Übergabe, Festpreis und Entsorgung inklusive.",
  },
  {
    slug: "wohnungsentruempelung",
    name: "Wohnungsentrümpelung",
    image: "wohnungsentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Wohnungsräumung und Entrümpelung in Wien — diskret, termintreu, mit verbindlichem Festpreis nach Objektbesichtigung.",
  },
  {
    slug: "messie-entruempelung",
    name: "Messie-Entrümpelung",
    image: "messie-entruempelung.webp",
    description:
      "[Beschreibung ergänzen] Sensible Messie-Situationen respektvoll entrümpeln — strukturierter Ablauf, vertrauliche Abwicklung in Wien und Umgebung.",
  },
  {
    slug: "kellerentruempelung",
    name: "Kellerentrümpelung",
    image: "kellerentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Keller und Abteile entrümpeln — klare Logistik, fachgerechte Entsorgung, Festpreisangebot nach Besichtigung.",
  },
  {
    slug: "lagerentruempelung",
    name: "Lagerentrümpelung",
    image: "lagerentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Lagerflächen und Depots in Wien entrümpeln — sortieren, abtransportieren, dokumentieren nach Vereinbarung.",
  },
  {
    slug: "garagenentruempelung",
    name: "Garagenentrümpelung",
    image: "garagenentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Garagen und Stellplätze schnell freimachen — Entsorgung inklusive, transparenter Festpreis.",
  },
  {
    slug: "dachbodenentruempelung",
    name: "Dachbodenentrümpelung",
    image: "dachbodenentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Dachböden sicher und effizient entrümpeln — Zugänge und Aufwand fließen in das Angebot ein.",
  },
  {
    slug: "bueroentruempelung",
    name: "Büroentrümpelung",
    image: "bueroentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Büro- und Gewerbeflächen diskret räumen — Datenvertraulichkeit, Entsorgung und Festpreis nach Besichtigung.",
  },
  {
    slug: "gartenentruempelung",
    name: "Gartenentrümpelung",
    image: "gartenentruempelung.webp",
    description:
      "[Beschreibung ergänzen] Gartenhäuser, Außenbereiche und Gerätezonen entrümpeln — Wien und Umgebung, Festpreis nach Aufmaß.",
  },
  {
    slug: "verlassenschaft",
    name: "Verlassenschaft entrümpeln",
    image: "verlassenschaft.webp",
    description:
      "Verlassenschaft entrümpeln und Verlassenschaftsentrümpelung in Wien — diskret, termintreu, Festpreis nach Besichtigung.",
  },
  {
    slug: "nachlass",
    name: "Nachlass entrümpeln",
    image: "nachlass.webp",
    description:
      "Nachlass entrümpeln und Nachlassentrümpelung für Erben und Verwaltungen in Wien und Umgebung.",
  },
  {
    slug: "haushaltsaufloesung",
    name: "Haushaltsauflösung",
    image: "haushaltsaufloesung.webp",
    description:
      "Haushaltsauflösung und Entrümpelung in Wien — komplett, besenrein, verbindlicher Festpreis.",
  },
  {
    slug: "wohnungsaufloesung",
    name: "Wohnungsauflösung",
    image: "wohnungsaufloesung.webp",
    description:
      "Wohnungsauflösung und Entrümpelung in Wien — termingerecht und transparent kalkuliert.",
  },
  {
    slug: "erbschaftshaus",
    name: "Erbschaftshaus entrümpeln",
    image: "erbschaftshaus.webp",
    description:
      "Erbschaftshaus entrümpeln, geerbtes Haus entrümpeln — auch Wohnung nach Todesfall, Wien und Umgebung.",
  },
  {
    slug: "wertausgleich",
    name: "Entrümpelung mit Wertausgleich",
    image: "wertausgleich.webp",
    description:
      "Entrümpelung mit Wertausgleich in Wien — verwertbare Gegenstände werden fair angerechnet.",
  },
  {
    slug: "ankauf",
    name: "Entrümpelung mit Ankauf",
    image: "ankauf.webp",
    description:
      "Entrümpelung mit Ankauf von Antiquitäten, Schmuck, Kameras und Altwaren in Wien.",
  },
] as const;

function serviceDescriptionForSchema(raw: string): string {
  return raw.replace(/^\[Beschreibung ergänzen\]\s*/i, "").trim();
}

function catalogServiceType(slug: string): string {
  return SERVICES.find((s) => s.id === slug)?.schemaServiceType ?? serviceCatalogCategory(slug);
}

export type LocalBusinessJsonLdProps = {
  /** Lokations-Landing (Bezirk oder Bundesland) → priorisiert `areaServed`. */
  priorityLocationSlug?: string | null;
};

/**
 * JSON-LD: Organization + HomeAndConstructionBusiness + OfferCatalog + WebSite (@graph).
 * Alle Schema-Bausteine werden zentral aus `@/lib/schema-org` bezogen.
 */
export default function LocalBusinessJsonLd({ priorityLocationSlug = null }: LocalBusinessJsonLdProps) {
  const origin = getSiteOrigin();
  const location = priorityLocationSlug ? getLocationBySlug(priorityLocationSlug) : undefined;
  const priorityDistrict = location?.kind === "district" ? location.district : undefined;
  const priorityRegionName = location?.kind === "region" ? location.region.name : null;

  const { organizationId, businessId, catalogId, areaWienId, websiteId } = schemaOriginIds(origin);
  const logoUrl = `${origin}/sofort-logo.webp`;
  const logoId = `${origin}/#logo`;
  const areaServed = areaServedForSchema(priorityDistrict, areaWienId, priorityRegionName);

  const itemListElement = SERVICE_ENTRIES.map((s, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Service" as const,
      "@id": `${origin}/leistungen/${s.slug}#service`,
      name: s.name,
      description: serviceDescriptionForSchema(s.description),
      url: `${origin}/leistungen/${s.slug}`,
      image: `${origin}${SERVICE_IMAGE_DIR}/${s.image}`,
      serviceType: catalogServiceType(s.slug),
      category: serviceCatalogCategory(s.slug),
      provider: { "@id": businessId },
      areaServed,
    },
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationGraphNode(organizationId, logoId, logoUrl, origin),
      homeAndConstructionBusinessGraphNode({
        origin,
        businessId,
        organizationId,
        catalogId,
        logoId,
        logoUrl,
        areaServed,
      }),
      wienCityGraphNode(areaWienId),
      {
        "@type": "OfferCatalog" as const,
        "@id": catalogId,
        name: "Entrümpelungsleistungen",
        description:
          "Festpreis-Entrümpelung und Haushaltsauflösung — alle Leistungen mit verbindlichem Angebot nach Besichtigung.",
        itemListElement,
      },
      {
        "@type": "WebSite" as const,
        "@id": websiteId,
        url: origin,
        name: SITE_BRAND,
        inLanguage: "de-AT",
        publisher: { "@id": organizationId },
        about: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph, null, 2) }}
    />
  );
}
