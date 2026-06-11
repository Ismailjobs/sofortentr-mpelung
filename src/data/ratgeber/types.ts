import type { ComponentType } from "react";

/** Metadaten pro Ratgeber-Artikel — SEO & Karten auf der Übersichtsseite. */
export type RatgeberArticleMeta = {
  /** URL-Slug: /ratgeber/{slug} */
  slug: string;
  /** H1 & Meta-Titel (ohne Marken-Suffix — wird automatisch ergänzt). */
  title: string;
  /** Meta-Description (ca. 150–160 Zeichen). */
  description: string;
  /** Kurztext für Karten auf /ratgeber. */
  excerpt: string;
  /** ISO-Datum, z. B. "2026-06-11". */
  publishedAt: string;
  /** Optional — falls Artikel überarbeitet wurde. */
  updatedAt?: string;
  /** @deprecated Hero nutzt immer `/hero.webp` — nicht mehr pro Artikel setzen. */
  imageSrc?: string;
  /** @deprecated */
  imageAlt?: string;
  /** Optionale Fokus-Keywords — Meta, OG-Tags & Schema.org `about`. */
  keywords?: string[];
  /** Primäres SEO-Keyword (article:tag, Schema `about`). */
  focusKeyword?: string;
  /** Abweichender Meta-Titel — sonst `title`. */
  seoTitle?: string;
  /** Abweichender Open-Graph-/Twitter-Titel — sonst `seoTitle` bzw. `title`. */
  ogTitle?: string;
  /** FAQ für FAQPage-Schema (Rich Results). */
  faq?: { question: string; answer: string }[];
  /** Optional — sonst wird grob aus dem Text geschätzt. */
  readingTimeMinutes?: number;
  /** Entwurf: von Indexierung ausschließen. */
  noindex?: boolean;
};

export type RatgeberArticleEntry = RatgeberArticleMeta & {
  Component: ComponentType;
};
