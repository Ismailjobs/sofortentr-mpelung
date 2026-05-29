import type { CSSProperties, ReactNode } from "react";
import { Camera, Phone } from "lucide-react";
import { PHONE_TEL_HREF, WHATSAPP_PHOTO_HREF } from "@/data/site-content";

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        fill="#fff"
        d="M34.2 28.5c-.5-.2-2.9-1.4-3.3-1.6-.4-.2-.7-.2-1 .2-.3.5-1.1 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.5-1 2.9-2 .3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.9-.5z"
      />
      <path
        fill="#fff"
        d="M24 12c-6.6 0-12 5.4-12 12 0 2.1.6 4.1 1.6 5.9L12 36l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7 1 1-3.6-.2-.4c-.9-1.6-1.4-3.4-1.4-5.3 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z"
      />
    </svg>
  );
}

function ActionIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange sm:h-7 sm:w-7">
      {children}
    </span>
  );
}

function NotifyBadge() {
  return (
    <span
      className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center"
      aria-hidden
    >
      <span className="absolute h-2 w-2 rounded-full bg-brand-dark/90" />
      <span className="absolute -right-0.5 -top-1 h-1 w-1 rounded-full bg-brand-dark/70" />
      <span className="absolute -top-1.5 right-0.5 h-1 w-1 rounded-full bg-brand-dark/50" />
      <span className="absolute -top-2 right-1.5 h-0.5 w-0.5 rounded-full bg-brand-dark/40" />
    </span>
  );
}

/** Desktop: feste Abmessungen (px) — Höhe für zwei Aktionszeilen inkl. „per WhatsApp“. */
const DESKTOP_BAR = { width: 420, height: 100, actionWidth: 156 } as const;

/**
 * Feste Kontakt-Leiste unten — Mobil volle Breite, Desktop feste Größe links.
 */
export default function WhatsAppFAB() {
  return (
    <aside
      className="fixed bottom-3 left-3 right-3 z-[60] sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-auto"
      style={
        {
          "--wa-bar-w": `${DESKTOP_BAR.width}px`,
          "--wa-bar-h": `${DESKTOP_BAR.height}px`,
          "--wa-action-w": `${DESKTOP_BAR.actionWidth}px`,
        } as CSSProperties
      }
      aria-label="Kostenlos anrufen oder Fotos per WhatsApp senden"
    >
      <div className="flex w-full overflow-hidden rounded-full border border-white/10 bg-brand-dark shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] ring-1 ring-brand-orange/15 md:h-[var(--wa-bar-h)] md:w-[var(--wa-bar-w)]">
        <div className="flex min-w-0 flex-1 items-center gap-2 py-2 pl-2 pr-2 sm:gap-3 sm:py-2.5 sm:pl-3 sm:pr-3 md:py-2 md:pl-2.5 md:pr-2">
          <div className="relative shrink-0">
            <WhatsAppLogo className="h-11 w-11 drop-shadow-md sm:h-12 sm:w-12 md:h-11 md:w-11" />
          </div>
          <div className="min-w-0 flex-1 md:overflow-hidden">
            <p className="text-[0.65rem] font-extrabold uppercase leading-tight tracking-wide sm:text-xs md:text-[0.72rem]">
              <span className="text-white">Kostenlos anrufen </span>
              <span className="text-brand-orange">&amp; Foto senden</span>
            </p>
            <p className="mt-0.5 text-[0.58rem] leading-snug text-white/85 sm:text-[0.65rem] md:text-[0.62rem] md:leading-tight">
              Erhalten Sie in wenigen Minuten eine unverbindliche Einschätzung!
            </p>
          </div>
        </div>

        <div className="relative flex h-full w-[38%] max-w-[11.5rem] shrink-0 flex-col divide-y divide-brand-dark/15 bg-brand-orange sm:max-w-[13rem] md:w-[var(--wa-action-w)] md:max-w-none">
          <NotifyBadge />
          <a
            href={PHONE_TEL_HREF}
            aria-label="Jetzt anrufen"
            className="grid min-h-0 flex-1 grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-2 px-2.5 py-1.5 transition hover:bg-[#ff8f26] sm:grid-cols-[1.875rem_minmax(0,1fr)] sm:gap-x-2.5 sm:px-3 md:px-2.5 md:py-2"
          >
            <ActionIcon>
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden />
            </ActionIcon>
            <span className="text-[0.58rem] font-extrabold uppercase leading-tight text-brand-dark sm:text-[0.65rem] md:text-[0.62rem]">
              Kostenlos anrufen
            </span>
          </a>
          <a
            href={WHATSAPP_PHOTO_HREF}
            aria-label="WhatsApp mit vorausgefüllter Nachricht öffnen"
            className="grid min-h-0 flex-1 grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-x-2 px-2.5 py-1.5 transition hover:bg-[#ff8f26] sm:grid-cols-[1.875rem_minmax(0,1fr)] sm:gap-x-2.5 sm:px-3 md:px-2.5 md:py-2"
          >
            <ActionIcon>
              <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden />
            </ActionIcon>
            <span className="flex min-w-0 flex-col justify-center leading-tight">
              <span className="text-[0.58rem] font-extrabold uppercase text-brand-dark sm:text-[0.65rem] md:text-[0.62rem]">
                Foto senden
              </span>
              <span className="text-[0.52rem] font-medium leading-snug text-brand-dark/85 sm:text-[0.58rem] md:text-[0.58rem]">
                per WhatsApp
              </span>
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
