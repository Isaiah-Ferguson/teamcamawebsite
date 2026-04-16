import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Gallery | TEAM CAMA Elite Performance",
  description: "A look inside the training, competition, and community that defines TEAM CAMA.",
};

export default function Gallery() {
  return (
    <>
      <Navigation />
<main className="pt-20 pb-20">

      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        </div>
        <div className="relative z-20 px-12 md:px-24 max-w-5xl mx-auto text-center w-full">
          <span className="font-label text-primary font-bold tracking-[0.4em] text-[10px] mb-6 block uppercase">
            The Record
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl leading-tight tracking-tight text-white italic">
            Gallery
          </h1>
          <p className="mt-8 text-on-surface/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            Every image is a moment of effort, sacrifice, and brotherhood captured on the mat.
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
