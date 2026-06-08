import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  Calculator,
  Clock,
  Gem,
  HandCoins,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  Scale,
  ScrollText,
  Shield,
  Truck,
  Users,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const PHONE_DISPLAY = "+43 681 81130962";

/** E.164 nur Ziffern (AT Mobil 681 …) — für tel:-Links. */
export const PHONE_TEL_NUMBER = "4368181130962";

/** Einfacher Anruf-Link — in allen gängigen Mobil- und Desktop-Browsern. */
export const PHONE_TEL_HREF = `tel:+${PHONE_TEL_NUMBER}`;

const WHATSAPP_NUMBER = "4368181130962";

/** Vorausgefüllter Chat-Text — wa.me `?text=` (alle Geräte). */
export const WHATSAPP_PREFILL_MESSAGE = "Anfrage: Räumungs- und Entrümpelungsservice";

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;

/** Gleicher Link wie `WHATSAPP_HREF` (Foto-Leiste / Kontakt). */
export const WHATSAPP_PHOTO_HREF = WHATSAPP_HREF;

/** Google-Bewertungen — Hero-Badge & LocalBusiness `aggregateRating` (Schema.org). */
export const GOOGLE_AGGREGATE_RATING = {
  ratingValue: "5.0",
  reviewCount: 200,
  bestRating: "5",
  worstRating: "1",
  reviewCountLabel: "200+ Kundenbewertungen",
} as const;

/** Rechtliche Seiten — z. B. Formular „Hinweis zum Datenschutz“ */
export const DATENSCHUTZ_PATH = "/datenschutz";

export const IMPRESSUM_PATH = "/impressum";

/** Startseiten-Anker — immer mit führendem `/`, nie nur `#…` (sonst bleibt man auf Unterseiten). */
export const HOME_FAQ_HREF = "/#faq";
export const HOME_KONTAKT_HREF = "/#kontakt";

export const NAV_LINKS: NavLink[] = [
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Kontakt", href: HOME_KONTAKT_HREF },
  { label: "FAQ", href: HOME_FAQ_HREF },
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
  /** Schema.org `serviceType` — z. B. „Kellerentrümpelung Wien“. */
  schemaServiceType: string;
  icon: LucideIcon;
};

/** Öffentlicher Pfad zu Leistungs-Bildern: /public/services/<slug>.webp */
export const SERVICE_IMAGE_DIR = "/services";

/**
 * Je Service genau eine Datei unter public/services — kein Bild wird zwischen Seiten geteilt.
 * Namensschema: URL-Slug + ".webp" (ASCII, wie in der Adresszeile).
 */
export const SERVICE_LEISTUNG_IMAGE = {
  hausentruempelung: `${SERVICE_IMAGE_DIR}/hausentruempelung.webp`,
  wohnungsentruempelung: `${SERVICE_IMAGE_DIR}/wohnungsentruempelung.webp`,
  kellerentruempelung: `${SERVICE_IMAGE_DIR}/kellerentruempelung.webp`,
  lagerentruempelung: `${SERVICE_IMAGE_DIR}/lagerentruempelung.webp`,
  bueroentruempelung: `${SERVICE_IMAGE_DIR}/bueroentruempelung.webp`,
  garagenentruempelung: `${SERVICE_IMAGE_DIR}/garagenentruempelung.webp`,
  dachbodenentruempelung: `${SERVICE_IMAGE_DIR}/dachbodenentruempelung.webp`,
  "messie-entruempelung": `${SERVICE_IMAGE_DIR}/messie-entruempelung.webp`,
  gartenentruempelung: `${SERVICE_IMAGE_DIR}/gartenentruempelung.webp`,
  verlassenschaft: `${SERVICE_IMAGE_DIR}/verlassenschaft.webp`,
  nachlass: `${SERVICE_IMAGE_DIR}/nachlass.webp`,
  haushaltsaufloesung: `${SERVICE_IMAGE_DIR}/haushaltsaufloesung.webp`,
  wohnungsaufloesung: `${SERVICE_IMAGE_DIR}/wohnungsaufloesung.webp`,
  erbschaftshaus: `${SERVICE_IMAGE_DIR}/erbschaftshaus.webp`,
  wertausgleich: `${SERVICE_IMAGE_DIR}/wertausgleich.webp`,
  ankauf: `${SERVICE_IMAGE_DIR}/ankauf.webp`,
} as const;

export const SERVICES: ServiceCardData[] = [
  {
    id: "hausentruempelung",
    title: "Hausentrümpelung",
    description: "Komplette Entrümpelung von Einfamilienhäusern und Mehrparteienhäusern.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.hausentruempelung,
    imageAlt: "Hausentrümpelung durch ein professionelles Team",
    schemaServiceType: "Hausentrümpelung Wien",
    icon: Building2,
  },
  {
    id: "wohnungsentruempelung",
    title: "Wohnungs​entrümpelung",
    description: "Schnelle und besenreine Entrümpelung von Wohnungen jeder Größe.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.wohnungsentruempelung,
    imageAlt:
      "Team bei der Wohnungsentrümpelung — Möbel und Kartons zum Transport",
    schemaServiceType: "Wohnungsentrümpelung Wien",
    icon: Home,
  },
  {
    id: "kellerentruempelung",
    title: "Kellerentrümpelung",
    description: "Keller, Abteile und Nebenräume werden fachgerecht entrümpelt und entsorgt.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.kellerentruempelung,
    imageAlt: "Entrümpelter Kellerraum",
    schemaServiceType: "Kellerentrümpelung Wien",
    icon: Boxes,
  },
  {
    id: "lagerentruempelung",
    title: "Lagerentrümpelung",
    description: "Lagerflächen und Depots frei machen, sortieren und sauber übergeben.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.lagerentruempelung,
    imageAlt: "Entrümpelung einer Lagerfläche",
    schemaServiceType: "Lagerentrümpelung Wien",
    icon: Truck,
  },
  {
    id: "bueroentruempelung",
    title: "Büroentrümpelung",
    description: "Diskrete Entrümpelung von Büroflächen inklusive geordneter Entsorgung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.bueroentruempelung,
    imageAlt: "Entrümpelung einer Bürofläche",
    schemaServiceType: "Büroentrümpelung Wien",
    icon: Shield,
  },
  {
    id: "garagenentruempelung",
    title: "Garagenentrümpelung",
    description: "Garagen und Stellflächen schnell räumen und wieder nutzbar machen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.garagenentruempelung,
    imageAlt: "Entrümpelte Garage",
    schemaServiceType: "Garagenentrümpelung Wien",
    icon: BadgeCheck,
  },
  {
    id: "dachbodenentruempelung",
    title: "Dachbodenentrümpelung",
    description: "Dachböden sicher, sorgfältig und effizient entrümpeln lassen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.dachbodenentruempelung,
    imageAlt: "Entrümpelter Dachboden",
    schemaServiceType: "Dachbodenentrümpelung Wien",
    icon: Clock,
  },
  {
    id: "messie-entruempelung",
    title: "Messie-Entrümpelung",
    description:
      "Messie Wohnung reinigen und Messie-Wohnung entrümpeln in Wien — diskrete Messie Entrümpelung mit Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE["messie-entruempelung"],
    imageAlt: "Diskrete Messie-Entrümpelung",
    schemaServiceType: "Messie Wohnung entrümpeln Wien",
    icon: HeartHandshake,
  },
  {
    id: "gartenentruempelung",
    title: "Gartenentrümpelung",
    description: "Entrümpelung von Gartenhäusern, Gerätezonen und Außenbereichen.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.gartenentruempelung,
    imageAlt: "Entrümpelung im Gartenbereich",
    schemaServiceType: "Gartenentrümpelung Wien",
    icon: Users,
  },
  {
    id: "verlassenschaft",
    title: "Verlassenschaft entrümpeln",
    description:
      "Verlassenschaft entrümpeln und Verlassenschaftsentrümpelung in Wien — diskret, termintreu, Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.verlassenschaft,
    imageAlt: "Verlassenschaftsentrümpelung in Wien",
    schemaServiceType: "Verlassenschaft entrümpeln Wien",
    icon: ScrollText,
  },
  {
    id: "nachlass",
    title: "Nachlass entrümpeln",
    description:
      "Nachlass entrümpeln und Entrümpelung nach Todesfall in Wien — für Erben und Verwaltungen, Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.nachlass,
    imageAlt: "Nachlass entrümpeln — professionelle Unterstützung",
    schemaServiceType: "Nachlass entrümpeln Wien",
    icon: Scale,
  },
  {
    id: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    description:
      "Haushaltsauflösung und Entrümpelung in Wien — komplett, besenrein und zum Festpreis.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.haushaltsaufloesung,
    imageAlt: "Haushaltsauflösung durch erfahrenes Team",
    schemaServiceType: "Haushaltsauflösung Wien",
    icon: Home,
  },
  {
    id: "wohnungsaufloesung",
    title: "Wohnungsauflösung",
    description:
      "Wohnungsauflösung Wien — wie läuft eine Wohnungsauflösung ab? Termingerecht, besenrein und zum Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.wohnungsaufloesung,
    imageAlt: "Wohnungsauflösung in Wien",
    schemaServiceType: "Wohnungsauflösung Wien",
    icon: Building2,
  },
  {
    id: "erbschaftshaus",
    title: "Erbschaftshaus entrümpeln",
    description:
      "Erbschaftshaus entrümpeln und Entrümpelung nach Todesfall — geerbtes Haus und Wohnung in Wien, Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.erbschaftshaus,
    imageAlt: "Erbschaftshaus entrümpeln in Wien",
    schemaServiceType: "Erbschaftshaus entrümpeln Wien",
    icon: Landmark,
  },
  {
    id: "wertausgleich",
    title: "Entrümpelung mit Wertausgleich",
    description:
      "Entrümpelung mit Wertausgleich — verwertbare Gegenstände rechnen wir transparent gegen den Preis.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.wertausgleich,
    imageAlt: "Entrümpelung mit Wertausgleich",
    schemaServiceType: "Entrümpelung mit Wertausgleich Wien",
    icon: HandCoins,
  },
  {
    id: "ankauf",
    title: "Entrümpelung mit Ankauf",
    description:
      "Entrümpelung mit Ankauf — Antiquitäten, Schmuck, Kameras, Antik und Altwaren Ankauf in Wien, Festpreis nach Besichtigung.",
    imageSrc: SERVICE_LEISTUNG_IMAGE.ankauf,
    imageAlt: "Entrümpelung mit Altwaren- und Antiquitäten-Ankauf",
    schemaServiceType: "Entrümpelung mit Ankauf Wien",
    icon: Gem,
  },
];

export const HOME_SERVICES: ServiceCardData[] = SERVICES.slice(0, 4);

export type AboutUsHighlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const ABOUT_US_EYEBROW = "Über uns";

export const ABOUT_US_HEADLINE = "Lokal, fair und zuverlässig";

export const ABOUT_US_SUBHEADLINE =
  "Ihr regionaler Entrümpelungsservice in Wien – persönlich erklärt, ohne leere Versprechen.";

export const ABOUT_US_PARAGRAPHS: string[] = [
  "Sofort Entrümpelung ist ein lokales Entrümpelungsunternehmen aus Wien und unterstützt Privatpersonen, Familien, Hausverwaltungen und Betriebe bei Entrümpelungen jeder Größe. Im Mittelpunkt steht ein einfacher Ablauf: Sie senden eine Anfrage, wir klären den Umfang, besichtigen bei Bedarf kostenlos vor Ort und erstellen ein transparentes Festpreis-Angebot. Danach kümmert sich unser Team um die Entrümpelung, den Abtransport und die fachgerechte Entsorgung.",
  "Viele Kunden melden sich bei uns, wenn eine Wohnung geräumt werden muss, ein Keller über Jahre voll geworden ist oder eine Haushaltsauflösung bevorsteht. Auch bei Nachlässen, Verlassenschaften, Dachböden, Büroräumen, Lagern oder einzelnen Möbelstücken helfen wir schnell und diskret weiter. Dabei geht es nicht nur darum, Gegenstände aus einem Objekt zu tragen: Wichtig sind eine saubere Planung, geschützte Transportwege, ein respektvoller Umgang mit persönlichen Dingen und eine besenreine Übergabe.",
  "Als Entrümpelungsfirma in Wien kennen wir die typischen Herausforderungen in der Stadt: enge Stiegenhäuser, Altbauwohnungen, Innenhöfe, Kurzparkzonen, kleine Aufzüge und klare Vorgaben von Hausverwaltungen. Diese Erfahrung hilft, jeden Einsatz realistisch einzuschätzen und unnötige Verzögerungen zu vermeiden. Sind Möbel, Hausrat oder verwertbare Stücke vorhanden, prüfen wir, ob Entrümpelung mit Wertausgleich oder Ankauf sinnvoll ist – fair bewertet statt pauschal entsorgt.",
  "Unser Ziel ist eine Entrümpelung, die für Sie nachvollziehbar, planbar und stressfrei bleibt. Deshalb arbeiten wir mit Fixpreis-Angeboten, direkter Kommunikation und einem Team, das vom ersten Kontakt bis zur besenreinen Übergabe Verantwortung übernimmt.",
];

export const ABOUT_US_HIGHLIGHTS: AboutUsHighlight[] = [
  {
    icon: Shield,
    title: "Fixpreis-Garantie",
    text: "Nach Besichtigung ein verbindliches Angebot – ohne versteckte Zusatzposten.",
  },
  {
    icon: MapPin,
    title: "Wien & Umgebung",
    text: "Lokales Team mit Erfahrung in Altbauten, Verwaltungen und engen Zugängen.",
  },
  {
    icon: HandCoins,
    title: "Wertausgleich & Ankauf",
    text: "Verwertbare Gegenstände fair anrechnen oder direkt ankaufen.",
  },
  {
    icon: BadgeCheck,
    title: "Besenrein & diskret",
    text: "Saubere Übergabe, rücksichtsvoller Umgang mit Nachbarn und Hausverwaltung.",
  },
];

export const ABOUT_US_PROFESSIONAL_TITLE = "Was uns professionell macht";

export const ABOUT_US_PROFESSIONAL: string[] = [
  "Erfahrenes Team mit klaren Abläufen vom Erstkontakt bis zur Übergabe",
  "Fachgerechte Entsorgung und sortierter Abtransport inklusive",
  "Respektvoller Umgang bei Nachlass, Verlassenschaft und sensiblen Situationen",
  "Direkte Erreichbarkeit – eine Ansprechperson statt anonyme Hotline",
  "Realistische Terminplanung statt leerer Versprechen",
];

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

export type GeneralFaqItem = {
  question: string;
  answer: string;
};

/** SEO-Schwerpunkte — erscheinen zuerst in der Startseiten-FAQ. */
export const GENERAL_FAQ_PRIORITY: GeneralFaqItem[] = [
  {
    question: "Was kostet eine Entrümpelung?",
    answer:
      "Die Kosten hängen von Objektgröße, Menge, Zugängen und Entsorgungsmix ab. Nach kostenloser Besichtigung in Wien und Umgebung erhalten Sie einen verbindlichen Festpreis — auf unserer Preisseite finden Sie transparente Richtwerte inklusive möglicher Wertanrechnung.",
  },
  {
    question: "Wie läuft eine Wohnungsauflösung ab?",
    answer:
      "Zuerst melden Sie sich mit kurzer Objektbeschreibung. Wir besichtigen kostenlos vor Ort, nennen einen Festpreis und vereinbaren den Termin. Am Einsatztag räumen wir die Wohnung im vereinbarten Umfang, transportieren ab, entsorgen fachgerecht und übergeben besenrein — Details zur Wohnungsauflösung finden Sie auf unserer Leistungsseite.",
  },
  {
    question: "Messie Wohnung reinigen",
    answer:
      "Eine Messie-Wohnung reinigen heißt bei uns: strukturierte Messie-Entrümpelung mit Sortierung, Abtransport und fachgerechter Entsorgung — diskret, in Etappen wenn nötig und zum Festpreis nach Besichtigung. Angehörige, Betreuer und Verwaltungen koordinieren wir respektvoll mit.",
  },
  {
    question: "Entrümpelung nach Todesfall",
    answer:
      "Nach einem Todesfall übernehmen wir die Entrümpelung diskret und termintreu — für Erben, Verwaltungen und Testamentsvollstrecker in Wien. Umfang, Sortierung persönlicher Dinge und besenreine Übergabe klären wir in der Besichtigung; danach gilt ein verbindlicher Festpreis.",
  },
];

const GENERAL_FAQ_MORE: GeneralFaqItem[] = [
  {
    question: "Wie läuft die kostenlose Besichtigung ab?",
    answer:
      "Sie melden sich per Formular, Telefon oder WhatsApp. Wir vereinbaren einen Termin vor Ort, schätzen Volumen und Aufwand ein und senden Ihnen ein schriftliches Festpreis-Angebot — unverbindlich, bevor Sie buchen.",
  },
  {
    question: "Was bedeutet Fixpreis-Garantie?",
    answer:
      "Der nach der Besichtigung vereinbarte Preis gilt für den beschriebenen Leistungsumfang. Keine versteckten Stundenzuschläge — An- und Abfahrt sowie fachgerechte Entsorgung sind bei uns standardmäßig einkalkuliert.",
  },
  {
    question: "Kann ich verwertbare Möbel oder Geräte anrechnen lassen?",
    answer:
      "Ja. Bei brauchbarem Hausrat prüfen wir Entrümpelung mit Wertausgleich oder Ankauf — der realistische Wert mindert Ihre Rechnung. Das klären wir transparent in der Besichtigung.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "Je nach Auslastung oft innerhalb weniger Werktage — bei dringenden Fällen (z. B. Wohnungsübergabe) sind Express-Termine nach Absprache möglich. Wir nennen Ihnen realistische Fenster statt leerer Versprechen.",
  },
  {
    question: "Was ist in der Entrümpelung enthalten?",
    answer:
      "Typisch Sortierung im vereinbarten Umfang, Verladung, Abtransport und fachgerechte Entsorgung sowie besenreine Übergabe. Demontage von Einbauten oder Sonderabfälle nur nach vorheriger Vereinbarung.",
  },
  {
    question: "Arbeiten Sie in allen Wiener Bezirken?",
    answer:
      "Ja — wir entrümpeln in ganz Wien und auf Anfrage in der Umgebung. Enge Stiegenhäuser, Altbauten ohne Aufzug und Kurzparkzonen kennen wir aus der täglichen Praxis.",
  },
];

export const GENERAL_FAQ: GeneralFaqItem[] = [
  ...GENERAL_FAQ_PRIORITY,
  ...GENERAL_FAQ_MORE,
  {
    question: "Übernehmen Sie auch Nachlass, Verlassenschaft oder Messie-Wohnungen?",
    answer:
      "Ja. Dazu gibt es eigene Leistungsseiten mit Details — grundsätzlich gilt: diskreter Ablauf, respektvoller Umgang und Festpreis nach Besichtigung auch in sensiblen Situationen.",
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
  { label: "Verlassenschaft", href: "/leistungen/verlassenschaft" },
  { label: "Nachlass", href: "/leistungen/nachlass" },
  { label: "Haushaltsauflösung", href: "/leistungen/haushaltsaufloesung" },
  { label: "Wohnungsauflösung", href: "/leistungen/wohnungsaufloesung" },
  { label: "Erbschaftshaus", href: "/leistungen/erbschaftshaus" },
  { label: "Wertausgleich", href: "/leistungen/wertausgleich" },
  { label: "Entrümpelung mit Ankauf", href: "/leistungen/ankauf" },
];

export const FOOTER_SERVICE: FooterLink[] = [
  { label: "Preise", href: "/preise" },
  { label: "FAQ", href: HOME_FAQ_HREF },
  { label: "Kontakt", href: HOME_KONTAKT_HREF },
];

export type SocialNetwork = "xing" | "linkedin" | "x" | "facebook" | "instagram";

export type SocialLink = {
  label: string;
  href: string;
  network: SocialNetwork;
};

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  {
    label: "SofortEntrümpelung auf Xing",
    href: "https://www.xing.com/pages/sofortentruempelung",
    network: "xing",
  },
  {
    label: "SofortEntrümpelung auf LinkedIn",
    href: "https://www.linkedin.com/company/sofortentrumpelung",
    network: "linkedin",
  },
  {
    label: "SofortEntrümpelung auf X",
    href: "https://x.com/sofortEntrumpl",
    network: "x",
  },
  {
    label: "SofortEntrümpelung auf Facebook",
    href: "https://www.facebook.com/profile.php?id=61590409469212",
    network: "facebook",
  },
  {
    label: "SofortEntrümpelung auf Instagram",
    href: "https://www.instagram.com/sofortentrumpelung/",
    network: "instagram",
  },
];

/**
 * Social-Media- & Branchenverzeichnis-Profile — schema.org `sameAs` (LocalBusiness).
 * @see https://schema.org/sameAs
 */
export const BUSINESS_SAME_AS = [
  "https://share.google/TPOAJioCzqdohEOpG",
  "https://www.facebook.com/profile.php?id=61590409469212",
  "https://www.instagram.com/sofortentrumpelung/",
  "https://www.linkedin.com/company/sofortentrumpelung",
  "https://x.com/sofortEntrumpl",
  "https://www.xing.com/pages/sofortentruempelung",
  "https://de.pinterest.com/sofortentrumplung/",
  "https://www.herold.at/gelbe-seiten/wien/wBkxJ/sofortentruempelung/",
  "https://www.cylex.at/wien/sofortentr%c3%bcmpelung-8616065.html",
  "https://www.tupalo.at/wien/sofortentruempelung",
] as const;

/** Eintrag im Firmenbuch / Rechtsform e.U. — für JSON-LD `legalName` und Impressum-relevante Texte. */
export const CONTACT_LEGAL_NAME = "Mesut Duman e.U.";

/** Gewerbeinformationssystem Austria (GISA) — Pflichtangabe im Impressum (ECG). */
export const GISA_NUMBER = "39404220";

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
  hours: "Mo – So: 06:00 – 22:00",
} as const;

/** Google Maps — Embed & Link (Koordinaten = `CONTACT_BLOCK.geo`). */
export const CONTACT_MAP = {
  embedSrc: `https://maps.google.com/maps?q=${CONTACT_BLOCK.geo.latitude},${CONTACT_BLOCK.geo.longitude}&hl=de&z=16&output=embed`,
  openHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_BLOCK.address)}`,
  title: `Standort ${CONTACT_BLOCK.address}`,
} as const;

/** Schema.org `OpeningHoursSpecification` — gleiche Zeiten wie `CONTACT_BLOCK` (JSON-LD). */
export const OPENING_HOURS_SCHEMA_SPEC = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ] as const,
    opens: "06:00",
    closes: "22:00",
  },
] as const;

/** Einzeiler für JSON-LD `openingHours` (Text) und ggf. andere Ausgaben. */
export const OPENING_HOURS_TEXT_LINE = CONTACT_BLOCK.hours;

export const WHY_US_CTA = {
  calculatorIcon: Calculator,
  title: "KOSTENLOSES ANGEBOT",
  bullets: [
    "Unverbindliche Besichtigung",
    "Fixpreis nach Objektbesichtigung",
    "Klare nächste Schritte",
  ],
} as const;
