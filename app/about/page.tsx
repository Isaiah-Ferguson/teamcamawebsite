import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import OurJourney from "../components/OurJourney";
import TrialButton from "../components/TrialButton";
import { instructors, introduction } from "../lib/instructors";
import { programPath, programs } from "../lib/programs";

export const metadata: Metadata = {
  title: "Our Story & Coaches",
  description: "Meet the instructors behind Team Cama and follow our Stockton story from a small garage in 2011 to a community built around Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo.",
  alternates: { canonical: "/about" },
};

function InstructorBio({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs.length) return null;
  const first = paragraphs[0];
  const intro = introduction(paragraphs);
  const remaining = [first.slice(intro.length).trim(), ...paragraphs.slice(1)].filter(Boolean);
  return <div className="text-ink-muted text-sm leading-relaxed">
    <p>{intro}</p>
    {remaining.length > 0 && <details className="group mt-2">
      <summary className="text-link text-ink"><span className="group-open:hidden">Read full bio</span><span className="hidden group-open:inline">Show less</span></summary>
      <div className="space-y-3 pt-4">{remaining.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </details>}
  </div>;
}

export default function About() {
  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="relative isolate overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24 border-b border-rule">
        <Image src="https://preblobaccount.blob.core.windows.net/prerecordedblob/DCS_1674.jpg" alt="A Team Cama competitor celebrating on the mat" fill sizes="100vw" priority className="object-cover object-[center_35%] grayscale -z-20" />
        <div className="absolute inset-0 bg-background/75 -z-10" />
        <div className="site-container">
          <p className="eyebrow text-primary mb-5">Stockton roots. Shared purpose.</p>
          <h1 className="page-heading max-w-3xl mb-6">A team.<br />Not just a gym.</h1>
          <p className="text-ink-muted text-lg max-w-xl leading-relaxed">From a small garage to a growing community. The addresses have changed. The work, the people, and the spirit remain.</p>
        </div>
      </section>
      <OurJourney />
      <section id="coaches" className="section-space bg-surface border-y border-rule">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
            <div><p className="eyebrow text-primary mb-4">Experience passed on</p><h2 className="section-heading">Meet your coaches.</h2></div>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm">Longtime practitioners. Lifelong students.<br />Here to help you find your next level.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {instructors.map(person => <li key={person.id} id={person.id} className="min-w-0">
              <div className="relative aspect-[5/4] overflow-hidden bg-surface-3 mb-5">
                <Image src={person.image} alt={person.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={person.imageFit === "contain" ? "object-contain p-10" : "object-cover"} style={{ objectPosition: person.imagePosition ?? "center 35%" }} />
              </div>
              <h3 className="font-headline text-3xl font-semibold uppercase mb-1">{person.name}</h3>
              <p className="text-primary text-sm mb-4">{person.role}</p>
              <InstructorBio paragraphs={person.bio} />
              <p className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs uppercase tracking-widest text-ink-subtle">
                {person.programs.map(id => { const program = programs.find(item => item.id === id)!; return <Link key={id} href={programPath(program)} className="hover:text-primary">{program.name} ↗</Link>; })}
              </p>
            </li>)}
          </ul>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container flex flex-col md:flex-row md:items-center justify-between gap-8"><div><p className="eyebrow text-primary mb-4">There is room for you here</p><h2 className="section-heading">Come meet the team.</h2></div><TrialButton /></div>
      </section>
    </main>
    <Footer />
  </>;
}
