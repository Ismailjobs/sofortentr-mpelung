import Image from "next/image";

/** Homepage hero image — shared object-position breakpoints for consistent crop/zoom. */
const HERO_BG_SRC = "/hero.webp";

const HERO_OBJECT_POSITION =
  "object-cover object-[58%_64%] sm:object-[64%_64%] md:object-[54%_65%] lg:object-[42%_65%] xl:object-[24%_66%] 2xl:object-[8%_66%]";

type Props = {
  /** LCP: nur auf der Startseite aktivieren. */
  priority?: boolean;
  className?: string;
};

export default function HeroBackdrop({ priority = false, className = "" }: Props) {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <Image
        src={HERO_BG_SRC}
        alt="Professionelle Entrümpelung in Wien — Hintergrundbild"
        fill
        sizes="100vw"
        priority={priority}
        className={HERO_OBJECT_POSITION}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/92 via-brand-dark/70 to-brand-dark/30" />
    </div>
  );
}
