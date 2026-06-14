import type { ComponentType } from "react";
import { RATGEBER_PATH } from "@/data/site-content";
import type { RatgeberArticleEntry, RatgeberArticleMeta } from "./types";

export { RATGEBER_PATH };

/**
 * Neue Artikel hinzufügen:
 * 1. Datei unter `src/components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. `meta` exportieren + default-Komponente mit Inhalt
 * 3. Unten importieren und in `RATGEBER_ARTICLES` eintragen
 * 4. Slug + Aktualisierungstag in `src/lib/ratgeber-dates.ts` → `RATGEBER_ARTICLE_UPDATE_DAYS`
 */

import ChecklisteWohnungsraeumungWien, {
  meta as checklisteWohnungsraeumungWienMeta,
} from "@/components/ratgeber/articles/checkliste-wohnungsraeumung-wien";
import DachbodenraeumungWienMa48, {
  meta as dachbodenraeumungWienMa48Meta,
} from "@/components/ratgeber/articles/dachbodenraeumung-wien-ma-48";
import DelogierungZwangsrauemungWien, {
  meta as delogierungZwangsrauemungMeta,
} from "@/components/ratgeber/articles/delogierung-zwangsrauemung-wien";
import WohnungsraeumungSeniorenWien, {
  meta as wohnungsraeumungSeniorenWienMeta,
} from "@/components/ratgeber/articles/wohnungsraeumung-senioren-wien";
import SchwerlastentsorgungWien, {
  meta as schwerlastentsorgungWienMeta,
} from "@/components/ratgeber/articles/schwerlastentsorgung-wien";
import EntruempelungOesterreichweit, {
  meta as entruempelungOesterreichweitMeta,
} from "@/components/ratgeber/articles/entruempelung-oesterreichweit";
import EntruempelungBurgenlandMattersburgRustOberpullendorf, {
  meta as entruempelungBurgenlandMattersburgRustOberpullendorfMeta,
} from "@/components/ratgeber/articles/entruempelung-burgenland-mattersburg-rust-oberpullendorf";
import EntruempelungKorneuburgTullnSchwechat, {
  meta as entruempelungKorneuburgTullnSchwechatMeta,
} from "@/components/ratgeber/articles/entruempelung-korneuburg-tulln-schwechat";
import EntruempelungsdienstVsEntruempelungsfirmaWien, {
  meta as entruempelungsdienstVsEntruempelungsfirmaWienMeta,
} from "@/components/ratgeber/articles/entruempelungsdienst-vs-entruempelungsfirma-wien";
import EntruempelungGemeindebauWienerWohnen, {
  meta as entruempelungGemeindebauMeta,
} from "@/components/ratgeber/articles/entruempelung-gemeindebau-wiener-wohnen";
import EntruempelungVorSanierungWien, {
  meta as entruempelungVorSanierungWienMeta,
} from "@/components/ratgeber/articles/entruempelung-vor-sanierung-wien";
import EntruempelungWien5FehlerVermeiden, {
  meta as entruempelungWien5FehlerVermeidenMeta,
} from "@/components/ratgeber/articles/entruempelung-wien-5-fehler-vermeiden";
import GebrauchteMoebelBewertenWien, {
  meta as gebrauchteMoebelBewertenWienMeta,
} from "@/components/ratgeber/articles/gebrauchte-moebel-bewerten-wien";
import GeschaeftslokalRaeumenWienRueckbau, {
  meta as geschaeftslokalRaeumenWienRueckbauMeta,
} from "@/components/ratgeber/articles/geschaeftslokal-raeumen-wien-rueckbau";
import EntruempelungWienSteuerAbsetzen, {
  meta as entruempelungWienSteuerAbsetzenMeta,
} from "@/components/ratgeber/articles/entruempelung-wien-steuer-absetzen";
import GratisRaeumungWienWertanrechnung, {
  meta as gratisRaeumungWienMeta,
} from "@/components/ratgeber/articles/gratis-raeumung-wien-wertanrechnung";
import KellerraeumungWienKostenSchimmel, {
  meta as kellerraeumungWienKostenSchimmelMeta,
} from "@/components/ratgeber/articles/kellerraeumung-wien-kosten-schimmel";
import WohnungsaufloesungNachTodesfallWien, {
  meta as wohnungsaufloesungNachTodesfallMeta,
} from "@/components/ratgeber/articles/wohnungsaufloesung-nach-todesfall-wien";
import Ma48MistplaetzeEntsorgungsGuideWien, {
  meta as ma48MistplaetzeEntsorgungsGuideMeta,
} from "@/components/ratgeber/articles/ma-48-mistplaetze-entsorgungs-guide-wien";
import Ma48VsEntruempelungsfirmaWien, {
  meta as ma48VsEntruempelungsfirmaWienMeta,
} from "@/components/ratgeber/articles/ma-48-vs-entruempelungsfirma-wien";
import MessieWohnungRaeumenWien, {
  meta as messieWohnungRaeumenWienMeta,
} from "@/components/ratgeber/articles/messie-wohnung-raeumen-wien";
import MoebelVerkaufenWienWillhabenWertanrechnung, {
  meta as moebelVerkaufenWienMeta,
} from "@/components/ratgeber/articles/moebel-verkaufen-wien-willhaben-wertanrechnung";
import PraxisaufloesungWien, {
  meta as praxisaufloesungWienMeta,
} from "@/components/ratgeber/articles/praxisaufloesung-wien";
import ZimmerRaeumungWien, {
  meta as zimmerRaeumungWienMeta,
} from "@/components/ratgeber/articles/zimmer-raeumung-wien";
import RaeumungsexperteWienBesichtigung, {
  meta as raeumungsexperteWienBesichtigungMeta,
} from "@/components/ratgeber/articles/raeumungsexperte-wien-besichtigung";
import RichtigAusmistenWien, {
  meta as richtigAusmistenWienMeta,
} from "@/components/ratgeber/articles/richtig-ausmisten-wien";
import WasKostetEntruempelungWien, {
  meta as wasKostetEntruempelungWienMeta,
} from "@/components/ratgeber/articles/was-kostet-entruempelung-wien";
import WasTunMitAltenSchaetzenWien, {
  meta as wasTunMitAltenSchaetzenWienMeta,
} from "@/components/ratgeber/articles/was-tun-mit-alten-schaetzen-wien";

function register(meta: RatgeberArticleMeta, Component: ComponentType): RatgeberArticleEntry {
  return { ...meta, Component };
}

const _entries: RatgeberArticleEntry[] = [
  register(wohnungsraeumungSeniorenWienMeta, WohnungsraeumungSeniorenWien),
  register(schwerlastentsorgungWienMeta, SchwerlastentsorgungWien),
  register(entruempelungOesterreichweitMeta, EntruempelungOesterreichweit),
  register(
    entruempelungBurgenlandMattersburgRustOberpullendorfMeta,
    EntruempelungBurgenlandMattersburgRustOberpullendorf,
  ),
  register(entruempelungKorneuburgTullnSchwechatMeta, EntruempelungKorneuburgTullnSchwechat),
  register(raeumungsexperteWienBesichtigungMeta, RaeumungsexperteWienBesichtigung),
  register(zimmerRaeumungWienMeta, ZimmerRaeumungWien),
  register(praxisaufloesungWienMeta, PraxisaufloesungWien),
  register(richtigAusmistenWienMeta, RichtigAusmistenWien),
  register(entruempelungsdienstVsEntruempelungsfirmaWienMeta, EntruempelungsdienstVsEntruempelungsfirmaWien),
  register(wasTunMitAltenSchaetzenWienMeta, WasTunMitAltenSchaetzenWien),
  register(gebrauchteMoebelBewertenWienMeta, GebrauchteMoebelBewertenWien),
  register(checklisteWohnungsraeumungWienMeta, ChecklisteWohnungsraeumungWien),
  register(entruempelungWien5FehlerVermeidenMeta, EntruempelungWien5FehlerVermeiden),
  register(entruempelungVorSanierungWienMeta, EntruempelungVorSanierungWien),
  register(geschaeftslokalRaeumenWienRueckbauMeta, GeschaeftslokalRaeumenWienRueckbau),
  register(dachbodenraeumungWienMa48Meta, DachbodenraeumungWienMa48),
  register(kellerraeumungWienKostenSchimmelMeta, KellerraeumungWienKostenSchimmel),
  register(ma48MistplaetzeEntsorgungsGuideMeta, Ma48MistplaetzeEntsorgungsGuideWien),
  register(delogierungZwangsrauemungMeta, DelogierungZwangsrauemungWien),
  register(messieWohnungRaeumenWienMeta, MessieWohnungRaeumenWien),
  register(entruempelungGemeindebauMeta, EntruempelungGemeindebauWienerWohnen),
  register(wohnungsaufloesungNachTodesfallMeta, WohnungsaufloesungNachTodesfallWien),
  register(gratisRaeumungWienMeta, GratisRaeumungWienWertanrechnung),
  register(entruempelungWienSteuerAbsetzenMeta, EntruempelungWienSteuerAbsetzen),
  register(moebelVerkaufenWienMeta, MoebelVerkaufenWienWillhabenWertanrechnung),
  register(ma48VsEntruempelungsfirmaWienMeta, Ma48VsEntruempelungsfirmaWien),
  register(wasKostetEntruempelungWienMeta, WasKostetEntruempelungWien),
];

/** Alle veröffentlichten Ratgeber — neueste zuerst sortiert. */
export const RATGEBER_ARTICLES: RatgeberArticleEntry[] = [..._entries].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
);

export function getRatgeberArticle(slug: string): RatgeberArticleEntry | undefined {
  return RATGEBER_ARTICLES.find((a) => a.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_ARTICLES.map((a) => a.slug);
}

export function getRelatedRatgeberArticles(currentSlug: string, limit = 3): RatgeberArticleEntry[] {
  return RATGEBER_ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, limit);
}

/** Hero & OG — gleiches Bild wie Startseite. */
export const RATGEBER_HERO_IMAGE = "/hero.webp";

export const RATGEBER_HERO_IMAGE_ALT =
  "Professionelle Entrümpelung in Wien — Sofort Entrümpelung";
