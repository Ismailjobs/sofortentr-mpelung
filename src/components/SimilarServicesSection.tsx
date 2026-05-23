import type { ServiceCardData } from "@/data/site-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  services: ServiceCardData[];
};

export default function SimilarServicesSection({ services }: Props) {
  if (services.length === 0) return null;

  return (
    <section
      className="border-t border-black/[0.06] bg-brand-muted py-12 sm:py-14"
      aria-labelledby="similar-services-heading"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-orange">Weitere Leistungen</p>
          <h2 id="similar-services-heading" className="mt-2 text-xl font-extrabold text-brand-dark sm:text-2xl">
            Das könnte Sie auch interessieren
          </h2>

          <ul className="mt-6 overflow-hidden rounded-xl bg-white ring-1 ring-black/[0.06]">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              const title = svc.title.replace(/\u200b/g, "");

              return (
                <li
                  key={svc.id}
                  className={index < services.length - 1 ? "border-b border-neutral-100" : undefined}
                >
                  <Link
                    href={`/leistungen/${svc.id}`}
                    className="group flex items-center gap-3 px-4 py-3.5 transition hover:bg-brand-muted/60 sm:gap-4 sm:px-5 sm:py-4"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-black">
                      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-brand-dark group-hover:text-brand-orange">
                        {title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-neutral-500 sm:text-sm">
                        {svc.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-brand-orange"
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-center">
            <Link
              href="/leistungen"
              className="text-sm font-semibold text-brand-orange transition hover:text-[#ff8f26]"
            >
              Alle Leistungen →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
