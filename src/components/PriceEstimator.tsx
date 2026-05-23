"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { HomeHashLink } from "@/components/HomeHashLink";

type Category = {
  id: string;
  label: string;
  hint: string;
  hasRooms: boolean;
  /** “ab … EUR” per room count index 0 = 1 room */
  pricesByRooms: number[];
  /** When true, slider max is pricesByRooms length (else uses maxRooms fallback) */
  maxRoomsShown?: number;
};

const CATEGORIES: Category[] = [
  {
    id: "wohnung",
    label: "Wohnung",
    hint: "Wohnungen & Apartments",
    hasRooms: true,
    pricesByRooms: [390, 460, 590, 720, 850, 990],
    maxRoomsShown: 6,
  },
  {
    id: "haus",
    label: "Haus",
    hint: "EFH · Reihenhaus · MFH-Anteil",
    hasRooms: true,
    pricesByRooms: [650, 820, 990, 1250, 1520, 1890],
    maxRoomsShown: 6,
  },
  {
    id: "kleinauftrag",
    label: "Keller · Garage",
    hint: "Keller, Garage, Abstellraum · Einheit",
    hasRooms: false,
    pricesByRooms: [199],
  },
  {
    id: "buero",
    label: "Büro / Lager",
    hint: "Büro-, Lager- & Nebenflächen",
    hasRooms: true,
    pricesByRooms: [420, 580, 760, 980],
    maxRoomsShown: 4,
  },
];

function formatPrice(eur: number) {
  return new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Büro (4 Stufen) „mehr“ = intern 5 → höchster Tabellenpreis. */
function effectiveRoomCeiling(maxRooms: number) {
  if (maxRooms <= 1) return 1;
  if (maxRooms === 4) return 5;
  return maxRooms;
}

/** Ab 4 Rasterstufen: 1–4 + „mehr“ (5 Positionen). */
function getSliderStepCount(maxRooms: number) {
  if (maxRooms <= 1) return 1;
  return maxRooms >= 4 ? 5 : maxRooms;
}

/** interne Zimmeranzahl für Preiswahl → Schrittindex 0…stepCount-1 */
function roomsToStep(rooms: number, maxRooms: number) {
  const stepCount = getSliderStepCount(maxRooms);
  if (stepCount <= 1) return 0;
  if (maxRooms > 4) {
    if (rooms <= 4) return clamp(rooms - 1, 0, 3);
    return 4;
  }
  if (maxRooms === 4) {
    if (rooms <= 4) return clamp(rooms - 1, 0, 3);
    if (rooms === 5) return 4;
    return 0;
  }
  return clamp(rooms - 1, 0, stepCount - 1);
}

function stepToRooms(step: number, maxRooms: number) {
  const stepCount = getSliderStepCount(maxRooms);
  const s = clamp(step, 0, stepCount - 1);
  if (maxRooms > 4) {
    return s <= 3 ? s + 1 : maxRooms;
  }
  if (maxRooms === 4) {
    return s <= 3 ? s + 1 : 5;
  }
  return s + 1;
}

/**
 * Raster-Mitten wie die Zahlenreihe darunter (`flex`-Spalten): Mitte bei (i + ½) / stepCount —
 * nicht 0 % / 100 % Endpunkte, sonst liegt der Daumen nicht unter der „4“.
 */
function normToStep(norm: number, stepCount: number) {
  if (stepCount <= 1) return 0;
  const n = clamp(norm, 0, 1);
  return clamp(Math.round(n * stepCount - 0.5), 0, stepCount - 1);
}

/** 0 … 1 auf der Leiste → Zimmerwahl (optional „mehr“ = maxRooms) */
function normToRooms(norm: number, maxRooms: number) {
  const stepCount = getSliderStepCount(maxRooms);
  if (stepCount <= 1) return 1;
  return stepToRooms(normToStep(norm, stepCount), maxRooms);
}

function roomsToNorm(rooms: number, maxRooms: number) {
  const stepCount = getSliderStepCount(maxRooms);
  if (stepCount <= 1) return 0.5;
  const step = roomsToStep(rooms, maxRooms);
  return (step + 0.5) / stepCount;
}

/** Für Texte/A11y — „mehr“-Stufe ab 5. Position (1–4 + mehr) */
function formatRoomsLabel(rooms: number, maxRooms: number) {
  if (maxRooms >= 4) {
    if (rooms <= 4) return `${rooms} Zimmer`;
    return "Mehr als 4 Zimmer";
  }
  return `${rooms} Zimmer`;
}

/** Kleinschreibung nach „Für …“ im Fließtext */
function formatRoomsInSentence(rooms: number, maxRooms: number) {
  if (maxRooms >= 4 && rooms > 4) return "mehr als 4 Zimmer";
  return `${rooms} Zimmer`;
}

function normalizeRoomsForEstimator(rooms: number, maxRooms: number) {
  const ceiling = effectiveRoomCeiling(maxRooms);
  let x = clamp(rooms, 1, ceiling);
  if (maxRooms > 4 && x > 4 && x < maxRooms) {
    x = maxRooms;
  }
  return x;
}

type RoomSnapSliderProps = {
  id: string;
  labelId: string;
  maxRooms: number;
  rooms: number;
  onRoomsChange: (r: number) => void;
  onRoomsPreviewChange?: (preview: number | null) => void;
};

function RoomSnapSlider({
  id,
  labelId,
  maxRooms,
  rooms,
  onRoomsChange,
  onRoomsPreviewChange,
}: RoomSnapSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragNormRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const [dragNorm, setDragNorm] = useState<number | null>(null);

  const setNormFromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return;
      const { left, width } = el.getBoundingClientRect();
      if (width <= 0) return;
      const n = clamp((clientX - left) / width, 0, 1);
      dragNormRef.current = n;
      setDragNorm(n);
      if (draggingRef.current) {
        onRoomsPreviewChange?.(normToRooms(n, maxRooms));
      }
    },
    [maxRooms, onRoomsPreviewChange],
  );

  const finishDrag = useCallback(() => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const n = dragNormRef.current;
    dragNormRef.current = null;
    setDragNorm(null);
    onRoomsPreviewChange?.(null);
    if (n === null) return;
    onRoomsChange(normToRooms(n, maxRooms));
  }, [maxRooms, onRoomsChange, onRoomsPreviewChange]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setNormFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    if (e.buttons === 0) {
      finishDrag();
      return;
    }
    setNormFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    finishDrag();
  };

  const bumpRoom = (delta: -1 | 1) => {
    onRoomsPreviewChange?.(null);
    const step = roomsToStep(rooms, maxRooms);
    const stepCount = getSliderStepCount(maxRooms);
    const nextStep = clamp(step + delta, 0, stepCount - 1);
    onRoomsChange(stepToRooms(nextStep, maxRooms));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      bumpRoom(-1);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      bumpRoom(1);
    } else if (e.key === "Home") {
      e.preventDefault();
      onRoomsPreviewChange?.(null);
      onRoomsChange(1);
    } else if (e.key === "End") {
      e.preventDefault();
      onRoomsPreviewChange?.(null);
      onRoomsChange(effectiveRoomCeiling(maxRooms));
    }
  };

  const stepCount = getSliderStepCount(maxRooms);
  const thumbNorm = dragNorm ?? roomsToNorm(rooms, maxRooms);
  const previewRoom = dragNorm !== null ? normToRooms(dragNorm, maxRooms) : rooms;
  const previewStep = roomsToStep(previewRoom, maxRooms);
  const supportsTransition = dragNorm === null;

  if (maxRooms <= 1) {
    return (
      <p className="mt-4 text-center text-sm text-neutral-600" id={id}>
        Eine Einheit — Zimmerauswahl entfällt.
      </p>
    );
  }

  return (
    <div className="form-inset-warm mt-4 rounded-2xl px-4 py-5 ring-1 ring-brand-orange/10 sm:px-6 sm:py-6">
      <div
        ref={trackRef}
        id={id}
        role="slider"
        aria-labelledby={labelId}
        aria-valuemin={1}
        aria-valuemax={effectiveRoomCeiling(maxRooms)}
        aria-valuenow={previewRoom}
        aria-valuetext={formatRoomsLabel(previewRoom, maxRooms)}
        tabIndex={0}
        className="relative flex h-11 cursor-pointer touch-none select-none items-center py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange/80"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-neutral-300/90" />
        <div
          className="pointer-events-none absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-brand-orange/35"
          style={{
            left: 0,
            width: `${thumbNorm * 100}%`,
            transition: supportsTransition ? "width 0.22s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_1px_2px_rgb(0,0,0,0.2),0_6px_16px_rgb(255,122,0,0.28)] ring-[3px] ring-white motion-safe:border motion-safe:border-black/5"
          style={{
            left: `${thumbNorm * 100}%`,
            transition: supportsTransition ? "left 0.22s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          aria-hidden
        />
      </div>

      <div className="mt-3 flex justify-between gap-1 text-xs font-semibold text-neutral-500" aria-hidden>
        {Array.from({ length: stepCount }, (_, i) => {
          const isMehr = maxRooms >= 4 && i === 4;
          const label = isMehr ? "mehr" : String(i + 1);
          const active = i === previewStep;
          return (
            <span
              key={`${label}-${i}`}
              className={`min-w-6 flex-1 text-center transition-colors duration-150 ${
                isMehr
                  ? `uppercase tracking-wide ${active ? "font-black text-brand-orange" : "font-semibold text-neutral-500"}`
                  : `tabular-nums ${active ? "font-bold text-brand-dark" : ""}`
              }`}
            >
              {label}
            </span>
          );
        })}
      </div>

      {/* Screen reader: Bewegung ohne diskreten Schritt beim Ziehen */}
      <span className="sr-only">Zielposition wird beim Loslassen auf die nächste Zimmeranzahl eingrastet.</span>
    </div>
  );
}

export default function PriceEstimator() {
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);
  const category = CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0];

  const maxRooms = category.hasRooms
    ? category.maxRoomsShown ?? category.pricesByRooms.length
    : 1;

  const [rooms, setRooms] = useState(2);
  const [roomsPreview, setRoomsPreview] = useState<number | null>(null);

  const selectCategory = useCallback((id: string) => {
    setCategoryId(id);
    setRoomsPreview(null);
    const cat = CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
    const mr = cat.hasRooms ? (cat.maxRoomsShown ?? cat.pricesByRooms.length) : 1;
    if (cat.hasRooms) {
      setRooms((r) => normalizeRoomsForEstimator(r, mr));
    }
  }, []);

  const safeRooms = category.hasRooms ? normalizeRoomsForEstimator(rooms, maxRooms) : 1;
  const displayRooms = roomsPreview ?? safeRooms;

  const catForPrice = CATEGORIES.find((c) => c.id === categoryId) ?? CATEGORIES[0];
  const prices = catForPrice.pricesByRooms;
  const priceIdx = Math.min(displayRooms - 1, prices.length - 1);
  const priceEur = prices[priceIdx] ?? prices[prices.length - 1];

  return (
    <div className="form-card-warm rounded-3xl p-6 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.28)] ring-1 ring-brand-orange/15 sm:p-9 lg:p-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Preis-Rechner</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-brand-dark sm:text-3xl">
            Richtpreis in Sekunden
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600">
            Wählen Sie Objekttyp und — falls zutreffend — die Zimmeranzahl. Der angezeigte Betrag ist ein
            Orientierungswert; verbindlich wird der Preis nach kostenloser Besichtigung.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p id="preis-kategorie-label" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
          Objekttyp
        </p>
        <div
          role="tablist"
          aria-labelledby="preis-kategorie-label"
          className="mt-3 flex gap-2 overflow-x-auto overflow-y-visible py-3 pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:py-2 sm:pb-3 [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((c) => {
            const selected = c.id === category.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectCategory(c.id)}
                className={`shrink-0 snap-start rounded-full px-4 py-3 text-left text-sm font-bold uppercase tracking-wide transition-[transform,color,background-color,box-shadow,ring-color] duration-300 ease-out will-change-transform motion-safe:active:scale-[0.97] sm:px-5 ${
                  selected
                    ? "bg-brand-orange text-black shadow-md ring-2 ring-brand-orange ring-offset-2 ring-offset-[#fffdfb]"
                    : "bg-neutral-100 text-brand-dark ring-1 ring-black/[0.06] hover:bg-neutral-200/90"
                }`}
              >
                <span className="block leading-tight">{c.label}</span>
                <span
                  className={`mt-0.5 block text-[11px] font-semibold normal-case tracking-normal ${
                    selected ? "text-black/80" : "text-neutral-500"
                  }`}
                >
                  {c.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {category.hasRooms ? (
        <div key={`rooms-${category.id}`} className="preis-motion-enter mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p id="preis-zimmer-label" className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Zimmeranzahl
            </p>
            <span
              key={formatRoomsLabel(displayRooms, maxRooms)}
              className="preis-price-shift text-sm font-bold text-brand-dark"
            >
              {formatRoomsLabel(displayRooms, maxRooms)}
            </span>
          </div>

          <RoomSnapSlider
            id="preis-zimmer-slider"
            labelId="preis-zimmer-label"
            maxRooms={maxRooms}
            rooms={safeRooms}
            onRoomsChange={setRooms}
            onRoomsPreviewChange={setRoomsPreview}
          />
        </div>
      ) : null}

      <div
        key={category.id}
        className="preis-motion-card mt-10 rounded-2xl bg-gradient-to-br from-brand-dark to-neutral-900 px-6 py-8 text-white transition-[box-shadow] duration-300 ease-out shadow-[0_12px_40px_-24px_rgb(0,0,0,0.5)] hover:shadow-[0_14px_48px_-20px_rgb(255,122,0,0.12)] sm:px-8 sm:py-9"
      >
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Ihr Richtpreis</p>
        <p className="mt-3 text-4xl font-black tracking-tight text-white tabular-nums sm:text-5xl">
          <span className="text-white/90">ab </span>
          <span key={priceEur} className="preis-price-shift inline-block">
            {formatPrice(priceEur)}
          </span>
        </p>
        <p
          key={`${category.id}-${displayRooms}`}
          className="preis-price-shift mt-3 max-w-md text-sm leading-relaxed text-white/75"
        >
          {category.hasRooms
            ? `Für ${formatRoomsInSentence(displayRooms, maxRooms)} · inkl. Abtransport & fachgerechte Entsorgung (unverbindlich).`
            : "Kleinauftrag · inkl. Abtransport & fachgerechte Entsorgung (unverbindlich)."}
        </p>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-neutral-500">
        Endpreis nach Objektbesichtigung · Fixpreis-Garantie · keine versteckten Kosten
      </p>

      <div className="mt-6 flex justify-center">
        <HomeHashLink
          href="/#kontakt"
          className="inline-flex items-center justify-center rounded-btn bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#ff8f26]"
        >
          Jetzt Besichtigung anfragen
        </HomeHashLink>
      </div>
    </div>
  );
}
