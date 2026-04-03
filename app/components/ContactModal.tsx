"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border border-outline/30 p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-headline text-3xl font-bold italic text-white mb-8">Contact Us</h2>
        
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <label htmlFor="Name" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
                Full Name
              </label>
              <input
                id="Name"
                className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body placeholder:text-surface-variant transition-all outline-none"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
                Digital Address
              </label>
              <input
                id="email"
                className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body placeholder:text-surface-variant transition-all outline-none"
                placeholder="email@domain.com"
                type="email"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="MartialArtSelect" className="block font-label text-[10px] tracking-widest text-on-surface/50 mb-3 uppercase font-semibold">
              Focus of Interest
            </label>
            <select id="MartialArtSelect" className="w-full bg-transparent subtle-border border-0 focus:border-b-2 focus:border-primary focus:ring-0 text-white py-4 px-0 font-body transition-all appearance-none cursor-pointer">
              <option className="bg-surface text-white">BRAZILIAN JIU-JITSU</option>
              <option className="bg-surface text-white">MUAY THAI</option>
              <option className="bg-surface text-white">TAEKWON DO</option>
              <option className="bg-surface text-white">PRIVATE INSTRUCTION</option>
            </select>
          </div>
          <button
            className="bg-primary text-white py-5 px-12 font-headline font-bold italic tracking-tight text-sm hover:brightness-110 transition-all active:scale-[0.98]"
            type="submit"
          >
            SUBMIT INQUIRY
          </button>
        </form>
      </div>
    </div>
  );
}
