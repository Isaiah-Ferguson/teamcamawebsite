"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const disciplines = [
  {
    slug: "bjj",
    name: "Brazilian Jiu-Jitsu",
    blurb: "Leverage and timing. Control on the ground, taught from the basics up.",
    href: "/classes#bjj",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_3602.jpg",
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    blurb: "Punches, kicks, knees, elbows. Striking with a coach in your corner.",
    href: "/classes#muay-thai",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_2379.jpg",
  },
  {
    slug: "taekwondo",
    name: "Taekwondo",
    blurb: "Footwork, kicks, and discipline. Beginner-friendly for kids and adults.",
    href: "/classes#taekwondo",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454195728-Sammy2.deb1fd8fc4bd4fb9e99b.jpg",
  },
];

const values = [
  {
    title: "Integrity",
    body: "Train the same way whether anyone is watching or not. Character shows up first in how you warm up.",
  },
  {
    title: "Respect",
    body: "Respect the room, your coach, and your training partner. Hard work is shared work.",
  },
  {
    title: "Discipline",
    body: "Show up. Keep showing up. The students who get good are the ones who never quit coming in.",
  },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Navigation />

      <main id="main">
        {/* Hero */}
        <section className="relative min-h-[78vh] md:min-h-[86vh] w-full overflow-hidden flex items-center bg-evening text-evening-ink">
          <div className="absolute inset-0 z-0">
            <Image
              alt=""
              className="w-full h-full object-cover opacity-80"
              src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454176462-Promotion1.78f9ff1c10110cc40b48.jpg"
              fill
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 hero-fade-evening" aria-hidden="true" />
          </div>
          <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-7xl py-20">
            <div className="max-w-2xl">
              <p className="font-body text-evening-ink-muted text-sm mb-6">
                Stockton, California. Since 2011.
              </p>
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-evening-ink mb-6 tracking-tight">
                Team
                Cama
              </h1>
              <p className="text-evening-ink-muted text-lg max-w-xl mb-10 leading-relaxed">
                Concepcion Academy of Martial Arts teaches Brazilian Jiu-Jitsu,
                Muay Thai, and Taekwondo for adults and kids. No tough-guy
                routine, no gimmicks. Just real coaches and real training.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="bg-accent text-accent-ink px-6 py-3.5 font-medium rounded hover:bg-accent-hover transition-colors"
                >
                  Come train with us
                </button>
                <Link
                  href="/classes"
                  className="border border-evening-ink/40 text-evening-ink px-6 py-3.5 font-medium rounded hover:bg-evening-ink/10 transition-colors text-center"
                >
                  See the classes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial pull-quote */}
        <section className="bg-surface py-24 md:py-32 border-b border-rule">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <p className="font-headline text-3xl md:text-5xl text-ink leading-[1.2] tracking-tight max-w-4xl">
              We are not the gym you walk into to prove something. We are the
              gym you keep walking into,
              <span className="text-accent"> for years</span>.
            </p>
            <p className="text-ink-muted text-base mt-8 max-w-xl">
              The garage we opened in 2011 had no air conditioning and a leaky
              roof. Some of those first students still train here. That is the
              point.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-accent font-medium hover:gap-3 transition-all"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Disciplines */}
        <section className="bg-surface-2 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16 items-end">
              <div className="md:col-span-7">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-ink leading-tight">
                  Three disciplines, one room.
                </h2>
              </div>
              <p className="md:col-span-5 text-ink-muted text-base leading-relaxed">
                Train one. Train all three. Beginners welcome in every class.
                Drop in for a free first session.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {disciplines.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={d.href}
                    className="group block bg-surface rounded-lg overflow-hidden border border-rule hover:border-rule-strong transition-colors h-full"
                  >
                    <div className="relative aspect-4/5 overflow-hidden bg-surface-3">
                      <Image
                        src={d.image}
                        alt={`${d.name} class at Team Cama`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="font-headline text-xl font-bold text-ink mb-2">
                        {d.name}
                      </h3>
                      <p className="text-ink-muted text-sm leading-relaxed mb-4">
                        {d.blurb}
                      </p>
                      <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Class details
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                What we expect, and what we offer.
              </h2>
              <p className="text-ink-muted text-base leading-relaxed">
                Three things we ask of every student, and three things we hold
                ourselves to in return.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl">
              {values.map((v, i) => (
                <li key={v.title} className="flex flex-col gap-3">
                  <span
                    className="font-headline text-accent font-bold text-base"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="text-ink-muted text-[15px] leading-relaxed">
                    {v.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-2 border-t border-rule py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-ink leading-tight mb-3">
                Your first class is on us.
              </h2>
              <p className="text-ink-muted text-base leading-relaxed">
                Send us a note and tell us what you want to try. We will email
                you back about a time that works.
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
                href="/classes"
                className="border border-rule-strong text-ink px-6 py-3.5 font-medium rounded hover:bg-surface-3 transition-colors text-center"
              >
                See the schedule
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <Footer />
    </>
  );
}
