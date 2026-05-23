import { redirect } from "next/navigation";

/** Kurz-URL /leistungen/messie → Hauptseite Messie-Entrümpelung */
export default function MessieServiceRedirectPage() {
  redirect("/leistungen/messie-entruempelung");
}
