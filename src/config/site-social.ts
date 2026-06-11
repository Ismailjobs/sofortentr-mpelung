import type { Metadata } from "next";
import { SITE_BRAND, sitePageTitle } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";

/** Standard-Share-Bild — `public/og-image.webp` */
export const OG_IMAGE_PATH = "/og-image.webp";

export const OG_IMAGE_WIDTH = 1254;
export const OG_IMAGE_HEIGHT = 1254;

export const OG_LOCALE = "de_AT";

export function ogImageUrl(): string {
  return `${getSiteOrigin()}${OG_IMAGE_PATH}`;
}

type SocialMetadataInput = {
  /** Seitentitel-Segment (wird zu „Sofort Entrümpelung | …“ für og:title). */
  title: string;
  description: string;
  /** Pfad ab Origin — z. B. `/preise`. Ohne Pfad → Startseite. */
  path?: string;
  /** openGraph.type — Standard: website */
  type?: "website" | "article";
};

/** Explizites openGraph + twitter — verhindert Fallback auf `<title>` ohne og:image. */
export function buildSocialMetadata({
  title,
  description,
  path,
  type = "website",
}: SocialMetadataInput): Pick<Metadata, "openGraph" | "twitter"> {
  const origin = getSiteOrigin();
  const ogTitle = sitePageTitle(title);
  const url = path ? `${origin}${path}` : origin;
  const imageUrl = ogImageUrl();

  return {
    openGraph: {
      type,
      locale: OG_LOCALE,
      siteName: SITE_BRAND,
      title: ogTitle,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: `${SITE_BRAND} — Entrümpelung Wien`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [imageUrl],
    },
  };
}
