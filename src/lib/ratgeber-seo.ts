import type { Metadata } from "next";
import { pageTitleSegment, SITE_BRAND } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { RATGEBER_HERO_IMAGE, RATGEBER_PATH } from "@/data/ratgeber/registry";

const OG_LOCALE = "de_AT";
const ARTICLE_SECTION = "Entrümpelung & Haushaltsauflösung Wien";

export function ratgeberArticleUrl(slug: string): string {
  return `${getSiteOrigin()}${RATGEBER_PATH}/${slug}`;
}

export function ratgeberFeedUrl(): string {
  return `${getSiteOrigin()}${RATGEBER_PATH}/feed.xml`;
}

export function ratgeberIndexUrl(): string {
  return `${getSiteOrigin()}${RATGEBER_PATH}`;
}

/** ISO-8601-Dauer für Schema.org `timeRequired`, z. B. PT7M */
export function readingTimeToIsoDuration(minutes?: number): string | undefined {
  if (!minutes || minutes < 1) return undefined;
  return `PT${minutes}M`;
}

function resolveMetaTitle(article: RatgeberArticleMeta): string {
  return article.seoTitle?.trim() || article.title.trim();
}

function resolveOgTitle(article: RatgeberArticleMeta): string {
  return article.ogTitle?.trim() || resolveMetaTitle(article);
}

function resolveTags(article: RatgeberArticleMeta): string[] {
  const tags = new Set<string>();
  if (article.focusKeyword?.trim()) tags.add(article.focusKeyword.trim());
  for (const kw of article.keywords ?? []) {
    if (kw.trim()) tags.add(kw.trim());
  }
  return [...tags];
}

const INDEX_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/** Vollständige Next.js-Metadata pro Ratgeber-Artikel. */
export function buildRatgeberArticleMetadata(article: RatgeberArticleMeta): Metadata {
  const origin = getSiteOrigin();
  const url = ratgeberArticleUrl(article.slug);
  const imageUrl = `${origin}${RATGEBER_HERO_IMAGE}`;
  const title = resolveMetaTitle(article);
  const ogTitle = resolveOgTitle(article);
  const tags = resolveTags(article);
  const modified = article.updatedAt ?? article.publishedAt;

  return {
    title: pageTitleSegment(title),
    description: article.description,
    keywords: tags.length > 0 ? tags : undefined,
    authors: [{ name: SITE_BRAND, url: origin }],
    creator: SITE_BRAND,
    publisher: SITE_BRAND,
    category: ARTICLE_SECTION,
    robots: article.noindex ? { index: false, follow: true } : INDEX_ROBOTS,
    alternates: {
      canonical: url,
      languages: { "de-AT": url },
      types: {
        "application/rss+xml": ratgeberFeedUrl(),
      },
    },
    openGraph: {
      type: "article",
      locale: OG_LOCALE,
      siteName: SITE_BRAND,
      title: ogTitle,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: modified,
      section: ARTICLE_SECTION,
      tags: tags.length > 0 ? tags : undefined,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1080,
          alt: `${article.title} — ${SITE_BRAND}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: article.description,
      images: [imageUrl],
    },
    other: {
      "article:author": SITE_BRAND,
      "article:published_time": article.publishedAt,
      "article:modified_time": modified,
      "article:section": ARTICLE_SECTION,
      ...(article.focusKeyword ? { "article:tag": article.focusKeyword } : {}),
    },
  };
}

/** Metadata für /ratgeber Übersicht. */
export function buildRatgeberIndexMetadata(): Metadata {
  const origin = getSiteOrigin();
  const url = ratgeberIndexUrl();
  const description =
    "Praxisnahe Ratgeber zu Entrümpelung, Haushaltsauflösung, Kosten und Ablauf in Wien — von Sofort Entrümpelung.";

  return {
    title: pageTitleSegment("Ratgeber — Tipps zu Entrümpelung & Haushaltsauflösung Wien"),
    description,
    robots: INDEX_ROBOTS,
    alternates: {
      canonical: url,
      languages: { "de-AT": url },
      types: {
        "application/rss+xml": ratgeberFeedUrl(),
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE,
      siteName: SITE_BRAND,
      title: `Ratgeber — ${SITE_BRAND}`,
      description,
      url,
      images: [{ url: `${origin}${RATGEBER_HERO_IMAGE}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Ratgeber — ${SITE_BRAND}`,
      description,
      images: [`${origin}${RATGEBER_HERO_IMAGE}`],
    },
  };
}
