import { getSiteOrigin } from "@/config/site-url";
import { breadcrumbListSchema, type SchemaBreadcrumbItem } from "@/lib/schema-org";

type Props = {
  items: SchemaBreadcrumbItem[];
  /** Fragment für @id, z. B. „breadcrumb-preise“ → {origin}/#breadcrumb-preise */
  id?: string;
};

export default function BreadcrumbListJsonLd({ items, id }: Props) {
  if (items.length === 0) return null;

  const origin = getSiteOrigin();
  const schema = {
    "@context": "https://schema.org",
    ...breadcrumbListSchema(
      origin,
      items,
      id ? (id.startsWith("http") ? id : `${origin}/#${id}`) : undefined,
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type { SchemaBreadcrumbItem as BreadcrumbSchemaItem };
