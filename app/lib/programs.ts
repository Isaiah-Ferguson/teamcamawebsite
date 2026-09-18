export type ProgramId = "bjj" | "muay-thai" | "taekwondo";

export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export type Weekday = (typeof weekdays)[number];

/** One class session. Times are 12-hour strings like "5:30 PM" so they render as written. */
export type Session = { days: Weekday[]; start: string; end: string; group: string };

export type Program = {
  id: ProgramId;
  /** URL segment under /classes. Taekwondo keeps the old site's exact path. */
  slug: string;
  name: string;
  shortName: string;
  /** Other names people search for, e.g. "Kickboxing" for Muay Thai. */
  aliases: string[];
  headline: string;
  description: string;
  focus: string;
  /** Public path of the hero photo, e.g. /images/programs/muay-thai.jpg */
  image: string;
  alt: string;
  caption: string;
  days: string;
  audience: string;
  summary: string[];
  schedule: Session[];
  seo: { title: string; description: string };
  intro: string[];
  highlights: string[];
  faq: [string, string][];
  photos: { image: string; alt: string }[];
};

export function programPath(program: Pick<Program, "slug">) {
  return `/classes/${program.slug}`;
}

export function formatDays(days: Weekday[]) {
  return days.join(", ");
}

/** "5:30 PM" + "7:15 PM" -> "5:30–7:15 PM"; "9:30 AM" + "10:15 AM" -> "9:30–10:15 AM". */
export function formatTime(session: Pick<Session, "start" | "end">) {
  const [startClock, startPeriod] = session.start.split(" ");
  const [, endPeriod] = session.end.split(" ");
  return `${startPeriod === endPeriod ? startClock : session.start}–${session.end}`;
}

export function sessionsOn(program: Pick<Program, "schedule">, day: Weekday) {
  return program.schedule.filter(session => session.days.includes(day));
}

function toMinutes(time: string) {
  const [clock, period] = time.split(" ");
  const [hours, minutes] = clock.split(":").map(Number);
  return ((hours % 12) + (period === "PM" ? 12 : 0)) * 60 + minutes;
}

function toClock24(minutes: number) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

const weekdayNames: Record<Weekday, string> = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };

export function weekdayName(day: Weekday) {
  return weekdayNames[day];
}

/**
 * Gym opening hours derived from every program's schedule, in schema.org form
 * (24-hour clock). Days with identical hours are grouped.
 */
export function openingHours() {
  const byDay = weekdays.flatMap(day => {
    const sessions = programs.flatMap(program => sessionsOn(program, day));
    if (!sessions.length) return [];
    const opens = toClock24(Math.min(...sessions.map(session => toMinutes(session.start))));
    const closes = toClock24(Math.max(...sessions.map(session => toMinutes(session.end))));
    return [{ day: weekdayNames[day], opens, closes }];
  });
  const groups: { days: string[]; opens: string; closes: string }[] = [];
  for (const entry of byDay) {
    const group = groups.find(item => item.opens === entry.opens && item.closes === entry.closes);
    if (group) group.days.push(entry.day);
    else groups.push({ days: [entry.day], opens: entry.opens, closes: entry.closes });
  }
  return groups;
}

// Draft page copy is grounded in the coach biographies and existing site text.
// Owner should review wording before launch; no claims here go beyond what the
// About page already states.
export const programs: Program[] = [
  {
    id: "bjj",
    slug: "brazilian-jiu-jitsu",
    name: "Brazilian Jiu-Jitsu",
    shortName: "Jiu-Jitsu",
    aliases: ["BJJ", "Jiu-Jitsu"],
    headline: "Technique over strength.",
    description: "Technique over strength. Learn efficient, leverage-based control, takedowns, escapes, and self-defense. Build a strong foundation on the ground, whether you are stepping onto the mat for the first time or refining your game.",
    focus: "Grappling & ground control",
    image: "/images/programs/brazilian-jiu-jitsu.jpg",
    alt: "Thomas Bunn training Brazilian Jiu-Jitsu at Team Cama",
    caption: "Thomas Bunn",
    days: "Mon, Wed, Fri",
    audience: "All levels welcome",
    summary: ["Mon, Wed, Fri · 5:30–7:15 PM"],
    schedule: [{ days: ["Mon", "Wed", "Fri"], start: "5:30 PM", end: "7:15 PM", group: "All levels" }],
    seo: {
      title: "Brazilian Jiu-Jitsu in Stockton, CA",
      description: "Brazilian Jiu-Jitsu classes in Stockton, CA. Black belt instruction in the Charles Gracie lineage, Mon, Wed & Fri evenings at 8855 Thornton Rd. First class free.",
    },
    intro: [
      "Brazilian Jiu-Jitsu at Team Cama is grappling built on leverage, position, and timing rather than size or strength. Classes cover takedowns, guard, passing, escapes, and submissions, with self-defense fundamentals at the core of everything we teach.",
      "The program is led by head instructor Louie Concepcion, a Brazilian Jiu-Jitsu black belt under Charles Gracie, together with black belts Angelo Garcia and Isaiah Ferguson, both of whom have trained with Louie since 2009, and instructor Thomas Bunn. Our instructors train and teach in both the gi and no-gi.",
      "Classes run Monday, Wednesday, and Friday evenings at our gym on Thornton Road in Stockton. Beginners train alongside experienced students, and your first class is free.",
    ],
    highlights: [
      "Takedowns and standing grappling",
      "Guard, guard passing, and positional control",
      "Escapes, transitions, and submissions",
      "Self-defense fundamentals",
      "Gi and no-gi training",
      "Live training matched to your experience level",
    ],
    faq: [
      ["Do I need to be in shape before I start?", "No. Jiu-Jitsu is built around technique and leverage, and conditioning comes with consistent training. Tell us you are new and we will pair you with the right training partners."],
      ["Do I need a gi for my first class?", "Not for your free first class. Wear comfortable athletic clothing, and ask us about gi requirements when you arrange your visit."],
      ["Is there a kids Jiu-Jitsu class?", "The evening class listed above is our adult program. Contact us about age eligibility for younger students, and see our Taekwondo program for dedicated kids sessions."],
      ["What lineage does Team Cama teach?", "Head instructor Louie Concepcion is a black belt under Charles Gracie. Angelo Garcia and Isaiah Ferguson are black belts who have trained with Louie since 2009."],
    ],
    photos: [
      { image: "/images/gallery/training-instructors-on-the-mat.jpg", alt: "Team Cama Brazilian Jiu-Jitsu instructors on the mat" },
      { image: "/images/gallery/2012-competition-isaiah-angelo.jpg", alt: "Isaiah Ferguson and Angelo Garcia at a Jiu-Jitsu tournament" },
      { image: "/images/gallery/2022-training-allie-winston-no-gi.jpg", alt: "Allie Winston training no-gi Brazilian Jiu-Jitsu" },
    ],
  },
  {
    id: "muay-thai",
    slug: "muay-thai",
    name: "Muay Thai",
    shortName: "Muay Thai",
    aliases: ["Kickboxing", "Thai boxing"],
    headline: "The art of eight limbs.",
    description: "The art of eight limbs. Develop punches, kicks, knees, and elbows with purposeful training in striking, defense, and conditioning. Find your rhythm, sharpen your technique, and keep getting better.",
    focus: "Striking & conditioning",
    image: "/images/programs/muay-thai.jpg",
    alt: "Christian Orellana training Muay Thai at Team Cama",
    caption: "Christian Orellana",
    days: "Mon, Wed, Fri",
    audience: "All levels welcome",
    summary: ["Mon, Wed, Fri · 7:15–8:15 PM"],
    schedule: [{ days: ["Mon", "Wed", "Fri"], start: "7:15 PM", end: "8:15 PM", group: "All levels" }],
    seo: {
      title: "Muay Thai & Kickboxing in Stockton, CA",
      description: "Muay Thai and kickboxing classes in Stockton, CA. Learn punches, kicks, knees, and elbows, Mon, Wed & Fri evenings at 8855 Thornton Rd. First class free.",
    },
    intro: [
      "Muay Thai is the art of eight limbs: punches, kicks, knees, and elbows. Classes at Team Cama build striking technique, defense, footwork, and conditioning through pad work, drilling, and partner training, so you leave each session sharper than you arrived.",
      "The program is coached by Isaiah Ferguson, who has trained Muay Thai and Jiu-Jitsu under Louie Concepcion since 2009 and has competed in kickboxing, and by Christian Orellana, a competitive Muay Thai fighter, alongside Louie himself, whose background includes kickboxing, Filipino Martial Arts, and Jeet Kune Do Concepts.",
      "Classes run Monday, Wednesday, and Friday evenings, directly after Brazilian Jiu-Jitsu, at our gym on Thornton Road in Stockton. Whether you want kickboxing for fitness or a striking base for competition, your first class is free.",
    ],
    highlights: [
      "Punches, kicks, knees, and elbows",
      "Clinch work and defense",
      "Footwork, rhythm, and distance",
      "Pad work and partner drills",
      "Conditioning built into every class",
      "Fitness-focused or competition-focused training",
    ],
    faq: [
      ["Is this Muay Thai or kickboxing?", "Both. We teach Muay Thai, which includes the punches and kicks of kickboxing plus knees, elbows, and the clinch. If you searched for kickboxing in Stockton, this is the class."],
      ["Do I have to spar?", "Beginners start with technique, pad work, and drills. Talk with your coach about when and whether sparring fits your goals."],
      ["What gear do I need?", "Nothing for your free first class beyond athletic clothing. Ask us about gloves, wraps, and shin guards when you arrange your visit."],
      ["Can I train Muay Thai and Jiu-Jitsu?", "Yes. The two classes run back to back on the same evenings, so it is easy to train both."],
    ],
    photos: [
      { image: "/images/gallery/competition-arath-muay-thai-fight.jpg", alt: "Arath fighting Muay Thai for Team Cama" },
      { image: "/images/gallery/2021-team-muay-thai-class.jpg", alt: "Team Cama Muay Thai class group photo" },
      { image: "/images/gallery/training-christian-muay-thai-kick.jpg", alt: "Christian Orellana drilling kicks on the pads" },
    ],
  },
  {
    id: "taekwondo",
    slug: "taekwondo",
    name: "Taekwondo",
    shortName: "Taekwondo",
    aliases: ["TKD", "Tae Kwon Do"],
    headline: "Confidence in motion.",
    description: "Confidence in motion. A Korean martial art centered on dynamic kicking, striking, and blocking. Children and adults develop balance, speed, and flexibility alongside courtesy, perseverance, and self-control.",
    focus: "Kicking, balance & confidence",
    image: "/images/programs/taekwondo.jpg",
    alt: "Samantha Bautista practicing Taekwondo at Team Cama",
    caption: "Samantha Bautista",
    days: "Tue, Thu, Sat",
    audience: "Kids & adults",
    summary: ["Tue, Thu · Kids 5:15–6:45 PM · Adults 7:00–8:00 PM", "Sat · Kids 9:30–10:15 AM · Adults 10:30–11:30 AM"],
    schedule: [
      { days: ["Tue", "Thu"], start: "5:15 PM", end: "6:00 PM", group: "Kids · intermediate / advanced" },
      { days: ["Tue", "Thu"], start: "6:00 PM", end: "6:45 PM", group: "Kids · beginner" },
      { days: ["Tue", "Thu"], start: "7:00 PM", end: "8:00 PM", group: "Adults · ages 12 and up" },
      { days: ["Sat"], start: "9:30 AM", end: "10:15 AM", group: "Kids · all levels" },
      { days: ["Sat"], start: "10:30 AM", end: "11:30 AM", group: "Adults · ages 12 and up" },
    ],
    seo: {
      title: "Taekwondo in Stockton, CA",
      description: "Taekwondo classes for kids and adults in Stockton, CA. Kukkiwon-certified black belt instruction, Tue, Thu & Sat at 8855 Thornton Rd. First class free.",
    },
    intro: [
      "Taekwondo is a Korean martial art centered on dynamic kicking, striking, and blocking. At Team Cama, children and adults develop balance, speed, and flexibility while practicing the courtesy, perseverance, and self-control the art is built on.",
      "Head instructor Louie Concepcion holds a 3rd Dan black belt certified by the Kukkiwon, with a background in both traditional and Olympic-style Taekwondo. Instructors Samantha Bautista and Jay lead the kids and adult sessions.",
      "Kids classes are grouped by experience level on Tuesday and Thursday evenings, with an all-levels class on Saturday morning. Adult classes, for ages 12 and up, run Tuesday and Thursday evenings and Saturday mornings. Your first class is free.",
    ],
    highlights: [
      "Kicking technique, speed, and flexibility",
      "Blocks, strikes, and stances",
      "Forms and belt progression",
      "Balance, coordination, and focus",
      "Separate kids and adult sessions",
      "Courtesy, perseverance, and self-control",
    ],
    faq: [
      ["What age can my child start?", "Kids sessions are grouped by experience level, from beginners to intermediate and advanced students. Contact us about the right group and starting age for your child."],
      ["Are there Taekwondo classes for adults?", "Yes. Adult sessions are for ages 12 and up and run Tuesday and Thursday evenings and Saturday mornings."],
      ["Do students test for belts?", "Yes. Students progress through belt ranks at the academy. Ask us about testing when you visit."],
      ["Which class should I attend first?", "Tell us your age and experience when you arrange your visit and we will point you to the right session. Beginners are welcome in every group."],
    ],
    photos: [
      { image: "/images/gallery/training-samantha-taekwondo-kick.jpg", alt: "Samantha Bautista demonstrating a Taekwondo kick" },
      { image: "/images/gallery/2011-training-san-juan-kids-taekwondo.jpg", alt: "Kids Taekwondo class at San Juan Avenue" },
      { image: "/images/gallery/2011-team-san-juan-taekwondo-group.jpg", alt: "Early Team Cama Taekwondo group photo" },
    ],
  },
];
