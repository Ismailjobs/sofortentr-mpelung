import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

type Props = {
  children: React.ReactNode;
  params: Promise<{ "location-slug": string }>;
};

export default async function LocationSlugLayout({ children, params }: Props) {
  const { "location-slug": slug } = await params;
  return (
    <>
      <LocalBusinessJsonLd priorityLocationSlug={slug} />
      {children}
    </>
  );
}
