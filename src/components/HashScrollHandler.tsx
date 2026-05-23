"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string, attempt = 0) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attempt < 12) {
    requestAnimationFrame(() => scrollToHash(hash, attempt + 1));
  }
}

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) return;
    scrollToHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
