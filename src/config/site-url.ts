/**
 * Canonical site origin for absolute URLs (JSON-LD, metadata).
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://sofortentrumpelung.at).
 */
export function getSiteOrigin(): string {
  const raw = typeof process.env.NEXT_PUBLIC_SITE_URL === "string" ? process.env.NEXT_PUBLIC_SITE_URL.trim() : "";
  if (raw) return raw.replace(/\/$/, "");
  return "https://sofortentrumpelung.at";
}
