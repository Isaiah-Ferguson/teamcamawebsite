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

export default function About() {
  return (
    <>
      <Navigation />

      <main id="main">
        <section className="bg-surface border-b border-rule">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <p className="text-accent text-sm font-semibold mb-4">
                About Team Cama
              </p>
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
                Same gym since 2011.
              </h1>
              <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
                Concepcion Academy of Martial Arts started in a Stockton garage
                with no AC and a leaky roof. The gym is bigger now, the mats
                are nicer, and many of the same people are still on them.
              </p>
            </div>
            <div className="md:col-span-5 relative aspect-4/5 rounded-lg overflow-hidden bg-surface-3">
              <Image
                src="https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_1674.jpg"
                alt="Inside the Team Cama training studio"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
          </div>
        </section>

        <OurJourney />

        <section className="py-24 md:py-32 bg-surface-2 border-t border-rule">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-16 max-w-2xl">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-ink leading-tight mb-4">
                The instructors
              </h2>
              <p className="text-ink-muted text-base leading-relaxed">
                Real coaches, on the mats, every week. Most started here as
                students.
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
      </main>

      <Footer />
    </>
  );
}
