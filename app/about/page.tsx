import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import OurJourney from "../components/OurJourney";
import TrialButton from "../components/TrialButton";

export const metadata: Metadata = {
  title: "Our Story & Coaches",
  description: "Meet the instructors behind Team Cama and follow our Stockton story from a small garage in 2011 to a community built around Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo.",
};

interface Instructor {
  name: string;
  role: string;
  image: string;
  alt: string;
  imagePosition?: string;
  bio: string[];
}

const instructors: Instructor[] = [
  {
    name: "Louie Concepcion",
    role: "Head instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/Sensei.6067b8adb6fab92c15fa.png",
    alt: "Louie Concepcion, head instructor at Team Cama",
    imagePosition: "center top",
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
    imagePosition: "center top",
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
    bio: [],
  },
  {
    name: "Christian White",
    role: "Taekwondo instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/ChristianWhite.jpg",
    alt: "Christian White, Taekwondo instructor at Team Cama",
    imagePosition: "center 15%",
    bio: [],
  },
  {
    name: "Jay",
    role: "Taekwondo instructor",
    image:
      "https://preblobaccount.blob.core.windows.net/prerecordedblob/Logos/CamaNewLogo.png",
    alt: "Team Cama logo placeholder for Jay, Taekwondo instructor",
    bio: [],
  },
];


function InstructorBio({ paragraphs }: { paragraphs: string[] }) {
  if (!paragraphs.length) return null;
  const first = paragraphs[0];
  const end = first.indexOf(". ");
  const introduction = end === -1 ? first : first.slice(0, end + 1);
  const remaining = [first.slice(introduction.length).trim(), ...paragraphs.slice(1)].filter(Boolean);
  return <div className="text-ink-muted text-sm leading-relaxed">
    <p>{introduction}</p>
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
            {instructors.map(person => <li key={person.name} className="min-w-0">
              <div className="relative aspect-[5/4] overflow-hidden bg-surface-3 mb-5">
                <Image src={person.image} alt={person.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={person.name === "Jay" ? "object-contain p-10" : "object-cover"} style={{ objectPosition: person.imagePosition ?? "center 35%" }} />
              </div>
              <h3 className="font-headline text-3xl font-semibold uppercase mb-1">{person.name}</h3>
              <p className="text-primary text-sm mb-4">{person.role}</p>
              <InstructorBio paragraphs={person.bio} />
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
