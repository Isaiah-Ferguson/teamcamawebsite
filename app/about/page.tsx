"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import OurJourney from "../components/OurJourney";
import { useState } from "react";

interface Instructor {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string[];
}

const instructors: Instructor[] = [
  {
    name: "Louie Concepcion",
    role: "Head instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/Sensei.6067b8adb6fab92c15fa.png",
    alt: "Louie Concepcion, head instructor at Team Cama",
    bio: [
      "Louie Concepcion is a Stockton native with over 35 years of martial arts experience across many disciplines and under a variety of respected instructors. His background includes traditional and Olympic-style Taekwondo, Brazilian Jiu-Jitsu, Kickboxing, Filipino Martial Arts, and Jeet Kune Do Concepts.",
      "Driven by a lifelong passion for martial arts, he founded the academy to share his knowledge, promote humility and discipline, and inspire the next generation of students.",
      "Mr. Concepcion holds a 3rd Dan Black Belt in Taekwondo (certified by the Kukkiwon) and is a Black Belt in Brazilian Jiu-Jitsu under Charles Gracie.",
    ],
  },
  {
    name: "Angelo Garcia",
    role: "Brazilian Jiu-Jitsu instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/Angelo.jpg",
    alt: "Angelo Garcia, Brazilian Jiu-Jitsu instructor at Team Cama",
    bio: [
      "Angelo Garcia has trained Brazilian Jiu-Jitsu since 2009 and earned his Gracie Black Belt through years of dedication. As an instructor at C.A.M.A., he works effectively with both children and adults, with a strong foundation in Gi and No-Gi Jiu-Jitsu.",
      "Blending the mindset of an artist and a martial artist, Angelo brings creativity and attention to detail into his teaching. He is constantly improving his technical ability and instruction, and never shies away from hard training.",
      "An avid student, competitor, and practitioner, Angelo is committed to lifelong growth and is passionate about helping others develop their skills.",
    ],
  },
  {
    name: "Isaiah Ferguson",
    role: "Brazilian Jiu-Jitsu and Muay Thai coach",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454139445-CouchIsaiah.f4a7545a8931b4a9d08d.jpg",
    alt: "Isaiah Ferguson, BJJ and Muay Thai coach at Team Cama",
    bio: [
      "Isaiah started training Brazilian Jiu-Jitsu and Muay Thai in 2009 under Louie Concepcion and has not looked back since. It has been a huge part of his life ever since. He earned his Black Belt in Brazilian Jiu-Jitsu in 2021 and continues to train and improve every day.",
      "As an instructor for the Jiu-Jitsu and Muay Thai programs, Isaiah is a longtime student of the academy and a humble practitioner of its teachings. His discipline and work ethic have led to success in both kickboxing and Jiu-Jitsu competition.",
      "Isaiah believes that a strong body leads to a strong mind, and he works to instill that mindset in every student he teaches.",
    ],
  },
  {
    name: "Samantha Espinosa",
    role: "Taekwondo instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/sammy.jpg",
    alt: "Samantha Espinosa, Taekwondo instructor at Team Cama",
    bio: ["Bio coming soon."],
  },
  {
    name: "Christian White",
    role: "Taekwondo instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/ChristianWhite.jpg",
    alt: "Christian White, Taekwondo instructor at Team Cama",
    bio: ["Bio coming soon."],
  },
  {
    name: "Jay",
    role: "Taekwondo instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/Logos/CamaNewLogo.png",
    alt: "Team Cama logo placeholder for Jay, Taekwondo instructor",
    bio: ["Bio coming soon."],
  },
];

function InstructorBio({ paragraphs }: { paragraphs: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 180;
  const full = paragraphs.join("\n\n");
  const shouldTruncate = full.length > previewLength;
  const display =
    isExpanded || !shouldTruncate
      ? full
      : full.slice(0, previewLength).trimEnd() + "…";

  return (
    <div className="text-ink-muted text-[15px] leading-relaxed whitespace-pre-line">
      <p>{display}</p>
      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent text-sm font-medium mt-3 hover:underline"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

// Metadata is defined in a separate file since this is a client component
// See: metadata.ts in the same folder

export default function About() {
  return (
    <>
      <Navigation />

      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10"></div>
          <Image
            className="object-cover object-[center_35%] opacity-30 scale-105"
            src="https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_1674.jpg"
            alt="refined martial arts studio interior"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-20 px-12 md:px-24 max-w-5xl mx-auto text-center">
          <span className="font-label text-primary font-bold tracking-[0.4em] text-[10px] mb-6 block uppercase">
            Stockton, CA
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-white italic">
            TEAM <span className="font-normal text-primary">CAMA</span>
          </h1>
          <p className="mt-10 text-on-surface/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                &quot;We do not rise to the level of our expectations, we fall to the level of our <span className="text-primary font-bold not-italic">training</span>.&quot;
                </p>
        </div>
      </section>


      <OurJourney />

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-20 text-center">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white italic mb-4">Our Instructors</h2>
            <div className="h-px w-24 bg-primary mx-auto"></div>
            <p className="text-primary font-label tracking-[0.2em] text-[10px] mt-6 uppercase">
              Guiding students through discipline, character, and mastery—on and off the mat.
            </p>
          </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {instructors.map((person) => (
                <li key={person.name} className="flex flex-col">
                  <div className="aspect-4/5 overflow-hidden bg-surface-3 mb-5 rounded-lg relative">
                    <Image
                      src={person.image}
                      alt={person.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-ink mb-1">
                    {person.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">
                    {person.role}
                  </p>
                  <InstructorBio paragraphs={person.bio} />
                </li>
              ))}
            </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
