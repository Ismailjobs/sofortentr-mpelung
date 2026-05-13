import { MAIL_CONFIG } from "./mail-config.js";
import { RECAPTCHA_V3_ACTION_CONTACT } from "./recaptcha-shared.js";

const SITE_VERIFY = "https://www.google.com/recaptcha/api/siteverify";

type VerifyJson = {
  success?: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

/** Secret gesetzt und kein Platzhalter → Prüfung ist Pflicht */
export function isRecaptchaVerificationEnabled(): boolean {
  const s = MAIL_CONFIG.recaptchaSecretKey?.trim();
  return !!s && s.length > 0;
}

export async function verifyRecaptchaV3Token(
  token: string | undefined,
  remoteIp?: string,
): Promise<{ ok: true; score: number } | { ok: false; reason: string }> {
  const secret = MAIL_CONFIG.recaptchaSecretKey.trim();
  if (!secret) {
    return { ok: false, reason: "recaptcha-secret-not-configured" };
  }
  const t = typeof token === "string" ? token.trim() : "";
  if (!t) {
    return { ok: false, reason: "missing-token" };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", t);
  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  let data: VerifyJson;
  try {
    const res = await fetch(SITE_VERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    data = (await res.json()) as VerifyJson;
  } catch {
    return { ok: false, reason: "verify-request-failed" };
  }

  if (!data.success) {
    const codes = data["error-codes"] ?? [];
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[recaptcha siteverify]",
        JSON.stringify({ success: false, "error-codes": codes, hostname: data.hostname }),
      );
    }
    return { ok: false, reason: `errors:${codes.join(",")}` };
  }

  const score = typeof data.score === "number" ? data.score : 0;
  const action = typeof data.action === "string" ? data.action : "";
  if (action !== RECAPTCHA_V3_ACTION_CONTACT) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[recaptcha siteverify]",
        JSON.stringify({ wrongAction: true, action, expected: RECAPTCHA_V3_ACTION_CONTACT, hostname: data.hostname }),
      );
    }
    return { ok: false, reason: `wrong-action:${action}` };
  }

  const envMin = process.env.CONTACT_RECAPTCHA_MIN_SCORE?.trim();
  const fromEnv =
    envMin && envMin.length > 0 ? Number.parseFloat(envMin) : Number.NaN;
  const min = Number.isFinite(fromEnv)
    ? fromEnv
    : Number(MAIL_CONFIG.recaptchaMinScore);
  const threshold = Number.isFinite(min) ? Math.min(1, Math.max(0, min)) : 0.5;
  if (score < threshold) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[recaptcha siteverify]",
        JSON.stringify({ lowScore: true, score, threshold, hostname: data.hostname }),
      );
    }
    return { ok: false, reason: `low-score:${score}` };
  }

  return { ok: true, score };
}
