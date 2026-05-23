"use client";

import dynamic from "next/dynamic";
import type { Testimonial } from "@/data/site-content";

export function TestimonialPlaceholder() {
  return (
    <div
      className="mx-auto min-h-[18rem] max-w-[min(100%,88rem)] animate-pulse rounded-2xl bg-brand-muted/60 px-3 sm:px-5 lg:px-6"
      aria-hidden
    />
  );
}

const TestimonialSlider = dynamic(() => import("@/components/TestimonialSlider"), {
  loading: () => <TestimonialPlaceholder />,
  ssr: false,
});

export default function LazyTestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  return <TestimonialSlider testimonials={testimonials} />;
}
