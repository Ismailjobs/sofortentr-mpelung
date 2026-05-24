import { getSiteOrigin } from "@/config/site-url";
import { SITE_BRAND } from "@/config/site-brand";
import {
  CONTACT_BLOCK,
  CONTACT_LEGAL_NAME,
  OPENING_HOURS_SCHEMA_SPEC,
  OPENING_HOURS_TEXT_LINE,
  PHONE_DISPLAY,
  GOOGLE_AGGREGATE_RATING,
  SERVICES,
  SERVICE_IMAGE_DIR,
} from "@/data/site-content";
import { getDistrictBySlug } from "@/data/vienna-districts";
import {
  areaServedForSchema,
  DEFAULT_SERVICE_CATEGORY,
  schemaOriginIds,
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

function telephoneE164(): string {
  return PHONE_DISPLAY.replace(/\s+/g, "").replace(/^\+/, "+");
}

/** Platzhalter aus Service-Beschreibungen entfernen (Rich Results / Lesbarkeit). */
function serviceDescriptionForSchema(raw: string): string {
  return raw.replace(/^\[Beschreibung ergänzen\]\s*/i, "").trim();
}

function catalogServiceType(slug: string): string {
  return SERVICES.find((s) => s.id === slug)?.schemaServiceType ?? DEFAULT_SERVICE_CATEGORY;
}

export type LocalBusinessJsonLdProps = {
  /** Middleware + Root-Layout: Bezirks-Landing → PLZ/Ort zuerst in `areaServed`. */
  priorityDistrictSlug?: string | null;
};

/**
 * JSON-LD: LocalBusiness + OfferCatalog + WebSite (@graph).
 * Auf Bezirksseiten priorisiert `areaServed` den jeweiligen Bezirk (Header `x-vienna-district-slug`).
 */
export default function LocalBusinessJsonLd({ priorityDistrictSlug = null }: LocalBusinessJsonLdProps) {
  const origin = getSiteOrigin();
  const priorityDistrict = priorityDistrictSlug ? getDistrictBySlug(priorityDistrictSlug) : undefined;

  const { businessId, catalogId, areaWienId, websiteId } = schemaOriginIds(origin);
  const logoUrl = `${origin}/sofort-logo.webp`;
  const logoId = `${origin}/#logo`;

  const areaServed = areaServedForSchema(priorityDistrict, areaWienId);

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
      category: DEFAULT_SERVICE_CATEGORY,
      provider: { "@id": businessId },
      areaServed,
    },
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"] as const,
        "@id": businessId,
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
        telephone: telephoneE164(),
        email: CONTACT_BLOCK.email,
        priceRange: "$$",
        currenciesAccepted: "EUR",
        paymentAccepted: "Barzahlung, Banküberweisung, Debitkarte, Kreditkarte",
        knowsLanguage: "de-AT",
        address: {
          "@type": "PostalAddress" as const,
          streetAddress: CONTACT_BLOCK.streetAddress,
          postalCode: CONTACT_BLOCK.postalCode,
          addressLocality: CONTACT_BLOCK.addressLocality,
          addressRegion: CONTACT_BLOCK.addressRegion,
          addressCountry: CONTACT_BLOCK.addressCountry,
        },
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
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "City" as const,
        "@id": areaWienId,
        name: "Wien",
        containedInPlace: { "@type": "Country" as const, name: "Österreich" },
      },
      {
        "@type": "OfferCatalog" as const,
        "@id": catalogId,
        name: "Entrümpelungsleistungen",
        description: "Festpreis-Entrümpelung und Haushaltsauflösung — alle Leistungen mit verbindlichem Angebot nach Besichtigung.",
        itemListElement,
      },
      {
        "@type": "WebSite" as const,
        "@id": websiteId,
        url: origin,
        name: SITE_BRAND,
        inLanguage: "de-AT",
        publisher: { "@id": businessId },
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
