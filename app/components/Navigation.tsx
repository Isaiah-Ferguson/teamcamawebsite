"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Photos" },
  { href: "/contact", label: "Visit" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="sticky top-0 w-full z-40 bg-surface/95 supports-backdrop-filter:bg-surface/80 backdrop-blur-sm border-b border-rule">
      <div className="flex justify-between items-center px-5 md:px-10 py-4 max-w-7xl mx-auto gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="Team Cama home"
        >
          <Image
            alt=""
            className="h-9 w-auto"
            src="https://preblobaccount.blob.core.windows.net/prerecordedblob/TeamLogo.png"
            width={108}
            height={36}
          />
          <span className="text-lg font-headline font-bold text-ink tracking-tight">
            Team Cama
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative font-body text-[15px] font-medium transition-colors py-2 ${
                  active ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
        >
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-body text-sm">Stockton, CA</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 w-11 h-11 justify-center items-center -mr-2 text-ink"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!isMobileMenuOpen}
        className="md:hidden border-t border-rule bg-surface"
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-base py-3 px-2 rounded ${
                  active ? "text-accent font-semibold" : "text-ink hover:bg-surface-2"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 pt-4 border-t border-rule flex items-start gap-3 text-ink-muted text-sm py-2 px-2"
          >
            <svg
              className="w-4 h-4 mt-0.5 text-accent shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>8855 Thornton Rd Suite B, Stockton</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
