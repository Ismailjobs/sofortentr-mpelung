/**
 * Öffentlicher reCAPTCHA-v3-Site-Key (sichtbar im Browser — normal bei v3).
 * Admin: https://www.google.com/recaptcha/admin → reCAPTCHA v3
 */
export const RECAPTCHA_V3_SITE_KEY = "6Ldhs-EsAAAAACcH1GIaLT89qBslCc8H4SLiSliF";

export function isRecaptchaSiteKeyConfigured(): boolean {
  const k = RECAPTCHA_V3_SITE_KEY.trim();
  return k.length > 0 && !k.includes("HIER_RECAPTCHA");
}
