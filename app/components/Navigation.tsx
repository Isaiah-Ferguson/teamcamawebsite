"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline/15 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            alt="TEAM CAMA"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhPMF8ZFQNiUt6w3XzZzVC7F3jp3oOlCRT_eQPMw9xr679hsB0Mdr72IbrnvO1OJAFeEYC8UVWQ1VnnlYEA3YTp5yFFF7WoVBCNj80XCC3hAqGn2Ac8OaWv0h_j-6XN7Tb0-N6hGFpvVNhZ2oouWngzflTXHebE62VERVdRI3yLmxPiCtJwTIc84fMncHijsr0o6HkY0LuEDemaawndJMmpzszNtXy6wK-vezxCgsVLPjXgScx0zA6MffQaw8akFd1t5ESJumag8g"
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
        <button className="bg-primary text-white font-body font-bold text-xs px-6 py-2.5 tracking-widest uppercase transition-all duration-200 active:scale-95 hover:bg-opacity-90">
          JOIN NOW
        </button>
      </div>
    </nav>
  );
}
