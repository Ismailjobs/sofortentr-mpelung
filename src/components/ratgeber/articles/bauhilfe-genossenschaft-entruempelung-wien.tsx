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
  slug: "bauhilfe-genossenschaft-entruempelung-wien",
  title: "Bauhilfe Genossenschaft Wien: Verlassenschaft & sensible Wohnungsräumung",
  seoTitle: "Bauhilfe Verlassenschaft räumen Wien — diskret & Fixpreis 2026",
  ogTitle: "Bauhilfe Wien — Verlassenschaft und sensible Haushaltsauflösung",
  focusKeyword: "Entrümpelung Bauhilfe Genossenschaft Wien",
  description:
    "Bauhilfe-Wohnung nach Todesfall oder Auszug räumen: Rechte klären, diskrete Sortierung, Nebenräume und übergabefähiger Endzustand — Fixpreis nach Besichtigung.",
  excerpt:
    "Bauhilfe-Räumung mit Fokus Verlassenschaft, Erben und diskrete Haushaltsauflösung — nicht Abnahmeprotokoll-Essay.",
  freshnessExcerpt: {
    kind: "updated",
    suffix:
      "Praxis-Leitfaden für Bauhilfe-Objekte: Verlassenschaft, Sortierung und sensible Übergabe in Wien.",
  },
  publishedAt: "2026-07-07",
  keywords: [
    "Entrümpelung Bauhilfe Genossenschaft Wien",
    "Bauhilfe Verlassenschaft",
    "Bauhilfe Wohnung nach Todesfall",
    "Genossenschaftswohnung Bauhilfe räumen",
    "Haushaltsauflösung Bauhilfe Wien",
    "Bauhilfe Übergabe besenrein",
    "Erben Wohnungsräumung Genossenschaft",
  ],
  faq: [
    {
      question: "Was muss vor einer Bauhilfe-Räumung nach Todesfall geklärt sein?",
      answer:
        "Wer verfügungsberechtigt ist, welche Freigaben die Genossenschaft braucht und ob Dokumente oder Wertgegenstände vor der Räumung gesichert werden. Ohne klare Rechte riskieren Sie, dass die Räumung gestoppt wird — nicht weil Möbel im Weg stehen, sondern weil die Rechtslage unklar ist.",
    },
    {
      question: "Wie läuft eine sensible Sortierung in der Bauhilfe-Wohnung ab?",
      answer:
        "Zuerst Dokumente, Fotos und persönliche Stücke sichern; dann Verwertbares und Sperrmüll trennen. Diskretion bedeutet: kein Sperrmüll auf dem Gang, klare Absprachen mit Angehörigen, ruhige Kommunikation im Haus.",
    },
    {
      question: "Können Erben die Räumung steuern, wenn sie nicht vor Ort wohnen?",
      answer:
        "Ja — mit Vollmacht, Foto-Besichtigung und schriftlichem Auftragsumfang. Wichtig ist eine Person, die Schlüssel und Entscheidungen koordiniert, bevor das Team anrückt.",
    },
    {
      question: "Was ist der Unterschied zu ARWAG- oder BUWOG-Ratgebern?",
      answer:
        "ARWAG fokussiert Abnahmeprotokoll und Kautionsschutz, BUWOG Hochhaus-Logistik. Hier geht es um Verlassenschaft und sensible Organisation in Bauhilfe-Objekten.",
    },
    {
      question: "Gehört der Keller zur Verlassenschafts-Räumung?",
      answer:
        "Ja — Nebenräume gehören zum Mietobjekt. Ein volles Kellerabteil blockiert die Übergabe auch nach einer diskreten Wohnungsräumung.",
    },
    {
      question: "Offizielle Bauhilfe-Infos?",
      answer: "Auf bauhilfe.at sowie in Vertrag und Schreiben der Genossenschaft.",
    },
  ],
  howTo: {
    name: "Bauhilfe-Wohnung nach Todesfall oder Auszug sensibel räumen",
    steps: [
      {
        name: "Rechte und Freigaben klären",
        text: "Verfügungsberechtigung, Vollmachten und Anforderungen der Genossenschaft abstimmen.",
      },
      {
        name: "Dokumente und Wertstücke sichern",
        text: "Vor der Entrümpelung persönliche und rechtlich relevante Dinge aussondern.",
      },
      {
        name: "Umfang festlegen",
        text: "Wohnung, Keller, Abstellraum — schriftlich inkl. Endzustand.",
      },
      {
        name: "Diskrete Räumung durchführen",
        text: "Sortierung, Abtransport, keine Sperrmüll-Exhibition im Hausflur.",
      },
      {
        name: "Übergabe vorbereiten",
        text: "Leer/besenrein, Schlüssel, kurze Dokumentation für Angehörige.",
      },
    ],
  },
  relatedSlugs: [
    "wohnungsaufloesung-nach-todesfall-wien",
    "verlassenschaft-entruempelung-wien-sensibel",
    "gemeindewohnung-todesfall-verlassenschaft-raeumen-wien",
    "arwag-genossenschaft-entruempelung-wien",
  ],
  readingTimeMinutes: 11,
};

export default function BauhilfeGenossenschaftEntruempelungWien() {
  return (
    <RatgeberArticleBody>
      <RatgeberFreshnessBadge
        variant={{ kind: "updated-month" }}
        note="Fokus: Verlassenschaft und sensible Haushaltsauflösung in Bauhilfe-Genossenschaftswohnungen."
        article={meta}
      />

      <RatgeberLead>
        Eine Entrümpelung Bauhilfe Genossenschaft Wien ist oft keine Standard-Auszugsräumung — sie ist eine
        Verlassenschaft oder eine sensible Haushaltsauflösung unter Termindruck. Angehörige brauchen Klarheit
        über Rechte, Sortierung und Nebenräume, bevor das erste Möbelstück das Stiegenhaus sieht. Dieser Text
        behandelt genau diese Organisation. Abnahmeprotokoll-Details: ARWAG. Hochhaus-Lift: BUWOG.
        Siedlungs-Gartenabteile: Siedlungsunion.
      </RatgeberLead>

      <BezirkEarlyCta
        title="Bauhilfe — diskrete Verlassenschafts-Räumung"
        text="Rechte klären, Fotos senden, Fixpreis nach Besichtigung — ruhig und übergabefähig."
      />

      <RatgeberP>
        Trägerinfo:{" "}
        <RatgeberInternalLink href="https://www.bauhilfe.at/">bauhilfe.at</RatgeberInternalLink>.
        Allgemeiner Todesfall-Leitfaden:{" "}
        <RatgeberInternalLink href="/ratgeber/wohnungsaufloesung-nach-todesfall-wien">
          Wohnungsauflösung nach Todesfall
        </RatgeberInternalLink>
        . Sensible Entrümpelung:{" "}
        <RatgeberInternalLink href="/ratgeber/verlassenschaft-entruempelung-wien-sensibel">
          Verlassenschaft Wien
        </RatgeberInternalLink>
        . Gemeindewohnung parallel:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-todesfall-verlassenschaft-raeumen-wien">
          Gemeindewohnung nach Todesfall
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Zuerst Rechte — dann Räumung</RatgeberH2>
      <RatgeberP>
        Ohne klare Verfügungsberechtigung stoppt jede professionelle Räumung früher oder später. Klären Sie
        mit Notar, Gerichtskommissär oder der Genossenschaft, wer Schlüssel, Auftrag und Übergabe verantworten
        darf. Das ist unbequem, aber zuverlässiger als ein Team, das vor verschlossener Tür steht. Wir sehen
        regelmäßig, dass der Engpass nicht das Volumen ist — sondern fehlende Freigaben.
      </RatgeberP>
      <RatgeberP>
        Wenn mehrere Erben entscheiden müssen, braucht es eine Koordinationsperson und schriftliche Absprachen.
        Sonst sortiert das Team am Räumungstag zwischen widersprüchlichen Anweisungen. Eine{" "}
        <RatgeberInternalLink href="/leistungen/verlassenschaft">Verlassenschafts-Räumung</RatgeberInternalLink>{" "}
        lebt von Entscheidungslogik vor dem ersten Karton.
      </RatgeberP>
      <RatgeberP>
        Praktisch: Freigabe und Vollmacht vor dem Besichtigungstermin klären, nicht parallel zur Beladung.
        Die Genossenschaft braucht oft nachvollziehbare Ansprechpartner — besonders wenn der Mietvertrag noch
        auf den Verstorbenen lautet. Wer Rechte und Übergabetermin früh bindet, schützt Angehörige vor einem
        zweiten Anlauf und weiterer Mietphase.
      </RatgeberP>

      <RatgeberH2>Erben koordinieren: eine Stimme, klare Regeln</RatgeberH2>
      <RatgeberP>
        Wir sehen Verlassenschaften, in denen drei Erben per Chat widersprüchliche Listen schicken — „behalten“,
        „verkaufen“, „entsorgen“ für dasselbe Möbelstück. Das Team kann dann nicht sinnvoll arbeiten. Besser:
        eine bevollmächtigte Person, eine schriftliche sichern/entsorgen/verwerten-Liste, ein Ansprechpartner
        für Schlüssel und Freigaben. Emotionale Entscheidungen gehören vor den Räumungstag, nicht mitten hinein.
      </RatgeberP>
      <RatgeberP>
        Erben außerhalb Wiens brauchen oft Foto-Besichtigung und Fernsteuerung. Das funktioniert, wenn der
        Auftragsumfang und die Sortierregeln feststehen. Spontane WhatsApp-Änderungen ohne Entscheidungsrecht
        erzeugen Chaos und Zeitverlust. Allgemeiner Leitfaden:{" "}
        <RatgeberInternalLink href="/ratgeber/wohnungsaufloesung-nach-todesfall-wien">
          Wohnungsauflösung nach Todesfall
        </RatgeberInternalLink>
        . Sensible Praxis:{" "}
        <RatgeberInternalLink href="/ratgeber/verlassenschaft-entruempelung-wien-sensibel">
          Verlassenschaft Wien
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Eine Koordinationsperson:</strong> Vollmacht, Schlüssel, finale Freigaben
        </RatgeberLi>
        <RatgeberLi>
          <strong>Schriftliche Sortierliste:</strong> sichern / spenden / verwerten / entsorgen
        </RatgeberLi>
        <RatgeberLi>
          <strong>Kein Live-Streit im Gang:</strong> Konflikte vor dem Einsatz klären
        </RatgeberLi>
      </RatgeberUl>

      <RatgeberH2>Diskrete Sortierung: Dokumente vor Sperrmüll</RatgeberH2>
      <RatgeberP>
        Vor dem Abtransport: Personalpapiere, Verträge, Fotos, Schmuck und Erinnerungsstücke sichern. Erst
        danach Verwertbares und Entsorgungsfraktionen. Diskretion heißt auch: keine offenen Kartons im
        Hausflur, keine lauten Diskussionen über Nachlasswerte vor Nachbarn. Die{" "}
        <RatgeberInternalLink href="/leistungen/haushaltsaufloesung">Haushaltsauflösung</RatgeberInternalLink>{" "}
        in Bauhilfe-Objekten folgt derselben Reihenfolge — nur mit Genossenschafts-Übergabetermin im Kalender.
      </RatgeberP>
      <RatgeberUl>
        <RatgeberLi>
          <strong>Sichern:</strong> Dokumente und persönliche Stücke vor dem Team-Einsatz
        </RatgeberLi>
        <RatgeberLi>
          <strong>Trennen:</strong> Verwertung, Spende, Entsorgung
        </RatgeberLi>
        <RatgeberLi>
          <strong>Abtransport:</strong> zügig, ohne Sperrmüll-Zwischenlager im Gang
        </RatgeberLi>
      </RatgeberUl>
      <RatgeberP>
        Wertanrechnung kann den Fixpreis mindern:{" "}
        <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>. Möbel
        privat verkaufen vs. Anrechnung:{" "}
        <RatgeberInternalLink href="/ratgeber/moebel-verkaufen-wien-willhaben-wertanrechnung">
          Willhaben oder Wertanrechnung
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Was Diskretion im Stiegenhaus konkret heißt</RatgeberH2>
      <RatgeberP>
        In Genossenschaftshäusern leben Nachbarn weiter — oft jahrelang Seite an Seite mit der geräumten
        Wohnung. Wir sehen, dass diskrete Räumung weniger Theater bedeutet: keine Möbelpyramide im Gang,
        kurze Ladezeiten, klare Ansagen an Angehörige, wann wer vor Ort ist. Das schützt Würde und verhindert
        unnötige Gespräche über den Nachlass im Hausflur.
      </RatgeberP>
      <RatgeberP>
        Sortierung bedeutet auch Tempo mit System: Zuerst die „sichern“-Zone (Dokumente, persönliche Stücke),
        dann Verwertung, dann Entsorgung. Wer alles gleichzeitig aufreißt, verliert Überblick und Diskretion.
        Bei extrem vollgestellten Objekten gilt dieselbe Reihenfolge — nur mit mehr Zeit und klarer
        Prioritätenliste. Parallel Gemeindebau-Todesfall:{" "}
        <RatgeberInternalLink href="/ratgeber/gemeindewohnung-todesfall-verlassenschaft-raeumen-wien">
          Gemeindewohnung nach Todesfall
        </RatgeberInternalLink>
        .
      </RatgeberP>

      <RatgeberH2>Nebenräume und Genossenschafts-Übergabe</RatgeberH2>
      <RatgeberP>
        Auch in der Verlassenschaft gilt: Keller und Abstellraum gehören zum Objekt. Angehörige räumen oft die
        Wohnung emotional zuerst und vergessen das Abteil. Planen Sie{" "}
        <RatgeberInternalLink href="/leistungen/kellerentruempelung">Kellerentrümpelung</RatgeberInternalLink>{" "}
        mit. Für Kaution/Protokoll-Logik bei anderen Trägern:{" "}
        <RatgeberInternalLink href="/ratgeber/arwag-genossenschaft-entruempelung-wien">
          ARWAG Abnahme
        </RatgeberInternalLink>
        — hier bleibt der Fokus auf Nachlass-Organisation.
      </RatgeberP>
      <RatgeberP>
        Wir sehen regelmäßig, dass der Keller der Ort ist, an dem die Verlassenschaft „stecken bleibt“:
        Kartons ohne Beschriftung, alte Akten, unklare Eigentumsfragen. Genau deshalb gehört der Keller in
        die Foto-Besichtigung und in die Sortierliste — nicht in den Rest vom letzten Räumungsnachmittag.
      </RatgeberP>

      <RatgeberH2>Fernsteuerung für Angehörige außerhalb Wiens</RatgeberH2>
      <RatgeberP>
        Viele Erben wohnen nicht in Wien. Funktioniert: Vollmacht, Foto-Set (alle Räume + Keller), ein
        Ansprechpartner vor Ort für Schlüssel, schriftlicher Fixpreis und Endzustand. Nicht funktioniert:
        spontane WhatsApp-Änderungen während der Räumung ohne Entscheidungsrecht. Orientierung Kostenlogik:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet Entrümpelung?
        </RatgeberInternalLink>
      </RatgeberP>
      <RatgeberOl>
        <RatgeberLi>Rechte und Vollmacht klären</RatgeberLi>
        <RatgeberLi>Fotos / Besichtigung inkl. Keller</RatgeberLi>
        <RatgeberLi>Sortierregeln mit Angehörigen festlegen</RatgeberLi>
        <RatgeberLi>Räumung diskret durchführen</RatgeberLi>
        <RatgeberLi>Übergabe an Bauhilfe vorbereiten</RatgeberLi>
      </RatgeberOl>

      <RatgeberH2>Kalender rückwärts vom Bauhilfe-Übergabetermin</RatgeberH2>
      <RatgeberP>
        Auch bei Verlassenschaft zählt der Übergabetermin der Genossenschaft. Rechte klären, Sortierung,
        Räumung, Keller und Schlüssel — rückwärts vom Abgabetermin planen. Wer die emotionale Sortierung erst
        am Tag vor der Übergabe beginnt, stapelt Stress. Ein Puffer für Nacharbeit (vergessene Kellerkiste,
        fehlender Schlüssel) schützt vor Mietverlängerung und Konflikt zwischen Erben.
      </RatgeberP>
      <RatgeberP>
        Express nahe der Deadline verdichtet nur einen klaren Auftrag. Ohne Rechte und Sortierregeln ersetzt
        Tempo keine Organisation. Wir sehen, dass ein stiller Kontrolltag zwischen Räumung und Übergabe oft
        mehr rettet als ein Express-Fenster am Abgabetag selbst. Hochhaus-Liftfenster gehören zu{" "}
        <RatgeberInternalLink href="/ratgeber/buwog-genossenschaft-entruempelung-wien">
          BUWOG
        </RatgeberInternalLink>
        ; Abnahmeprotokoll-Details zu ARWAG. Hier bleibt Bauhilfe der Verlassenschafts-Hub.
      </RatgeberP>

      <RatgeberH3>Praxis-Beispiel: Todesfall, drei Erben, enger Übergabetermin</RatgeberH3>
      <RatgeberP>
        Nach einem Todesfall in einer Bauhilfe-Wohnung lebten die Erben in unterschiedlichen Bundesländern.
        Ohne Vollmacht und Sortierregeln wäre die Räumung zum Konflikt geworden. Lösung: eine bevollmächtigte
        Person, Foto-Besichtigung, schriftliche „sichern / entsorgen“-Liste, Keller im selben Auftrag,
        Übergabe termingerecht. Der kritische Pfad war Organisation — nicht die Demontage der Küche.
      </RatgeberP>
      <RatgeberP>
        Drei Erben bedeuten drei Meinungen — aber nur eine sinnvolle Räumungslogik. Wer die Entscheidung vor
        dem Einsatz bündelt, übergibt diskreter und schneller. Genau das unterscheidet eine sensible
        Verlassenschafts-Räumung von einer Standard-Auszugsräumung mit Logowechsel.
      </RatgeberP>

      <RatgeberH2>Was zuerst sichern — bevor das Team kommt</RatgeberH2>
      <RatgeberP>
        Vor dem Räumungsfenster sollten Angehörige (oder die bevollmächtigte Person) gezielt sichern:
        Ausweise, Bankunterlagen, Versicherungen, Testament-Kopien, Medikamente-Listen, Fotoalben und kleine
        Wertgegenstände. Was unsicher ist, kommt in einen markierten „Prüfen“-Karton — nicht in den
        Sperrmüllstrom. Wir unterstützen bei der Trennung, ersetzen aber keine juristische oder notarielle
        Beratung.
      </RatgeberP>
      <RatgeberP>
        Emotionale Stücke brauchen Zeit. Planen Sie einen ruhigen Vorsortier-Termin, bevor das Team anrückt —
        sonst entsteht Druck im Wohnzimmer und Diskussion im Stiegenhaus. Allgemeine Orientierung:{" "}
        <RatgeberInternalLink href="/ratgeber/wohnungsaufloesung-nach-todesfall-wien">
          Wohnungsauflösung nach Todesfall
        </RatgeberInternalLink>{" "}
        und{" "}
        <RatgeberInternalLink href="/ratgeber/verlassenschaft-entruempelung-wien-sensibel">
          Verlassenschaft sensibel
        </RatgeberInternalLink>
        . Bauhilfe bleibt der Genossenschafts-Spezialfall mit Übergabetermin an die Verwaltung.
      </RatgeberP>

      <RatgeberH2>Erwachsenenvertretung und besondere Vertretungslagen</RatgeberH2>
      <RatgeberP>
        Manchmal räumt nicht die Erbengemeinschaft, sondern eine Erwachsenenvertretung oder eine bevollmächtigte
        Betreuungsperson. Dann zählen schriftliche Nachweise und klare Auftraggeber noch mehr. Der Ablauf bleibt
        ähnlich: Rechte, Sortierung, Nebenräume, Übergabe — nur mit zusätzlicher Dokumentation. Vertiefung:{" "}
        <RatgeberInternalLink href="/ratgeber/haushaltsaufloesung-erwachsenenvertretung-wien">
          Haushaltsauflösung Erwachsenenvertretung
        </RatgeberInternalLink>
        .
      </RatgeberP>
      <RatgeberP>
        Auch hier gilt Diskretion: kein Sperrmüll im Gang, keine lauten Wert-Diskussionen vor Nachbarn, klare
        Zeitfenster. Die Genossenschaft sieht am Ende den Zustand des Objekts — nicht die Familiengeschichte.
        Unser Job ist, beides zu trennen: respektvolle Sortierung innen, übergabefähiges Ergebnis außen.
      </RatgeberP>

      <RatgeberH2>Kosten- und Organisationshebel (ohne Fantasiepreise)</RatgeberH2>
      <RatgeberTableWrap caption="Hebel bei Bauhilfe-Verlassenschafts-Räumung">
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Hebel</RatgeberTh>
            <RatgeberTh>Wirkung</RatgeberTh>
            <RatgeberTh>Früh klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Unklare Verfügungsrechte</RatgeberTd>
            <RatgeberTd>Räumung kann gestoppt werden</RatgeberTd>
            <RatgeberTd>Vollmacht / Freigabe</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Sortierung ohne Regeln</RatgeberTd>
            <RatgeberTd>Konflikt zwischen Erben, Zeitverlust</RatgeberTd>
            <RatgeberTd>Schriftliche sichern/entsorgen-Liste</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Keller vergessen</RatgeberTd>
            <RatgeberTd>Übergabe an Genossenschaft scheitert</RatgeberTd>
            <RatgeberTd>Nebenräume im Auftrag</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Termindruck ohne Puffer</RatgeberTd>
            <RatgeberTd>Fehlerquote und Stress steigen</RatgeberTd>
            <RatgeberTd>Rückwärts vom Übergabetermin</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Wertanrechnung</RatgeberTd>
            <RatgeberTd>Kann Kosten mindern</RatgeberTd>
            <RatgeberTd>Verwertbares bei Besichtigung zeigen</RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>

      <RatgeberWarning title="Verlassenschafts-Hinweis">
        <RatgeberP>
          Räumung ohne geklärte Rechte spart keinen Tag — sie riskiert Stopp und Konflikt. Klären Sie
          Verfügungsberechtigung vor dem Räumungsfenster, nicht währenddessen.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste Bauhilfe Verlassenschaft</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Verfügungsberechtigung / Vollmacht geklärt",
          "Dokumente und persönliche Stücke vorab gesichert",
          "Schriftliche Sortierregeln mit Angehörigen",
          "Keller und Abstellraum im Auftragsumfang",
          "Fixpreis und Endzustand bestätigt",
          "Schlüssel und Übergabe an Bauhilfe vorbereitet",
        ]}
      />

      <RatgeberP>
        Mit klaren Rechten und diskreter Sortierung wird aus einer belastenden Situation ein steuerbarer
        Auftrag. Für Protokoll- und Logistik-Hubs die anderen Genossenschaftstexte nutzen — so bleibt
        Bauhilfe der Verlassenschafts-Spezialist im Cluster.
      </RatgeberP>

      <RatgeberCtaBox>
        <p className="font-bold text-brand-dark">Bauhilfe — diskret &amp; übergabefähig</p>
        <RatgeberP>
          Verlassenschaft und sensible Haushaltsauflösung: Sortierung, Nebenräume, Fixpreis nach
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
