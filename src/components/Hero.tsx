import { Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";

const HERO_IMG = "/hero.webp";

const HERO_OBJECT =
  "object-cover object-[58%_64%] sm:object-[64%_64%] md:object-[54%_65%] lg:object-[42%_65%] xl:object-[24%_66%] 2xl:object-[8%_66%]";

export default function Hero() {
  const ratingBadge = (
    <div className="flex w-[272px] items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-brand-dark shadow-xl ring-1 ring-black/10">
      <Image src="/google-logo.svg" alt="Google" width={40} height={40} className="h-10 w-10 shrink-0" />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold leading-none">5.0</span>
          <div className="flex items-center gap-0.5 text-[#fbbc04]" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="star-shimmer h-3.5 w-3.5 fill-current stroke-current"
                style={{ animationDelay: `${i * 170}ms` }}
              />
            ))}
          </div>
        </div>
        <p className="mt-0.5 text-sm font-semibold text-neutral-600">200+ Kundenbewertungen</p>
      </div>
    </div>
  );

  return (
    <section id="start" className="relative isolate min-h-[min(72svh,40rem)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className={HERO_OBJECT}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/92 via-brand-dark/70 to-brand-dark/30" />
      </div>

      <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 pb-8 pt-24 sm:px-5 sm:pb-9 sm:pt-14 lg:px-6 lg:pb-10 lg:pt-16">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/85 sm:text-sm">
            Sofort zur Leerung · Wien & Umgebung
          </p>
          <h1 className="text-balance font-extrabold uppercase leading-none tracking-tight">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-[3.65rem]">
              ENTRÜMPELUNG
            </span>
            <span className="mt-2 block text-4xl text-brand-orange sm:text-5xl lg:text-6xl xl:text-[3.65rem]">
              IN WIEN
            </span>
          </h1>
          <p className="text-lg font-medium text-white">Schnell. Zuverlässig. Günstig.</p>
          <p className="text-sm leading-relaxed text-white/90 sm:text-base">
            Wir räumen Apartments, Reihenhäuser, Keller und Büroflächen — inklusive
            fachgerechter Entsorgung und klar kommuniziertem Festpreis.
          </p>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition hover:bg-[#ff8f26] hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" aria-hidden />
                Gratis Besichtigung
              </Link>
              <a
                href={PHONE_TEL_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white ring-1 ring-white/15 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden />
                Jetzt anrufen
              </a>
            </div>
            <div className="mt-3 flex w-full justify-center lg:hidden">
              <div className="w-[min(272px,calc(100vw-1.5rem))] scale-[0.9] sm:scale-95">
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
