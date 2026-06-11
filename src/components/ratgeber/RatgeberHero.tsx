import type { ReactNode } from "react";
import HeroBackdrop from "@/components/HeroBackdrop";

type Props = {
  /** Optional — auf Artikel-Detailseiten weglassen (nur H1). */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  /** LCP auf Artikel-Detailseite */
  priority?: boolean;
};

/** Ratgeber Hero — gleiches Bild & Cropping wie die Startseite (`/hero.webp`). */
export default function RatgeberHero({ eyebrow, title, subtitle, footer, priority = false }: Props) {
  return (
    <section className="relative isolate min-h-[min(44svh,22rem)] overflow-hidden sm:min-h-[min(48svh,26rem)]">
      <HeroBackdrop priority={priority} />
      <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 pb-12 pt-28 text-white sm:px-5 sm:pb-14 sm:pt-32 lg:px-6 lg:pt-36">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">{eyebrow}</p>
        ) : null}
        <h1
          className={`max-w-4xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${eyebrow ? "mt-4" : ""}`}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">{subtitle}</p>
        ) : null}
        {footer ? <div className="mt-6">{footer}</div> : null}
      </div>
    </section>
  );
}
