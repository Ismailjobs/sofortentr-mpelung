import { Phone } from "lucide-react";
import { PHONE_TEL_HREF } from "@/data/site-content";

export default function CallFAB() {
  return (
    <div
      className="fixed bottom-4 left-4 z-[110] flex flex-col items-center gap-1.5 sm:bottom-5 sm:left-5"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a href={PHONE_TEL_HREF} className="fab-btn fab-btn--call" aria-label="Jetzt anrufen">
        <Phone className="h-9 w-9" strokeWidth={2.5} aria-hidden />
      </a>
      <span className="fab-label bg-[#2563eb]">Anrufen</span>
    </div>
  );
}
