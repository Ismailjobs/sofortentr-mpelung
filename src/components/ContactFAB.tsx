"use client";

import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useState, type MouseEvent } from "react";
import {
  CONTACT_BLOCK,
  PHONE_TEL_HREF,
  WHATSAPP_HREF,
} from "@/data/site-content";

const FORM_HASH = "#kontakt-formular";

function scrollToKontaktForm() {
  const el = document.getElementById("kontakt-formular");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }
  window.location.assign(`/${FORM_HASH}`);
}

export default function ContactFAB() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const onFormClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    close();
    requestAnimationFrame(() => scrollToKontaktForm());
  };

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-black/25 backdrop-blur-[1px] transition-opacity"
          aria-label="Menü schließen"
          onClick={close}
        />
      ) : null}

      {/* pointer-events-none: nur echte Controls fangen Taps — Rest der Seite bleibt klickbar */}
      <div
        className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {open ? (
          <div
            id={menuId}
            role="menu"
            className="pointer-events-auto mb-1 flex w-[min(17.5rem,calc(100dvw-3rem))] flex-col gap-2"
          >
            <a
              role="menuitem"
              href={PHONE_TEL_HREF}
              onClick={close}
              className="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/8 transition hover:bg-neutral-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
                <Phone className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-bold text-brand-dark">Anrufen</span>
                <span className="block text-xs text-neutral-500">Direkt verbinden</span>
              </span>
            </a>

            <a
              role="menuitem"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/8 transition hover:bg-neutral-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
                <MessageCircle className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-bold text-brand-dark">WhatsApp</span>
                <span className="block text-[11px] leading-snug text-neutral-500">
                  Fotos senden &amp; Angebot sichern
                </span>
              </span>
            </a>

            <a
              role="menuitem"
              href={FORM_HASH}
              data-hash-scroll="off"
              onClick={onFormClick}
              className="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/8 transition hover:bg-neutral-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-brand-dark">
                <Mail className="h-5 w-5" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-bold text-brand-dark">E-Mail / Formular</span>
                <span className="block text-xs text-neutral-500">{CONTACT_BLOCK.email}</span>
              </span>
            </a>
          </div>
        ) : (
          <div id={menuId} hidden aria-hidden />
        )}

        {/* Nur Kreis + Label klickbar — Ripple liegt darunter und fängt keine Events */}
        <div className="pointer-events-none relative flex w-[4.5rem] flex-col items-center gap-1.5">
          {!open ? (
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[4.5rem]" aria-hidden>
              <span className="contact-fab-ripple" />
              <span className="contact-fab-ripple contact-fab-ripple--delay" />
            </div>
          ) : null}
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Kontaktmenü schließen" : "Kontakt öffnen"}
            className={`pointer-events-auto relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-white shadow-xl ring-2 ring-white/90 transition-colors duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              open
                ? "bg-brand-orange focus-visible:outline-brand-orange"
                : "bg-[#1d4ed8] focus-visible:outline-[#1d4ed8]"
            }`}
          >
            {open ? (
              <X className="h-9 w-9" strokeWidth={2.5} aria-hidden />
            ) : (
              <MessageCircle className="h-9 w-9" strokeWidth={2.25} aria-hidden />
            )}
          </button>
          <span
            className={`pointer-events-none relative z-10 rounded-full border-2 border-white px-2.5 py-0.5 text-[0.6875rem] font-extrabold uppercase tracking-wide text-white shadow-md transition-colors duration-200 ${
              open ? "bg-brand-orange" : "bg-[#1d4ed8]"
            }`}
          >
            Kontakt
          </span>
        </div>
      </div>
    </>
  );
}
