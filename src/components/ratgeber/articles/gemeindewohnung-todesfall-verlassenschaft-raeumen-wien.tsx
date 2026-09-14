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
  slug: "gemeindewohnung-todesfall-verlassenschaft-raeumen-wien",
  title: "Gemeindewohnung nach Todesfall räumen: Verlassenschaft richtig organisieren",
  seoTitle: "Gemeindewohnung nach Todesfall räumen Wien | Verlassenschaft & Wiener Wohnen",
  ogTitle: "Gemeindewohnung nach Todesfall räumen — Verlassenschaft & Rückgabe",
  focusKeyword: "Gemeindewohnung nach Todesfall räumen",
  description:
    "Gemeindewohnung nach Todesfall räumen: Verlassenschaft, Wiener Wohnen, Dokumente sichern, Keller, Notar-Ermächtigung und terminsichere Rückgabe — Praxisleitfaden Wien.",
  excerpt:
    "Gemeindewohnung nach Todesfall räumen — Verlassenschaft, Wiener Wohnen und klare Reihenfolge vor der Räumung.",
  freshnessExcerpt: {
    kind: "guide",
    guideName: "Verlassenschaft-Gemeindebau-Leitfaden",
    suffix:
      "Erben, Wiener Wohnen, Dokumentensicherung und Keller vor der terminsicheren Rückgabe.",
  },
  publishedAt: "2026-09-14",
  keywords: [
    "Gemeindewohnung nach Todesfall räumen",
    "Verlassenschaft Gemeindebau Wien",
    "Wiener Wohnen Todesfall Wohnung",
    "Gemeindewohnung Erben räumen",
    "Notar Ermächtigung Räumung",
    "Kellerabteil Verlassenschaft",
    "Wohnungsauflösung Gemeindebau Todesfall",
  ],
  faq: [
    {
      question: "Wer ist bei einer Gemeindewohnung nach Todesfall für die Räumung verantwortlich?",
      answer:
        "Bei einer Verlassenschaft sind in der Regel die erbserklärten bzw. eingeantworteten Erben verantwortlich. Der Notar als Gerichtskommissär kann die Räumung ermächtigen oder freigeben — ohne diese Klärung sollte nichts Endgültiges entsorgt werden.",
    },
    {
      question: "Darf die Gemeindewohnung geräumt werden, bevor der Notar zustimmt?",
      answer:
        "Dokumente, Schlüssel und Erinnerungsstücke sollten zuerst gesichert werden. Eine vollständige Entrümpelung und Entsorgung erfolgt erst, wenn die Verlassenschaft und eine allfällige Notar-Ermächtigung geklärt sind — sonst riskieren Sie Nachlass- und Haftungsprobleme.",
    },
    {
      question: "Was verlangt Wiener Wohnen bei der Rückgabe nach Todesfall?",
      answer:
        "Die Wohnung muss leer und sauber sein, Einbaumöbel der Mieterseite entfernt, Stadtinventar (WC, Dusche, Heizkörper) funktionsfähig belassen. Kellerabteil leer und versperrt, Tür-/Stiegennummer am Keller, Zählerstände und Versorger gekündigt, Übergabe persönlich oder mit schriftlicher Vollmacht und Lichtbildausweis.",
    },
    {
      question: "Wie funktioniert die Kündigung einer Gemeindewohnung nach Todesfall?",
      answer:
        "Die Kündigung erfolgt schriftlich; üblich ist eine Kündigungsfrist von etwa einem Monat zum Monatsende. Den genauen Termin und die Übergabe stimmen Sie mit Wiener Wohnen ab — Änderungen am Übergabetermin sollten spätestens 14 Tage vorher kommuniziert werden.",
    },
    {
      question: "Was passiert, wenn die Übergabe scheitert oder zu spät kommt?",
      answer:
        "Bei verspäteter oder gescheiterter Übergabe können weitere Mietzinsen und Kosten anfallen. Deshalb planen Erben Räumung, Keller und Schlüssel rückwärts vom Übergabetermin — mit Puffer für Sortierung und Halteverbot.",
    },
    {
      question: "Gehört das Kellerabteil zur Verlassenschafts-Räumung?",
      answer:
        "Ja. Das Kellerabteil muss leer, sauber und versperrt übergeben werden; Tür- und Stiegennummer gehören auf die Kellertür. Viele Übergaben scheitern an vergessenem Kellerinventar — nicht an der leeren Wohnung.",
    },
  ],
  relatedSlugs: [
    "wohnungsaufloesung-nach-todesfall-wien",
    "verlassenschaft-entruempelung-wien-sensibel",
    "entruempelung-gemeindebau-wiener-wohnen",
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "stadt-wien-gemeindewohnung-rueckgabevorgaben",
  ],
  readingTimeMinutes: 11,
};

export default function GemeindewohnungTodesfallVerlassenschaftRaeumenWien() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "guide", guideName: "Verlassenschaft-Gemeindebau-Leitfaden" }}
        note="Erben, Wiener Wohnen und Dokumentensicherung vor der Räumung einer Gemeindewohnung."
        article={meta}
      />

      <RatgeberLead>
        Die Nachricht vom Todesfall ist kaum verarbeitet — und schon liegt der Brief von Wiener Wohnen auf dem
        Tisch: Kündigung, Übergabetermin, leere Wohnung. Anders als bei einer privaten Mietwohnung treffen hier
        Verlassenschaft, Notar und städtische Rückgaberegeln gleichzeitig aufeinander. Wer zu früh räumt, riskiert
        Dokumente und Nachlasswerte; wer zu spät startet, riskiert weitere Mietzinsen und eine gescheiterte
        Übergabe.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Gemeindewohnung nach Todesfall — Fixpreis nach Besichtigung"
        text="Wir sichern Dokumente mit Ihnen, räumen Wohnung und Keller terminsicher und planen die Wiener-Wohnen-Übergabe rückwärts vom Abgabetermin."
      />

      <RatgeberP>
        Dieser Ratgeber richtet sich an Erben und Bevollmächtigte, die eine{" "}
        <strong>Gemeindewohnung nach Todesfall räumen</strong> müssen — nicht an allgemeine Nachlassfälle ohne
        Wiener Wohnen. Einstiege:{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>,{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>,{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink> und{" "}
        <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink>. Zum Gemeindebau-Kontext:{" "}
        <RatgeberInternalLink href="/ratgeber/entruempelung-gemeindebau-wiener-wohnen">
          Entrümpelung im Gemeindebau / Wiener Wohnen
        </RatgeberInternalLink>
        . Emotionale und allgemeine Nachlass-Themen vertiefen{" "}
        <RatgeberInternalLink href="/ratgeber/wohnungsaufloesung-nach-todesfall-wien">
          Wohnungsauflösung nach Todesfall
        </RatgeberInternalLink>{" "}
        und{" "}
        <RatgeberInternalLink href="/ratgeber/verlassenschaft-entruempelung-wien-sensibel">
          Verlassenschafts-Entrümpelung
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Verlassenschaft und Wiener Wohnen: zwei Spuren, ein Kalender</RatgeberH2>
      <RatgeberP>
        Nach dem Todesfall laufen zwei Verfahren parallel. Die Verlassenschaft klärt, wer erbberechtigt und
        handlungsfähig ist — erbserklärte bzw. eingeantwortete Erben tragen die Verantwortung für Wohnung und
        Nachlass. Wiener Wohnen wiederum erwartet eine geordnete Rückgabe: schriftliche Kündigung, Frist von etwa
        einem Monat zum Monatsende, Übergabetermin und ein übergabefähiges Objekt. Wer nur eine Spur bedient,
        scheitert oft an der anderen.
      </RatgeberP>
      <RatgeberP>
        Praktisch heißt das: Sichern Sie zuerst Zugang, Vollmachten und Dokumente. Klären Sie mit dem Notar als
        Gerichtskommissär, ob und wann eine Räumung ermächtigt oder freigegeben ist. Parallel halten Sie den
        Kontakt zu Wiener Wohnen, damit Kündigung und Übergabe nicht „irgendwo im Briefverkehr“ versanden. Offizielle
        Hinweise finden Sie auch auf den Seiten von{" "}
        <RatgeberInternalLink href="https://www.wienerwohnen.at">Wiener Wohnen</RatgeberInternalLink>
        — verbindlich bleiben aber Ihre Schreiben und der vereinbarte Termin.
      </RatgeberP>
      <RatgeberP>
        Viele Familien unterschätzen die Zeit zwischen Erbserklärung und dem Tag, an dem tatsächlich geräumt werden
        darf. In dieser Zwischenphase lohnt es sich, Inventar zu fotografieren, persönliche Gegenstände zu
        kennzeichnen und den Kellerzugang zu prüfen — ohne bereits zu entsorgen. So starten Sie die{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink> später
        mit klarem Auftrag und ohne Panik.
      </RatgeberP>

      <RatgeberH2>Dokumente und Werte sichern — bevor etwas den Container erreicht</RatgeberH2>
      <RatgeberP>
        In Gemeindewohnungen liegen oft Jahrzehnte Leben in Schränken, Schuhkartons und Kellerregalen: Mietvertrags-
        und Pensionsunterlagen, Sparbücher, Schmuck, Fotos, Medikamentenlisten, Bankkarten, Schlüsselbund mit
        Briefkastenschlüssel. Eine Räumungsfirma darf und soll das nicht „irgendwie mitnehmen“. Der erste Arbeitstag
        gehört der Sicherung — nicht dem Abtransport.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Dokumente-Box:</strong> Ausweise, Verträge, Bank- und Versicherungsunterlagen, Medikamente und
          Rezepte, alles mit Namen oder Adresse — getrennt vom Sperrmüll.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Erinnerungs-Triage:</strong> Was Angehörige behalten wollen, wird markiert und vor dem
          Abtransport freigegeben — analog zur sensiblen{" "}
          <RatgeberInternalLink href="/ratgeber/verlassenschaft-entruempelung-wien-sensibel">
            Verlassenschafts-Räumung
          </RatgeberInternalLink>
          .
        </RatgeberLi>
        <RatgeberLi>
          <strong>Schlüssel und Medien:</strong> Wohnungs-, Keller-, Briefkasten- und ggf. Waschküchenschlüssel
          sammeln; Transponder und alte Duplikate nicht „für später“ im Besteckkasten lassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Zählerstände:</strong> Strom, Gas, Wärme — ablesen und Versorger kündigen bzw. ummelden, damit
          keine Folgekosten auf die Verlassenschaft laufen.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Erst wenn Dokumente und Persönliches gesichert sind und die Ermächtigung zur Räumung klar ist, beginnt die
        eigentliche Entrümpelung. Diese Reihenfolge schützt Erben rechtlich und emotional — und verhindert, dass am
        Übergabetag noch ungeöffnete Schubladen auftauchen.
      </RatgeberP>

      <RatgeberH2>Was bei der Rückgabe an Wiener Wohnen zählt</RatgeberH2>
      <RatgeberP>
        Die Wohnung muss leer und sauber übergeben werden. Einbaumöbel der Mieterseite gehören hinaus; Stadtinventar
        wie WC, Dusche und Heizkörper bleibt und muss funktionieren. Das ist der Unterschied zu vielen privaten
        Übergaben: Es geht nicht nur um „besenrein“, sondern um den vertragsgemäßen Zustand mit funktionierendem
        Stadtinventar. Technische Detailfragen zu Böden und Rückbau ergänzt unser Ratgeber{" "}
        <RatgeberInternalLink href="/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben">
          Stadt-Wien-Rückgabevorgaben
        </RatgeberInternalLink>
        ; Kaution und Terminlogik vertieft{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Gemeindebau-Wohnungsübergabe
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberP>
        Zur Übergabe erscheinen Sie persönlich oder lassen sich schriftlich bevollmächtigen — mit Lichtbildausweis.
        Ohne Vertretung und ohne Ausweis stockt die Schlüsselrückgabe oft, auch wenn die Wohnung leer ist. Termin-
        Änderungen sollten spätestens 14 Tage vorher kommuniziert werden. Wer den Termin verpasst oder die Wohnung
        nicht übergabefähig vorfindet, riskiert weitere Mietzinsen und Kosten — genau das wollen Erben vermeiden.
      </RatgeberP>

      <RatgeberH2>Kellerabteil: der stille Stolperstein der Verlassenschaft</RatgeberH2>
      <RatgeberP>
        Im Gemeindebau gehört das Kellerabteil zur Rückgabe. Es muss leer, sauber und versperrt sein; auf der
        Kellertür sollen Tür- und Stiegennummer stehen, damit Werkmeister und Verwaltung das Abteil eindeutig
        zuordnen. Jahrzehntealtes Inventar, alte Reifen, Konserven und vergessene Kartons verzögern mehr Übergaben
        als ein einzelnes Sofa in der Wohnung.
      </RatgeberP>
      <RatgeberP>
        Planen Sie die{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>{" "}
        deshalb von Anfang an mit — nicht als „Nachmittag danach“. Zugang, Beleuchtung und die richtige Türnummer
        klären wir bei der Besichtigung. So bleibt der Übergabetermin an der Wohnung nicht am vergessenen Keller
        hängen.
      </RatgeberP>

      <RatgeberH2>Ablauf: von der Ermächtigung zum Übergabetermin</RatgeberH2>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Zugang &amp; Vollmacht:</strong> Schlüssel, Notar-Status, schriftliche Bevollmächtigung klären.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Sichern:</strong> Dokumente, Werte, Erinnerungen — vor jeder Entsorgung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Wiener Wohnen:</strong> schriftliche Kündigung, Monatsende-Frist, Übergabetermin fixieren.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Besichtigung:</strong> Wohnung, Keller, Zufahrt, Lift — Fixpreis und Endzustand schriftlich.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Räumen:</strong> Demontage, Abtransport, Entsorgung; Stadtinventar unangetastet lassen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Übergeben:</strong> persönlich oder bevollmächtigt, mit Ausweis, leerem Keller und Schlüsseln.
        </RatgeberLi>
      </RatgeberOl>
      <RatgeberP>
        Orientierende Kostenfaktoren — ohne Fantasiepreise — finden Sie unter{" "}
        <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink> und im Ratgeber{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet eine Entrümpelung in Wien?
        </RatgeberInternalLink>
        . Der Fixpreis folgt Volumen, Zugang und Terminpuffer, nicht einer Pauschale „Verlassenschaft Gemeindebau“.
      </RatgeberP>

      <RatgeberH3>Praxis-Beispiel: Erben, Notar und Keller vor dem Monatsende</RatgeberH3>
      <RatgeberP>
        Typischer Fall: Eine Gemeindewohnung im dritten Stock ohne zuverlässigen Lift, Übergabetermin zum
        Monatsende, Notar hat die Räumung freigegeben, zwei Erben wohnen außerhalb Wiens. Bei der Besichtigung
        markieren wir zuerst Dokumente und Erinnerungsstücke; parallel prüfen wir Kellerzugang und Türnummer. Erst
        danach kalkulieren wir Teamgröße, Demontage und Abtransport — rückwärts vom Übergabetermin, mit Puffer für
        Sortierung.
      </RatgeberP>
      <RatgeberP>
        Am Einsatztag sichern wir die kennzeichneten Boxen, räumen Wohnung und Keller, lassen Stadtinventar stehen
        und bereiten die Schlüsselübergabe vor. Die Erben erscheinen mit Vollmacht und Lichtbildausweis; das
        Kellerabteil ist leer, versperrt und beschriftet. So endet die Verlassenschaft nicht in einer Diskussion
        über vergessene Kartons oder fehlende Ermächtigung — sondern in einer ruhigen Rückgabe an Wiener Wohnen.
      </RatgeberP>

      <RatgeberH2>Kostenfaktoren bei Verlassenschaft im Gemeindebau</RatgeberH2>
      <RatgeberP>
        Die Tabelle zeigt Hebel für Zeit und Fixpreis — ohne erfundene Euro-Beträge. Sie ersetzt keine Besichtigung,
        hilft aber bei der Erstanfrage.
      </RatgeberP>
      <RatgeberTableWrap caption="Kostenfaktoren: Gemeindewohnung nach Todesfall räumen (ohne Fantasiepreise)">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Faktor</RatgeberTh>
            <RatgeberTh>Warum er zählt</RatgeberTh>
            <RatgeberTh>Was Sie vorab klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Notar-Status &amp; Vollmacht</RatgeberTd>
            <RatgeberTd>Ohne Ermächtigung keine Endentsorgung — Verzögerung kostet Mietzeit</RatgeberTd>
            <RatgeberTd>Erbserklärung, schriftliche Vertretung, Ausweis</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Dokumenten- &amp; Wertesicherung</RatgeberTd>
            <RatgeberTd>Extra Sortierzeit vor dem Abtransport</RatgeberTd>
            <RatgeberTd>Boxen, Markierungen, wer entscheidet vor Ort</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Kellerabteil</RatgeberTd>
            <RatgeberTd>Häufiger Übergabe-Blocker als die Wohnräume</RatgeberTd>
            <RatgeberTd>Tür-/Stiegennummer, Zugang, Volumen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Stockwerk / Lift / Zufahrt</RatgeberTd>
            <RatgeberTd>Gemeindebau-Logistik bestimmt Team und Dauer</RatgeberTd>
            <RatgeberTd>Fotos, Halteverbot-Bedarf, Ruhezeiten</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Übergabetermin-Puffer</RatgeberTd>
            <RatgeberTd>Späte/gescheiterte Übergabe kann Folgemietzins bedeuten</RatgeberTd>
            <RatgeberTd>Kündigung zum Monatsende, 14-Tage-Änderungsfrist</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Wichtig für Erben">
        <RatgeberP>
          Räumen Sie nichts Endgültiges, bevor Dokumente gesichert und die Verlassenschaft bzw. Notar-Ermächtigung
          geklärt sind. Und planen Sie Keller, Schlüssel und Versorger mit — eine leere Wohnzimmerfläche allein
          reicht Wiener Wohnen nicht.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste: Gemeindewohnung nach Todesfall</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Notar/Gerichtskommissär und erbserklärte Erben klären; Räumungsermächtigung einholen",
          "Dokumente, Werte und Erinnerungen vor jeder Entsorgung sichern",
          "Schriftliche Kündigung an Wiener Wohnen — Frist ca. 1 Monat zum Monatsende",
          "Übergabetermin fixieren; Änderungen spätestens 14 Tage vorher kommunizieren",
          "Wohnung + Keller besichtigen lassen; Tür-/Stiegennummer am Keller prüfen",
          "Zählerstände ablesen, Versorger kündigen; Schlüssel und Medien sammeln",
          "Übergabe persönlich oder mit schriftlicher Vollmacht + Lichtbildausweis",
          "Stadtinventar belassen und funktionsfähig; Einbaumöbel der Mieterseite entfernen",
        ]}
      />

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">
          Gemeindewohnung nach Todesfall räumen — diskret und terminsicher
        </p>
        <RatgeberP>
          Verlassenschaft im Gemeindebau: Dokumente sichern, Wohnung und Keller räumen, Wiener-Wohnen-Übergabe
          vorbereiten — Fixpreis nach kostenloser Besichtigung.
        </RatgeberP>
        <p className="mt-3">
          <RatgeberInternalLink href="/#kontakt-formular">Jetzt unverbindlich anfragen →</RatgeberInternalLink>
        </p>
      </RatgeberCtaBox>
    </RatgeberArticleBody>
  );
}
