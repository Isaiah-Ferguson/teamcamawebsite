"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScheduleModal from "../components/ScheduleModal";
import ContactModal from "../components/ContactModal";

export default function Classes() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <Navigation />

      <main className="pt-40 pb-32">
        <header className="px-8 md:px-12 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-body text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              CLASSES
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
              Select Your <span className="italic text-primary">Discipline</span>
            </h1>
            <p className="text-on-surface/80 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Each program is designed to develop strong fundamentals, sharpen technique, and push you to improve.            </p>
          </div>
        </header>

        <section className="px-8 md:px-12 max-w-7xl mx-auto space-y-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-1 lg:order-1">
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-primary/40 z-10"></div>
              <div className="overflow-hidden relative aspect-[4/5]">
                <Image
                  alt="Muay Thai"
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454132127-ChristionKnee.62b6231fcf1572e449cb.jpg"
                  fill
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/20">
                Christian Orellana
              </div>
            </div>
            <div className="space-y-10 lg:pl-12 order-2 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl font-bold text-white tracking-tight">Muay Thai</h2>
                <div className="h-1 w-12 bg-primary"></div>
              </div>
              <p className="text-on-surface/70 leading-relaxed font-light text-lg">
                Known as the &quot;Art of Eight Limbs,&quot; this striking system utilizes shins, elbows, knees, and fists with clinical efficiency. Perfect for those seeking explosive power and conditioning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-outline/10">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Schedule</p>
                  <p className="text-white text-sm font-medium">Mon / Wed / Fri</p>
                  <p className="text-on-surface/60 text-xs italic">7:15 — 8:15</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Focus</p>
                  <p className="text-white text-sm font-medium">Striking & Defense</p>
                  <p className="text-on-surface/60 text-xs italic">All levels welcome</p>
                </div>
              </div>
              <button className="group flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-white hover:text-primary transition-colors">
                Begin Your Training <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 lg:pr-12 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl font-bold text-white tracking-tight italic">Brazilian Jiu-Jitsu</h2>
                <div className="h-1 w-12 bg-primary"></div>
              </div>
              <p className="text-on-surface/70 leading-relaxed font-light text-lg">
                Our Jiu-Jitsu classes are designed to improve the health, performance and mental acuity of the beginner & expert alike. The techniques are based on efficiency and effectiveness in controlling and / or subduing your attacker.

                Self-defense techniques along with throws and take downs round out this art with main emphasis on ground control and escapes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-outline/10">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Schedule</p>

                  <p className="text-white text-sm font-medium">Mon / Wed / Fri</p>
                  <p className="text-on-surface/60 text-xs italic">5:30 — 8:30</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Focus</p>
                  <p className="text-white text-sm font-medium">Grappling &amp; Leverage</p>
                  <p className="text-on-surface/60 text-xs italic">All levels welcome</p>
                </div>
              </div>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-primary/40 z-10"></div>
              <div className="overflow-hidden relative aspect-[4/5]">
                <Image
                  alt="BJJ"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454215444-Triangle.04145b8e064b2a6d1bdf.jpg"
                  fill
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/20">
                Thomas Bunn
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-1 lg:order-1">
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-primary/40 z-10"></div>
              <div className="overflow-hidden relative aspect-[4/5]">
                <Image
                  alt="TaeKwon Do"
                  className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454188428-Sammy1.d8998c22e6dc126eb917.jpg"
                  fill
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/20">
                Sammy
              </div>
            </div>
            <div className="space-y-10 lg:pl-12 order-2 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl font-bold text-white tracking-tight">TaeKwon Do</h2>
                <div className="h-1 w-12 bg-primary"></div>
              </div>
              <p className="text-on-surface/70 leading-relaxed font-light text-lg">
                Taekwondo is a Korean martial art that utilizes dynamic kicking, striking and blocking. It is an excellent art for both children and adults.

                It emphasizes the traditional tenets of martial arts such as, Courtesy, Integrity, Perseverance, Self-Control and Indomitable Spirit. It also develops functional fitness, strength, speed, balance and flexibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-outline/10">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Schedule</p>
                  <p className="text-white text-sm font-medium">Tue / Thu</p>
                  <p className="text-on-surface/60 text-xs italic">5:30 — 8:30</p>
                  <p className="text-white text-sm font-medium">Sat</p>
                  <p className="text-on-surface/60 text-xs italic">9:30 AM — 11:30 AM</p>
                </div>
                  
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Focus</p>
              </div>
              <button className="group flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-white hover:text-primary transition-colors">
                Join The Lab <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-48 px-8 py-32 bg-surface text-center border-y border-outline/10">
          <div className="max-w-4xl mx-auto space-y-10">
            <h3 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight uppercase tracking-tighter">
              Ready For The <span className="italic text-primary">Strike?</span>
            </h3>
            <p className="text-on-surface/60 text-lg max-w-xl mx-auto font-light">
              Your first session is a technical assessment at no cost. Experience the standard of elite performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="px-12 py-5 elite-gradient text-white font-body font-bold text-xs uppercase tracking-[0.3em]"
              >
                Contact Us
              </button>
              <button 
                onClick={() => setIsScheduleOpen(true)}
                className="px-12 py-5 border border-outline/30 text-white font-body font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-background transition-colors"
              >
                Full Schedule
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
