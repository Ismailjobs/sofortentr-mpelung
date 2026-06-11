import { SITE_BRAND } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { RATGEBER_HERO_IMAGE } from "@/data/ratgeber/registry";
import {
  ratgeberArticleUrl,
  ratgeberIndexUrl,
  readingTimeToIsoDuration,
} from "@/lib/ratgeber-seo";
import { breadcrumbListSchema, type SchemaBreadcrumbItem } from "@/lib/schema-org";

type Props = {
  article: RatgeberArticleMeta;
  breadcrumbs: SchemaBreadcrumbItem[];
};

export default function RatgeberArticleJsonLd({ article, breadcrumbs }: Props) {
  const origin = getSiteOrigin();
  const url = ratgeberArticleUrl(article.slug);
  const image = `${origin}${RATGEBER_HERO_IMAGE}`;
  const blogId = `${ratgeberIndexUrl()}#blog`;
  const webPageId = `${url}#webpage`;
  const blogPostingId = `${url}#article`;
  const modified = article.updatedAt ?? article.publishedAt;
  const timeRequired = readingTimeToIsoDuration(article.readingTimeMinutes);

  const about = [
    ...(article.focusKeyword
      ? [{ "@type": "Thing" as const, name: article.focusKeyword }]
      : []),
    ...(article.keywords ?? []).slice(0, 5).map((name) => ({
      "@type": "Thing" as const,
      name,
    })),
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url,
      name: article.title,
      description: article.description,
      inLanguage: "de-AT",
      isPartOf: { "@id": blogId },
      primaryImageOfPage: { "@type": "ImageObject", url: image },
      datePublished: article.publishedAt,
      dateModified: modified,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      mainEntity: { "@id": blogPostingId },
    },
    {
      "@type": "BlogPosting",
      "@id": blogPostingId,
      headline: article.title,
      abstract: article.excerpt,
      description: article.description,
      url,
      image: {
        "@type": "ImageObject",
        url: image,
        width: 1920,
        height: 1080,
      },
      datePublished: article.publishedAt,
      dateModified: modified,
      inLanguage: "de-AT",
      articleSection: "Entrümpelung & Haushaltsauflösung Wien",
      ...(timeRequired ? { timeRequired } : {}),
      ...(about.length > 0 ? { about } : {}),
      ...(article.keywords?.length ? { keywords: article.keywords.join(", ") } : {}),
      author: {
        "@type": "Organization",
        "@id": `${origin}/#localbusiness`,
        name: SITE_BRAND,
        url: origin,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_BRAND,
        url: origin,
        logo: {
          "@type": "ImageObject",
          url: `${origin}/sofort-logo.webp`,
        },
      },
      mainEntityOfPage: { "@id": webPageId },
      isPartOf: { "@id": blogId },
    },
    breadcrumbListSchema(origin, breadcrumbs, `${url}#breadcrumb`),
  ];

  if (article.faq && article.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": webPageId },
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
