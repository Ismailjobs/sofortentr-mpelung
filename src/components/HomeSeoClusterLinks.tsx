import Link from "next/link";
import { HOME_SEO_CLUSTER_LINKS } from "@/data/seo-keyword-primary-map";

/** Dezente interne Cluster-Links unter dem Hauptinhalt — stärkt High-Keywords ohne Spam. */
export default function HomeSeoClusterLinks() {
  return (
    <section
      aria-labelledby="home-seo-cluster-links"
      className="border-t border-black/[0.06] bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <h2
          id="home-seo-cluster-links"
          className="text-center text-xs font-bold uppercase tracking-[0.28em] text-neutral-500"
        >
          Entrümpelung Wien — Leistungen & Ratgeber
        </h2>
        <ul className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-neutral-700 sm:gap-x-5">
          {HOME_SEO_CLUSTER_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-medium text-brand-dark underline decoration-brand-orange/35 underline-offset-[3px] transition hover:text-brand-orange hover:decoration-brand-orange"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
