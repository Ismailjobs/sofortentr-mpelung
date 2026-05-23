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
};

export default nextConfig;
