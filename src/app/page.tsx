import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import HomeNetworkRecommendations from "@/components/HomeNetworkRecommendations";
import HomeSeoClusterLinks from "@/components/HomeSeoClusterLinks";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import FaqPageJsonLd from "@/components/FaqPageJsonLd";
import AboutUsSection from "@/components/AboutUsSection";
import Hero from "@/components/Hero";
import LazyContactFormSection, { ContactFormPlaceholder } from "@/components/lazy/LazyContactFormSection";
import LazyTestimonialSlider, { TestimonialPlaceholder } from "@/components/lazy/LazyTestimonialSlider";
import DeferredIdle from "@/components/lazy/DeferredIdle";
import ProcedureSections from "@/components/ProcedureSections";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import { GENERAL_FAQ, HOME_SERVICES, TESTIMONIALS, TRUST_ITEMS } from "@/data/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Entrümpelung Wien ab 150€ | Sofort Entrümpelung zum Fixpreis",
  description:
    "Entrümpelung Wien zum Fixpreis: Hausentrümpelung & Hausräumung Wien, diskrete Messie Entrümpelung Wien. Inkl. Wertanrechnung — jetzt kostenlos anfragen!",
  path: "/",
});

/** Landing-Inhalte: werden hier gebündelt und per `map`/Props an Sektionen übergeben (@/data/site-content). */
const PAGE = {
  trust: TRUST_ITEMS,
  services: HOME_SERVICES,
  testimonials: TESTIMONIALS,
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FaqPageJsonLd items={GENERAL_FAQ} pageId="faq" />
      <Header />
      <main>
        <Hero />
        <TrustBar items={PAGE.trust} />
        <ServicesSection services={PAGE.services} showAllLink />
        <AboutUsSection />
        <WhyUs />
        <ProcedureSections />
        <DeferredIdle fallback={<TestimonialPlaceholder />}>
          <LazyTestimonialSlider testimonials={PAGE.testimonials} />
        </DeferredIdle>
        <ContactPanel />
      </main>
      <DeferredIdle fallback={<ContactFormPlaceholder />}>
        <LazyContactFormSection />
      </DeferredIdle>
      <HomeSeoClusterLinks />
      <HomeNetworkRecommendations />
      <Footer />
    </>
  );
}
