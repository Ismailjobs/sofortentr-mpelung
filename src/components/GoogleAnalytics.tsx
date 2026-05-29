import Script from "next/script";

/** Google Analytics 4 — Measurement ID */
const GA_MEASUREMENT_ID = "G-RTE2LWVQVT";

/**
 * Google tag (gtag.js) — lädt nach Hydration (`afterInteractive`), blockiert nicht den First Paint.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-gtag" strategy="afterInteractive">
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
