import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { RATGEBER_PATH } from "@/data/ratgeber/registry";
import {
  getRatgeberDisplayExcerpt,
  getRatgeberEffectiveUpdatedAt,
  ratgeberShowsAsUpdated,
} from "@/lib/ratgeber-dates";

type Props = Pick<
  RatgeberArticleMeta,
  | "slug"
  | "title"
  | "excerpt"
  | "freshnessExcerpt"
  | "publishedAt"
  | "updateDay"
  | "readingTimeMinutes"
  | "imageSrc"
  | "imageAlt"
> & {
  headingLevel?: "h2" | "h3";
  /** Startseite: große Karte quer, Listen: hochkant. */
  layout?: "vertical" | "horizontal";
};

function formatDate(iso: string): string {
  try {
    return new Date(`${iso}T12:00:00.000Z`).toLocaleDateString("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

/** Listenkarte — mit Kapakbild, falls `imageSrc` gesetzt. */
export default function RatgeberCard({
  slug,
  title,
  excerpt,
  freshnessExcerpt,
  publishedAt,
  updateDay,
  readingTimeMinutes,
  imageSrc,
  imageAlt,
  headingLevel = "h2",
  layout = "vertical",
}: Props) {
  const TitleTag = headingLevel;
  const articleRef = { slug, publishedAt, updateDay };
  const displayExcerpt = getRatgeberDisplayExcerpt({
    excerpt,
    freshnessExcerpt,
    slug,
    publishedAt,
    updateDay,
  });
  const isUpdated = ratgeberShowsAsUpdated(articleRef);
  const displayDate = isUpdated
    ? getRatgeberEffectiveUpdatedAt(articleRef)
    : publishedAt.slice(0, 10);
  const dateLabel = isUpdated ? "Aktualisiert" : "Veröffentlicht";

  const isHorizontal = layout === "horizontal";

  return (
    <article
      className={`group flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        isHorizontal ? "flex-col sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]" : "h-full flex-col"
      }`}
    >
      {imageSrc ? (
        <Link
          href={`${RATGEBER_PATH}/${slug}`}
          className={`relative block bg-brand-muted ${
            isHorizontal ? "min-h-[14rem] h-full sm:min-h-[18rem]" : "aspect-[16/10] w-full"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes={
              isHorizontal
                ? "(max-width: 639px) 100vw, 520px"
                : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 540px"
            }
            quality={68}
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      ) : null}

      <div className={`flex flex-1 flex-col ${isHorizontal ? "justify-center px-5 py-7 sm:px-8 sm:py-10" : "p-6 sm:p-7"}`}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
          <span>
            {dateLabel}{" "}
            <time dateTime={displayDate}>{formatDate(displayDate)}</time>
          </span>
        </span>
        {readingTimeMinutes ? (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-orange" aria-hidden />
            ca. {readingTimeMinutes} Min.
          </span>
        ) : null}
      </div>

      <TitleTag className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-brand-dark group-hover:text-brand-orange sm:text-2xl">
        <Link href={`${RATGEBER_PATH}/${slug}`} className="outline-none focus-visible:underline">
          {title}
        </Link>
      </TitleTag>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
        {displayExcerpt}
      </p>

      <Link
        href={`${RATGEBER_PATH}/${slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange transition hover:text-[#ff8f26]"
      >
        Artikel lesen →
      </Link>
      </div>
    </article>
  );
}
