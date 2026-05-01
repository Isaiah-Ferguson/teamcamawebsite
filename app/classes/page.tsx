"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScheduleModal from "../components/ScheduleModal";
import ContactModal from "../components/ContactModal";

interface ClassEntry {
  id: string;
  name: string;
  blurb: string;
  schedule: string[];
  focus: string;
  image: string;
  alt: string;
  caption: string;
}

const classes: ClassEntry[] = [
  {
    id: "muay-thai",
    name: "Muay Thai",
    blurb:
      "Known as the art of eight limbs, Muay Thai uses punches, kicks, knees, and elbows to develop strength, conditioning, and effective technique.",
    schedule: ["Mon, Wed, Fri", "7:15 – 8:15 PM"],
    focus: "Striking and defense, all levels welcome",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454132127-ChristionKnee.62b6231fcf1572e449cb.jpg",
    alt: "Christian Orellana training Muay Thai at Team Cama",
    caption: "Christian Orellana",
  },
  {
    id: "bjj",
    name: "Brazilian Jiu-Jitsu",
    blurb:
      "Our Jiu-Jitsu classes are built around efficient, leverage-based control. Self-defense, throws, and takedowns round out the art, with a strong focus on ground control and escapes. Beginners and experts welcome.",
    schedule: ["Mon, Wed, Fri", "5:30 – 7:15 PM"],
    focus: "Grappling and leverage, all levels welcome",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454215444-Triangle.04145b8e064b2a6d1bdf.jpg",
    alt: "Thomas Bunn training Brazilian Jiu-Jitsu at Team Cama",
    caption: "Thomas Bunn",
  },
  {
    id: "taekwondo",
    name: "Taekwondo",
    blurb:
      "A Korean martial art built on dynamic kicking, striking, and blocking. Excellent for both children and adults, Taekwondo emphasizes courtesy, integrity, perseverance, self-control, and indomitable spirit, while developing strength, speed, balance, and flexibility.",
    schedule: ["Tue, Thu", "5:30 – 8:30 PM", "Sat", "9:30 – 11:30 AM"],
    focus: "Kicking and speed, all levels welcome",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454188428-Sammy1.d8998c22e6dc126eb917.jpg",
    alt: "Samantha Espinosa training Taekwondo at Team Cama",
    caption: "Samantha Espinosa",
  },
];

export default function Classes() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Navigation />

      <main id="main">
        <section className="bg-surface border-b border-rule">
          <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
            <p className="text-accent text-sm font-semibold mb-4">Classes</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Pick a class.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
              Each program is designed around strong fundamentals, sharp
              technique, and the long-term work of getting better. Try one for
              free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="bg-accent text-accent-ink px-6 py-3.5 font-medium rounded hover:bg-accent-hover transition-colors"
              >
                Book your free class
              </button>
              <button
                type="button"
                onClick={() => setIsScheduleOpen(true)}
                className="border border-rule-strong text-ink px-6 py-3.5 font-medium rounded hover:bg-surface-2 transition-colors"
              >
                See full schedule
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface-2 py-16 md:py-24">
          <ul className="max-w-7xl mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
            {classes.map((cls, i) => {
              const reversed = i % 2 === 1;
              return (
                <li
                  key={cls.id}
                  id={cls.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center scroll-mt-24"
                >
                  <div
                    className={`md:col-span-6 ${
                      reversed ? "md:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-4/5 rounded-lg overflow-hidden bg-surface-3">
                      <Image
                        src={cls.image}
                        alt={cls.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <p className="absolute bottom-4 left-4 text-xs text-evening-ink bg-evening/70 backdrop-blur-sm px-3 py-1.5 rounded">
                        {cls.caption}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`md:col-span-6 ${
                      reversed ? "md:order-1" : ""
                    }`}
                  >
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-ink leading-tight mb-5">
                      {cls.name}
                    </h2>
                    <p className="text-ink-muted text-base leading-relaxed mb-8 max-w-prose">
                      {cls.blurb}
                    </p>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-rule">
                      <div>
                        <dt className="text-ink-subtle text-xs font-semibold uppercase tracking-wider mb-2">
                          Schedule
                        </dt>
                        <dd className="text-ink text-[15px] space-y-1">
                          {cls.schedule.map((line, j) => (
                            <p
                              key={j}
                              className={
                                j % 2 === 0
                                  ? "font-medium"
                                  : "text-ink-muted text-sm"
                              }
                            >
                              {line}
                            </p>
                          ))}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-ink-subtle text-xs font-semibold uppercase tracking-wider mb-2">
                          Focus
                        </dt>
                        <dd className="text-ink text-[15px]">{cls.focus}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="bg-surface border-t border-rule py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-ink leading-tight mb-3">
                Try a class for free.
              </h2>
              <p className="text-ink-muted text-base leading-relaxed">
                Send us a quick note about which class you want to try and we
                will get you on a mat.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="bg-accent text-accent-ink px-6 py-3.5 font-medium rounded hover:bg-accent-hover transition-colors"
              >
                Get in touch
              </button>
              <Link
                href="/about"
                className="border border-rule-strong text-ink px-6 py-3.5 font-medium rounded hover:bg-surface-2 transition-colors text-center"
              >
                Meet the coaches
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
