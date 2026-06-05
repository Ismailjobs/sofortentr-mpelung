import { redirect } from "next/navigation";

/** Kurz-URL /at → Startseite */
export default function AtRedirectPage() {
  redirect("/");
}
