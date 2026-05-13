import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  icon: Icon,
}: ServiceCardProps) {
  const normalizedTitle = title.replace(/\u200b/g, "");

  return (
    <article className="group relative z-0 flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full">
        <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/45 to-transparent" />
        </div>
        <span className="absolute bottom-[-1.85rem] left-1/2 z-40 flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 items-center justify-center rounded-full bg-brand-orange shadow-lg ring-[6px] ring-white transition group-hover:bg-[#ff8f26]">
          <Icon className="h-9 w-9 text-black" aria-hidden strokeWidth={1.6} />
        </span>
      </div>

      <div className="relative z-0 flex flex-1 flex-col px-5 pb-7 pt-10 text-brand-dark">
        <h3 className="mx-auto max-w-full text-center text-[clamp(0.95rem,2.2vw,1.125rem)] font-bold leading-tight">
          {normalizedTitle}
        </h3>
        <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-neutral-600">{description}</p>
        <Link
          href={`/leistungen/${id}`}
          className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange transition hover:text-[#ff8f26]"
        >
          Mehr erfahren →
        </Link>
      </div>
    </article>
  );
}
