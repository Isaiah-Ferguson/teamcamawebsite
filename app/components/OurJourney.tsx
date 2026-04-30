"use client";

import { useState } from "react";
import Image from "next/image";

const journeyData = [
  {
    year: "2011",
    label: "San Juan Avenue",
    description:
      "Concepcion Academy of Martial Arts opened its doors in Stockton inside a small former auto-body garage near the Delta. Hot summers, cold winters, far from perfect. It built a tough, disciplined training environment that shaped who we are today.",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan3.jpg",
  },
  {
    year: "2013",
    label: "Pershing Avenue",
    description:
      "As the community grew, we outgrew the garage on San Juan Avenue and moved to Pershing. With more space came more students, stronger connections, and a growing reputation for dedication and discipline.",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/pershing.jpg",
  },
  {
    year: "2016",
    label: "Thornton Avenue, 8909",
    description:
      "In 2016 we took another step forward and moved to Thornton Avenue. With upgraded mats and better equipment, we elevated our training experience while staying true to the same hard work, respect, and intensity that built our foundation.",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/2016.jpg",
  },
  {
    year: "Present",
    label: "Thornton Avenue, 8855",
    description:
      "We moved into our largest facility yet, marking a new era for the academy. With more space to grow, train, and build community, we keep carrying forward the same spirit that started in that small garage back in 2011.",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/2024.jpg",
  },
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = journeyData[activeIndex];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-ink leading-tight mb-4">
            Our journey
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Four addresses. The same gym.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
          <div
            className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1 lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r border-rule pb-2 lg:pb-0 lg:pr-4"
            role="tablist"
            aria-label="Locations through the years"
          >
            {journeyData.map((entry, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={entry.year}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="journey-panel"
                  onClick={() => setActiveIndex(i)}
                  className={`text-left px-4 py-4 transition-colors duration-200 shrink-0 rounded ${
                    isActive
                      ? "bg-surface-2 text-ink"
                      : "text-ink-muted hover:bg-surface-2/60 hover:text-ink"
                  }`}
                >
                  <span className="block font-headline font-bold text-xl">
                    {entry.year}
                  </span>
                  <span className="block text-xs text-ink-subtle mt-1">
                    {entry.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="journey-panel"
            role="tabpanel"
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="relative aspect-4/5 w-full bg-surface-3 overflow-hidden rounded-lg">
              <Image
                key={active.year}
                src={active.image}
                alt={`Team Cama ${active.label}, ${active.year}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-accent text-sm font-semibold">
                {active.label}
              </p>
              <h3 className="font-headline font-bold text-3xl md:text-4xl text-ink leading-tight">
                {active.year}
              </h3>
              <p className="text-ink-muted text-base leading-relaxed max-w-prose">
                {active.description}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => Math.max(0, prev - 1))
                  }
                  disabled={activeIndex === 0}
                  className="inline-flex items-center justify-center min-w-11 h-11 px-4 border border-rule rounded text-ink hover:bg-surface-2 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous era"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      Math.min(journeyData.length - 1, prev + 1)
                    )
                  }
                  disabled={activeIndex === journeyData.length - 1}
                  className="inline-flex items-center justify-center min-w-11 h-11 px-4 border border-rule rounded text-ink hover:bg-surface-2 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next era"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
