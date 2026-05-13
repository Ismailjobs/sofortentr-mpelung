import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import { sitePageTitle } from "@/config/site-brand";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SERVICES } from "@/data/site-content";

export const metadata: Metadata = {
  title: sitePageTitle("Leistungen"),
  description:
    "Haus-, Wohnungs-, Keller- und Büroentrümpelung in Wien — alle Services im Überblick.",
};

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesSection services={SERVICES} />
        <ContactPanel />
      </main>
      <ContactFormSection />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
