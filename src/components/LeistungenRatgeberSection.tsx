import Link from "next/link";
import { LEISTUNGEN_RATGEBER_GROUPS } from "@/data/leistungen-ratgeber-links";
import { RATGEBER_PATH } from "@/data/site-content";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LeistungenRatgeberSection() {
  return (
    <section
      className="border-t border-black/[0.06] bg-white py-16 sm:py-20"
      aria-labelledby="leistungen-ratgeber-heading"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Wissen & Tipps</p>
          <h2
            id="leistungen-ratgeber-heading"
            className="mt-3 text-balance text-[clamp(1.45rem,5vw,2.25rem)] font-extrabold tracking-tight text-brand-dark"
          >
            Ratgeber zu unseren Leistungen
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Praxisnahe Leitfäden zu Ablauf, Kosten, Rechtsfragen und Entsorgung in Wien — ergänzend zu unseren
            Entrümpelungsservices.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {LEISTUNGEN_RATGEBER_GROUPS.map((group) => (
            <div
              key={group.serviceHref}
              className="rounded-2xl border border-black/[0.06] bg-brand-muted/40 p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-7"
            >
              <Link
                href={group.serviceHref}
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-dark transition hover:text-brand-orange"
              >
                {group.serviceLabel}
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-start gap-2 text-sm leading-snug text-neutral-700 transition hover:text-brand-orange"
                    >
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href={RATGEBER_PATH}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange transition hover:text-[#ff8f26]"
          >
            Alle Ratgeber-Artikel ansehen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}
