import { ChevronDown } from "lucide-react";
import type { ServiceFaqItem } from "@/data/service-page-details";

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  items: ServiceFaqItem[];
};

export default function ServiceFaqSection({
  id = "faq",
  eyebrow = "Fragen & Antworten",
  heading = "Häufige Fragen",
  items,
}: Props) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">{eyebrow}</p>
          <h2 id={`${id}-heading`} className="mt-3 text-2xl font-extrabold text-brand-dark sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Antworten auf typische Fragen zu Ablauf, Kosten und Organisation — bei Bedarf klären wir alles
            Weitere persönlich in einem kurzen Gespräch.
          </p>

          <div className="mt-10 space-y-3">
            {items.map((item, index) => (
              <details
                key={`${item.question}-${index}`}
                className="group rounded-2xl border border-black/[0.07] bg-white shadow-sm ring-black/[0.02] transition-[box-shadow] open:shadow-md open:ring-1 open:ring-brand-orange/25"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-brand-dark sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 text-pretty pr-2">{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand-orange transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-black/[0.06] px-5 pb-5 pt-0">
                  <p className="pt-4 text-sm leading-relaxed text-neutral-600 sm:text-[15px]">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
