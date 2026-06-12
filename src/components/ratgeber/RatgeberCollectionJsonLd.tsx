import { SITE_BRAND } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { RATGEBER_HERO_IMAGE } from "@/data/ratgeber/registry";
import { getRatgeberEffectiveUpdatedAt } from "@/lib/ratgeber-dates";
import { ratgeberArticleUrl, ratgeberIndexUrl } from "@/lib/ratgeber-seo";
import { breadcrumbListSchema, type SchemaBreadcrumbItem } from "@/lib/schema-org";

type Props = {
  articles: RatgeberArticleMeta[];
  breadcrumbs: SchemaBreadcrumbItem[];
};

export default function RatgeberCollectionJsonLd({ articles, breadcrumbs }: Props) {
  const origin = getSiteOrigin();
  const indexUrl = ratgeberIndexUrl();
  const blogId = `${indexUrl}#blog`;
  const image = `${origin}${RATGEBER_HERO_IMAGE}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${indexUrl}#webpage`,
        url: indexUrl,
        name: `Ratgeber — ${SITE_BRAND}`,
        description:
          "Praxisnahe Ratgeber zu Entrümpelung, Haushaltsauflösung, Kosten und Ablauf in Wien.",
        inLanguage: "de-AT",
        isPartOf: { "@id": `${origin}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", url: image },
        breadcrumb: { "@id": `${indexUrl}#breadcrumb` },
        mainEntity: { "@id": blogId },
      },
      {
        "@type": "Blog",
        "@id": blogId,
        name: `Ratgeber — ${SITE_BRAND}`,
        description:
          "Tipps und Orientierung zu Entrümpelung, Haushaltsauflösung und Kosten in Wien.",
        url: indexUrl,
        inLanguage: "de-AT",
        publisher: {
          "@type": "Organization",
          name: SITE_BRAND,
          url: origin,
        },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          "@id": `${ratgeberArticleUrl(a.slug)}#article`,
          headline: a.title,
          url: ratgeberArticleUrl(a.slug),
          datePublished: a.publishedAt,
          dateModified: getRatgeberEffectiveUpdatedAt(a),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${indexUrl}#itemlist`,
        name: "Ratgeber-Artikel",
        numberOfItems: articles.length,
        itemListElement: articles.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: a.title,
          url: ratgeberArticleUrl(a.slug),
        })),
      },
      breadcrumbListSchema(origin, breadcrumbs, `${indexUrl}#breadcrumb`),
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
