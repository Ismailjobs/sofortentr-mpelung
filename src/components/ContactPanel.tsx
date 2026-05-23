import { Calendar, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import { GENERAL_FAQ, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";

const WHATSAPP_HREF = "https://wa.me/4368181130962";

const CHANNELS = [
  {
    step: 1,
    title: "WhatsApp Anfrage",
    description:
      "Schreiben Sie uns Fotos & Infos — wir antworten schnell mit einer ersten Einschätzung.",
    icon: MessageCircle,
    iconWrapClass: "bg-[#25d366] text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.55)]",
    cardClass:
      "bg-gradient-to-b from-[#ecfbf3] to-[#dff6ea] ring-emerald-600/10 hover:ring-emerald-600/25",
    cta: (
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-full max-w-xs items-center justify-center rounded-btn bg-[#25d366] px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#1ebe5b] hover:shadow-md"
      >
        Jetzt schreiben
      </a>
    ),
  },
  {
    step: 2,
    title: "Support anrufen",
    description:
      "Direkter Draht zu unserem Team — Beratung, Termin und alle Rückfragen.",
    icon: Phone,
    iconWrapClass: "bg-[#2563eb] text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.45)]",
    cardClass:
      "bg-gradient-to-b from-[#eef4ff] to-[#e0ebff] ring-blue-600/10 hover:ring-blue-600/25",
    cta: (
      <a
        href={PHONE_TEL_HREF}
        className="mt-auto inline-flex w-full max-w-xs items-center justify-center rounded-btn bg-[#2563eb] px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#1d4ed8] hover:shadow-md"
      >
        {PHONE_DISPLAY}
      </a>
    ),
  },
  {
    step: 3,
    title: "Gratis Besichtigung",
    description:
      "Festpreis nach Besichtigung vor Ort. Terminanfrage stellen Sie im Kontaktformular weiter unten — kurz Objekt und Wunsch beschreiben.",
    icon: Calendar,
    iconWrapClass: "bg-brand-orange text-black shadow-[0_8px_24px_-8px_rgba(255,122,0,0.45)]",
    cardClass:
      "bg-gradient-to-b from-[#fff6ed] to-[#ffecd9] ring-brand-orange/20 hover:ring-brand-orange/40",
    cta: (
      <Link
        href="#kontakt-formular"
        className="mt-auto inline-flex w-full max-w-xs items-center justify-center rounded-btn bg-brand-orange px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-sm transition hover:bg-[#ff8f26] hover:shadow-md"
      >
        Anfrage stellen
      </Link>
    ),
  },
] as const;

export default function ContactPanel() {
  return (
    <>
    <section id="kontakt" className="scroll-mt-28 border-t border-neutral-100 bg-gradient-to-b from-white via-brand-muted/25 to-white py-20 sm:py-24">
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-orange">Kontakt</p>
          <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl">
            Wir sind für Sie da! – 3 Wege zu Ihrem Angebot
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Wählen Sie den Kanal, der am besten passt — alle Wege führen zu einem klaren Festpreis nach Besichtigung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.step}
                className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl p-8 text-center shadow-sm ring-1 ring-inset transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-10 ${ch.cardClass}`}
              >
                <span
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-extrabold tabular-nums text-brand-dark shadow-sm ring-1 ring-black/[0.06]"
                  aria-hidden
                >
                  {ch.step}
                </span>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className={`relative mx-auto inline-flex rounded-2xl p-5 transition-transform duration-300 group-hover:scale-[1.03] ${ch.iconWrapClass}`}
                >
                  <Icon className="h-10 w-10" strokeWidth={1.6} aria-hidden />
                </span>
                <p className="relative mt-7 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-dark">
                  {ch.title}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-neutral-700">{ch.description}</p>
                <div className="relative mt-8 flex justify-center">{ch.cta}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <ServiceFaqSection
      id="faq"
      eyebrow="FAQ"
      heading="Häufig gestellte Fragen"
      intro="Alles Wichtige zu Kosten, Ablauf und Leistungsumfang auf einen Blick — für Entrümpelungen in Wien und Umgebung."
      items={GENERAL_FAQ}
      headerVariant="rich"
      className="scroll-mt-28 border-t border-neutral-200/80 bg-gradient-to-b from-brand-muted/40 via-white to-white"
    />
    </>
  );
}
