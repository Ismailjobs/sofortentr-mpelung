import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import { sitePageTitle } from "@/config/site-brand";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import AboutUsSection from "@/components/AboutUsSection";
import Hero from "@/components/Hero";
import ProcedureSections from "@/components/ProcedureSections";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { HOME_SERVICES, TESTIMONIALS, TRUST_ITEMS } from "@/data/site-content";

export const metadata: Metadata = {
  title: sitePageTitle("Startseite · Entrümpelung Wien"),
};

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
      <Header />
      <main>
        <Hero />
        <TrustBar items={PAGE.trust} />
        <ServicesSection services={PAGE.services} showAllLink />
        <AboutUsSection />
        <WhyUs />
        <ProcedureSections />
        <TestimonialSlider testimonials={PAGE.testimonials} />
        <ContactPanel />
      </main>
      <ContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
