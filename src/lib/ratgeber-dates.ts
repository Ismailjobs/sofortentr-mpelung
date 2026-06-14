import type { RatgeberArticleMeta, RatgeberFreshnessExcerpt } from "@/data/ratgeber/types";

export type { RatgeberFreshnessExcerpt };

/**
 * Fester Kalendertag pro Artikel (1–28) — verteilt über den Monat.
 * Das effektive Datum liegt nie in der Zukunft: Ist der Tag im laufenden Monat
 * noch nicht erreicht, wird der Vormonat verwendet (z. B. heute 13. Mai → Tag 26 = 26. April).
 */
export const RATGEBER_ARTICLE_UPDATE_DAYS: Record<string, number> = {
  "was-kostet-entruempelung-wien": 4,
  "ma-48-vs-entruempelungsfirma-wien": 11,
  "moebel-verkaufen-wien-willhaben-wertanrechnung": 7,
  "entruempelung-wien-steuer-absetzen": 14,
  "gratis-raeumung-wien-wertanrechnung": 18,
  "wohnungsaufloesung-nach-todesfall-wien": 21,
  "entruempelung-gemeindebau-wiener-wohnen": 3,
  "messie-wohnung-raeumen-wien": 9,
  "delogierung-zwangsrauemung-wien": 16,
  "ma-48-mistplaetze-entsorgungs-guide-wien": 24,
  "kellerraeumung-wien-kosten-schimmel": 26,
  "dachbodenraeumung-wien-ma-48": 13,
  "geschaeftslokal-raeumen-wien-rueckbau": 19,
  "entruempelung-vor-sanierung-wien": 22,
  "entruempelung-wien-5-fehler-vermeiden": 25,
  "checkliste-wohnungsraeumung-wien": 27,
  "gebrauchte-moebel-bewerten-wien": 20,
  "was-tun-mit-alten-schaetzen-wien": 23,
  "richtig-ausmisten-wien": 28,
  "entruempelungsdienst-vs-entruempelungsfirma-wien": 15,
  "praxisaufloesung-wien": 17,
  "zimmer-raeumung-wien": 6,
  "raeumungsexperte-wien-besichtigung": 10,
  "entruempelung-korneuburg-tulln-schwechat": 12,
  "entruempelung-burgenland-mattersburg-rust-oberpullendorf": 5,
  "entruempelung-oesterreichweit": 8,
  "schwerlastentsorgung-wien": 2,
  "wohnungsraeumung-senioren-wien": 1,
};

function slugToUpdateDay(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return (hash % 28) + 1;
}

export function getRatgeberUpdateDay(slug: string, override?: number): number {
  if (override !== undefined && override >= 1 && override <= 28) {
    return override;
  }
  return RATGEBER_ARTICLE_UPDATE_DAYS[slug] ?? slugToUpdateDay(slug);
}

function formatIsoDate(year: number, monthIndex: number, day: number): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
}

function isoToDate(iso: string): Date {
  return new Date(`${iso}T12:00:00.000Z`);
}

export type RatgeberDateArticle = Pick<
  RatgeberArticleMeta,
  "slug" | "publishedAt" | "updateDay"
>;

/**
 * Effektives Aktualisierungsdatum — nie in der Zukunft, nie vor `publishedAt`.
 */
export function getRatgeberEffectiveUpdatedAt(
  article: RatgeberDateArticle,
  referenceDate: Date = new Date(),
): string {
  const todayYear = referenceDate.getFullYear();
  const todayMonthIndex = referenceDate.getMonth();
  const todayDay = referenceDate.getDate();
  const updateDay = getRatgeberUpdateDay(article.slug, article.updateDay);

  let year = todayYear;
  let monthIndex = todayMonthIndex;

  // Fixer Tag liegt im laufenden Monat noch in der Zukunft → Vormonat
  if (todayDay < updateDay) {
    if (monthIndex === 0) {
      monthIndex = 11;
      year -= 1;
    } else {
      monthIndex -= 1;
    }
  }

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const safeDay = Math.min(updateDay, daysInMonth);

  const candidateIso = formatIsoDate(year, monthIndex, safeDay);
  const publishedIso = article.publishedAt.slice(0, 10);

  return candidateIso < publishedIso ? publishedIso : candidateIso;
}

/** Ob „Aktualisiert“ statt „Veröffentlicht“ angezeigt werden soll. */
export function ratgeberShowsAsUpdated(
  article: RatgeberDateArticle,
  referenceDate?: Date,
): boolean {
  const effective = getRatgeberEffectiveUpdatedAt(article, referenceDate);
  return effective !== article.publishedAt.slice(0, 10);
}

/** z. B. „Mai 2026“ */
export function formatGermanMonthYear(referenceDate: Date): string {
  return referenceDate.toLocaleDateString("de-AT", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** z. B. „Aktualisiert im Mai 2026“ */
export function formatRatgeberUpdatedInMonth(referenceDate: Date): string {
  return `Aktualisiert im ${formatGermanMonthYear(referenceDate)}`;
}

/** z. B. „Praxis-Leitfaden 2026“ */
export function formatRatgeberGuideYearLabel(
  guideName: string,
  referenceDate: Date = new Date(),
): string {
  return `${guideName} ${referenceDate.getFullYear()}`;
}

/** Hero-Karte & Listen-Excerpt mit rollierendem Monat/Jahr (aus effektivem Datum). */
export function getRatgeberDisplayExcerpt(
  article: Pick<
    RatgeberArticleMeta,
    "excerpt" | "freshnessExcerpt" | "slug" | "publishedAt" | "updateDay"
  >,
  referenceDate: Date = new Date(),
): string {
  const fresh = article.freshnessExcerpt;
  if (!fresh) return article.excerpt;

  const effectiveDate = isoToDate(
    getRatgeberEffectiveUpdatedAt(article, referenceDate),
  );

  if (fresh.kind === "updated") {
    return `${formatRatgeberUpdatedInMonth(effectiveDate)} — ${fresh.suffix}`;
  }

  const head = formatRatgeberGuideYearLabel(fresh.guideName, referenceDate);
  return fresh.suffix ? `${head} — ${fresh.suffix}` : head;
}

export type RatgeberFreshnessBadgeVariant =
  | { kind: "updated-month" }
  | { kind: "guide"; guideName: string }
  | { kind: "expert" };

export function getRatgeberFreshnessBadgeLabel(
  variant: RatgeberFreshnessBadgeVariant,
  article: RatgeberDateArticle,
  referenceDate: Date = new Date(),
): string {
  const effectiveDate = isoToDate(
    getRatgeberEffectiveUpdatedAt(article, referenceDate),
  );

  switch (variant.kind) {
    case "updated-month":
      return formatRatgeberUpdatedInMonth(effectiveDate);
    case "guide":
      return formatRatgeberGuideYearLabel(variant.guideName, referenceDate);
    case "expert":
      return "Geprüft von Experten";
  }
}

export function getRatgeberFreshnessBadgeNote(
  variant: RatgeberFreshnessBadgeVariant,
  article: RatgeberDateArticle,
  note: string | undefined,
  referenceDate: Date = new Date(),
): string | undefined {
  if (variant.kind === "expert") {
    const effectiveDate = isoToDate(
      getRatgeberEffectiveUpdatedAt(article, referenceDate),
    );
    const updated = formatRatgeberUpdatedInMonth(effectiveDate);
    return note ? `${updated}. ${note}` : updated;
  }
  return note;
}
