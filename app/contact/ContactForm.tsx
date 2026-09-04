"use client";

import { useId, useState } from "react";
import { contactEmail as emailAddress, makeContactDraft } from "../lib/contact";

const classOptions = ["Brazilian Jiu-Jitsu", "Muay Thai", "Taekwondo", "Private instruction", "Not sure yet"];

export default function ContactForm({ program, compact = false }: { program?: string; compact?: boolean }) {
  const id = useId();
  const [draft, setDraft] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { body, href } = makeContactDraft({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      program: String(data.get("class") || ""),
      message: String(data.get("message") || ""),
    });
    setDraft(body);
    setCopyState("idle");
    window.location.href = href;
  }

  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setCopyState("copied"); }
    catch { setCopyState("failed"); }
  }

  return <div className={compact ? "" : "bg-surface border border-rule p-6 sm:p-8"}>
    {!compact && <><p className="eyebrow text-primary mb-3">First class, on us</p><h2 className="font-headline text-4xl font-semibold uppercase mb-3">Let&apos;s get you started.</h2></>}
    <p className="text-sm text-ink-muted leading-relaxed mb-7">Tell us which class you&apos;d like to try. This form opens a draft in your email app—you&apos;ll send it from there.</p>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label htmlFor={id + "-name"} className="block text-sm font-medium mb-2">Your name <span className="text-primary" aria-hidden="true">*</span></label><input id={id + "-name"} name="name" type="text" autoComplete="name" required maxLength={120} className="field" /></div>
        <div><label htmlFor={id + "-email"} className="block text-sm font-medium mb-2">Email <span className="text-primary" aria-hidden="true">*</span></label><input id={id + "-email"} name="email" type="email" autoComplete="email" required maxLength={254} className="field" /></div>
      </div>
      <div><label htmlFor={id + "-class"} className="block text-sm font-medium mb-2">Which class interests you?</label><select id={id + "-class"} name="class" defaultValue={program && classOptions.includes(program) ? program : "Not sure yet"} className="field">{classOptions.map(option => <option key={option}>{option}</option>)}</select></div>
      <div><label htmlFor={id + "-message"} className="block text-sm font-medium mb-2">A little about you <span className="text-ink-subtle font-normal">(optional)</span></label><textarea id={id + "-message"} name="message" rows={3} maxLength={1500} placeholder="New to training? Looking for a kids class? Let us know." className="field resize-y" /></div>
      <button type="submit" className="btn btn-primary w-full">Open email draft <span aria-hidden="true">↗</span></button>
    </form>
    {draft && <div className="border border-rule bg-background p-4 mt-5">
      <p role="status" className="font-medium text-sm">Your draft is ready. It has not been sent.</p>
      <p className="text-ink-muted text-sm mt-2 leading-relaxed">If your email app opened, send the message there. Otherwise, copy the draft below and email <a className="underline break-all" href={`mailto:${emailAddress}`}>{emailAddress}</a>.</p>
      <details className="mt-3 text-sm"><summary className="py-2">View your draft</summary><pre className="whitespace-pre-wrap break-words text-ink-muted text-xs p-3 border border-rule mt-2 select-text">{draft}</pre></details>
      <button type="button" onClick={copyDraft} className="text-link">Copy draft</button>
      <p role="status" className="text-sm text-ink-muted mt-2">{copyState === "copied" ? "Draft copied." : copyState === "failed" ? "Open “View your draft” above, then select and copy the text." : ""}</p>
    </div>}
    <div className="mt-6 pt-5 border-t border-rule text-sm text-ink-muted flex flex-wrap gap-x-4 gap-y-2"><span>Prefer to talk?</span><a className="text-ink underline underline-offset-4" href="tel:+12094821352">(209) 482-1352</a></div>
  </div>;
}
