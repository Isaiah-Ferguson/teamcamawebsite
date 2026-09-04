"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function TrialButton({ className = "btn btn-primary", children = "Try a free class", program }: {
  className?: string;
  children?: React.ReactNode;
  program?: string;
}) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog">{children}<span aria-hidden="true">↗</span></button>
    {open && <ContactModal isOpen onClose={() => setOpen(false)} program={program} />}
  </>;
}
