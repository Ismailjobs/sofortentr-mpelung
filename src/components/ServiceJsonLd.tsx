import { getSiteOrigin } from "@/config/site-url";
import type { ServiceDetailPageData } from "@/data/service-page-details";
import {
  breadcrumbListSchema,
  DEFAULT_SERVICE_CATEGORY,
  festpreisOffer,
  schemaOriginIds,
  defaultAreaServed,
  type SchemaBreadcrumbItem,
} from "@/lib/schema-org";

type Props = {
  service: ServiceDetailPageData;
  breadcrumbs: SchemaBreadcrumbItem[];
};

export default function ServiceJsonLd({ service, breadcrumbs }: Props) {
  const origin = getSiteOrigin();
  const { businessId, areaWienId } = schemaOriginIds(origin);
  const serviceUrl = `${origin}/leistungen/${service.id}`;
  const serviceId = `${serviceUrl}#service`;
  const name = service.title.replace(/\u200b/g, "");
  const breadcrumbId = `${serviceUrl}#breadcrumb`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service" as const,
        "@id": serviceId,
        name,
        description: service.description,
        url: serviceUrl,
        image: `${origin}${service.imageSrc}`,
        serviceType: service.schemaServiceType,
        category: DEFAULT_SERVICE_CATEGORY,
        provider: { "@id": businessId },
        areaServed: defaultAreaServed(areaWienId),
        offers: festpreisOffer(origin),
        audience: {
          "@type": "Audience" as const,
          audienceType: "Privatpersonen, Hausverwaltungen und Unternehmen in Wien",
          geographicArea: { "@id": areaWienId },
        },
      },
      breadcrumbListSchema(origin, breadcrumbs, breadcrumbId),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
