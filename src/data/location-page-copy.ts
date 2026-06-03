/**
 * Bezirks- & Bundesland-spezifische Texte — Duplicate-Content-Vermeidung auf Lokations-Landings.
 * Schlüssel: PLZ als String (1010–1230) oder Region-Slug.
 */

export type LocationPageCopy = {
  name: string;
  /** Hero — Hauptabsatz unter H1 */
  heroIntro: string;
  /** Hero — Zeile unter H1 (Festpreis-Hinweis) */
  heroTagline: string;
  /** Eigener Intro-Block unter TrustBar */
  localInsight: string;
  /** WhyUs — H2 */
  whyUsHeadline: string;
  /** Ablauf — Einleitung unter Überschrift */
  ablaufIntro: string;
  /** Leistungen — Teaser unter Sektionsüberschrift */
  servicesTeaser: string;
};

const WIEN_COPY: Record<string, LocationPageCopy> = {
  "1010": {
    name: "Innere Stadt",
    heroIntro:
      "In 1010 Wien (Innere Stadt) sind Räumungen oft eine logistische Herausforderung. Ob historische Palais oder Altbauwohnungen nahe dem Stephansplatz – unser Team kennt die Parkplatznot und die strengen Wiener Auflagen im 1. Bezirk genau und sorgt für eine reibungslose Entrümpelung.",
    heroTagline: "Festpreis nach Besichtigung · Innere Stadt (1010)",
    localInsight:
      "Für Verlassenschaften, Büroauflösungen und diskrete Wohnungsräumungen im 1. Bezirk planen wir Zufahrten, Halteverbotszonen und Entsorgungswege im Voraus – besenrein und dokumentiert nach Vereinbarung.",
    whyUsHeadline: "Warum Sofort Entrümpelung in der Inneren Stadt?",
    ablaufIntro:
      "Im 1. Bezirk koordinieren wir Besichtigung, Räumung und Entsorgung eng mit Hausverwaltungen – auch in Fußgängerzonen und bei beengten Innenhöfen.",
    servicesTeaser:
      "Von der Kellerentrümpelung bis zur kompletten Haushaltsauflösung im 1010er Bezirk – alle Leistungen mit verbindlichem Festpreis nach Objektbesichtigung.",
  },
  "1020": {
    name: "Leopoldstadt",
    heroIntro:
      "Entrümpelungen in 1020 Wien (Leopoldstadt) reichen vom Gründerzeithaus am Praterstern bis zu Neubauten an der Donau. Wir kennen die Mischung aus Gemeindebauten, Gewerbe in der Karmeliterviertel-Umgebung und kurzen Zufahrtswegen entlang der Praterstraße.",
    heroTagline: "Festpreis nach Besichtigung · Leopoldstadt (1020)",
    localInsight:
      "Ob Messie-Wohnung, Nachlass oder schnelle Wohnungsauflösung nahe Nordbahnhof oder Messe Wien – im 2. Bezirk arbeiten wir mit eingespielten Teams und klarer Logistik.",
    whyUsHeadline: "Ihr Entrümpelungsteam für die Leopoldstadt",
    ablaufIntro:
      "In Leopoldstadt stimmen wir Termine mit Hausverwaltungen und Nachbarn ab – besonders in dicht bebauten Blocks rund um Taborstraße und Ausstellungsstraße.",
    servicesTeaser:
      "Wohnungsentrümpelung, Keller- und Lagerfreimachung in 1020 – transparent kalkuliert, inklusive fachgerechter Entsorgung.",
  },
  "1030": {
    name: "Landstraße",
    heroIntro:
      "Im 1030 Wien (Landstraße) entrümpeln wir von Belvedere-Nähe bis Rennweg: repräsentative Altbauten, Büros und Wohnungen mit anspruchsvollen Zugängen. Der 3. Bezirk verlangt präzise Planung bei Parken und Aufzugnutzung.",
    heroTagline: "Festpreis nach Besichtigung · Landstraße (1030)",
    localInsight:
      "Haushaltsauflösungen nach Todesfall, Verlassenschaften und Gewerberäumungen im Botschaftsviertel-Umfeld führen wir diskret und termintreu durch.",
    whyUsHeadline: "Entrümpelung Landstraße – diskret & termintreu",
    ablaufIntro:
      "Besichtigung, Festpreis und Räumung im 3. Bezirk – abgestimmt auf Wiener Entsorgungsvorgaben und Ihre Übergabefrist.",
    servicesTeaser:
      "Keller, Dachboden, Büro oder komplette Wohnung in 1030 – ein Ansprechpartner, ein Festpreisangebot.",
  },
  "1040": {
    name: "Wieden",
    heroIntro:
      "1040 Wien (Wieden) verbindet Wohnbau um den Naschmarkt mit Büros Richtung Karlsplatz. Wir entrümpeln Altbauwohnungen mit hohen Decken ebenso zuverlässig wie kleine Gewerbeflächen in der Operngasse-Nähe.",
    heroTagline: "Festpreis nach Besichtigung · Wieden (1040)",
    localInsight:
      "Für Erben, Hausverwaltungen und Privatkunden im 4. Bezirk: sortierte Entsorgung, Wertanrechnung nach Vereinbarung und besenreine Übergabe.",
    whyUsHeadline: "Wieden entrümpeln – vom Altbau bis Gewerbe",
    ablaufIntro:
      "Im 4. Bezirk halten wir Engpässe bei Straßenarbeiten und Kurzparkzonen von vornherein mit – Ihre Räumung bleibt planbar.",
    servicesTeaser:
      "Messie-Entrümpelung, Wohnungsauflösung und Garagenräumung in Wieden – Festpreis nach kostenloser Besichtigung.",
  },
  "1050": {
    name: "Margareten",
    heroIntro:
      "In 1050 Wien (Margareten) sind viele Objekte geprägt von Zinshäusern und sanierungsbedürftigen Altbauten. Unser Team arbeitet effizient entlang Reinprechtsdorfer Straße, Matzleinsdorfer Platz und in den Seitengassen des 5. Bezirks.",
    heroTagline: "Festpreis nach Besichtigung · Margareten (1050)",
    localInsight:
      "Großvolumige Wohnungsauflösungen, Kellerentrümpelungen und Entrümpelungen vor Übergabe an neue Mieter im 5. Bezirk – mit klarer Kostenübersicht.",
    whyUsHeadline: "Margareten: schnell geräumt, sauber übergeben",
    ablaufIntro:
      "Vom Erstkontakt bis zur besenreinen Wohnung in Margareten – Festpreis, keine versteckten Transport- oder Entsorgungskosten.",
    servicesTeaser:
      "Haus- und Wohnungsentrümpelung in 1050 – inklusive Abtransport und Entsorgung nach österreichischen Vorschriften.",
  },
  "1060": {
    name: "Mariahilf",
    heroIntro:
      "1060 Wien (Mariahilf) lebt von der Mariahilfer Straße, kleinen Innenhöfen und dichtem Wohnbau. Entrümpelungen nahe Haus des Meeres oder Haydnhaus erfordern sensible Nachbarschaftskommunikation – das übernehmen wir.",
    heroTagline: "Festpreis nach Besichtigung · Mariahilf (1060)",
    localInsight:
      "Büroauflösungen, Studentenwohnungen und Nachlassräumungen im 6. Bezirk führen wir auch an Wochenenden und in kurzen Fenstern durch.",
    whyUsHeadline: "Mariahilf – Entrümpelung ohne Stress",
    ablaufIntro:
      "Im 6. Bezirk planen wir Ladezonen und Aufzugskapazitäten entlang der Einkaufsachse – Ihr Termin bleibt verlässlich.",
    servicesTeaser:
      "Von der Ein-Zimmer-Wohnung bis zum ganzen Zinshaus in Mariahilf – alle Services mit Festpreisgarantie nach Besichtigung.",
  },
  "1070": {
    name: "Neubau",
    heroIntro:
      "Im 1070 Wien (Neubau) treffen Szeneviertel und Altbau aufeinander – von Spittelberg bis Neubaugasse. Wir entrümpeln Künstlerateliers, kleine Läden und Wohnungen mit engen Treppenhäusern professionell und diskret.",
    heroTagline: "Festpreis nach Besichtigung · Neubau (1070)",
    localInsight:
      "Verlassenschaften, Wohnungswechsel und Gewerbeauflösungen im 7. Bezirk: strukturiert sortieren, verwerten, entsorgen – besenrein übergeben.",
    whyUsHeadline: "Neubau entrümpeln – diskret im Szenebezirk",
    ablaufIntro:
      "Im 7. Bezirk kennen wir typische Altbau-Herausforderungen: enge Stiegen, fehlende Liftstopps, Kurzparkzonen – wir lösen das vorab.",
    servicesTeaser:
      "Wohnungs- und Kellerentrümpelung in 1070 – Festpreis, Entsorgung und Transport aus einer Hand.",
  },
  "1080": {
    name: "Josefstadt",
    heroIntro:
      "1080 Wien (Josefstadt) mit Theater an der Wien und Universitätsnähe verlangt leise, saubere Abläufe. Wir räumen Altbauwohnungen, Dachgeschoßabteile und kleine Büros im 8. Bezirk respektvoll gegenüber Nachbarn.",
    heroTagline: "Festpreis nach Besichtigung · Josefstadt (1080)",
    localInsight:
      "Ideal für Erbengemeinschaften und Hausverwaltungen: Nachlass- und Haushaltsauflösungen in Josefstadt mit dokumentiertem Ablauf.",
    whyUsHeadline: "Josefstadt – feinfühlig entrümpelt",
    ablaufIntro:
      "Besichtigung im 8. Bezirk, verbindliches Angebot, Räumung inklusive Entsorgung – auch bei kurzfristigen Übergabeterminen.",
    servicesTeaser:
      "Dachboden, Keller und Wohnung in der Josefstadt – Festpreis nach Besichtigung, keine Überraschungen.",
  },
  "1090": {
    name: "Alsergrund",
    heroIntro:
      "1090 Wien (Alsergrund) rund um die medizinischen Einrichtungen und die Uni-Lage bringt viele temporäre Wohnungen und Erbwohnungen mit sich. Wir entrümpeln im 9. Bezirk von Währinger Straße bis Rossau zuverlässig.",
    heroTagline: "Festpreis nach Besichtigung · Alsergrund (1090)",
    localInsight:
      "Für Ärztehaus-Nähe, Altbauten und moderne Neubauten: Entrümpelung nach Todesfall, Messie-Sanierung und Büroräumung im 9. Bezirk.",
    whyUsHeadline: "Alsergrund – erfahren bei Altbau & Übergabe",
    ablaufIntro:
      "Im 9. Bezirk stimmen wir uns mit Verwaltungen und Erben ab – Festpreis, klare Kommunikation, saubere Übergabe.",
    servicesTeaser:
      "Komplette Haushaltsauflösung oder Teilräumung in 1090 – inklusive Transport und Entsorgung.",
  },
  "1100": {
    name: "Favoriten",
    heroIntro:
      "Bei Entrümpelungen in 1100 Wien (Favoriten) packen wir schnell und effizient an. Großvolumige Gemeindebauten (Wiener Wohnen) rund um den Reumannplatz erfordern eingespielte Teams und große Transportfahrzeuge. Wir erledigen Ihre Räumung im 10. Bezirk blitzschnell.",
    heroTagline: "Festpreis nach Besichtigung · Favoriten (1100)",
    localInsight:
      "Wohnungsauflösungen, Keller- und Lagerentrümpelungen im 10. Bezirk – mit klarer Personalplanung und kurzen Reaktionszeiten.",
    whyUsHeadline: "Favoriten – große Objekte, klare Festpreise",
    ablaufIntro:
      "Im 10. Bezirk koordinieren wir Mehrfamilienhäuser und Gewerbehöfe – Besichtigung vor Ort, dann verbindlicher Festpreis.",
    servicesTeaser:
      "Hausentrümpelung, Messie-Wohnung und Nachlass in 1100 – alles mit Festpreis nach Besichtigung.",
  },
  "1110": {
    name: "Simmering",
    heroIntro:
      "1110 Wien (Simmering) verbindet Wohnbau mit Industrie- und Logistikflächen. Wir entrümpeln von Zentralfriedhof-Nähe bis zur Albern – Keller, Lagerhallen und Wohnungen im 11. Bezirk mit starkem Fokus auf Transportlogistik.",
    heroTagline: "Festpreis nach Besichtigung · Simmering (1110)",
    localInsight:
      "Gewerbeauflösungen, Lagerentrümpelungen und private Haushaltsauflösungen in Simmering – termintreu und entsorgungskonform.",
    whyUsHeadline: "Simmering – stark bei Lager & Gewerbe",
    ablaufIntro:
      "Im 11. Bezirk nutzen wir geeignete Zufahrten für LKW und Container – Ihre Räumung bleibt wirtschaftlich kalkuliert.",
    servicesTeaser:
      "Lager-, Garagen- und Wohnungsentrümpelung in 1110 – Festpreis, Entsorgung inklusive.",
  },
  "1120": {
    name: "Meidling",
    heroIntro:
      "1120 Wien (Meidling) entlang der Meidlinger Hauptstraße und am Philadelphiabrücke-Umfeld ist vielfältig bewohnt. Wir kennen die Mischung aus Altbau, Nachkriegsbau und Büros im 12. Bezirk – für jede Größe das passende Team.",
    heroTagline: "Festpreis nach Besichtigung · Meidling (1120)",
    localInsight:
      "Nachlassräumungen, Wohnungswechsel und Kellerfreimachungen in Meidling – besenrein, mit Wertanrechnung wo sinnvoll.",
    whyUsHeadline: "Meidling entrümpeln – verlässlich & lokal",
    ablaufIntro:
      "Im 12. Bezirk halten wir Besichtigung und Räumung oft innerhalb weniger Tage – Festpreis nach Objektcheck.",
    servicesTeaser:
      "Wohnungs- und Hausentrümpelung in 1120 – transparent, Festpreis, fachgerechte Entsorgung.",
  },
  "1130": {
    name: "Hietzing",
    heroIntro:
      "1130 Wien (Hietzing) steht für Villen, gepflegte Zinshäuser und Nähe zu Schönbrunn. Entrümpelungen im 13. Bezirk – von Hietzing bis Speising – erfordern sorgsamen Umgang mit wertvollen Inventarstücken und großzügigen Grundrissen.",
    heroTagline: "Festpreis nach Besichtigung · Hietzing (1130)",
    localInsight:
      "Haushaltsauflösungen in repräsentativen Objekten, Gartenhaus-Entrümpelungen und diskrete Verlassenschaftsräumungen in Hietzing.",
    whyUsHeadline: "Hietzing – diskret bei Villen & Altbau",
    ablaufIntro:
      "Im 13. Bezirk planen wir lange Zufahrten und private Garagen ein – Übergabe besenrein nach Vereinbarung.",
    servicesTeaser:
      "Garten-, Dachboden- und Wohnungsentrümpelung in 1130 – Festpreis nach Besichtigung.",
  },
  "1140": {
    name: "Penzing",
    heroIntro:
      "1140 Wien (Penzing) reicht vom Otto-Wagner-Ortskern bis Baumgart und Hütteldorf. Im 14. Bezirk entrümpeln wir Einfamilienhäuser, Reihenhausanlagen und Altbauwohnungen – mit Erfahrung bei Hanglagen und schmalen Zufahrten.",
    heroTagline: "Festpreis nach Besichtigung · Penzing (1140)",
    localInsight:
      "Ideal für größere Haushaltsauflösungen und Keller-Entrümpelungen in Penzing – inklusive Sortierung und Entsorgung.",
    whyUsHeadline: "Penzing – vom Haus bis zur Wohnung",
    ablaufIntro:
      "Im 14. Bezirk kalkulieren wir Steigungen, Hofzufahrten und Entsorgungswege realistisch in den Festpreis ein.",
    servicesTeaser:
      "Haus-, Keller- und Wohnungsräumung in 1140 – ein Festpreis, keine Nachforderungen.",
  },
  "1150": {
    name: "Rudolfsheim-Fünfhaus",
    heroIntro:
      "1150 Wien (Rudolfsheim-Fünfhaus) um Westbahnhof und Reindorfgasse ist urban und dicht. Wir entrümpeln im 15. Bezirk schnell – ob Nachlasswohnung, Messie-Objekt oder Gewerbe nahe Gürtel.",
    heroTagline: "Festpreis nach Besichtigung · Rudolfsheim-Fünfhaus (1150)",
    localInsight:
      "Wohnungsauflösungen vor Neuvermietung, Keller- und Dachbodenräumungen im 15. Bezirk – strukturiert und nachvollziehbar dokumentiert.",
    whyUsHeadline: "15. Bezirk – schnell & strukturiert",
    ablaufIntro:
      "Im 15. Bezirk sind kurze Wege zur Besichtigung möglich – danach verbindlicher Festpreis und fixer Räumungstermin.",
    servicesTeaser:
      "Messie-, Nachlass- und Standard-Entrümpelung in 1150 – Festpreis nach kostenloser Besichtigung.",
  },
  "1160": {
    name: "Ottakring",
    heroIntro:
      "1160 Wien (Ottakring) mit Brunnenmarkt-Flair und dichtem Wohnbau braucht pragmatische Lösungen. Wir räumen im 16. Bezirk von Ottakringer Straße bis Neulerchenfeld – Wohnungen, Keller und kleine Betriebe.",
    heroTagline: "Festpreis nach Besichtigung · Ottakring (1160)",
    localInsight:
      "Großobjekte, Mehrparteienhäuser und private Haushaltsauflösungen in Ottakring – mit erfahrenen Räumteams.",
    whyUsHeadline: "Ottakring – bodenständig & effizient",
    ablaufIntro:
      "Im 16. Bezirk halten wir Kosten durch klare Volumenabschätzung bei der Besichtigung stabil – Festpreis garantiert.",
    servicesTeaser:
      "Wohnungs- und Kellerentrümpelung in 1160 – inklusive Entsorgung und Abtransport.",
  },
  "1170": {
    name: "Hernals",
    heroIntro:
      "1170 Wien (Hernals) entlang der Alszeile und am Kalvarienberg verbindet Altbau mit ruhigen Wohnstraßen. Wir entrümpeln im 17. Bezirk diskret – Nachlass, Verlassenschaft und Wohnungsauflösung mit lokalem Know-how.",
    heroTagline: "Festpreis nach Besichtigung · Hernals (1170)",
    localInsight:
      "Dachboden- und Kellerfreimachungen, Haushaltsauflösungen in Hernals – besenrein für neue Mieter oder Erben.",
    whyUsHeadline: "Hernals – Nachlass & Auflösung",
    ablaufIntro:
      "Im 17. Bezirk stimmen wir Räumungstermine mit Verwaltungen ab – Festpreis, transparente Leistungsliste.",
    servicesTeaser:
      "Alle Entrümpelungsleistungen in 1170 – Festpreis nach Besichtigung, Entsorgung inklusive.",
  },
  "1180": {
    name: "Währing",
    heroIntro:
      "Für exklusive Wohnungsauflösungen und Entrümpelungen in 1180 Wien (Währing) bieten wir maßgeschneiderte Lösungen. Egal ob es sich um herrschaftliche Villen im Cottageviertel oder Zinshäuser nahe dem Türkenschanzpark handelt – wir garantieren eine besenreine Übergabe zum Fixpreis.",
    heroTagline: "Festpreis nach Besichtigung · Währing (1180)",
    localInsight:
      "Verlassenschaften, Studierendenwohnungen und repräsentative Altbauauflösungen in Währing – mit Wertschätzung für Inventar und Gebäude.",
    whyUsHeadline: "Währing – maßgeschneidert entrümpeln",
    ablaufIntro:
      "Im 18. Bezirk planen wir Cottageviertel-Zufahrten und Parkregeln ein – Ihre Übergabe bleibt pünktlich.",
    servicesTeaser:
      "Wohnungs-, Villa- und Kellerentrümpelung in 1180 – Festpreis nach Objektbesichtigung.",
  },
  "1190": {
    name: "Döbling",
    heroIntro:
      "1190 Wien (Döbling) von Grinzing über Unterdöbling bis Kahlenberg – hier dominieren Villen, Weinberglagen und teure Altbauwohnungen. Im 19. Bezirk entrümpeln wir mit Erfahrung bei Hanglagen, langen Zufahrten und sensiblen Nachbarschaften.",
    heroTagline: "Festpreis nach Besichtigung · Döbling (1190)",
    localInsight:
      "Haushaltsauflösungen in Grinzing, Garagen- und Gartenhaus-Entrümpelungen sowie diskrete Nachlassräumungen in Döbling.",
    whyUsHeadline: "Döbling – Villen & Weinberglagen",
    ablaufIntro:
      "Im 19. Bezirk kalkulieren wir Steigungen und enge Weinstraßen realistisch – Festpreis nach Besichtigung vor Ort.",
    servicesTeaser:
      "Garten-, Haus- und Wohnungsentrümpelung in 1190 – besenrein, Festpreis, Entsorgung inklusive.",
  },
  "1200": {
    name: "Brigittenau",
    heroIntro:
      "1200 Wien (Brigittenau) am Donaukanal verbindet Gemeindebau, Neubau und Gewerbe. Wir entrümpeln im 20. Bezirk effizient – große Stiegenhäuser, Wiener-Wohnen-Objekte und private Auflösungen.",
    heroTagline: "Festpreis nach Besichtigung · Brigittenau (1200)",
    localInsight:
      "Wohnungsauflösungen, Keller- und Lagerentrümpelungen in Brigittenau – mit Teams, die Großvolumen beherrschen.",
    whyUsHeadline: "Brigittenau – Großobjekte im Griff",
    ablaufIntro:
      "Im 20. Bezirk koordinieren wir Container und LKW-Stellplätze am Kanal – terminsicher und kostentransparent.",
    servicesTeaser:
      "Haus- und Wohnungsentrümpelung in 1200 – Festpreis nach Besichtigung.",
  },
  "1210": {
    name: "Floridsdorf",
    heroIntro:
      "1210 Wien (Floridsdorf) ist der flächengrößte Bezirk – von Strebersdorf bis Donauinsel. Wir entrümpeln im 21. Bezirk mit starken Logistikteams: Reihenhäuser, Hochhaus, Gewerbe und Nachlasswohnungen nordöstlich der Donau.",
    heroTagline: "Festpreis nach Besichtigung · Floridsdorf (1210)",
    localInsight:
      "Lager-, Keller- und komplette Haushaltsauflösungen in Floridsdorf – kurze Wege von unserem Standort Richtung 1230 Wien.",
    whyUsHeadline: "Floridsdorf – Nordbezirk, starke Logistik",
    ablaufIntro:
      "Im 21. Bezirk planen wir lange Anfahrtswege in den Festpreis ein – Besichtigung vor Ort, dann verbindliches Angebot.",
    servicesTeaser:
      "Alle Entrümpelungsservices in 1210 – Festpreis, Entsorgung und Transport aus einer Hand.",
  },
  "1220": {
    name: "Donaustadt",
    heroIntro:
      "1220 Wien (Donaustadt) mit UNO-City, Aspern und Seestadt bringt moderne Wohnblöcke und große Kelleranlagen. Wir entrümpeln im 22. Bezirk – von Kagran bis Stadlau – mit Erfahrung bei Tiefgaragen und Bewachungszonen.",
    heroTagline: "Festpreis nach Besichtigung · Donaustadt (1220)",
    localInsight:
      "Büroauflösungen, Wohnungswechsel und Haushaltsauflösungen in Donaustadt – strukturiert, dokumentiert, besenrein.",
    whyUsHeadline: "Donaustadt – modern & großvolumig",
    ablaufIntro:
      "Im 22. Bezirk stimmen wir Tiefgaragen-Zufahrten und Liftreservierungen mit Verwaltungen ab.",
    servicesTeaser:
      "Wohnungs-, Büro- und Kellerentrümpelung in 1220 – Festpreis nach Besichtigung.",
  },
  "1230": {
    name: "Liesing",
    heroIntro:
      "1230 Wien (Liesing) von Kalksburg bis Rodaun – südlich, gewachsen, viel Einfamilien- und Reihenhausgebiet. Unser Firmensitz liegt in Liesing: Entrümpelungen im 23. Bezirk mit kürzesten Wegen und bester Ortskenntnis.",
    heroTagline: "Festpreis nach Besichtigung · Liesing (1230) – unser Bezirk",
    localInsight:
      "Haushaltsauflösungen, Verlassenschaften und Gewerberäumungen in Liesing – direkt vom lokalen Team, inklusive Brunner Straße als Anlaufstelle.",
    whyUsHeadline: "Liesing – Ihr Entrümpler vor der Haustür",
    ablaufIntro:
      "Im 23. Bezirk sind Besichtigung und Räumung besonders schnell planbar – Festpreis nach Objektcheck vor Ort.",
    servicesTeaser:
      "Haus-, Garten- und Wohnungsentrümpelung in 1230 – Festpreis, Entsorgung inklusive.",
  },
};

const REGION_COPY: Record<string, LocationPageCopy> = {
  "entruempelung-niederoesterreich": {
    name: "Niederösterreich",
    heroIntro:
      "Entrümpelungen in Niederösterreich – von Mödling und Baden bis Wiener Neustadt und Schwechat. Wir bedienen das Wiener Umland mit kurzen Anfahrtswegen, großen Fahrzeugen und Festpreisen nach Besichtigung vor Ort.",
    heroTagline: "Festpreis nach Besichtigung · Niederösterreich",
    localInsight:
      "Einfamilienhäuser, Betriebsauflösungen und Nachlassobjekte in NÖ: sortierte Entsorgung, Wertanrechnung und besenreine Übergabe – ohne Wien-Stadt-Parkplatz-Chaos, dafür mit regionaler Logistik.",
    whyUsHeadline: "Niederösterreich – Wien-Umland ohne Umwege",
    ablaufIntro:
      "Besichtigung in NÖ, Festpreis, Räumung mit eingespielten Teams – ideal für Pendlergemeinden südlich und östlich von Wien.",
    servicesTeaser:
      "Haus-, Keller- und Wohnungsentrümpelung in ganz Niederösterreich – Festpreis nach kostenloser Besichtigung.",
  },
  "entruempelung-burgenland": {
    name: "Burgenland",
    heroIntro:
      "Im Burgenland entrümpeln wir von Eisenstadt über Neusiedl am See bis in die Grenzregion zu Wien. Haushaltsauflösungen, Lager- und Gewerberäumungen mit klaren Festpreisen – auch wenn die Anfahrt über die Landesgrenze erfolgt.",
    heroTagline: "Festpreis nach Besichtigung · Burgenland",
    localInsight:
      "Nachlass, Verlassenschaft und Betriebsauflösungen im Burgenland: diskret, termintreu, mit fachgerechter Entsorgung nach österreichischem Recht.",
    whyUsHeadline: "Burgenland – von Wien aus schnell erreichbar",
    ablaufIntro:
      "Wir planen Anfahrt, Container und Entsorgungsstellen im Burgenland effizient – Festpreis nach Besichtigung, keine versteckten Zuschläge.",
    servicesTeaser:
      "Wohnungs- und Hausentrümpelung im Burgenland – alle Leistungen mit Festpreisgarantie.",
  },
};

export function getLocationPageCopyByPlz(plz: number | string): LocationPageCopy | undefined {
  return WIEN_COPY[String(plz)];
}

export function getLocationPageCopyByRegionSlug(slug: string): LocationPageCopy | undefined {
  return REGION_COPY[slug];
}
