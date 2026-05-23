import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = { items: Item[] };

export default function TrustBar({ items }: Props) {
  const lastItemAlone = items.length % 2 === 1;

  return (
    <div className="relative z-10">
      <div className="relative -mt-12 px-3 sm:px-5">
        <div className="mx-auto max-w-[min(100%,88rem)] rounded-2xl bg-white px-2 py-5 shadow-xl ring-1 ring-black/[0.06] sm:px-6 lg:px-10 lg:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {items.map(({ icon: Icon, title, description }, index) => {
              const isLastAlone = lastItemAlone && index === items.length - 1;
              const showMobileColumnDivider = index % 2 === 0 && !isLastAlone;
              const lastRowStart = lastItemAlone ? items.length - 1 : items.length - 2;
              const showMobileRowDivider = index < lastRowStart;

              return (
                <div
                  key={title}
                  className={`relative flex flex-col items-center px-2 py-4 text-center sm:px-3 sm:py-5 lg:p-0${isLastAlone ? " col-span-2 lg:col-span-1" : ""}${showMobileColumnDivider ? " max-lg:border-r-2 max-lg:border-neutral-200" : ""}${showMobileRowDivider ? " max-lg:border-b-2 max-lg:border-neutral-200" : ""}`}
                >
                  <span className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange bg-white text-brand-orange lg:mb-4 lg:h-16 lg:w-16">
                    <Icon className="h-5 w-5 lg:h-8 lg:w-8" strokeWidth={1.85} aria-hidden />
                  </span>
                  <div className="relative w-full min-w-0 px-0.5 lg:w-auto lg:px-0">
                    <h3 className="text-[10px] font-bold uppercase leading-tight tracking-wide text-brand-dark sm:text-[11px] lg:text-sm lg:leading-normal">
                      {title}
                    </h3>
                    <p className="mt-1 text-[10px] leading-snug text-neutral-600 sm:text-[11px] lg:mt-2 lg:text-sm lg:leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {index < items.length - 1 ? (
                    <span
                      className="absolute -right-4 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-neutral-300 lg:block"
                      aria-hidden
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-brand-muted pb-6 sm:pb-8" />
    </div>
  );
}
