"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Dialog from "./Dialog";
import { site } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/about", label: "Our story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Visit us" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="fixed top-0 inset-x-0 z-40 border-b border-rule glass-nav">
    <div className="site-container flex h-18 md:h-20 items-center justify-between gap-3 sm:gap-5">
      <Link href="/" aria-label="Team Cama home" className="flex shrink-0 items-center gap-2 sm:gap-3">
        <Image alt="" src="/TeamLogo.png" width={44} height={44} className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 object-contain" />
        <span className="font-headline text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap uppercase">Team Cama<span className="text-primary">.</span></span>
      </Link>
      <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-8">
        {links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`py-3 text-xs uppercase tracking-widest font-medium border-b ${pathname === href ? "text-ink border-primary" : "border-transparent text-ink-muted hover:text-ink"}`}>{label}</Link>)}
      </nav>
      <div className="flex shrink-0 items-center gap-4">
        <Link href="/contact#inquiry" className="btn btn-primary hidden md:inline-flex">Try a free class <span aria-hidden="true">↗</span></Link>
        <button type="button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} aria-haspopup="dialog" className="xl:hidden w-11 h-11 shrink-0 flex items-center justify-center border border-rule">
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
        </button>
      </div>
    </div>
    {open && <Dialog title="Explore Team Cama" onClose={() => setOpen(false)}>
      <nav aria-label="Mobile navigation" className="p-6">
        {links.map(({ href, label }, i) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined} className={`flex items-center justify-between border-b border-rule py-4 font-headline text-3xl uppercase ${pathname === href ? "text-primary" : "text-ink"}`}><span>{label}</span><span className="font-body text-xs text-ink-subtle">0{i + 1}</span></Link>)}
        <p className="text-sm text-ink-muted mt-6">{site.address.street}<br />{site.address.city}, {site.address.regionName}</p>
      </nav>
    </Dialog>}
  </header>;
}
