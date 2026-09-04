"use client";

import { useEffect, useRef } from "react";

export default function Dialog({ title, onClose, children, wide = false, onKeyDown }: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLDialogElement>;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return <dialog
    ref={ref}
    aria-label={title}
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onKeyDown={onKeyDown}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose();
    }}
    className={`m-auto w-[calc(100%-2rem)] ${wide ? "max-w-5xl" : "max-w-xl"} max-h-[calc(100svh-2rem)] overflow-y-auto overscroll-contain border border-rule bg-surface text-ink p-0 rounded-sm shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm`}
  >
    <div className="sticky top-0 z-10 bg-surface flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-rule">
      <h2 className="font-headline text-3xl font-semibold uppercase">{title}</h2>
      <button type="button" onClick={onClose} className="w-11 h-11 shrink-0 flex items-center justify-center border border-rule hover:bg-surface-3 transition-colors" aria-label="Close dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
      </button>
    </div>
    {children}
  </dialog>;
}
