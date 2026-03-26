import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Us | TEAM CAMA Elite Performance",
  description: "Team CAMA represents the intersection of classical martial philosophy and modern athletic performance.",
};

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
            priority
          />
        </div>
        <div className="relative z-20 px-12 md:px-24 max-w-5xl mx-auto text-center">
          <span className="font-label text-primary font-bold tracking-[0.4em] text-[10px] mb-6 block uppercase">
            THE ART OF DISCIPLINE
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-white italic">
            Refined <span className="font-normal text-refined-stroke">Mastery</span>
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
                    src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454206078-TinaPunch.a70188e0743931b9209d.jpg"
                    alt="focused martial artist hands wrapping with precision"
                    fill
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

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-20 text-center">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white italic mb-4">The Instructors</h2>
            <div className="h-px w-24 bg-primary mx-auto"></div>
            <p className="text-primary font-label tracking-[0.2em] text-[10px] mt-6 uppercase">
              Master Instruction &amp; Mentorship
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Louie Concepcion</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Head Coach</p>
              <p className="text-on-surface/70 text-sm leading-relaxed font-light">
                Louie Concepcion, Head Instructor and founder of TEAM CAMA, has dedicated his life to mastering and teaching martial arts. He began his journey in Taekwondo in the 1980s, training with the Olympic team before transitioning to Brazilian Jiu-Jitsu in the early 2000s. He earned his black belt under Charles Gracie and has also studied Muay Thai under Master Toddy. With decades of experience, he continues to lead and mentor the next generation of martial artists.              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/Angelo.jpg"
                  alt="refined portrait of Sarah Chen, BJJ black belt"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Angelo Garcia</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Brazilian Jiu Jitsu Instructor</p>
              <p className="text-on-surface/70 text-sm leading-relaxed font-light">
                Angelo Garcia has been training Brazilian Jiu-Jitsu since 2009 and earned his Gracie black belt through years of dedication. As an artist and martial artist, he brings creativity and attention to detail into his training. He’s passionate about family and committed to helping the next generation of Jiu-Jitsu athletes grow.              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] overflow-hidden bg-background mb-8 relative">
                <Image
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  src="https://preblobaccount.blob.core.windows.net/prerecordedblob/1774454139445-CouchIsaiah.f4a7545a8931b4a9d08d.jpg"
                  alt="Isaiah Ferguson"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-headline font-bold text-xl text-white italic mb-1">Isaiah Ferguson</h4>
              <p className="text-primary font-label text-[10px] tracking-widest uppercase mb-4">Brazilian Jiu Jitsu & Muay Thai Coach</p>
              <p className="text-on-surface/70 text-sm leading-relaxed font-light">
                I started training Brazilian Jiu-Jitsu and Muay Thai in 2009 under Louie Concepcion and haven’t looked back since. It’s been a huge part of my life ever since. I earned my black belt in Brazilian Jiu-Jitsu in 2021 and continue to train and improve every day.              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
