import { RATGEBER_PATH } from "@/data/site-content";

export type LeistungenRatgeberLink = {
  title: string;
  href: string;
};

export type LeistungenRatgeberGroup = {
  serviceLabel: string;
  serviceHref: string;
  links: LeistungenRatgeberLink[];
};

/** Ratgeber-Verlinkung auf /leistungen — thematisch zu Services gruppiert. */
export const LEISTUNGEN_RATGEBER_GROUPS: LeistungenRatgeberGroup[] = [
  {
    serviceLabel: "Wohnungsauflösung & Haushaltsauflösung",
    serviceHref: "/leistungen/wohnungsaufloesung",
    links: [
      {
        title: "7-Schritte-Checkliste Wohnungsräumung Wien",
        href: `${RATGEBER_PATH}/checkliste-wohnungsraeumung-wien`,
      },
      {
        title: "Wohnungsräumung für Senioren in Wien",
        href: `${RATGEBER_PATH}/wohnungsraeumung-senioren-wien`,
      },
      {
        title: "5 typische Fehler bei der Entrümpelung vermeiden",
        href: `${RATGEBER_PATH}/entruempelung-wien-5-fehler-vermeiden`,
      },
    ],
  },
  {
    serviceLabel: "Verlassenschaft & Nachlass",
    serviceHref: "/leistungen/verlassenschaft",
    links: [
      {
        title: "Wohnungsauflösung nach Todesfall — Leitfaden für Erben",
        href: `${RATGEBER_PATH}/wohnungsaufloesung-nach-todesfall-wien`,
      },
      {
        title: "Gratis-Räumung durch Wertanrechnung",
        href: `${RATGEBER_PATH}/gratis-raeumung-wien-wertanrechnung`,
      },
    ],
  },
  {
    serviceLabel: "Büroentrümpelung & Praxisauflösung",
    serviceHref: "/leistungen/bueroentruempelung",
    links: [
      {
        title: "Praxisauflösung Wien — DSGVO & Rückbau",
        href: `${RATGEBER_PATH}/praxisaufloesung-wien`,
      },
      {
        title: "Büroentrümpelung Wien — DSGVO & Rückbau",
        href: `${RATGEBER_PATH}/bueroentruempelung-wien-dsgvo-rueckbau`,
      },
      {
        title: "Geschäftslokal räumen & Rückbau",
        href: `${RATGEBER_PATH}/geschaeftslokal-raeumen-wien-rueckbau`,
      },
    ],
  },
  {
    serviceLabel: "Wertausgleich & Verwertung",
    serviceHref: "/leistungen/wertausgleich",
    links: [
      {
        title: "Was tun mit alten Schätzen in Wien?",
        href: `${RATGEBER_PATH}/was-tun-mit-alten-schaetzen-wien`,
      },
      {
        title: "Gebrauchte Möbel bewerten & verkaufen",
        href: `${RATGEBER_PATH}/gebrauchte-moebel-bewerten-wien`,
      },
      {
        title: "Was kostet eine Entrümpelung in Wien?",
        href: `${RATGEBER_PATH}/was-kostet-entruempelung-wien`,
      },
    ],
  },
  {
    serviceLabel: "Keller, Dachboden & Garage",
    serviceHref: "/leistungen/kellerentruempelung",
    links: [
      {
        title: "Keller aufräumen & entrümpeln in Wien",
        href: `${RATGEBER_PATH}/keller-aufraeumen-entruempeln-wien`,
      },
      {
        title: "Kellerräumung Wien — Kosten & Schimmel",
        href: `${RATGEBER_PATH}/kellerraeumung-wien-kosten-schimmel`,
      },
      {
        title: "Dachbodenräumung Wien & MA 48",
        href: `${RATGEBER_PATH}/dachbodenraeumung-wien-ma-48`,
      },
    ],
  },
];
