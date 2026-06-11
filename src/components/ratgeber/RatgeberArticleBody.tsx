import type { ReactNode } from "react";
import Link from "next/link";
import { MoveHorizontal } from "lucide-react";

const prose =
  "ratgeber-prose space-y-6 text-sm leading-relaxed text-neutral-800 sm:space-y-7 sm:text-base";

type BodyProps = { children: ReactNode; className?: string };

/** Wrapper für den Artikel-Inhalt — einheitliche Typografie. */
export default function RatgeberArticleBody({ children, className = "" }: BodyProps) {
  return <div className={`${prose} ${className}`.trim()}>{children}</div>;
}

export function RatgeberLead({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty text-[1.0625rem] font-semibold leading-[1.58] tracking-tight text-brand-dark sm:text-lg sm:leading-snug">
      {children}
    </p>
  );
}

export function RatgeberH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="!mt-10 text-pretty text-xl font-extrabold tracking-tight text-brand-dark first:!mt-0 sm:text-2xl">
      {children}
    </h2>
  );
}

export function RatgeberH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="!mt-8 text-pretty text-lg font-bold tracking-tight text-brand-dark sm:text-xl">
      {children}
    </h3>
  );
}

export function RatgeberP({ children }: { children: ReactNode }) {
  return <p className="text-pretty leading-relaxed text-neutral-700">{children}</p>;
}

export function RatgeberUl({ children }: { children: ReactNode }) {
  return (
    <ul className="list-none space-y-2.5 pl-0 text-neutral-700 [&>li]:flex [&>li]:gap-3 [&>li]:leading-relaxed">
      {children}
    </ul>
  );
}

export function RatgeberLi({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export function RatgeberOl({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-2.5 pl-5 text-neutral-700 marker:font-semibold marker:text-brand-orange">
      {children}
    </ol>
  );
}

export function RatgeberBadge({ label, note }: { label: string; note?: string }) {
  return (
    <aside className="!my-6 rounded-xl border border-black/[0.06] bg-brand-muted/60 px-5 py-4 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">{label}</p>
      {note ? <p className="mt-2 text-sm leading-relaxed text-neutral-600">{note}</p> : null}
    </aside>
  );
}

export function RatgeberCtaBox({ children }: { children: ReactNode }) {
  return (
    <aside className="!my-10 rounded-2xl border border-brand-orange/20 bg-brand-orange/[0.06] p-6 ring-1 ring-brand-orange/10 sm:p-8">
      {children}
    </aside>
  );
}

export function RatgeberTableWrap({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="!my-8">
      <div className="relative overflow-hidden rounded-xl border border-black/[0.06]">
        <div className="ratgeber-table-scroll overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            {caption ? (
              <caption className="bg-brand-muted/80 px-4 py-3 text-left text-sm font-bold text-brand-dark sm:px-5">
                {caption}
              </caption>
            ) : null}
            {children}
          </table>
        </div>
        <div
          className="ratgeber-table-scroll-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-14 md:hidden"
          aria-hidden
        />
      </div>
      <figcaption className="ratgeber-table-scroll-hint mt-2.5 flex items-center justify-center gap-2 text-xs font-medium text-neutral-500 md:hidden">
        <MoveHorizontal className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden strokeWidth={2} />
        <span>Tabelle wischen · Seite normal nach oben/unten scrollen</span>
      </figcaption>
    </figure>
  );
}

export function RatgeberThead({ children }: { children: ReactNode }) {
  return (
    <thead className="border-b border-black/[0.08] bg-brand-dark text-white">{children}</thead>
  );
}

export function RatgeberTh({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`px-4 py-3 text-xs font-bold uppercase tracking-wide sm:px-5 sm:text-sm ${className}`.trim()}
    >
      {children}
    </th>
  );
}

export function RatgeberTbody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-black/[0.06] bg-white">{children}</tbody>;
}

export function RatgeberTr({ children }: { children: ReactNode }) {
  return <tr className="transition-colors hover:bg-brand-orange/[0.04]">{children}</tr>;
}

export function RatgeberTd({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <td className={`px-4 py-3.5 align-top text-neutral-700 sm:px-5 ${className}`.trim()}>{children}</td>
  );
}

export function RatgeberWarning({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside
      className="!my-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-amber-950 ring-1 ring-amber-200/80 sm:px-6 sm:py-5"
      role="note"
    >
      {title ? <p className="mb-2 font-bold text-amber-900">{title}</p> : null}
      <div className="text-sm leading-relaxed text-amber-950/90 sm:text-base">{children}</div>
    </aside>
  );
}

export function RatgeberChecklist({ items }: { items: string[] }) {
  return (
    <ul className="!my-6 space-y-3 rounded-xl border border-black/[0.06] bg-brand-muted/50 p-5 sm:p-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-brand-orange/60 bg-white text-[10px] font-bold text-brand-orange"
            aria-hidden
          >
            ☐
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function RatgeberInternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const className =
    "font-semibold text-brand-orange underline decoration-brand-orange/50 underline-offset-4 transition hover:decoration-brand-orange";

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
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
