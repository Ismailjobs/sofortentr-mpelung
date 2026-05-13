"use client";

import { CheckCircle2, ChevronDown, Loader2, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTACT_BLOCK, DATENSCHUTZ_PATH, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";
import { RECAPTCHA_V3_SITE_KEY } from "@/config/recaptcha";
import {
  CONTACT_MAX_MESSAGE_CHARS,
  CONTACT_MAX_NAME_CHARS,
} from "@shared-contact/contact-limits";
import { CONTACT_SERVICE_OPTIONS, isAllowedContactServiceType } from "@shared-contact/service-types";
import {
  CONTACT_PHONE_AT_PREFIX,
  digitsOnlyAtLocal,
  isValidOptionalAtPhone,
  PHONE_AT_NSN_MAX_DIGITS,
  toAtE164FromLocal,
} from "@shared-contact/phone-at";
import { getContactFormRecaptchaToken, isRecaptchaSiteKeyConfigured } from "@/lib/recaptcha-v3-client";

type FormState = {
  name: string;
  email: string;
  /** Nur nationale Ziffern (ohne +43 / ohne führende 0) — Anzeige mit festem +43 links. */
  phone: string;
  /** Leistungs-ID aus CONTACT_SERVICE_OPTIONS — leer bis zur Auswahl */
  serviceType: string;
  message: string;
  privacy: boolean;
};

function resolveDefaultServiceType(id: string | undefined): string {
  if (id && isAllowedContactServiceType(id)) return id;
  return "";
}

function emptyFormState(defaultServiceTypeId?: string): FormState {
  return {
    name: "",
    email: "",
    phone: "",
    serviceType: resolveDefaultServiceType(defaultServiceTypeId),
    message: "",
    privacy: false,
  };
}

export type ContactFormSectionProps = {
  /** Nur auf `/leistungen/[slug]`: diese Leistung im Dropdown vorauswählen */
  defaultServiceTypeId?: string;
};

function ServiceTypeSelect({
  id,
  value,
  onChange,
  disabled,
}: {
  id: string;
  value: string;
  onChange: (next: string) => void;
  disabled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const selectedLabel =
    value && isAllowedContactServiceType(value)
      ? CONTACT_SERVICE_OPTIONS.find((o) => o.id === value)?.label ?? "Bitte wählen …"
      : null;

  return (
    <div className="relative mt-2" ref={wrapRef}>
      <button
        type="button"
        id={id}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (!disabled) setOpen((o) => !o);
        }}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-left text-sm text-brand-dark shadow-sm outline-none transition focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/35 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className={selectedLabel ? "text-brand-dark" : "text-neutral-400"}>
          {selectedLabel ?? "Bitte wählen …"}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-brand-orange transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
          strokeWidth={2.25}
        />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-labelledby={`${id}-label`}
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-[min(70vh,22rem)] overflow-y-auto overscroll-contain rounded-3xl border border-black/[0.08] bg-white py-2 shadow-xl ring-1 ring-black/[0.06]"
        >
          <li role="none">
            <button
              type="button"
              role="option"
              aria-selected={value === ""}
              className="w-full px-4 py-3 text-left text-sm text-neutral-500 transition hover:bg-brand-muted/90"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              Bitte wählen …
            </button>
          </li>
          {CONTACT_SERVICE_OPTIONS.map((opt) => (
            <li key={opt.id} role="none">
              <button
                type="button"
                role="option"
                aria-selected={value === opt.id}
                className={`w-full px-4 py-3 text-left text-sm transition hover:bg-brand-orange/10 ${
                  value === opt.id ? "bg-brand-orange/12 font-semibold text-brand-dark" : "text-brand-dark"
                }`}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function ContactFormSection({ defaultServiceTypeId }: ContactFormSectionProps = {}) {
  const [form, setForm] = useState<FormState>(() => emptyFormState(defaultServiceTypeId));
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      serviceType: resolveDefaultServiceType(defaultServiceTypeId),
    }));
  }, [defaultServiceTypeId]);

  const update = useCallback(<K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Bitte geben Sie Ihren Namen ein.");
      return;
    }
    if (form.name.trim().length > CONTACT_MAX_NAME_CHARS) {
      setError(`Der Name ist zu lang (max. ${CONTACT_MAX_NAME_CHARS} Zeichen).`);
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    if (!form.message.trim()) {
      setError("Bitte beschreiben Sie kurz Ihr Anliegen.");
      return;
    }
    if (form.message.trim().length > CONTACT_MAX_MESSAGE_CHARS) {
      setError(`Ihre Nachricht ist zu lang (max. ${CONTACT_MAX_MESSAGE_CHARS.toLocaleString("de-AT")} Zeichen).`);
      return;
    }
    const phoneE164 = toAtE164FromLocal(form.phone);
    if (!isValidOptionalAtPhone(phoneE164)) {
      setError(
        "Bitte nur die nationale Nummer ohne Ländervorwahl eingeben (Ziffern; führende 0 nicht nötig) oder Feld leer lassen.",
      );
      return;
    }
    if (!form.privacy) {
      setError("Bitte bestätigen Sie den Hinweis zum Datenschutz.");
      return;
    }
    if (!form.serviceType || !isAllowedContactServiceType(form.serviceType)) {
      setError("Bitte wählen Sie eine Leistung aus.");
      return;
    }

    setSubmitting(true);
    setError(null);

    let recaptchaToken: string | undefined;
    if (isRecaptchaSiteKeyConfigured()) {
      try {
        recaptchaToken = await getContactFormRecaptchaToken();
      } catch {
        setError(
          "Die Hintergrund-Sicherheitsprüfung konnte nicht gestartet werden. Bitte Seite neu laden oder kurz warten.",
        );
        setSubmitting(false);
        return;
      }
    }

    /** Standard: gleiche Origin → Next leitet an Contact-API weiter (kein CORS zum :4000). */
    const endpoint =
      (typeof process.env.NEXT_PUBLIC_CONTACT_API_URL === "string" &&
        process.env.NEXT_PUBLIC_CONTACT_API_URL.trim()) || "/api/contact";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: phoneE164,
          serviceType: form.serviceType,
          message: form.message.trim(),
          privacy: form.privacy,
          ...(recaptchaToken ? { recaptchaToken } : {}),
        }),
      });
      const raw = await res.text();
      let data: { error?: string } = {};
      try {
        data = raw ? (JSON.parse(raw) as { error?: string }) : {};
      } catch {
        /* nicht JSON */
      }
      if (!res.ok) {
        const fromJson =
          typeof data.error === "string" && data.error.trim() !== "" ? data.error.trim() : "";
        const fallback =
          raw.trim() !== "" ? raw.trim() : `Anfrage fehlgeschlagen (HTTP ${res.status}).`;
        setError(fromJson || fallback);
        return;
      }
      setSent(true);
      setForm(emptyFormState(defaultServiceTypeId));
    } catch (err) {
      console.error("[Kontaktformular]", err);
      setError(
        "Netzwerkfehler. Lokal beides starten: `npm run dev:all` — oder ein Terminal `npm run dev`, ein zweites `npm run api`.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt-formular"
      aria-labelledby="kontakt-formular-heading"
      className="form-section-warm scroll-mt-28 border-t border-brand-orange/10 py-16 sm:py-24"
    >
      {isRecaptchaSiteKeyConfigured() ? (
        <Script
          id="google-recaptcha-v3"
          src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_V3_SITE_KEY.trim())}`}
          strategy="afterInteractive"
        />
      ) : null}
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Kurz Bescheid geben</p>
            <h2
              id="kontakt-formular-heading"
              className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl"
            >
              Nachricht senden
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600">
              Schreiben Sie uns — wir antworten zeitnah. Sie erhalten automatisch eine Bestätigung an Ihre E-Mail-Adresse.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT_BLOCK.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark underline decoration-brand-orange/50 underline-offset-4 transition hover:text-brand-orange hover:decoration-brand-orange"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                {CONTACT_BLOCK.email}
              </a>
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark underline decoration-brand-orange/50 underline-offset-4 transition hover:text-brand-orange hover:decoration-brand-orange"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="form-card-warm rounded-3xl p-6 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.22)] ring-1 ring-brand-orange/15 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="inline-flex rounded-full bg-brand-orange/15 p-4 text-brand-orange ring-1 ring-brand-orange/30">
                  <CheckCircle2 className="h-10 w-10" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-6 text-lg font-bold text-brand-dark">Nachricht gesendet</p>
                <p className="mt-2 max-w-sm text-sm text-neutral-600">
                  Vielen Dank! Wir haben Ihre Anfrage erhalten. Eine kurze Bestätigung sollte in Ihrem Posteingang sein. Bei
                  Fragen erreichen Sie uns auch unter{" "}
                  <a className="font-semibold text-brand-orange underline" href={`mailto:${CONTACT_BLOCK.email}`}>
                    {CONTACT_BLOCK.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  className="mt-8 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
                  onClick={() => setSent(false)}
                >
                  Weitere Nachricht
                </button>
              </div>
            ) : (
              <form className="relative space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Name <span className="text-brand-orange">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      maxLength={CONTACT_MAX_NAME_CHARS}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      disabled={submitting}
                      className="mt-2 w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none ring-0 transition placeholder:text-neutral-400 focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/35 disabled:opacity-60"
                      placeholder="Ihr Name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      E-Mail <span className="text-brand-orange">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      disabled={submitting}
                      className="mt-2 w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/35 disabled:opacity-60"
                      placeholder="name@beispiel.at"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Telefon (optional)</span>
                  <div className="mt-2 flex min-h-[3rem] w-full overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-sm ring-0 transition focus-within:border-brand-orange/40 focus-within:ring-2 focus-within:ring-brand-orange/35">
                    <span
                      className="flex shrink-0 items-center border-r border-black/[0.06] bg-neutral-50 px-3 text-sm font-semibold tabular-nums text-neutral-700"
                      aria-hidden
                    >
                      {CONTACT_PHONE_AT_PREFIX}
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      autoCorrect="off"
                      spellCheck={false}
                      maxLength={PHONE_AT_NSN_MAX_DIGITS}
                      value={form.phone}
                      onChange={(e) => update("phone", digitsOnlyAtLocal(e.target.value))}
                      disabled={submitting}
                      className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-neutral-400 disabled:opacity-60"
                      placeholder="z. B. 681 …"
                    />
                  </div>
                </label>

                <div className="block">
                  <label
                    id="kontakt-service-type-label"
                    htmlFor="kontakt-service-type"
                    className="text-xs font-bold uppercase tracking-wider text-neutral-500"
                  >
                    Gewünschte Leistung <span className="text-brand-orange">*</span>
                  </label>
                  <ServiceTypeSelect
                    id="kontakt-service-type"
                    value={form.serviceType}
                    onChange={(next) => update("serviceType", next)}
                    disabled={submitting}
                  />
                </div>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Ihre Nachricht <span className="text-brand-orange">*</span>
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={CONTACT_MAX_MESSAGE_CHARS}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    disabled={submitting}
                    className="mt-2 w-full resize-y rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand-dark shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/35 disabled:opacity-60"
                    placeholder="Objekt, Ort, gewünschter Termin …"
                  />
                </label>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/[0.06] bg-brand-muted/40 px-4 py-3 text-sm text-neutral-700 transition hover:bg-brand-muted/60">
                  <input
                    type="checkbox"
                    checked={form.privacy}
                    onChange={(e) => update("privacy", e.target.checked)}
                    disabled={submitting}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-neutral-300 text-brand-orange focus:ring-brand-orange disabled:opacity-60"
                  />
                  <span>
                    Ich habe den Hinweis zum{" "}
                    <Link
                      href={DATENSCHUTZ_PATH}
                      className="font-semibold text-brand-orange underline decoration-brand-orange/60 underline-offset-2 transition hover:text-brand-dark hover:decoration-brand-dark"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Datenschutz
                    </Link>{" "}
                    zur Kenntnis genommen. <span className="text-brand-orange">*</span>
                  </span>
                </label>

                {error ? (
                  <p className="text-sm font-medium text-red-600" role="alert" aria-live="polite">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-sm transition hover:bg-[#ff8f26] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Wird gesendet…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      Nachricht senden
                    </>
                  )}
                </button>
                <p className="text-xs text-neutral-500">
                  * Pflichtfelder. Nach dem Absenden erhalten Sie eine Bestätigungs-E-Mail; wir melden uns persönlich bei
                  Ihnen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
