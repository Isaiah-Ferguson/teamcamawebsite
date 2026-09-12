import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Transpile the dependency-free data modules with the project's existing
// TypeScript compiler, so tests work without a browser or another test framework.
async function loadModule(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import("data:text/javascript," + encodeURIComponent(outputText));
}

const { makeContactDraft, contactEmail } = await loadModule("../app/lib/contact.ts");
const { programs, programPath } = await loadModule("../app/lib/programs.ts");
const { instructors } = await loadModule("../app/lib/instructors.ts");
const { legacyRedirects } = await loadModule("../app/lib/redirects.ts");
const { journey } = await loadModule("../app/lib/journey.ts");
const { parseGalleryFilename, captions, sortGallery } = await loadModule("../app/lib/gallery.ts");

test("inquiry links target the academy and preserve the selected program", () => {
  const draft = makeContactDraft({ name: " New Student ", email: " student@example.com ", program: "Muay Thai", message: " First class " });
  const url = new URL(draft.href);
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, contactEmail);
  assert.equal(url.searchParams.get("subject"), "Free class inquiry from New Student");
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.equal(draft.body, "Name: New Student\nEmail: student@example.com\nClass: Muay Thai\n\nFirst class");
});

test("special characters stay inside the draft instead of becoming URL parameters", () => {
  const draft = makeContactDraft({ name: "André & Lee", email: "student+trial@example.com", program: "Brazilian Jiu-Jitsu", message: "Kids & adults?\n#first-class = yes" });
  const url = new URL(draft.href);
  assert.deepEqual([...url.searchParams.keys()], ["subject", "body"]);
  assert.equal(url.searchParams.get("body"), draft.body);
  assert.ok(draft.body.includes("Kids & adults?\n#first-class = yes"));
});

test("all three programs have unique working anchors and schedule rows", () => {
  assert.deepEqual(programs.map(program => program.id), ["bjj", "muay-thai", "taekwondo"]);
  for (const program of programs) {
    assert.ok(program.summary.length);
    assert.ok(program.schedule.length);
    assert.equal(new Set(program.schedule.map(row => row.day + row.group)).size, program.schedule.length);
    for (const row of program.schedule) assert.ok(row.day && row.time && row.group);
  }
});

test("Taekwondo publishes its confirmed kids and adult times", () => {
  const taekwondo = programs.find(program => program.id === "taekwondo");
  assert.equal(taekwondo.confirmTimes, undefined);
  assert.ok(!taekwondo.summary.some(line => /confirm/i.test(line)));
  assert.ok(taekwondo.summary.some(line => line.includes("5:15")));
  assert.ok(taekwondo.summary.some(line => line.includes("9:30")));
  assert.ok(taekwondo.schedule.some(row => /kids/i.test(row.group)));
  assert.ok(taekwondo.schedule.some(row => /adults/i.test(row.group)));
});

test("each discipline gets its own indexable page with local metadata", () => {
  assert.deepEqual(programs.map(program => program.slug), ["brazilian-jiu-jitsu", "muay-thai", "taekwondo"]);
  for (const program of programs) {
    assert.match(program.slug, /^[a-z0-9-]+$/);
    assert.equal(programPath(program), `/classes/${program.slug}`);
    assert.match(program.seo.title, /Stockton, CA$/, program.name + " title should end with the city");
    assert.ok(program.seo.description.length >= 80 && program.seo.description.length <= 165, program.name + " description length");
    assert.ok(program.seo.description.includes("Stockton"));
    assert.ok(program.intro.length >= 2, program.name + " needs real page copy");
    assert.ok(program.highlights.length >= 3);
    assert.ok(program.faq.length >= 3);
    assert.ok(program.photos.length >= 1);
    for (const [question, answer] of program.faq) assert.ok(question.endsWith("?") && answer.length > 20);
  }
});

test("every instructor teaches a known program and every program has a coach", () => {
  const ids = new Set(programs.map(program => program.id));
  assert.equal(new Set(instructors.map(person => person.id)).size, instructors.length);
  for (const person of instructors) {
    assert.match(person.id, /^[a-z0-9-]+$/);
    assert.ok(person.programs.length, person.name + " has no program");
    for (const id of person.programs) assert.ok(ids.has(id), `${person.name} references unknown program ${id}`);
  }
  for (const program of programs) assert.ok(instructors.some(person => person.programs.includes(program.id)), program.name + " has no instructor");
});

// Every path from the old www.teamcama.com sitemap.xml. If a new page or redirect
// disappears, Google's existing index for that URL would start returning 404s.
const legacySitemapPaths = [
  "/", "/instructors/", "/our-philosophy/", "/our-facility/", "/our-facility/photo-gallery/",
  "/our-facility/testimonials/", "/classes/", "/classes/jiu-jitsu/", "/classes/kickboxing/",
  "/classes/taekwondo/", "/classes/private-instruction/", "/photos/", "/memberships/",
  "/news-events/", "/directions/", "/contact-us/",
];

function routeExists(path) {
  const clean = path.split("#")[0];
  if (clean === "/") return existsSync(new URL("../app/page.tsx", import.meta.url));
  const match = clean.match(/^\/classes\/([^/]+)$/);
  if (match) return programs.some(program => program.slug === match[1]);
  return existsSync(new URL(`../app${clean}/page.tsx`, import.meta.url));
}

test("every URL Google indexed on the old site lands on a real page", () => {
  const sources = legacyRedirects.map(redirect => redirect.source);
  assert.equal(new Set(sources).size, sources.length, "duplicate redirect sources");
  for (const redirect of legacyRedirects) {
    assert.ok(!redirect.source.endsWith("/"), `${redirect.source}: Next.js matches sources without a trailing slash`);
    assert.ok(!sources.includes(redirect.destination.split("#")[0]), `${redirect.source} redirects into another redirect`);
    assert.ok(routeExists(redirect.destination), `${redirect.source} -> ${redirect.destination} is not a real route`);
  }
  for (const path of legacySitemapPaths) {
    const normalized = path.length > 1 ? path.replace(/\/$/, "") : path;
    const redirect = legacyRedirects.find(item => item.source === normalized);
    const destination = redirect ? redirect.destination : normalized;
    assert.ok(routeExists(destination), `${path} would 404 on the new site`);
  }
});

test("gallery filenames carry the year, category, and caption", () => {
  assert.deepEqual(parseGalleryFilename("2024-competition-allie-winston.jpg"), { src: "/images/gallery/2024-competition-allie-winston.jpg", alt: captions["2024-competition-allie-winston.jpg"], category: "competition", year: "2024" });
  assert.deepEqual(parseGalleryFilename("team-open-mat-friday.jpg"), { src: "/images/gallery/team-open-mat-friday.jpg", alt: "Open mat friday", category: "team", year: undefined });
  assert.equal(parseGalleryFilename("2015-black-belts-adniel.jpg").category, "black-belts");
  assert.equal(parseGalleryFilename("IMG_4021.jpg"), null);
  assert.equal(parseGalleryFilename("2024-podium-allie.jpg"), null, "unknown category");
  const sorted = sortGallery([parseGalleryFilename("team-b.jpg"), parseGalleryFilename("2011-team-a.jpg"), parseGalleryFilename("2024-team-c.jpg")]);
  assert.deepEqual(sorted.map(item => item.src.split("/").pop()), ["2024-team-c.jpg", "2011-team-a.jpg", "team-b.jpg"]);
});

const galleryDir = new URL("../public/images/gallery/", import.meta.url);

test("every photo in the gallery folder follows the naming convention", () => {
  const files = readdirSync(galleryDir).filter(file => /\.(jpe?g|png|webp|avif)$/i.test(file));
  assert.ok(files.length >= 20, "gallery folder looks empty");
  for (const file of files) assert.ok(parseGalleryFilename(file), `${file} does not match [YYYY-]<category>-<description>`);
  for (const file of Object.keys(captions)) assert.ok(existsSync(new URL(file, galleryDir)), `caption for missing file ${file}`);
});

test("every image the site references exists in public/", async () => {
  const referenced = new Set();
  for (const program of programs) { referenced.add(program.image); for (const photo of program.photos) referenced.add(photo.image); }
  for (const person of instructors) referenced.add(person.image);
  for (const era of journey) referenced.add(era.image);
  const pages = ["../app/page.tsx", "../app/about/page.tsx", "../app/layout.tsx", "../app/components/Footer.tsx", "../app/components/Navigation.tsx"];
  for (const page of pages) for (const match of (await readFile(new URL(page, import.meta.url), "utf8")).matchAll(/"(\/(?:images|[^"\/]+\.(?:png|jpe?g|svg)))[^"]*"/g)) referenced.add(match[1]);
  assert.ok(referenced.size >= 20, "expected more image references");
  for (const src of referenced) {
    assert.match(src, /^\/[A-Za-z0-9\/.-]+$/, `${src} should be a local path, not a remote URL`);
    assert.ok(existsSync(new URL(`../public${src}`, import.meta.url)), `${src} is referenced but missing from public/`);
  }
});

const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("button defaults allow responsive visibility utilities to take precedence", () => {
  assert.match(css, /@layer components\s*\{\s*\.btn\s*\{[^}]*display:\s*inline-flex/);
  assert.equal((css.match(/\.btn\s*\{/g) ?? []).length, 1, "No unlayered button rule may override mobile visibility");
});

function color(name) {
  const hex = css.match(new RegExp("--color-" + name + ":\\s*(#[a-fA-F0-9]{6})"))?.[1];
  assert.ok(hex, "Missing color: " + name);
  const values = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}
function contrast(a, b) { return (Math.max(color(a), color(b)) + 0.05) / (Math.min(color(a), color(b)) + 0.05); }

test("body, secondary text, and button labels retain readable contrast", () => {
  for (const surface of ["background", "surface", "surface-2"]) {
    for (const ink of ["ink", "ink-muted", "ink-subtle"]) assert.ok(contrast(ink, surface) >= 4.5, ink + " on " + surface);
  }
  assert.ok(contrast("accent-ink", "accent") >= 4.5);
});
