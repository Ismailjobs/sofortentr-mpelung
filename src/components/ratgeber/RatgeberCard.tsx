import Link from "next/link";
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
>;

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

/** Listenkarte ohne Kapakbild — Titel + Kurztext (excerpt). */
export default function RatgeberCard({
  slug,
  title,
  excerpt,
  freshnessExcerpt,
  publishedAt,
  updateDay,
  readingTimeMinutes,
}: Props) {
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

  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7">
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

      <h2 className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-brand-dark group-hover:text-brand-orange sm:text-2xl">
        <Link href={`${RATGEBER_PATH}/${slug}`} className="outline-none focus-visible:underline">
          {title}
        </Link>
      </h2>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
        {displayExcerpt}
      </p>

      <Link
        href={`${RATGEBER_PATH}/${slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange transition hover:text-[#ff8f26]"
      >
        Artikel lesen →
      </Link>
    </article>
  );
}
