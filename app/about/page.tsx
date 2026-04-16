"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import OurJourney from "../components/OurJourney";
import { useState } from "react";

function InstructorBio({ children, previewLength = 150 }: { children: string; previewLength?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = children;
  const shouldTruncate = text.length > previewLength;
  const displayText = isExpanded || !shouldTruncate ? text : text.slice(0, previewLength) + "...";

  return (
    <div className="text-on-surface/70 text-sm leading-relaxed font-light">
      <p>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-xs font-semibold mt-2 hover:underline focus:outline-none"
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
            THE ART OF DISCIPLINE
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-white italic">
            TEAM <span className="font-normal text-primary">CAMA</span>
          </h1>
          <p className="mt-10 text-on-surface/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                &quot;We do not rise to the level of our expectations, we fall to the level of our <span className="text-primary font-bold not-italic">training</span>.&quot;
                </p>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 border border-outline/20 translate-x-4 translate-y-4 -z-10"></div>
                <div className="relative aspect-[4/5]">
                  <Image
                    className="object-cover brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://preblobaccount.blob.core.windows.net/prerecordedblob/Allie.jpg"
                    alt="Team Cama Competition"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-16 italic tracking-tight">
                Our Philosophy
              </h2>
              <div className="space-y-16">
                <div className="group">
                  <span className="text-primary font-headline italic text-xl mb-4 block">I. Discipline & Focus</span>
                  <p className="text-on-surface text-lg leading-relaxed font-light border-l border-outline/30 pl-8 group-hover:border-primary transition-colors duration-500">
                    Martial arts begins with the mind. We build focus, control, and confidence that carries over into everyday life.                  </p>
                </div>
                <div className="group">
                  <span className="text-primary font-headline italic text-xl mb-4 block">II. Technique Over Strength</span>
                  <p className="text-on-surface text-lg leading-relaxed font-light border-l border-outline/30 pl-8 group-hover:border-primary transition-colors duration-500">
                    Power comes from precision. Our training focuses on clean technique and understanding, not just effort or force.</p>
                </div>
                <div className="group">
                  <span className="text-primary font-headline italic text-xl mb-4 block">III. Progress Through Consistency</span>
                  <p className="text-on-surface text-lg leading-relaxed font-light border-l border-outline/30 pl-8 group-hover:border-primary transition-colors duration-500">
                    Growth is earned over time. We push our students to stay consistent, embrace challenges, and keep improving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurJourney />

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-20 text-center">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white italic mb-4">The Instructors</h2>
            <div className="h-px w-24 bg-primary mx-auto"></div>
            <p className="text-primary font-label tracking-[0.2em] text-[10px] mt-6 uppercase">
              Guiding students through discipline, character, and mastery—on and off the mat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/Sensei.6067b8adb6fab92c15fa.png"
                  alt="refined portrait of Elias Vance, martial arts master"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Louie Concepcion</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Head Instructor</p>
              <InstructorBio>
                Louie Concepcion, a Stockton native, brings over 35 years of martial arts experience across multiple disciplines and under a variety of respected instructors. His background includes Traditional and Olympic-style Taekwondo, Brazilian Jiu-Jitsu, Kickboxing, Filipino Martial Arts, and Jeet Kune Do Concepts.

                Driven by a lifelong passion for martial arts, he founded this academy to share his knowledge, promote the values of humility and discipline, and inspire the next generation of students.

                Mr. Concepcion holds a 3rd Dan Black Belt in Taekwondo (certified by the Kukkiwon) and is a Black Belt in Brazilian Jiu-Jitsu under Charles Gracie.
              </InstructorBio>
            </div>
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/Angelo.jpg"
                  alt="refined portrait of Sarah Chen, BJJ black belt"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Angelo Garcia</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Brazilian Jiu Jitsu Instructor</p>
              <InstructorBio>
                Angelo Garcia has been training Brazilian Jiu-Jitsu since 2009 and earned his Gracie Black Belt through years of dedication. As an instructor at C.A.M.A., he works effectively with both children and adults, bringing a strong foundation in both Gi and No-Gi Jiu-Jitsu.

                Blending the mindset of both an artist and martial artist, Angelo brings creativity and attention to detail into his training and teaching. He is constantly striving to improve his technical ability and instruction, never shying away from hard training.

                As an avid student, competitor, and practitioner, Angelo is committed to lifelong growth in martial arts and is passionate about helping others develop their skills. He takes pride in supporting the next generation of Jiu-Jitsu athletes and sharing his knowledge with those willing to learn.
              </InstructorBio>
            </div>
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454139445-CouchIsaiah.f4a7545a8931b4a9d08d.jpg"
                  alt="Isaiah Ferguson"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Isaiah Ferguson</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Brazilian Jiu Jitsu & Muay Thai Coach</p>
              <InstructorBio>
                Isaiah started training Brazilian Jiu-Jitsu and Muay Thai in 2009 under Louie Concepcion and hasn&apos;t looked back since. It&apos;s been a huge part of his life ever since. Isaiah earned his black belt in Brazilian Jiu-Jitsu in 2021 and continues to train and improve every day.

                As an instructor for C.A.M.A.&apos;s Jiu-Jitsu and Muay Thai programs, Isaiah is a longtime student of the academy and a dedicated, humble practitioner of its teachings. His discipline and work ethic have led to success in both kickboxing and Jiu-Jitsu competition.

                Isaiah believes that a strong body leads to a strong mind, and he strives to instill that mindset in every student he teaches.
              </InstructorBio>
            </div>
            {/* New Instructor 1 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/sammy.jpg"
                  alt="New Instructor"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Samantha Espenosa</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Taekwondo Instructor</p>
              <InstructorBio>
Bio Coming Soon...
              </InstructorBio>
            </div>
            {/* New Instructor 2 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/ChristianWhite.jpg"
                  alt="New Instructor"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Christian White</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Taekwondo Instructor</p>
              <InstructorBio>
                Bio Coming Soon...
              </InstructorBio>
            </div>
            {/* New Instructor 3 */}
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/Logos/CamaNewLogo.png"
                  alt="New Instructor"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Jay</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Taekwondo Instructor</p>
              <InstructorBio>
                Bio Coming Soon...
              </InstructorBio>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
