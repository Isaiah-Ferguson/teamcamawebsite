import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Transpile the two dependency-free data modules with the project's existing
// TypeScript compiler, so tests work without a browser or another test framework.
async function loadModule(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import("data:text/javascript," + encodeURIComponent(outputText));
}

const { makeContactDraft, contactEmail } = await loadModule("../app/lib/contact.ts");
const { programs } = await loadModule("../app/lib/programs.ts");

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

test("conflicting Taekwondo times remain explicitly marked for confirmation", () => {
  const taekwondo = programs.find(program => program.id === "taekwondo");
  assert.equal(taekwondo.confirmTimes, true);
  assert.ok(taekwondo.summary.some(line => line.includes("confirm")));
  assert.ok(!taekwondo.summary.some(line => line.includes("5:30")));
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
