import { Camera, Phone } from "lucide-react";
import PhoneLink from "@/components/PhoneLink";
import { WHATSAPP_HREF } from "@/data/site-content";

/**
 * Feste Leiste unten: links WhatsApp („Foto senden“), rechts Anruf („Anrufen“).
 */
export default function BottomContactBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[60] grid grid-cols-2 border-t border-black/10 bg-white shadow-[0_-6px_28px_-8px_rgba(0,0,0,0.2)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Schnellkontakt"
    >
      <a
        href={WHATSAPP_HREF}
        aria-label="Foto per WhatsApp senden"
        className="flex items-center justify-center gap-2.5 bg-[#25d366] px-3 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1ebe5b] sm:py-[1.125rem] sm:text-base"
      >
        <Camera className="h-5 w-5 shrink-0 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2.25} aria-hidden />
        <span>Foto senden</span>
      </a>

      <PhoneLink
        aria-label="Jetzt anrufen"
        className="flex items-center justify-center gap-2.5 border-l border-black/12 bg-brand-orange px-3 py-4 text-sm font-bold uppercase tracking-wide text-brand-dark transition hover:bg-[#ff8f26] sm:py-[1.125rem] sm:text-base"
      >
        <Phone className="h-5 w-5 shrink-0 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2.25} aria-hidden />
        <span>Anrufen</span>
      </PhoneLink>
    </nav>
  );
}
