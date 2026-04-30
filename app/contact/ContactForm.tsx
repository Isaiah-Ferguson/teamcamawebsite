"use client";

import { useState } from "react";

const classOptions = [
  "Brazilian Jiu-Jitsu",
  "Muay Thai",
  "Taekwondo",
  "Private instruction",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const cls = String(data.get("class") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `Class inquiry from ${name || "a new student"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Class: ${cls}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:Cama5638@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface-2 border border-rule rounded-lg p-8 text-center">
        <h2 className="font-headline text-2xl font-bold text-ink mb-3">
          Message ready to send.
        </h2>
        <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mx-auto">
          We opened your email app with a draft. Send it from there and we will
          get back to you within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-2 border border-rule rounded-lg p-6 sm:p-8 space-y-6"
    >
      <h2 className="font-headline text-2xl font-bold text-ink">
        Get in touch
      </h2>
      <Field name="name" label="Your name" type="text" required autoComplete="name" />
      <Field name="email" label="Email" type="email" required autoComplete="email" />
      <div>
        <label htmlFor="class" className="block text-sm font-medium text-ink mb-1.5">
          Which class are you interested in?
        </label>
        <select
          id="class"
          name="class"
          className="w-full bg-surface border border-rule rounded px-3 py-2.5 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          defaultValue={classOptions[classOptions.length - 1]}
        >
          {classOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Anything we should know? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Beginner, returning, training for a comp, kids program, etc."
          className="w-full bg-surface border border-rule rounded px-3 py-2.5 text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-y"
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-accent-ink font-medium px-6 py-3 rounded hover:bg-accent-hover transition-colors"
      >
        Send
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type: "text" | "email";
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        className="w-full bg-surface border border-rule rounded px-3 py-2.5 text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
      />
    </div>
  );
}
