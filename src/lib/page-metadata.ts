import type { Metadata } from "next";
import { pageTitleSegment } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";

type PageMetadataInput = {
  /** Wird zu „Sofort Entrümpelung | …“ (siehe Root-`title.template`). */
  title: string;
  description: string;
  /** Pfad ab Origin, z. B. `/preise` — optional, für canonical. */
  path?: string;
};

/** Statische Seiten: eindeutiger Title-Segment + Description (+ canonical). */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const meta: Metadata = {
    title: pageTitleSegment(title),
    description,
  };
  if (path) {
    meta.alternates = { canonical: `${getSiteOrigin()}${path}` };
  }
  return meta;
}
