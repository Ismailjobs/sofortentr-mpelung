import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageTitleSegment } from "@/config/site-brand";

export const metadata: Metadata = {
  title: pageTitleSegment("Messie-Entrümpelung Wien"),
  robots: { index: false, follow: true },
};

/** Kurz-URL /leistungen/messie → Hauptseite Messie-Entrümpelung */
export default function MessieServiceRedirectPage() {
  redirect("/leistungen/messie-entruempelung");
}
