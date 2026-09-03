"use client";

import { Calendar, Phone } from "lucide-react";
import type { MouseEvent } from "react";
import PhoneLink from "@/components/PhoneLink";

type Props = {
  isHome?: boolean;
};

function scrollToKontaktForm() {
  const el = document.getElementById("kontakt-formular");
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Hash nicht in der URL behalten — sonst bleibt #kontakt-formular „hängen“
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  return true;
}

/** Hero-CTAs: Formular-Scroll ohne sticky Hash; Tel-Link bleibt native. */
export default function HeroCtaButtons({ isHome = true }: Props) {
  const onBesichtigung = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (scrollToKontaktForm()) return;
    // Formular noch nicht im DOM (DeferredIdle) — kurz retry
    let tries = 0;
    const id = window.setInterval(() => {
      tries += 1;
      if (scrollToKontaktForm() || tries >= 50) window.clearInterval(id);
    }, 50);
  };

  return (
    <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
      <a
        href="#kontakt-formular"
        data-hash-scroll="off"
        onClick={onBesichtigung}
        className={
          isHome
            ? "inline-flex items-center justify-center gap-2 rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition hover:bg-[#ff8f26] hover:shadow-xl"
            : "inline-flex items-center justify-center gap-2 rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition hover:bg-[#ff8f26] hover:shadow-xl"
        }
      >
        <Calendar className="h-5 w-5" aria-hidden />
        {isHome ? "Besichtigung vereinbaren" : "Gratis Besichtigung"}
      </a>
      <PhoneLink
        className={
          isHome
            ? "inline-flex items-center justify-center gap-2 rounded-btn bg-black px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
            : "inline-flex items-center justify-center gap-2 rounded-btn bg-black px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white ring-1 ring-white/15 transition hover:bg-white/10"
        }
      >
        <Phone className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden />
        Jetzt anrufen
      </PhoneLink>
    </div>
  );
}
