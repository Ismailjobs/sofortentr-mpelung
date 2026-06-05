import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/config/site-url";

/**
 * Crawl-Budget: Next.js-Interna & API nicht indexieren.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: `${getSiteOrigin()}/sitemap.xml`,
  };
}
