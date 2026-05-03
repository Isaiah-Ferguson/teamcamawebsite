"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useDialog } from "./useDialog";

type Category = "all" | "competition" | "training" | "team" | "events";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  year?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/Allie.jpg", alt: "Allie Winston competing", category: "competition", year: "2024" },
  { id: 2, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan2.jpg", alt: "Training inside the original San Juan Avenue garage", category: "training", year: "2011" },
  { id: 3, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan.jpg", alt: "Early Team Cama group photo at San Juan Avenue", category: "team", year: "2011" },
  { id: 4, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_1674.jpg", alt: "Athlete competing for Team Cama", category: "competition", year: "2023" },
  { id: 5, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/CamaEvent2.jpg", alt: "Team Cama community event", category: "events", year: "2023" },
  { id: 6, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454118059-AllieWinston.f34e2d843f6ffea4ff03.jpg", alt: "Allie Winston training Muay Thai", category: "training", year: "2022" },
  { id: 7, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/IsaiahAngelo.jpg", alt: "Isaiah and Angelo at competition", category: "competition", year: "2012" },
  { id: 8, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/Champ.jpg", alt: "Team Cama champion", category: "team", year: "2026" },
  { id: 9, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/CamaEvent.jpg", alt: "Team Cama gathering", category: "events", year: "2022" },
  { id: 10, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454170311-mt.af299f34191e0ac632da.jpg", alt: "Muay Thai class group", category: "team", year: "2021" },
  { id: 11, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/AllieComp.jpg", alt: "Allie at competition", category: "competition", year: "2024" },
  { id: 12, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/2024.jpg", alt: "Team photo at the current Thornton Avenue gym", category: "team", year: "2024" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "competition", label: "Competition" },
  { value: "training", label: "Training" },
  { value: "team", label: "Team" },
  { value: "events", label: "Events" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  const isLightboxOpen = lightboxIndex !== null;

  useDialog(isLightboxOpen, closeLightbox, lightboxRef);

  // Arrow-key navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    function handle(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [isLightboxOpen, goPrev, goNext]);

  const activeLightboxItem =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <div
        className="flex flex-wrap gap-2 mb-12"
        role="tablist"
        aria-label="Filter photos"
      >
        {categories.map((cat) => {
          const active = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCategory(cat.value)}
              className={`min-h-11 px-5 py-2 text-sm font-medium rounded-full border transition-colors ${
                active
                  ? "bg-ink text-surface border-ink"
                  : "border-rule text-ink-muted hover:border-rule-strong hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => openLightbox(i)}
              className="group block w-full relative overflow-hidden bg-surface-3 rounded-md cursor-pointer"
              aria-label={`Open photo: ${item.alt}`}
            >
              <div className="relative w-full aspect-4/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close photo viewer"
            className="absolute inset-0 cursor-default"
            onClick={closeLightbox}
            tabIndex={-1}
          />
          <div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full h-full flex flex-col items-center justify-center px-4 py-16"
          >
            <h2 id={titleId} className="sr-only">
              Photo viewer
            </h2>

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-evening-ink hover:text-surface w-11 h-11 flex items-center justify-center rounded"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <span className="absolute top-4 left-4 text-evening-ink-muted text-sm font-mono">
              {lightboxIndex! + 1} / {filtered.length}
            </span>

            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-4/3">
                <Image
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center justify-between mt-4 text-evening-ink-muted text-sm">
                <span className="capitalize">
                  {activeLightboxItem.category}
                  {activeLightboxItem.year ? `, ${activeLightboxItem.year}` : ""}
                </span>
                <span>{activeLightboxItem.alt}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-evening-ink/10 text-evening-ink hover:bg-evening-ink/20"
              aria-label="Previous photo"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-evening-ink/10 text-evening-ink hover:bg-evening-ink/20"
              aria-label="Next photo"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
