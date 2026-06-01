"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/components/GoogleAnalytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsPageViewsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || typeof window.gtag !== "function") return;
    const qs = searchParams.toString();
    const pagePath = qs ? `${pathname}?${qs}` : pathname;
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath });
  }, [pathname, searchParams]);

  return null;
}

/** SPA-Navigation: sendet bei Client-Routenwechsel ein GA4 page_view. */
export default function GoogleAnalyticsPageViews() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsPageViewsInner />
    </Suspense>
  );
}
