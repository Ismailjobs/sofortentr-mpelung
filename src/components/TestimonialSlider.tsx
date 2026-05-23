"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Testimonial } from "@/data/site-content";

type Props = { testimonials: Testimonial[] };

export default function TestimonialSlider({ testimonials }: Props) {
  const [perView, setPerView] = useState(3);
  const [start, setStart] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      setPerView(mq.matches ? 3 : 1);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const visible = useMemo(() => {
    if (!total) return [];
    const count = Math.min(perView, total);
    return Array.from({ length: count }, (_, i) => testimonials[(start + i) % total]);
  }, [perView, start, testimonials, total]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    setStart((s) => (s === 0 ? total - 1 : s - 1));
  }, [total]);

  const next = useCallback(() => {
    if (total <= 1) return;
    setStart((s) => (s >= total - 1 ? 0 : s + 1));
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;

    const intervalId = window.setInterval(() => {
      setStart((s) => (s >= total - 1 ? 0 : s + 1));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [total]);

  return (
    <section className="bg-brand-muted py-20 sm:py-24">
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
            Ergebnisse &amp; Zufriedenheit
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-4xl">
            Das sagen unsere Kunden
          </h2>
        </div>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-3 text-brand-dark shadow-md transition hover:bg-neutral-50 lg:-left-4 lg:flex xl:-left-6"
            aria-label="Vorherige Bewertungen"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-3 text-brand-dark shadow-md transition hover:bg-neutral-50 lg:-right-4 lg:flex xl:-right-6"
            aria-label="Nächste Bewertungen"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="grid gap-6 lg:grid-cols-3">
            {visible.map((t) => (
              <article
                key={`${t.name}-${t.location}-${start}`}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06]"
              >
                <div className="flex items-center justify-between gap-3">
                  <Image
                    src="/google-logo.svg"
                    alt=""
                    aria-hidden
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <div className="flex gap-0.5 text-brand-orange" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-neutral-100 pt-4 text-sm">
                  <p className="font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-neutral-500">{t.location}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={prev}
              className="inline-flex rounded-full border border-neutral-200 bg-white p-3 shadow"
              aria-label="Zurück"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex rounded-full border border-neutral-200 bg-white p-3 shadow"
              aria-label="Weiter"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
