import { NextResponse } from "next/server";
import { submitUrlsToIndexNow } from "@/lib/indexnow";

type PostBody = {
  urls?: string[];
};

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET?.trim();
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

/** URLs an IndexNow senden — erfordert `Authorization: Bearer {INDEXNOW_SECRET}`. */
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: PostBody;
  try {
    body = (await request.json()) as PostBody;
  } catch {
    return NextResponse.json({ error: "Ungültiger JSON-Body." }, { status: 400 });
  }

  const urls = body.urls;
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: "urls[] erforderlich." }, { status: 400 });
  }

  const result = await submitUrlsToIndexNow(urls);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ ok: true, status: result.status, submitted: urls.length });
}
