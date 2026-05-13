import type { ServiceCardData } from "@/data/site-content";
import { SERVICES } from "@/data/site-content";

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
      "Ob Einfamilienhaus, Reihenhaus oder Mehrparteienhaus: Wir übernehmen die komplette oder teilweise Hausräumung — von Kellergeschoss bis Dachboden, inklusive Abtransport und fachgerechter Entsorgung.",
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
      "Wohnungsentrümpelungen sind oft zeitkritisch — z. B. bei Übergabeterminen, Nachlass oder Umzug. Wir arbeiten effizient, rücksichtsvoll gegenüber Nachbarn und mit sauberer Übergabe der Wohnung.",
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
      "Keller und Abteile sammeln über Jahre Kartons, alte Möbel und Geräte. Wir schaffen Platz — strukturiert, mit klarem Festpreis und sauberer Freilegung der Fläche für Sie oder die Hausgemeinschaft.",
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
      "Lager, Kleinlager und Firmendepots müssen manchmal schnell frei werden — z. B. bei Auszug, Neuvermietung oder Bestandsbereinigung. Wir sortieren, verladen und entsorgen strukturiert, damit die Fläche wieder nutzbar ist.",
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
      "Büroflächen, Coworking oder Praxisräume sollen oft diskret und termingenau geleert werden — inklusive Aktenresten, Möbeln und Technik. Wir achten auf saubere Trennung und verlässliche Übergabe.",
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
      "Garagen und Stellplätze werden häufig zur langjährigen Lagerstätte. Wir räumen schnell und gründlich, damit Sie wieder ein- und ausfahren oder die Fläche neu nutzen können.",
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
      "Dachböden sind oft schwer zugänglich und über Jahre voll geworden. Wir arbeiten sicher und strukturiert — mit Schutz sensibler Bereiche und realistischer Zeitplanung über enge Zugänge.",
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
      "Messie-Situationen erfordern Sensibilität, Geduld und einen strukturierten Plan. Wir gehen respektvoll vor, minimieren Stress für Betroffene und Angehörige und arbeiten in überschaubaren Schritten.",
      "Ein persönliches Gespräch und Besichtigung helfen, Erwartungen und Tempo abzustimmen — danach ein klares Angebot.",
    ],
    includedBullets: [
      "Respektvolle Kommunikation und diskrete Ausführung",
      "Schrittweise Räumung möglich — nicht „alles an einem Tag“, wenn das nicht gewünscht ist",
      "Koordination mit Sozialdienst oder Angehörigen nach Absprache",
      "Fachgerechte Entsorgung und besenreine Übergabe bei vollem Umfang",
    ],
    faq: [
      {
        question: "Wie läuft der erste Kontakt ab?",
        answer:
          "Unverbindliches Gespräch und Besichtigung — wir hören zu, klären Grenzen (was bleibt, was weg muss) und schlagen ein realistisches Vorgehen vor.",
      },
      {
        question: "Wird diskret gearbeitet?",
        answer:
          "Ja. Unauffällige Fahrzeuge und terminliche Fenster sind möglich — bitte im Vorfeld ansprechen.",
      },
      {
        question: "Können Angehörige dabei sein?",
        answer:
          "In der Regel ja, soweit es für alle Beteiligten tragbar ist. Wir passen Tempo und Kommunikation an.",
      },
      {
        question: "Wie werden Hygiene und Schutz gearbeitet?",
        answer:
          "Je nach Situation mit angepasster Schutzausrüstung und klaren Abläufen — das wird vor Ort bewertet, nie aus der Ferne „geraten“.",
      },
      {
        question: "Ist der Preis auch bei großem Aufwand kalkulierbar?",
        answer:
          "Ja — über Besichtigung und definierte Etappen. So bleibt der Finanzrahmen beherrschbar.",
      },
    ],
  },

  gartenentruempelung: {
    introParagraphs: [
      "Gartenhäuser, Geräteschuppen und Außenbereiche sammeln Grünabfallreste, alte Geräte und Möbel. Wir räumen auf, trennen Fraktionen und entsorgen fachgerecht — ideal vor Neuplanung oder Verkauf.",
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
};

export function getServiceDetailPageData(slug: string): ServiceDetailPageData | null {
  const service = SERVICES.find((s) => s.id === slug);
  const extra = SERVICE_PAGE_DETAILS[slug];
  if (!service || !extra) {
    return null;
  }
  return { ...service, ...extra };
}
