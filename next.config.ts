import type { NextConfig } from "next";

/** Ek geliştirme origin’leri: .env.local → NEXT_DEV_ALLOWED_ORIGINS=abc.ngrok-free.app,192.168.1.5 (virgülle, protokol yok). */
const extraDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react"],
    /** Tailwind-CSS inline → kein render-blocking <link rel="stylesheet"> (LCP/FCP). */
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.js",
    },
  },
  allowedDevOrigins: [
    "fb26-151-135-17-247.ngrok-free.app",
    "100.126.24.114",
    ...extraDevOrigins,
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 60, 62, 68, 75],
    /** Kleinere Zwischengrößen → weniger Über-Download bei Karten/Logo. */
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 420, 480, 512, 640],
    /** Dev: /public-WebP ohne _next/image-Zwischencache (nach Bildtausch sofort sichtbar). */
    unoptimized: process.env.NODE_ENV === "development",
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 31_536_000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    /** Alte thin Bezirks-/Bundesland-Landings → tiefe Ratgeber-URLs (301). */
    const bezirkToRatgeber: ReadonlyArray<readonly [string, string]> = [
      ["1010", "entruempelung-1010-wien"],
      ["1020", "entruempelung-leopoldstadt-wien-1020"],
      ["1030", "entruempelung-landstrasse-wien-1030"],
      ["1040", "entruempelung-wieden-wien-1040"],
      ["1050", "entruempelung-margareten-wien-1050"],
      ["1060", "entruempelung-mariahilf-wien-1060"],
      ["1070", "entruempelung-neubau-wien-1070"],
      ["1080", "entruempelung-josefstadt-wien-1080"],
      ["1090", "entruempelung-alsergrund-wien-1090"],
      ["1100", "entruempelung-favoriten-wien-1100"],
      ["1110", "entruempelung-simmering-wien-1110"],
      ["1120", "entruempelung-meidling-wien-1120"],
      ["1130", "entruempelung-hietzing-wien-1130"],
      ["1140", "entruempelung-penzing-wien-1140"],
      ["1150", "entruempelung-rudolfsheim-fuenfhaus-wien-1150"],
      ["1160", "entruempelung-ottakring-wien-1160"],
      ["1170", "entruempelung-hernals-wien-1170"],
      ["1180", "entruempelung-waehring-wien-1180"],
      ["1190", "entruempelung-doebling-wien-1190"],
      ["1200", "entruempelung-brigittenau-wien-1200"],
      ["1210", "entruempelung-floridsdorf-wien-1210"],
      ["1220", "entruempelung-donaustadt-wien-1220"],
      ["1230", "entruempelung-liesing-wien-1230"],
    ];

    return [
      ...bezirkToRatgeber.map(([plz, slug]) => ({
        source: `/entruempelung-wien-${plz}`,
        destination: `/ratgeber/${slug}`,
        permanent: true,
      })),
      {
        source: "/entruempelung-niederoesterreich",
        destination: "/ratgeber/entruempelung-korneuburg-tulln-schwechat",
        permanent: true,
      },
      {
        source: "/entruempelung-burgenland",
        destination: "/ratgeber/entruempelung-burgenland-mattersburg-rust-oberpullendorf",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const key = process.env.INDEXNOW_KEY?.trim();
    if (!key) return [];
    return [
      {
        source: `/${key}.txt`,
        destination: `/api/indexnow/${key}`,
      },
    ];
  },
};

export default nextConfig;
