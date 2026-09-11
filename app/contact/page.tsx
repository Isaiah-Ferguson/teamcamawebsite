import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import { mapsUrl, site } from "../lib/site";

export const metadata: Metadata = {
  title: "Visit the Gym",
  description: "Try your first class at Team Cama. Find us at 8855 Thornton Rd Suite B in Stockton, California. Contact us for Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <>
    <Navigation />
    <main id="main" tabIndex={-1}>
      <section className="page-intro">
        <div className="site-container">
          <p className="eyebrow text-primary mb-5">We all start somewhere</p>
          <h1 className="page-heading mb-6">Take the first step.</h1>
          <p className="text-ink-muted text-lg max-w-xl leading-relaxed">Come meet the team. Find a class that fits. Your first one is on us.</p>
          <div className="flex flex-wrap gap-5 mt-5"><a href={`tel:${site.phoneE164}`} className="text-link">Call {site.phone} <span aria-hidden="true">↗</span></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">Get directions <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
      <section className="section-space">
        <div className="site-container grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div id="inquiry" className="lg:col-span-7 lg:order-2"><ContactForm /></div>
          <div className="lg:col-span-5 space-y-9">
            <section>
              <h2 className="font-headline text-4xl uppercase font-semibold mb-5">Our corner of Stockton.</h2>
              <address className="not-italic text-base leading-relaxed">
                <p className="font-medium">{site.name}</p>
                <p>{site.address.street}<br /><span className="text-ink-muted">{site.address.city}, {site.address.regionName} {site.address.postalCode}</span></p>
                <a className="text-link mt-3" href={mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a>
              </address>
            </section>
            <section className="border-t border-rule pt-6">
              <h2 className="eyebrow mb-4">When to visit</h2>
              <dl className="space-y-4 text-sm">
                <div className="flex flex-wrap justify-between gap-2"><dt>Mon, Wed, Fri</dt><dd className="text-ink-muted">Jiu-Jitsu &amp; Muay Thai</dd></div>
                <div className="flex flex-wrap justify-between gap-2"><dt>Tue, Thu, Sat</dt><dd className="text-ink-muted">Taekwondo</dd></div>
                <div className="flex justify-between gap-2"><dt>Sunday</dt><dd className="text-ink-muted">Closed</dd></div>
              </dl>
              <Link href="/classes#schedule" className="text-link mt-4">See class times <span aria-hidden="true">↗</span></Link>
              <p className="text-sm text-ink-muted mt-3">Get in touch before your first visit so we can confirm the right session for you.</p>
            </section>
            <div className="aspect-[4/3] w-full overflow-hidden border border-rule bg-surface">
              <iframe title={`Team Cama on Google Maps, ${site.address.street}, ${site.address.city}, ${site.address.regionName}`} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209&zoom=15" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="text-sm text-ink-muted">Email us directly: <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4 break-all">{site.email}</a></p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
