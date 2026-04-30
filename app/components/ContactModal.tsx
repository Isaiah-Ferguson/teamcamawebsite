"use client";

import { useId, useRef, useState } from "react";
import { useDialog } from "./useDialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const classOptions = [
  "Brazilian Jiu-Jitsu",
  "Muay Thai",
  "Taekwondo",
  "Private instruction",
  "Not sure yet",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useDialog(isOpen, onClose, dialogRef);

  if (!isOpen) return null;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-ink/30 backdrop-blur-[2px] cursor-default"
        onClick={onClose}
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full sm:max-w-xl max-h-[92vh] overflow-y-auto bg-surface border-t sm:border border-rule sm:rounded-lg shadow-xl"
      >
        <div className="flex items-start justify-between gap-6 px-6 sm:px-8 pt-6 pb-4 border-b border-rule">
          <div>
            <h2 id={titleId} className="font-headline text-2xl font-bold text-ink">
              Get in touch
            </h2>
            <p id={descId} className="text-ink-muted text-sm mt-1">
              We will email you back about a free first class.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-subtle hover:text-ink transition-colors w-9 h-9 flex items-center justify-center rounded -mr-2 -mt-1"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="px-6 sm:px-8 py-12 text-center">
            <h3 className="font-headline text-xl font-bold text-ink mb-3">
              Message ready to send.
            </h3>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm mx-auto">
              We opened your email app with a draft. Send it from there and we
              will get back to you within a day or two.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 px-6 py-3 bg-ink text-surface text-sm font-medium rounded hover:bg-ink-muted transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="px-6 sm:px-8 py-6 space-y-6" onSubmit={handleSubmit}>
            <Field label="Your name" name="name" type="text" required autoComplete="name" />
            <Field label="Email" name="email" type="email" required autoComplete="email" />
            <SelectField label="Which class are you interested in?" name="class" options={classOptions} />
            <TextAreaField
              label="Anything we should know? (optional)"
              name="message"
              placeholder="Beginner, returning, training for a comp, kids program, etc."
            />
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-ink-muted text-sm font-medium px-5 py-3 rounded hover:text-ink"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-accent text-accent-ink font-medium px-6 py-3 rounded hover:bg-accent-hover transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: "text" | "email";
  required?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink mb-1.5"
      >
        {label}
        {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        className="w-full bg-surface-2 border border-rule rounded px-3 py-2.5 text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink mb-1.5"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="w-full bg-surface-2 border border-rule rounded px-3 py-2.5 text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
        defaultValue={options[options.length - 1]}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink mb-1.5"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={3}
        placeholder={placeholder}
        className="w-full bg-surface-2 border border-rule rounded px-3 py-2.5 text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-y"
      />
    </div>
  );
}
