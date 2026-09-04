"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "./Dialog";

type Category = "all" | "competition" | "training" | "team" | "events" | "black belts";

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
  { id: 13, src: "https://preblobaccount.blob.core.windows.net/prerecordedblob/Adniel.jpg", alt: "Black belt Adniel", category: "black belts", year: "2015" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "competition", label: "Competition" },
  { value: "training", label: "Training" },
  { value: "team", label: "Team" },
  { value: "events", label: "Events" },
  { value: "black belts", label: "Black Belts" },
];


export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = activeCategory === "all" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  const activeItem = lightboxIndex === null ? null : filtered[lightboxIndex];
  const previous = () => setLightboxIndex(index => index === null ? null : (index - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(index => index === null ? null : (index + 1) % filtered.length);

  return <>
    <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Filter photos">
      {categories.map(category => <button key={category.value} type="button" aria-pressed={activeCategory === category.value} onClick={() => { setActiveCategory(category.value); setLightboxIndex(null); }} className={`min-h-11 px-4 text-sm border transition-colors ${activeCategory === category.value ? "bg-ink text-background border-ink" : "text-ink-muted border-rule hover:border-rule-strong hover:text-ink"}`}>{category.label}</button>)}
      <span role="status" className="text-xs text-ink-subtle ml-auto py-3">{filtered.length} photographs</span>
    </div>
    <ul className="columns-2 lg:columns-3 gap-4 md:gap-6">
      {filtered.map((item, i) => <li key={item.id} className="break-inside-avoid mb-4 md:mb-6">
        <button type="button" onClick={() => setLightboxIndex(i)} className="group block w-full text-left" aria-label={`Open photo: ${item.alt}`} aria-haspopup="dialog">
          <div className={`relative overflow-hidden bg-surface-3 ${item.category === "team" || item.category === "events" ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" loading={i < 3 ? "eager" : "lazy"} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
            <span className="absolute bottom-3 right-3 bg-background/85 text-ink w-8 h-8 flex items-center justify-center text-lg" aria-hidden="true">↗</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-between py-3 text-[10px] uppercase tracking-widest text-ink-muted"><span>{item.category}</span><span>{item.year}</span></div>
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
          <div aria-live="polite"><p className="text-sm text-ink">{activeItem.alt}</p><p className="text-xs text-ink-muted mt-1 capitalize">{activeItem.category} · {activeItem.year}</p></div>
          <div className="flex gap-2 shrink-0">
            <button type="button" onClick={previous} className="btn btn-secondary" aria-label="Previous photo">←</button>
            <button type="button" onClick={next} className="btn btn-secondary" aria-label="Next photo">→</button>
          </div>
        </figcaption>
      </figure>
    </Dialog>}
  </>;
}
