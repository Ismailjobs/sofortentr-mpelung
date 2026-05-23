"use client";

import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  /** Max wait before mount if browser stays busy (ms). */
  timeoutMs?: number;
};

export default function DeferredIdle({ children, fallback = null, timeoutMs = 3200 }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(mount, { timeout: timeoutMs });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(mount, Math.min(timeoutMs, 1800));
    return () => window.clearTimeout(timer);
  }, [timeoutMs]);

  return ready ? children : fallback;
}
