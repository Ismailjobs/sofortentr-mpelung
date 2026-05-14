import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      {children}
    </>
  );
}
