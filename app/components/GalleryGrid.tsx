"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

type Category = "all" | "competition" | "training" | "team" | "events" | "facility";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  year?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/Allie.jpg", alt: "Competition photo 1", category: "competition", year: "2024" },
  { id: 2, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan2.jpg", alt: "Training photo 1", category: "training", year: "2011" },
  { id: 3, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/sanjuan.jpg", alt: "Team photo 1", category: "team", year: "2011" },
  { id: 4, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_1674.jpg", alt: "Competition photo 2", category: "competition", year: "2023" },
  { id: 5, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/CamaEvent2.jpg", alt: "Events photo 1", category: "events", year: "2023" },
  { id: 6, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454118059-AllieWinston.f34e2d843f6ffea4ff03.jpg", alt: "Training photo 2", category: "training", year: "2023" },
  { id: 7, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/IsaiahAngelo.jpg", alt: "Competition photo 3", category: "competition", year: "2012" },
  { id: 8, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/Champ.jpg", alt: "Team photo 2", category: "team", year: "2022" },
  { id: 9, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/CamaEvent.jpg", alt: "Events photo 2", category: "events", year: "2022" },
  { id: 10, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454170311-mt.af299f34191e0ac632da.jpg", alt: "Training photo 3", category: "team", year: "2021" },
  { id: 11, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/AllieComp.jpg", alt: "Competition photo 4", category: "competition", year: "2021" },
  { id: 12, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/2024.jpg", alt: "Team photo 3", category: "team", year: "2024" },
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

  const filtered = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const activeLightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-2 font-label text-[10px] tracking-[0.3em] uppercase transition-all duration-300 border ${
              activeCategory === cat.value
                ? "bg-primary border-primary text-white"
                : "border-outline/30 text-on-surface/60 hover:border-outline hover:text-on-surface"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => openLightbox(i)}
            className="group block w-full relative overflow-hidden bg-surface cursor-pointer break-inside-avoid"
          >
            <div className="relative w-full aspect-[4/3]">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-80"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface">
                  <svg className="w-8 h-8 text-outline/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-label text-[9px] tracking-[0.2em] uppercase text-outline/30">
                    Photo Coming Soon
                  </span>
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {/* Meta bar */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-outline/10">
              <span className="font-label text-[9px] tracking-[0.25em] uppercase text-primary">
                {item.category}
              </span>
              {item.year && (
                <span className="font-label text-[9px] tracking-[0.2em] text-on-surface/30">
                  {item.year}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-on-surface/60 hover:text-white transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-6 font-label text-[10px] tracking-[0.3em] text-on-surface/40 uppercase">
            {lightboxIndex! + 1} / {filtered.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-on-surface/40 hover:text-white transition-colors duration-200 z-10"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3]">
              {activeLightboxItem.src ? (
                <Image
                  src={activeLightboxItem.src}
                  alt={activeLightboxItem.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/40 border border-outline/10">
                  <svg className="w-12 h-12 text-outline/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline/30">
                    Photo Coming Soon
                  </span>
                </div>
              )}
            </div>
            {/* Caption */}
            <div className="flex items-center justify-between mt-4 px-1">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">
                {activeLightboxItem.category}
              </span>
              {activeLightboxItem.year && (
                <span className="font-headline italic text-on-surface/40 text-sm">
                  {activeLightboxItem.year}
                </span>
              )}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-on-surface/40 hover:text-white transition-colors duration-200 z-10"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
