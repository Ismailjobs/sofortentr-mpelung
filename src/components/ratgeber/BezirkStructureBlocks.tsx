"use client";

import {
  RatgeberChecklist,
  RatgeberCtaBox,
  RatgeberH2,
  RatgeberH3,
  RatgeberInternalLink,
  RatgeberP,
  RatgeberTableWrap,
  RatgeberTbody,
  RatgeberTd,
  RatgeberTh,
  RatgeberThead,
  RatgeberTr,
  RatgeberWarning,
} from "@/components/ratgeber/RatgeberArticleBody";

/** Soft-CTA direkt unter dem Lead — wie bei erfolgreichen Longform-SEO-Artikeln. */
export function BezirkEarlyCta({ title, text }: { title: string; text: string }) {
  return (
    <RatgeberCtaBox>
      <p className="font-bold text-brand-dark">{title}</p>
      <RatgeberP>{text}</RatgeberP>
      <p className="mt-3">
        <RatgeberInternalLink href="/#kontakt-formular">Kostenlose Besichtigung anfragen →</RatgeberInternalLink>
      </p>
    </RatgeberCtaBox>
  );
}

type Props = {
  /** z. B. „Favoriten (1100)“ */
  districtLabel: string;
};

/**
 * Vergleichstabelle + Warnung + Checkliste vor dem Schluss-CTA
 * (Struktur erfolgreicher Ranking-Artikel: Tabelle, Risiken, Best Practices).
 */
export function BezirkStructureBlocks({ districtLabel }: Props) {
  return (
    <>
      <RatgeberH2>Was den Aufwand in {districtLabel} wirklich bestimmt</RatgeberH2>
      <RatgeberP>
        Nicht die PLZ allein entscheidet über Zeit und Preis — sondern Zugang, Volumen und Entsorgungsmix.
        Die Übersicht hilft bei der Erstanfrage; der verbindliche Fixpreis folgt nach der Besichtigung.
      </RatgeberP>
      <RatgeberTableWrap caption={`Kostenfaktoren Entrümpelung ${districtLabel} (ohne Fantasiepreise)`}>
        <RatgeberThead>
          <RatgeberTr>
            <RatgeberTh>Faktor</RatgeberTh>
            <RatgeberTh>Warum er zählt</RatgeberTh>
            <RatgeberTh>Was Sie vorab klären</RatgeberTh>
          </RatgeberTr>
        </RatgeberThead>
        <RatgeberTbody>
          <RatgeberTr>
            <RatgeberTd>Volumen &amp; Materialmix</RatgeberTd>
            <RatgeberTd>Mehr Inhalt und sperrige Stücke = mehr Sortier- und Fahrtenaufwand</RatgeberTd>
            <RatgeberTd>Fotos, Raumliste, Keller/Dachboden</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Stockwerk / Lift</RatgeberTd>
            <RatgeberTd>Lange Tragewege ohne Lift verlängern Demontage und Abtransport</RatgeberTd>
            <RatgeberTd>Stockwerk, Aufzug, Türbreiten</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Zufahrt / MA&nbsp;46</RatgeberTd>
            <RatgeberTd>Ohne legale Ladezone stockt der Einsatz in dichten Bezirken</RatgeberTd>
            <RatgeberTd>Parken, Hofzufahrt, Übergabetermin</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Entsorgung / MA&nbsp;48</RatgeberTd>
            <RatgeberTd>Fraktionen und Sperrmüll bestimmen den Entsorgungsanteil</RatgeberTd>
            <RatgeberTd>Endzustand: leer / besenrein</RatgeberTd>
          </RatgeberTr>
          <RatgeberTr>
            <RatgeberTd>Wertanrechnung</RatgeberTd>
            <RatgeberTd>Verwertbares kann den Fixpreis mindern — fair bewertet</RatgeberTd>
            <RatgeberTd>
              <RatgeberInternalLink href="/leistungen/wertausgleich">Wertausgleich</RatgeberInternalLink>
            </RatgeberTd>
          </RatgeberTr>
        </RatgeberTbody>
      </RatgeberTableWrap>
      <RatgeberP>
        Richtwerte und Faktoren vertieft:{" "}
        <RatgeberInternalLink href="/ratgeber/was-kostet-entruempelung-wien">
          Was kostet eine Entrümpelung in Wien?
        </RatgeberInternalLink>{" "}
        und <RatgeberInternalLink href="/preise">Preise</RatgeberInternalLink>.
      </RatgeberP>

      <RatgeberH3>Wann der Ablauf riskant wird</RatgeberH3>
      <RatgeberWarning title="Praxis-Hinweis">
        <RatgeberP>
          Unklare Nebenflächen, fehlendes Halteverbot oder ein fixer Übergabetermin ohne Puffer sind die
          häufigsten Stressquellen in {districtLabel}. Wer Volumen, Zugang und Endzustand vorab schriftlich
          festhält, behält den Fixpreis — und den Termin.
        </RatgeberP>
      </RatgeberWarning>

      <RatgeberH2>Checkliste vor der Entrümpelung in {districtLabel}</RatgeberH2>
      <RatgeberChecklist
        items={[
          "Persönliches, Dokumente, Schlüssel und Wertgegenstände sichern",
          "Wohnung + Keller/Dachboden/Abstellraum vollständig nennen",
          "Stockwerk, Lift und Fotos vom Zugang bereithalten",
          "Übergabe- oder Mietende-Datum kommunizieren (MA-46-Vorlauf)",
          "Endzustand festlegen: geräumt oder besenrein",
          "Verwertbares markieren — Rest geht in die fachgerechte Entsorgung",
        ]}
      />
    </>
  );
}
