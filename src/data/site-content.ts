import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  Calculator,
  Clock,
  HeartHandshake,
  Home,
  Shield,
  Truck,
  Users,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const PHONE_DISPLAY = "+43 681 81130962";
export const PHONE_TEL_HREF = "tel:+4368181130962";

/** Rechtliche Seiten — z. B. Formular „Hinweis zum Datenschutz“ */
export const DATENSCHUTZ_PATH = "/datenschutz";

export const IMPRESSUM_PATH = "/impressum";

export const NAV_LINKS: NavLink[] = [
  { label: "Startseite", href: "/#start" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Preise", href: "/preise" },
  { label: "Kontakt", href: "/#kontakt" },
];

export type TrustItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: Clock,
    title: "Kurzfristige Termine",
    description: "Auch wenn es schnell gehen muss — wir sind flexibel vor Ort.",
  },
  {
    icon: Shield,
    title: "Fixpreis Garantie",
    description: "Transparente Festpreise nach Besichtigung, ohne Überraschungen.",
  },
  {
    icon: Truck,
    title: "Entsorgung inklusive",
    description: "Fachgerechte Abfuhr & Entsorgung — Sie müssen sich um nichts kümmern.",
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    description: "Schnell, umsichtig und respektvoll gegenüber Nachbarn & Liegenschaft.",
  },
  {
    icon: BadgeCheck,
    title: "100 % Service",
    description: "Zuverlässiger Ablauf von der ersten Anfrage bis zur Übergabe.",
  },
];

export type ServiceCardData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

/**
 * Leistungs-Bilder unter /public — je Service genau eine Datei, kein Bild wird zwischen Seiten geteilt.
 * Namensschema: URL-Slug + ".webp" (ASCII, wie in der Adresszeile).
 *
 * Erwartete Dateien (bitte selbst ablegen, keine automatischen Kopien im Projekt):
 * - hausentruempelung.webp
 * - wohnungsentruempelung.webp
 * - kellerentruempelung.webp
 * - lagerentruempelung.webp
 * - bueroentruempelung.webp
 * - garagenentruempelung.webp
 * - dachbodenentruempelung.webp
 * - messie-entruempelung.webp
 * - gartenentruempelung.webp
 */
export const SERVICE_LEISTUNG_IMAGE = {
  hausentruempelung: "/hausentruempelung.webp",
  wohnungsentruempelung: "/wohnungsentruempelung.webp",
  kellerentruempelung: "/kellerentruempelung.webp",
  lagerentruempelung: "/lagerentruempelung.webp",
  bueroentruempelung: "/bueroentruempelung.webp",
  garagenentruempelung: "/garagenentruempelung.webp",
  dachbodenentruempelung: "/dachbodenentruempelung.webp",
  "messie-entruempelung": "/messie-entruempelung.webp",
  gartenentruempelung: "/gartenentruempelung.webp",
} as const;

export const SERVICES: ServiceCardData[] = [
  {
    id: "hausentruempelung",
    title: "Hausentrümpelung",
    description: "Komplette Entrümpelung von Einfamilienhäusern und Mehrparteienhäusern.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.hausentruempelung,
    imageAlt: "Hausentrümpelung durch ein professionelles Team",
    icon: Building2,
  },
  {
    id: "wohnungsentruempelung",
    title: "Wohnungs​entrümpelung",
    description: "Schnelle und besenreine Entrümpelung von Wohnungen jeder Größe.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.wohnungsentruempelung,
    imageAlt:
      "Team bei der Wohnungsentrümpelung — Möbel und Kartons zum Transport",
    icon: Home,
  },
  {
    id: "kellerentruempelung",
    title: "Kellerentrümpelung",
    description: "Keller, Abteile und Nebenräume werden fachgerecht entrümpelt und entsorgt.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.kellerentruempelung,
    imageAlt: "Entrümpelter Kellerraum",
    icon: Boxes,
  },
  {
    id: "lagerentruempelung",
    title: "Lagerentrümpelung",
    description: "Lagerflächen und Depots frei machen, sortieren und sauber übergeben.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.lagerentruempelung,
    imageAlt: "Entrümpelung einer Lagerfläche",
    icon: Truck,
  },
  {
    id: "bueroentruempelung",
    title: "Büroentrümpelung",
    description: "Diskrete Entrümpelung von Büroflächen inklusive geordneter Entsorgung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.bueroentruempelung,
    imageAlt: "Entrümpelung einer Bürofläche",
    icon: Shield,
  },
  {
    id: "garagenentruempelung",
    title: "Garagenentrümpelung",
    description: "Garagen und Stellflächen schnell räumen und wieder nutzbar machen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.garagenentruempelung,
    imageAlt: "Entrümpelte Garage",
    icon: BadgeCheck,
  },
  {
    id: "dachbodenentruempelung",
    title: "Dachbodenentrümpelung",
    description: "Dachböden sicher, sorgfältig und effizient entrümpeln lassen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.dachbodenentruempelung,
    imageAlt: "Entrümpelter Dachboden",
    icon: Clock,
  },
  {
    id: "messie-entruempelung",
    title: "Messie-Entrümpelung",
    description: "Diskrete und respektvolle Entrümpelung in sensiblen Situationen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE["messie-entruempelung"],
    imageAlt: "Diskrete Messie-Entrümpelung",
    icon: HeartHandshake,
  },
  {
    id: "gartenentruempelung",
    title: "Gartenentrümpelung",
    description: "Entrümpelung von Gartenhäusern, Gerätezonen und Außenbereichen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.gartenentruempelung,
    imageAlt: "Entrümpelung im Gartenbereich",
    icon: Users,
  },
];

export const HOME_SERVICES: ServiceCardData[] = SERVICES.slice(0, 4);

export const WHY_US_EYEBROW = "WARUM SOFORTENTRÜMPELUNG.AT?";

export const WHY_US_HEADLINE = "Ihr professioneller Partner für Entrümpelung";

export const WHY_US_FEATURES: string[] = [
  "Jahrelange Erfahrung & hunderte zufriedene Kunden",
  "Transparente Preise & Fixpreis Garantie",
  "Schnelle & diskrete Abwicklung",
  "Besichtigung kostenlos & unverbindlich",
  "Wir hinterlassen alles besenrein",
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sehr zuverlässig und freundlich. Termin ging blitzschnell, Keller war in wenigen Stunden leer.",
    name: "Michael K.",
    location: "Wien, 21. Bezirk",
  },
  {
    quote:
      "Fixpreis wie besprochen, keine versteckten Kosten. Klare Empfehlung für Wohnungsräumung.",
    name: "Sandra M.",
    location: "Wien, 10. Bezirk",
  },
  {
    quote:
      "Nachlass meiner Tante wurde respektvoll sortiert. Kommunikation war von Anfang an top.",
    name: "Thomas R.",
    location: "Niederösterreich",
  },
  {
    quote:
      "Team war pünktlich, hielt alles sauber und war gegenüber den Nachbarn sehr rücksichtsvoll.",
    name: "Elif Y.",
    location: "Wien, 3. Bezirk",
  },
  {
    quote:
      "Von der Anfrage bis zur Entsorgung alles aus einer Hand. Danke für die schnelle Hilfe!",
    name: "Andreas P.",
    location: "Wien, 16. Bezirk",
  },
];

export type FooterLink = { label: string; href: string };

export const FOOTER_LEISTUNGEN: FooterLink[] = [
  { label: "Hausentrümpelung", href: "/leistungen/hausentruempelung" },
  { label: "Wohnungsentrümpelung", href: "/leistungen/wohnungsentruempelung" },
  { label: "Kellerentrümpelung", href: "/leistungen/kellerentruempelung" },
  { label: "Lagerentrümpelung", href: "/leistungen/lagerentruempelung" },
  { label: "Büroentrümpelung", href: "/leistungen/bueroentruempelung" },
  { label: "Garagenentrümpelung", href: "/leistungen/garagenentruempelung" },
  { label: "Dachbodenentrümpelung", href: "/leistungen/dachbodenentruempelung" },
  { label: "Messie-Entrümpelung", href: "/leistungen/messie-entruempelung" },
  { label: "Gartenentrümpelung", href: "/leistungen/gartenentruempelung" },
];

export const FOOTER_SERVICE: FooterLink[] = [
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: "/#kontakt" },
  { label: "Kontakt", href: "/#kontakt" },
];

/** Eintrag im Firmenbuch / Rechtsform e.U. — für JSON-LD `legalName` und Impressum-relevante Texte. */
export const CONTACT_LEGAL_NAME = "Mesut Duman e.U.";

export const CONTACT_BLOCK = {
  email: "office@sofortentrumpelung.at",
  /** Anzeige (Footer, Datenschutz, E-Mails) */
  address: "Brunner Straße 75, Objekt D/Büro 3, 1230 Wien",
  streetAddress: "Brunner Straße 75, Objekt D/Büro 3",
  postalCode: "1230",
  addressLocality: "Wien",
  addressRegion: "Wien",
  addressCountry: "AT",
  geo: { latitude: 48.1367, longitude: 16.2970 } as const,
  hoursMoFr: "Mo–Fr: 07:30 – 18:00",
  hoursSa: "Sa: 09:00 – 14:00 (nach Vereinbarung)",
} as const;

/** Schema.org `OpeningHoursSpecification` — gleiche Zeiten wie `CONTACT_BLOCK` (JSON-LD). */
export const OPENING_HOURS_SCHEMA_SPEC = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
    opens: "07:30",
    closes: "18:00",
  },
  {
    dayOfWeek: ["Saturday"] as const,
    opens: "09:00",
    closes: "14:00",
  },
] as const;

/** Einzeiler für JSON-LD `openingHours` (Text) und ggf. andere Ausgaben. */
export const OPENING_HOURS_TEXT_LINE = `${CONTACT_BLOCK.hoursMoFr} · ${CONTACT_BLOCK.hoursSa}`;

export const WHY_US_CTA = {
  calculatorIcon: Calculator,
  title: "KOSTENLOSES ANGEBOT",
  bullets: [
    "Unverbindliche Besichtigung",
    "Fixpreis nach Objektbesichtigung",
    "Klare nächste Schritte",
  ],
} as const;
