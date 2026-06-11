import type { ServiceCardData } from "@/data/site-content";
import { SERVICES } from "@/data/site-content";

/** Letzte inhaltliche Aktualisierung der Leistungsseiten — für Sitemap-`lastmod`. */
export const LEISTUNGEN_CONTENT_UPDATED_AT = "2026-06-11";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServicePageExtra = {
  introParagraphs: string[];
  includedBullets: string[];
  faq: ServiceFaqItem[];
};

export type ServiceDetailPageData = ServiceCardData & ServicePageExtra;

const SERVICE_PAGE_DETAILS: Record<string, ServicePageExtra> = {
  hausentruempelung: {
    introParagraphs: [
      "Ob Einfamilienhaus, Reihenhaus oder Mehrparteienhaus: Wir übernehmen die vollständige oder teilweise Hausräumung — von Kellergeschoss bis Dachboden, inklusive Abtransport und fachgerechter Entsorgung.",
      "Nach einer kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis. So behalten Sie Kosten und Zeitplan von Anfang an im Griff — ohne versteckte Zusatzposten.",
    ],
    includedBullets: [
      "Besichtigung vor Ort und transparente Einschätzung von Volumen & Aufwand",
      "Fixpreis-Angebot — Entsorgung und Anfahrten sind im Preis berücksichtigt",
      "Sortierung, Verladung und Abtransport mit geeigneter Logistik",
      "Besenreine Übergabe; auf Wunsch Koordination mit Verwaltung oder Nachbarn",
    ],
    faq: [
      {
        question: "Was umfasst eine Hausentrümpelung?",
        answer:
          "Typischerweise die Leerung von Möbeln, Kartons, Hausrat und Sperrmüll im gebuchten Umfang — inklusive Keller-, Garagen- oder Dachbodenanteilen, sofern vereinbart. Wertstoffe und Sonderabfälle werden getrennt und fachgerecht entsorgt.",
      },
      {
        question: "Wie wird der Festpreis ermittelt?",
        answer:
          "Wir begehen das Objekt, schätzen Volumen, Zugänge (Treppenhaus, Aufzug) und Aufwand für Verladung. Darauf basiert ein verbindliches Angebot. Ändern Sie den Leistungsumfang später, stimmen wir den Preis vor dem Start transparent nach.",
      },
      {
        question: "Kann ich während der Räumung vor Ort sein?",
        answer:
          "Ja, das ist möglich. Viele Kundinnen und Kunden übergeben uns auch einen Schlüssel oder eine vertretungsberechtigte Person — je nach Vertrauenslage und Zeitplan. Wir koordinieren das mit Ihnen im Vorfeld.",
      },
      {
        question: "Was passiert mit Elektrogeräten und Altmöbeln?",
        answer:
          "Elektroaltgeräte und andere pflichtige Fraktionen werden der gesetzlichen Entsorgung zugeführt. Möbel und Materialien werden, soweit möglich, stoffstromgerecht getrennt — Details sind im Angebot beschrieben.",
      },
      {
        question: "Wie lange dauert eine typische Hausräumung?",
        answer:
          "Das hängt von Fläche, Menge und Zugängen ab. Nach der Besichtigung nennen wir Ihnen eine realistische Dauer — oft reicht ein Tag, bei großen Beständen auch mehr. Kurzfristige Termine sind nach Absprache möglich.",
      },
    ],
  },

  wohnungsentruempelung: {
    introParagraphs: [
      "Wohnungsentrümpelungen sind oft zeitkritisch — z. B. bei Übergabeterminen, Nachlass oder Umzug. Wir arbeiten zügig, rücksichtsvoll gegenüber Nachbarn und mit sauberer Übergabe der Wohnung.",
      "Ob komplette Leerung oder Teilbereiche: Nach Objektbesichtigung erhalten Sie einen klaren Festpreis und einen fairen Zeitplan.",
    ],
    includedBullets: [
      "Diskrete Abwicklung — wichtig bei Nachlass- und Mietwohnungssituationen",
      "Fixpreis nach Besichtigung; kein Stundenlohn mit Überraschungszuschlägen",
      "Schutz sensibler Bereiche (z. B. Treppenhaus) und sauberes Abschlussprotokoll möglich",
      "Abtransport, Entsorgung und besenreine Übergabe",
    ],
    faq: [
      {
        question: "Kann die Wohnung am selben Tag übergeben werden?",
        answer:
          "Oft ja — abhängig von Größe und Zustand. Nach der Besichtigung sagen wir Ihnen, ob eine Tagesräumung realistisch ist oder ob mehr Zeit nötig ist. Wir planen Puffer für Übergabetermine ein.",
      },
      {
        question: "Was ist mit Einbauküchen und fest verbauten Elementen?",
        answer:
          "Standard ist die Entsorgung von losem Hausrat und Möbeln. Demontage von Einbauten nur nach gesonderter Vereinbarung und Aufwand — das klären wir in der Besichtigung.",
      },
      {
        question: "Wie gehen Sie mit persönlichen Dokumenten um?",
        answer:
          "Wir empfehlen, Wertsachen und Dokumente vorab zu entfernen. Übrig gebliebene Schriftstücke können nach Absprache sicher separiert oder vernichtet werden — Details besprechen wir vor Ort.",
      },
      {
        question: "Ist die Entsorgung im Preis enthalten?",
        answer:
          "Ja, bei unserem Festpreis sind Transport und fachgerechte Entsorgung der vereinbarten Fraktionen einkalkuliert — ohne spätere „Müllgebühren“ im Kleingedruckten.",
      },
      {
        question: "Räumen Sie auch nur einzelne Räume?",
        answer:
          "Ja. Teilaufträge sind möglich — Umfang und Preis legen wir in der Besichtigung gemeinsam fest.",
      },
    ],
  },

  kellerentruempelung: {
    introParagraphs: [
      "Keller und Abteile sammeln über Jahre Kartons, alte Möbel und Geräte. Wir schaffen Platz — strukturiert, mit klarem Festpreis und sauberer Freilegung der Fläche für Sie oder die Hausgemeinschaft in Wien.",
      "Enge Zugänge und Treppen sind im Aufwand berücksichtigt; nach Besichtigung wissen Sie genau, was ansteht.",
    ],
    includedBullets: [
      "Realistische Einschätzung bei engen Kellerabgängen und schweren Teilen",
      "Trennung von Wertstoffen und Sperrmüll nach Vorgaben",
      "Abtransport inklusive — kein eigener Container notwendig",
      "Besenreiner Keller bei voller Leerung nach Vereinbarung",
    ],
    faq: [
      {
        question: "Wie wird bei wenig Platz zum Rangieren gearbeitet?",
        answer:
          "Wir planen Verladung in Etappen und passende Fahrzeuge. Das fließt in Besichtigung und Preis ein — enge Treppen sind kein Automatik-Aufpreis „von hinten“, sondern transparent im Angebot.",
      },
      {
        question: "Können nur einzelne Kellerabteile geleert werden?",
        answer:
          "Ja. Wir markieren den vereinbarten Bereich und räumen nur diesen — ideal bei Mietwohnungen mit geteilten Kellerkorridoren.",
      },
      {
        question: "Was passiert mit Altmetall und Elektroschrott?",
        answer:
          "Getrennte Sammlung und Weiterleitung an die jeweiligen Entsorgungswege — wie im Angebot aufgeführt.",
      },
      {
        question: "Brauche ich eine Genehmigung der Hausverwaltung?",
        answer:
          "Bei Stellplätzen und gemeinschaftlichen Bereichen ist oft eine kurze Info sinnvoll. Wir unterstützen mit Zeitfenster und Park-/Ladeinformation, falls gewünscht.",
      },
      {
        question: "Wie schnell ist ein Termin möglich?",
        answer:
          "Je nach Auslastung oft innerhalb weniger Tage bis weniger Wochen. Kurzfristige Einsätze sind nach Absprache möglich.",
      },
    ],
  },

  lagerentruempelung: {
    introParagraphs: [
      "Lager, Kleinlager und Firmendepots müssen manchmal schnell frei werden — z. B. bei Auszug, Neuvermietung oder Bestandsbereinigung. Wir sortieren, verladen und entsorgen strukturiert, damit die Fläche wieder nutzbar wird.",
      "Der Festpreis basiert auf Besichtigung: Volumen, Hubhöhe, Stapler-Zugang und Entsorgungsmix werden realistisch bewertet.",
    ],
    includedBullets: [
      "Einschätzung von Paletten, Regalsystemen und Sperrgut",
      "Koordination von Abtransport und Entsorgungsfraktionen",
      "Optional: Etappenräumung bei laufendem Restbetrieb (nach Absprache)",
      "Dokumentation der Leerung auf Wunsch für Übergabeprotokolle",
    ],
    faq: [
      {
        question: "Räumen Sie auch gewerblich genutzte Lager?",
        answer:
          "Ja. Umfang und ggf. Sonderabfälle klären wir in der Besichtigung — das Angebot ist dann passend zur Situation vor Ort.",
      },
      {
        question: "Ist Stapler oder Hubwagen notwendig?",
        answer:
          "Wenn vorhanden, erleichtert das die Arbeit. Fehlt das, planen wir manuelle Verladung oder passende Hilfsmittel — vorab kalkuliert.",
      },
      {
        question: "Können Waren noch verkauft oder gespendet werden?",
        answer:
          "Grundsätzlich ja — was Sie vorab separieren, wird nicht mitentsorgt. Restliche Bestände entsorgen wir gemäß Auftrag.",
      },
      {
        question: "Wie wird der Preis bei sehr großen Mengen berechnet?",
        answer:
          "Über geschätztes Gesamtvolumen, Aufwand und Entsorgungsanteile — kein Rätselraten, sondern Besichtigung und schriftliches Angebot.",
      },
      {
        question: "Geht das auch am Wochenende?",
        answer:
          "Nach Absprache und soweit verfügbar — gerade bei gewerblichen Objekten zur Minimierung von Betriebsunterbrechungen.",
      },
    ],
  },

  bueroentruempelung: {
    introParagraphs: [
      "Büroflächen, Coworking oder Praxisräume sollen oft diskret und termingenau geleert werden — inklusive Aktenresten, Möbeln und Technik. Wir achten auf saubere Trennung und verlässliche Übergabe in Wien.",
      "Nach Besichtigung erhalten Sie einen Festpreis; sensible Bereiche behandeln wir nach Ihren Vorgaben.",
    ],
    includedBullets: [
      "Diskrete Abwicklung und nach Absprache getrennte Entsorgung von Datenträgern (Konzept vor Ort)",
      "Demontage leichter Büromöbel nach Vereinbarung",
      "Koordination mit Facility oder Objektverwaltung möglich",
      "Abtransport und fachgerechte Entsorgung der vereinbarten Fraktionen",
    ],
    faq: [
      {
        question: "Wie werden Akten und Datenträger behandelt?",
        answer:
          "Das besprechen wir vorab: Eigenes Schreddern, externe Dienstleister oder gesonderte Übergabe — je nach Compliance-Anforderung. Nicht einfach „mit auf den Container“, ohne Absprache.",
      },
      {
        question: "Können IT-Geräte mitgenommen werden?",
        answer:
          "Elektrogeräte werden der Elektroaltgeräte-Entsorgung zugeführt. Ob Geräte verbleiben oder mitgenommen werden, steht im Leistungsumfang des Angebots.",
      },
      {
        question: "Ist die Räumung außerhalb der Geschäftszeiten möglich?",
        answer:
          "Oft ja — je nach Objekt und Genehmigung. Das planen wir explizit ein.",
      },
      {
        question: "Was passiert mit Restmöbeln in gutem Zustand?",
        answer:
          "Spenden oder Weiterverwertung sind möglich, wenn Sie das wünschen und der Zeitplan passt — Details vorab klären.",
      },
      {
        question: "Wie kurzfristig können Sie starten?",
        answer:
          "Je nach Kapazität oft innerhalb weniger Werktage; Express nach Absprache.",
      },
    ],
  },

  garagenentruempelung: {
    introParagraphs: [
      "Garagen und Stellplätze werden häufig zur langjährigen Lagerstätte. Wir räumen zügig und gründlich, damit Sie wieder ein- und ausfahren oder die Fläche neu nutzen können.",
      "Festpreis nach Besichtigung — inklusive schwerer Teile und fachgerechter Entsorgung.",
    ],
    includedBullets: [
      "Umgang mit Altreifen, Metall und Sperrmüll nach gesonderter Liste im Angebot",
      "Verladung auch bei beengten Garagenzufahrten",
      "Sauberkeit nach Abschluss nach Vereinbarung",
      "Transparente Kosten — keine versteckten Entsorgungszuschläge",
    ],
    faq: [
      {
        question: "Entsorgen Sie auch Altreifen und Ölreste?",
        answer:
          "Sonderabfälle nur nach gesonderter Vereinbarung und gesetzeskonform — wir listen das transparent im Angebot auf.",
      },
      {
        question: "Passt das Fahrzeug in die Einfahrt?",
        answer:
          "Wir wählen passende Fahrzeuge und Wege — bei sehr engen Zufahrten wird der Aufwand in der Besichtigung berücksichtigt.",
      },
      {
        question: "Kann ich Teile behalten?",
        answer:
          "Ja. Sie markieren oder entfernen vorab, was bleibt — der Rest wird nach Auftrag entsorgt.",
      },
      {
        question: "Wie schnell ist die Garage wieder nutzbar?",
        answer:
          "Meist am selben Tag bei Standardaufträgen; größere Bestände planen wir mit Ihnen nach Zeitfenster.",
      },
      {
        question: "Was kostet eine Garagenentrümpelung grob?",
        answer:
          "Erst nach Besichtigung — Volumen und Sondermaterialien schwanken stark. Sie erhalten danach einen verbindlichen Festpreis.",
      },
    ],
  },

  dachbodenentruempelung: {
    introParagraphs: [
      "Dachböden sind oft schwer zugänglich und über Jahre voll geworden. Wir arbeiten sicher und strukturiert — mit Schutz sensibler Bereiche und realistischer Zeitplanung bei engen Zugängen.",
      "Nach Begutachtung vor Ort: Festpreis und klare Aussage, wie viele Einsatzkräfte und welche Logistik sinnvoll sind.",
    ],
    includedBullets: [
      "Risiko-Einschätzung bei steilen Treppen und Traglast",
      "Verladung über mehrere Etagen transparent im Preis",
      "Entsorgung alter Matratzen, Kartons und Sperrgut",
      "Besenreine Fläche nach voller Leerung nach Vereinbarung",
    ],
    faq: [
      {
        question: "Ist die Dachbodentür zu klein für große Möbel?",
        answer:
          "Dann zerlegen oder teilen wir vor Ort — oder nutzen Außenaufzüge, falls möglich und genehmigt. Das wird besprochen und im Angebot berücksichtigt.",
      },
      {
        question: "Wie sicher arbeiten Sie auf steilen Treppen?",
        answer:
          "Mit geeigneter Teamgröße, Hilfsmitteln und wenn nötig in Etappen — Safety first, kein unnötiges Risiko.",
      },
      {
        question: "Muss die Leiter vom Haus zur Verfügung stehen?",
        answer:
          "Eigenes Equipment bringen wir mit; bestehende Hausmittel können ergänzend genutzt werden, wenn sicher.",
      },
      {
        question: "Entstehen Zusatzkosten für hohe Stockwerke?",
        answer:
          "Mehrweg über Treppen ist im Festpreis berücksichtigt, wenn bei Besichtigung erkennbar. Überraschungen vermeiden wir durch klare Besichtigung.",
      },
      {
        question: "Kann nur halb geleert werden?",
        answer:
          "Ja — Umfang definieren wir gemeinsam und halten uns daran.",
      },
    ],
  },

  "messie-entruempelung": {
    introParagraphs: [
      "Eine Messie-Wohnung entrümpeln — oder gezielt Messie Wohnung reinigen — ist mehr als „alles in Container werfen“. Es braucht Struktur, Erfahrung und respektvollen Umgang — für Betroffene, Angehörige, Betreuer und Hausverwaltungen in Wien.",
      "Als Team für Messie Entrümpelung planen wir vor Ort: Welche Räume zuerst, welche Etappen sinnvoll sind und wie die Messie-Wohnung Räumung termingerecht abgeschlossen werden kann — ohne zusätzlichen Stress.",
      "Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis für die Messie Entrümpelung inklusive Abtransport, fachgerechter Entsorgung und besenreiner Übergabe — transparent und ohne Überraschungen.",
    ],
    includedBullets: [
      "Messie-Wohnung entrümpeln mit diskreter Logistik und abgestimmten Zeitfenstern",
      "Messie Entrümpelung in Etappen — Tempo und Umfang nach Ihrer Situation",
      "Messie-Wohnung Räumung inkl. Sortierung, Verladung und Entsorgung",
      "Schutz von Treppenhaus und Nachbarn — wichtig in Wiener Wohnanlagen",
      "Koordination mit Angehörigen, Betreuung, Verwaltung oder Sanierung",
      "Festpreis nach Besichtigung — kein offenes Stundenmodell",
    ],
    faq: [
      {
        question: "Messie Wohnung reinigen",
        answer:
          "Messie Wohnung reinigen bedeutet bei uns eine strukturierte Messie-Entrümpelung: Sortierung, Verladung, Abtransport und fachgerechte Entsorgung — diskret, in Etappen wenn sinnvoll und mit Festpreis nach Besichtigung. Die Messie-Wohnung Räumung planen wir mit Angehörigen, Betreuung oder Verwaltung abgestimmt.",
      },
      {
        question: "Was umfasst die Messie Entrümpelung bei Ihnen?",
        answer:
          "Die Messie-Wohnung Räumung umfasst im vereinbarten Umfang Sortierung, Verladung, Abtransport und fachgerechte Entsorgung. Messie-Wohnung entrümpeln heißt bei uns: strukturiert, respektvoll und mit klarem Festpreis nach Besichtigung — inklusive besenreiner Übergabe.",
      },
      {
        question: "Wie unterscheidet sich Messie-Wohnung entrümpeln von einer normalen Entrümpelung?",
        answer:
          "Bei Messie Entrümpelung sind oft höhere Mengen, enge Zugänge und sensible Situationen im Spiel. Wir planen Etappen, Hygiene und Logistik gezielt — die Messie-Wohnung Räumung soll für alle Beteiligten beherrschbar bleiben.",
      },
      {
        question: "Wie schnell kann eine Messie-Wohnung entrümpelt werden?",
        answer:
          "Je nach Umfang und Zustand oft über mehrere Tage in Etappen. Nach der Besichtigung nennen wir einen realistischen Zeitplan für die Messie Entrümpelung — mit klarem Ziel, aber ohne unnötigen Druck.",
      },
      {
        question: "Arbeiten Sie diskret bei Messie-Wohnung Räumung?",
        answer:
          "Ja. Unauffällige Fahrzeuge, abgestimmte Zeitfenster und zurückhaltende Kommunikation im Treppenhaus sind Standard — besonders wichtig bei Messie Entrümpelung in belebten Wohnhauslagen.",
      },
      {
        question: "Können Angehörige bei der Messie-Wohnung entrümpeln dabei sein?",
        answer:
          "In der Regel ja. Wir passen Tempo und Ablauf an — die Messie-Wohnung Räumung soll für Betroffene und Familie so weit wie möglich mitgestaltbar sein.",
      },
      {
        question: "Wie wird der Preis für Messie Entrümpelung berechnet?",
        answer:
          "Über kostenlose Besichtigung: Volumen, Zugang, Hygieneaufwand und geplante Etappen. Danach ein verbindlicher Festpreis für die Messie Entrümpelung — transparent, schriftlich und ohne versteckte Posten.",
      },
    ],
  },

  gartenentruempelung: {
    introParagraphs: [
      "Gartenhäuser, Geräteschuppen und Außenbereiche sammeln Grünabfallreste, alte Geräte und Möbel. Wir räumen auf, trennen Fraktionen und entsorgen fachgerecht — ideal vor Neuplanung oder Verkauf in Wien.",
      "Festpreis nach Ansicht vor Ort: Zufahrten, Wege und Volumen fließen ein.",
    ],
    includedBullets: [
      "Entsorgung von Grün- und Sperrgut nach örtlichen Möglichkeiten",
      "Unterstützung bei schweren Keramik- oder Betonteilen nach Vereinbarung",
      "Saubere Fläche nach Abschluss der gebuchten Leistung",
      "Abtransport ohne dass Sie Container selbst stellen müssen",
    ],
    faq: [
      {
        question: "Entfernen Sie auch Sträucher oder kleine Bauschutt?",
        answer:
          "Grünabfall und leichte Gartenabfälle sind oft teil des Auftrags; größere Baumaßnahmen oder Erdbewegungen sind eigenes Gewerk — das trennen wir in der Besichtigung.",
      },
      {
        question: "Kann das Fahrzeug auf das Grundstück?",
        answer:
          "Wenn Zufahrt und Statik das erlauben, ja — sonst Verladung am Rand mit Handkarren o. Ä., im Aufwand berücksichtigt.",
      },
      {
        question: "Was passiert mit Altgeräten aus dem Schuppen?",
        answer:
          "Elektrokleingeräte und ähnliches werden den vorgeschriebenen Wegen zugeführt — wie im Angebot beschrieben.",
      },
      {
        question: "Arbeiten Sie bei jedem Wetter?",
        answer:
          "Leichte Regenfenster sind oft möglich; bei extremen Bedingungen verschieben wir kurzfristig zum Schutz von Team und Grundstück.",
      },
      {
        question: "Wie schnell nach Anfrage können Sie kommen?",
        answer:
          "Je nach Saison und Auslastung — nach Besichtigung mit konkretem Terminvorschlag.",
      },
    ],
  },

  verlassenschaft: {
    introParagraphs: [
      "Verlassenschaft entrümpeln steht oft unter Zeitdruck: Übergabe an Erben, Neuvermietung, Verkauf oder Abwicklung durch die Verwaltung muss termingerecht klappen — in Wien und der Region.",
      "Wir übernehmen die Verlassenschaftsentrümpelung strukturiert und diskret: von der kostenlosen Besichtigung über Sortierung und Abtransport bis zur besenreinen Übergabe — alles aus einer Hand.",
      "Ob Wohnung, Reihenhaus oder größeres Objekt: Verlassenschaft entrümpeln planen wir mit verbindlichem Festpreis, damit Sie Kosten und Ablauf von Anfang an kennen.",
    ],
    includedBullets: [
      "Verlassenschaft entrümpeln mit klarer Abstimmung von Umfang und Terminen",
      "Verlassenschaftsentrümpelung inkl. Abtransport und fachgerechter Entsorgung",
      "Koordination mit Notar, Verwaltung, Erben oder Hausverwaltung",
      "Trennung von Dokumenten und offensichtlichen Wertsachen zur Übergabe",
      "Besenreine Übergabe zum vereinbarten Datum — auch kurzfristig nach Absprache",
      "Festpreis nach Besichtigung — keine nachträglichen Überraschungen",
    ],
    faq: [
      {
        question: "Entrümpelung nach Todesfall",
        answer:
          "Entrümpelung nach Todesfall bei Verlassenschaft bedeutet: hinterlassene Wohnung oder Objekt termingerecht leeren, fachgerecht entsorgen und besenrein übergeben. Verlassenschaft entrümpeln planen wir mit Erben oder Verwaltung — Festpreis nach kostenloser Besichtigung.",
      },
      {
        question: "Was bedeutet Verlassenschaft entrümpeln konkret?",
        answer:
          "Die Verlassenschaftsentrümpelung umfasst die Leerung des Hausrats im vereinbarten Umfang — Möbel, Kartons, Geräte, Textilien und Sperrmüll. Verlassenschaft entrümpeln heißt bei uns: vollständig, termintreu und zum Festpreis nach Besichtigung.",
      },
      {
        question: "Für wen ist eine Verlassenschaftsentrümpelung gedacht?",
        answer:
          "Für Erben, Verwaltungen, Vermieter und Käufer, die eine hinterlassene Wohnung oder ein Objekt rasch nutzbar brauchen. Verlassenschaft entrümpeln koordinieren wir mit der jeweils berechtigten Person — inklusive Schlüsselübergabe.",
      },
      {
        question: "Wie schnell ist eine Verlassenschaftsentrümpelung möglich?",
        answer:
          "Je nach Größe und Zustand oft innerhalb weniger Tage bis Wochen nach Besichtigung. Kurzfristige Termine für Verlassenschaft entrümpeln sind nach Absprache möglich — wir nennen Ihnen realistische Fenster.",
      },
      {
        question: "Finden Sie Dokumente oder Wertsachen?",
        answer:
          "Wir trennen offensichtliche Wertsachen und Unterlagen zur Übergabe. Verlassenschaft entrümpeln soll nichts Wichtiges verlieren — markieren Sie sensible Bereiche oder Schubladen vorab.",
      },
      {
        question: "Ist die Entsorgung bei Verlassenschaft entrümpeln enthalten?",
        answer:
          "Ja. Transport, Verladung und fachgerechte Entsorgung sind im Festpreis der Verlassenschaftsentrümpelung enthalten — inklusive üblicher Sperr- und Wertstofffraktionen im vereinbarten Umfang.",
      },
      {
        question: "Unterscheidet sich Verlassenschaft entrümpeln von Nachlass entrümpeln?",
        answer:
          "Die Begriffe überschneiden sich oft. Verlassenschaftsentrümpelung betont häufig die hinterlassene Wohnung nach Auszug oder Tod; Nachlass entrümpeln den Erbnachlass. Umfang und Preis legen wir in der Besichtigung fest.",
      },
    ],
  },

  nachlass: {
    introParagraphs: [
      "Entrümpelung nach Todesfall verlangt Diskretion und einen Partner, der Termine und Erwartungen der Beteiligten ernst nimmt — ob als Erbe, Testamentsvollstrecker oder Verwaltung.",
      "Wir begleiten die Nachlassentrümpelung von der Besichtigung bis zur besenreinen Übergabe: Sortierung, Abtransport, fachgerechte Entsorgung und klare Kommunikation mit allen Beteiligten.",
      "Ob komplette Wohnung, Haus oder einzelne Räume: Nachlass entrümpeln erhalten Sie zum verbindlichen Festpreis — transparent geplant, ohne versteckte Zusatzposten.",
    ],
    includedBullets: [
      "Nachlassentrümpelung mit respektvollem und strukturiertem Vorgehen",
      "Nachlass entrümpeln inkl. Sortierung, Verladung und Entsorgung",
      "Abstimmung mit Erbengemeinschaft, Notar oder Hausverwaltung",
      "Separierung von Dokumenten, Fotos und offensichtlichen Wertsachen",
      "Etappenplanung bei großen Nachlässen — auf Wunsch",
      "Festpreis nach kostenloser Besichtigung vor Ort",
    ],
    faq: [
      {
        question: "Entrümpelung nach Todesfall",
        answer:
          "Entrümpelung nach Todesfall umfasst die diskrete Leerung der hinterlassenen Wohnung oder des Objekts — inklusive Sortierung persönlicher Dinge, Abtransport und besenreiner Übergabe. Wir koordinieren mit Erben, Verwaltung oder Notar und nennen nach Besichtigung einen verbindlichen Festpreis.",
      },
      {
        question: "Wer beauftragt die Nachlassentrümpelung?",
        answer:
          "Häufig Erben, Testamentsvollstrecker, Verwalter oder Hausverwaltungen. Nachlass entrümpeln koordinieren wir mit der berechtigten Person — inklusive Schlüsselübergabe und Terminabstimmung.",
      },
      {
        question: "Was passiert mit persönlichen Unterlagen beim Nachlass entrümpeln?",
        answer:
          "Dokumente, Urkunden und Wertsachen werden separiert und übergeben. Nachlassentrümpelung bedeutet nicht „alles entsorgen“, sondern geordnetes Vorgehen nach Ihrer schriftlichen oder mündlichen Vorgabe.",
      },
      {
        question: "Kann die Nachlassentrümpelung in Etappen erfolgen?",
        answer:
          "Ja — sinnvoll bei großen Objekten oder wenn Erben mitentscheiden möchten. Nachlass entrümpeln teilen wir auf Wunsch in überschaubare Schritte mit Zwischenübergaben.",
      },
      {
        question: "Wie lange dauert Nachlass entrümpeln typischerweise?",
        answer:
          "Das hängt von Volumen, Zugängen und Entscheidungswegen in der Erbengemeinschaft ab. Nach Besichtigung nennen wir eine realistische Dauer für die Nachlassentrümpelung — oft ein bis mehrere Tage.",
      },
      {
        question: "Wie wird der Preis für Nachlass entrümpeln ermittelt?",
        answer:
          "Über Besichtigung von Volumen, Zugängen (Aufzug, Treppenhaus) und Entsorgungsmix. Danach ein verbindliches Angebot für die Nachlassentrümpelung — Festpreis, schriftlich fixiert.",
      },
      {
        question: "Können Verwertungen den Preis der Nachlassentrümpelung senken?",
        answer:
          "Verwertbare Gegenstände können angerechnet werden — z. B. über Entrümpelung mit Wertausgleich oder Ankauf. Das besprechen wir transparent in der Besichtigung.",
      },
    ],
  },

  haushaltsaufloesung: {
    introParagraphs: [
      "Eine Haushaltsauflösung und Entrümpelung bündelt alles, was bei einer kompletten Haushaltsauflösung anfällt: Sortieren, Verladen, Abtransport und fachgerechte Entsorgung — in Wien und der Region.",
      "Typische Anlässe: Umzug ins Pflegeheim, Erbschaft, Neuvermietung, Verkauf oder Entrümpelung vor Renovierung. Wir übernehmen die Haushaltsauflösung termingerecht und besenrein.",
      "Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis für die Haushaltsauflösung und Entrümpelung — inklusive Anfahrt und Entsorgung im vereinbarten Umfang.",
    ],
    includedBullets: [
      "Haushaltsauflösung und Entrümpelung aus einer Hand — ein Ansprechpartner",
      "Leerung von Wohnung, Keller, Abstell- und Nebenräumen nach Vereinbarung",
      "Demontage leichter Einbauten und Möbel auf Wunsch",
      "Abtransport, Entsorgung und Trennung üblicher Fraktionen inklusive",
      "Besenreine Übergabe für Vermieter, Käufer oder Erben",
      "Festpreis nach Besichtigung — planbar für Nachlass und Mietende",
    ],
    faq: [
      {
        question: "Was umfasst eine Haushaltsauflösung in Wien?",
        answer:
          "Typisch die vollständige oder teilweise Leerung von Möbeln, Hausrat, Kartons, Geräten und Sperrmüll im vereinbarten Umfang. Haushaltsauflösung und Entrümpelung inklusive Transport, Verladung und fachgerechter Entsorgung.",
      },
      {
        question: "Unterscheidet sich Haushaltsauflösung von Wohnungsauflösung?",
        answer:
          "Haushaltsauflösung meint oft den gesamten Haushalt inklusive Nebenräume; Wohnungsauflösung fokussiert die Wohnung selbst. Umfang und Preis legen wir in der Besichtigung für Ihre Haushaltsauflösung und Entrümpelung fest.",
      },
      {
        question: "Kann ich Gegenstände vor der Haushaltsauflösung aussortieren?",
        answer:
          "Ja — was Sie vorab entnehmen oder verschenken, wird nicht mitentsorgt. Der verbleibende Bestand wird gemäß Auftrag bei der Haushaltsauflösung abtransportiert.",
      },
      {
        question: "Sind Keller und Abstellräume in der Haushaltsauflösung dabei?",
        answer:
          "Auf Wunsch ja — Keller, Garage oder Abstellräume planen wir in der Besichtigung mit ein. Haushaltsauflösung und Entrümpelung sollen den kompletten benötigten Umfang abdecken.",
      },
      {
        question: "Wie kurzfristig ist eine Haushaltsauflösung möglich?",
        answer:
          "Je nach Auslastung oft innerhalb weniger Werktage nach Besichtigung. Express-Termine für die Haushaltsauflösung sind nach Absprache möglich — wir nennen realistische Fenster.",
      },
      {
        question: "Wie wird der Preis für Haushaltsauflösung und Entrümpelung berechnet?",
        answer:
          "Über Besichtigung von Volumen, Zugängen und Entsorgungsmix. Danach ein verbindlicher Festpreis — Haushaltsauflösung ohne nachträgliche Stundenzuschläge.",
      },
    ],
  },

  wohnungsaufloesung: {
    introParagraphs: [
      "Wie läuft eine Wohnungsauflösung ab? Zuerst klären wir Umfang und Termin — dann räumen wir zügig, diskret und besenrein: von der Besichtigung über Verladung und Entsorgung bis zur Übergabe an Vermieter, Käufer oder Verwaltung.",
      "Eine Wohnungsauflösung und Entrümpelung ist in Wien meist streng terminiert — Mietende, Käufertermin, Verkauf oder Erbschaft lassen wenig Spielraum.",
      "Nach Objektbesichtigung erhalten Sie einen verbindlichen Festpreis für die Wohnungsauflösung — Wohnungsauflösung und Entrümpelung transparent, ohne versteckte Zusatzkosten.",
    ],
    includedBullets: [
      "Wohnungsauflösung und Entrümpelung mit verbindlichem Festpreis",
      "Schonender Umgang mit Treppenhaus, Aufzug und Nachbarn",
      "Übergabe termingerecht — auch an Übergabetagen nach Absprache",
      "Abtransport und fachgerechte Entsorgung aller vereinbarten Fraktionen",
      "Teilräumungen oder komplette Wohnungsauflösung möglich",
      "Koordination mit Erbengemeinschaft, Verwaltung oder Makler",
    ],
    faq: [
      {
        question: "Wie läuft eine Wohnungsauflösung ab?",
        answer:
          "Nach Ihrer Anfrage besichtigen wir die Wohnung kostenlos und erstellen ein Festpreis-Angebot. Am Termin räumen wir im vereinbarten Umfang, verladen, entsorgen fachgerecht und übergeben besenrein — oft termingerecht zum Mietende, Verkauf oder Erbfall. Wohnungsauflösung und Entrümpelung aus einer Hand.",
      },
      {
        question: "Was beinhaltet eine Wohnungsauflösung?",
        answer:
          "Die vollständige oder teilweise Leerung der Wohnung im vereinbarten Umfang — Möbel, Hausrat, Kartons und Geräte. Wohnungsauflösung und Entrümpelung inklusive Abtransport, Entsorgung und besenreiner Übergabe.",
      },
      {
        question: "Kann die Wohnungsauflösung am Übergabetag fertig sein?",
        answer:
          "Oft ja — abhängig von Größe, Stockwerk und Zustand. Nach Besichtigung sagen wir, ob Wohnungsauflösung und Entrümpelung an einem Tag realistisch ist oder mehr Zeit braucht.",
      },
      {
        question: "Was passiert mit Einbauküchen bei der Wohnungsauflösung?",
        answer:
          "Standard sind lose Möbel und Hausrat. Demontage von Einbauküchen nur nach gesonderter Vereinbarung — klären wir bei der Wohnungsauflösung vor Ort und kalkulieren fair ein.",
      },
      {
        question: "Ist die Wohnungsauflösung auch für Erbengemeinschaften möglich?",
        answer:
          "Ja. Wir koordinieren Termine und Umfang mit allen Beteiligten — Wohnungsauflösung und Entrümpelung nachvollziehbar und mit einem Festpreis für alle Seiten.",
      },
      {
        question: "Was kostet eine Wohnungsauflösung in Wien?",
        answer:
          "Der Preis ergibt sich aus Volumen, Zugang und Entsorgungsmix in der Besichtigung. Danach Festpreis für die Wohnungsauflösung — keine offene Stundenabrechnung.",
      },
      {
        question: "Unterscheidet sich Wohnungsauflösung von Haushaltsauflösung?",
        answer:
          "Die Wohnungsauflösung fokussiert die Wohnung; Haushaltsauflösung oft den gesamten Haushalt inklusive Nebenräume. Beides bieten wir an — Umfang definieren wir gemeinsam vor Ort.",
      },
    ],
  },

  erbschaftshaus: {
    introParagraphs: [
      "Erbschaftshaus entrümpeln oder ein geerbtes Haus entrümpeln bedeutet oft mehr als eine Wohnung: Keller, Dachboden, Garage und jahrzehntelanger Hausrat — in Wien ein großes Organisationsprojekt für Erben.",
      "Wir unterstützen Sie beim Haus entrümpeln nach Erbschaft ebenso wie bei der Wohnung entrümpeln nach Todesfall — strukturiert, diskret und mit einem verbindlichen Festpreis nach Besichtigung.",
      "Ob Einfamilienhaus, Reihenhaus oder Mehrparteien-Objekt: Das Erbschaftshaus planen wir mit klarer Zeitleiste, Abstimmung aller Erben und besenreiner Übergabe für Verkauf, Vermietung oder Neuverteilung.",
    ],
    includedBullets: [
      "Erbschaftshaus entrümpeln inkl. Keller, Garage und Dachboden nach Vereinbarung",
      "Geerbtes Haus entrümpeln mit Abstimmung aller Erben und Verwaltung",
      "Haus entrümpeln nach Erbschaft — termintreu und dokumentierbar",
      "Wohnung entrümpeln nach Todesfall im selben oder separaten Auftrag",
      "Trennung von Dokumenten, Fotos und Wertsachen zur Übergabe",
      "Festpreis nach Besichtigung — Verwertung optional über Wertausgleich oder Ankauf",
    ],
    faq: [
      {
        question: "Entrümpelung nach Todesfall",
        answer:
          "Bei Entrümpelung nach Todesfall leeren wir geerbtes Haus oder Wohnung im vereinbarten Umfang — diskret, termintreu und mit Festpreis nach Besichtigung. Haus entrümpeln nach Erbschaft koordinieren wir mit allen Erben; persönliche Unterlagen und Wertsachen werden separiert übergeben.",
      },
      {
        question: "Was umfasst Erbschaftshaus entrümpeln?",
        answer:
          "Die Leerung des geerbten Objekts im vereinbarten Umfang — Hausrat, Möbel, Nebenräume und Sperrgut. Erbschaftshaus entrümpeln planen wir nach Besichtigung mit Festpreis, Abtransport und fachgerechter Entsorgung.",
      },
      {
        question: "Können Sie auch nur eine Wohnung entrümpeln nach Todesfall?",
        answer:
          "Ja — Teilaufträge sind möglich. Wohnung entrümpeln nach Todesfall in einer Eigentumswohnung oder geerbtes Haus entrümpeln im Gesamtauftrag: Umfang legen wir gemeinsam in der Besichtigung fest.",
      },
      {
        question: "Wie läuft Haus entrümpeln nach Erbschaft ab?",
        answer:
          "Besichtigung, schriftliches Angebot, Termin mit Erben oder Verwaltung, dann Sortierung, Verladung und Entsorgung. Haus entrümpeln nach Erbschaft soll Übergabetermine für Verkauf oder Neuvermietung zuverlässig einhalten.",
      },
      {
        question: "Was ist der Unterschied zwischen Erbschaftshaus und Verlassenschaft?",
        answer:
          "Erbschaftshaus betont das geerbte Objekt nach Erbfall; Verlassenschaft oft die hinterlassene Nutzungseinheit. Beides decken wir ab — Erbschaftshaus entrümpeln mit dem Umfang, den Sie benötigen.",
      },
      {
        question: "Werden Wertgegenstände beim Erbschaftshaus berücksichtigt?",
        answer:
          "Verwertbare Stücke können angerechnet werden — über Entrümpelung mit Wertausgleich oder Entrümpelung mit Ankauf. So kann geerbtes Haus entrümpeln für Erben deutlich günstiger werden.",
      },
      {
        question: "Wie lange dauert Erbschaftshaus entrümpeln?",
        answer:
          "Je nach Größe und Bestand oft ein bis mehrere Tage. Nach Besichtigung nennen wir eine realistische Dauer — Erbschaftshaus entrümpeln mit klarem Endtermin für alle Beteiligten.",
      },
    ],
  },

  wertausgleich: {
    introParagraphs: [
      "Entrümpelung mit Wertausgleich ist die faire Alternative zum „alles entsorgen“: Verwertbare Möbel, Geräte, Werkzeuge oder Sammlungen rechnen wir realistisch gegen den Festpreis — in Wien und der Region.",
      "Besonders nach Erbschaft oder bei großen Haushalten steht noch brauchbarer Hausrat im Weg. Entrümpelung mit Wertausgleich senkt Ihre Kosten, ohne dass Sie selbst Verkaufskanäle organisieren müssen.",
      "Nach Besichtigung sehen Sie schriftlich, welcher Wertausgleich möglich ist — danach der verbindliche Endpreis für die komplette Entrümpelung inklusive Abtransport und besenreiner Übergabe.",
    ],
    includedBullets: [
      "Entrümpelung mit Wertausgleich nach fairer, nachvollziehbarer Bewertung",
      "Transparente Gegenrechnung im Festpreis-Angebot vor Start",
      "Sortierung: Verwertbares vs. Entsorgung — Sie behalten die Übersicht",
      "Restentsorgung, Abtransport und besenreine Übergabe inklusive",
      "Kombinierbar mit Teilräumung, Erbschaft oder Haushaltsauflösung",
      "Kein versteckter „Wertausgleich“ nachträglich — alles fix im Angebot",
    ],
    faq: [
      {
        question: "Wie funktioniert Entrümpelung mit Wertausgleich?",
        answer:
          "Wir schätzen verwertbare Gegenstände bei der Besichtigung und rechnen den realistischen Marktwert gegen die Entrümpelung. Entrümpelung mit Wertausgleich macht große Haushalte und Erbschaften oft deutlich günstiger — der Rest wird fachgerecht entsorgt.",
      },
      {
        question: "Welche Gegenstände eignen sich für Wertausgleich?",
        answer:
          "Gut erhaltene Möbel, Elektrogeräte, Werkzeuge, Fahrräder, Sammlungen oder komplette Einrichtungen — keine starre Mindestliste. Entrümpelung mit Wertausgleich hängt vom konkreten Bestand ab, den wir vor Ort bewerten.",
      },
      {
        question: "Erhalte ich eine schriftliche Aufstellung zum Wertausgleich?",
        answer:
          "Ja. Der Wertausgleich ist im Festpreis-Angebot nachvollziehbar beschrieben — Position für Position, bevor die Entrümpelung mit Wertausgleich startet.",
      },
      {
        question: "Muss ich verwertbare Stücke selbst verkaufen?",
        answer:
          "Nein. Entrümpelung mit Wertausgleich bedeutet: Wir übernehmen Räumung und Verwertungslogistik; der Gegenwert mindert Ihren Festpreis. Sie sparen Zeit und Koordinationsaufwand.",
      },
      {
        question: "Kombinieren Sie Wertausgleich mit Ankauf?",
        answer:
          "Bei hochwertigen Einzelstücken — Antiquitäten, Schmuck, Kameras — kann zusätzlich Entrümpelung mit Ankauf sinnvoll sein. Wir beraten in der Besichtigung, was sich für Wertausgleich und was für direkten Ankauf eignet.",
      },
      {
        question: "Wann lohnt sich Entrümpelung mit Wertausgleich besonders?",
        answer:
          "Bei vollständigen Haushalten, Erbschaften und älteren Einrichtungen mit gut erhaltenen Möbeln und Geräten. Entrümpelung mit Wertausgleich ist dann oft günstiger als reine Entsorgung zum Festpreis ohne Anrechnung.",
      },
    ],
  },

  ankauf: {
    introParagraphs: [
      "Entrümpelung mit Ankauf vereint Räumung und Verwertung in einem Auftrag: Wir räumen den Haushalt und kaufen auf Wunsch Antiquitäten, Antik, Schmuck, Modeschmuck, Kameras und ausgewählte Altwaren direkt an — in Wien und der Region.",
      "Ob Entrümpelung und Altwaren Ankauf nach Erbschaft oder gezielter Schmuck Ankauf in einer Wohnung: Nach Besichtigung erhalten Sie ein Gesamtangebot — Festpreis für die Räumung minus realistischer Ankaufswert.",
      "Sie sparen Zeit, mehrere Kontakte und Abstimmungsaufwand. Entrümpelung mit Ankauf heißt bei uns: ein Team, ein Termin, besenreine Übergabe — transparent vor Start fixiert.",
    ],
    includedBullets: [
      "Entrümpelung mit Ankauf von Antiquitäten, Antik und Altwaren",
      "Entrümpelung mit Schmuck Ankauf und Entrümpelung mit Modeschmuck Ankauf",
      "Entrümpelung mit Kamera Ankauf und Entrümpelung mit Antiquitäten Ankauf",
      "Entrümpelung mit Antik Ankauf — Antik einkauf durch erfahrene Einschätzung",
      "Restliche Entrümpelung, Abtransport und Entsorgung inklusive",
      "Schriftliches Gesamtangebot vor Beginn — keine Nachverhandlung vor der Tür",
    ],
    faq: [
      {
        question: "Was bedeutet Entrümpelung mit Ankauf?",
        answer:
          "Wir räumen den Haushalt besenrein und kaufen vereinbarte Wertgegenstände an — z. B. Entrümpelung mit Antiquitäten Ankauf, Entrümpelung mit Schmuck Ankauf oder Entrümpelung mit Kamera Ankauf. Der Ankaufspreis mindert den Festpreis der Entrümpelung.",
      },
      {
        question: "Welche Kategorien deckt Entrümpelung mit Ankauf ab?",
        answer:
          "Antik einkauf und Antiquitäten, Schmuck Ankauf und Modeschmuck, Kameras, Porzellan, Möbel, Sammlungen und ausgewählte Altwaren. Entrümpelung mit Antik Ankauf und Entrümpelung und Altwaren Ankauf klären wir konkret in der Besichtigung.",
      },
      {
        question: "Muss ich einen separaten Antikhändler beauftragen?",
        answer:
          "Nein. Entrümpelung und Altwaren Ankauf aus einer Hand sparen Zeit — besonders für Erben, die Erbschaftshaus entrümpeln und gleichzeitig Wertsachen verwerten möchten.",
      },
      {
        question: "Wie wird der Preis bei Entrümpelung mit Ankauf berechnet?",
        answer:
          "Festpreis für die komplette Räumung minus realistischer Ankaufswert der vereinbarten Stücke — schriftlich im Angebot, bevor wir starten. Entrümpelung mit Ankauf bleibt so planbar.",
      },
      {
        question: "Bieten Sie auch nur Schmuck Ankauf ohne volle Entrümpelung?",
        answer:
          "Schwerpunkt ist Entrümpelung mit Ankauf im Gesamtpaket. Kleinere Bestände oder reiner Schmuck Ankauf besprechen wir in der Besichtigung — Entrümpelung mit Schmuck Ankauf ist dann oft Teil des Gesamtauftrags.",
      },
      {
        question: "Unterscheidet sich Ankauf von Entrümpelung mit Wertausgleich?",
        answer:
          "Beim Ankauf kaufen wir definierte Stücke direkt an und rechnen den Betrag ab. Entrümpelung mit Wertausgleich rechnet verwertbare Massenware pauschal gegen. Beides kombinierbar — wir empfehlen in der Besichtigung die passende Variante.",
      },
    ],
  },
};

export function getServiceDetailPageData(slug: string): ServiceDetailPageData | null {
  const service = SERVICES.find((s) => s.id === slug);
  const extra = SERVICE_PAGE_DETAILS[slug];
  if (!service || !extra) {
    return null;
  }
  return { ...service, ...extra };
}
