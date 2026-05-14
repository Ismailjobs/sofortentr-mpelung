/** Einheitliche, kundenfreundliche Fehlertexte — niemals HTML/Upstream-Rohtext anzeigen. */

export const CONTACT_FORM_ERROR_GENERIC =
  "Der Versand ist gerade nicht möglich. Bitte versuchen Sie es in wenigen Minuten erneut oder rufen Sie uns an.";

export const CONTACT_FORM_ERROR_NETWORK =
  "Keine Verbindung zum Server. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut. Sie erreichen uns auch telefonisch.";

export const CONTACT_FORM_ERROR_UPSTREAM =
  "Unser Nachrichtendienst ist vorübergehend nicht erreichbar. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.";

const HTML_LIKE = /<!DOCTYPE|<\s*html[\s>]|<\s*head[\s>]|<\s*body[\s>]|<\s*script/i;

/** Nur kurze, vermutlich serverseitig gesetzte Nutzertexte aus JSON übernehmen. */
function isPlausibleServerMessage(s: string): boolean {
  const t = s.trim();
  if (t.length === 0 || t.length > 600) return false;
  if (HTML_LIKE.test(t)) return false;
  if (t.includes("{") && t.includes("}")) return false;
  return true;
}

/**
 * Einheitliche Meldung für fehlgeschlagene Kontakt-API-Antworten.
 * Validierte 4xx-JSON-Fehler von unserer API dürfen durchgereicht werden.
 */
export function formatContactSubmitError(httpStatus: number, jsonErrorField: string | undefined): string {
  const raw = typeof jsonErrorField === "string" ? jsonErrorField : "";
  const candidate = raw.trim();
  const allowServerText =
    candidate.length > 0 &&
    isPlausibleServerMessage(candidate) &&
    (httpStatus === 400 || httpStatus === 401 || httpStatus === 403 || httpStatus === 422);

  if (allowServerText) return candidate;

  if (httpStatus === 413) {
    return "Die Anfrage ist zu groß. Bitte kürzen Sie die Nachricht.";
  }
  if (httpStatus === 429) {
    return "Zu viele Anfragen. Bitte warten Sie einen Moment und versuchen Sie es erneut.";
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    return CONTACT_FORM_ERROR_UPSTREAM;
  }

  if (candidate.length > 0 && isPlausibleServerMessage(candidate)) {
    return candidate;
  }

  return CONTACT_FORM_ERROR_GENERIC;
}
