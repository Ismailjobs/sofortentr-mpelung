import { getSiteOrigin } from "@/config/site-url";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  /** Fragment-ID für @id, z. B. "faq" → {origin}/#faq */
  pageId?: string;
};

export default function FaqPageJsonLd({ items, pageId }: Props) {
  if (items.length === 0) return null;

  const origin = getSiteOrigin();
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  if (pageId) {
    schema["@id"] = `${origin}/#${pageId}`;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
