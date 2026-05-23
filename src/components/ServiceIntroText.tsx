import ServicePageReveal, { ServicePageRevealItem } from "@/components/ServicePageReveal";

function splitAfterFirstSentence(text: string): { first: string; rest: string } | null {
  const match = text.match(/^(.+?[.!?])(?:\s+)([\s\S]+)$/);
  if (!match) return null;
  const first = match[1].trim();
  const rest = match[2].trim();
  if (!first || !rest) return null;
  return { first, rest };
}

function IntroDots() {
  return (
    <div className="my-6 flex justify-center sm:my-7" aria-hidden>
      <span className="inline-flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-brand-orange/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange/75" />
        <span className="h-1 w-1 rounded-full bg-brand-orange/35" />
      </span>
    </div>
  );
}

const leadClass =
  "text-pretty text-[1.0625rem] font-semibold leading-[1.58] tracking-tight text-brand-dark sm:text-lg sm:leading-snug";
const bodyClass =
  "text-pretty border-l-[3px] border-brand-orange/40 pl-5 text-sm font-normal leading-relaxed text-neutral-700 sm:border-l-4 sm:pl-6 sm:text-base";

type Props = { paragraphs: string[] };

export default function ServiceIntroText({ paragraphs }: Props) {
  const [first, ...rest] = paragraphs;
  const split = first ? splitAfterFirstSentence(first) : null;

  return (
    <>
      <ServicePageReveal className="mb-8 flex items-center gap-3 sm:mb-10" aria-hidden>
        <span className="inline-flex h-2 w-14 rounded-full bg-brand-orange shadow-[0_0_24px_-2px_rgba(255,122,0,0.55)]" />
        <span className="h-px min-w-[4rem] flex-1 bg-gradient-to-r from-brand-orange/45 via-brand-orange/15 to-transparent sm:min-w-[7rem]" />
      </ServicePageReveal>

      <ServicePageReveal staggerChildren className="space-y-6 sm:space-y-7">
        {first ? (
          <ServicePageRevealItem>
            {split ? (
              <>
                <p className={leadClass}>{split.first}</p>
                <IntroDots />
                <p className={bodyClass}>{split.rest}</p>
              </>
            ) : (
              <p className={leadClass}>{first}</p>
            )}
          </ServicePageRevealItem>
        ) : null}

        {rest.map((paragraph, index) => (
          <ServicePageRevealItem key={`rest-${index}`}>
            <p className={bodyClass}>{paragraph}</p>
          </ServicePageRevealItem>
        ))}
      </ServicePageReveal>
    </>
  );
}
