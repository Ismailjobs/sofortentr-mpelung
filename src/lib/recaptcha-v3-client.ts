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

/** Wartet auf next/script-Laden von api.js — kein appendChild/remove (sonst Konflikt mit React DOM). */
async function waitForGrecaptcha(timeoutMs = 15_000): Promise<void> {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    if (window.grecaptcha?.ready) return;
    await sleep(50);
  }
  throw new Error("recaptcha-load-timeout");
}

/**
 * reCAPTCHA v3 — unsichtbar. Script wird per next/script eingebunden, hier nur Token holen.
 */
export async function getContactFormRecaptchaToken(): Promise<string> {
  if (!isRecaptchaSiteKeyConfigured()) {
    throw new Error("recaptcha-site-key-not-set");
  }
  const siteKey = RECAPTCHA_V3_SITE_KEY.trim();

  await waitForGrecaptcha();

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
