/**
 * Expert-Keyword-Liste → genau eine Primary-URL (Cannibalization vermeiden).
 * Support-URLs nur für interne Verlinkung / Content-Cluster.
 */
export type SeoKeywordPrimary = {
  keyword: string;
  priority: "High" | "Medium" | "Supporting";
  primaryPath: string;
  supportPaths?: readonly string[];
};

/** High + ausgewählte Medium aus Client_Keyword_List_2026-09-04 */
export const SEO_KEYWORD_PRIMARY_MAP: readonly SeoKeywordPrimary[] = [
  {
    keyword: "messie entrümpelung wien",
    priority: "High",
    primaryPath: "/leistungen/messie-entruempelung",
    supportPaths: ["/ratgeber/messie-wohnung-raeumen-wien"],
  },
  {
    keyword: "entrümpelung wien ma 48",
    priority: "High",
    primaryPath: "/ratgeber/ma-48-vs-entruempelungsfirma-wien",
    supportPaths: ["/ratgeber/ma-48-mistplaetze-entsorgungs-guide-wien"],
  },
  {
    keyword: "wohnungsauflösung wien",
    priority: "High",
    primaryPath: "/leistungen/wohnungsaufloesung",
    supportPaths: ["/ratgeber/wohnungsaufloesung-nach-todesfall-wien"],
  },
  {
    keyword: "verlassenschaft entrümpelung wien",
    priority: "High",
    primaryPath: "/leistungen/verlassenschaft",
    supportPaths: ["/ratgeber/verlassenschaft-entruempelung-wien-sensibel"],
  },
  {
    keyword: "entrümpelung wien kosten",
    priority: "High",
    primaryPath: "/preise",
    supportPaths: ["/ratgeber/was-kostet-entruempelung-wien"],
  },
  {
    keyword: "haushaltsauflösung wien",
    priority: "High",
    primaryPath: "/leistungen/haushaltsaufloesung",
  },
  {
    keyword: "räumungsdienst wien",
    priority: "High",
    primaryPath: "/",
  },
  {
    keyword: "gratis entrümpelungen wien",
    priority: "High",
    primaryPath: "/ratgeber/gratis-raeumung-wien-wertanrechnung",
  },
  {
    keyword: "dachboden entrümpelung wien",
    priority: "High",
    primaryPath: "/leistungen/dachbodenentruempelung",
    supportPaths: ["/ratgeber/dachbodenraeumung-wien-ma-48"],
  },
  {
    keyword: "entrümpelung wiener wohnen",
    priority: "High",
    primaryPath: "/ratgeber/entruempelung-gemeindebau-wiener-wohnen",
    supportPaths: ["/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe"],
  },
  {
    keyword: "haus entrümpeln",
    priority: "High",
    primaryPath: "/leistungen/hausentruempelung",
  },
  {
    keyword: "hausentrümpelung wien",
    priority: "High",
    primaryPath: "/leistungen/hausentruempelung",
  },
  {
    keyword: "hausräumung wien",
    priority: "High",
    primaryPath: "/leistungen/hausentruempelung",
  },
  {
    keyword: "entrümpelung wien",
    priority: "High",
    primaryPath: "/",
  },
] as const;

/** Startseiten-Cluster-Links (sichtbar, dezent) — aus der Primary-Map abgeleitet. */
export const HOME_SEO_CLUSTER_LINKS: readonly { label: string; href: string }[] = [
  { label: "Messie Entrümpelung Wien", href: "/leistungen/messie-entruempelung" },
  { label: "Hausentrümpelung & Hausräumung", href: "/leistungen/hausentruempelung" },
  { label: "Entrümpelung Wien Kosten", href: "/preise" },
  { label: "Entrümpelung Wien MA 48", href: "/ratgeber/ma-48-vs-entruempelungsfirma-wien" },
  { label: "Wohnungsauflösung Wien", href: "/leistungen/wohnungsaufloesung" },
  { label: "Verlassenschaft entrümpeln", href: "/leistungen/verlassenschaft" },
  { label: "Gratis Räumung Wien", href: "/ratgeber/gratis-raeumung-wien-wertanrechnung" },
  { label: "Wiener Wohnen Entrümpelung", href: "/ratgeber/entruempelung-gemeindebau-wiener-wohnen" },
];
