/** Thematische Cluster für „Weiterlesen“ — defensiv, ohne URL-Änderungen. */

const GEMEINDEBAU_CLUSTER = [
  "entruempelung-gemeindebau-wiener-wohnen",
  "gemeindebau-wiener-wohnen-wohnungsuebergabe",
  "stadt-wien-gemeindewohnung-rueckgabevorgaben",
] as const;

const GENOSSENSCHAFT_CLUSTER = [
  "buwog-genossenschaft-entruempelung-wien",
  "oevw-genossenschaft-entruempelung-wien",
  "siedlungsunion-genossenschaft-entruempelung-wien",
  "familienwohnbau-genossenschaft-entruempelung-wien",
  "arwag-genossenschaft-entruempelung-wien",
  "bauhilfe-genossenschaft-entruempelung-wien",
  "ebg-genossenschaft-entruempelung-wien",
  "ebsg-genossenschaft-entruempelung-noe-burgenland",
  "egw-genossenschaft-entruempelung-niederoesterreich",
] as const;

const KELLER_CLUSTER = [
  "keller-aufraeumen-entruempeln-wien",
  "kellerraeumung-wien-kosten-schimmel",
  "dachbodenraeumung-wien-ma-48",
] as const;

const TODESFALL_CLUSTER = [
  "verlassenschaft-entruempelung-wien-sensibel",
  "wohnungsaufloesung-nach-todesfall-wien",
  "haushaltsaufloesung-erwachsenenvertretung-wien",
] as const;

const KOSTEN_CLUSTER = [
  "was-kostet-entruempelung-wien",
  "gratis-raeumung-wien-wertanrechnung",
  "gebrauchte-moebel-bewerten-wien",
  "moebel-verkaufen-wien-willhaben-wertanrechnung",
] as const;

const MA48_CLUSTER = [
  "ma-48-vs-entruempelungsfirma-wien",
  "ma-48-mistplaetze-entsorgungs-guide-wien",
  "dachbodenraeumung-wien-ma-48",
] as const;

const BUERO_CLUSTER = [
  "bueroaufloesung-wien-diskretion-datenschutz",
  "bueroentruempelung-wien-dsgvo-rueckbau",
  "praxisaufloesung-wien",
  "geschaeftslokal-raeumen-wien-rueckbau",
] as const;

const REGIONAL_CLUSTER = [
  "entruempelung-korneuburg-tulln-schwechat",
  "entruempelung-burgenland-mattersburg-rust-oberpullendorf",
  "entruempelung-oesterreichweit",
] as const;

const NOTFALL_CLUSTER = [
  "express-entruempelung-wien-24h-krisenmanagement",
  "raeumung-wasserschaden-brandschaden-wien",
  "delogierung-zwangsrauemung-wien",
] as const;

const BEZIRK_RATGEBER_CLUSTER = [
  "entruempelung-1010-wien",
  "entruempelung-leopoldstadt-wien-1020",
  "entruempelung-favoriten-wien-1100",
  "entruempelung-meidling-wien-1120",
  "entruempelung-ottakring-wien-1160",
  "entruempelung-floridsdorf-wien-1210",
  "entruempelung-donaustadt-wien-1220",
  "entruempelung-liesing-wien-1230",
] as const;

const CLUSTERS: readonly (readonly string[])[] = [
  BEZIRK_RATGEBER_CLUSTER,
  GEMEINDEBAU_CLUSTER,
  GENOSSENSCHAFT_CLUSTER,
  KELLER_CLUSTER,
  TODESFALL_CLUSTER,
  KOSTEN_CLUSTER,
  MA48_CLUSTER,
  BUERO_CLUSTER,
  REGIONAL_CLUSTER,
  NOTFALL_CLUSTER,
];

/** Explizite Overrides — höhere Priorität als Cluster-Fallback. */
const EXPLICIT_RELATED: Record<string, string[]> = {
  "checkliste-wohnungsraeumung-wien": [
    "was-kostet-entruempelung-wien",
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "gratis-raeumung-wien-wertanrechnung",
  ],
  "entruempelung-gemeindebau-wiener-wohnen": [
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "stadt-wien-gemeindewohnung-rueckgabevorgaben",
    "checkliste-wohnungsraeumung-wien",
  ],
  "gemeindebau-wiener-wohnen-wohnungsuebergabe": [
    "entruempelung-gemeindebau-wiener-wohnen",
    "stadt-wien-gemeindewohnung-rueckgabevorgaben",
    "checkliste-wohnungsraeumung-wien",
  ],
  "stadt-wien-gemeindewohnung-rueckgabevorgaben": [
    "entruempelung-gemeindebau-wiener-wohnen",
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "entruempelung-wien-5-fehler-vermeiden",
  ],
  "messie-wohnung-raeumen-wien": [
    "verlassenschaft-entruempelung-wien-sensibel",
    "express-entruempelung-wien-24h-krisenmanagement",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-favoriten-wien-1100": [
    "entruempelung-gemeindebau-wiener-wohnen",
    "entruempelung-liesing-wien-1230",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-donaustadt-wien-1220": [
    "gartenentruempelung-wien-kosten-ablauf",
    "entruempelung-liesing-wien-1230",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-liesing-wien-1230": [
    "entruempelung-1010-wien",
    "was-kostet-entruempelung-wien",
    "entruempelung-korneuburg-tulln-schwechat",
  ],
  "entruempelung-1010-wien": [
    "entruempelung-liesing-wien-1230",
    "was-kostet-entruempelung-wien",
    "checkliste-wohnungsraeumung-wien",
  ],
  "entruempelung-leopoldstadt-wien-1020": [
    "entruempelung-gemeindebau-wiener-wohnen",
    "entruempelung-favoriten-wien-1100",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-floridsdorf-wien-1210": [
    "entruempelung-liesing-wien-1230",
    "entruempelung-donaustadt-wien-1220",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-meidling-wien-1120": [
    "entruempelung-liesing-wien-1230",
    "entruempelung-favoriten-wien-1100",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-ottakring-wien-1160": [
    "entruempelung-gemeindebau-wiener-wohnen",
    "entruempelung-meidling-wien-1120",
    "was-kostet-entruempelung-wien",
  ],
  "entruempelung-wien-steuer-absetzen": [
    "was-kostet-entruempelung-wien",
    "geschaeftslokal-raeumen-wien-rueckbau",
    "wohnungsaufloesung-nach-todesfall-wien",
  ],
  "zimmer-raeumung-wien": [
    "checkliste-wohnungsraeumung-wien",
    "entruempelung-gemeindebau-wiener-wohnen",
    "was-kostet-entruempelung-wien",
  ],
  "raeumungsexperte-wien-besichtigung": [
    "was-kostet-entruempelung-wien",
    "entruempelungsdienst-vs-entruempelungsfirma-wien",
    "entruempelung-wien-5-fehler-vermeiden",
  ],
  "richtig-ausmisten-wien": [
    "was-tun-mit-alten-schaetzen-wien",
    "gratis-raeumung-wien-wertanrechnung",
    "checkliste-wohnungsraeumung-wien",
  ],
  "entruempelungsdienst-vs-entruempelungsfirma-wien": [
    "was-kostet-entruempelung-wien",
    "ma-48-vs-entruempelungsfirma-wien",
    "raeumungsexperte-wien-besichtigung",
  ],
  "wohnungsraeumung-senioren-wien": [
    "wohnungsaufloesung-nach-todesfall-wien",
    "verlassenschaft-entruempelung-wien-sensibel",
    "checkliste-wohnungsraeumung-wien",
  ],
  "gartenentruempelung-wien-kosten-ablauf": [
    "garagenentruempelung-wien-kosten-ablauf",
    "keller-aufraeumen-entruempeln-wien",
    "was-kostet-entruempelung-wien",
  ],
  "garagenentruempelung-wien-kosten-ablauf": [
    "gartenentruempelung-wien-kosten-ablauf",
    "kellerraeumung-wien-kosten-schimmel",
    "was-kostet-entruempelung-wien",
  ],
  "schwerlastentsorgung-wien": [
    "was-kostet-entruempelung-wien",
    "kellerraeumung-wien-kosten-schimmel",
    "express-entruempelung-wien-24h-krisenmanagement",
  ],
  "entruempelung-vor-sanierung-wien": [
    "was-kostet-entruempelung-wien",
    "stadt-wien-gemeindewohnung-rueckgabevorgaben",
    "entruempelung-gemeindebau-wiener-wohnen",
  ],
  "entruempelung-wien-5-fehler-vermeiden": [
    "was-kostet-entruempelung-wien",
    "raeumungsexperte-wien-besichtigung",
    "entruempelungsdienst-vs-entruempelungsfirma-wien",
  ],
};

function fromCluster(currentSlug: string, limit: number): string[] | undefined {
  for (const cluster of CLUSTERS) {
    if ((cluster as readonly string[]).includes(currentSlug)) {
      return (cluster as readonly string[])
        .filter((s) => s !== currentSlug)
        .slice(0, limit);
    }
  }
  return undefined;
}

/** Liefert thematisch passende Slugs für „Weiterlesen“. */
export function resolveRelatedSlugs(
  currentSlug: string,
  metaSlugs: string[] | undefined,
  limit: number,
): string[] | undefined {
  if (metaSlugs?.length) {
    return metaSlugs.filter((s) => s !== currentSlug).slice(0, limit);
  }
  const explicit = EXPLICIT_RELATED[currentSlug];
  if (explicit?.length) {
    return explicit.filter((s) => s !== currentSlug).slice(0, limit);
  }
  return fromCluster(currentSlug, limit);
}
