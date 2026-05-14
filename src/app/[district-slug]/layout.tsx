import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

type Props = {
  children: React.ReactNode;
  params: Promise<{ "district-slug": string }>;
};

export default async function DistrictSlugLayout({ children, params }: Props) {
  const { "district-slug": slug } = await params;
  return (
    <>
      <LocalBusinessJsonLd priorityDistrictSlug={slug} />
      {children}
    </>
  );
}
