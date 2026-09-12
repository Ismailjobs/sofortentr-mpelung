/**
 * Injiziert BezirkEarlyCta + BezirkStructureBlocks in alle 23 Bezirk-Ratgeber
 * (Longform-SEO-Struktur: Soft-CTA, Tabelle, Warning, Checklist).
 */
import fs from "fs";
import path from "path";

const DIR = path.join("src", "components", "ratgeber", "articles");

const ARTICLES = [
  ["entruempelung-1010-wien.tsx", "der Inneren Stadt (1010)", "Entrümpelung 1010 — Fixpreis nach Besichtigung", "Altbau, Fußgängerzone oder Kanzlei: wir besichtigen kostenlos und nennen einen verbindlichen Festpreis."],
  ["entruempelung-leopoldstadt-wien-1020.tsx", "Leopoldstadt (1020)", "Entrümpelung Leopoldstadt 1020", "Prater, Karmeliterviertel oder Nordbahn: kostenlose Besichtigung, klarer Fixpreis."],
  ["entruempelung-landstrasse-wien-1030.tsx", "Landstraße (1030)", "Entrümpelung Landstraße 1030", "Belvedere, Rennweg oder Erdberg: wir planen Zufahrt und Fixpreis vor Ort."],
  ["entruempelung-wieden-wien-1040.tsx", "Wieden (1040)", "Entrümpelung Wieden 1040", "Dichter 4. Bezirk: kostenlose Besichtigung und schriftlicher Fixpreis."],
  ["entruempelung-margareten-wien-1050.tsx", "Margareten (1050)", "Entrümpelung Margareten 1050", "Gründerzeit und enge Höfe: wir klären Zugang und Preis bei der Besichtigung."],
  ["entruempelung-mariahilf-wien-1060.tsx", "Mariahilf (1060)", "Entrümpelung Mariahilf 1060", "Mariahilfer Straße & enge Seitengassen: Fixpreis nach kostenloser Besichtigung."],
  ["entruempelung-neubau-wien-1070.tsx", "Neubau (1070)", "Entrümpelung Neubau 1070", "Spittelberg bis Museumsquartier: diskret räumen zum Fixpreis."],
  ["entruempelung-josefstadt-wien-1080.tsx", "Josefstadt (1080)", "Entrümpelung Josefstadt 1080", "Kompakter 8. Bezirk: Besichtigung, Halteverbot-Planung, Fixpreis."],
  ["entruempelung-alsergrund-wien-1090.tsx", "Alsergrund (1090)", "Entrümpelung Alsergrund 1090", "Uni- und Klinikviertel: terminsicher und diskret zum Fixpreis."],
  ["entruempelung-favoriten-wien-1100.tsx", "Favoriten (1100)", "Gemeindebau-Termin in Favoriten?", "Wiener-Wohnen-Übergabe oder volle Wohnung: wir besichtigen kostenlos und planen Fixpreis + Halteverbot."],
  ["entruempelung-simmering-wien-1110.tsx", "Simmering (1110)", "Entrümpelung Simmering 1110", "Wohnung, Lager oder Siedlung: Fixpreis nach Besichtigung im 11. Bezirk."],
  ["entruempelung-meidling-wien-1120.tsx", "Meidling (1120)", "Entrümpelung Meidling 1120", "Altbau oder Nachkriegsbau: kurze Wege, klarer Fixpreis."],
  ["entruempelung-hietzing-wien-1130.tsx", "Hietzing (1130)", "Entrümpelung Hietzing 1130", "Villenlage und gepflegte Zinshäuser: diskret und zum Fixpreis."],
  ["entruempelung-penzing-wien-1140.tsx", "Penzing (1140)", "Entrümpelung Penzing 1140", "Hanglage und EFH: wir planen Zufahrt und Festpreis vor Ort."],
  ["entruempelung-rudolfsheim-fuenfhaus-wien-1150.tsx", "Rudolfsheim-Fünfhaus (1150)", "Entrümpelung 1150 Wien", "Westbahnhof-Nähe und dichter Alltag: Fixpreis nach Besichtigung."],
  ["entruempelung-ottakring-wien-1160.tsx", "Ottakring (1160)", "Entrümpelung Ottakring 1160", "Brunnenmarkt und Mehrparteienhäuser: pragmatisch mit Fixpreis."],
  ["entruempelung-hernals-wien-1170.tsx", "Hernals (1170)", "Entrümpelung Hernals 1170", "Alszeile und Nachlass: kostenlose Besichtigung, verbindlicher Fixpreis."],
  ["entruempelung-waehring-wien-1180.tsx", "Währing (1180)", "Entrümpelung Währing 1180", "Cottageviertel und Zinshaus: diskret räumen zum Fixpreis."],
  ["entruempelung-doebling-wien-1190.tsx", "Döbling (1190)", "Entrümpelung Döbling 1190", "Villa und Weinlage: sorgfältige Planung, klarer Festpreis."],
  ["entruempelung-brigittenau-wien-1200.tsx", "Brigittenau (1200)", "Entrümpelung Brigittenau 1200", "Gemeindebau und Donaukanal: Fixpreis nach Besichtigung."],
  ["entruempelung-floridsdorf-wien-1210.tsx", "Floridsdorf (1210)", "Entrümpelung Floridsdorf 1210", "Strebersdorf bis Donauinsel: ein Bezirk, klare Logistik, Fixpreis."],
  ["entruempelung-donaustadt-wien-1220.tsx", "Donaustadt (1220)", "Entrümpelung Donaustadt 1220", "Seestadt oder EFH mit Garage: wir kalkulieren nach Besichtigung."],
  ["entruempelung-liesing-wien-1230.tsx", "Liesing (1230)", "Entrümpelung Liesing 1230", "Firmensitz-Bezirk: kurze Wege, Fixpreis, besenreine Übergabe."],
];

const IMPORT_BLOCK = `import { BezirkEarlyCta, BezirkStructureBlocks } from "@/components/ratgeber/BezirkStructureBlocks";
`;

function patchFile(file, districtLabel, earlyTitle, earlyText) {
  const fp = path.join(DIR, file);
  if (!fs.existsSync(fp)) {
    console.warn("missing", file);
    return;
  }
  let s = fs.readFileSync(fp, "utf8");
  if (s.includes("BezirkStructureBlocks")) {
    console.log("skip (already)", file);
    return;
  }

  // import after first import line group
  if (!s.includes("BezirkEarlyCta")) {
    s = s.replace(
      /from "@\/components\/ratgeber\/RatgeberArticleBody";\n/,
      `from "@/components/ratgeber/RatgeberArticleBody";\n${IMPORT_BLOCK}`,
    );
  }

  // Early CTA after Lead
  if (!s.includes("<BezirkEarlyCta")) {
    s = s.replace(
      /<\/RatgeberLead>\s*\n/,
      `</RatgeberLead>

      <BezirkEarlyCta
        title="${earlyTitle.replace(/"/g, '\\"')}"
        text="${earlyText.replace(/"/g, '\\"')}"
      />
`,
    );
  }

  // Structure blocks before final CtaBox (last occurrence)
  const ctaIdx = s.lastIndexOf("<RatgeberCtaBox>");
  if (ctaIdx === -1) {
    console.warn("no CtaBox", file);
    return;
  }
  if (!s.includes("<BezirkStructureBlocks")) {
    const insert = `
      <BezirkStructureBlocks districtLabel="${districtLabel}" />

`;
    s = s.slice(0, ctaIdx) + insert + s.slice(ctaIdx);
  }

  fs.writeFileSync(fp, s);
  console.log("patched", file);
}

for (const row of ARTICLES) {
  patchFile(...row);
}
