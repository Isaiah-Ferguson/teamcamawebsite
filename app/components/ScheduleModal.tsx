"use client";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-surface border border-outline/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm">
        <div className="sticky top-0 bg-surface border-b border-outline/20 px-8 py-6 flex justify-between items-center">
          <h2 className="font-headline text-3xl font-bold text-white italic">Class Schedule</h2>
          <button
            onClick={onClose}
            className="text-on-surface hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-primary/30"></div>
              <h3 className="font-headline text-2xl font-bold text-primary italic">Muay Thai</h3>
              <div className="h-px flex-1 bg-primary/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Monday</p>
                <p className="text-white font-headline text-xl mb-2">7:15 PM - 8:15 PM</p>
              </div>
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Wednesday</p>
                <p className="text-white font-headline text-xl mb-2">7:15 PM - 8:15 PM</p>
              </div>
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Friday</p>
                <p className="text-white font-headline text-xl mb-2">7:15 PM - 8:15 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-primary/30"></div>
              <h3 className="font-headline text-2xl font-bold text-primary italic">Brazilian Jiu-Jitsu</h3>
              <div className="h-px flex-1 bg-primary/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Monday</p>
                <p className="text-white font-headline text-xl mb-2">6:00 PM - 7:10 PM</p>
              </div>
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Wednesday</p>
                <p className="text-white font-headline text-xl mb-2">6:00 PM - 7:10 PM</p>
              </div>
              <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase font-bold mb-3">Friday</p>
                <p className="text-white font-headline text-xl mb-2">6:00 PM - 7:10 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-primary/30"></div>
              <h3 className="font-headline text-2xl font-bold text-primary italic">Taekwondo</h3>
              <div className="h-px flex-1 bg-primary/30"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/60 uppercase font-bold mb-4">Tuesday & Thursday</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                    <p className="font-body text-primary text-sm font-semibold mb-2">Kids Beginner</p>
                    <p className="text-white font-headline text-lg">6:00 PM - 6:45 PM</p>
                  </div>
                  <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                    <p className="font-body text-primary text-sm font-semibold mb-2">Kids Inter/Adv</p>
                    <p className="text-white font-headline text-lg">5:15 PM - 6:00 PM</p>
                  </div>
                  <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                    <p className="font-body text-primary text-sm font-semibold mb-2">Adults (12 & up)</p>
                    <p className="text-white font-headline text-lg">7:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-label text-[10px] tracking-[0.2em] text-on-surface/60 uppercase font-bold mb-4">Saturday</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                    <p className="font-body text-primary text-sm font-semibold mb-2">Kids (All Levels)</p>
                    <p className="text-white font-headline text-lg">9:30 AM - 10:15 AM</p>
                  </div>
                  <div className="bg-background/50 border border-outline/20 p-6 rounded-sm">
                    <p className="font-body text-primary text-sm font-semibold mb-2">Adults (12 & up)</p>
                    <p className="text-white font-headline text-lg">10:30 AM - 11:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-surface border-t border-outline/20 px-8 py-6">
          <button
            onClick={onClose}
            className="w-full py-4 bg-primary text-white font-headline font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all rounded-sm"
          >
            Close Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
