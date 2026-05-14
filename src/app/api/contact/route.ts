import { NextResponse } from "next/server";
import { CONTACT_FORM_ERROR_UPSTREAM } from "@/lib/contact-form-errors";

/** Server-seitig: Container/Compose z. B. http://api:4000/api/contact */
const UPSTREAM =
  process.env.CONTACT_API_INTERNAL_URL?.trim() || "http://127.0.0.1:4000/api/contact";

export async function POST(req: Request) {
  let body: string;
  try {
    body = await req.text();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const forward: Record<string, string> = { "Content-Type": "application/json" };
  const xf = req.headers.get("x-forwarded-for");
  if (xf) forward["x-forwarded-for"] = xf;

  try {
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers: forward,
      body,
      cache: "no-store",
    });
    const text = await res.text();
    const upstreamCt = res.headers.get("content-type") || "";
    const upstreamJson = upstreamCt.includes("application/json");

    if (res.ok) {
      if (upstreamJson) {
        return new NextResponse(text, {
          status: res.status,
          headers: { "Content-Type": "application/json" },
        });
      }
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (upstreamJson && text.trim()) {
      return new NextResponse(text, {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const status = res.status >= 400 && res.status < 600 ? res.status : 502;
    return NextResponse.json({ error: CONTACT_FORM_ERROR_UPSTREAM }, { status });
  } catch (e) {
    console.error("[proxy /api/contact →]", UPSTREAM, e);
    return NextResponse.json({ error: CONTACT_FORM_ERROR_UPSTREAM }, { status: 502 });
  }
}
