import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Calendar,
  CalendarDays,
  CircleCheck,
  Euro,
  Home,
  Lightbulb,
  Lock,
  Ruler,
  ShieldCheck,
  Sparkles,
  Tags,
  Truck,
} from "lucide-react";
import Link from "next/link";

type PriceRow = {
  object: string;
  size: string;
  typicalCost: string;
  valueCredit: string;
  fromPrice: string;
};

const PRICE_ROWS: PriceRow[] = [
  {
    object: "Zimmer",
    size: "10–15 m²",
    typicalCost: "150–250 €",
    valueCredit: "50–200 €",
    fromPrice: "50",
  },
  {
    object: "Kleine Wohnung",
    size: "30–50 m²",
    typicalCost: "250–400 €",
    valueCredit: "100–300 €",
    fromPrice: "100",
  },
  {
    object: "Mittelgroße Wohnung",
    size: "50–80 m²",
    typicalCost: "400–600 €",
    valueCredit: "200–500 €",
    fromPrice: "200",
  },
  {
    object: "Große Wohnung",
    size: "80–120 m²",
    typicalCost: "600–800 €",
    valueCredit: "300–600 €",
    fromPrice: "300",
  },
  {
    object: "Einfamilienhaus",
    size: "120–200 m²",
    typicalCost: "800–1.200 €",
    valueCredit: "500–1.000 €",
    fromPrice: "400",
  },
];

const HIGHLIGHTS: { icon: LucideIcon; label: string }[] = [
  { icon: Calendar, label: "Kostenlose Besichtigung" },
  { icon: ShieldCheck, label: "100 % Festpreis-Garantie" },
  { icon: Truck, label: "An- & Abfahrt inklusive" },
  { icon: CalendarDays, label: "Wochenende ohne Aufpreis" },
];

function HeaderIcon({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-bold text-brand-dark">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-muted text-brand-orange">
        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
      </span>
      <span className="text-left text-xs leading-tight sm:text-sm">{label}</span>
    </span>
  );
}

export default function PricingOverview() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <div className="text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
          Was kostet eine Haushaltsauflösung{" "}
          <span className="text-brand-orange">in Wien?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          Transparente Richtpreise – mit möglicher Wertanrechnung oft deutlich günstiger.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]">
        {/* Mobil: kompakte Karten — Objekt & Größe in einer Box, kein Horizontal-Scroll */}
        <ul className="divide-y divide-black/[0.06] md:hidden">
          {PRICE_ROWS.map((row) => (
            <li key={row.object} className="px-4 py-4 sm:px-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 rounded-xl bg-brand-muted/80 px-3.5 py-3 ring-1 ring-black/[0.04]">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
                    <Home className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    Objekt · Größe
                  </p>
                  <p className="mt-1.5 font-semibold leading-snug text-brand-dark">{row.object}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-neutral-600">
                    <Ruler className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
                    {row.size}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center justify-center rounded-btn bg-brand-dark px-3.5 py-2 text-xs font-bold text-white">
                  ab {row.fromPrice} €
                </span>
              </div>
              <dl className="mt-3.5 grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-neutral-500">Typische Kosten</dt>
                  <dd className="mt-0.5 font-medium text-neutral-800">{row.typicalCost}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Wertanrechnung</dt>
                  <dd className="mt-0.5 font-semibold text-brand-orange">{row.valueCredit}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        {/* Desktop: volle Tabelle */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[44rem] border-collapse text-sm [&_td:not(:last-child)]:border-r [&_td:not(:last-child)]:border-black/[0.08] [&_th:not(:last-child)]:border-r [&_th:not(:last-child)]:border-black/[0.08]">
            <thead>
              <tr className="border-b border-black/[0.08] bg-white">
                <th className="px-4 py-4 text-left sm:px-5 sm:py-5">
                  <HeaderIcon icon={Home} label="Objekt" />
                </th>
                <th className="px-4 py-4 text-left sm:px-5 sm:py-5">
                  <HeaderIcon icon={Ruler} label="Größe" />
                </th>
                <th className="px-4 py-4 text-left sm:px-5 sm:py-5">
                  <HeaderIcon icon={Euro} label="Typische Kosten (ohne Anrechnung)" />
                </th>
                <th className="px-4 py-4 text-left sm:px-5 sm:py-5">
                  <HeaderIcon icon={Tags} label="Wertanrechnung (mögliche Ersparnis)" />
                </th>
                <th className="px-4 py-4 text-left sm:px-5 sm:py-5">
                  <HeaderIcon icon={CircleCheck} label="Endpreis ab" />
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((row, i) => (
                <tr
                  key={row.object}
                  className={i < PRICE_ROWS.length - 1 ? "border-b border-black/[0.06]" : undefined}
                >
                  <td className="px-4 py-4 font-semibold text-brand-dark sm:px-5">{row.object}</td>
                  <td className="px-4 py-4 text-neutral-600 sm:px-5">{row.size}</td>
                  <td className="px-4 py-4 text-neutral-700 sm:px-5">{row.typicalCost}</td>
                  <td className="px-4 py-4 font-medium text-brand-orange sm:px-5">{row.valueCredit}</td>
                  <td className="px-4 py-4 sm:px-5">
                    <span className="inline-flex min-w-[5.5rem] items-center justify-center rounded-btn bg-brand-dark px-4 py-2 text-xs font-bold text-white sm:text-sm">
                      ab {row.fromPrice} €
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl bg-brand-orange/[0.08] px-5 py-5 ring-1 ring-brand-orange/15 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-sm">
          <Lightbulb className="h-6 w-6" strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-brand-orange">Spar-Tipp</p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">
            Verwertbare Möbel, Geräte oder Sammlungen können den Endpreis spürbar senken — wir rechnen den
            realistischen Wert direkt gegen Ihre Rechnung an.
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-center gap-3 text-brand-orange/40 sm:pr-2" aria-hidden>
          <Building2 className="h-10 w-10" strokeWidth={1.25} />
          <Sparkles className="h-5 w-5 text-brand-orange/60" />
          <Home className="h-9 w-9" strokeWidth={1.25} />
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {HIGHLIGHTS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm ring-1 ring-black/[0.06]">
              <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-xs font-semibold leading-snug text-brand-dark sm:text-sm">{label}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-6 rounded-2xl bg-white px-5 py-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.06] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
            <ShieldCheck className="h-6 w-6" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="text-lg font-bold text-brand-dark">Schnell. Fair. Zuverlässig.</p>
            <p className="mt-0.5 text-sm text-neutral-600">Persönlicher Service vom Wiener Profi.</p>
          </div>
        </div>
        <div className="flex flex-col items-stretch sm:items-end">
          <Link
            href="#kontakt-formular"
            className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-orange px-6 py-3.5 text-sm font-bold text-black shadow-md transition hover:bg-[#ff8f26]"
          >
            Jetzt kostenloses Angebot anfordern
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </Link>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-neutral-500 sm:justify-end">
            <Lock className="h-3.5 w-3.5" aria-hidden />
            Unverbindlich & schnell
          </p>
        </div>
      </div>
    </div>
  );
}
