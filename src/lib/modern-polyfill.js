/**
 * Replaces Next.js default polyfill-module for modern-only targets.
 * Keeps URL.canParse (Chrome 111–119); drops Array.at, flat, hasOwn, etc.
 * @see https://github.com/vercel/next.js/discussions/64330
 */
if (!("canParse" in URL)) {
  URL.canParse = function (url, base) {
    try {
      return !!new URL(url, base);
    } catch {
      return false;
    }
  };
}
