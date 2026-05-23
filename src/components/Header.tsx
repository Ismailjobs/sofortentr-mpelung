import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";
import { SITE_LOGO_SIZES } from "@/lib/image-sizes";

const MOBILE_NAV_ID = "mobile-nav-toggle";

export default function Header() {
  return (
    <header className="group/nav sticky top-0 z-[100] border-b border-white/10 bg-brand-dark shadow-md">
      <input type="checkbox" id={MOBILE_NAV_ID} className="peer sr-only" tabIndex={-1} />

      <div className="mx-auto flex min-w-0 max-w-[min(100%,88rem)] items-center justify-between gap-3 py-2.5 pl-1 pr-3 pb-3 sm:gap-6 sm:py-2 sm:pb-2.5 sm:pl-3 sm:pr-5 min-[1148px]:grid min-[1148px]:grid-cols-[auto_1fr_auto] min-[1148px]:items-center min-[1148px]:gap-10 min-[1148px]:px-6 min-[1148px]:py-1">
        <div className="min-w-0 flex-1 min-[1148px]:flex-none min-[1148px]:min-w-0">
          <Link
            href="/#start"
            className="block h-[clamp(3.75rem,14vw,5.1rem)] w-[clamp(10rem,min(72vw,calc(100dvw_-_7.5rem)),19rem)] max-w-full min-w-0 shrink-0 sm:h-[4.25rem] sm:w-[280px] md:h-[4.8rem] md:w-[320px] min-[1148px]:h-[5.2rem] min-[1148px]:w-[360px]"
          >
            <Image
              src="/sofort-logo.webp"
              alt="SofortEntrümpelung Logo"
              width={360}
              height={87}
              sizes={SITE_LOGO_SIZES}
              quality={75}
              priority
              className="h-full w-full object-contain object-left"
            />
          </Link>
        </div>

        <nav
          className="hidden min-[1148px]:flex min-[1148px]:flex-wrap min-[1148px]:items-center min-[1148px]:justify-center min-[1148px]:gap-x-10"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/95 transition-colors hover:text-brand-orange"
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

          <label
            htmlFor={MOBILE_NAV_ID}
            className="inline-flex min-[1148px]:hidden cursor-pointer items-center justify-center rounded-btn border border-white/15 p-2 text-white transition-colors hover:bg-white/5"
            aria-controls="mobile-menu"
          >
            <span
              className="relative h-6 w-6 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:rotate-90"
              aria-hidden
            >
              <Menu className="absolute inset-0 h-6 w-6 transition-all duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:scale-75 group-has-[#mobile-nav-toggle:checked]/nav:rotate-45 group-has-[#mobile-nav-toggle:checked]/nav:opacity-0" />
              <X className="absolute inset-0 h-6 w-6 -rotate-90 scale-75 opacity-0 transition-all duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:scale-100 group-has-[#mobile-nav-toggle:checked]/nav:rotate-0 group-has-[#mobile-nav-toggle:checked]/nav:opacity-100" />
            </span>
            <span className="sr-only">Menü öffnen</span>
          </label>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="relative z-[110] grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none min-[1148px]:hidden peer-checked:grid-rows-[1fr] peer-checked:[&_.mobile-nav-inner]:visible peer-checked:[&_.mobile-nav-inner]:pointer-events-auto peer-checked:[&_.mobile-nav-inner]:translate-y-0 peer-checked:[&_.mobile-nav-inner]:opacity-100"
      >
        <div className="min-h-0 overflow-hidden border-t border-white/10 bg-brand-dark">
          <div className="mobile-nav-inner invisible pointer-events-none px-3 py-4 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none -translate-y-2 sm:px-5">
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <label key={href} htmlFor={MOBILE_NAV_ID} className="cursor-pointer">
                  <Link
                    href={href}
                    className="block text-base font-medium text-white/95 transition-colors hover:text-brand-orange"
                  >
                    {label}
                  </Link>
                </label>
              ))}
              <label htmlFor={MOBILE_NAV_ID} className="cursor-pointer">
                <a
                  href={PHONE_TEL_HREF}
                  className="mt-2 inline-flex items-center gap-2 rounded-btn border border-brand-orange px-4 py-3 text-brand-orange"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{PHONE_DISPLAY}</span>
                </a>
              </label>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
