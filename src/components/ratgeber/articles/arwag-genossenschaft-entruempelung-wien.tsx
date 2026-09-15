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
  slug: "arwag-genossenschaft-entruempelung-wien",
  title: "ARWAG Genossenschaft Wien: Abnahmeprotokoll, Kautionsschutz & Wohnungsrückgabe",
  seoTitle: "ARWAG Übergabe Wien — Abnahmeprotokoll, Kaution & Räumung 2026",
  ogTitle: "ARWAG Wien — Abnahmeprotokoll und Kautionsschutz bei Wohnungsrückgabe",
  focusKeyword: "ARWAG Genossenschaft Entrümpelung Wien",
  description:
    "ARWAG-Wohnung zurückgeben: Abnahmeprotokoll, typische Prüfpunkte der 60er–80er-Bausubstanz, Keller als Blocker und Kautionsschutz — Fixpreis nach Besichtigung.",
  excerpt:
    "ARWAG-Rückgabe mit Fokus auf Abnahmeprotokoll, Prüfpunkte und weichen Kautionsschutz — nicht Hochhaus-Logistik.",
  freshnessExcerpt: {
    kind: "updated",
    suffix:
      "Praxis-Leitfaden für ARWAG-Abnahme: Protokoll, Prüfpunkte älterer Bausubstanz und Kautionsschutz.",
  },
  publishedAt: "2026-07-09",
  keywords: [
    "ARWAG Genossenschaft Entrümpelung Wien",
    "ARWAG Wohnungsübergabe",
    "ARWAG Abnahmeprotokoll",
    "ARWAG Kaution",
    "ARWAG Wohnung zurückgeben",
    "Genossenschaftswohnung ARWAG entrümpeln",
    "ARWAG Kellerabteil",
    "besenreine Übergabe ARWAG",
  ],
  faq: [
    {
      question: "Was entscheidet bei der ARWAG-Übergabe über die Kaution?",
      answer:
        "Ob das Objekt übergabefähig ist: leer, Nebenräume geräumt, vereinbarte Rückbauten erledigt. Fehlende Kelleräumung oder offene Einbauten belasten die Diskussion um die Kaution — ohne dass hier konkrete Euro-Einbehalte behauptet werden.",
    },
    {
      question: "Welche Prüfpunkte sehen wir in älteren ARWAG-Beständen häufig?",
      answer:
        "Verbliebene Dübel und Löcher nach dem Rückbau, nicht genehmigte Balkonverglasungen, originale Einbauküchen und vollgestellte Kellerabteile. Eine Vorabbesichtigung macht diese Punkte sichtbar, bevor das Protokoll geschrieben wird.",
    },
    {
      question: "Wann sollte die Räumung vor dem Abnahmetermin fertig sein?",
      answer:
        "Ideal mit Puffer: Räumung und Eigenkontrolle einige Tage vor dem bestätigten Termin. Abnahme und Räumung am selben Vormittag stapeln erhöht das Risiko offener Protokollpunkte.",
    },
    {
      question: "Brauche ich Entsorgungsnachweise für die Kaution?",
      answer:
        "Bei problematischen Resten aus Keller oder Sperrmüll helfen Belege über fachgerechte Entsorgung. Sie ersetzen keine juristische Beratung, stärken aber Ihre Position bei Nachfragen der Verwaltung.",
    },
    {
      question: "Wo steht die Hochhaus-Logistik und wo die Verlassenschaft?",
      answer:
        "Lift und Ladezone bei großen Anlagen: BUWOG-Ratgeber. Sensible Nachlass-Räumung: Bauhilfe. Regionale NÖ-Objekte: EGW. Hier geht es um ARWAG-Protokoll und Kautionsschutz.",
    },
    {
      question: "Wo finde ich offizielle ARWAG-Infos?",
      answer:
        "Auf arwag.at sowie in Ihrem Mietvertrag und den Übergabeunterlagen der Genossenschaft.",
    },
  ],
  howTo: {
    name: "ARWAG-Wohnung kautionsschonend übergeben",
    steps: [
      {
        name: "Abnahmetermin bestätigen",
        text: "Datum schriftlich fixieren und rückwärts Räumungsfenster legen.",
      },
      {
        name: "Prüfpunkte vorab besichtigen",
        text: "Einbauten, Dübelstellen, Balkon, Keller — vor dem Protokoll klären.",
      },
      {
        name: "Wohnung und Nebenräume räumen",
        text: "Leerer Endzustand inkl. Keller; Rückbau nur laut Vorgabe.",
      },
      {
        name: "Nachweise ablegen",
        text: "Entsorgungsbelege bei Bedarf digital und ausgedruckt bereithalten.",
      },
      {
        name: "Protokoll vorbereiten",
        text: "Schlüsselmenge vollständig; Eigenkontrolle vor dem Abnahmetermin.",
      },
    ],
  },
  relatedSlugs: [
    "buwog-genossenschaft-entruempelung-wien",
    "bauhilfe-genossenschaft-entruempelung-wien",
    "gemeindebau-wiener-wohnen-wohnungsuebergabe",
    "checkliste-wohnungsraeumung-wien",
  ],
  readingTimeMinutes: 11,
};

export default function ArwagGenossenschaftEntruempelungWien() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "updated-month" }}
        note="Fokus: ARWAG-Abnahmeprotokoll, Prüfpunkte älterer Bausubstanz und Kautionsschutz."
        article={meta}
      />

      <RatgeberLead>
        Bei der ARWAG Genossenschaft Entrümpelung Wien entscheiden oft Protokoll und Prüfpunkte — nicht die
        Frage, ob noch ein Teppich im Wohnzimmer liegt. Viele ARWAG-Bestände stammen aus den 1960er bis
        1980er Jahren: solide Massivbauweise, große Keller, originale Einbauten. Dieser Text erklärt die
        Abnahmelogik und den weichen Kautionsschutz. Hochhaus-Liftpläne gehören in den BUWOG-Ratgeber;
        Nachlass-Organisation in den Bauhilfe-Text.
      </RatgeberLead>

      <BezirkEarlyCta
        title="ARWAG-Abnahme vorbereiten"
        text="Prüfpunkte, Keller und Endzustand vor dem Protokoll — Fixpreis nach Besichtigung."
      />

      <RatgeberP>
        Trägerinfo:{" "}
        <RatgeberInternalLink href="https://arwag.at/">arwag.at</RatgeberInternalLink>. Urbane
        Hochhaus-Logistik:{" "}
        <RatgeberInternalLink href="/ratgeber/buwog-genossenschaft-entruempelung-wien">
          BUWOG entrümpeln
        </RatgeberInternalLink>
        . Verlassenschaft in Genossenschaftswohnungen:{" "}
        <RatgeberInternalLink href="/ratgeber/bauhilfe-genossenschaft-entruempelung-wien">
          Bauhilfe
        </RatgeberInternalLink>
        . Vergleich Gemeindebau-Kalender:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wiener Wohnen Übergabe
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Abnahmeprotokoll: was wirklich zählt</RatgeberH2>
      <RatgeberP>
        Das Protokoll hält fest, ob die Wohnung übergabefähig ist. Typische Blocker: persönliche Gegenstände
        in Schränken, ein volles Kellerabteil, offene Demontagen oder unklare Schlüssel. Wer am Abnahmetag
        noch räumt, schreibt Stress ins Protokoll — und macht die Kaution zum Gesprächsthema. Deshalb planen
        wir die{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>{" "}
        rückwärts vom bestätigten Termin, nicht vorwärts „wenn es passt“.
      </RatgeberP>
      <RatgeberP>
        Schriftlichkeit hilft: Zusagen zu Rückbau, Terminverschiebungen und offenen Punkten per Mail oder
        Protokollnotiz festhalten. Mündliche „machen wir später“-Absprachen im Stiegenhaus schützen die
        Kaution selten. Wir sehen regelmäßig, dass eine kurze Mail vor dem Termin mehr Klarheit schafft als
        eine Diskussion während der Begehung — besonders wenn Angehörige oder Nachmieter mit dabei sind.
        Orientierung ohne Fantasiepreise:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Kosten Entrümpelung Wien
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberP>
        Am Abnahmetag selbst zählt der Eindruck der ersten Minuten: leere Räume, zugängliche Nebenräume,
        vollständige Schlüsselmenge. Was später „noch erledigt“ werden soll, landet oft als offener Punkt im
        Protokoll. Deshalb beenden wir die Räumung mit einer stillen Eigenkontrolle — nicht mit dem Hoffen,
        dass der Abnehmer Details übersieht.
      </RatgeberP>

      <RatgeberH2>Typische Prüfpunkte in 60er–80er-ARWAG-Beständen</RatgeberH2>
      <RatgeberP>
        In der Praxis sehen wir in Simmering, Donaustadt oder Liesing immer wieder dieselbe Kombination:
        massive Wände, Holz-Einbauküche, großzügiges Kellerabteil. Abnehmende achten häufig auf:
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Dübel und Bohrlöcher</strong> nach dem Rückbau von Regalen und Küchenzeilen
        </RatgeberLi>
        <RatgeberLi>
          <strong>Einbauküche:</strong> raus, sofern keine schriftliche Übernahme durch Nachmieter/Genossenschaft
        </RatgeberLi>
        <RatgeberLi>
          <strong>Balkon:</strong> nicht genehmigte Verglasungen oder zurückgelassene Einbauten
        </RatgeberLi>
        <RatgeberLi>
          <strong>Keller:</strong> leer, zugänglich, ohne Sperrmüll im Gang
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Das sind keine juristischen Urteile — es sind wiederkehrende Beobachtungen aus Übergaben. Eine
        Vor-Ort-Besichtigung macht sichtbar, welche Punkte vor dem Protokoll noch Arbeit brauchen. Technische
        Feinprüfung Raum für Raum im Gemeindebau-Kontext:{" "}
        <RatgeberInternalLink href="/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben">
          Rückgabevorgaben Gemeindewohnung
        </RatgeberInternalLink>{" "}
        (andere Trägerlogik, ähnliche Prüflogik).
      </RatgeberP>

      <RatgeberH2>60er–80er-Substanz: was wir vor dem Protokoll prüfen</RatgeberH2>
      <RatgeberP>
        Ältere ARWAG-Bestände verzeihen weniger „wir lassen das so“. Massivwände zeigen Bohrlöcher deutlicher
        als moderne Trockenbauwände; originale Küchenzeilen sind oft schwerer und brauchen ein eigenes
        Demontagefenster. Wir sehen in solchen Objekten häufig, dass Mieter die Wohnung leer räumen — und die
        Küche „für den Nachmieter“ stehen lassen, ohne schriftliche Übernahme. Genau das landet dann als
        Prüfpunkt im Protokoll.
      </RatgeberP>
      <RatgeberP>
        Balkon und Loggia verdienen einen eigenen Blick: alte Markisenhalterungen, nicht genehmigte
        Verglasungen, zurückgelassene Blumenkästen oder Bodenbeläge. Im Keller der 60er–80er-Anlagen sind die
        Abteile oft großzügig — und damit umso häufiger vollgestellt. Wer nur die Wohnräume im Auftrag hat,
        unterschätzt den Zeitbedarf für Nebenräume systematisch. Für den Kalender-Vergleich im Gemeindebau:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wiener Wohnen Übergabe
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Rückbauumfang schriftlich:</strong> Küche, Regale, Eigenbauten — vor dem Räumungstag
        </RatgeberLi>
        <RatgeberLi>
          <strong>Dübelstellen einplanen:</strong> nicht erst am Abnahmetag „überrascht“ entdecken
        </RatgeberLi>
        <RatgeberLi>
          <strong>Balkon/Loggia mitprüfen:</strong> oft vergessen, oft protokollrelevant
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2>Kautionsschutz — soft und dokumentiert</RatgeberH2>
      <RatgeberP>
        Die Kaution soll zurückkommen, wenn das Mietobjekt ordnungsgemäß übergeben wurde. Fehlen Belege zu
        entsorgtem Sperrmüll oder problematischen Kellerresten, wird die Diskussion schwieriger. Fachgerechte
        Entsorgung mit Nachweis ist Absicherung — keine Garantie für konkrete Euro-Beträge. Bewahren Sie
        Kopien auf; am Abnahmetag zählen greifbare Unterlagen mehr als Zusicherungen.
      </RatgeberP>
      <RatgeberP>
        Verwertbare Möbel können den Fixpreis mindern:{" "}
        <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>. Der
        Gesamtablauf einer{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>{" "}
        sollte denselben Kalender nutzen wie die Schlüsselabgabe. Wer Nachweise erst Wochen später sucht,
        schwächt die eigene Position — legen Sie sie direkt nach der Entsorgung digital und ausgedruckt ab.
      </RatgeberP>

      <RatgeberH2>Was die Kaution in der Praxis schwächt — und was hilft</RatgeberH2>
      <RatgeberP>
        Soft gesprochen: Wir sehen Kautionsdiskussionen selten wegen eines vergessenen Kleiderbügels —
        sondern wegen fehlender Nebenraum-Räumung, unklarer Rückbauten oder fehlender Entsorgungsbelege. Ein
        besenreiner Eindruck der Wohnräume hilft; er ersetzt aber keine dokumentierte Entsorgung problematischer
        Fraktionen aus Keller oder Dachboden. Ebenso hilft es, offene Punkte vor dem Termin zu schließen statt
        sie „im Protokoll zu erklären“.
      </RatgeberP>
      <RatgeberP>
        Praktisch bewährt: Foto-Endzustand nach der Räumung (Wohnung + Keller), Schlüsselmenge listen,
        Entsorgungsnachweise bereitlegen, kurze Eigenbegehung einen Tag vor der Abnahme. Das ist kein
        juristischer Schutzschild — aber es macht Ihre Übergabe nachvollziehbar. Hochhaus-Zufahrt und Liftfenster
        gehören nicht hierher, sondern zu{" "}
        <RatgeberInternalLink href="/ratgeber/buwog-genossenschaft-entruempelung-wien">
          BUWOG
        </RatgeberInternalLink>
        ; Nachlass-Organisation zu{" "}
        <RatgeberInternalLink href="/ratgeber/bauhilfe-genossenschaft-entruempelung-wien">
          Bauhilfe
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Keller und Schlüssel: Protokoll-Blocker</RatgeberH2>
      <RatgeberP>
        Ein volles Abteil stoppt die Schlüsselübergabe auch dann, wenn die Wohnung leer wirkt. Planen Sie{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>{" "}
        als eigenen Terminblock — nicht als Rest vom Wohnungsräumungstag. Alle Schlüssel (Wohnung, Haus,
        Keller, ggf. Post) vor dem Protokoll vollzählig bereitlegen — fehlende Schlüssel sind ein klassischer
        Protokollpunkt. In älteren Anlagen liegen Keller und Wohnung oft weit auseinander; wer den Keller
        „später“ plant, riskiert genau den Tag, an dem der Abnahmetermin nicht mehr verschiebbar ist.
      </RatgeberP>

      <RatgeberH2>Zeitachse bis zum Abnahmetermin</RatgeberH2>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Tag 0:</strong> Bestätigter Abnahmetermin
        </RatgeberLi>
        <RatgeberLi>
          <strong>Minus Kontrolle:</strong> Eigenbegehung, Schlüssel, Nachweise
        </RatgeberLi>
        <RatgeberLi>
          <strong>Minus Räumung:</strong> Wohnung + Keller leer / besenrein
        </RatgeberLi>
        <RatgeberLi>
          <strong>Minus Organisation:</strong> Besichtigung, Fixpreis, ggf. Express
        </RatgeberLi>
      </RatgeberOl>
      <RatgeberP>
        Knapp vor der Deadline:{" "}
        <RatgeberInternalLink href="/ratgeber/express-entruempelung-wien-24h-krisenmanagement">
          Express-Entrümpelung Wien
        </RatgeberInternalLink>{" "}
        — nur mit klarem Umfang. Express ersetzt keine Protokoll-Vorbereitung und keinen Rückbau, der erst
        bei der Besichtigung sichtbar wird. Wer Express und Abnahme am selben Vormittag stapelt, schreibt
        Stress ins Protokoll.
      </RatgeberP>

      <RatgeberH2>Kommunikation mit der Genossenschaft vor dem Protokoll</RatgeberH2>
      <RatgeberP>
        Halten Sie Termin, Rückbauumfang und offene Fragen schriftlich fest. Wenn die Räumung früher fertig
        ist als geplant, nutzen Sie den Puffer für Eigenkontrolle und Nachweisablage — nicht für neue
        Baustellen. Fehlt noch ein Schlüssel oder eine Freigabe zur Küchenübernahme, klären Sie das vor dem
        Abnahmetermin. Bei mehreren Angehörigen sollte eine Person den Protokolltermin koordinieren; die
        Nachlass-Organisation bleibt im{" "}
        <RatgeberInternalLink href="/ratgeber/bauhilfe-genossenschaft-entruempelung-wien">
          Bauhilfe-Ratgeber
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH3>Praxis-Beispiel: Abnahme in 12 Tagen, Küche noch drin</RatgeberH3>
      <RatgeberP>
        Eine ARWAG-Wohnung war bis auf die Einbauküche und den Keller geräumt. Ohne Demontage und Keller wären
        offene Protokollpunkte und Kautionsdiskussion wahrscheinlich gewesen. Lösung: Besichtigung,
        Küchenrückbau und Keller in einem Auftrag, Nachweisablage, Abnahme am geplanten Tag. Der Engpass war
        nicht der Sofa-Transport — es waren Prüfpunkte und Nebenräume.
      </RatgeberP>
      <RatgeberP>
        Zwölf Tage wirken lang, bis man rückwärts rechnet: Besichtigung, Demontage, Entsorgung, Eigenkontrolle.
        Genau diese Kette macht aus „noch Zeit“ einen realistischen Protokollplan — besonders in 60er–80er-
        Beständen, wo Rückbau und Keller mehr Zeit fressen als der Möbelabtransport allein.
      </RatgeberP>

      <RatgeberH2>Foto-Dokumentation als Protokoll-Absicherung</RatgeberH2>
      <RatgeberP>
        Vor und nach der Räumung helfen Fotos: leere Räume, leerer Keller, demontierte Küchenzeile, freie
        Balkonfläche. Wir dokumentieren auf Wunsch den Endzustand — nicht als juristische Gutachten, sondern
        als praktische Absicherung, falls später Fragen zur Übergabe auftauchen. Besonders bei Erben, die nicht
        am Protokolltermin dabei sein können, ersetzen klare Fotos lange Telefonate.
      </RatgeberP>
      <RatgeberP>
        Dokumentieren Sie auch offene Punkte vor der Räumung (Bohrlöcher, Feuchtstellen, vorhandene Einbauten).
        So trennen Sie mieterseitige Rückbauten von vorhandener Bausubstanz — und vermeiden, dass im Protokoll
        plötzlich „alles neu“ erwartet wird. Die Checkliste{" "}
        <RatgeberInternalLink href="/ratgeber/checkliste-wohnungsraeumung-wien">
          Wohnungsräumung Wien
        </RatgeberInternalLink>{" "}
        ergänzt den ARWAG-Fokus um allgemeine Vorbereitungsschritte.
      </RatgeberP>

      <RatgeberH2>Was nicht in diesen Ratgeber gehört — bewusst</RatgeberH2>
      <RatgeberP>
        Liftfenster und Halteverbote großer Hochhausanlagen:{" "}
        <RatgeberInternalLink href="/ratgeber/buwog-genossenschaft-entruempelung-wien">
          BUWOG-Logistik
        </RatgeberInternalLink>
        . Sensible Nachlass-Sortierung und Vollmachten:{" "}
        <RatgeberInternalLink href="/ratgeber/bauhilfe-genossenschaft-entruempelung-wien">
          Bauhilfe Verlassenschaft
        </RatgeberInternalLink>
        . Siedlungs-Gartenabteile:{" "}
        <RatgeberInternalLink href="/ratgeber/siedlungsunion-genossenschaft-entruempelung-wien">
          Siedlungsunion Nebenräume
        </RatgeberInternalLink>
        . Hier bleibt der Kern: ARWAG-Abnahmeprotokoll, Prüfpunkte und Kautionsschutz — damit Suchende nicht
        fünfmal denselben Fixpreis-Text lesen.
      </RatgeberP>
      <RatgeberP>
        Wer Gemeindebau statt Genossenschaft übergibt, findet die Kalenderlogik parallel unter{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wiener Wohnen Übergabe
        </RatgeberInternalLink>
        . Die Träger unterscheiden sich — die Idee „rückwärts vom Termin planen“ bleibt gleich.
      </RatgeberP>

      <RatgeberH2>Kosten- und Risikohebel ARWAG (ohne Fantasiepreise)</RatgeberH2>
      <RatgeberTableWrap caption="Hebel bei ARWAG-Übergabe und Kautionsschutz (ohne Fantasiepreise)">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Hebel</RatgeberTh>
            <RatgeberTh>Wirkung</RatgeberTh>
            <RatgeberTh>Früh klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Abstand zum Abnahmetermin</RatgeberTd>
            <RatgeberTd>Zu wenig Puffer = offene Protokollpunkte</RatgeberTd>
            <RatgeberTd>Rückwärtskalender</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Offene Einbauten / Dübelstellen</RatgeberTd>
            <RatgeberTd>Nacharbeit oder Einwand im Protokoll</RatgeberTd>
            <RatgeberTd>Rückbauumfang schriftlich</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Keller noch belegt</RatgeberTd>
            <RatgeberTd>Schlüsselübergabe gefährdet</RatgeberTd>
            <RatgeberTd>Nebenräume im Auftrag</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Fehlende Entsorgungsbelege</RatgeberTd>
            <RatgeberTd>Schwächere Position bei Nachfragen</RatgeberTd>
            <RatgeberTd>Nachweise ablegen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Unvollständige Schlüsselmenge</RatgeberTd>
            <RatgeberTd>Klassischer Protokollpunkt</RatgeberTd>
            <RatgeberTd>Schlüssel früh sammeln</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Protokoll-Hinweis">
        <RatgeberP>
          Ein leeres Wohnzimmer schützt die Kaution nicht, wenn Keller, Einbauten oder Schlüssel im Protokoll
          fehlen. Planen Sie Prüfpunkte mit demselben Ernst wie den Abnahmetermin selbst.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste ARWAG-Abnahme</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Abnahmetermin schriftlich bestätigt",
          "Rückbauumfang (Küche/Einbauten) geklärt",
          "Kellerabteil leer und zugänglich",
          "Entsorgungsnachweise bei Bedarf abgelegt",
          "Alle Schlüssel vollzählig bereit",
          "Eigenkontrolle vor dem Protokolltermin",
        ]}
      />

      <RatgeberP>
        Mit klaren Prüfpunkten und dokumentiertem Endzustand sinkt der Übergabe-Stress spürbar. Für
        Hochhaus-Zufahrt und für Nachlass-Räumung die Spezialratgeber nutzen — so bleibt der ARWAG-Text ein
        eigenständiger Hub zum Abnahmeprotokoll.
      </RatgeberP>

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">ARWAG-Übergabe — protokollklar &amp; terminsicher</p>
        <RatgeberP>
          Wir bereiten Prüfpunkte, Keller und Endzustand vor dem Abnahmetermin vor — Fixpreis nach
          Besichtigung.
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
