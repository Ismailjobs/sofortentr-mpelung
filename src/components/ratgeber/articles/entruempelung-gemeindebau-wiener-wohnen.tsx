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
  slug: "entruempelung-gemeindebau-wiener-wohnen",
  title: "Entrümpelung im Gemeindebau: Tipps für die Rückgabe an Wiener Wohnen",
  seoTitle: "Entrümpelung im Gemeindebau: Wiener Wohnen Übergabe-Tipps",
  ogTitle: "Entrümpelung im Gemeindebau — Tipps für die Rückgabe an Wiener Wohnen",
  focusKeyword: "Entrümpelung Gemeindebau Wien",
  description:
    "Entrümpelung Gemeindebau Wien: Werkmeister-Vorabbesichtigung, Demontage von Laminat und Einbauten, LKW/MA 46 und Tragewege in großen Siedlungen — Praxisleitfaden ohne Fantasiepreise.",
  excerpt:
    "Handwerklicher Rückbau und Baustellen-Logistik für die Rückgabe an Wiener Wohnen.",
  freshnessExcerpt: {
    kind: "guide",
    guideName: "Gemeindebau-Leitfaden",
    suffix:
      "Werkmeister, Demontage und Baustellen-Logistik für die Rückgabe an Wiener Wohnen.",
  },
  publishedAt: "2024-06-12",
  keywords: [
    "Entrümpelung Gemeindebau Wien",
    "Wiener Wohnen Übergabe",
    "Gemeindewohnung zurückgeben",
    "Rückbau Laminat Wiener Wohnen",
    "Werkmeister Vorabbesichtigung",
    "Halteverbot Gemeindebau MA 46",
    "Wohnungsrückgabe Wien",
    "Haushaltsauflösung Wiener Wohnen",
  ],
  faq: [
    {
      question: "Warum reicht ein Möbeltransport allein im Gemeindebau nicht?",
      answer:
        "Weil viele Wohnungen Jahrzehnte lang umgebaut wurden: Laminat, PVC, Zwischenwände und Einbauküchen müssen oft handwerklich demontiert werden — nicht nur hinausgetragen. Ohne Rückbau scheitert die Abnahme trotz leerer Räume.",
    },
    {
      question: "Was bringt die Werkmeister-Vorabbesichtigung vor dem Räumungstag?",
      answer:
        "Der Werkmeister hält schriftlich fest, welche Beläge und Einbauten bleiben dürfen und was zwingend raus muss. Das verhindert Fehlarbeit am Einsatztag und Nachbesserungen kurz vor der Schlüsselübergabe.",
    },
    {
      question: "Wann brauche ich im Gemeindebau ein Halteverbot der MA 46?",
      answer:
        "Sobald der LKW vor dem richtigen Stiegenhaus stehen muss und die Zufahrt sonst zugeparkt ist — typisch in großen Anlagen wie Karl-Marx-Hof oder weitläufigen Siedlungen in Favoriten und Floridsdorf. Der Vorlauf für die Genehmigung gehört in den Baustellenplan.",
    },
    {
      question: "Wie plane ich Tragewege ohne oder mit engem Lift?",
      answer:
        "Liftmaße, Kabinentiefe und Türbreiten vor Ort messen; sperrige Teile vorher demontieren. Ohne Aufzug wird Stockwerk und Weglänge zum entscheidenden Zeitfaktor — oft entscheidender als das reine Volumen.",
    },
    {
      question: "Kann Wertausgleich die Rückbaukosten mindern?",
      answer:
        "Ja, wenn Möbel oder Geräte noch verwertbar sind. Der Rest geht in die fachgerechte Entsorgung. Orientierung: Wertausgleich und Fixpreis nach Besichtigung — ohne erfundene Euro-Beträge.",
    },
    {
      question: "Wo finde ich Kaution, Terminplan und die technische Abnahme-Checkliste?",
      answer:
        "Kaution und Kalender: Ratgeber Wiener Wohnen Wohnungsübergabe. Raum-für-Raum-Abnahme: Rückgabevorgaben Stadt-Wien-Gemeindewohnung. Dieser Text konzentriert sich auf Handwerk und Logistik.",
    },
  ],
  howTo: {
    name: "Handwerklicher Rückbau und Baustellen-Logistik im Gemeindebau",
    steps: [
      {
        name: "Werkmeister-Vorabbesichtigung vereinbaren",
        text: "Schriftlich klären, welche Bodenbeläge, Küchen und Zwischenwände demontiert werden müssen.",
      },
      {
        name: "Demontage als Handwerksarbeit planen",
        text: "Laminat, PVC, Einbauten und Küche materialschonend herausnehmen — inkl. Kleber- und Restentsorgung.",
      },
      {
        name: "Liftmaße und Tragewege erfassen",
        text: "Stockwerk, Aufzugskabine, Hofwege und Stiegenhaus-Zugang vor dem Einsatztag dokumentieren.",
      },
      {
        name: "LKW-Zufahrt und MA-46-Halteverbot organisieren",
        text: "Ladezone vor dem richtigen Eingang sichern, damit der Abtransport nicht stockt.",
      },
      {
        name: "Räumung und Grobreinigung abschließen",
        text: "Wohnung und Nebenräume leer hinterlassen; technische Feinabnahme und Kautionsthemen separat klären.",
      },
    ],
  },
  readingTimeMinutes: 11,
};

export default function EntruempelungGemeindebauWienerWohnen() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "guide", guideName: "Gemeindebau-Leitfaden" }}
        note="Fokus: handwerklicher Rückbau, Werkmeister und Baustellen-Logistik in Wiener Gemeindebauten."
        article={meta}
      />

      <RatgeberLead>
        Wer im Gemeindebau nur an Kartons und Sofas denkt, unterschätzt den eigentlichen Aufwand: Die
        Entrümpelung Gemeindebau Wien ist oft eine Baustelle mit Demontage, Schuttfraktionen und engen
        Tragewegen — bevor überhaupt von Schlüsselübergabe die Rede sein kann.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Gemeindebau-Rückbau &amp; Logistik"
        text="Werkmeister-Vorgaben, Laminat-Demontage und LKW-Zufahrt: wir kalkulieren nach Besichtigung vor Ort."
      />

      <RatgeberP>
        Dieser Leitfaden behandelt den handwerklichen Rückbau und die Baustellen-Logistik in großen
        Wohnhausanlagen — von der Werkmeister-Vorabbesichtigung bis zu Liftmaßen und MA-46-Zufahrt.
        Kaution und Terminplan:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe">
          Wiener Wohnen Wohnungsübergabe
        </RatgeberInternalLink>
        . Technische Abnahme Raum für Raum:{" "}
        <RatgeberInternalLink href="/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben">
          Rückgabevorgaben Stadt-Wien-Gemeindewohnung
        </RatgeberInternalLink>
        . Leistungen:{" "}
        <RatgeberInternalLink href="/leistungen/wohnungsaufloesung">Wohnungsauflösung</RatgeberInternalLink>
        ,{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Werkmeister-Vorabbesichtigung: die Baustellenfreigabe</RatgeberH2>
      <RatgeberP>
        Bevor Hammer und Stemmeisen kommen, braucht der Rückbau eine verbindliche Liste. Der Werkmeister von
        Wiener Wohnen entscheidet, was Stadtinventar bleibt und was Mieter-Einbau war. Ohne dieses Protokoll
        demontieren Sie vielleicht zu viel — oder zu wenig, und der nächste Termin wird zur Nacharbeit.
      </RatgeberP>
      <RatgeberP>
        Praktisch heißt das: Termin vereinbaren, Einbauten zeigen (Laminat, PVC, Zwischenwände, Küchenzeile,
        Deckenverkleidung) und alles Schriftliche mitnehmen. Erst danach lohnt die detaillierte{" "}
        <RatgeberInternalLink href="/ratgeber/raeumungsexperte-wien-besichtigung">
          Räumungs-Besichtigung
        </RatgeberInternalLink>{" "}
        mit Fixpreis — weil Umfang und Handwerksanteil dann klar sind. Bei Verlassenschaft oder Erben zuerst
        Zuständigkeit klären:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-todesfall-verlassenschaft-raeumen-wien">
          Gemeindewohnung nach Todesfall räumen
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Demontage als Handwerk — nicht als „Möbel raus“</RatgeberH2>
      <RatgeberP>
        Laminat und PVC, die über Estrich oder Parkett liegen, sind Demontagearbeit: Platten heben,
        Klebereste entfernen, Schutt trennen. Zwischenwände aus Rigips oder Holz sind Abbruch mit Staubschutz
        und Entsorgung — kein Wochenend-Hobby. Einbauküchen brauchen oft Werkzeug, das private Helfer nicht
        mitbringen. Wer nur „entrümpeln“ meint und den Rückbau unterschätzt, steht am Einsatztag mit
        Stemmeisen und ohne Entsorgungsplan da.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Bodenbeläge:</strong> Schicht für Schicht lösen; Kleber und Unterlagen gehören in die
          richtige Fraktion, sonst blockiert der Abtransport.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Zwischenwände:</strong> Tragende Elemente nie selbst „abschätzen“ — nur klar als
          Mieter-Einbau ausgewiesene Trennwände zurückbauen.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Küchen und Schrankwände:</strong> Reihenfolge Demontage → Trageweg → LKW, damit das
          Stiegenhaus nicht stundenlang verstopft.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Staub und Schutz:</strong> Folien, Absaugung und Schonung von Treppenhäusern gehören zur
          Baustellenordnung — sonst entstehen Folgeschäden an Stadtflächen.
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Stark vollgestellte Wohnungen brauchen vor dem Rückbau oft erst Sortier- und Hygieneschritte:{" "}
        <RatgeberInternalLink href="/ratgeber/vollgestellte-gemeindewohnung-entruempeln-wien">
          vollgestellte Gemeindewohnung entrümpeln
        </RatgeberInternalLink>
        . Verwertbares kann den Aufwand mindern:{" "}
        <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>. Die
        Feinprüfung von Fliesen, Sanitär und Loggia bleibt dem Abnahme-Ratgeber vorbehalten — hier geht es
        um das Herauslösen der Einbauten und den Abtransport.
      </RatgeberP>

      <RatgeberH2>Materialflüsse: Schutt, Sperrmüll, Fahrtenkette</RatgeberH2>
      <RatgeberP>
        Jede Demontage erzeugt Fraktionen: Holz aus Küchen, Laminatreste, Metallschienen, Kartonage,
        Sperrmöbel. Im Gemeindebau fehlt oft der Hofplatz zum Zwischenlagern. Deshalb planen wir die
        Fahrtenkette so, dass Schutt nicht im Stiegenhaus landet und der LKW in sinnvollen Takten beladen
        wird. Private Helfer unterschätzen genau diesen Teil: Drei Fahrten zur Mistplatz-Logistik der MA 48
        ohne Sortierung kosten mehr Zeit als ein durchgeplanter Firmeneinsatz.
      </RatgeberP>
      <RatgeberP>
        In großen Siedlungen kommt hinzu, dass der Weg vom vierten Stock bis zur Straße länger dauert als
        die eigentliche Demontage eines Schrankes. Wer Teamgröße und Fahrzeug zu knapp wählt, verlängert
        den Tag — und riskiert, dass die Ladezone abläuft, bevor der letzte Gang fertig ist. Deshalb hängt
        der Fixpreis nach Besichtigung eng an sichtbaren Tragewegen und am Werkmeister-Umfang, nicht an
        einer pauschalen Zimmerzahl.
      </RatgeberP>

      <RatgeberH2>Baustellen-Logistik: LKW, MA 46, Liftmaße, Tragewege</RatgeberH2>
      <RatgeberP>
        In Anlagen wie dem Karl-Marx-Hof oder großen Siedlungen im 10., 11. oder 21. Bezirk entscheidet nicht
        das Wohnzimmer über den Tag — sondern der Weg vom Wohnungsboden bis zur Ladebordwand. Lange Höfe,
        verwinkelte Stiegenhäuser und enge Aufzüge verwandeln jede Demontage in eine Transportkette. Ein
        falsch gewählter Eingang kann bedeuten, dass das Team zweihundert Meter Hof quert — mit jedem
        Küchenschrank erneut.
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>
          <strong>Zufahrt:</strong> Welches Stiegenhaus, welche Hofeinfahrt, wo darf der LKW legal stehen?
        </RatgeberLi>
        <RatgeberLi>
          <strong>MA 46:</strong> Halteverbot mit Vorlauf beantragen, wenn die Straße sonst zugeparkt ist —
          der Antrag ist Teil der Baustellenvorbereitung, kein Spontankauf am Einsatztag.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Lift:</strong> Kabinenmaß, Nutzlast, Türbreite — Sofas und Schränke oft vorher zerlegen;
          Schutzmatten schonen Kabine und vermeiden Haftungsärger mit der Verwaltung.
        </RatgeberLi>
        <RatgeberLi>
          <strong>Ruhezeiten:</strong> Lärmende Demontage nur in erlaubten Fenstern; Nachbarschaft und
          Hausordnung einplanen.
        </RatgeberLi>
      </RatgeberOl>
      <RatgeberP>
        Kellerzugänge und Schlüsselketten gehören operativ dazu — Details zu Nebenräumen und Schlüsselplan:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-aufloesen-keller-schluessel-uebergabe">
          Gemeindewohnung auflösen: Keller &amp; Schlüssel
        </RatgeberInternalLink>
        , Leistung{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>
        . Selbstorganisation vs. Firma:{" "}
        <RatgeberInternalLink href="/ratgeber/ma-48-vs-entruempelungsfirma-wien">
          MA 48 vs. Entrümpelungsfirma
        </RatgeberInternalLink>
        . Was wir hier bewusst kurz halten: Kautionstermine und Sanitär-Feinheiten — die gehören in die
        anderen Hub-Texte, damit dieser Leitfaden handwerklich und logistisch bleibt.
      </RatgeberP>

      <RatgeberH2>Eigenleistung vs. eingespieltes Rückbau-Team</RatgeberH2>
      <RatgeberP>
        Freunde mit Transporter helfen bei Kartons. Beim Abschlagen von Belägen, dem Zerlegen einer
        Küchenzeile und dem Taktieren von Schuttfahrten in einer Großanlage stoßen Laien-Teams schnell an
        Grenzen: fehlendes Werkzeug, falsche Fraktionen, blockierte Stiegenhäuser. Ein eingespieltes Team
        kennt die typischen Gemeindebau-Engpässe und kalkuliert Tragewege vor dem ersten Hammerschlag.
      </RatgeberP>
      <RatgeberP>
        Das heißt nicht, dass Sie nichts selbst vorbereiten können: Persönliches auslagern, Zugangsdaten
        klären, Werkmeister-Termin legen. Der handwerkliche Kern und die LKW-Logistik lassen sich dagegen
        kaum nebenberuflich stemmen, wenn der Übergabetermin näher rückt und noch Rückbau offen ist.
      </RatgeberP>

      <RatgeberH3>Praxis-Beispiel: 4. Stock ohne Lift, Laminat und Küche raus</RatgeberH3>
      <RatgeberP>
        In einer Wohnanlage mit langem Innenhof stand die Wohnung im vierten Stock ohne Aufzug. Der
        Werkmeister hatte Laminat und die Einbauküche zum Rückbau freigegeben. Parallel beantragte das Team ein
        Halteverbot direkt am Stiegenhaus-Eingang — sonst hätte jeder Gang quer durch den Hof die Zeit verdoppelt.
        Am Einsatztag zuerst Demontage der Küche und des Laminats (Schutt getrennt), dann Möbel und Kartons über
        die Stiege, LKW nur so lange an der Ladezone wie nötig. Ergebnis: ein durchgängiger Baustellentag statt
        drei chaotischer Wochenenden — ohne dass Kaution oder Sanitär-Feinheiten hier das Thema waren.
      </RatgeberP>
      <RatgeberP>
        Solche Einsätze zeigen, warum die Vorabbesichtigung zwei Fragen klären muss: Was wird demontiert —
        und welcher physische Weg trägt das Material? Fehlt eine der beiden Antworten, wird aus Handwerk
        Stochern. Mit beiden Antworten bleibt die Entrümpelung Gemeindebau Wien planbar und im Fixpreis
        nachvollziehbar.
      </RatgeberP>

      <RatgeberH2>Kostenfaktoren Rückbau &amp; Logistik (ohne Fantasiepreise)</RatgeberH2>
      <RatgeberP>
        Die Tabelle zeigt Hebel für Aufwand und Fixpreis nach Besichtigung — keine erfundenen Euro-Beträge.
        Vertiefung:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet eine Entrümpelung in Wien?
        </RatgeberInternalLink>{" "}
        und <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink>.
      </RatgeberP>
      <RatgeberTableWrap caption="Kostenfaktoren handwerklicher Rückbau im Gemeindebau (ohne Fantasiepreise)">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Hebel</RatgeberTh>
            <RatgeberTh>Warum er den Einsatztag prägt</RatgeberTh>
            <RatgeberTh>Vorab klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Demontage-Umfang</RatgeberTd>
            <RatgeberTd>Laminat, PVC, Küche, Zwischenwände = Handwerkszeit + Schutt</RatgeberTd>
            <RatgeberTd>Werkmeister-Protokoll, Fotos der Einbauten</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Stockwerk ohne Lift</RatgeberTd>
            <RatgeberTd>Jede Stufe multipliziert Tragegänge und Teamgröße</RatgeberTd>
            <RatgeberTd>Etage, Weglänge Hof/Stiege, sperrige Teile</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Liftkabine / Türbreiten</RatgeberTd>
            <RatgeberTd>Zu enge Maße erzwingen Vorab-Zerlegung</RatgeberTd>
            <RatgeberTd>Innenmaße, Nutzlast, Schutzauflagen</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Ladezone / MA 46</RatgeberTd>
            <RatgeberTd>Ohne legale Standfläche stockt der Abtransport</RatgeberTd>
            <RatgeberTd>Stiegenhaus-Adresse, Vorlauf Halteverbot</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Materialfraktionen</RatgeberTd>
            <RatgeberTd>Belagsreste und Holz brauchen sortierte Entsorgung</RatgeberTd>
            <RatgeberTd>Endzustand leer / grob besenrein</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Baustellen-Hinweis">
        <RatgeberP>
          Wer Demontage und LKW-Zufahrt erst am Übergabetag organisiert, riskiert stehende Teams und
          Nacharbeit. Werkmeister-Liste, Liftmaße und Halteverbot gehören in denselben Vorlauf wie die
          Räumungsbesichtigung — nicht in die letzte Minute.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste vor dem Rückbau-Einsatztag</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Schriftliches Werkmeister-Protokoll zu Belägen und Einbauten vorliegen",
          "Demontage-Reihenfolge (Küche / Laminat / Trennwände) mit dem Team abgestimmt",
          "Stockwerk, Liftmaße und Trageweg Hof–Stiege fotografisch dokumentiert",
          "MA-46-Halteverbot oder klare Ladezone vor dem richtigen Stiegenhaus gesichert",
          "Schutt- und Sperrmüllfraktionen für den Abtransport geplant",
          "Persönliches und Wertgegenstände vor Demontage aus der Wohnung geholt",
        ]}
      />

      <RatgeberP>
        Handwerk und Logistik sind die Basis. Danach kommen Kalender und Kaution sowie die technische
        Feinprüfung — in den verlinkten Schwester-Ratgebern. So bleibt jeder Text thematisch klar und
        wiederholungsarm.
      </RatgeberP>

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">Rückbau im Gemeindebau — Fixpreis nach Besichtigung</p>
        <RatgeberP>
          Wir planen Demontage, Tragewege und LKW-Zufahrt in Wiener Gemeindebauten — inklusive Abstimmung auf
          Werkmeister-Vorgaben.
        </RatgeberP>
        <p className="mt-3">
          <RatgeberInternalLink href="/#kontakt-formular">Jetzt unverbindlich anfragen →</RatgeberInternalLink>
        </p>
      </RatgeberCtaBox>
    </RatgeberArticleBody>
  );
}
