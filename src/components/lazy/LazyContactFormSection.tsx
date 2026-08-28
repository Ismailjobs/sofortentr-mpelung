"use client";

import dynamic from "next/dynamic";
import type { ContactFormSectionProps } from "@/components/ContactFormSection";

export function ContactFormPlaceholder({ variant = "section" }: { variant?: "section" | "hero" } = {}) {
  if (variant === "hero") {
    return (
      <div
        id="kontakt-formular"
        aria-busy="true"
        aria-label="Kontaktformular wird geladen"
        className="min-h-[22rem] animate-pulse rounded-2xl bg-white/90 shadow-xl ring-1 ring-white/40"
      />
    );
  }
  return (
    <section
      id="kontakt-formular"
      aria-busy="true"
      aria-label="Kontaktformular wird geladen"
      className="form-section-warm scroll-mt-28 border-t border-brand-orange/10 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="min-h-[28rem] animate-pulse rounded-2xl bg-brand-muted/80" />
      </div>
    </section>
  );
}

function createLazyContactForm(variant: "section" | "hero" = "section") {
  return dynamic(() => import("@/components/ContactFormSection"), {
    loading: () => <ContactFormPlaceholder variant={variant} />,
    ssr: false,
  });
}

const ContactFormSectionSection = createLazyContactForm("section");
const ContactFormSectionHero = createLazyContactForm("hero");

export default function LazyContactFormSection(props: ContactFormSectionProps = {}) {
  const Comp = props.variant === "hero" ? ContactFormSectionHero : ContactFormSectionSection;
  return <Comp {...props} />;
}
