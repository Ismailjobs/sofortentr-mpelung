"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_HREF } from "@/data/site-content";

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

    start();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[110] flex max-w-[min(20rem,calc(100dvw_-_2rem))] flex-col items-end gap-2 sm:bottom-5 sm:right-5"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div
        id={BUBBLE_ID}
        role="tooltip"
        aria-hidden={!bubbleOpen}
        className={`pointer-events-none relative rounded-2xl bg-white px-4 py-3 shadow-xl ring-2 ring-black/10 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
          bubbleOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-0.5 opacity-0"
        }`}
      >
        <p className="text-right text-sm leading-snug text-neutral-800">
          <span className="font-semibold text-brand-dark">Fotos vom Objekt?</span>{" "}
          Einfach per WhatsApp schicken — wir melden uns umgehend.
        </p>
        <span
          className="absolute -bottom-2 right-8 h-0 w-0 border-l-[9px] border-r-[9px] border-t-[10px] border-l-transparent border-r-transparent border-t-white [filter:drop-shadow(0_1px_0_rgba(0,0,0,0.08))]"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none flex flex-col items-center gap-1.5">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-btn fab-btn--whatsapp pointer-events-auto"
          aria-label="WhatsApp Chat öffnen"
          aria-describedby={bubbleOpen ? BUBBLE_ID : undefined}
        >
          <MessageCircle className="h-9 w-9" strokeWidth={2} aria-hidden />
        </a>
        <span className="fab-label pointer-events-none bg-[#25d366]">WhatsApp</span>
      </div>
    </div>
  );
}
