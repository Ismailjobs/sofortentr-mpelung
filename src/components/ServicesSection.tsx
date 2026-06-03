import ServiceCard from "@/components/ServiceCard";
import type { ServiceCardData } from "@/data/site-content";
import Link from "next/link";

type Props = {
  services: ServiceCardData[];
  showAllLink?: boolean;
  /** false: kein Eyebrow/Überschrift (z. B. wenn die Seite darüber schon ein Hero hat). */
  showSectionHeader?: boolean;
  /** z. B. bg-zinc-50 direkt unter dem Hero */
  sectionSurfaceClass?: string;
  /** Lokations-Landing: Teaser unter der Überschrift */
  sectionTeaser?: string;
};

export default function ServicesSection({
  services,
  showAllLink = false,
  showSectionHeader = true,
  sectionSurfaceClass = "bg-brand-muted",
  sectionTeaser,
}: Props) {
  const surface = sectionSurfaceClass.trim() || "bg-brand-muted";
  return (
    <section
      id="leistungen"
      className={
        showSectionHeader
          ? `${surface} py-20 sm:py-24`
          : `${surface} pb-20 pt-12 sm:pb-24 sm:pt-14`
      }
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        {showSectionHeader ? (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
              Unsere Entrümpelung
            </p>
            <h2 className="mt-3 text-balance text-[clamp(1.45rem,6.2vw,2.25rem)] font-extrabold uppercase leading-tight tracking-tight text-brand-dark">
              {showAllLink ? "Ausgewählte Entrümpelungsservices" : "Alle Entrümpelungsservices im Überblick"}
            </h2>
            {sectionTeaser ? (
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600">
                {sectionTeaser}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className={`grid gap-8 sm:grid-cols-2 xl:grid-cols-4 ${showSectionHeader ? "mt-14" : "mt-0"}`}>
          {services.map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>
        {showAllLink ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-btn bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-black"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
