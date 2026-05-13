import { NextResponse } from "next/server";

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
    return new NextResponse(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") || "application/json" },
    });
  } catch (e) {
    console.error("[proxy /api/contact →]", UPSTREAM, e);
    return NextResponse.json(
      {
        error:
          "Nachrichten-Dienst nicht erreichbar. Lokal: `npm run dev:all` oder `npm run api` (Port 4000).",
      },
      { status: 502 },
    );
  }
}
