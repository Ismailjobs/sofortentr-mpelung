import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = { items: Item[] };

export default function TrustBar({ items }: Props) {
  return (
    <div className="relative z-10 -mt-12 px-3 sm:px-5">
      <div className="mx-auto max-w-[min(100%,88rem)] rounded-2xl bg-white px-3 py-8 shadow-xl ring-1 ring-black/[0.06] sm:px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <span className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-orange bg-white text-brand-orange">
                <Icon className="h-8 w-8" strokeWidth={1.85} aria-hidden />
              </span>
              <div className="relative">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-dark">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">{description}</p>
              </div>
              {index < items.length - 1 ? (
                <>
                  <span
                    className="mt-5 h-px w-24 bg-neutral-300 lg:hidden"
                    aria-hidden
                  />
                  <span
                    className="absolute -right-4 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-neutral-300 lg:block"
                    aria-hidden
                  />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
