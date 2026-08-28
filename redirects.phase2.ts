/**
 * Phase-2-Redirects — NUR nach GSC-Bestätigung aktivieren.
 *
 * In next.config.ts einbinden:
 *
 *   import { phase2GemeindebauRedirects } from "./redirects.phase2";
 *   // ...
 *   async redirects() {
 *     return [...phase2GemeindebauRedirects()];
 *   },
 *
 * Vorher: Content-Merge in Hub A + Registry bereinigen (siehe seo-gsc-monitoring.md).
 */
import type { NextConfig } from "next";

type Redirect = NonNullable<Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>>[number];

export function phase2GemeindebauRedirects(): Redirect[] {
  const hub = "/ratgeber/entruempelung-gemeindebau-wiener-wohnen";
  return [
    {
      source: "/ratgeber/gemeindebau-wiener-wohnen-wohnungsuebergabe",
      destination: hub,
      permanent: true,
    },
    {
      source: "/ratgeber/stadt-wien-gemeindewohnung-rueckgabevorgaben",
      destination: hub,
      permanent: true,
    },
  ];
}
