import type { Metadata } from "next";
import { pageTitleSegment } from "@/config/site-brand";
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
  const meta: Metadata = {
    title: pageTitleSegment(title),
    description,
    ...buildSocialMetadata({ title, description, path }),
  };
  if (path) {
    meta.alternates = { canonical: `${getSiteOrigin()}${path}` };
  }
  return meta;
}
