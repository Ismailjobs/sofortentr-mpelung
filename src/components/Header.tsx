import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavLinks from "@/components/HeaderNavLinks";
import PhoneLink from "@/components/PhoneLink";
import { PHONE_DISPLAY } from "@/data/site-content";
import { SITE_LOGO_SIZES } from "@/lib/image-sizes";

const MOBILE_NAV_ID = "mobile-nav-toggle";

/** Feste Leisten-/Logo-Höhen → CLS-Reserve ohne Designbruch. */
export default function Header() {
  return (
    <header className="group/nav sticky top-0 z-[100] h-[4.5rem] min-h-[4.5rem] border-b border-white/10 bg-brand-dark shadow-md sm:h-[5rem] sm:min-h-[5rem] md:h-[5.5rem] md:min-h-[5.5rem] min-[1148px]:h-[5.75rem] min-[1148px]:min-h-[5.75rem]">
      <input
        type="checkbox"
        id={MOBILE_NAV_ID}
        className="peer pointer-events-none fixed left-0 top-0 -z-50 h-px w-px opacity-0"
        tabIndex={-1}
      />

      <div className="relative z-[120] mx-auto flex h-full min-h-0 max-w-[min(100%,88rem)] items-center justify-between gap-3 bg-brand-dark pl-1 pr-3 sm:gap-6 sm:pl-3 sm:pr-5 min-[1148px]:grid min-[1148px]:grid-cols-[auto_1fr_auto] min-[1148px]:items-center min-[1148px]:gap-10 min-[1148px]:px-6">
        <div className="flex min-h-0 min-w-0 flex-1 items-center min-[1148px]:flex-none">
          <Link
            href="/"
            aria-label="SofortEntrümpelung Startseite"
            className="relative block h-14 w-[min(100%,15rem)] shrink-0 sm:h-[4.25rem] sm:w-[280px] md:h-[4.8rem] md:w-[320px] min-[1148px]:h-[5.2rem] min-[1148px]:w-[360px]"
          >
            <Image
              src="/sofort-logo.webp"
              alt=""
              width={360}
              height={87}
              sizes={SITE_LOGO_SIZES}
              quality={75}
              priority
              className="h-full w-full object-contain object-left"
            />
          </Link>
        </div>

        <HeaderNavLinks variant="desktop" />

        <div className="relative z-10 flex h-10 shrink-0 items-center gap-2 sm:gap-3">
          <PhoneLink className="hidden min-h-10 min-w-[9rem] items-center gap-3 rounded-btn border border-brand-orange/70 bg-transparent px-4 py-2 text-brand-orange shadow-sm transition-colors hover:bg-brand-orange/10 sm:flex">
            <Phone className="h-6 w-6 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-sm font-semibold">{PHONE_DISPLAY}</span>
              <span className="text-[11px] text-brand-orange/80">Jetzt anrufen!</span>
            </span>
          </PhoneLink>

          <label
            htmlFor={MOBILE_NAV_ID}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-btn border border-white/15 text-white transition-colors hover:bg-white/5 min-[1148px]:hidden"
            aria-controls="mobile-menu"
          >
            <span
              className="relative h-6 w-6 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:rotate-90"
              aria-hidden
            >
              <Menu className="absolute inset-0 h-6 w-6 shrink-0 transition-all duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:scale-75 group-has-[#mobile-nav-toggle:checked]/nav:rotate-45 group-has-[#mobile-nav-toggle:checked]/nav:opacity-0" />
              <X className="absolute inset-0 h-6 w-6 shrink-0 -rotate-90 scale-75 opacity-0 transition-all duration-300 ease-out motion-reduce:transition-none group-has-[#mobile-nav-toggle:checked]/nav:scale-100 group-has-[#mobile-nav-toggle:checked]/nav:rotate-0 group-has-[#mobile-nav-toggle:checked]/nav:opacity-100" />
            </span>
            <span className="sr-only">Menü öffnen</span>
          </label>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="pointer-events-none absolute left-0 right-0 top-full z-[110] min-[1148px]:hidden grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none peer-checked:pointer-events-auto peer-checked:grid-rows-[1fr] peer-checked:[&_.mobile-nav-inner]:visible peer-checked:[&_.mobile-nav-inner]:pointer-events-auto peer-checked:[&_.mobile-nav-inner]:translate-y-0 peer-checked:[&_.mobile-nav-inner]:opacity-100"
      >
        <div className="min-h-0 overflow-hidden border-t border-white/10 bg-brand-dark shadow-xl">
          <div className="mobile-nav-inner invisible pointer-events-none -translate-y-2 px-3 py-4 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none sm:px-5">
            <HeaderNavLinks variant="mobile" />
          </div>
        </div>
      </div>
    </header>
  );
}
