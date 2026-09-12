import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import TrialButton from "../components/TrialButton";
import { loadGalleryItems } from "../lib/gallery-files";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Training, competition, and the people who make Team Cama. Explore photographs from our Stockton martial arts community since 2011.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  const items = loadGalleryItems();
  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="page-intro">
        <div className="site-container">
          <p className="eyebrow text-primary mb-5">The Team Cama archive</p>
          <h1 className="page-heading mb-6">Life on the mat.</h1>
          <p className="text-ink-muted text-lg leading-relaxed max-w-xl">The training. The competition. The people.<br />Moments from our story, since 2011.</p>
        </div>
      </section>
      <section className="section-space"><div className="site-container"><GalleryGrid items={items} /></div></section>
      <section className="section-space border-t border-rule bg-surface"><div className="site-container flex flex-col md:flex-row md:items-center justify-between gap-7"><div><p className="eyebrow text-primary mb-4">Be part of what comes next</p><h2 className="section-heading">Your place in the picture.</h2></div><TrialButton /></div></section>
    </main>
    <Footer />
  </>;
}
