import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { SchemaBreadcrumbItem } from "@/lib/schema-org";

export type BreadcrumbItem = SchemaBreadcrumbItem;

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Brotkrumennavigation" className={`border-b border-black/[0.06] bg-transparent ${className}`}>
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 py-3.5 sm:px-5 lg:px-6">
        <ol className="flex flex-wrap items-center gap-x-0.5 gap-y-1.5 text-[13px] leading-snug tracking-tight sm:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1 sm:gap-1.5">
                {index > 0 ? (
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-neutral-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                ) : null}
                {isLast || !item.href ? (
                  <span
                    className={
                      isLast
                        ? "font-extrabold text-brand-dark"
                        : "font-semibold text-neutral-700"
                    }
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-semibold text-brand-dark/90 no-underline transition hover:text-brand-dark"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
