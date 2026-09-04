import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrialButton from "../components/TrialButton";
import ClassSchedule from "../components/ClassSchedule";
import FirstVisit from "../components/FirstVisit";
import { programs } from "../lib/programs";

export const metadata: Metadata = {
  title: "Classes & Schedule",
  description: "Explore Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo classes at Team Cama in Stockton. Find your program, see the weekly schedule, and try a free first class.",
};

export default function Classes() {
  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="page-intro">
        <div className="site-container">
          <p className="eyebrow text-primary mb-5">The work starts here</p>
          <h1 className="page-heading mb-6">Find your discipline.</h1>
          <div className="flex flex-col lg:flex-row justify-between gap-7 lg:items-end">
            <p className="text-ink-muted text-lg leading-relaxed max-w-xl">Strong fundamentals. Purposeful training. Three ways to challenge yourself—and one team in your corner.</p>
            <div className="flex flex-col sm:flex-row gap-3"><TrialButton /><Link href="#schedule" className="btn btn-secondary">Weekly schedule <span aria-hidden="true">↓</span></Link></div>
          </div>
          <nav aria-label="Jump to program" className="flex flex-wrap gap-x-7 gap-y-2 mt-9">{programs.map(program => <Link key={program.id} href={`#${program.id}`} className="text-link">{program.name}<span aria-hidden="true">↓</span></Link>)}</nav>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container space-y-16 md:space-y-24">
          {programs.map((program, i) => <article id={program.id} key={program.id} className="grid md:grid-cols-2 gap-7 md:gap-12 lg:gap-20 items-center">
            <figure className={`relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-surface ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Image src={`https://preblobaccount.blob.core.windows.net/prerecordedblob/${program.image}`} alt={program.alt} fill sizes="(max-width: 768px) 100vw, 50vw" loading={i === 0 ? "eager" : "lazy"} className="object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-xs bg-background/90 text-ink px-3 py-2">{program.caption} / Team Cama</figcaption>
            </figure>
            <div>
              <p className="eyebrow text-primary mb-3">0{i + 1} / {program.focus}</p>
              <h2 className="section-heading mb-5">{program.name}</h2>
              <p className="text-ink-muted text-base leading-relaxed mb-6">{program.description}</p>
              <div className="border-y border-rule py-4 mb-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <span>{program.days}</span><span className="text-ink-muted">{program.id === "taekwondo" ? "Kids & adults" : "All levels welcome"}</span>
              </div>
              <TrialButton program={program.name}>Try {program.name === "Brazilian Jiu-Jitsu" ? "Jiu-Jitsu" : program.name}</TrialButton>
            </div>
          </article>)}
        </div>
      </section>
      <section id="schedule" className="section-space border-y border-rule bg-surface">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-9"><div><p className="eyebrow text-primary mb-4">Make time for yourself</p><h2 className="section-heading">On the mat this week.</h2></div><p className="text-ink-muted text-sm">All times Pacific · Stockton, CA</p></div>
          <ClassSchedule />
          <p className="mt-7 pt-5 border-t border-rule text-sm text-ink-muted">Planning your first visit? <Link href="/contact#inquiry" className="underline underline-offset-4 text-ink">Get in touch</Link> so we can help you find the right session.</p>
        </div>
      </section>
      <FirstVisit />
    </main>
    <Footer />
  </>;
}
