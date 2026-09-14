import RatgeberArticleBody, {
  RatgeberChecklist,
  RatgeberCtaBox,
  RatgeberFreshnessBadge,
  RatgeberH2,
  RatgeberH3,
  RatgeberInternalLink,
  RatgeberLead,
  RatgeberLi,
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
  slug: "stadt-wien-gemeindewohnung-rueckgabevorgaben",
  title:
    "Entrümpelung einer Stadt-Wien-Wohnung: So erfüllen Sie alle Rückgabevorgaben fehlerfrei",
  seoTitle:
    "Stadt Wien Gemeindewohnung zurückgeben — Rückgabevorgaben Wiener Wohnen 2026",
  ogTitle:
    "Gemeindewohnung Stadt Wien — Rückgabevorgaben bei Wiener Wohnen fehlerfrei erfüllen",
  focusKeyword: "Gemeindewohnung Stadt Wien Rückgabe",
  description:
    "Gemeindewohnung Stadt Wien Rückgabe: Raum-für-Raum-Check zu Böden, Wänden, Türen, Sanitär, Heizkörpern, Loggiaverbau und Zählerständen — Abnahme-Checkliste ohne Fantasiepreise.",
  excerpt:
    "Technische Abnahme-Checkliste Raum für Raum für die Rückgabe an Wiener Wohnen.",
  freshnessExcerpt: {
    kind: "guide",
    guideName: "Wiener-Wohnen-Rückgabe-Leitfaden",
    suffix:
      "Böden, Sanitär, Loggia, Zählerstände und Mängelliste für die Abnahme bei der Stadt Wien.",
  },
  publishedAt: "2026-07-06",
  keywords: [
    "Gemeindewohnung Stadt Wien Rückgabe",
    "Wiener Wohnen Wohnungsabnahme",
    "Gemeindewohnung entrümpeln Wien",
    "Rückgabevorgaben Wiener Wohnen",
    "Loggia Rückbau Gemeindebau",
    "Zählerstände Wohnungsübergabe",
    "Sanitär Heizkörper Stadtinventar",
    "Klebereste Laminat Abnahme",
  ],
  faq: [
    {
      question: "Welche Oberflächen prüft die Abnahme zuerst?",
      answer:
        "Typischerweise Böden und Wände: nachträgliche Beläge, Klebereste, auffällige Farben, Verkleidungen und beschädigte Fliesen. Ein leerer Raum mit Kleberflecken gilt oft als mangelhaft.",
    },
    {
      question: "Was zählt als Stadtinventar bei Sanitär und Heizung?",
      answer:
        "WC, Waschbecken, Wanne oder Dusche sowie montierte Heizkörper gehören in der Regel zum Objekt und müssen funktionsfähig und ohne grobe Schäden übergeben werden — nicht demontiert und mitgenommen.",
    },
    {
      question: "Muss ein Loggiaverbau vor der Rückgabe weg?",
      answer:
        "Ohne schriftliche Genehmigung von Wiener Wohnen ja: ungenehmigte Verglasungen oder Verbauungen sind rückzubauen. Mit Genehmigung können andere Regeln gelten — das klärt die Abnahme bzw. Vorabsprache.",
    },
    {
      question: "Warum Zählerstände am Abnahmetag dokumentieren?",
      answer:
        "Strom, Gas und Wasser brauchen Endstände für die Abmeldung beim Versorger und für das Übergabeprotokoll. Fehlende Notizen erzeugen später Unklarheit — unabhängig von der Räumung selbst.",
    },
    {
      question: "Unterscheiden sich Abnahme-Schwerpunkte je nach Bezirk?",
      answer:
        "Ja in der Praxis: In älteren Anlagen fallen oft Einbauten und Beläge auf, in neueren häufiger Loggia-Themen. Die Grundregeln der Stadt Wien bleiben gleich — die typischen Mängel verschieben sich.",
    },
    {
      question: "Wo stehen Demontage-Logistik und Kaution-/Terminführung?",
      answer:
        "Handwerk und LKW: Entrümpelung im Gemeindebau. Kalender und Kautionsschutz: Wiener Wohnen Wohnungsübergabe. Dieser Text ist der technische Raum-für-Raum-Check.",
    },
  ],
  howTo: {
    name: "Technische Abnahme einer Stadt-Wien-Gemeindewohnung vorbereiten",
    steps: [
      {
        name: "Böden und Wände prüfen",
        text: "Nachträgliche Beläge und Klebereste entfernen, Wände neutral und ohne Verkleidung hinterlassen.",
      },
      {
        name: "Türen und Fenster kontrollieren",
        text: "Innentüren funktionsfähig, Beschläge komplett, Scheiben ohne Risse.",
      },
      {
        name: "Sanitär und Heizkörper als Stadtinventar checken",
        text: "Armaturen und Heizkörper intakt belassen; grobe Schäden vor der Abnahme klären.",
      },
      {
        name: "Loggia und Einbauten genehmigungsseitig klären",
        text: "Ungenehmigte Verbauungen und Zwischenwände zurückbauen.",
      },
      {
        name: "Zählerstände und Schlüssel dokumentieren",
        text: "Endstände notieren, alle Schlüssel bereitlegen, Protokoll vorbereiten.",
      },
    ],
  },
  readingTimeMinutes: 11,
};

export default function StadtWienGemeindewohnungRueckgabevorgaben() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "guide", guideName: "Wiener-Wohnen-Rückgabe-Leitfaden" }}
        note="Fokus: technische Abnahme Raum für Raum — Oberflächen, Stadtinventar, Loggia, Zähler."
        article={meta}
      />

      <RatgeberLead>
        Bei der Gemeindewohnung Stadt Wien Rückgabe entscheidet oft der Blick des Abnehmers auf Details:
        Klebereste am Estrich, eine klemmende Innentür, ein rissiges Waschbecken oder eine ungenehmigte
        Loggiaverglasung. Wer nur „leer“ denkt, übersieht die technische Mängelliste.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Abnahme-Check Gemeindewohnung"
        text="Böden, Sanitär, Loggia und Zählerstände: wir bereiten die Wohnung für die Wiener-Wohnen-Abnahme vor."
      />

      <RatgeberP>
        Dieser Leitfaden führt Raum für Raum durch die technische Prüfung — nicht durch Halteverbot-Essays
        und nicht durch Kautionspsychologie. Demontage und Baustellen-Logistik:{" "}
        <RatgeberInternalLink href="/ratgeber/entruempelung-gemeindebau-wiener-wohnen">
          Entrümpelung im Gemeindebau
        </RatgeberInternalLink>
        . Termin und Kautionsschutz:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wohnungsübergabe ohne Stress
        </RatgeberInternalLink>
        . Keller und Schlüssel operativ:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-aufloesen-keller-schluessel-uebergabe">
          Gemeindewohnung auflösen
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Böden, Wände, Fliesen: die Oberflächen-Abnahme</RatgeberH2>
      <RatgeberP>
        Nachträglich verlegte Laminat- oder PVC-Schichten müssen in der Regel runter — und zwar inklusive
        Kleber und Unterlage. Zurückbleibende Kleberflecken sind ein klassischer Eintrag auf der
        Mängelliste. Fliesen in Küche und Bad: lose, stark beschädigte oder erkennbar unsachgemäß
        nachverlegte Flächen fallen auf. Wände sollen neutral wirken; knallige Farben, Mustertapeten und
        Styropor- oder Holzverkleidungen gehören oft nicht zum Abnahmebild. Decken mit aufgeklebten Platten
        oder schweren Verkleidungen werden ebenfalls kritisch betrachtet.
      </RatgeberP>
      <RatgeberP>
        Die eigentliche Demontage ist Handwerk — siehe Hub-Artikel oben. Hier zählt das Ergebnis fürs Auge
        des Abnehmers: glatte, nachvollziehbare Oberflächen ohne Restmüll in Ecken und Sockeln. Bei einer{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>{" "}
        oder{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>{" "}
        sollte der Endzustand „abnahmefähig“ heißen, nicht nur „leer“. Gehen Sie Raum für Raum mit Taschenlampe
        und Notizblock: Was der Abnehmer sieht, sollte vorher schon Sie gesehen haben.
      </RatgeberP>

      <RatgeberH2>Türen, Fenster, Beschläge</RatgeberH2>
      <RatgeberP>
        Jede Innentür sollte eingehängt, schließbar und ohne abgerissene Griffe sein. Aufkleber, Spiegelfolien
        und Bohrlöcher-Chaos an Türblättern wirken unfertig. Fenster und Balkontüren: Scheiben ohne Sprünge,
        Beschläge bedienbar. Fehlende Schlüssel für Innentüren vorher ersetzen — sonst stockt schon die
        Begehung. Prüfen Sie auch, ob Türblätter nicht verklemmt oder abgeschliffen wurden, nachdem Böden
        entfernt wurden: Niveauwechsel nach Belagsrückbau führen manchmal zu schleifenden Türen.
      </RatgeberP>
      <RatgeberP>
        Balkontüren und Fenstergriffe gehören zur Funktionsprüfung genauso wie die Wohnzimmerinnentür. Was
        klemmt, wird notiert — besser Sie finden es vor dem Abnehmer. Kleine Reparaturen vor dem Termin
        sind günstiger als eine abgebrochene Abnahme wegen „offener Punkte“.
      </RatgeberP>

      <RatgeberH2>Sanitär und Heizkörper als Stadtinventar</RatgeberH2>
      <RatgeberP>
        WC, Waschbecken, Wanne oder Dusche sowie die Heizkörper sind typischerweise Stadtinventar. Sie bleiben
        in der Wohnung und müssen funktionieren. Emailschäden, Risse, defekte Armaturen oder abmontierte
        Heizkörper ohne Ersatz sind Abnahme-Themen — unabhängig davon, wie gründlich Sie entrümpelt haben.
        Auch Silikonfugen mit grobem Schimmel oder fehlende Siphon-Teile fallen auf, obwohl sie „klein“ wirken.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Sanitär:</strong> Dichtheit und grobe Schäden prüfen; Standard-Armaturen statt
          defekter Eigenbauten.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Heizkörper:</strong> Montiert, zugänglich, ohne schwere Korrosionsschäden; Ventile
          bedienbar lassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Nicht mitnehmen:</strong> Was zum Objekt gehört, gehört nicht in den Räumungscontainer.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Bad- und Küchenarmaturen:</strong> Tropfen und fehlende Handläufe/Haltegriffe (falls
          ursprünglich vorhanden) vorab klären.
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2>Loggiaverbau und genehmigungspflichtige Einbauten</RatgeberH2>
      <RatgeberP>
        Eigenmächtige Loggiaverglasungen oder geschlossene Verbauungen ohne schriftliche Freigabe sind ein
        häufiger Mangel. Dasselbe gilt für Zwischenwände, die den ursprünglichen Grundriss verändern. Vor der
        Abnahme: Genehmigung suchen oder Rückbau einplanen. Die handwerkliche Ausführung ist eine Sache —
        die genehmigungsrechtliche Klarheit eine andere. Fotos und alte Schreiben aus dem Mietakt helfen,
        Diskussionen am Abnahmetag zu verkürzen.
      </RatgeberP>
      <RatgeberP>
        Bei Verlassenschaft oder unklarer Aktenlage zuerst klären, wer entscheiden darf:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-todesfall-verlassenschaft-raeumen-wien">
          Gemeindewohnung nach Todesfall
        </RatgeberInternalLink>
        . Bei stark vollgestellten Räumen vor der Feinprüfung sortieren:{" "}
        <RatgeberInternalLink href="/ratgeber/vollgestellte-gemeindewohnung-entruempeln-wien">
          vollgestellte Gemeindewohnung entrümpeln
        </RatgeberInternalLink>
        . Wer die Loggia erst am Abnahmetag „entdeckt“, riskiert Verschiebung — besser vorab mit Maßband und
        Foto klären, was original und was Zubau ist.
      </RatgeberP>

      <RatgeberH2>Zählerstände und Versorger am Abnahmetag</RatgeberH2>
      <RatgeberP>
        Strom, Gas und Wasser: Endstände fotografieren und notieren, Verträge kündigen bzw. ummelden. Das
        gehört zur fehlerfreien Rückgabe genauso wie die leere Loggia. Schreiben Sie Zählernummer und Stand
        ins Protokoll; Unschärfe hier erzeugt später Streit mit dem Versorger, nicht mit dem Werkmeister.
        Nebenräume (Keller) müssen leer sein — die operative Keller-/Schlüssel-Timeline steht im
        Auflösen-Ratgeber; hier reicht der Hinweis, dass die Abnahme Nebenflächen mitprüft.
      </RatgeberP>
      <RatgeberP>
        Leistung{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>
        , Faktoren ohne Fantasiepreise:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet eine Entrümpelung in Wien?
        </RatgeberInternalLink>
        ,{" "}
        <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink>
        , optional{" "}
        <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>. Eine
        abnahmefähige Wohnung ohne dokumentierte Zählerstände ist organisatorisch unvollständig — auch wenn
        alle Oberflächen passen.
      </RatgeberP>

      <RatgeberH2>So gehen Sie die Begehung Raum für Raum an</RatgeberH2>
      <RatgeberP>
        Beginnen Sie im hellsten Raum und arbeiten Sie systematisch: Boden → Wände → Decke → Türen →
        Einbauten. Im Bad und in der Küche zusätzlich Sanitär und Fliesen. Zum Schluss Loggia/Balkon und
        Zähler. Diese Reihenfolge verhindert, dass Sie nach der „großen“ Entrümpelung die kleinen, aber
        abnahmerelevanten Punkte übersehen. Notieren Sie offene Punkte mit Raumbezeichnung — so bleibt die
        Nacharbeit zielgenau.
      </RatgeberP>

      <RatgeberH2>Regionale Notizen — frisch formuliert</RatgeberH2>
      <RatgeberUl>
        <RatgeberLi>
          <strong>
            <RatgeberInternalLink href="/ratgeber/entruempelung-favoriten-wien-1100">Favoriten</RatgeberInternalLink>{" "}
            /{" "}
            <RatgeberInternalLink href="/ratgeber/entruempelung-simmering-wien-1110">Simmering</RatgeberInternalLink>:
          </strong>{" "}
          Häufig lange genutzte Beläge und Einbauten in älteren Blöcken — die Oberflächenprüfung fällt streng
          aus, wenn Kleber und Restschichten bleiben. Hier lohnt die Taschenlampen-Kontrolle an Sockeln und
          unter Heizkörpern besonders.
        </RatgeberLi>
        <RatgeberLi>
          <strong>
            <RatgeberInternalLink href="/ratgeber/entruempelung-meidling-wien-1120">Meidling</RatgeberInternalLink>{" "}
            /{" "}
            <RatgeberInternalLink href="/ratgeber/entruempelung-ottakring-wien-1160">Ottakring</RatgeberInternalLink>:
          </strong>{" "}
          Alte Holzverkleidungen und schwere Einbauten prägen die Mängelliste; Türen und Beschläge oft
          jahrzehntealt und hakelig. Funktionsprüfung vor dem Termin spart Überraschungen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>
            <RatgeberInternalLink href="/ratgeber/entruempelung-floridsdorf-wien-1210">Floridsdorf</RatgeberInternalLink>{" "}
            /{" "}
            <RatgeberInternalLink href="/ratgeber/entruempelung-donaustadt-wien-1220">Donaustadt</RatgeberInternalLink>:
          </strong>{" "}
          Loggia- und Verglasungsthemen treten häufiger auf — Genehmigung oder Rückbau vor der Abnahme
          klären, statt am Protokolltag zu diskutieren.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Die Stadtregeln sind überall ähnlich; die typischen Mängel verschieben sich mit Baujahr und Umbau-
        Kultur der Anlage. Nutzen Sie Bezirkserfahrung als Hinweis, nicht als Ersatz für die konkrete
        Wohnungsbegehung.
      </RatgeberP>

      <RatgeberH3>Praxis-Beispiel: Mängelliste wegen Kleberesten und Loggia</RatgeberH3>
      <RatgeberP>
        Bei einer Abnahme im Gemeindebau war die Wohnung besenleer — dennoch gab es eine Mängelliste:
        flächige Klebereste nach Laminatentfernung im Wohnzimmer und eine ungenehmigte Loggiaverglasung.
        Erst Nacharbeit an Estrich und Demontage der Verglasung machten die Rückgabe möglich. Der Termin
        verschob sich um wenige Tage; teurer wäre ein Abbruch der Abnahme ohne Plan gewesen. Kaution und
        LKW-Haltezonen waren hier Nebensache — entscheidend war die technische Checkliste.
      </RatgeberP>
      <RatgeberP>
        Die Lehre daraus: Planen Sie die Abnahme als Qualitätskontrolle, nicht als Formsache. Was auf der
        Mängelliste landet, war meist schon vorher sichtbar — wenn man Raum für Raum hinschaut.
      </RatgeberP>

      <RatgeberH2>Kostenfaktoren Abnahme-Vorbereitung (ohne Fantasiepreise)</RatgeberH2>
      <RatgeberTableWrap caption="Technische Abnahme-Hebel Gemeindewohnung Stadt Wien (ohne Fantasiepreise)">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Prüfpunkt</RatgeberTh>
            <RatgeberTh>Typisches Risiko</RatgeberTh>
            <RatgeberTh>Vor der Abnahme</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Beläge &amp; Kleber</RatgeberTd>
            <RatgeberTd>Mängelliste trotz leerer Räume</RatgeberTd>
            <RatgeberTd>Restlos entfernen, Oberflächen prüfen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Türen / Fenster</RatgeberTd>
            <RatgeberTd>Funktionseinschränkung, fehlende Beschläge</RatgeberTd>
            <RatgeberTd>Begehung Tür für Tür</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Sanitär / Heizkörper</RatgeberTd>
            <RatgeberTd>Stadtinventar beschädigt oder demontiert</RatgeberTd>
            <RatgeberTd>Funktionstest, nichts mitnehmen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Loggia / Zwischenwand</RatgeberTd>
            <RatgeberTd>Rückbaupflicht ohne Genehmigung</RatgeberTd>
            <RatgeberTd>Aktenlage klären oder demontieren</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Zählerstände</RatgeberTd>
            <RatgeberTd>Unklare Endabrechnung Versorger</RatgeberTd>
            <RatgeberTd>Foto + Notiz am Abnahmetag</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Abnahme-Hinweis">
        <RatgeberP>
          Leer ist nicht gleich mängelfrei. Klebereste, defektes Stadtinventar und ungenehmigte Loggiaverbauten
          erzeugen Nacharbeit — auch wenn Kartons und Möbel längst weg sind. Eine kurze Eigenbegehung mit
          Notizliste vor dem offiziellen Termin spart Verschiebungen und Diskussionen am Protokoll.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste technische Abnahme</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Böden frei von Belags- und Kleberesten, Fliesen ohne lose Stellen",
          "Wände neutral, ohne Verkleidung und ohne auffällige Farbflächen",
          "Alle Innentüren eingehängt und bedienbar, Fenster ohne Risse",
          "Sanitär und Heizkörper als Stadtinventar intakt belassen",
          "Ungenehmigte Loggiaverbauten / Zwischenwände geklärt oder rückgebaut",
          "Zählerstände Strom/Gas/Wasser dokumentiert, Schlüssel vollzählig",
        ]}
      />

      <RatgeberP>
        Mit dieser Raum-für-Raum-Logik gehen Sie strukturiert in die Abnahme. Logistik und Kalender bleiben
        den Schwester-Artikeln vorbehalten — so überschneiden sich die Texte nicht. Wenn Oberflächen,
        Stadtinventar, Loggia und Zählerstände passen, ist die technische Seite der Gemeindewohnung Stadt
        Wien Rückgabe erledigt; der Rest ist Organisation und Handwerk in den Hub-Texten daneben.
      </RatgeberP>

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">
          Stadt-Wien-Gemeindewohnung — abnahmefähig übergeben
        </p>
        <RatgeberP>
          Kostenlose Besichtigung und Fixpreis: wir bereiten Oberflächen, Einbauten und Endzustand für die
          Wiener-Wohnen-Abnahme vor.
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
