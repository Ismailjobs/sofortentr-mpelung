import RatgeberArticleBody, {
  RatgeberChecklist,
  RatgeberCtaBox,
  RatgeberFreshnessBadge,
  RatgeberH2,
  RatgeberH3,
  RatgeberInternalLink,
  RatgeberLead,
  RatgeberLi,
  RatgeberOl,
  RatgeberP,
  RatgeberTableWrap,
  RatgeberTbody,
  RatgeberTd,
  RatgeberTh,
  RatgeberThead,
  RatgeberTr,
  RatgeberUl,
  RatgeberWarning,
} from "@/components/ratgeber/RatgeberArticleBody";
import { BezirkEarlyCta } from "@/components/ratgeber/BezirkStructureBlocks";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";

export const meta: RatgeberArticleMeta = {
  slug: "siedlungsunion-genossenschaft-entruempelung-wien",
  title: "Siedlungsunion Wien: Nebenräume räumen — Keller, Gartenabteil & Außenlager",
  seoTitle: "Siedlungsunion entrümpeln — Keller, Gartenabteil & Übergabe 2026",
  ogTitle: "Siedlungsunion Wien — Nebenräume und Siedlungs-Übergabe",
  focusKeyword: "Siedlungsunion Entrümpelung Wien",
  description:
    "Siedlungsunion-Wohnung übergeben: Keller, Gartenabteil, Außenlager und Siedlungszufahrt — warum Nebenräume die Übergabe kippen und wie Fixpreis nach Besichtigung entsteht.",
  excerpt:
    "Siedlungsunion-Räumung mit Fokus Nebenräume und Siedlungscharakter — nicht Hochhaus-Lift, nicht Verlassenschaft.",
  freshnessExcerpt: {
    kind: "updated",
    suffix:
      "Praxis-Leitfaden für Siedlungsunion-Objekte: Keller, Gartenabteile, Außenlager und Siedlungszufahrt.",
  },
  publishedAt: "2026-07-06",
  keywords: [
    "Siedlungsunion Entrümpelung Wien",
    "Siedlungsunion Keller räumen",
    "Siedlungsunion Gartenabteil",
    "Siedlungsunion Wohnungsübergabe",
    "Genossenschaftswohnung Siedlungsunion Wien",
    "Nebenräume Genossenschaft räumen",
    "Siedlungsunion besenrein",
  ],
  faq: [
    {
      question: "Warum scheitern Siedlungsunion-Übergaben oft an Nebenräumen?",
      answer:
        "Weil Keller, Gartenabteil oder Außenlager zum Mietobjekt gehören. Eine leere Wohnung mit vollem Abteil gilt bei vielen Abnahmen nicht als übergabefähig — unabhängig davon, wie sauber das Wohnzimmer wirkt.",
    },
    {
      question: "Was ist typisch für Siedlungsunion-Bestände im Vergleich zu Hochhäusern?",
      answer:
        "Siedlungscharakter: niedrigere Geschosse, oft eigene oder zugeordnete Außenflächen, engere Zufahrten, starke Nachbarschaftsnähe. Liftfenster großer Anlagen sind selten der Engpass — Nebenflächen und Zufahrt schon.",
    },
    {
      question: "Muss ein Gartenabteil immer mitgeräumt werden?",
      answer:
        "Wenn es Ihnen zugeordnet ist und zur Rückgabe gehört: ja. Lassen Sie Geräteschuppen, Holzstöße und Sperrmüll nicht „für später“ — später ist oft der Abnahmetag.",
    },
    {
      question: "Wie plane ich die Siedlungszufahrt?",
      answer:
        "Enge Siedlungsstraßen brauchen kurze, klare Entladefenster und Rücksicht auf Nachbarn. Fotos der Zufahrt helfen bei der Kalkulation mehr als reine Zimmerfotos.",
    },
    {
      question: "Wo liegen Verlassenschaft und ARWAG-Protokoll?",
      answer:
        "Verlassenschaft: Bauhilfe-Ratgeber. Abnahmeprotokoll/Kaution: ARWAG. Hochhaus-Logistik: BUWOG. Hier: Nebenräume und Siedlungscharakter der Siedlungsunion.",
    },
    {
      question: "Offizielle Siedlungsunion-Infos?",
      answer: "Auf siedlungsunion.at sowie in Vertrag und Übergabeunterlagen.",
    },
  ],
  howTo: {
    name: "Siedlungsunion-Objekt inkl. Nebenräumen übergeben",
    steps: [
      {
        name: "Nebenraum-Inventar erstellen",
        text: "Keller, Gartenabteil, Außenlager, Dachboden — alles listen und fotografieren.",
      },
      {
        name: "Zufahrt klären",
        text: "Siedlungsstraße, Parken, Entladepunkt vor der Besichtigung notieren.",
      },
      {
        name: "Auftragsumfang fixieren",
        text: "Wohnung + alle zugeordneten Nebenflächen, Endzustand schriftlich.",
      },
      {
        name: "Nebenräume vor oder parallel räumen",
        text: "Nicht als Restarbeit nach der Wohnungsräumung.",
      },
      {
        name: "Übergabe vorbereiten",
        text: "Leer/versperrt, Schlüssel vollständig, kurze Eigenkontrolle.",
      },
    ],
  },
  relatedSlugs: [
    "kellerraeumung-wien-kosten-schimmel",
    "gartenentruempelung-wien-kosten-ablauf",
    "buwog-genossenschaft-entruempelung-wien",
    "bauhilfe-genossenschaft-entruempelung-wien",
  ],
  readingTimeMinutes: 11,
};

export default function SiedlungsunionGenossenschaftEntruempelungWien() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "updated-month" }}
        note="Fokus: Siedlungsunion-Nebenräume — Keller, Gartenabteil, Außenlager und Siedlungszufahrt."
        article={meta}
      />

      <RatgeberLead>
        Bei der Siedlungsunion Entrümpelung Wien kippt die Übergabe selten am Wohnzimmer — sie kippt am
        Keller, am Gartenabteil oder am Außenlager hinter dem Carport. Siedlungsbestände haben Charakter:
        niedrigere Geschosse, zugeordnete Außenflächen, enge Zufahrten, unmittelbare Nachbarn. Dieser
        Ratgeber behandelt genau diese Nebenraum-Logik. Hochhaus-Lift: BUWOG. Abnahmeprotokoll: ARWAG.
        Verlassenschaft: Bauhilfe.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Siedlungsunion — Nebenräume miträumen"
        text="Keller, Gartenabteil und Wohnung in einem Auftrag — Fixpreis nach Besichtigung."
      />

      <RatgeberP>
        Trägerinfo:{" "}
        <RatgeberInternalLink href="https://www.siedlungsunion.at/">
          siedlungsunion.at
        </RatgeberInternalLink>
        . Keller-Vertiefung:{" "}
        <RatgeberInternalLink href="/ratgeber/kellerraeumung-wien-kosten-schimmel">
          Kelleräumung Wien
        </RatgeberInternalLink>
        . Außenbereich:{" "}
        <RatgeberInternalLink href="/ratgeber/gartenentruempelung-wien-kosten-ablauf">
          Gartenentrümpelung
        </RatgeberInternalLink>
        . NÖ-Siedlungslogistik:{" "}
        <RatgeberInternalLink href="/ratgeber/egw-genossenschaft-entruempelung-niederoesterreich">
          EGW Niederösterreich
        </RatgeberInternalLink>
        . Hochhaus-Zufahrt separat:{" "}
        <RatgeberInternalLink href="/ratgeber/buwog-genossenschaft-entruempelung-wien">
          BUWOG
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Siedlungscharakter: warum Nebenräume hier dominieren</RatgeberH2>
      <RatgeberP>
        In Siedlungen gehört zum Alltag oft mehr als die Wohnungstür: Abteil im Kellertrakt, Gartengeräte,
        Holzlager, Fahrradraum. Wer nur die Wohnräume plant, liefert eine halbe Übergabe. Wir sehen
        regelmäßig Objekte, in denen die Wohnung in einem halben Tag leer ist — und das Außenlager drei
        weitere Stunden braucht. Genau deshalb muss die{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>{" "}
        bei der Siedlungsunion als Flächenpaket kalkuliert werden.
      </RatgeberP>
      <RatgeberP>
        Nachbarschaftsnähe verstärkt den Druck: Sperrmüll vor dem Reihenhaus fällt sofort auf. Diskrete,
        zügige Abfuhr ist Teil der Übergabequalität — nicht nur Höflichkeit. Anders als in Hochhausanlagen
        entscheiden hier selten Kabinenmaße; entscheidend sind zugeordnete Außenflächen und die Frage, ob
        die Siedlungszufahrt den Transporter überhaupt trägt.
      </RatgeberP>

      <RatgeberH2>Nebenraum-Inventar: vom Foto zum Fixpreis</RatgeberH2>
      <RatgeberP>
        Der häufigste Kalkulationsfehler ist die Wohnungs-only-Anfrage: drei Zimmerfotos, kein Keller, kein
        Gartenabteil. Ohne Inventar der Nebenflächen entsteht kein belastbarer Fixpreis — sondern später
        Nachverhandlung. Listen Sie vor der Besichtigung jede zugeordnete Fläche: Kellerabteil-Nummer,
        Gartenhäuschen, Carport-Nische, Außenlager hinter der Hecke, ggf. Dachbodenanteil. Ein Foto pro
        Fläche genügt oft, um Volumen und Fraktionen grob zu schätzen.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Wohnung:</strong> Zimmer, Einbauten, Balkon — klassischer Kern.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Keller:</strong> Abteil leer/voll, Gangzugang, Feuchte-/Schimmelhinweise.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Außen:</strong> Gartenabteil, Geräteschuppen, Holzstoß, Carport, Fahrradraum.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Zufahrt:</strong> Siedlungsstraße, Wendeplatz, Abstand zur nächsten Einfahrt.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Schreiben Sie den Endzustand für jede Fläche fest: leer und versperrt, besenrein, ohne Zwischenlager
        im Gemeinschaftsbereich. Erst dann ist die{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>{" "}
        ein Flächenpaket — und der Fixpreis nach Besichtigung deckt, was am Abnahmetag wirklich zählt.
        Orientierung ohne Fantasiepreise:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet Entrümpelung in Wien?
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Kellerabteil: der häufigste Blocker</RatgeberH2>
      <RatgeberP>
        Das Abteil ist klein, aber voll — Jahrzehnte Gerümpel, Farbeimer, Reifen. Ohne leeren Keller bleibt
        die Schlüsselübergabe oft aus. Planen Sie{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>{" "}
        als eigenen Block mit eigenem Zeitfenster. Schimmel- und Feuchtrisiken:{" "}
        <RatgeberInternalLink href="/ratgeber/kellerraeumung-wien-kosten-schimmel">
          Kelleräumung Kosten &amp; Schimmel
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Leer und versperrt:</strong> Persönliches raus, Abteil abschließen
        </RatgeberLi>
        <RatgeberLi>
          <strong>Gänge frei:</strong> kein Zwischenlager im Kellerflur
        </RatgeberLi>
        <RatgeberLi>
          <strong>Fraktionen:</strong> Problemstoffe nicht „mit dem Rest“ mischen
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        In Siedlungen liegt der Keller oft ebenerdig oder wenige Stufen tiefer — das verkürzt den Trageweg,
        ändert aber nichts am Blocker-Status. Ein volles Abteil stoppt die Übergabe genauso wie in einem
        Hochhaus; nur die Logistik ist anders. Beschriften und Schlüssel bereitlegen, bevor die Wohnung
        „fertig“ wirkt.
      </RatgeberP>

      <RatgeberH2>Gartenabteil, Außenlager, Carport</RatgeberH2>
      <RatgeberP>
        Gartenabteile und Außenlager sind Siedlungs-Klassiker. Rasenmäher, Plastikmöbel, Brennholz,
        Kinderspielzeug — alles zählt zur Rückgabe, wenn zugeordnet.{" "}
        <RatgeberInternalLink href="/leistungen/gartenentruempelung">Gartenentrümpelung</RatgeberInternalLink>{" "}
        und ggf.{" "}
        <RatgeberInternalLink href="/leistungen/garagenentruempelung">Garagen-/Carport-Räumung</RatgeberInternalLink>{" "}
        gehören in denselben Auftrag wie die Wohnung. Sonst steht am Abnahmetag noch ein Geräteschuppen voll.
      </RatgeberP>
      <RatgeberP>
        Tipp: Fotografieren Sie Außenflächen bei der Anfrage mit. Zimmerfotos allein unterschätzen den Umfang
        systematisch — und erzeugen später Nachverhandlungen statt Fixpreis-Sicherheit. Holzstöße und
        Grünschnitt brauchen oft eigene Abfuhrwege; mischen Sie sie nicht gedanklich mit dem Wohnungsinventar.
      </RatgeberP>

      <RatgeberH2>Reihenfolge: Außen und Keller vor dem Wohnungsfeinschliff</RatgeberH2>
      <RatgeberP>
        Die klassische Fehleinschätzung: erst die Wohnung „schön“ machen, Nebenräume „wenn noch Zeit ist“.
        Am Abnahmetag fehlt dann genau diese Zeit. Bewährt ist die umgekehrte Logik: zuerst Keller und
        Außenlager leeren — dort entstehen die Übergabe-Blocker —, parallel oder danach die Wohnräume, zum
        Schluss Eigenkontrolle aller Flächen. So bleibt der sichtbare Wohnbereich nicht als Alibi stehen,
        während hinten noch der Geräteschuppen voll ist.
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>Nebenraum-Inventar inkl. Fotos und Zufahrt</RatgeberLi>
        <RatgeberLi>Keller und Außenflächen räumen (Blocker zuerst)</RatgeberLi>
        <RatgeberLi>Wohnung leeren und Einbauten nur laut Vertrag rückbauen</RatgeberLi>
        <RatgeberLi>Gemeinschaftswege und Vorgarten von Resten befreien</RatgeberLi>
        <RatgeberLi>Eigenkontrolle: jede Fläche leer/versperrt, Schlüssel komplett</RatgeberLi>
      </RatgeberOl>
      <RatgeberP>
        Parallelarbeit funktioniert, wenn zwei Teams oder klar getrennte Zeitfenster verfügbar sind — nicht
        wenn eine Person zwischen Garten und Küche hin- und herläuft. Schreiben Sie die Reihenfolge in den
        Auftrag; sonst gewinnt am Einsatztag die Optik der Wohnung gegen die Realität der Nebenräume.
      </RatgeberP>

      <RatgeberH2>Siedlungszufahrt und Nachbarn</RatgeberH2>
      <RatgeberP>
        Enge Siedlungsstraßen vertragen keine improvisierte Doppelpark-Strategie. Kurze Entladefenster,
        klarer Standplatz, Rücksicht auf Einfahrten. Informieren Sie Nachbarn kurz, wenn der Einsatz länger
        dauert — das reduziert Konflikte und hält Wege frei. Ein Transporter quer vor drei Carports blockiert
        nicht nur den Einsatz, sondern die ganze Zeile.
      </RatgeberP>
      <RatgeberP>
        Fotos der Zufahrt und des Wendeplatzes gehören in die Anfrage. Manchmal ist der Siedlungsrand der
        bessere Entladepunkt als die Haustür — dann tragen Sie etwas weiter, aber legal und nachbarschaftlich
        ruhiger. Kostenlogik ohne Fantasiepreise bleibt an Volumen, Zufahrt und Flächenpaket gebunden, nicht
        an Internet-Pauschalen.
      </RatgeberP>

      <RatgeberH2>Wetter, Tageslicht und Außenlagerung</RatgeberH2>
      <RatgeberP>
        Außenlager und Gartenabteile sind wetterabhängig. Nasse Holzstöße, matschige Wege und frühe Dunkelheit
        im Winter verlängern den Einsatz spürbar. Planen Sie für Außenflächen Tageslicht und, wenn nötig,
        ein zweites kurzes Fenster statt eines überladenen Abends. Regenschutz für Kartons und Elektrogeräte
        aus dem Schuppen verhindert, dass nasse Reste zurück in die schon leere Wohnung wandern.
      </RatgeberP>
      <RatgeberP>
        Zwischenlagerung auf dem Vorgarten oder dem Gehweg ist in Siedlungen besonders sichtbar — und oft
        unerwünscht. Nutzen Sie den Transporter als laufendes Depot: raus aus dem Abteil, rein ins Fahrzeug,
        Fläche sofort freimachen. So bleibt die Siedlungsstraße begehbar und die Übergabe wirkt professionell,
        nicht wie ein mehrtägiger Sperrmüll-Basar.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Tageslicht:</strong> Außenräume nicht in die letzte Dämmerung schieben
        </RatgeberLi>
        <RatgeberLi>
          <strong>Nässe:</strong> Wege und Grünschnitt einkalkulieren, nicht ignorieren
        </RatgeberLi>
        <RatgeberLi>
          <strong>Zwischenlager:</strong> Fahrzeug statt Vorgarten als Depot nutzen
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH3>Praxis-Beispiel: Wohnung leer, Gartenabteil voll</RatgeberH3>
      <RatgeberP>
        Eine Siedlungsunion-Wohnung war besenrein — das Gartenabteil seit Jahren voll. Die Abnahme wurde
        verschoben, weil Nebenflächen fehlten. Lösung beim zweiten Anlauf: Abteil und Rest in einem Auftrag,
        Entladung am Siedlungsrand, Keller am selben Vormittag, Übergabe am Folgetag. Der Fehler war nicht
        fehlende Motivation — es war eine Wohnungs-only-Planung ohne Inventar der Außenflächen.
      </RatgeberP>
      <RatgeberP>
        Beim zweiten Termin zählte das Flächenpaket: Foto vom Schuppen, klarer Standplatz, Reihenfolge
        Außen–Keller–Wohnungskontrolle. Genau diese Kette macht aus einer gescheiterten Abnahme eine
        planbare Rückgabe.
      </RatgeberP>

      <RatgeberH2>Was zur übergabefähigen Siedlungsunion-Rückgabe gehört</RatgeberH2>
      <RatgeberP>
        Leer, zugänglich, ohne zurückgelassenen Sperrmüll in Gemeinschafts- oder Außenflächen. Einbauten nur
        rückbauen, wenn Vertrag oder Verwaltung es verlangen. Wertanrechnung bei Verwertbarem:{" "}
        <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>. Für
        Verlassenschaft in anderen Beständen — bewusst nicht hier vertieft:{" "}
        <RatgeberInternalLink href="/ratgeber/bauhilfe-genossenschaft-entruempelung-wien">
          Bauhilfe
        </RatgeberInternalLink>
        . Abnahmeprotokoll und Kautionsschutz:{" "}
        <RatgeberInternalLink href="/ratgeber/arwag-genossenschaft-entruempelung-wien">
          ARWAG
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberP>
        Schlüsselmenge prüfen: Wohnung, Haus, Kellerabteil, ggf. Garten- oder Carport-Schloss. Ein
        vergessener Abteilschlüssel ist in Siedlungen ein klassischer Stopper — genauso wie ein noch
        verschlossenes, aber volles Außenlager.
      </RatgeberP>

      <RatgeberH2>Kostenhebel Nebenräume (ohne Fantasiepreise)</RatgeberH2>
      <RatgeberP>
        Die Tabelle ordnet Flächen- und Zufahrtshebel — keine erfundenen Euro-Beträge.
      </RatgeberP>
      <RatgeberTableWrap caption="Hebel Siedlungsunion-Räumung mit Nebenräumen">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Hebel</RatgeberTh>
            <RatgeberTh>Wirkung</RatgeberTh>
            <RatgeberTh>Früh klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Keller nicht im Auftrag</RatgeberTd>
            <RatgeberTd>Übergabe blockiert</RatgeberTd>
            <RatgeberTd>Abteil mitbesichtigen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Gartenabteil / Außenlager</RatgeberTd>
            <RatgeberTd>Unterschätzter Zeitbedarf</RatgeberTd>
            <RatgeberTd>Außenfotos bei Anfrage</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Enge Siedlungszufahrt</RatgeberTd>
            <RatgeberTd>Längere Entladung, Nachbarschaftskonflikt</RatgeberTd>
            <RatgeberTd>Standplatz vorab</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Wohnung-only-Planung</RatgeberTd>
            <RatgeberTd>Nacharbeit und Terminverschiebung</RatgeberTd>
            <RatgeberTd>Flächenpaket schriftlich</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Wetter / Tageslicht Außen</RatgeberTd>
            <RatgeberTd>Verzögerung bei Nässe und Dunkelheit</RatgeberTd>
            <RatgeberTd>Tagesfenster für Außenflächen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Wertanrechnung</RatgeberTd>
            <RatgeberTd>Kann Fixpreis mindern</RatgeberTd>
            <RatgeberTd>Verwertbares zeigen</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Nebenraum-Hinweis">
        <RatgeberP>
          Eine leere Wohnung ist keine Übergabe, wenn Keller oder Gartenabteil noch voll sind. Listen Sie
          Nebenflächen zuerst — dann wirken Fixpreis und Termin realistisch. Siedlungszufahrt und Wetter für
          Außenlager gehören in denselben Plan wie das Wohnzimmer.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste Siedlungsunion Nebenräume</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Kellerabteil fotografiert und im Auftrag",
          "Gartenabteil / Außenlager / Carport geprüft",
          "Siedlungszufahrt und Entladepunkt geklärt",
          "Reihenfolge Außen/Keller vor Wohnungsfeinschliff",
          "Tageslicht-/Wetterfenster für Außenflächen",
          "Endzustand für alle Flächen schriftlich",
          "Schlüssel und Eigenkontrolle vor Abnahme",
        ]}
      />

      <RatgeberP>
        Mit Nebenraum-first-Planung wird die Siedlungsunion-Rückgabe planbar — ohne böse Überraschung am
        Abnahmetag. Für Hochhaus-, Protokoll- und Verlassenschafts-Hubs die Geschwistertexte nutzen; hier
        bleiben Siedlung und Außenflächen der Kern. Wer Inventar, Zufahrt und Reihenfolge früh bindet,
        übergibt ruhiger und nachbarschaftsschonend.
      </RatgeberP>

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">Siedlungsunion — Wohnung + Nebenräume</p>
        <RatgeberP>
          Keller, Gartenabteil und Wohnräume in einem Fixpreis nach Besichtigung — übergabefähig und
          nachbarschaftsschonend.
        </RatgeberP>
        <p className="mt-3">
          <RatgeberInternalLink href="/#kontakt-formular">
            Jetzt unverbindlich anfragen →
          </RatgeberInternalLink>
        </p>
      </RatgeberCtaBox>
    </RatgeberArticleBody>
  );
}
