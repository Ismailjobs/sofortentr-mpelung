import Link from "next/link";
import RatgeberCard from "@/components/ratgeber/RatgeberCard";
import {
  getHomeLeadRatgeber,
  getHomeRegionRatgeberArticles,
  RATGEBER_PATH,
} from "@/data/ratgeber/registry";

/** Startseite: eine querliegende Karte, darunter zwei regionale Ratgeber hochkant. */
export default function HomeRatgeberSection() {
  const lead = getHomeLeadRatgeber();
  const regions = getHomeRegionRatgeberArticles();
  if (!lead && regions.length === 0) return null;

  return (
    <section
      aria-labelledby="home-ratgeber"
      className="border-t border-black/[0.04] bg-brand-muted py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
            Wissen & Tipps
          </p>
          <h2
            id="home-ratgeber"
            className="mt-3 text-balance text-[clamp(1.45rem,6.2vw,2.25rem)] font-extrabold uppercase leading-tight tracking-tight text-brand-dark"
          >
            Aus dem Ratgeber
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600">
            Praxisnahe Antworten zu Entrümpelung, Kosten und Ablauf in Wien und Umgebung — verständlich
            und ohne Umwege.
          </p>
        </div>

        <div className="mt-12 space-y-6 lg:space-y-8">
          {lead ? <RatgeberCard {...lead} headingLevel="h3" layout="horizontal" /> : null}

          {regions.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {regions.map((article) => (
                <li key={article.slug}>
                  <RatgeberCard {...article} headingLevel="h3" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={RATGEBER_PATH}
            className="inline-flex items-center justify-center rounded-btn bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-black"
          >
            Weitere Ratgeber ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
