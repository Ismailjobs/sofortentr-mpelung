import Link from "next/link";

type Props = {
  plzOrRegion: string;
  name: string;
  text: string;
  /** Link zum passenden Bezirks-Ratgeber, falls vorhanden */
  ratgeberHref?: string;
};

/** Bezirks-/Regions-spezifischer SEO-Intro unter der TrustBar. */
export default function LocationLocalIntro({ plzOrRegion, name, text, ratgeberHref }: Props) {
  return (
    <section
      aria-labelledby="location-local-intro-heading"
      className="border-b border-neutral-100 bg-white py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Vor Ort in {name}</p>
        <h2
          id="location-local-intro-heading"
          className="mt-3 max-w-3xl text-balance text-xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-2xl"
        >
          Entrümpelung {plzOrRegion} – {name}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">{text}</p>
        {ratgeberHref ? (
          <p className="mt-5">
            <Link
              href={ratgeberHref}
              className="font-semibold text-brand-orange underline decoration-brand-orange/40 underline-offset-4 transition-colors hover:text-brand-dark"
            >
              Ausführlicher Ratgeber für {name} ({plzOrRegion}) →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
