import type { Metadata } from "next";
import { pageTitleSegment, SITE_BRAND } from "@/config/site-brand";
import { buildSocialMetadata } from "@/config/site-social";
import { getSiteOrigin } from "@/config/site-url";

type PageMetadataInput = {
  /** Wird zu „Sofort Entrümpelung | …“ (siehe Root-`title.template`). */
  title: string;
  description: string;
  /** Pfad ab Origin, z. B. `/preise` — optional, für canonical. */
  path?: string;
};

/** Statische Seiten: Title, Description, canonical, openGraph & twitter. */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const trimmed = title.trim();
  const absolute = trimmed.includes(SITE_BRAND);
  const meta: Metadata = {
    title: absolute ? { absolute: trimmed } : pageTitleSegment(trimmed),
    description,
    ...buildSocialMetadata({ title: trimmed, description, path }),
  };
  if (path) {
    meta.alternates = { canonical: `${getSiteOrigin()}${path}` };
  }
  return meta;
}
