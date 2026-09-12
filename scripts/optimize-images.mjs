// Resize and re-encode photos from ./originals into ./public/images.
//
//   originals/gallery/2024-competition-allie-winston.jpg
//     -> public/images/gallery/2024-competition-allie-winston.jpg
//
// Drop a full-size photo into the matching folder under originals/, run
// `npm run images`, and commit what appears under public/images. Originals are
// gitignored so the repo only ever holds web-sized copies. Names are slugified
// (lowercase, hyphens), photos become progressive JPEGs at most 2400px on the
// long edge, and PNGs that use transparency stay PNG. Existing outputs newer
// than their source are skipped; pass --force to rebuild everything.
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const SOURCE = "originals";
const OUTPUT = path.join("public", "images");
const MAX_EDGE = 2400;
const force = process.argv.includes("--force");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (imageExtensions.has(path.extname(entry.name).toLowerCase()) && !entry.name.startsWith(".")) yield full;
  }
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function megabytes(bytes) {
  return (bytes / 1048576).toFixed(2).padStart(6) + " MB";
}

let processed = 0, skipped = 0, before = 0, after = 0;
const failed = [];
for await (const file of walk(SOURCE)) {
  try {
    const relative = path.relative(SOURCE, file);
    const parsed = path.parse(relative);
    const slug = slugify(parsed.name);
    if (slug !== parsed.name) console.log(`  renamed ${parsed.name} -> ${slug}`);

    const source = sharp(file, { failOn: "none" });
    const meta = await source.metadata();
    // Many exported PNGs carry an alpha channel that is fully opaque. Only keep PNG
    // when some pixel is actually transparent; everything else becomes a JPEG.
    const alphaMin = meta.hasAlpha ? (await source.stats()).channels.at(-1).min : 255;
    const keepPng = meta.format === "png" && alphaMin < 255;
    const out = path.join(OUTPUT, parsed.dir, slug + (keepPng ? ".png" : ".jpg"));

    const sourceStat = await stat(file);
    const outStat = await stat(out).catch(() => null);
    if (!force && outStat && outStat.mtimeMs >= sourceStat.mtimeMs) { skipped++; continue; }

    await mkdir(path.dirname(out), { recursive: true });
    let pipeline = source.rotate().resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true });
    pipeline = keepPng
      ? pipeline.png({ compressionLevel: 9, palette: true, quality: 90 })
      : pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true });
    const info = await pipeline.toFile(out);

    processed++; before += sourceStat.size; after += info.size;
    console.log(`${megabytes(sourceStat.size)} -> ${megabytes(info.size)}  ${info.width}x${info.height}  ${path.relative(OUTPUT, out)}`);
  } catch (error) {
    failed.push(relative);
    console.error(`FAILED ${relative}: ${error.message}`);
  }
}

console.log(`\n${processed} written, ${skipped} up to date` + (processed ? `, ${megabytes(before).trim()} -> ${megabytes(after).trim()}` : ""));
if (failed.length) { console.error(`${failed.length} failed: ${failed.join(", ")}`); process.exitCode = 1; }
