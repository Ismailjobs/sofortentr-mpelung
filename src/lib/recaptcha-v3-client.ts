"use client";

import { RECAPTCHA_V3_SITE_KEY, isRecaptchaSiteKeyConfigured } from "@/config/recaptcha";
import { RECAPTCHA_V3_ACTION_CONTACT } from "@shared-contact/recaptcha-shared";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

async function waitForGrecaptcha(timeoutMs = 15_000): Promise<void> {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    if (window.grecaptcha?.ready) return;
    await sleep(50);
  }
  throw new Error("recaptcha-load-timeout");
}

let scriptLoadPromise: Promise<void> | null = null;

/** reCAPTCHA v3 — erst beim Absenden laden (TBT + bfcache). */
export function loadRecaptchaV3Script(): Promise<void> {
  if (!isRecaptchaSiteKeyConfigured()) {
    return Promise.reject(new Error("recaptcha-site-key-not-set"));
  }
  if (typeof window === "undefined") {
    return Promise.reject(new Error("recaptcha-ssr"));
  }
  if (window.grecaptcha?.ready) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  const siteKey = RECAPTCHA_V3_SITE_KEY.trim();
  const src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      waitForGrecaptcha().then(resolve).catch(reject);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      waitForGrecaptcha().then(resolve).catch(reject);
    };
    script.onerror = () => {
      scriptLoadPromise = null;
      reject(new Error("recaptcha-script-error"));
    };
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

export async function getContactFormRecaptchaToken(): Promise<string> {
  if (!isRecaptchaSiteKeyConfigured()) {
    throw new Error("recaptcha-site-key-not-set");
  }
  const siteKey = RECAPTCHA_V3_SITE_KEY.trim();

  await loadRecaptchaV3Script();

  return new Promise((resolve, reject) => {
    window.grecaptcha!.ready(async () => {
      try {
        resolve(
          await window.grecaptcha!.execute(siteKey, { action: RECAPTCHA_V3_ACTION_CONTACT }),
        );
      } catch (e) {
        reject(e);
      }
    });
  });
}

export { isRecaptchaSiteKeyConfigured };
