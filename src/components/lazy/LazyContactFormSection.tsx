"use client";

import dynamic from "next/dynamic";
import type { ContactFormSectionProps } from "@/components/ContactFormSection";

export function ContactFormPlaceholder() {
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

const ContactFormSection = dynamic(() => import("@/components/ContactFormSection"), {
  loading: () => <ContactFormPlaceholder />,
  ssr: false,
});

export default function LazyContactFormSection(props: ContactFormSectionProps = {}) {
  return <ContactFormSection {...props} />;
}
