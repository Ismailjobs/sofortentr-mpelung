import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import {
  CONTACT_BLOCK,
  FOOTER_LEISTUNGEN,
  FOOTER_SERVICE,
  IMPRESSUM_PATH,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from "@/data/site-content";
import FooterSocialLinks from "@/components/FooterSocialLinks";
import { SITE_LOGO_SIZES } from "@/lib/image-sizes";

function HashOrLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.includes("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function LogoMark() {
  return (
    <Link href="/" aria-label="SofortEntrümpelung Startseite" className="flex w-fit max-w-full justify-start">
      <Image
        src="/sofort-logo.webp"
        alt=""
        width={360}
        height={87}
        sizes={SITE_LOGO_SIZES}
        quality={75}
        className="h-[3.35rem] w-auto max-w-full object-contain object-left sm:h-[3.6rem] md:h-[3.8rem] lg:h-[4.05rem] xl:h-[4.25rem]"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 py-16 sm:px-5 lg:px-6 lg:py-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:gap-x-12 lg:grid-cols-5 lg:gap-x-12">
          <div className="flex flex-col items-start lg:col-span-1">
            <LogoMark />
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-white/65 sm:max-w-none">
              Ihr lokaler Partner für professionelle Entrümpelung in Wien und Umgebung —
              schnell, transparent und mit Entsorgung aus einer Hand.
            </p>
            <FooterSocialLinks />
          </div>

          <div className="min-w-0 lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-12">
              <div className="flex min-w-0 flex-col gap-5">
                <h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-brand-orange">
                  Leistungen
                </h3>
                <ul className="min-w-0 space-y-3">
                  {FOOTER_LEISTUNGEN.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block text-sm leading-snug text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex min-w-0 flex-col gap-5">
                <h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-brand-orange">
                  Schnellzugriff
                </h3>
                <ul className="min-w-0 space-y-3">
                  {NAV_LINKS.slice(0, 3).map((l) => (
                    <li key={l.href}>
                      <HashOrLink
                        href={l.href}
                        className="block text-sm leading-snug text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </HashOrLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-brand-orange">
              Service
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICE.map((l) => (
                <li key={l.label}>
                  <HashOrLink href={l.href} className="text-sm text-white/70 transition hover:text-white">
                    {l.label}
                  </HashOrLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <h3 className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-brand-orange">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <a href={PHONE_TEL_HREF} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <a href={`mailto:${CONTACT_BLOCK.email}`} className="hover:text-white">
                  {CONTACT_BLOCK.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <span>{CONTACT_BLOCK.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                <span className="leading-relaxed">{CONTACT_BLOCK.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[min(100%,88rem)] flex-col gap-4 px-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">
          <p>&copy; {new Date().getFullYear()} SofortEntrumpelung.at. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/datenschutz" className="hover:text-brand-orange">
              Datenschutz
            </Link>
            <Link href={IMPRESSUM_PATH} className="hover:text-brand-orange">
              Impressum
            </Link>
            <HashOrLink href="/#kontakt" className="hover:text-brand-orange">
              AGB
            </HashOrLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
