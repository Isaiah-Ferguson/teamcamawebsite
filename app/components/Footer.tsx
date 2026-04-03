import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface w-full py-16 px-8 border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              alt="TEAM CAMA"
              className="h-8 w-auto opacity-80"
              src="https://preblobaccount.blob.core.windows.net/prerecordedblob/TeamLogo.png"
              width={96}
              height={32}
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
          <h4 className="font-body font-bold text-white text-md uppercase tracking-[0.2em] mb-2">
            Class Schedule
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-primary font-body text-sm uppercase tracking-widest font-bold mb-1">Muay Thai</p>
              <p className="text-on-surface/60 font-body text-[12px] tracking-wider">Mon / Wed / Fri: 7:15 PM - 8:15 PM</p>
            </div>
            <div>
              <p className="text-primary font-body text-sm uppercase tracking-widest font-bold mb-1">BJJ</p>
              <p className="text-on-surface/60 font-body text-[12px] tracking-wider">Mon / Wed / Fri: 5:30 PM - 8:30 PM</p>
            </div>
            <div>
              <p className="text-primary font-body text-sm uppercase tracking-widest font-bold mb-1">Taekwondo</p>
              <p className="text-on-surface/60 font-body text-[12px] tracking-wider">Tue / Thu: 5:30 PM - 8:30 PM</p>
              <p className="text-on-surface/60 font-body text-[12px] tracking-wider">Sat: 9:30 AM - 11:30 AM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="font-body font-bold text-white text-md uppercase tracking-[0.2em] mb-2">
              Contact
            </h4>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              Cama5638@gmail.com
            </p>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              209 482-1352
            </p>
            <p className="text-on-surface/60 font-body text-xs uppercase tracking-widest">
              8855 Thornton Rd Suite B
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-on-surface/40 font-body text-[10px] tracking-[0.2em] uppercase">
              © est. 2011 Concepcion Academy of Martial Arts. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
