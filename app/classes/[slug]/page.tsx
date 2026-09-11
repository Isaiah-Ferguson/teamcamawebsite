import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import TrialButton from "../../components/TrialButton";
import FirstVisit from "../../components/FirstVisit";
import JsonLd from "../../components/JsonLd";
import { imageUrl, programPath, programs } from "../../lib/programs";
import { instructorsFor, introduction } from "../../lib/instructors";
import { mapsUrl, site } from "../../lib/site";
import { breadcrumbSchema, programSchema } from "../../lib/schema";

type Props = { params: Promise<{ slug: string }> };

// Only the three known programs exist; anything else is a 404, not a runtime render.
export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map(program => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find(item => item.slug === slug);
  if (!program) return {};
  const path = programPath(program);
  return {
    title: program.seo.title,
    description: program.seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${program.seo.title} | ${site.shortName}`,
      description: program.seo.description,
      url: path,
      images: [{ url: imageUrl(program.image), alt: program.alt }],
    },
    twitter: { title: `${program.seo.title} | ${site.shortName}`, description: program.seo.description, images: [imageUrl(program.image)] },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find(item => item.slug === slug);
  if (!program) notFound();
  const path = programPath(program);
  const coaches = instructorsFor(program.id);
  const others = programs.filter(item => item.id !== program.id);

  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <JsonLd data={programSchema(program)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Classes", path: "/classes" }, { name: program.name, path }])} />

      <section className="page-intro">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-widest text-ink-muted">
              <li><Link href="/" className="hover:text-ink">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/classes" className="hover:text-ink">Classes</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">{program.name}</li>
            </ol>
          </nav>
          <p className="eyebrow text-primary mb-5">{program.focus} · {site.address.city}, {site.address.regionName}</p>
          <h1 className="page-heading mb-6">{program.name}<span className="text-primary">.</span></h1>
          <div className="flex flex-col lg:flex-row justify-between gap-7 lg:items-end">
            <p className="text-ink-muted text-lg leading-relaxed max-w-xl">{program.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <TrialButton program={program.name}>Try {program.shortName} free</TrialButton>
              <Link href="#schedule" className="btn btn-secondary">Class times <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid md:grid-cols-2 gap-7 md:gap-12 lg:gap-20 items-start">
          <figure className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-surface md:sticky md:top-28">
            <Image src={imageUrl(program.image)} alt={program.alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            <figcaption className="absolute bottom-4 left-4 text-xs bg-background/90 text-ink px-3 py-2">{program.caption} / Team Cama</figcaption>
          </figure>
          <div>
            <p className="eyebrow text-primary mb-4">About the program</p>
            <h2 className="section-heading mb-6">{program.headline}</h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">{program.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            <h3 className="eyebrow mt-10 mb-2">What you&apos;ll train</h3>
            <ul className="border-t border-rule">
              {program.highlights.map(item => <li key={item} className="flex items-start gap-3 border-b border-rule py-3 text-sm"><span aria-hidden="true" className="mt-2 w-1.5 h-1.5 shrink-0 bg-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="schedule" className="section-space border-y border-rule bg-surface">
        <div className="site-container grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-20">
          <div>
            <p className="eyebrow text-primary mb-4">Weekly schedule</p>
            <h2 className="section-heading mb-5">{program.shortName} class times.</h2>
            <p className="text-ink-muted text-sm leading-relaxed">{program.audience}. All times Pacific.<br />{site.address.street}, {site.address.city}, {site.address.region}</p>
            <Link href="/classes#schedule" className="text-link mt-5">See every class <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="divide-y divide-rule border-y border-rule">
            {program.schedule.map(row => <li key={row.day + row.group} className="py-4 grid sm:grid-cols-[1fr_auto] gap-x-6 gap-y-1">
              <div><p className="font-medium">{row.day}</p><p className="text-ink-muted text-sm mt-1">{row.group}</p></div>
              <p className="tabular-nums text-sm sm:text-right">{row.time}</p>
            </li>)}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
            <div><p className="eyebrow text-primary mb-4">Your instructors</p><h2 className="section-heading">Who teaches {program.shortName}.</h2></div>
            <Link href="/about#coaches" className="text-link self-start md:self-auto">Meet the whole team <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {coaches.map(person => <li key={person.id} className="min-w-0">
              <div className="relative aspect-[5/4] overflow-hidden bg-surface-3 mb-5">
                <Image src={person.image} alt={person.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={person.imageFit === "contain" ? "object-contain p-10" : "object-cover"} style={{ objectPosition: person.imagePosition ?? "center 35%" }} />
              </div>
              <h3 className="font-headline text-3xl font-semibold uppercase mb-1">{person.name}</h3>
              <p className="text-primary text-sm mb-3">{person.role}</p>
              {person.bio.length > 0 && <>
                <p className="text-ink-muted text-sm leading-relaxed">{introduction(person.bio)}</p>
                <Link href={`/about#${person.id}`} className="text-link mt-3">Full bio <span aria-hidden="true">↗</span></Link>
              </>}
            </li>)}
          </ul>
        </div>
      </section>

      {program.photos.length > 0 && <section className="section-space border-t border-rule bg-surface">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8">
            <div><p className="eyebrow text-primary mb-4">On the mat</p><h2 className="section-heading">{program.shortName} at Team Cama.</h2></div>
            <Link href="/gallery" className="text-link self-start md:self-auto">Full gallery <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {program.photos.map(photo => <li key={photo.image} className="relative aspect-[4/5] overflow-hidden bg-surface-3">
              <Image src={imageUrl(photo.image)} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </li>)}
          </ul>
        </div>
      </section>}

      <FirstVisit questions={program.faq} eyebrow={`Questions about ${program.shortName}`} heading={<>Before your first<br />{program.shortName} class.</>} />

      <section className="section-space border-t border-rule">
        <div className="site-container grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="eyebrow text-primary mb-4">First class. On us.</p>
            <h2 className="section-heading mb-4">Train {program.shortName} in {site.address.city}.</h2>
            <p className="text-ink-muted max-w-lg leading-relaxed">Tell us you&apos;d like to try {program.name}. We&apos;ll help you pick a session and answer any questions before you arrive.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7"><TrialButton program={program.name} /><Link href="/contact" className="btn btn-secondary">Plan your visit</Link></div>
          </div>
          <address className="not-italic border border-rule bg-surface p-6 sm:p-8 text-sm leading-relaxed">
            <p className="eyebrow mb-4">Find us</p>
            <p className="font-medium text-base">{site.name}</p>
            <p className="text-ink-muted">{site.address.street}<br />{site.address.city}, {site.address.regionName} {site.address.postalCode}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              <a href={`tel:${site.phoneE164}`} className="text-link">{site.phone}</a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">Get directions <span aria-hidden="true">↗</span></a>
            </div>
            <p className="text-ink-muted mt-6 pt-5 border-t border-rule">Also at Team Cama: {others.map((item, index) => <span key={item.id}>{index > 0 && " · "}<Link href={programPath(item)} className="text-ink underline underline-offset-4">{item.name}</Link></span>)}</p>
          </address>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
