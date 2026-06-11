import type { Metadata } from "next";
import { ratgeberFeedUrl } from "@/lib/ratgeber-seo";

/** RSS-Feed für alle Ratgeber-Unterseiten im `<head>`. */
export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": ratgeberFeedUrl(),
    },
  },
};

export default function RatgeberLayout({ children }: { children: React.ReactNode }) {
  return children;
}
