/** Österreich — Eingabe nur nationale Ziffern, API/Speicher immer +43… */

export const CONTACT_PHONE_AT_PREFIX = "+43";

/** NSN ohne führende 0 — ITU-orientiert großzügig begrenzt (E.164 max. 15 Ziffern gesamt → max. 13 nach 43) */
export const PHONE_AT_NSN_MIN_DIGITS = 8;
export const PHONE_AT_NSN_MAX_DIGITS = 13;

/** Nur Ziffern für das nationale Feld; führende 0 oder eingefügtes 43 entfernen. */
export function digitsOnlyAtLocal(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("43")) d = d.slice(2);
  if (d.startsWith("0")) d = d.slice(1);
  return d.slice(0, PHONE_AT_NSN_MAX_DIGITS);
}

/** Leer wenn keine Ziffern — sonst +43 gefolgt von NSN. */
export function toAtE164FromLocal(raw: string): string {
  const d = digitsOnlyAtLocal(raw);
  if (!d) return "";
  return `${CONTACT_PHONE_AT_PREFIX}${d}`;
}

/** Aus Request-Body: bereits +43 oder nationale Ziffern → kompaktes +43… ohne Leerzeichen. */
export function compactAtPhoneFromPayload(raw: string): string {
  const collapsed = raw.trim().replace(/[\s-]/g, "");
  if (!collapsed) return "";
  if (collapsed.startsWith(CONTACT_PHONE_AT_PREFIX)) {
    const nsn = collapsed
      .slice(CONTACT_PHONE_AT_PREFIX.length)
      .replace(/\D/g, "")
      .slice(0, PHONE_AT_NSN_MAX_DIGITS);
    return nsn ? `${CONTACT_PHONE_AT_PREFIX}${nsn}` : "";
  }
  return toAtE164FromLocal(raw);
}

/** Leeres Telefon = ok (optional); sonst strenges Format +43 + NSN. */
export function isValidOptionalAtPhone(e164ish: string): boolean {
  const t = typeof e164ish === "string" ? e164ish.trim() : "";
  if (!t) return true;
  if (!t.startsWith(CONTACT_PHONE_AT_PREFIX)) return false;
  const nsn = t.slice(CONTACT_PHONE_AT_PREFIX.length).replace(/\D/g, "");
  if (nsn.length < PHONE_AT_NSN_MIN_DIGITS || nsn.length > PHONE_AT_NSN_MAX_DIGITS)
    return false;
  return /^[1-9]\d*$/.test(nsn);
}
