/**
 * E-Mail & Brevo — Absender hier; API-Key per Umgebungsvariable `BREVO_API_KEY`
 * (lokal z. B. `.env.local` im Projektroot, siehe `.env.example`).
 */
const brevoKeyFromEnv =
  typeof process.env.BREVO_API_KEY === "string" ? process.env.BREVO_API_KEY.trim() : "";

export const MAIL_CONFIG = {
  brevoApiKey: brevoKeyFromEnv || "HIER_IHREN_BREVO_API_KEY_IN_ENV_EINTRAGEN",

  /** Muss bei Brevo als Absender / Domain verifiziert sein */
  senderEmail: "office@sofortentrumpelung.at",
  senderName: "Sofort Entrümpelung",

  /** Posteingang für neue Formular-Anfragen */
  inboxEmail: "office@sofortentrumpelung.at",

  siteUrl: "https://sofortentrumpelung.at",
  siteName: "SofortEntrümpelung",
  /** Kleine Headline im dunklen Kopfbereich */
  tagline: "Professionelle Entrümpelung · Wien & Umgebung",

  phoneDisplay: "+43 681 81130962",
  phoneTelHref: "tel:+4368181130962",

  addressLine: "Brunner Straße 75, Objekt D/Büro 3, 1230 Wien",
  officeHours: "Mo–Fr: 07:30 – 18:00 · Sa: 09:00 – 14:00 (nach Vereinbarung)",

  colors: {
    orange: "#ff7a00",
    dark: "#111111",
    white: "#ffffff",
    mutedBg: "#f3f4f6",
    border: "#e5e7eb",
    textMuted: "#6b7280",
    textBody: "#374151",
  },

  /** reCAPTCHA v3 „Secret Key“ — https://www.google.com/recaptcha/admin */
  recaptchaSecretKey: "6Ldhs-EsAAAAAOGWykjITWMh76IzRI2skvYHCaO3",
  /** Score unter Schwellwert → Ablehnung (meist 0,5 setzen). */
  recaptchaMinScore: 0.5,
} as const;
