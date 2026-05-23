/**
 * Komprimiert WebP in public/ (Hero max 1920px, Services max 960px).
 *
 * npm run optimize:images          — komprimieren (in-place oder nach public/_optimized/)
 * npm run optimize:images:apply    — _optimized → public kopieren (OneDrive-Ersatz)
 */
import { randomBytes } from "node:crypto";
import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.join(process.cwd(), "public");
const STAGING = path.join(PUBLIC, "_optimized");
const HERO_MAX = 1920;
const SERVICE_MAX = 960;
const TRUCK_MAX = 880;
const LOGO_MAX = 720;
const QUALITY = 72;
const APPLY = process.argv.includes("--apply");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function collectWebp(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name === "_optimized") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await collectWebp(full, base)));
    } else if (e.name.endsWith(".webp")) {
      files.push(path.relative(base, full).replace(/\\/g, "/"));
    }
  }
  return files;
}

/** Windows / OneDrive: neue Datei schreiben statt bestehende überschreiben. */
async function writeBufferToPath(dest, buffer) {
  const tmp = path.join(os.tmpdir(), `sofort-opt-${randomBytes(8).toString("hex")}.webp`);
  await writeFile(tmp, buffer);

  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      await copyFile(tmp, dest);
      await unlink(tmp);
      return;
    } catch {
      if (attempt < 5) await sleep(350 * (attempt + 1));
    }
  }

  await unlink(dest).catch(() => {});
  try {
    await copyFile(tmp, dest);
    await unlink(tmp);
    return;
  } catch (err) {
    await unlink(tmp).catch(() => {});
    throw err;
  }
}

async function replaceInPublic(relPath, buffer) {
  const dest = path.join(PUBLIC, relPath);
  try {
    await writeBufferToPath(dest, buffer);
    return "in-place";
  } catch {
    const staged = path.join(STAGING, relPath);
    await mkdir(path.dirname(staged), { recursive: true });
    await writeFile(staged, buffer);
    return "staged";
  }
}

async function optimize(relPath) {
  const abs = path.join(PUBLIC, relPath);
  const before = (await stat(abs)).size;
  const isHero = relPath === "hero.webp";
  const isService = relPath.startsWith("services/");
  const maxWidth = isHero
    ? HERO_MAX
    : relPath === "truck.webp"
      ? TRUCK_MAX
      : relPath === "sofort-logo.webp"
        ? LOGO_MAX
        : isService
          ? SERVICE_MAX
          : 1200;

  const input = await readFile(abs);
  const pipeline = sharp(input, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  const resized =
    meta.width && meta.width > maxWidth
      ? pipeline.resize(maxWidth, null, { withoutEnlargement: true })
      : pipeline;

  const out = await resized.webp({ quality: QUALITY, effort: 6 }).toBuffer();
  if (out.length >= before * 0.98) {
    console.log(`  skip ${relPath} (${Math.round(before / 1024)} KB — bereits klein)`);
    return { relPath, status: "skip" };
  }

  const mode = await replaceInPublic(relPath, out);
  const after = mode === "staged" ? out.length : (await stat(abs)).size;
  const pct = Math.round((1 - after / before) * 100);

  if (mode === "staged") {
    console.log(
      `  stage ${relPath}: ${Math.round(before / 1024)} → ${Math.round(after / 1024)} KB (−${pct}%) → public/_optimized/`,
    );
    return { relPath, status: "staged" };
  }

  console.log(`  ok    ${relPath}: ${Math.round(before / 1024)} → ${Math.round(after / 1024)} KB (−${pct}%)`);
  return { relPath, status: "ok" };
}

async function applyStaged() {
  let stagedFiles;
  try {
    stagedFiles = await collectWebp(STAGING, STAGING);
  } catch {
    console.log("Kein public/_optimized/ — nichts anzuwenden.");
    return;
  }

  if (!stagedFiles.length) {
    console.log("public/_optimized/ ist leer.");
    return;
  }

  console.log(`Wende ${stagedFiles.length} optimierte Datei(en) an…\n`);
  let applied = 0;
  let failed = 0;

  for (const rel of stagedFiles.sort()) {
    const src = path.join(STAGING, rel);
    const dest = path.join(PUBLIC, rel);
    const buffer = await readFile(src);
    try {
      await writeBufferToPath(dest, buffer);
      await unlink(src);
      console.log(`  ok  ${rel}`);
      applied++;
    } catch (err) {
      console.warn(`  fail ${rel}: ${err instanceof Error ? err.message : err}`);
      failed++;
    }
  }

  const remaining = await readdir(STAGING, { withFileTypes: true }).catch(() => []);
  if (remaining.every((e) => !e.isFile())) {
    await rm(STAGING, { recursive: true, force: true }).catch(() => {});
  }

  console.log(`\n${applied} angewendet, ${failed} fehlgeschlagen.`);
  if (failed) {
    console.log("Tipp: Cursor/OneDrive schließen, dann erneut: npm run optimize:images:apply");
  }
}

async function main() {
  if (APPLY) {
    await applyStaged();
    return;
  }

  const files = await collectWebp(PUBLIC);
  console.log(`Optimizing ${files.length} WebP files…\n`);

  let ok = 0;
  let staged = 0;
  let skipped = 0;

  for (const f of files.sort()) {
    const result = await optimize(f);
    if (result.status === "ok") ok++;
    else if (result.status === "staged") staged++;
    else skipped++;
  }

  console.log(`\nFertig: ${ok} in-place, ${staged} nach public/_optimized/, ${skipped} übersprungen.`);
  if (staged) {
    console.log("Anwenden: npm run optimize:images:apply");
    console.log("(IDE-WebP-Tabs schließen, ggf. OneDrive kurz pausieren)");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
