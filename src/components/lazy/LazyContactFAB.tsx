"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ContactFAB = dynamic(() => import("@/components/ContactFAB"), {
  ssr: false,
  loading: () => null,
});

/**
 * ContactFAB erst nach Idle / kurzem Timeout — spart Early Hydration & INP.
 * Erscheint typisch innerhalb ~1–2 s; kein Layout-Shift (fixed, loading=null).
 */
export default function LazyContactFAB() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(mount, { timeout: 2200 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(mount, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <ContactFAB />;
}
