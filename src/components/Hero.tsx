import { Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroBackdrop from "@/components/HeroBackdrop";
import { PHONE_DISPLAY, PHONE_TEL_HREF, GOOGLE_AGGREGATE_RATING } from "@/data/site-content";

export type HeroDistrict = {
  zip: number;
  name: string;
};

type HeroProps = {
  /** Bezirks-Landing: PLZ + Bezirksname im Hero */
  district?: HeroDistrict | null;
};

export default function Hero({ district = null }: HeroProps) {
  const isHome = !district;

  const ratingBadge = (
    <div className="flex w-[272px] items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-brand-dark shadow-xl ring-1 ring-black/10">
      <Image src="/google-logo.svg" alt="" aria-hidden width={40} height={40} className="h-10 w-10 shrink-0" />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold leading-none">{GOOGLE_AGGREGATE_RATING.ratingValue}</span>
          <div className="flex items-center gap-0.5 text-[#fbbc04]" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-current stroke-current"
              />
            ))}
          </div>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-neutral-600">{GOOGLE_AGGREGATE_RATING.reviewCountLabel}</p>
      </div>
    </div>
  );

  return (
    <section className="relative isolate min-h-[min(72svh,40rem)] overflow-hidden">
      <HeroBackdrop priority />

      <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 pb-8 pt-24 sm:px-5 sm:pb-9 sm:pt-14 lg:px-6 lg:pb-10 lg:pt-16">
        <div className="max-w-2xl space-y-6 text-white">
          <p
            className={
              isHome
                ? "text-sm font-medium text-white/90 sm:text-base"
                : "text-xs font-bold uppercase tracking-[0.35em] text-white/85 sm:text-sm"
            }
          >
            {district ? (
              <>
                Entrümpelung · <span className="text-brand-orange">{district.zip} Wien</span> · {district.name}
              </>
            ) : (
              <>Sofort zur Leerung in Wien & Umgebung</>
            )}
          </p>
          <h1
            className={
              isHome
                ? "text-balance text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-[3.25rem]"
                : "text-balance font-extrabold uppercase leading-none tracking-tight"
            }
          >
            {district ? (
              <>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-[3.65rem]">ENTRÜMPELUNG</span>
                <span className="mt-2 block text-3xl text-brand-orange sm:text-4xl lg:text-5xl xl:text-[3.1rem]">
                  {district.zip} WIEN
                </span>
                <span className="mt-2 block text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {district.name}
                </span>
              </>
            ) : (
              <>Professionelle Entrümpelung Wien zum Fixpreis</>
            )}
          </h1>
          {isHome ? (
            <h2 className="text-balance text-lg font-semibold leading-snug text-brand-orange sm:text-xl lg:text-2xl">
              Wohnungsentrümpelung Wien innerhalb 24h
            </h2>
          ) : (
            <p className="text-lg font-medium text-white">
              {`Festpreis nach Besichtigung · ${district!.name} (${district!.zip})`}
            </p>
          )}
          <p
            className={
              isHome
                ? "max-w-xl text-base leading-relaxed text-white/90"
                : "text-sm leading-relaxed text-white/90 sm:text-base"
            }
          >
            {district ? (
              <>
                Wir entrümpeln in {district.name} (PLZ {district.zip}) und im gesamten Stadtgebiet — inklusive
                fachgerechter Entsorgung und verbindlichem Festpreis nach Besichtigung.
              </>
            ) : (
              <>
                Wir räumen Wohnungen, Keller und Büros in Wien — ordentlich, mit fachgerechter Entsorgung und einem
                Festpreis, den Sie vorher kennen. Einfach anrufen oder eine Besichtigung vereinbaren.
              </>
            )}
          </p>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="#kontakt"
                className={
                  isHome
                    ? "inline-flex items-center justify-center gap-2 rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition hover:bg-[#ff8f26] hover:shadow-xl"
                    : "inline-flex items-center justify-center gap-2 rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition hover:bg-[#ff8f26] hover:shadow-xl"
                }
              >
                <Calendar className="h-5 w-5" aria-hidden />
                {isHome ? "Besichtigung vereinbaren" : "Gratis Besichtigung"}
              </Link>
              <a
                href={PHONE_TEL_HREF}
                className={
                  isHome
                    ? "inline-flex items-center justify-center gap-2 rounded-btn bg-black px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
                    : "inline-flex items-center justify-center gap-2 rounded-btn bg-black px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white ring-1 ring-white/15 transition hover:bg-white/10"
                }
              >
                <Phone className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden />
                Jetzt anrufen
              </a>
            </div>
            <div className="mt-3 flex w-full justify-center lg:hidden">
              <div className="w-[min(272px,calc(100dvw_-_1.5rem))] max-w-full scale-[0.9] sm:scale-95">
                {ratingBadge}
              </div>
            </div>
          </div>
          <p className="sr-only">{PHONE_DISPLAY}</p>
        </div>

        <div className="absolute bottom-5 right-12 hidden lg:block xl:bottom-6 xl:right-14">
          {ratingBadge}
        </div>
      </div>
    </section>
  );
}
