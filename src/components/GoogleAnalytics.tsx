import Script from "next/script";

/** Google Analytics 4 — Measurement ID */
export const GA_MEASUREMENT_ID = "G-RTE2LWVQVT";

/**
 * Google tag (gtag.js) — `lazyOnload`: lädt nach dem Load-Event,
 * konkurriert nicht mit First Paint / Early Interaction (INP).
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics-gtag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
