import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface w-full py-16 px-8 border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img
              alt="TEAM CAMA"
              className="h-8 w-auto opacity-80"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhPMF8ZFQNiUt6w3XzZzVC7F3jp3oOlCRT_eQPMw9xr679hsB0Mdr72IbrnvO1OJAFeEYC8UVWQ1VnnlYEA3YTp5yFFF7WoVBCNj80XCC3hAqGn2Ac8OaWv0h_j-6XN7Tb0-N6hGFpvVNhZ2oouWngzflTXHebE62VERVdRI3yLmxPiCtJwTIc84fMncHijsr0o6HkY0LuEDemaawndJMmpzszNtXy6wK-vezxCgsVLPjXgScx0zA6MffQaw8akFd1t5ESJumag8g"
            />
            <span className="text-lg font-headline font-bold italic text-on-surface">
              TEAM CAMA
            </span>
          </div>
            <div className="flex gap-8">
              <a className="font-label text-[10px] tracking-[0.25em] text-on-surface hover:text-white transition-all uppercase font-bold" href="https://www.instagram.com/teamcama_209" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a className="font-label text-[10px] tracking-[0.25em] text-on-surface hover:text-white transition-all uppercase font-bold" href="https://www.facebook.com/teamcama" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-body font-bold text-white text-xs uppercase tracking-[0.2em] mb-2">
            Connect
          </h4>
          <Link
            className="text-on-surface/60 hover:text-primary transition-colors font-body text-xs uppercase tracking-widest"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-on-surface/60 hover:text-primary transition-colors font-body text-xs uppercase tracking-widest"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="text-on-surface/60 hover:text-primary transition-colors font-body text-xs uppercase tracking-widest"
            href="/classes"
          >
            CLASSES
          </Link>
          <Link
            className="text-on-surface/60 hover:text-primary transition-colors font-body text-xs uppercase tracking-widest"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="font-body font-bold text-white text-xs uppercase tracking-[0.2em] mb-2">
              Contact
            </h4>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              Cama5638@gmail.com
            </p>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              209 482-1352
            </p>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              8909 Thornton Road Suite #2
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-on-surface/40 font-body text-[10px] tracking-[0.2em] uppercase">
              © 2024 TEAM CAMA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
