import type { Metadata } from "next";
import { preload } from "react-dom";
import { sitePageTitle } from "@/config/site-brand";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import FaqPageJsonLd from "@/components/FaqPageJsonLd";
import AboutUsSection from "@/components/AboutUsSection";
import Hero from "@/components/Hero";
import LazyContactFormSection from "@/components/lazy/LazyContactFormSection";
import LazyTestimonialSlider from "@/components/lazy/LazyTestimonialSlider";
import ProcedureSections from "@/components/ProcedureSections";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { GENERAL_FAQ, HOME_SERVICES, TESTIMONIALS, TRUST_ITEMS } from "@/data/site-content";

preload("/hero.webp", { as: "image", fetchPriority: "high" });

export const metadata: Metadata = {
  title: sitePageTitle("Professionelle Entrümpelung Wien zum Fixpreis"),
  description:
    "Was kostet eine Entrümpelung? Wohnungsentrümpelung Wien innerhalb 24h. Wie läuft eine Wohnungsauflösung ab? Messie Wohnung reinigen & Entrümpelung nach Todesfall — Festpreis nach Besichtigung.",
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
      <FaqPageJsonLd items={GENERAL_FAQ} pageId="faq" />
      <Header />
      <main>
        <Hero />
        <TrustBar items={PAGE.trust} />
        <ServicesSection services={PAGE.services} showAllLink />
        <AboutUsSection />
        <WhyUs />
        <ProcedureSections />
        <LazyTestimonialSlider testimonials={PAGE.testimonials} />
        <ContactPanel />
      </main>
      <LazyContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
