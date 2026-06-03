import type { LocationLanding } from "@/data/location-landings";
import {
  getLocationPageCopyByPlz,
  getLocationPageCopyByRegionSlug,
  type LocationPageCopy,
} from "@/data/location-page-copy";

export type { LocationPageCopy };

export function getLocationPageCopy(location: LocationLanding): LocationPageCopy {
  if (location.kind === "district") {
    const copy = getLocationPageCopyByPlz(location.district.zip);
    if (copy) return copy;
    const { zip, name } = location.district;
    return fallbackCopy(name, `in ${zip} Wien (${name})`);
  }

  const copy = getLocationPageCopyByRegionSlug(location.region.slug);
  if (copy) return copy;
  return fallbackCopy(location.region.name, `in ${location.region.name}`);
}

function fallbackCopy(name: string, ortPhrase: string): LocationPageCopy {
  return {
    name,
    heroIntro: `Professionelle Entrümpelung und Wohnungsräumung ${ortPhrase} – Festpreis nach kostenloser Besichtigung, fachgerechte Entsorgung inklusive.`,
    heroTagline: `Festpreis nach Besichtigung · ${name}`,
    localInsight: `Wir räumen Wohnung, Haus, Keller und Büro ${ortPhrase} besenrein – transparent kalkuliert, termintreu.`,
    whyUsHeadline: `Warum Sofort Entrümpelung – ${name}?`,
    ablaufIntro: `Besichtigung vor Ort, verbindlicher Festpreis, Räumung inklusive Entsorgung ${ortPhrase}.`,
    servicesTeaser: `Alle Entrümpelungsleistungen ${ortPhrase} – Festpreis nach Besichtigung.`,
  };
}
