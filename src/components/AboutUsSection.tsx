import Link from "next/link";
import {
  ABOUT_US_EYEBROW,
  ABOUT_US_HEADLINE,
  ABOUT_US_HIGHLIGHTS,
  ABOUT_US_PARAGRAPHS,
  ABOUT_US_PROFESSIONAL,
  ABOUT_US_PROFESSIONAL_TITLE,
  ABOUT_US_SUBHEADLINE,
} from "@/data/site-content";

export default function AboutUsSection() {
  return (
    <section
      id="ueber-uns"
      className="scroll-mt-28 border-t border-neutral-200/80 bg-gradient-to-b from-brand-muted/30 via-white to-brand-muted/25 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
              {ABOUT_US_EYEBROW}
            </p>
            <h2 className="mt-3 text-balance text-[clamp(1.5rem,5vw,2.35rem)] font-extrabold leading-tight tracking-tight text-brand-dark">
              {ABOUT_US_HEADLINE}
            </h2>
            <p className="mt-4 text-lg font-medium leading-snug text-neutral-700">{ABOUT_US_SUBHEADLINE}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {ABOUT_US_HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm ring-1 ring-black/[0.02] transition duration-300 hover:border-brand-orange/25 hover:shadow-md hover:ring-brand-orange/15"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-black">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-brand-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -left-3 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent lg:block"
              aria-hidden
            />
            <div className="space-y-6 lg:pl-6">
              {ABOUT_US_PARAGRAPHS.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-pretty border-l-[3px] border-brand-orange/35 pl-5 text-base leading-relaxed text-neutral-700 sm:border-l-4 sm:pl-6 sm:text-[1.0625rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-brand-dark p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">
                {ABOUT_US_PROFESSIONAL_TITLE}
              </p>
              <ul className="mt-5 space-y-3.5">
                {ABOUT_US_PROFESSIONAL.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/90 sm:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,122,0,0.6)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#kontakt"
                className="mt-8 inline-flex items-center justify-center rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
              >
                Kostenlose Besichtigung anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
