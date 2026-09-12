import { readdirSync } from "node:fs";
import path from "node:path";
import { galleryDirectory, parseGalleryFilename, sortGallery, type GalleryItem } from "./gallery";

// Server-side only: reads the gallery folder at build time. Never import this from
// a client component; pass the result down as props instead.
export function loadGalleryItems(): GalleryItem[] {
  const dir = path.join(process.cwd(), "public", galleryDirectory);
  const items: GalleryItem[] = [];
  const ignored: string[] = [];
  for (const file of readdirSync(dir)) {
    if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
    const item = parseGalleryFilename(file);
    if (item) items.push(item);
    else ignored.push(file);
  }
  if (ignored.length) console.warn(`[gallery] ignored files that do not follow [YYYY-]<category>-<description>: ${ignored.join(", ")}`);
  return sortGallery(items);
}
