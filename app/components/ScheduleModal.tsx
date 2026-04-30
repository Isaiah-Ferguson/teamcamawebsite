"use client";

import { useId, useRef } from "react";
import { useDialog } from "./useDialog";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Block = {
  name: string;
  rows: { day: string; time: string; note?: string }[];
  note?: string;
};

const blocks: Block[] = [
  {
    name: "Brazilian Jiu-Jitsu",
    rows: [
      { day: "Mon, Wed, Fri", time: "5:30 – 7:15 PM", note: "All levels" },
    ],
  },
  {
    name: "Muay Thai",
    rows: [
      { day: "Mon, Wed, Fri", time: "7:15 – 8:15 PM", note: "All levels" },
    ],
  },
  {
    name: "Taekwondo",
    rows: [
      { day: "Tue, Thu", time: "5:15 – 6:00 PM", note: "Kids, intermediate / advanced" },
      { day: "Tue, Thu", time: "6:00 – 6:45 PM", note: "Kids, beginner" },
      { day: "Tue, Thu", time: "7:00 – 8:00 PM", note: "Adults (12 and up)" },
      { day: "Sat", time: "9:30 – 10:15 AM", note: "Kids, all levels" },
      { day: "Sat", time: "10:30 – 11:30 AM", note: "Adults (12 and up)" },
    ],
  },
];

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialog(isOpen, onClose, dialogRef);

  if (!isOpen) return null;

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
        className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-surface border-t sm:border border-rule sm:rounded-lg shadow-xl"
      >
        <div className="sticky top-0 bg-surface border-b border-rule px-6 sm:px-8 py-5 flex justify-between items-center gap-6">
          <h2 id={titleId} className="font-headline text-2xl font-bold text-ink">
            Class schedule
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-subtle hover:text-ink transition-colors w-9 h-9 flex items-center justify-center rounded -mr-2"
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

        <div className="px-6 sm:px-8 py-8 space-y-10">
          {blocks.map((block) => (
            <section key={block.name}>
              <h3 className="font-headline text-lg font-bold text-ink mb-4">
                {block.name}
              </h3>
              <ul className="divide-y divide-rule border-y border-rule">
                {block.rows.map((row, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[8rem_1fr_auto] gap-1 sm:gap-6 py-3 items-baseline"
                  >
                    <span className="text-ink font-medium text-[15px]">
                      {row.day}
                    </span>
                    <span className="text-ink-muted text-sm">
                      {row.note}
                    </span>
                    <span className="text-ink text-sm font-mono">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="sticky bottom-0 bg-surface border-t border-rule px-6 sm:px-8 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto sm:ml-auto sm:block py-3 px-6 bg-ink text-surface text-sm font-medium rounded hover:bg-ink-muted transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
