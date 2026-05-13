import { MAIL_CONFIG } from "./mail-config.js";

const BREVO_SMTP_URL = "https://api.brevo.com/v3/smtp/email";

export type BrevoRecipient = { email: string; name?: string };

export async function sendBrevoEmail(opts: {
  to: BrevoRecipient[];
  subject: string;
  htmlContent: string;
  textContent: string;
  replyTo?: BrevoRecipient;
}): Promise<void> {
  /* Prozess-Env zur Laufzeit; Contact-API lädt `.env.local` vor jedem POST erneut. */
  const fromEnv =
    typeof process.env.BREVO_API_KEY === "string" ? process.env.BREVO_API_KEY.trim() : "";
  const fromConfig = MAIL_CONFIG.brevoApiKey?.trim() ?? "";
  const apiKey =
    fromEnv || (fromConfig.includes("HIER_IHREN") ? "" : fromConfig);
  if (!apiKey) {
    throw new Error(
      "Brevo API-Key fehlt — Projektroot `.env.local` mit `BREVO_API_KEY=…` oder siehe `.env.example`.",
    );
  }

  const res = await fetch(BREVO_SMTP_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: MAIL_CONFIG.senderName, email: MAIL_CONFIG.senderEmail },
      to: opts.to,
      subject: opts.subject,
      htmlContent: opts.htmlContent,
      textContent: opts.textContent,
      ...(opts.replyTo ? { replyTo: { email: opts.replyTo.email, name: opts.replyTo.name } } : {}),
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    throw new Error(`Brevo Fehler ${res.status}${errBody ? `: ${errBody.slice(0, 500)}` : ""}`);
  }
}
