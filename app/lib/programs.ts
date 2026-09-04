export type Program = {
  id: string;
  name: string;
  description: string;
  focus: string;
  image: string;
  alt: string;
  caption: string;
  days: string;
  summary: string[];
  schedule: { day: string; time: string; group: string }[];
  confirmTimes?: boolean;
};

// Existing detailed schedule retained. Taekwondo times need owner confirmation:
// the previous class summary conflicted with these individual sessions.
export const programs: Program[] = [
  {
    id: "bjj",
    name: "Brazilian Jiu-Jitsu",
    description: "Technique over strength. Learn efficient, leverage-based control, takedowns, escapes, and self-defense. Build a strong foundation on the ground, whether you are stepping onto the mat for the first time or refining your game.",
    focus: "Grappling & ground control",
    image: "1774454215444-Triangle.04145b8e064b2a6d1bdf.jpg",
    alt: "Thomas Bunn training Brazilian Jiu-Jitsu at Team Cama",
    caption: "Thomas Bunn",
    days: "Mon, Wed, Fri",
    summary: ["Mon, Wed, Fri · 5:30–7:15 PM"],
    schedule: [{ day: "Mon, Wed, Fri", time: "5:30–7:15 PM", group: "All levels" }],
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    description: "The art of eight limbs. Develop punches, kicks, knees, and elbows with purposeful training in striking, defense, and conditioning. Find your rhythm, sharpen your technique, and keep getting better.",
    focus: "Striking & conditioning",
    image: "1774454132127-ChristionKnee.62b6231fcf1572e449cb.jpg",
    alt: "Christian Orellana training Muay Thai at Team Cama",
    caption: "Christian Orellana",
    days: "Mon, Wed, Fri",
    summary: ["Mon, Wed, Fri · 7:15–8:15 PM"],
    schedule: [{ day: "Mon, Wed, Fri", time: "7:15–8:15 PM", group: "All levels" }],
  },
  {
    id: "taekwondo",
    name: "Taekwondo",
    description: "Confidence in motion. A Korean martial art centered on dynamic kicking, striking, and blocking. Children and adults develop balance, speed, and flexibility alongside courtesy, perseverance, and self-control.",
    focus: "Kicking, balance & confidence",
    image: "1774454188428-Sammy1.d8998c22e6dc126eb917.jpg",
    alt: "Samantha Espinosa practicing Taekwondo at Team Cama",
    caption: "Samantha Espinosa",
    days: "Tue, Thu, Sat",
    summary: ["Tue, Thu & Sat · Kids and adults", "Contact us to confirm your class time"],
    confirmTimes: true,
    schedule: [
      { day: "Tue, Thu", time: "5:15–6:00 PM", group: "Kids · intermediate / advanced" },
      { day: "Tue, Thu", time: "6:00–6:45 PM", group: "Kids · beginner" },
      { day: "Tue, Thu", time: "7:00–8:00 PM", group: "Adults · ages 12 and up" },
      { day: "Sat", time: "9:30–10:15 AM", group: "Kids · all levels" },
      { day: "Sat", time: "10:30–11:30 AM", group: "Adults · ages 12 and up" },
    ],
  },
];

export const mapsUrl = "https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209";
