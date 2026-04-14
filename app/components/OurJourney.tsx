"use client";

import { useState } from "react";
import Image from "next/image";

const journeyData = [
  {
    year: "2011",
    label: "San Juan Avenue",
    description:
      "Concepcion Academy of Martial Arts opened its doors in Stockton, CA inside a small former auto body garage near the Delta. The summers were hot, the winters were freezing, and the conditions were far from perfect—but it built a tough, disciplined, and unforgettable training environment that shaped who we are today.",
    image: "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan3.jpg",
  },
  {
    year: "2013",
    label: "Pershing Avenue",
    description:
      "As our community grew, we outgrew our original garage on San Juan Avenue and moved to Pershing Avenue. With more space came more students, stronger connections, and a growing reputation for dedication and discipline.",
    image: "https://preblobaccount.blob.core.windows.net/prerecordedblob/pershing.jpg",
  },
  {
    year: "2016",
    label: "Thornton Avenue 8909",
    description:
      "In 2016, we took another step forward and moved to Thornton Avenue. With upgraded mats and better equipment, we elevated our training experience—while staying true to the same hard work, respect, and intensity that built our foundation.",
    image: "https://preblobaccount.blob.core.windows.net/prerecordedblob/2016.jpg",
  },
  {
    year: "2024-Present",
    label: "Thornton Avenue 8855",
    description:
      "We moved into our largest facility yet—marking a new era for the academy. With more space to grow, train, and build community, we continue to carry forward the same spirit that started in that small garage back in 2011.",
    image: "https://preblobaccount.blob.core.windows.net/prerecordedblob/2024.jpg",
  },
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = journeyData[activeIndex];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="font-label text-primary font-bold tracking-[0.4em] text-[10px] mb-4 block uppercase">
            Est. 2011
          </span>
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-white italic mb-4">
            Our Journey
          </h2>
          <div className="h-px w-24 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[520px]">
          {/* Year list — left */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-0 lg:w-56 shrink-0 border-b lg:border-b-0 lg:border-r border-outline/20 pb-4 lg:pb-0 lg:pr-0">
            {journeyData.map((entry, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={entry.year}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative text-left px-6 py-5 transition-all duration-300 shrink-0 ${
                    isActive ? "bg-transparent" : "hover:bg-surface/40"
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[2px] lg:w-[2px] bottom-0 bg-primary transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                  <span
                    className={`font-headline font-bold text-2xl italic transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-on-surface/40 group-hover:text-on-surface/70"
                    }`}
                  >
                    {entry.year}
                  </span>
                  <span
                    className={`block font-label text-[9px] tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${
                      isActive ? "text-on-surface/80" : "text-on-surface/30 group-hover:text-on-surface/50"
                    }`}
                  >
                    {entry.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Image + description — right */}
          <div className="flex-1 lg:pl-16 pt-8 lg:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full items-center">
              {/* Image panel */}
              <div className="relative aspect-[4/5] w-full bg-surface overflow-hidden">
                <div className="absolute -inset-0 border border-outline/10 z-0" />
                {active.image ? (
                  <Image
                    key={active.year}
                    src={active.image}
                    alt={`TEAM CAMA — ${active.year}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-90"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/60">
                    <span className="font-headline font-bold italic text-5xl text-outline/20">
                      {active.year}
                    </span>
                    <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline/30">
                      Photo Coming Soon
                    </span>
                  </div>
                )}
                {/* Year badge */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 border border-outline/20 z-10">
                  <span className="font-headline italic font-bold text-primary text-lg">{active.year}</span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center gap-6">
                <div>
                  <span className="font-label text-primary tracking-[0.3em] text-[10px] uppercase font-bold block mb-3">
                    {active.label}
                  </span>
                  <h3 className="font-headline font-bold text-3xl md:text-4xl text-white italic leading-tight">
                    {active.year}
                  </h3>
                </div>
                <div className="h-px w-12 bg-primary" />
                <p className="text-on-surface/70 font-light text-base leading-relaxed border-l border-outline/30 pl-6">
                  {active.description}
                </p>

                {/* Prev / Next navigation */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeIndex === 0}
                    className="flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface/50 hover:text-primary transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Prev
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => Math.min(journeyData.length - 1, prev + 1))}
                    disabled={activeIndex === journeyData.length - 1}
                    className="flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface/50 hover:text-primary transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
