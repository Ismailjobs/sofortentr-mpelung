import RatgeberArticleBody, {
  RatgeberCtaBox,
  RatgeberFreshnessBadge,
  RatgeberH2,
  RatgeberH3,
  RatgeberInternalLink,
  RatgeberLead,
  RatgeberLi,
  RatgeberOl,
  RatgeberP,
  RatgeberUl,
  RatgeberWarning,
  RatgeberChecklist,
  RatgeberTableWrap,
  RatgeberThead,
  RatgeberTbody,
  RatgeberTr,
  RatgeberTh,
  RatgeberTd,
} from "@/components/ratgeber/RatgeberArticleBody";
import { BezirkEarlyCta } from "@/components/ratgeber/BezirkStructureBlocks";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";

export const meta: RatgeberArticleMeta = {
  slug: "gemeindewohnung-aufloesen-keller-schluessel-uebergabe",
  title: "Gemeindewohnung auflösen: Keller, Schlüssel und Übergabetermin richtig planen",
  seoTitle: "Gemeindewohnung auflösen Wien | Keller, Schlüssel & Übergabe",
  ogTitle: "Gemeindewohnung auflösen — Keller, Schlüssel und Übergabetermin",
  focusKeyword: "Gemeindewohnung auflösen Wien",
  description:
    "Gemeindewohnung auflösen Wien: Keller beschriften, alle Schlüssel sammeln, Timeline rückwärts vom Übergabetermin, MA 46 und Versorger — Praxisplan ohne Fantasiepreise.",
  excerpt:
    "Gemeindewohnung auflösen — operativer Plan für Keller, Schlüssel, Versorger und Übergabetermin.",
  freshnessExcerpt: {
    kind: "guide",
    guideName: "Übergabe-Operationsplan",
    suffix:
      "Keller, Schlüssel und Timeline rückwärts vom Wiener-Wohnen-Übergabetermin.",
  },
  publishedAt: "2026-09-14",
  keywords: [
    "Gemeindewohnung auflösen Wien",
    "Kellerabteil Übergabe Wiener Wohnen",
    "Schlüsselübergabe Gemeindewohnung",
    "Übergabetermin Wiener Wohnen planen",
    "Versorger kündigen Gemeindewohnung",
    "MA 46 Halteverbot Entrümpelung",
  ],
  faq: [
    {
      question: "Wann sollte ich rückwärts vom Übergabetermin planen?",
      answer:
        "Sobald der Abgabetermin bei Wiener Wohnen steht. Ziehen Sie davon Puffer für Räumung, Keller, letzte Kontrolle, Halteverbot und Versorger-Kündigung ab — und kommunizieren Sie Terminänderungen spätestens 14 Tage vorher.",
    },
    {
      question: "Was muss am Kellerabteil stimmen?",
      answer:
        "Leer, sauber, versperrt — und mit Tür- sowie Stiegennummer auf der Kellertür. Ohne klare Beschriftung und leeres Abteil stockt die Übergabe oft, auch wenn die Wohnung selbst fertig ist.",
    },
    {
      question: "Welche Schlüssel brauche ich bei der Übergabe?",
      answer:
        "Alle Wohnungs-, Keller-, Briefkasten- und ggf. Waschküchen- oder Anlagenschlüssel sowie Transponder und bekannte Duplikate. Unvollständige Schlüsselübergabe verzögert den Abschluss.",
    },
    {
      question: "Wann brauche ich ein MA-46-Halteverbot?",
      answer:
        "Wenn vor dem Stiegenhaus kein legales, ausreichend langes Laden möglich ist. In dichten Gemeindebauanlagen ist das häufig der Fall — der Vorlauf muss zum Räumungs- und Übergabetermin passen.",
    },
    {
      question: "Was ist mit Strom, Gas und Wärme?",
      answer:
        "Zählerstände ablesen und Versorger kündigen bzw. ummelden. Offene Verträge erzeugen Folgekosten, auch wenn die Schlüssel schon zurückgegeben sind.",
    },
    {
      question: "Wer darf die Wohnung übergeben?",
      answer:
        "Sie persönlich oder eine schriftlich bevollmächtigte Vertretung — jeweils mit Lichtbildausweis. Ohne Vollmacht und Ausweis kann die Schlüsselrückgabe scheitern.",
    },
  ],
  relatedSlugs: [
    "stadt-wien-gemeindewohnung-rueckgabevorgaben",
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "kellerraeumung-wien-kosten-schimmel",
    "checkliste-wohnungsraeumung-wien",
    "entruempelung-gemeindebau-wiener-wohnen",
  ],
  readingTimeMinutes: 10,
};

export default function GemeindewohnungAufloesenKellerSchluesselUebergabe() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "guide", guideName: "Übergabe-Operationsplan" }}
        note="Keller, Schlüssel und Timeline rückwärts vom Wiener-Wohnen-Übergabetermin."
        article={meta}
      />

      <RatgeberLead>
        Die Wohnung ist fast leer — und trotzdem droht Stress: Das Kellerabteil ist noch voll, drei Schlüssel fehlen,
        der Übergabetermin ist in zwei Wochen, und niemand hat die Versorger gekündigt. Eine Gemeindewohnung
        aufzulösen ist kein einzelner Räumungstag, sondern ein kleines Projekt mit klarer Reihenfolge. Wer vom
        Abgabetermin rückwärts plant, übergibt ruhig.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Gemeindewohnung auflösen — Termin rückwärts planen"
        text="Wir besichtigen Wohnung und Keller, kalkulieren Fixpreis und legen Räumung, Halteverbot und Schlüsselübergabe auf Ihren Wiener-Wohnen-Termin."
      />

      <RatgeberP>
        Dieser Ratgeber ist der operative Fahrplan, wenn Sie eine{" "}
        <strong>Gemeindewohnung auflösen</strong> und Keller, Schlüssel sowie Übergabetermin beherrschen wollen. Er
        ergänzt die technischen Abnahme-Themen — ohne sie zu wiederholen. Einstiege:{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>,{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>,{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink> und{" "}
        <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink>. Vertiefung Gemeindebau:{" "}
        <RatgeberInternalLink href="/ratgeber/entruempelung-gemeindebau-wiener-wohnen">
          Entrümpelung im Gemeindebau
        </RatgeberInternalLink>
        , technische Vorgaben:{" "}
        <RatgeberInternalLink href="/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben">
          Stadt-Wien-Rückgabevorgaben
        </RatgeberInternalLink>
        , Termin und Kaution:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wohnungsübergabe Wiener Wohnen
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Rückwärts planen: vom Übergabetermin zur ersten Aktion</RatgeberH2>
      <RatgeberP>
        Fixieren Sie zuerst den Übergabetermin bei Wiener Wohnen. Die Kündigung erfolgt schriftlich; üblich ist eine
        Frist von etwa einem Monat zum Monatsende. Terminänderungen sollten spätestens 14 Tage vorher kommuniziert
        werden. Von diesem Datum ziehen Sie ab: letzte Kontrolle (1–2 Tage), Räumung inkl. Keller, ggf.
        Halteverbots-Vorlauf (MA 46), Sortierung persönlicher Dinge und Versorger-Kündigung. Was übrig bleibt, ist
        Ihr realistischer Startkorridor — nicht der Wunschtermin „irgendwann nächste Woche“.
      </RatgeberP>
      <RatgeberP>
        Späte oder gescheiterte Übergaben können weitere Mietzinsen und Kosten bedeuten. Deshalb ist der Kalender
        Teil der Qualität — nicht nur die leere Wohnfläche. Eine kurze Übersicht behalten Sie parallel zur{" "}
        <RatgeberInternalLink href="/ratgeber/checkliste-wohnungsraeumung-wien">
          Checkliste Wohnungsräumung
        </RatgeberInternalLink>
        ; hier liegt der Fokus auf Gemeindebau-Operationsdetails.
      </RatgeberP>
      <RatgeberP>
        Schreiben Sie die Meilensteine sichtbar auf: Besichtigung, Halteverbot-Antrag, Räumungstag, Nachkontrolle,
        Übergabe. Wer nur „irgendwo vor dem Monatsende räumen“ plant, verliert den Puffer für Kellerbeschriftung,
        fehlende Schlüssel und Versorger. Ein sichtbarer Plan reduziert Rückfragen in der Familie und hält
        Bevollmächtigte auf demselben Stand.
      </RatgeberP>

      <RatgeberH2>Kellerabteil: leeren, versperren, beschriften</RatgeberH2>
      <RatgeberP>
        Das Kellerabteil gehört zur Rückgabe. Es muss leer und sauber sein und ordnungsgemäß versperrt werden. Auf
        der Kellertür sollen Tür- und Stiegennummer stehen, damit Verwaltung und Werkmeister das Abteil eindeutig
        zuordnen. Viele Übergaben scheitern nicht am Wohnzimmer, sondern am vergessenen Kellerregal oder an einer
        Tür ohne Nummer.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Zugang klären:</strong> Welcher Hoftrakt, welche Tür, welches Licht — bei der Besichtigung
          mitgehen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Volumen ernst nehmen:</strong> Jahrzehntealtes Inventar braucht eigene Zeit — siehe auch{" "}
          <RatgeberInternalLink href="/ratgeber/kellerraeumung-wien-kosten-schimmel">
            Kellerräumung Wien
          </RatgeberInternalLink>
          .
        </RatgeberLi>
        <RatgeberLi>
          <strong>Beschriftung prüfen:</strong> Tür- und Stiegennummer sichtbar und korrekt.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Abschließen:</strong> Leeres Abteil versperren; Schlüssel in den Übergabe-Bund legen.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Planen Sie die{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>{" "}
        im selben Auftrag wie die Wohnung. Ein „machen wir danach“ wird oft zum Übergabe-Blocker.
      </RatgeberP>

      <RatgeberH2>Schlüssel und Medien: der komplette Bund</RatgeberH2>
      <RatgeberP>
        Sammeln Sie früh alle Schlüssel und Zutrittsmedien: Wohnung, Keller, Briefkasten, Waschküche oder andere
        Anlagenräume, Transponder, bekannte Duplikate. Legen Sie sie in eine beschriftete Tasche — nicht in eine
        Schublade „für den Übergabetag“. Unvollständige Schlüsselübergaben verzögern den Abschluss, auch wenn die
        Räume leer sind.
      </RatgeberP>
      <RatgeberP>
        Zur Übergabe erscheinen Sie persönlich oder lassen sich schriftlich bevollmächtigen und bringen einen
        Lichtbildausweis mit. Ohne Vertretung und Ausweis stockt die Rückgabe oft. Das ist Formalität — und
        gleichzeitig der letzte Schritt Ihres Projektplans.
      </RatgeberP>
      <RatgeberP>
        Legen Sie parallel eine kurze Inventarliste der Schlüssel an: Was existiert, was fehlt, wer hat Duplikate.
        Fehlt etwas, haben Sie noch Zeit für Nachfragen bei Angehörigen oder Hausbetreuung — nicht am Übergabemorgen
        im Stiegenhaus. Derselbe Disziplin-Gedanke gilt für Briefkasten und Namensschild: leeren, Namenszug klären,
        nichts Persönliches zurücklassen.
      </RatgeberP>

      <RatgeberH2>Versorger, Zählerstände und Stadtinventar</RatgeberH2>
      <RatgeberP>
        Lesen Sie Zählerstände ab und kündigen bzw. ummelden Sie Strom, Gas und Wärme rechtzeitig. Offene Verträge
        erzeugen Folgekosten nach dem Auszug. Parallel gilt: Stadtinventar wie WC, Dusche und Heizkörper bleibt und
        muss funktionieren; Einbaumöbel der Mieterseite gehören hinaus. Technische Feinheiten zu Böden und Rückbau
        behandelt der Ratgeber zu den{" "}
        <RatgeberInternalLink href="/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben">
          Rückgabevorgaben
        </RatgeberInternalLink>
        — hier reicht die operative Regel: nicht demontieren, was der Stadt gehört; nicht stehen lassen, was Sie
        eingebaut haben (außer schriftlich anders geregelt).
      </RatgeberP>
      <RatgeberP>
        Fotografieren Sie Zählerstände und notieren Sie Datum sowie Ablesewerte. Das hilft bei späteren Rückfragen
        der Versorger und schützt die Verlassenschaft oder die ausziehende Partei vor unklaren Nachbelastungen.
        Dieselbe Sorgfalt gilt für die letzte Funktionskontrolle von WC, Dusche und Heizkörpern: kleine Defekte vor
        der Übergabe zu melden oder zu beheben, ist günstiger als eine Diskussion am Abnahmetermin.
      </RatgeberP>

      <RatgeberH2>MA 46, Zufahrt und der Räumungstag</RatgeberH2>
      <RatgeberP>
        In vielen Gemeindebauanlagen ist legales Laden knapp. Wenn nötig, beantragen wir ein temporäres Halteverbot
        bei der MA 46 — mit Vorlauf, der zum Räumungs- und Übergabetermin passt. Am Einsatztag zählen geschützte
        Tragewege, Ruhezeiten und kurze Ladephasen. Der Fixpreis folgt Volumen und Zugang; Orientierung ohne
        Fantasiepreise:{" "}
        <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink> und{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet eine Entrümpelung in Wien?
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Termin fix:</strong> Kündigung, Monatsende, Übergabedatum, 14-Tage-Regel für Änderungen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Scope:</strong> Wohnung + Keller + Schlüssel + Versorger in einer Liste.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Besichtigung:</strong> Zugang, Lift, Kellerbeschriftung, Halteverbot-Bedarf.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Räumung:</strong> Endzustand leer/sauber; Stadtinventar belassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Übergabe:</strong> persönlich/bevollmächtigt, Ausweis, kompletter Schlüsselbund.
        </RatgeberLi>
      </RatgeberOl>

      <RatgeberH3>Praxis-Beispiel: Timeline vom Monatsende rückwärts</RatgeberH3>
      <RatgeberP>
        Typischer Ablauf: Übergabe am Monatsletzten, schriftliche Kündigung bereits raus. Drei Wochen vorher
        Besichtigung von Wohnung und Keller; Türnummer am Keller fehlt noch und wird nachgezogen. Zwei Wochen vorher
        Halteverbot beantragt, Versorger informiert, Schlüsselbund vervollständigt. Eine Woche vorher Räumung inkl.
        Keller; zwei Tage Puffer für Nachkontrolle und Reinigung.
      </RatgeberP>
      <RatgeberP>
        Am Übergabetag erscheinen die Mieterin bzw. die bevollmächtigte Vertretung mit Lichtbildausweis und allen
        Schlüsseln. Das Kellerabteil ist leer, versperrt und beschriftet; die Wohnung leer und sauber; Stadtinventar
        funktionsfähig. Kein „wir finden den Briefkastenschlüssel noch“ — weil der Bund seit der Besichtigung
        geführt wurde. Genau so bleibt die Auflösung ein Plan und kein Notfall.
      </RatgeberP>

      <RatgeberH2>Kostenfaktoren im Operationsplan</RatgeberH2>
      <RatgeberP>
        Die Tabelle zeigt Hebel für Zeit und Fixpreis — ohne erfundene Euro-Beträge.
      </RatgeberP>
      <RatgeberTableWrap caption="Kostenfaktoren: Gemeindewohnung auflösen (ohne Fantasiepreise)">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Faktor</RatgeberTh>
            <RatgeberTh>Warum er zählt</RatgeberTh>
            <RatgeberTh>Was Sie vorab klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Übergabe-Deadline</RatgeberTd>
            <RatgeberTd>Bestimmt Puffer, Teamgröße und Reihenfolge</RatgeberTd>
            <RatgeberTd>Kündigung, Monatsende, 14-Tage-Änderungsfrist</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Kellerabteil</RatgeberTd>
            <RatgeberTd>Eigener Aufwand; häufiger Übergabe-Blocker</RatgeberTd>
            <RatgeberTd>Zugang, Beschriftung, Volumen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Schlüssel / Medien</RatgeberTd>
            <RatgeberTd>Unvollständigkeit verzögert den Abschluss</RatgeberTd>
            <RatgeberTd>Liste aller Zugangsmittel inkl. Duplikate</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>MA 46 / Zufahrt</RatgeberTd>
            <RatgeberTd>Ohne Ladezone stockt der Räumungstag</RatgeberTd>
            <RatgeberTd>Parksituation, Vorlauf zum Termin</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Versorger &amp; Zähler</RatgeberTd>
            <RatgeberTd>Folgekosten nach Schlüsselrückgabe vermeiden</RatgeberTd>
            <RatgeberTd>Ablesung, Kündigung/Ummeldung</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Typischer Zeitfresser">
        <RatgeberP>
          Keller und Schlüssel werden oft „am Schluss“ erledigt — genau dann, wenn der Übergabetermin nicht mehr
          verschiebbar ist. Nehmen Sie beide Punkte in die Erstanfrage auf. Und denken Sie an die 14-Tage-Frist für
          Terminänderungen, bevor Sie den Kalender eng machen.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste: Keller, Schlüssel, Übergabe</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Übergabetermin und Kündigungsfrist (ca. 1 Monat zum Monatsende) schriftlich fixieren",
          "Timeline rückwärts: Räumung, Keller, Halteverbot, Versorger, letzte Kontrolle",
          "Kellerabteil leeren, reinigen, versperren; Tür-/Stiegennummer anbringen",
          "Alle Schlüssel und Medien sammeln (Wohnung, Keller, Briefkasten, Anlagen)",
          "Zählerstände ablesen und Versorger kündigen/ummelden",
          "Stadtinventar belassen und auf Funktion prüfen; Einbaumöbel der Mieterseite entfernen",
          "Übergabe persönlich oder mit schriftlicher Vollmacht + Lichtbildausweis",
          "Terminänderung spätestens 14 Tage vorher kommunizieren",
        ]}
      />

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">
          Gemeindewohnung auflösen — Keller &amp; Übergabe im Fixpreis
        </p>
        <RatgeberP>
          Operativer Plan statt Last-Minute: kostenlose Besichtigung, Räumung von Wohnung und Keller, Schlüssel und
          Termin rückwärts vom Abgabetermin gedacht.
        </RatgeberP>
        <p className="mt-3">
          <RatgeberInternalLink href="/#kontakt-formular">Jetzt unverbindlich anfragen →</RatgeberInternalLink>
        </p>
      </RatgeberCtaBox>
    </RatgeberArticleBody>
  );
}
