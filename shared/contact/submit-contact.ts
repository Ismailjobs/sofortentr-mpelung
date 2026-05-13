import { sendBrevoEmail } from "./brevo-mail.js";
import {
  buildCustomerAutoReplyHtml,
  buildCustomerAutoReplyText,
  buildInternalNotificationHtml,
  buildInternalNotificationText,
} from "./email-templates.js";
import { escapeHtml, nl2brEsc } from "./escape-html.js";
import { CONTACT_MAX_MESSAGE_CHARS, CONTACT_MAX_NAME_CHARS, CONTACT_MAX_PHONE_CHARS } from "./contact-limits.js";
import { MAIL_CONFIG } from "./mail-config.js";
import { compactAtPhoneFromPayload, isValidOptionalAtPhone } from "./phone-at.js";
import { isRecaptchaVerificationEnabled, verifyRecaptchaV3Token } from "./verify-recaptcha.js";
import {
  getContactServiceLabel,
  isAllowedContactServiceType,
  type ContactServiceTypeId,
} from "./service-types.js";

export type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  /** Eine der fest definierten Leistungs-IDs (Hausentrümpelung, …) */
  serviceType?: string;
  privacy?: boolean;
  website?: string;
  /** reCAPTCHA v3 token (silent) */
  recaptchaToken?: string;
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function oneLine(s: string, max = 200) {
  return s.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export type ContactResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

export type SubmitContactOptions = {
  /** Für Google siteverify „remoteip“ (z. B. erste X-Forwarded-For-Adresse). */
  remoteIp?: string;
};

function shouldSkipRecaptchaVerify(): boolean {
  if (process.env.CONTACT_SKIP_RECAPTCHA !== "1") return false;
  if (process.env.NODE_ENV === "production") return false;
  console.warn("[recaptcha] verify skipped (CONTACT_SKIP_RECAPTCHA=1, non-production)");
  return true;
}

/** Validierung + reCAPTCHA v3 + zwei Brevo-Mails (Posteingang + Kunden-Bestätigung) */
export async function submitContactRequest(
  body: ContactPayload,
  options?: SubmitContactOptions,
): Promise<ContactResult> {
  if (body.website && String(body.website).trim() !== "") {
    return { ok: false, status: 400, error: "Ungültige Anfrage." };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phoneRaw = typeof body.phone === "string" ? body.phone.trim() : "";
  const phone = compactAtPhoneFromPayload(phoneRaw);
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const privacy = body.privacy === true;

  if (!name) {
    return { ok: false, status: 400, error: "Bitte geben Sie Ihren Namen ein." };
  }
  if (name.length > CONTACT_MAX_NAME_CHARS) {
    return {
      ok: false,
      status: 400,
      error: `Der Name ist zu lang (max. ${CONTACT_MAX_NAME_CHARS} Zeichen).`,
    };
  }
  if (!email || !isValidEmail(email)) {
    return { ok: false, status: 400, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." };
  }
  if (!message) {
    return { ok: false, status: 400, error: "Bitte beschreiben Sie kurz Ihr Anliegen." };
  }
  if (!privacy) {
    return { ok: false, status: 400, error: "Bitte bestätigen Sie den Hinweis zum Datenschutz." };
  }

  const serviceTypeRaw = typeof body.serviceType === "string" ? body.serviceType.trim() : "";
  if (!isAllowedContactServiceType(serviceTypeRaw)) {
    return {
      ok: false,
      status: 400,
      error: "Bitte wählen Sie eine gültige Leistung aus der Liste.",
    };
  }
  const serviceType: ContactServiceTypeId = serviceTypeRaw;

  if (message.length > CONTACT_MAX_MESSAGE_CHARS) {
    return {
      ok: false,
      status: 400,
      error: `Ihre Nachricht ist zu lang (max. ${CONTACT_MAX_MESSAGE_CHARS.toLocaleString("de-AT")} Zeichen).`,
    };
  }
  if (phoneRaw.length > 0 && !phone) {
    return {
      ok: false,
      status: 400,
      error:
        "Bitte geben Sie eine gültige Telefonnummer ein (nur Ziffern unter +43; führende 0 weglassen).",
    };
  }
  if (phone.length > CONTACT_MAX_PHONE_CHARS || !isValidOptionalAtPhone(phone)) {
    return {
      ok: false,
      status: 400,
      error:
        "Die Telefonnummer ist ungültig. Erwartet wird eine österreichische Nummer (nach +43 nur Ziffern, z. B. 681 …).",
    };
  }

  if (isRecaptchaVerificationEnabled() && !shouldSkipRecaptchaVerify()) {
    const token =
      typeof body.recaptchaToken === "string" ? body.recaptchaToken.trim() : "";
    if (!token) {
      return {
        ok: false,
        status: 400,
        error:
          "Sicherheitsprüfung nicht verfügbar. Bitte Seite neu laden und erneut versuchen.",
      };
    }
    const chk = await verifyRecaptchaV3Token(token, options?.remoteIp);
    if (!chk.ok) {
      console.warn("[recaptcha]", chk.reason);
      const generic = "Sicherheitsprüfung fehlgeschlagen. Bitte später erneut versuchen.";
      const devDetail =
        process.env.NODE_ENV !== "production"
          ? `${generic} (${chk.reason})`
          : generic;
      return {
        ok: false,
        status: 400,
        error: devDetail,
      };
    }
  }

  const inbox = MAIL_CONFIG.inboxEmail?.trim();
  if (!inbox) {
    console.error("inboxEmail fehlt in mail-config");
    return {
      ok: false,
      status: 503,
      error: "Server ist noch nicht konfiguriert. Bitte später erneut versuchen.",
    };
  }

  const escName = escapeHtml(name);
  const escEmail = escapeHtml(email);
  const escPhone = escapeHtml(phone || "–");
  const escServiceLabel = escapeHtml(getContactServiceLabel(serviceType));
  const msgHtml = nl2brEsc(message);
  const subjectName = oneLine(name);

  const internalSubject = `Neue Kontaktanfrage: ${subjectName} · ${getContactServiceLabel(serviceType)}`;
  const internalHtml = buildInternalNotificationHtml({
    escName,
    escEmail,
    escPhone,
    escServiceLabel,
    msgHtml,
    subjectName,
  });
  const internalText = buildInternalNotificationText({
    name,
    email,
    phone,
    serviceLabel: getContactServiceLabel(serviceType),
    message,
    subjectName,
  });

  const customerSubject = `Bestätigung — ${MAIL_CONFIG.siteName}`;
  const customerHtml = buildCustomerAutoReplyHtml(escName, escServiceLabel);
  const plainName = oneLine(name, 500);
  const customerText = buildCustomerAutoReplyText(plainName, getContactServiceLabel(serviceType));

  try {
    await sendBrevoEmail({
      to: [{ email: inbox, name: "Eingang" }],
      subject: internalSubject,
      htmlContent: internalHtml,
      textContent: internalText,
      replyTo: { email, name: subjectName || email },
    });

    await sendBrevoEmail({
      to: [{ email, name: subjectName || undefined }],
      subject: customerSubject,
      htmlContent: customerHtml,
      textContent: customerText,
    });
  } catch (e) {
    console.error("Brevo:", e);
    const msg =
      e instanceof Error && e.message.includes("mail-config")
        ? e.message
        : "Die E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.";
    return {
      ok: false,
      status: 502,
      error: msg,
    };
  }

  return { ok: true };
}
