import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TrialButton from "./components/TrialButton";
import Link from "next/link";
import Image from "next/image";

const disciplines = [
  { id: "bjj", name: "Brazilian Jiu-Jitsu", detail: "Technique. Leverage. Control.", image: "DCS_3602.jpg", alt: "Team Cama Brazilian Jiu-Jitsu instructors on the mat" },
  { id: "muay-thai", name: "Muay Thai", detail: "Eight limbs. Endless possibility.", image: "DCS_2379.jpg", alt: "Team Cama Muay Thai athletes at a competition" },
  { id: "taekwondo", name: "Taekwondo", detail: "Build confidence, one kick at a time.", image: "1774454195728-Sammy2.deb1fd8fc4bd4fb9e99b.jpg", alt: "Samantha practicing a Taekwondo kick" },
];

export default function Home() {
  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="relative isolate overflow-hidden min-h-[min(820px,100svh)] flex flex-col justify-end pt-36 pb-8 md:pt-48 md:pb-10">
        <Image alt="Students and instructors together on the mats at Team Cama" src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454176462-Promotion1.78f9ff1c10110cc40b48.jpg" fill sizes="100vw" priority className="object-cover object-[62%_center] grayscale brightness-90 -z-20" />
        <div className="absolute inset-0 hero-shade -z-10" />
        <div className="site-container">
          <p className="eyebrow flex items-center gap-3 mb-7 md:mb-10"><span className="w-1.5 h-1.5 bg-primary" />Stockton, California · Est. 2011</p>
          <h1 className="hero-wordmark mb-7 md:mb-10">Team Cama<span className="text-primary">.</span></h1>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-lg">
              <p className="font-editorial italic text-2xl md:text-3xl mb-4">Find your place on the mat.</p>
              <p className="text-ink-muted leading-relaxed text-base">Brazilian Jiu-Jitsu, Muay Thai &amp; Taekwondo.<br className="hidden sm:block" /> Real training. A community that grows with you.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <TrialButton />
              <Link href="#disciplines" className="btn btn-secondary">Explore the classes <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <div className="mt-12 md:mt-16 pt-5 border-t border-white/25 flex flex-wrap justify-between gap-3 text-[10px] md:text-xs tracking-widest uppercase text-ink-muted">
            <span>Concepcion Academy of Martial Arts</span><span>8855 Thornton Rd · Stockton, CA</span>
          </div>
        </div>
      </section>

      <section id="disciplines" className="section-space">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9 md:mb-12">
            <div><p className="eyebrow text-primary mb-4">01 / Find your discipline</p><h2 className="section-heading">Three disciplines.<br />One team.</h2></div>
            <Link href="/classes#schedule" className="text-link self-start md:self-auto">View the weekly schedule <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {disciplines.map((item, i) => <Link key={item.id} href={`/classes#${item.id}`} className="group relative flex items-end min-h-[360px] sm:min-h-[420px] md:min-h-[380px] lg:min-h-[440px] border border-rule overflow-hidden bg-surface">
              <Image src={`https://preblobaccount.blob.core.windows.net/prerecordedblob/${item.image}`} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale opacity-80 transition-[transform,filter,opacity] duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:opacity-100 motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-visible:scale-[1.04]" />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-background via-background/55 via-35% to-transparent" />
              <span className="absolute top-4 left-4 bg-background/80 px-2 py-1 text-xs font-mono">0{i + 1}</span>
              <div className="relative w-full p-5 md:p-6 transition-transform duration-500 motion-safe:group-hover:-translate-y-1 motion-safe:group-focus-visible:-translate-y-1">
                <div className="flex justify-between gap-3 items-center"><h3 className="font-headline text-3xl lg:text-4xl font-semibold uppercase">{item.name}</h3><span className="text-primary text-2xl transition-transform duration-500 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1" aria-hidden="true">↗</span></div>
                <p className="text-ink text-sm mt-3">{item.detail}</p>
              </div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-rule bg-surface">
        <div className="site-container grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="relative min-h-72 lg:min-h-[480px]">
            {/* Account for the full landscape image behind the tall object-cover crop,
                not just the visible column width, so faces stay sharp on Retina screens. */}
            <Image
              src="https://preblobaccount.blob.core.windows.net/prerecordedblob/2024.jpg"
              alt="The Team Cama community together at the Stockton gym"
              fill
              quality={90}
              sizes="(min-width: 1024px) 1000px, (min-width: 768px) calc(100vw - 5rem), (min-width: 528px) calc(100vw - 3rem), 480px"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 eyebrow bg-background/90 px-3 py-2">Built together. Since 2011.</span>
          </div>
          <div>
            <p className="eyebrow text-primary mb-4">02 / More than a gym</p>
            <h2 className="section-heading mb-6">Good people.<br />Purposeful training.</h2>
            <p className="text-ink-muted leading-relaxed mb-8">We don&apos;t believe in going through the motions. Every movement has purpose. Every class is intentional. We&apos;re here to help you improve—physically, mentally, and consistently.</p>
            <div className="divide-y divide-rule border-y border-rule">
              {[
                ["Integrity", "Do what is right, even when no one is watching."],
                ["Respect", "Honor your instructors, your training partners, and yourself."],
                ["Discipline", "Show up, stay consistent, and keep doing the work."],
              ].map(([title, copy]) => <div key={title} className="py-4 grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4"><h3 className="font-headline text-2xl uppercase font-semibold">{title}</h3><p className="text-sm text-ink-muted leading-relaxed">{copy}</p></div>)}
            </div>
            <Link href="/about" className="text-link mt-5">Meet your coaches <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container flex flex-col lg:flex-row justify-between lg:items-center gap-8">
          <div><p className="eyebrow text-primary mb-4">Your next chapter starts here</p><h2 className="section-heading mb-4">First class. On us.</h2><p className="text-ink-muted max-w-lg leading-relaxed">Tell us what you&apos;d like to try. We&apos;ll help you find a class and take that first step.</p></div>
          <div className="flex flex-col sm:flex-row gap-3"><TrialButton /><Link href="/contact" className="btn btn-secondary">Plan your visit</Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
