"use client";

import Dialog from "./Dialog";
import ContactForm from "../contact/ContactForm";

export default function ContactModal({ isOpen, onClose, program }: {
  isOpen: boolean;
  onClose: () => void;
  program?: string;
}) {
  if (!isOpen) return null;
  return <Dialog title="Your first class starts here" onClose={onClose}>
    <div className="p-5 sm:p-7"><ContactForm program={program} compact /></div>
  </Dialog>;
}
