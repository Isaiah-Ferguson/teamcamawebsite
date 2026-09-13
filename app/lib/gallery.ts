/**
 * Gallery photos live in public/images/gallery and are discovered at build time.
 * Name a file `[YYYY-]<category>-<description>.jpg`, for example
 * `2024-competition-allie-winston.jpg` or `team-muay-thai-group.jpg`, and it
 * appears in the gallery with the year, category, and a caption derived from
 * the description. Add an entry to `captions` when the derived caption is not
 * good enough; real alt text matters for accessibility and image search.
 */
export const galleryCategories = [
  { value: "competition", label: "Competition" },
  { value: "training", label: "Training" },
  { value: "team", label: "Team" },
  { value: "events", label: "Events" },
  { value: "black-belts", label: "Black Belts" },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["value"];

export type GalleryItem = {
  /** Public URL path, e.g. /images/gallery/2024-competition-allie-winston.jpg */
  src: string;
  alt: string;
  category: GalleryCategory;
  year?: string;
};

export const galleryDirectory = "/images/gallery";

/** Hand-written captions keyed by filename. Anything not listed gets a caption from its name. */
export const captions: Record<string, string> = {
  "2024-competition-allie-winston.jpg": "Allie Winston at a Brazilian Jiu-Jitsu competition",
  "2024-competition-allie-winston-match.jpg": "Allie Winston competing, seen from above the mat",
  "2025-team-thornton-taekwondo-group.jpg": "Taekwondo group at the Thornton Road gym",
  "2024-team-photo-thornton-road.jpg": "Team photo at the current Thornton Road gym",
  "2023-competition-christian-hand-raised.jpg": "Christian gets his hand raised after a Jiu-Jitsu match",
  "2023-events-community-picnic.jpg": "Team Cama community gathering at the park",
  "2022-training-allie-winston-no-gi.jpg": "Allie Winston training no-gi Brazilian Jiu-Jitsu",
  "2022-events-christmas-party.jpg": "Team Cama Christmas party with the kids",
  "2021-team-muay-thai-class.jpg": "Muay Thai class group photo",
  "2015-black-belts-adniel.jpg": "Black belt Adniel",
  "2012-competition-isaiah-angelo.jpg": "Isaiah Ferguson and Angelo Garcia at a Jiu-Jitsu tournament",
  "2011-training-san-juan-taekwondo-class.jpg": "Taekwondo class training inside the original San Juan Avenue garage",
  "2011-training-san-juan-kids-taekwondo.jpg": "Kids Taekwondo class at San Juan Avenue",
  "2011-team-san-juan-taekwondo-group.jpg": "Early Team Cama Taekwondo group photo at San Juan Avenue",
  "2011-team-san-juan-jiu-jitsu-group.jpg": "Jiu-Jitsu group photo at San Juan Avenue",
  "2026-team-group-photo.jpg": "Team Cama group photo",
  "team-belt-promotion-thornton-road.jpg": "Students and instructors together at a belt promotion",
  "training-instructors-on-the-mat.jpg": "Team Cama Brazilian Jiu-Jitsu instructors on the mat",
  "competition-arath-muay-thai-fight.jpg": "Arath fighting Muay Thai for Team Cama",
  "training-samantha-taekwondo-kick.jpg": "Samantha Espinosa demonstrating a Taekwondo kick",
  "competition-jiu-jitsu-tournament-lathrop.jpg": "Team Cama competitors at a Jiu-Jitsu tournament in Lathrop",
  "team-jiu-jitsu-class-pershing-avenue.jpg": "Brazilian Jiu-Jitsu class at the Pershing Avenue gym",
  "team-jiu-jitsu-group-pershing-avenue.jpg": "Jiu-Jitsu group photo at Pershing Avenue",
  "team-muay-thai-group-thornton-road.jpg": "Muay Thai group at the Thornton Road gym",
  "training-muay-thai-class-lineup.jpg": "Muay Thai class lined up on the mats",
  "team-taekwondo-group.jpg": "Early Taekwondo group at the gym",
  "competition-tina-muay-thai-fight.jpg": "Tina fighting Muay Thai for Team Cama",
  "training-christian-muay-thai-kick.jpg": "Christian Orellana drilling kicks on the pads",
};

const pattern = /^(?:(\d{4})-)?(competition|training|team|events|black-belts)-([a-z0-9-]+)$/;

/** Turns a gallery filename into an item, or null when the name does not follow the convention. */
export function parseGalleryFilename(file: string): GalleryItem | null {
  const name = file.replace(/\.[a-z0-9]+$/i, "");
  const match = name.match(pattern);
  if (!match) return null;
  const [, year, category, description] = match;
  const derived = description.replace(/-/g, " ");
  return {
    src: `${galleryDirectory}/${file}`,
    alt: captions[file] ?? derived.charAt(0).toUpperCase() + derived.slice(1),
    category: category as GalleryCategory,
    year,
  };
}

/** Newest dated photos first, undated photos after, then alphabetical so builds are stable. */
export function sortGallery(items: GalleryItem[]) {
  return [...items].sort((a, b) => {
    if (a.year !== b.year) {
      if (!a.year) return 1;
      if (!b.year) return -1;
      return b.year.localeCompare(a.year);
    }
    return a.src.localeCompare(b.src);
  });
}
