import { getSiteOrigin } from "@/config/site-url";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export function getIndexNowKey(): string | undefined {
  const key = process.env.INDEXNOW_KEY?.trim();
  return key || undefined;
}

export function getIndexNowKeyLocation(origin: string, key: string): string {
  return `${origin}/${key}.txt`;
}

export type IndexNowSubmitResult =
  | { ok: true; status: number }
  | { ok: false; status: number; error: string };

/** URLs an Bing/Yandex via IndexNow melden (max. 10.000 pro Request). */
export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowSubmitResult> {
  const key = getIndexNowKey();
  if (!key) {
    return { ok: false, status: 500, error: "INDEXNOW_KEY ist nicht konfiguriert." };
  }

  const origin = getSiteOrigin();
  let host: string;
  try {
    host = new URL(origin).host;
  } catch {
    return { ok: false, status: 500, error: "Ungültige NEXT_PUBLIC_SITE_URL." };
  }

  const uniqueUrls = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (uniqueUrls.length === 0) {
    return { ok: false, status: 400, error: "Keine URLs angegeben." };
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: getIndexNowKeyLocation(origin, key),
      urlList: uniqueUrls,
    }),
  });

  if (response.ok || response.status === 202) {
    return { ok: true, status: response.status };
  }

  const errorText = await response.text().catch(() => "");
  return {
    ok: false,
    status: response.status,
    error: errorText || `IndexNow HTTP ${response.status}`,
  };
}
