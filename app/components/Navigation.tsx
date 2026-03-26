"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navigation() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline/15 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            alt="TEAM CAMA"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhPMF8ZFQNiUt6w3XzZzVC7F3jp3oOlCRT_eQPMw9xr679hsB0Mdr72IbrnvO1OJAFeEYC8UVWQ1VnnlYEA3YTp5yFFF7WoVBCNj80XCC3hAqGn2Ac8OaWv0h_j-6XN7Tb0-N6hGFpvVNhZ2oouWngzflTXHebE62VERVdRI3yLmxPiCtJwTIc84fMncHijsr0o6HkY0LuEDemaawndJMmpzszNtXy6wK-vezxCgsVLPjXgScx0zA6MffQaw8akFd1t5ESJumag8g"
            width={120}
            height={40}
          />
          <span className="text-xl font-headline font-bold italic text-white tracking-tighter">
            TEAM CAMA
          </span>
        </div>
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
          className="flex items-center gap-2 text-on-surface hover:text-white transition-colors duration-300"
        >
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-body text-xs font-medium">8855 Thornton Rd Suite B, Stockton</span>
        </a>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  );
}
