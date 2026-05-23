import { Phone } from "lucide-react";
import { PHONE_TEL_HREF } from "@/data/site-content";

export default function CallFAB() {
  return (
    <a
      href={PHONE_TEL_HREF}
      className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-2xl ring-4 ring-white/90 transition hover:scale-105 hover:bg-[#1d4ed8] md:hidden"
      aria-label="Jetzt anrufen"
    >
      <Phone className="h-7 w-7" strokeWidth={2.25} aria-hidden />
    </a>
  );
}
