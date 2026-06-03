import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HomeHashLink } from "@/components/HomeHashLink";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import FaqPageJsonLd from "@/components/FaqPageJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceIntroText from "@/components/ServiceIntroText";
import ServicePageReveal from "@/components/ServicePageReveal";
import SimilarServicesSection from "@/components/SimilarServicesSection";
import { pageTitleSegment } from "@/config/site-brand";
import { getSiteOrigin } from "@/config/site-url";
import { getRelatedServicesForSlug } from "@/data/related-services";
import { getServiceDetailPageData } from "@/data/service-page-details";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import { SERVICES } from "@/data/site-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetailPageData(slug);
  if (!service) {
    return { title: pageTitleSegment("Leistung nicht gefunden") };
  }
  const pageTitle = service.title.replace(/\u200b/g, "");
  const origin = getSiteOrigin();
  return {
    title: pageTitleSegment(`${pageTitle} Wien`),
    description: service.description,
    alternates: { canonical: `${origin}/leistungen/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceDetailPageData(slug);

  if (!service) {
    notFound();
  }

  const normalizedTitle = service.title.replace(/\u200b/g, "");
  const splitMatch = normalizedTitle.match(/entrümpelung/i);
  const splitIndex = splitMatch?.index ?? -1;
  const hasSplit = splitIndex > 0;
  const splitTop = hasSplit ? normalizedTitle.slice(0, splitIndex).replace(/[-\s]+$/, "") : normalizedTitle;
  const splitBottom = splitMatch?.[0] ?? "";
  const relatedServices = getRelatedServicesForSlug(slug);

  const schemaBreadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: normalizedTitle },
  ];

  return (
    <>
      <ServiceJsonLd service={service} breadcrumbs={schemaBreadcrumbs} />
      <FaqPageJsonLd items={service.faq} pageId={`leistung-faq-${slug}`} />
      <Header />
      <main className="bg-brand-muted">
        <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
          <Image
            src={service.imageSrc}
            alt=""
            aria-hidden
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={60}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-dark/78" />
          <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
              Entrümpelung Service
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
              {hasSplit ? (
                <>
                  <span className="title-single-over-550">{normalizedTitle}</span>
                  <span className="title-split-under-550">
                    {splitTop}
                    <br />
                    {splitBottom}
                  </span>
                </>
              ) : (
                normalizedTitle
              )}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-btn bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
              >
                Jetzt Termin anfragen
              </Link>
              <HomeHashLink
                href="/#leistungen"
                className="inline-flex items-center justify-center rounded-btn border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Alle Services ansehen
              </HomeHashLink>
              <Link
                href="/preise"
                className="inline-flex items-center justify-center rounded-btn border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Preise & Richtwerte
              </Link>
            </div>
          </div>
        </section>

        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Leistungen", href: "/leistungen" },
            { label: normalizedTitle },
          ]}
        />

        <section className="relative overflow-hidden border-t border-black/[0.04] bg-white py-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-brand-orange/[0.055] via-transparent to-transparent sm:h-44"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <div className="mx-auto max-w-3xl">
              <ServiceIntroText paragraphs={service.introParagraphs} />
            </div>
          </div>
        </section>

        <section className="pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
          <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
            <ServicePageReveal>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06] sm:p-8 lg:p-10">
                <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">Was ist inklusive?</h2>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  {service.includedBullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ServicePageReveal>
          </div>
        </section>

        <ServiceFaqSection id="leistung-faq" items={service.faq} />

        <SimilarServicesSection services={relatedServices} />

        <ContactPanel />
      </main>
      <LazyContactFormSection defaultServiceTypeId={slug} />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
