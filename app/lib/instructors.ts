import type { ProgramId } from "./programs";

export type Instructor = {
  /** Anchor id on the About page, linked from program pages. */
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  bio: string[];
  programs: ProgramId[];
};

export const instructors: Instructor[] = [
  {
    id: "louie-concepcion",
    name: "Louie Concepcion",
    role: "Head instructor",
    image: "/images/coaches/louie-concepcion.jpg",
    alt: "Louie Concepcion, head instructor at Team Cama",
    imagePosition: "center top",
    programs: ["bjj", "muay-thai", "taekwondo"],
    bio: [
      "Louie Concepcion is a Stockton native with over 35 years of martial arts experience across many disciplines and under a variety of respected instructors. His background includes traditional and Olympic-style Taekwondo, Brazilian Jiu-Jitsu, Kickboxing, Filipino Martial Arts, and Jeet Kune Do Concepts.",
      "Driven by a lifelong passion for martial arts, he founded the academy to share his knowledge, promote humility and discipline, and inspire the next generation of students.",
      "Mr. Concepcion holds a 3rd Dan Black Belt in Taekwondo (certified by the Kukkiwon) and is a Black Belt in Brazilian Jiu-Jitsu under Charles Gracie.",
    ],
  },
  {
    id: "angelo-garcia",
    name: "Angelo Garcia",
    role: "Brazilian Jiu-Jitsu instructor",
    image: "/images/coaches/angelo-garcia.jpg",
    alt: "Angelo Garcia, Brazilian Jiu-Jitsu instructor at Team Cama",
    programs: ["bjj"],
    bio: [
      "Angelo Garcia has trained Brazilian Jiu-Jitsu since 2009 and earned his Gracie Black Belt through years of dedication. As an instructor at C.A.M.A., he works effectively with both children and adults, with a strong foundation in Gi and No-Gi Jiu-Jitsu.",
      "Blending the mindset of an artist and a martial artist, Angelo brings creativity and attention to detail into his teaching. He is constantly improving his technical ability and instruction, and never shies away from hard training.",
      "An avid student, competitor, and practitioner, Angelo is committed to lifelong growth and is passionate about helping others develop their skills.",
    ],
  },
  {
    id: "isaiah-ferguson",
    name: "Isaiah Ferguson",
    role: "Brazilian Jiu-Jitsu and Muay Thai coach",
    image: "/images/coaches/isaiah-ferguson.jpg",
    alt: "Isaiah Ferguson, BJJ and Muay Thai coach at Team Cama",
    imagePosition: "center top",
    programs: ["bjj", "muay-thai"],
    bio: [
      "Isaiah started training Brazilian Jiu-Jitsu and Muay Thai in 2009 under Louie Concepcion and has not looked back since. It has been a huge part of his life ever since. He earned his Black Belt in Brazilian Jiu-Jitsu in 2021 and continues to train and improve every day.",
      "As an instructor for the Jiu-Jitsu and Muay Thai programs, Isaiah is a longtime student of the academy and a humble practitioner of its teachings. His discipline and work ethic have led to success in both kickboxing and Jiu-Jitsu competition.",
      "Isaiah believes that a strong body leads to a strong mind, and he works to instill that mindset in every student he teaches.",
    ],
  },
  {
    id: "thomas-bunn",
    name: "Thomas Bunn",
    role: "Brazilian Jiu-Jitsu instructor",
    image: "/images/coaches/thomas-bunn.jpg",
    alt: "Thomas Bunn, Brazilian Jiu-Jitsu instructor at Team Cama",
    imagePosition: "center 20%",
    programs: ["bjj"],
    bio: [],
  },
  {
    id: "christian-orellana",
    name: "Christian Orellana",
    role: "Muay Thai instructor",
    image: "/images/coaches/christian-orellana.jpg",
    alt: "Christian Orellana, Muay Thai instructor at Team Cama, with a championship belt in the ring",
    imagePosition: "center 15%",
    programs: ["muay-thai"],
    bio: [],
  },
  {
    id: "samantha-bautista",
    name: "Samantha Bautista",
    role: "Taekwondo instructor",
    image: "/images/coaches/samantha-bautista.jpg",
    alt: "Samantha Bautista, Taekwondo instructor at Team Cama",
    programs: ["taekwondo"],
    bio: [],
  },
  {
    id: "jay",
    name: "Jay",
    role: "Taekwondo instructor",
    image: "/images/coaches/jay.jpg",
    alt: "Jay, Taekwondo instructor at Team Cama",
    imagePosition: "center 12%",
    programs: ["taekwondo"],
    bio: [],
  },
];

export function instructorsFor(program: ProgramId) {
  return instructors.filter(person => person.programs.includes(program));
}

/** First sentence of a biography, used as the short introduction on cards. */
export function introduction(bio: string[]) {
  const first = bio[0];
  if (!first) return "";
  const end = first.indexOf(". ");
  return end === -1 ? first : first.slice(0, end + 1);
}
