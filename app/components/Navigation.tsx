"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navigation() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline/15 glass-nav">
      <div className="flex justify-between items-center px-5 md:px-8 py-4 max-w-7xl mx-auto gap-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            alt="TEAM CAMA"
            className="h-10 w-auto"
            src="https://preblobaccount.blob.core.windows.net/prerecordedblob/TeamLogo.png"
            width={120}
            height={40}
          />
          <span className="text-xl font-headline font-bold italic text-white tracking-tighter">
            TEAM CAMA
          </span>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 ${
              isActive("/")
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface hover:text-white"
            }`}
            href="/"
          >
            HOME
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 ${
              isActive("/about")
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface hover:text-white"
            }`}
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 ${
              isActive("/gallery")
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface hover:text-white"
            }`}
            href="/gallery"
          >
            GALLERY
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 ${
              isActive("/classes")
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface hover:text-white"
            }`}
            href="/classes"
          >
            CLASSES
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 ${
              isActive("/contact")
                ? "text-primary border-b border-primary pb-1"
                : "text-on-surface hover:text-white"
            }`}
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-on-surface hover:text-white transition-colors duration-300"
        >
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-body text-xs font-medium">8855 Thornton Rd Suite B, Stockton</span>
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline/15 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col px-8 py-6 space-y-4">
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 py-2 ${isActive("/") ? "text-primary" : "text-on-surface"}`}
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 py-2 ${isActive("/about") ? "text-primary" : "text-on-surface"}`}
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 py-2 ${isActive("/gallery") ? "text-primary" : "text-on-surface"}`}
            href="/gallery"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 py-2 ${isActive("/classes") ? "text-primary" : "text-on-surface"}`}
            href="/classes"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CLASSES
          </Link>
          <Link
            className={`font-body uppercase tracking-widest font-medium text-xs transition-colors duration-300 py-2 ${isActive("/contact") ? "text-primary" : "text-on-surface"}`}
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-white transition-colors duration-300 pt-4 border-t border-outline/15"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body text-xs font-medium">8855 Thornton Rd Suite B, Stockton</span>
          </a>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  );
}
