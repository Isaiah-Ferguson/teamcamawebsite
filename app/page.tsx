"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToDisciplines = () => {
    const disciplinesSection = document.getElementById('disciplines');
    if (disciplinesSection) {
      disciplinesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Navigation />

      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="High Intensity Martial Arts"
            className="w-full h-full object-cover grayscale opacity-40"
            src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454176462-Promotion1.78f9ff1c10110cc40b48.jpg"
            fill
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-label text-primary font-bold tracking-[0.4em] uppercase mb-6 text-xs border-l-2 border-primary pl-4">
              Est. 2010
            </p>
            <h1 className="font-headline text-6xl md:text-8xl font-bold leading-tight text-white mb-8 tracking-tight">
              Team <br /> <span className="italic font-normal text-on-surface/40">Cama</span>
            </h1>
            <p className="text-on-surface/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
              "The journey of a thousand miles begins with a single step"</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="bg-primary px-10 py-4 text-white font-headline font-bold uppercase tracking-widest text-sm transition-all hover:bg-[#b01e14] rounded-sm shadow-lg shadow-primary/10"
              >
                START YOUR Journey
              </button>
              <button 
                onClick={scrollToDisciplines}
                className="border border-outline/40 px-10 py-4 text-white font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all rounded-sm"
              >
                VIEW DISCIPLINES
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-background">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                WHY <span className="italic text-primary">TEAM CAMA?</span>
              </h2>
              <div className="w-24 h-1 bg-primary/30"></div>
            </div>
            <div className="lg:col-span-5 pt-4">
              <p className="text-on-surface/60 text-lg leading-relaxed font-light">
                We don&apos;t believe in going through the motions.
                Every movement has purpose. Every class is intentional.
                We&apos;re here to help you improve — physically, mentally, and consistently.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="text-primary/80 mb-8 transition-transform group-hover:translate-x-2">
              </div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">INTEGRITY</h3>
              <p className="text-on-surface/50 leading-relaxed text-sm font-light">
                Our instructors are former world-class competitors and tactical specialists with decades of proven results.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="text-primary/80 mb-8 transition-transform group-hover:translate-x-2">
              </div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">RESPECT</h3>
              <p className="text-on-surface/50 leading-relaxed text-sm font-light">
                Utilizing biomechanical analysis to optimize striking patterns and grappling efficiency for maximum leverage.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="text-primary/80 mb-8 transition-transform group-hover:translate-x-2">
              </div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">DISCIPLINE</h3>
              <p className="text-on-surface/50 leading-relaxed text-sm font-light">
                A high-intensity, controlled environment designed for rapid skill acquisition and extreme physical conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="disciplines" className="py-40 bg-background">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl mb-20">
          <h2 className="font-headline text-4xl font-bold text-white tracking-tight uppercase text-center">
            THE <span className="text-primary/50">DISCIPLINES</span>
          </h2>
        </div>
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[550px] relative overflow-hidden group rounded-sm border border-outline/10">
              <Image
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454195728-Sammy2.deb1fd8fc4bd4fb9e99b.jpg"
                alt="Taekwondo"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-8 right-8 space-y-4">
                <h3 className="font-headline text-3xl font-bold text-white italic">TAEKWONDO</h3>
                <p className="text-on-surface/60 text-sm font-light leading-relaxed">Master the art of explosive striking.</p>
                <Link href="/classes" className="w-full py-3 border border-outline/30 text-white font-headline font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all rounded-sm block text-center">
                  EXPLORE PROGRAM
                </Link>
              </div>
            </div>
            <div className="h-[550px] relative overflow-hidden group rounded-sm border border-outline/10">
            <Image
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
              src="https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_2379.jpg"
              alt="Muay Thai"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-8 right-8 space-y-4">
              <h3 className="font-headline text-3xl font-bold text-white italic">MUAY THAI</h3>
              <p className="text-on-surface/60 text-sm font-light leading-relaxed">The science of eight limbs.</p>
              <Link href="/classes" className="w-full py-3 border border-outline/30 text-white font-headline font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all rounded-sm block text-center">
                EXPLORE PROGRAM
              </Link>
            </div>
          </div>
            <div className="h-[550px] relative overflow-hidden group rounded-sm border border-outline/10">
              <Image
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                src="https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_3602.jpg"
                alt="Jiu Jitsu"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-8 right-8 space-y-4">
                <h3 className="font-headline text-3xl font-bold text-white italic">Brazilian Jiu Jitsu</h3>
                <p className="text-on-surface/60 text-sm font-light leading-relaxed">Technique over strength, control opponents</p>
                <Link href="/classes" className="w-full py-3 border border-outline/30 text-white font-headline font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all rounded-sm block text-center">
                  EXPLORE PROGRAM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </>
  );
}
