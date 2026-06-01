import type { Metadata } from "next";
import { sitePageTitle } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import type { LocationLanding } from "@/data/location-landings";

/** SEO-Titel & Description für Bezirks- und Bundesland-Landingpages. */
export function buildLocationMetadata(location: LocationLanding): Metadata {
  const base = getSiteOrigin();

  if (location.kind === "district") {
    const d = location.district;
    const pageLabel = `Räumung & Entrümpelung Wien ${d.zip} ${d.name}`;
    return {
      title: sitePageTitle(pageLabel),
      description: `Räumung und Wohnungsentrümpelung in Wien ${d.zip} (${d.name}): Haus, Keller, Büro. Kostenlose Besichtigung, Festpreis — Sofort Entrümpelung.`,
      alternates: { canonical: `${base}/${d.slug}` },
    };
  }

  const r = location.region;
  return {
    title: sitePageTitle(`Entrümpelung ${r.name}`),
    description: `Professionelle Entrümpelung und Wohnungsräumung in ${r.name}. Schnelle Termine, kostenlose Besichtigung, garantierter Festpreis nach Besichtigung.`,
    alternates: { canonical: `${base}/${r.slug}` },
  };
}
