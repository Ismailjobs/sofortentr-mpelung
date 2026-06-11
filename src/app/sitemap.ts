import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/config/site-url";
import { DATENSCHUTZ_PATH, IMPRESSUM_PATH, RATGEBER_PATH, SERVICES } from "@/data/site-content";
import { getAllLocationSlugs } from "@/data/location-landings";
import { getAllRatgeberSlugs, getRatgeberArticle } from "@/data/ratgeber/registry";
import { LEISTUNGEN_CONTENT_UPDATED_AT } from "@/data/service-page-details";

function toSitemapDate(iso: string): Date {
  return new Date(`${iso}T12:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const lastModified = new Date();
  const leistungenModified = toSitemapDate(LEISTUNGEN_CONTENT_UPDATED_AT);

  const staticPaths = ["", "/leistungen", RATGEBER_PATH, "/preise", "/partner", DATENSCHUTZ_PATH, IMPRESSUM_PATH];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: path === "/leistungen" ? leistungenModified : lastModified,
    changeFrequency: path === "" || path === "/leistungen" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of getAllLocationSlugs()) {
    entries.push({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const s of SERVICES) {
    entries.push({
      url: `${base}/leistungen/${s.id}`,
      lastModified: leistungenModified,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  for (const slug of getAllRatgeberSlugs()) {
    const article = getRatgeberArticle(slug);
    const articleModified = article?.updatedAt ?? article?.publishedAt;
    entries.push({
      url: `${base}${RATGEBER_PATH}/${slug}`,
      lastModified: articleModified ? toSitemapDate(articleModified) : lastModified,
      changeFrequency: article?.updatedAt ? "weekly" : "monthly",
      priority: 0.78,
    });
  }

  entries.push({
    url: `${base}${RATGEBER_PATH}/feed.xml`,
    lastModified,
    changeFrequency: "daily",
    priority: 0.5,
  });

  return entries;
}
