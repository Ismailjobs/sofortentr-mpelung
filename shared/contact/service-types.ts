/**
 * Kontaktformular: nur diese Leistungs-IDs sind gültig (Deckungsgleich mit Website-Leistungen).
 */
export const CONTACT_SERVICE_OPTIONS = [
  { id: "hausentruempelung", label: "Hausentrümpelung" },
  { id: "wohnungsentruempelung", label: "Wohnungsentrümpelung" },
  { id: "kellerentruempelung", label: "Kellerentrümpelung" },
  { id: "lagerentruempelung", label: "Lagerentrümpelung" },
  { id: "bueroentruempelung", label: "Büroentrümpelung" },
  { id: "garagenentruempelung", label: "Garagenentrümpelung" },
  { id: "dachbodenentruempelung", label: "Dachbodenentrümpelung" },
  { id: "messie-entruempelung", label: "Messie-Entrümpelung" },
  { id: "gartenentruempelung", label: "Gartenentrümpelung" },
] as const;

export type ContactServiceTypeId = (typeof CONTACT_SERVICE_OPTIONS)[number]["id"];

const ID_SET = new Set<string>(CONTACT_SERVICE_OPTIONS.map((o) => o.id));

export function isAllowedContactServiceType(v: unknown): v is ContactServiceTypeId {
  return typeof v === "string" && ID_SET.has(v);
}

export function getContactServiceLabel(id: ContactServiceTypeId): string {
  const row = CONTACT_SERVICE_OPTIONS.find((o) => o.id === id);
  return row?.label ?? id;
}
