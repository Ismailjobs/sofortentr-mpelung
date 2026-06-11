import RatgeberCard from "@/components/ratgeber/RatgeberCard";
import type { RatgeberArticleEntry } from "@/data/ratgeber/types";

type Props = {
  articles: RatgeberArticleEntry[];
};

export default function RelatedRatgeberSection({ articles }: Props) {
  if (articles.length === 0) return null;

  return (
    <section
      className="border-t border-black/[0.06] bg-white py-14 sm:py-20"
      aria-labelledby="related-ratgeber-heading"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">Weiterlesen</p>
        <h2
          id="related-ratgeber-heading"
          className="mt-3 text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl"
        >
          Weitere Ratgeber-Artikel
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {articles.map((article) => (
            <li key={article.slug}>
              <RatgeberCard {...article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
