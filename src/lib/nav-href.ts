/**
 * Auf der Startseite vermeidet `/#anker` mit Next.js `Link` manchmal doppelte Fragmente (`/#anker#anker`).
 * Relatives `#anker` löst das; von anderen Routen bleibt `/#anker` nötig.
 */
export function resolveHomeHashHref(pathname: string | null, href: string): string {
  if (pathname !== "/") return href;
  const m = /^\/#([^/#]+)$/.exec(href);
  return m ? `#${m[1]}` : href;
}
