"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CONTACT_BLOCK, CONTACT_MAP } from "@/data/site-content";

/**
 * Lädt das Google-Maps-iframe erst bei Sichtbarkeit (Intersection Observer),
 * damit kein zusätzlicher Third-Party-Request den First Paint blockiert.
 */
export default function LazyGoogleMapEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadEmbed, setLoadEmbed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mt-6 w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-neutral-100 shadow-sm ring-1 ring-brand-orange/10">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          {loadEmbed ? (
            <iframe
              src={CONTACT_MAP.embedSrc}
              title={CONTACT_MAP.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-neutral-50 to-neutral-100 px-4 text-center"
              aria-hidden
            >
              <MapPin className="h-8 w-8 text-brand-orange/80" strokeWidth={1.75} />
              <p className="text-xs font-medium text-neutral-500">Karte wird geladen …</p>
            </div>
          )}
        </div>
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        <MapPin className="mr-1 inline h-3.5 w-3.5 text-brand-orange" aria-hidden />
        {CONTACT_BLOCK.address}
        {" · "}
        <a
          href={CONTACT_MAP.openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-dark underline decoration-brand-orange/40 underline-offset-2 transition hover:text-brand-orange hover:decoration-brand-orange"
        >
          In Google Maps öffnen
        </a>
      </p>
    </div>
  );
}
