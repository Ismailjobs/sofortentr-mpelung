import { ChevronDown } from "lucide-react";
import type { ServiceFaqItem } from "@/data/service-page-details";

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** Kurzliste oberhalb der Accordion-Einträge (Startseiten-FAQ). */
  priorityQuestions?: string[];
  items: ServiceFaqItem[];
  className?: string;
  /** Verzierter Kopfbereich (Startseiten-FAQ) */
  headerVariant?: "simple" | "rich";
};

export default function ServiceFaqSection({
  id = "faq",
  eyebrow = "Fragen & Antworten",
  heading = "Häufige Fragen",
  intro = "Antworten auf typische Fragen zu Ablauf, Kosten und Organisation — bei Bedarf klären wir alles Weitere persönlich in einem kurzen Gespräch.",
  priorityQuestions = [],
  items,
  className = "",
  headerVariant = "simple",
}: Props) {
  const isRichHeader = headerVariant === "rich";

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl">
          {isRichHeader ? (
            <div className="relative mb-10 text-center sm:mb-12">
              <div
                className="pointer-events-none absolute inset-x-8 -top-4 h-16 rounded-full bg-brand-orange/[0.06] blur-2xl sm:inset-x-16"
                aria-hidden
              />
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <span
                  className="h-px w-12 bg-gradient-to-r from-transparent to-brand-orange/50 sm:w-16"
                  aria-hidden
                />
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-orange sm:text-base sm:tracking-[0.32em]">
                  {eyebrow}
                </p>
                <span
                  className="h-px w-12 bg-gradient-to-l from-transparent to-brand-orange/50 sm:w-16"
                  aria-hidden
                />
              </div>
              <h2
                id={`${id}-heading`}
                className="mt-4 text-balance text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl"
              >
                {heading}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                {intro}
              </p>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p>
              <h2 id={`${id}-heading`} className="mt-3 text-2xl font-extrabold text-brand-dark sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{intro}</p>
            </>
          )}

          {priorityQuestions.length > 0 ? (
            <ul className={`flex flex-wrap justify-center gap-2 ${isRichHeader ? "mb-8" : "mb-6 mt-6"}`}>
              {priorityQuestions.map((question) => (
                <li
                  key={question}
                  className="rounded-full bg-brand-orange/10 px-3 py-1.5 text-xs font-semibold text-brand-dark ring-1 ring-brand-orange/20 sm:text-sm"
                >
                  {question}
                </li>
              ))}
            </ul>
          ) : null}

          <div className={`space-y-3 ${isRichHeader || priorityQuestions.length > 0 ? "" : "mt-10"}`}>
            {items.map((item, index) => (
              <details
                key={`${item.question}-${index}`}
                className="group rounded-2xl border border-black/[0.07] bg-white shadow-sm ring-black/[0.02] transition-[box-shadow] duration-300 open:shadow-md open:ring-1 open:ring-brand-orange/25 motion-reduce:transition-none"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-brand-dark sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 text-pretty pr-2">{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 ease-out motion-reduce:duration-0 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-open:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <div className="-translate-y-1 border-t border-black/[0.06] px-5 pb-5 opacity-0 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none group-open:translate-y-0 group-open:opacity-100">
                      <p className="pt-4 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
