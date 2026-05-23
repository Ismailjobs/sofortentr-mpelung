"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";
import { resolveHomeHashHref } from "@/lib/nav-href";

function Logo({ homeStartHref }: { homeStartHref: string }) {
  return (
    <Link
      href={homeStartHref}
      className="block h-[clamp(3.75rem,14vw,5.1rem)] w-[clamp(10rem,min(72vw,calc(100dvw_-_7.5rem)),19rem)] max-w-full min-w-0 shrink-0 sm:h-[4.25rem] sm:w-[280px] md:h-[4.8rem] md:w-[320px] min-[1148px]:h-[5.2rem] min-[1148px]:w-[360px]"
    >
      <Image
        src="/sofort-logo.webp"
        alt="SofortEntrümpelung Logo"
        width={620}
        height={150}
        priority
        className="h-full w-full object-contain object-left"
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#start");

  useEffect(() => {
    if (pathname !== "/") return;
    const syncHash = () => setActiveHash(window.location.hash || "#start");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/leistungen") {
      return pathname.startsWith("/leistungen");
    }
    if (href === "/preise") {
      return pathname.startsWith("/preise");
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && href.slice(1) === activeHash;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-brand-dark shadow-md">
      <div className="mx-auto flex min-w-0 max-w-[min(100%,88rem)] items-center justify-between gap-3 py-2.5 pl-1 pr-3 pb-3 sm:gap-6 sm:py-2 sm:pb-2.5 sm:pl-3 sm:pr-5 min-[1148px]:grid min-[1148px]:grid-cols-[auto_1fr_auto] min-[1148px]:items-center min-[1148px]:gap-10 min-[1148px]:px-6 min-[1148px]:py-1">
        <div className="min-w-0 flex-1 min-[1148px]:flex-none min-[1148px]:min-w-0">
          <Logo homeStartHref={resolveHomeHashHref(pathname, "/#start")} />
        </div>

        <nav
          className="hidden min-[1148px]:flex min-[1148px]:flex-wrap min-[1148px]:items-center min-[1148px]:justify-center min-[1148px]:gap-x-10"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={resolveHomeHashHref(pathname, href)}
              className={
                isActiveLink(href)
                  ? "text-sm font-semibold text-brand-orange"
                  : "text-sm font-medium text-white/95 transition-colors hover:text-brand-orange"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={PHONE_TEL_HREF}
            className="hidden min-w-[9rem] items-center gap-3 rounded-btn border border-brand-orange/70 bg-transparent px-4 py-2 text-brand-orange shadow-sm transition-colors hover:bg-brand-orange/10 sm:flex"
          >
            <Phone className="h-6 w-6 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-sm font-semibold">{PHONE_DISPLAY}</span>
              <span className="text-[11px] text-brand-orange/80">Jetzt anrufen!</span>
            </span>
          </a>

          <button
            type="button"
            className="inline-flex min-[1148px]:hidden items-center justify-center rounded-btn border border-white/15 p-2 text-white transition-colors hover:bg-white/5"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`relative h-6 w-6 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                open ? "rotate-90" : "rotate-0"
              }`}
              aria-hidden
            >
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out motion-reduce:transition-none ${
                  open ? "scale-75 rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 -rotate-90 transition-all duration-300 ease-out motion-reduce:transition-none ${
                  open ? "scale-100 rotate-0 opacity-100" : "scale-75 opacity-0"
                }`}
              />
            </span>
            <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`relative z-[110] min-[1148px]:hidden grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="min-h-0 overflow-hidden border-t border-white/10 bg-brand-dark">
          <div
            className={`px-3 py-4 sm:px-5 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={resolveHomeHashHref(pathname, href)}
                  onClick={() => setOpen(false)}
                  className={
                    isActiveLink(href)
                      ? "text-base font-semibold text-brand-orange"
                      : "text-base font-medium text-white/95 transition-colors hover:text-brand-orange"
                  }
                >
                  {label}
                </Link>
              ))}
              <a
                href={PHONE_TEL_HREF}
                className="mt-2 inline-flex items-center gap-2 rounded-btn border border-brand-orange px-4 py-3 text-brand-orange"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{PHONE_DISPLAY}</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
