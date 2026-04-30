import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Photos | Team Cama, Stockton martial arts",
  description:
    "Training, competition, and the community at Team Cama in Stockton, California.",
};

export default function Gallery() {
  return (
    <>
      <Navigation />

      <main id="main">
        <section className="bg-surface border-b border-rule">
          <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16">
            <p className="text-accent text-sm font-semibold mb-4">Photos</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Years on the mats.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
              Training, competing, hanging out. The same people, year after
              year.
            </p>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <GalleryGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
