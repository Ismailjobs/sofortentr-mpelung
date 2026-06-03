import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ClipboardCheck, ListOrdered, Phone, Receipt, Truck } from "lucide-react";

const STEPS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Kontakt",
    text: "Anruf oder Nachricht mit kurzer Situationsbeschreibung.",
    icon: Phone,
  },
  {
    title: "Besichtigung",
    text: "Kostenlose Begutachtung vor Ort und Festpreis.",
    icon: ClipboardCheck,
  },
  {
    title: "Räumung",
    text: "Terminierter Ablauf inklusive sortierter Entsorgung.",
    icon: Truck,
  },
  {
    title: "Übergabe",
    text: "Sauberer Zustand und Abnahme ohne Überraschungen.",
    icon: BadgeCheck,
  },
];

const PREISE_POINTS = [
  "Preisbildung nach Volumen, Zugänglichkeit und Materialaufwand",
  "Fixpreis nach Besichtigung — keine versteckten Zusatzkosten",
  "Schnelle Angebote für Standardfälle auf Anfrage",
];

type ProcedureSectionsProps = {
  ablaufIntro?: string;
};

export default function ProcedureSections({ ablaufIntro }: ProcedureSectionsProps) {
  return (
    <div className="bg-white">
      <section id="ablauf" className="scroll-mt-28 border-t border-neutral-100 py-16 sm:py-20">
        <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Ablauf</p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl">
                So läuft&apos;s bei uns
              </h2>
              {ablaufIntro ? (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">{ablaufIntro}</p>
              ) : null}
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm font-semibold text-brand-dark">
              <ListOrdered className="h-4 w-4 text-brand-orange" aria-hidden />
              Transparent in 4 Schritten
            </span>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="procedure-step-card group relative overflow-hidden rounded-2xl bg-brand-muted p-6 ring-1 ring-black/[0.04] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.22)] hover:ring-brand-orange/20"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-orange/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-orange shadow-sm ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                        <Icon className="h-6 w-6" strokeWidth={1.85} aria-hidden />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                        Schritt {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="preise" className="scroll-mt-28 border-t border-brand-muted bg-brand-muted py-16 sm:py-20">
        <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Preise</p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl">
                Klare Aussagen statt Überraschungen
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Jede Räumung ist anders — deshalb ermitteln wir den Festpreis nach realistischer Objektbesichtigung.
              </p>
            </div>
            <div className="flex-1 lg:max-w-lg">
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-2xl bg-brand-orange p-3 text-black">
                    <Receipt className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark">Fixpreis-Prinzip</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-700">
                  {PREISE_POINTS.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
