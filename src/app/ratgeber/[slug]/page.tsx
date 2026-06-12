import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import RatgeberArticleJsonLd from "@/components/ratgeber/RatgeberArticleJsonLd";
import RelatedRatgeberSection from "@/components/ratgeber/RelatedRatgeberSection";
import RatgeberHero from "@/components/ratgeber/RatgeberHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import { pageTitleSegment } from "@/config/site-brand";
import {
  getAllRatgeberSlugs,
  getRatgeberArticle,
  getRelatedRatgeberArticles,
  RATGEBER_PATH,
} from "@/data/ratgeber/registry";
import {
  getRatgeberDisplayExcerpt,
  getRatgeberEffectiveUpdatedAt,
  ratgeberShowsAsUpdated,
} from "@/lib/ratgeber-dates";
import { buildRatgeberArticleMetadata } from "@/lib/ratgeber-seo";

/** Täglich neu berechnen — rollierendes Aktualisierungsdatum bleibt im aktuellen Monat. */
export const revalidate = 86_400;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRatgeberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);
  if (!article) {
    return { title: pageTitleSegment("Artikel nicht gefunden") };
  }
  return buildRatgeberArticleMetadata(article);
}

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

export default async function RatgeberArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);

  if (!article) {
    notFound();
  }

  const { Component, ...meta } = article;
  const related = getRelatedRatgeberArticles(slug);
  const modified = getRatgeberEffectiveUpdatedAt(meta);
  const showsUpdated = ratgeberShowsAsUpdated(meta);

  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Ratgeber", href: RATGEBER_PATH },
    { label: meta.title },
  ];

  const heroMeta = (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
      <span className="inline-flex items-center gap-2">
        <Calendar className="h-4 w-4 text-brand-orange" aria-hidden />
        <span>
          Veröffentlicht <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
        </span>
      </span>
      {showsUpdated ? (
        <span>
          Aktualisiert <time dateTime={modified}>{formatDate(modified)}</time>
        </span>
      ) : null}
      {meta.readingTimeMinutes ? (
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand-orange" aria-hidden />
          ca. {meta.readingTimeMinutes} Min. Lesezeit
        </span>
      ) : null}
      <Link
        href="#kontakt-formular"
        className="mt-2 inline-flex w-full items-center justify-center rounded-btn bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26] sm:mt-0 sm:ml-auto sm:w-auto"
      >
        Kostenlos anfragen
      </Link>
    </div>
  );

  return (
    <>
      <RatgeberArticleJsonLd article={meta} breadcrumbs={breadcrumbs} />
      <Header />
      <main className="bg-brand-muted">
        <RatgeberHero
          title={meta.title}
          subtitle={getRatgeberDisplayExcerpt(meta)}
          footer={heroMeta}
          priority
        />

        <Breadcrumbs items={breadcrumbs} />

        <article
          className="border-t border-black/[0.04] bg-white py-14 sm:py-20 lg:py-24"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <meta itemProp="headline" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="datePublished" content={meta.publishedAt} />
          <meta itemProp="dateModified" content={modified} />
          <div className="mx-auto max-w-3xl px-3 sm:px-5 md:max-w-4xl lg:max-w-[52rem] lg:px-8 xl:max-w-[58rem]">
            <Component />
          </div>
        </article>

        <RelatedRatgeberSection articles={related} />
        <ContactPanel />
        <LazyContactFormSection />
      </main>
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
