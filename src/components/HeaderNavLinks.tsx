"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { resolveHomeHashHref } from "@/lib/nav-href";
import PhoneLink from "@/components/PhoneLink";
import { NAV_LINKS, PHONE_DISPLAY } from "@/data/site-content";

const MOBILE_NAV_ID = "mobile-nav-toggle";

type Props = {
  variant: "desktop" | "mobile";
};

export default function HeaderNavLinks({ variant }: Props) {
  const pathname = usePathname();

  if (variant === "desktop") {
    return (
      <nav
        className="hidden min-[1148px]:flex min-[1148px]:flex-wrap min-[1148px]:items-center min-[1148px]:justify-center min-[1148px]:gap-x-10"
        aria-label="Hauptnavigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={resolveHomeHashHref(pathname, href)}
            className="text-sm font-medium text-white/95 transition-colors hover:text-brand-orange"
          >
            {label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
      {NAV_LINKS.map(({ label, href }) => (
        <label key={href} htmlFor={MOBILE_NAV_ID} className="cursor-pointer">
          <Link
            href={resolveHomeHashHref(pathname, href)}
            className="block text-base font-medium text-white/95 transition-colors hover:text-brand-orange"
          >
            {label}
          </Link>
        </label>
      ))}
      <label htmlFor={MOBILE_NAV_ID} className="cursor-pointer">
        <PhoneLink className="mt-2 inline-flex items-center gap-2 rounded-btn border border-brand-orange px-4 py-3 text-brand-orange">
          <Phone className="h-5 w-5" />
          <span className="font-semibold">{PHONE_DISPLAY}</span>
        </PhoneLink>
      </label>
    </nav>
  );
}
