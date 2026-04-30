import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Visit | Team Cama, Stockton martial arts",
  description:
    "Stop by 8855 Thornton Rd Suite B in Stockton, or send us a note about classes.",
};

export default function Contact() {
  return (
    <>
      <Navigation />

      <main id="main">
        <section className="bg-surface border-b border-rule">
          <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16">
            <p className="text-accent text-sm font-semibold mb-4">Visit</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Come see the gym.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
              Drop in during class hours, or send us a note. The first class is
              on us.
            </p>
          </div>
        </section>

        <section className="bg-surface-2 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 flex flex-col gap-10">
              <section>
                <h2 className="font-headline text-2xl font-bold text-ink mb-5">
                  Find us
                </h2>
                <address className="not-italic space-y-4 text-ink">
                  <p>
                    <span className="block text-ink-subtle text-xs font-semibold uppercase tracking-wider mb-1">
                      Studio
                    </span>
                    8855 Thornton Rd Suite B
                    <br />
                    Stockton, California
                  </p>
                  <p>
                    <span className="block text-ink-subtle text-xs font-semibold uppercase tracking-wider mb-1">
                      Phone
                    </span>
                    <a className="hover:text-accent" href="tel:+12094821352">
                      (209) 482-1352
                    </a>
                  </p>
                  <p>
                    <span className="block text-ink-subtle text-xs font-semibold uppercase tracking-wider mb-1">
                      Email
                    </span>
                    <a
                      className="hover:text-accent"
                      href="mailto:Cama5638@gmail.com"
                    >
                      Cama5638@gmail.com
                    </a>
                  </p>
                </address>
              </section>

              <section>
                <h2 className="font-headline text-2xl font-bold text-ink mb-5">
                  Hours
                </h2>
                <dl className="space-y-3 text-ink">
                  <div className="flex justify-between gap-6">
                    <dt className="text-ink-muted">Monday to Friday</dt>
                    <dd>5:30 to 8:30 PM</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-ink-muted">Saturday</dt>
                    <dd>9:00 AM to 12:00 PM</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-ink-muted">Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </section>

              <div className="aspect-4/3 w-full overflow-hidden rounded-lg border border-rule">
                <iframe
                  title="Team Cama on Google Maps, 8855 Thornton Rd Suite B, Stockton, California"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
