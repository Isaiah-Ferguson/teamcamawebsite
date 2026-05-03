import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Gallery | TEAM CAMA Elite Performance",
  description:
    "A look inside the training, competition, and community that defines TEAM CAMA.",
};

export default function Gallery() {
  return (
    <>
      <Navigation />

            <main id="main">
        <section className="bg-background">
          <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16">
            <p className="text-accent text-sm font-semibold mb-4">The Record</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Gallery
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
              Every image is a moment in time of the past 15 years.
            </p>
          </div>
        </section>


        <section className="pt-2 pb-24 bg-background">
          <div className="max-w-7xl mx-auto px-8 md:px-12">
            <GalleryGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
