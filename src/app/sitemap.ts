import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/config/site-url";
import { DATENSCHUTZ_PATH, IMPRESSUM_PATH, SERVICES } from "@/data/site-content";
import { getAllLocationSlugs } from "@/data/location-landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const lastModified = new Date();

  const staticPaths = ["", "/leistungen", "/preise", "/partner", DATENSCHUTZ_PATH, IMPRESSUM_PATH];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
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
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
