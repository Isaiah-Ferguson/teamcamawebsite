"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "./Dialog";
import { galleryCategories, type GalleryCategory, type GalleryItem } from "../lib/gallery";

type Filter = "all" | GalleryCategory;

const filters: { value: Filter; label: string }[] = [{ value: "all", label: "All" }, ...galleryCategories];

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = activeCategory === "all" ? items : items.filter(item => item.category === activeCategory);
  const activeItem = lightboxIndex === null ? null : filtered[lightboxIndex];
  const previous = () => setLightboxIndex(index => index === null ? null : (index - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(index => index === null ? null : (index + 1) % filtered.length);
  const label = (category: GalleryCategory) => galleryCategories.find(item => item.value === category)?.label ?? category;

  return <>
    <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Filter photos">
      {filters.map(filter => <button key={filter.value} type="button" aria-pressed={activeCategory === filter.value} onClick={() => { setActiveCategory(filter.value); setLightboxIndex(null); }} className={`min-h-11 px-4 text-sm border transition-colors ${activeCategory === filter.value ? "bg-ink text-background border-ink" : "text-ink-muted border-rule hover:border-rule-strong hover:text-ink"}`}>{filter.label}</button>)}
      <span role="status" className="text-xs text-ink-subtle ml-auto py-3">{filtered.length} photographs</span>
    </div>
    <ul className="columns-2 lg:columns-3 gap-4 md:gap-6">
      {filtered.map((item, i) => <li key={item.src} className="break-inside-avoid mb-4 md:mb-6">
        <button type="button" onClick={() => setLightboxIndex(i)} className="group block w-full text-left" aria-label={`Open photo: ${item.alt}`} aria-haspopup="dialog">
          <div className={`relative overflow-hidden bg-surface-3 ${item.category === "team" || item.category === "events" ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" loading={i < 3 ? "eager" : "lazy"} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
            <span className="absolute bottom-3 right-3 bg-background/85 text-ink w-8 h-8 flex items-center justify-center text-lg" aria-hidden="true">↗</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-between py-3 text-[10px] uppercase tracking-widest text-ink-muted"><span>{label(item.category)}</span><span>{item.year}</span></div>
        </button>
      </li>)}
    </ul>
    {activeItem && <Dialog title={`Photo ${lightboxIndex! + 1} of ${filtered.length}`} wide onClose={() => setLightboxIndex(null)} onKeyDown={event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
      if (event.key === "ArrowRight") { event.preventDefault(); next(); }
    }}>
      <figure className="p-4 md:p-6">
        <div className="relative w-full h-[min(62svh,640px)] bg-background">
          <Image src={activeItem.src} alt={activeItem.alt} fill sizes="(max-width: 1024px) 90vw, 960px" className="object-contain" priority />
        </div>
        <figcaption className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
          <div aria-live="polite"><p className="text-sm text-ink">{activeItem.alt}</p><p className="text-xs text-ink-muted mt-1">{label(activeItem.category)}{activeItem.year ? ` · ${activeItem.year}` : ""}</p></div>
          <div className="flex gap-2 shrink-0">
            <button type="button" onClick={previous} className="btn btn-secondary" aria-label="Previous photo">←</button>
            <button type="button" onClick={next} className="btn btn-secondary" aria-label="Next photo">→</button>
          </div>
        </figcaption>
      </figure>
    </Dialog>}
  </>;
}
