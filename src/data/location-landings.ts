import { getDistrictBySlug, isViennaDistrictSlug, VIENNA_DISTRICTS, type ViennaDistrict } from "@/data/vienna-districts";
import {
  getServiceRegionBySlug,
  isServiceRegionSlug,
  SERVICE_REGIONS,
  type ServiceRegion,
} from "@/data/service-regions";

export type LocationLanding =
  | { kind: "district"; district: ViennaDistrict }
  | { kind: "region"; region: ServiceRegion };

export function getLocationBySlug(slug: string): LocationLanding | undefined {
  const district = getDistrictBySlug(slug);
  if (district) return { kind: "district", district };
  const region = getServiceRegionBySlug(slug);
  if (region) return { kind: "region", region };
  return undefined;
}

export function isKnownLocationSlug(slug: string): boolean {
  return isViennaDistrictSlug(slug) || isServiceRegionSlug(slug);
}

export function getAllLocationSlugs(): readonly string[] {
  return [...VIENNA_DISTRICTS.map((d) => d.slug), ...SERVICE_REGIONS.map((r) => r.slug)];
}

export { isServiceRegionSlug } from "@/data/service-regions";
