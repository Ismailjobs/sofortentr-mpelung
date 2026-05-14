import { MAIL_CONFIG } from "./mail-config.js";

const C = MAIL_CONFIG.colors;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapEmail(params: {
  preheader: string;
  title: string;
  innerHtml: string;
}): string {
  const { preheader, title, innerHtml } = params;
  const ph = escapeHtml(preheader);
  const tl = escapeHtml(title);
  const sub = escapeHtml(MAIL_CONFIG.tagline);
  const brand = escapeHtml(MAIL_CONFIG.siteName);
  const addr = escapeHtml(MAIL_CONFIG.addressLine);
  const phone = escapeHtml(MAIL_CONFIG.phoneDisplay);
  const siteHost = escapeHtml(MAIL_CONFIG.siteUrl.replace(/^https?:\/\//, ""));
  const hours = escapeHtml(MAIL_CONFIG.officeHours);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="de">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${tl}</title>
</head>
<body style="margin:0;padding:0;background:${C.mutedBg};-webkit-text-size-adjust:100%;">
  <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;mso-hide:all;">${ph}</span>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${C.mutedBg};margin:0;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${C.white};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:${C.dark};padding:24px 32px 28px;border-bottom:4px solid ${C.orange};">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.72);">${sub}</p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.02em;color:#ffffff;line-height:1.2;">${brand}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;font-family:Arial,Helvetica,sans-serif;">
              ${innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 32px;border-top:1px solid ${C.border};background:#fafafa;">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.5;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;">${brand} · ${addr}</p>
              <p style="margin:0;font-size:12px;line-height:1.5;font-family:Arial,Helvetica,sans-serif;">
                <a href="${MAIL_CONFIG.phoneTelHref}" style="color:${C.orange};font-weight:600;text-decoration:none;">${phone}</a>
                <span style="color:${C.border};">&nbsp;·&nbsp;</span>
                <a href="${MAIL_CONFIG.siteUrl}" style="color:${C.textBody};text-decoration:underline;">${siteHost}</a>
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:11px;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;text-align:center;">${hours}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildInternalNotificationHtml(params: {
  escName: string;
  escEmail: string;
  escPhone: string;
  escServiceLabel: string;
  msgHtml: string;
  subjectName: string;
}): string {
  const { escName, escEmail, escPhone, escServiceLabel, msgHtml, subjectName } = params;
  const inner = `
    <p style="margin:0 0 20px;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${C.orange};font-family:Arial,Helvetica,sans-serif;">
      Neue Kontaktanfrage
    </p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
      Es ist eine neue Nachricht über das Website-Formular eingegangen. Sie können mit <strong style="color:${C.dark};">Antworten</strong> direkt an den Kunden schreiben.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${C.border};border-radius:8px;overflow:hidden;margin-bottom:20px;">
      <tr>
        <td style="padding:14px 16px;background:#f9fafb;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:${C.textMuted};width:112px;font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};">Name</td>
        <td style="padding:14px 16px;font-size:15px;color:${C.dark};font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};">${escName}</td>
      </tr>
      <tr>
        <td style="padding:14px 16px;background:#f9fafb;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};">E-Mail</td>
        <td style="padding:14px 16px;font-size:15px;font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};"><a href="mailto:${escEmail}" style="color:${C.orange};font-weight:600;text-decoration:none;">${escEmail}</a></td>
      </tr>
      <tr>
        <td style="padding:14px 16px;background:#f9fafb;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};">Telefon</td>
        <td style="padding:14px 16px;font-size:15px;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;border-bottom:1px solid ${C.border};">${escPhone}</td>
      </tr>
      <tr>
        <td style="padding:14px 16px;background:#f9fafb;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;">Leistung</td>
        <td style="padding:14px 16px;font-size:15px;color:${C.dark};font-weight:600;font-family:Arial,Helvetica,sans-serif;">${escServiceLabel}</td>
      </tr>
    </table>
    <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;">Nachricht</p>
    <div style="border-left:4px solid ${C.orange};padding:16px 18px;background:${C.mutedBg};border-radius:0 8px 8px 0;font-size:15px;line-height:1.65;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">${msgHtml}</div>
    <p style="margin:20px 0 0;font-size:12px;color:${C.textMuted};font-family:Arial,Helvetica,sans-serif;">
      Referenz: <strong style="color:${C.dark};">${escapeHtml(subjectName)}</strong>
    </p>`;

  return wrapEmail({
    preheader: `Neue Anfrage von ${subjectName}`,
    title: "Neue Kontaktanfrage",
    innerHtml: inner,
  });
}

export function buildCustomerAutoReplyHtml(escNameFirst: string, escServiceLabel: string): string {
  const inner = `
    <p style="margin:0 0 16px;font-size:18px;line-height:1.35;font-weight:700;color:${C.dark};font-family:Arial,Helvetica,sans-serif;">
      Hallo ${escNameFirst},
    </p>
    <p style="margin:0 0 14px;font-size:14px;line-height:1.55;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
      <strong style="color:${C.textMuted};font-size:12px;letter-spacing:0.06em;text-transform:uppercase;">Gewünschte Leistung</strong><br />
      <span style="font-size:15px;font-weight:700;color:${C.dark};">${escServiceLabel}</span>
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
      vielen Dank für Ihre Nachricht — wir haben sie <strong style="color:${C.dark};">erhalten</strong> und melden uns <strong style="color:${C.dark};">schnellstmöglich</strong> bei Ihnen.
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0;">
      <tr>
        <td style="padding:18px 20px;background:${C.mutedBg};border-radius:8px;border:1px solid ${C.border};">
          <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${C.orange};font-family:Arial,Helvetica,sans-serif;">Nächste Schritte</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
            Wir prüfen Ihre Angaben und melden uns für Rückfragen oder einen <strong style="color:${C.dark};">Besichtigungstermin</strong> — transparent, mit Festpreis nach Besichtigung.
          </p>
        </td>
      </tr>
    </table>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.65;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
      <strong style="color:${C.dark};">Dringend?</strong> Rufen Sie uns direkt an:
    </p>
    <p style="margin:0 0 28px;">
      <a href="${MAIL_CONFIG.phoneTelHref}" style="display:inline-block;padding:12px 22px;background:${C.orange};color:#111111;text-decoration:none;font-weight:700;font-size:14px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(MAIL_CONFIG.phoneDisplay)}</a>
    </p>
    <p style="margin:0;font-size:14px;line-height:1.55;color:${C.textBody};font-family:Arial,Helvetica,sans-serif;">
      Mit freundlichen Grüßen<br />
      <strong style="color:${C.dark};font-size:15px;">${escapeHtml(MAIL_CONFIG.siteName)}</strong>
    </p>`;

  return wrapEmail({
    preheader: "Wir haben Ihre Nachricht erhalten.",
    title: "Bestätigung Ihrer Anfrage",
    innerHtml: inner,
  });
}

export function buildInternalNotificationText(params: {
  name: string;
  email: string;
  phone: string;
  serviceLabel: string;
  message: string;
  subjectName: string;
}): string {
  const { name, email, phone, serviceLabel, message, subjectName } = params;
  return `Neue Kontaktanfrage (Website)
Referenz: ${subjectName}

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "–"}
Leistung: ${serviceLabel}

Nachricht:
${message}

—
${MAIL_CONFIG.siteName} · ${MAIL_CONFIG.phoneDisplay} · ${MAIL_CONFIG.siteUrl}`;
}

export function buildCustomerAutoReplyText(plainName: string, serviceLabel: string): string {
  return `Hallo ${plainName},

Gewünschte Leistung: ${serviceLabel}

vielen Dank für Ihre Nachricht — wir haben sie erhalten und melden uns schnellstmöglich bei Ihnen.

Nächste Schritte: Wir prüfen Ihre Angaben und melden uns für Rückfragen oder einen Besichtigungstermin.

Dringend? Tel. ${MAIL_CONFIG.phoneDisplay}

Mit freundlichen Grüßen
${MAIL_CONFIG.siteName}
${MAIL_CONFIG.siteUrl}`;
}
