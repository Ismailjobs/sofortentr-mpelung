export type ServiceRegion = {
  /** URL-Segment, z. B. entruempelung-niederoesterreich */
  slug: string;
  name: string;
  tagline: string;
};

/** Bundesland-Landingpages (Wien-Umland / erweitertes Einzugsgebiet). */
export const SERVICE_REGIONS: readonly ServiceRegion[] = [
  {
    slug: "entruempelung-niederoesterreich",
    name: "Niederösterreich",
    tagline: "Wien-Umland & ganz Niederösterreich",
  },
  {
    slug: "entruempelung-burgenland",
    name: "Burgenland",
    tagline: "Grenznähe Wien & ganz Burgenland",
  },
] as const;

const slugToRegion = new Map<string, ServiceRegion>(SERVICE_REGIONS.map((r) => [r.slug, r]));

export function getServiceRegionBySlug(slug: string): ServiceRegion | undefined {
  return slugToRegion.get(slug);
}

export function isServiceRegionSlug(slug: string): boolean {
  return slugToRegion.has(slug);
}
