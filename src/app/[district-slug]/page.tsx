import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { getSiteOrigin } from "@/config/site-url";
import { VIENNA_DISTRICTS, getDistrictBySlug } from "@/data/vienna-districts";
import { HOME_SERVICES, TESTIMONIALS, TRUST_ITEMS } from "@/data/site-content";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ "district-slug": string }>;
};

const PAGE = {
  trust: TRUST_ITEMS,
  services: HOME_SERVICES,
  testimonials: TESTIMONIALS,
};

export function generateStaticParams() {
  return VIENNA_DISTRICTS.map((d) => ({ "district-slug": d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "district-slug": slug } = await params;
  const d = getDistrictBySlug(slug);
  if (!d) {
    return { title: "Entrümpelung Wien" };
  }
  const title = `Entrümpelung ${d.zip} Wien ${d.name} | Sofort Entrümpelung - Festpreis`;
  const description = `Professionelle Entrümpelung in ${d.zip} Wien ${d.name}. Wir bieten schnelle Termine, kostenlose Besichtigung und garantierte Festpreise für Ihre Räumung.`;
  const base = getSiteOrigin();
  return {
    title,
    description,
    alternates: { canonical: `${base}/${d.slug}` },
  };
}

export default async function ViennaDistrictLandingPage({ params }: PageProps) {
  const { "district-slug": slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Hero district={{ zip: district.zip, name: district.name }} />
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
