import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BreadcrumbListJsonLd from "@/components/BreadcrumbListJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcedureSections from "@/components/ProcedureSections";
import ServicesSection from "@/components/ServicesSection";
import LazyTestimonialSlider from "@/components/lazy/LazyTestimonialSlider";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import LazyWhatsAppFAB from "@/components/lazy/LazyWhatsAppFAB";
import { getAllLocationSlugs, getLocationBySlug } from "@/data/location-landings";
import { HOME_SERVICES, TESTIMONIALS, TRUST_ITEMS } from "@/data/site-content";
import { buildLocationMetadata } from "@/lib/location-metadata";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ "location-slug": string }>;
};

const PAGE = {
  trust: TRUST_ITEMS,
  services: HOME_SERVICES,
  testimonials: TESTIMONIALS,
};

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ "location-slug": slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "location-slug": slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    return { title: "Entrümpelung Wien & Umgebung" };
  }
  return buildLocationMetadata(location);
}

function breadcrumbLabel(location: NonNullable<ReturnType<typeof getLocationBySlug>>): string {
  if (location.kind === "district") {
    const d = location.district;
    return `Entrümpelung Wien ${d.zip} ${d.name}`;
  }
  return `Entrümpelung ${location.region.name}`;
}

export default async function LocationLandingPage({ params }: PageProps) {
  const { "location-slug": slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    notFound();
  }

  const breadcrumbs = [{ label: "Startseite", href: "/" }, { label: breadcrumbLabel(location) }];

  return (
    <>
      <BreadcrumbListJsonLd items={breadcrumbs} id={`breadcrumb-${slug}`} />
      <Header />
      <main>
        <Breadcrumbs items={breadcrumbs} className="border-b border-black/[0.06]" />
        {location.kind === "district" ? (
          <Hero district={{ zip: location.district.zip, name: location.district.name }} />
        ) : (
          <Hero region={{ name: location.region.name, tagline: location.region.tagline }} />
        )}
        <TrustBar items={PAGE.trust} />
        <ServicesSection services={PAGE.services} showAllLink />
        <WhyUs />
        <ProcedureSections />
        <LazyTestimonialSlider testimonials={PAGE.testimonials} />
        <ContactPanel />
      </main>
      <LazyContactFormSection />
      <Footer />
      <LazyWhatsAppFAB />
    </>
  );
}
