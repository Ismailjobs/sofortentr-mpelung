import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TRUCK_IMAGE_SIZES } from "@/lib/image-sizes";
import { WHY_US_CTA, WHY_US_EYEBROW, WHY_US_FEATURES, WHY_US_HEADLINE } from "@/data/site-content";

export default function WhyUs() {
  const CalcIcon = WHY_US_CTA.calculatorIcon;

  return (
    <section
      id="warum-wir"
      className="scroll-mt-28 bg-brand-dark pt-6 pb-4 text-white sm:pt-7 sm:pb-4 lg:pt-8 lg:pb-5"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(240px,1.36fr)_minmax(0,0.82fr)] lg:gap-8 lg:gap-y-6">
          <div className="mx-auto min-w-0 max-w-md self-start break-words text-center text-pretty lg:mx-0 lg:max-w-none lg:text-left lg:justify-self-start">
            <p className="text-xs font-bold uppercase leading-snug tracking-[0.16em] text-brand-orange sm:text-[13px] sm:tracking-[0.22em]">
              {WHY_US_EYEBROW}
            </p>
            <h2 className="mt-2 text-[1.15rem] font-bold uppercase leading-snug tracking-tight text-white sm:text-2xl lg:mt-3 lg:text-[1.5rem] lg:leading-snug xl:text-[1.62rem]">
              {WHY_US_HEADLINE}
            </h2>
            <ul className="mt-5 space-y-2.5 text-left sm:mt-6">
              {WHY_US_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-[13px] leading-snug text-white/92 sm:text-sm sm:leading-snug">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-black">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="min-w-0 break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full self-start justify-center px-[3px] py-1 sm:px-1 lg:px-0 lg:py-0">
            <Image
              src="/truck.webp"
              alt="Entrümpelungstransporter von SofortEntrümpelung in Wien"
              width={880}
              height={546}
              sizes={TRUCK_IMAGE_SIZES}
              quality={68}
              loading="lazy"
              className="pointer-events-none mx-auto block h-auto w-full max-w-full max-h-[min(53vh,470px)] object-contain select-none drop-shadow-[0_18px_36px_rgba(0,0,0,.5)] sm:max-h-[min(56vh,530px)] sm:max-w-[min(94vw,720px)] lg:max-h-[min(66vh,640px)] lg:max-w-[min(100%,880px)]"
              draggable={false}
            />
          </div>

          <div className="mx-auto w-full max-w-sm self-start lg:mx-0 lg:justify-self-end">
            <div className="flex flex-col rounded-3xl border-2 border-brand-orange bg-brand-dark p-5 shadow-xl sm:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex rounded-xl bg-brand-orange p-3 text-black">
                  <CalcIcon className="h-7 w-7" aria-hidden strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                    Kostenlos
                  </p>
                  <p className="mt-2 text-lg font-extrabold uppercase leading-snug tracking-wide text-white xl:text-xl">
                    {WHY_US_CTA.title}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {WHY_US_CTA.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#kontakt"
                className="mt-5 flex w-full items-center justify-center rounded-btn bg-brand-orange px-4 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
