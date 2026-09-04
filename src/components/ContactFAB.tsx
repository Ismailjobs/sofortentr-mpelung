"use client";

import { Mail, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
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
        className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-0"
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

        {/* Maskottchen: Unterkante am Pill — etwas größer, leicht nach rechts */}
        {!open ? (
          <Image
            src="/maskot-fab.webp"
            alt=""
            width={280}
            height={321}
            sizes="144px"
            className="pointer-events-none relative z-20 mb-[-2px] mr-3 h-28 w-auto select-none drop-shadow-md sm:mr-4 sm:h-32"
            aria-hidden
            priority={false}
          />
        ) : null}

        {/* Pill — Ripple unter der Maske; kein Abstand nach oben */}
        <div className="pointer-events-none relative z-10">
          {!open ? (
            <div className="pointer-events-none absolute inset-0" aria-hidden>
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
            className={`pointer-events-auto relative z-10 inline-flex h-12 min-w-[7.5rem] items-center justify-center rounded-full px-6 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl ring-2 ring-white/90 transition-[colors,transform] duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              open
                ? "bg-brand-orange focus-visible:outline-brand-orange"
                : "bg-[#1d4ed8] focus-visible:outline-[#1d4ed8]"
            }`}
          >
            {open ? <X className="h-6 w-6" strokeWidth={2.5} aria-hidden /> : "Kontakt"}
          </button>
        </div>
      </div>
    </>
  );
}
