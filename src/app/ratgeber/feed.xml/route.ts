import { SITE_BRAND } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import { RATGEBER_ARTICLES } from "@/data/ratgeber/registry";
import { getRatgeberDisplayExcerpt, getRatgeberEffectiveUpdatedAt } from "@/lib/ratgeber-dates";
import { ratgeberArticleUrl, ratgeberFeedUrl, ratgeberIndexUrl } from "@/lib/ratgeber-seo";

export const revalidate = 86_400;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export function GET() {
  const origin = getSiteOrigin();
  const channelLink = ratgeberIndexUrl();
  const feedLink = ratgeberFeedUrl();
  const buildDate = new Date().toUTCString();

  const items = RATGEBER_ARTICLES.map((article) => {
    const link = ratgeberArticleUrl(article.slug);
    const pubDate = toRfc822(getRatgeberEffectiveUpdatedAt(article));
    const categories = [
      article.focusKeyword,
      ...(article.keywords ?? []).slice(0, 3),
    ].filter(Boolean) as string[];

    const categoryXml = categories
      .map((c) => `      <category>${escapeXml(c)}</category>`)
      .join("\n");

    return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(getRatgeberDisplayExcerpt(article))}</description>
      <pubDate>${pubDate}</pubDate>
${categoryXml}
    </item>`;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`Ratgeber — ${SITE_BRAND}`)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml("Ratgeber zu Entrümpelung, Haushaltsauflösung und Kosten in Wien.")}</description>
    <language>de-at</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${escapeXml(feedLink)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
