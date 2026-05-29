import type { ComponentProps } from "react";
import { PHONE_TEL_HREF } from "@/data/site-content";

type Props = Omit<ComponentProps<"a">, "href">;

/**
 * Nur `<a href="tel:…">` — kein JS, kein Next-Link.
 * Innenliegende Elemente fangen auf manchen Mobilgeräten den Tap ab → `pointer-events-none`.
 */
export default function PhoneLink({ children, className, ...rest }: Props) {
  return (
    <a href={PHONE_TEL_HREF} className={className} {...rest}>
      <span className="pointer-events-none contents">{children}</span>
    </a>
  );
}
