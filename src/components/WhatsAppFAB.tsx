"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_HREF = "https://wa.me/4368181130962";

const BUBBLE_ID = "whatsapp-fab-hinweis";

const DELAY_AFTER_LOAD_MS = 700;
const VISIBLE_MS = 6500;
const HIDDEN_MS = 9000;

export default function WhatsAppFAB() {
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const clearTimers = () => {
      timers.forEach(clearTimeout);
      timers.length = 0;
    };

    const cycle = () => {
      if (cancelled) return;
      setBubbleOpen(true);
      const hide = setTimeout(() => {
        if (cancelled) return;
        setBubbleOpen(false);
        const next = setTimeout(cycle, HIDDEN_MS);
        timers.push(next);
      }, VISIBLE_MS);
      timers.push(hide);
    };

    const start = () => {
      if (cancelled) return;
      const afterLoad = setTimeout(() => {
        if (cancelled) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setBubbleOpen(true);
          return;
        }
        cycle();
      }, DELAY_AFTER_LOAD_MS);
      timers.push(afterLoad);
    };

    /* Next.js: beim useEffect-Lauf ist `load` oft schon vorbei — Listener feuert nie → kein Ballon. */
    start();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] flex max-w-[min(18rem,calc(100vw-2rem))] flex-col items-end gap-2">
      <div
        id={BUBBLE_ID}
        role="tooltip"
        aria-hidden={!bubbleOpen}
        className={`pointer-events-none relative rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/10 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
          bubbleOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-0.5 opacity-0"
        }`}
      >
        <p className="text-right text-xs leading-snug text-neutral-800 sm:text-sm">
          <span className="font-semibold text-brand-dark">Fotos vom Objekt?</span>{" "}
          Einfach per WhatsApp schicken — wir melden uns umgehend.
        </p>
        <span
          className="absolute -bottom-2 right-8 h-0 w-0 border-l-[9px] border-r-[9px] border-t-[10px] border-l-transparent border-r-transparent border-t-white [filter:drop-shadow(0_1px_0_rgba(0,0,0,0.08))]"
          aria-hidden
        />
      </div>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl ring-4 ring-white/90 transition hover:scale-105 hover:bg-[#1ebe5b]"
        aria-label="WhatsApp Chat öffnen"
        aria-describedby={bubbleOpen ? BUBBLE_ID : undefined}
      >
        <MessageCircle className="h-7 w-7" strokeWidth={1.85} aria-hidden />
      </a>
    </div>
  );
}
