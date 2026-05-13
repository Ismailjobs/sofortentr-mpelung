import type { NextConfig } from "next";

/** Ek geliştirme origin’leri: .env.local → NEXT_DEV_ALLOWED_ORIGINS=abc.ngrok-free.app,192.168.1.5 (virgülle, protokol yok). */
const extraDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "fb26-151-135-17-247.ngrok-free.app",
    "100.126.24.114",
    ...extraDevOrigins,
  ],
  images: {
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
