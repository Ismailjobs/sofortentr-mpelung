import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/config/site-url";
import { DATENSCHUTZ_PATH, IMPRESSUM_PATH, SERVICES } from "@/data/site-content";
import { VIENNA_DISTRICTS } from "@/data/vienna-districts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const lastModified = new Date();

  const staticPaths = ["", "/leistungen", "/preise", DATENSCHUTZ_PATH, IMPRESSUM_PATH];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const d of VIENNA_DISTRICTS) {
    entries.push({
      url: `${base}/${d.slug}`,
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
