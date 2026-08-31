import type { ComponentType } from "react";
import { RATGEBER_PATH } from "@/data/site-content";
import { resolveRelatedSlugs } from "@/data/ratgeber/related-slugs";
import type { RatgeberArticleEntry, RatgeberArticleMeta } from "./types";

export { RATGEBER_PATH };

/**
 * Neue Artikel hinzufügen:
 * 1. Datei unter `src/components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. `meta` exportieren + default-Komponente mit Inhalt
 * 3. Unten importieren und in `RATGEBER_ARTICLES` eintragen
 * 4. Slug + Aktualisierungstag in `src/lib/ratgeber-dates.ts` → `RATGEBER_ARTICLE_UPDATE_DAYS`
 */

import EntruempelungOttakringWien1160, {
  meta as entruempelungOttakringWien1160Meta,
} from "@/components/ratgeber/articles/entruempelung-ottakring-wien-1160";
import EntruempelungMeidlingWien1120, {
  meta as entruempelungMeidlingWien1120Meta,
} from "@/components/ratgeber/articles/entruempelung-meidling-wien-1120";
import EntruempelungFloridsdorfWien1210, {
  meta as entruempelungFloridsdorfWien1210Meta,
} from "@/components/ratgeber/articles/entruempelung-floridsdorf-wien-1210";
import EntruempelungLeopoldstadtWien1020, {
  meta as entruempelungLeopoldstadtWien1020Meta,
} from "@/components/ratgeber/articles/entruempelung-leopoldstadt-wien-1020";
import EntruempelungDonaustadtWien1220, {
  meta as entruempelungDonaustadtWien1220Meta,
} from "@/components/ratgeber/articles/entruempelung-donaustadt-wien-1220";
import EntruempelungFavoritenWien1100, {
  meta as entruempelungFavoritenWien1100Meta,
} from "@/components/ratgeber/articles/entruempelung-favoriten-wien-1100";
import Entruempelung1010Wien, {
  meta as entruempelung1010WienMeta,
} from "@/components/ratgeber/articles/entruempelung-1010-wien";
import EntruempelungLiesingWien1230, {
  meta as entruempelungLiesingWien1230Meta,
} from "@/components/ratgeber/articles/entruempelung-liesing-wien-1230";
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
import GemeindebauWienerWohnenWohnungsuebergabe, {
  meta as gemeindebauWienerWohnenWohnungsuebergabeMeta,
} from "@/components/ratgeber/articles/gemeindebau-wiener-wohnen-wohnungsuebergabe";
import StadtWienGemeindewohnungRueckgabevorgaben, {
  meta as stadtWienGemeindewohnungRueckgabevorgabenMeta,
} from "@/components/ratgeber/articles/stadt-wien-gemeindewohnung-rueckgabevorgaben";
import BuwogGenossenschaftEntruempelungWien, {
  meta as buwogGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/buwog-genossenschaft-entruempelung-wien";
import OevwGenossenschaftEntruempelungWien, {
  meta as oevwGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/oevw-genossenschaft-entruempelung-wien";
import SiedlungsunionGenossenschaftEntruempelungWien, {
  meta as siedlungsunionGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/siedlungsunion-genossenschaft-entruempelung-wien";
import FamilienwohnbauGenossenschaftEntruempelungWien, {
  meta as familienwohnbauGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/familienwohnbau-genossenschaft-entruempelung-wien";
import EgwGenossenschaftEntruempelungNiederoesterreich, {
  meta as egwGenossenschaftEntruempelungNiederoesterreichMeta,
} from "@/components/ratgeber/articles/egw-genossenschaft-entruempelung-niederoesterreich";
import EbsgGenossenschaftEntruempelungNoeBurgenland, {
  meta as ebsgGenossenschaftEntruempelungNoeBurgenlandMeta,
} from "@/components/ratgeber/articles/ebsg-genossenschaft-entruempelung-noe-burgenland";
import EbgGenossenschaftEntruempelungWien, {
  meta as ebgGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/ebg-genossenschaft-entruempelung-wien";
import BauhilfeGenossenschaftEntruempelungWien, {
  meta as bauhilfeGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/bauhilfe-genossenschaft-entruempelung-wien";
import HaushaltsaufloesungErwachsenenvertretungWien, {
  meta as haushaltsaufloesungErwachsenenvertretungWienMeta,
} from "@/components/ratgeber/articles/haushaltsaufloesung-erwachsenenvertretung-wien";
import ArwagGenossenschaftEntruempelungWien, {
  meta as arwagGenossenschaftEntruempelungWienMeta,
} from "@/components/ratgeber/articles/arwag-genossenschaft-entruempelung-wien";
import BueroaufloesungWienDiskretionDatenschutz, {
  meta as bueroaufloesungWienDiskretionDatenschutzMeta,
} from "@/components/ratgeber/articles/bueroaufloesung-wien-diskretion-datenschutz";
import VerlassenschaftEntruempelungWienSensibel, {
  meta as verlassenschaftEntruempelungWienSensibelMeta,
} from "@/components/ratgeber/articles/verlassenschaft-entruempelung-wien-sensibel";
import RaeumungWasserschadenBrandschadenWien, {
  meta as raeumungWasserschadenBrandschadenWienMeta,
} from "@/components/ratgeber/articles/raeumung-wasserschaden-brandschaden-wien";
import ExpressEntruempelungWien24hKrisenmanagement, {
  meta as expressEntruempelungWien24hKrisenmanagementMeta,
} from "@/components/ratgeber/articles/express-entruempelung-wien-24h-krisenmanagement";
import KellerAufraeumenEntruempelnWien, {
  meta as kellerAufraeumenEntruempelnWienMeta,
} from "@/components/ratgeber/articles/keller-aufraeumen-entruempeln-wien";
import BueroentruempelungWienDsgvoRueckbau, {
  meta as bueroentruempelungWienDsgvoRueckbauMeta,
} from "@/components/ratgeber/articles/bueroentruempelung-wien-dsgvo-rueckbau";
import GaragenentruempelungWienKostenAblauf, {
  meta as garagenentruempelungWienKostenAblaufMeta,
} from "@/components/ratgeber/articles/garagenentruempelung-wien-kosten-ablauf";
import GartenentruempelungWienKostenAblauf, {
  meta as gartenentruempelungWienKostenAblaufMeta,
} from "@/components/ratgeber/articles/gartenentruempelung-wien-kosten-ablauf";
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
  register(entruempelungOttakringWien1160Meta, EntruempelungOttakringWien1160),
  register(entruempelungMeidlingWien1120Meta, EntruempelungMeidlingWien1120),
  register(entruempelungFloridsdorfWien1210Meta, EntruempelungFloridsdorfWien1210),
  register(entruempelungLeopoldstadtWien1020Meta, EntruempelungLeopoldstadtWien1020),
  register(entruempelungFavoritenWien1100Meta, EntruempelungFavoritenWien1100),
  register(entruempelungDonaustadtWien1220Meta, EntruempelungDonaustadtWien1220),
  register(entruempelungLiesingWien1230Meta, EntruempelungLiesingWien1230),
  register(entruempelung1010WienMeta, Entruempelung1010Wien),
  register(arwagGenossenschaftEntruempelungWienMeta, ArwagGenossenschaftEntruempelungWien),
  register(haushaltsaufloesungErwachsenenvertretungWienMeta, HaushaltsaufloesungErwachsenenvertretungWien),
  register(bauhilfeGenossenschaftEntruempelungWienMeta, BauhilfeGenossenschaftEntruempelungWien),
  register(ebgGenossenschaftEntruempelungWienMeta, EbgGenossenschaftEntruempelungWien),
  register(ebsgGenossenschaftEntruempelungNoeBurgenlandMeta, EbsgGenossenschaftEntruempelungNoeBurgenland),
  register(egwGenossenschaftEntruempelungNiederoesterreichMeta, EgwGenossenschaftEntruempelungNiederoesterreich),
  register(familienwohnbauGenossenschaftEntruempelungWienMeta, FamilienwohnbauGenossenschaftEntruempelungWien),
  register(siedlungsunionGenossenschaftEntruempelungWienMeta, SiedlungsunionGenossenschaftEntruempelungWien),
  register(oevwGenossenschaftEntruempelungWienMeta, OevwGenossenschaftEntruempelungWien),
  register(buwogGenossenschaftEntruempelungWienMeta, BuwogGenossenschaftEntruempelungWien),
  register(stadtWienGemeindewohnungRueckgabevorgabenMeta, StadtWienGemeindewohnungRueckgabevorgaben),
  register(gemeindebauWienerWohnenWohnungsuebergabeMeta, GemeindebauWienerWohnenWohnungsuebergabe),
  register(bueroaufloesungWienDiskretionDatenschutzMeta, BueroaufloesungWienDiskretionDatenschutz),
  register(verlassenschaftEntruempelungWienSensibelMeta, VerlassenschaftEntruempelungWienSensibel),
  register(raeumungWasserschadenBrandschadenWienMeta, RaeumungWasserschadenBrandschadenWien),
  register(expressEntruempelungWien24hKrisenmanagementMeta, ExpressEntruempelungWien24hKrisenmanagement),
  register(kellerAufraeumenEntruempelnWienMeta, KellerAufraeumenEntruempelnWien),
  register(bueroentruempelungWienDsgvoRueckbauMeta, BueroentruempelungWienDsgvoRueckbau),
  register(garagenentruempelungWienKostenAblaufMeta, GaragenentruempelungWienKostenAblauf),
  register(gartenentruempelungWienKostenAblaufMeta, GartenentruempelungWienKostenAblauf),
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
  const current = getRatgeberArticle(currentSlug);
  const slugs = resolveRelatedSlugs(currentSlug, current?.relatedSlugs, limit);
  if (slugs?.length) {
    return slugs
      .map((slug) => getRatgeberArticle(slug))
      .filter((a): a is RatgeberArticleEntry => a !== undefined)
      .slice(0, limit);
  }
  return RATGEBER_ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, limit);
}

/** Hero & OG — gleiches Bild wie Startseite. */
export const RATGEBER_HERO_IMAGE = "/hero.webp";

export const RATGEBER_HERO_IMAGE_ALT =
  "Professionelle Entrümpelung in Wien — Sofort Entrümpelung";
