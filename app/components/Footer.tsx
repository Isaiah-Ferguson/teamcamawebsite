import Link from "next/link";
import Image from "next/image";
import { programPath, programs } from "../lib/programs";
import { mapsUrl, site } from "../lib/site";

export default function Footer() {
  return <footer className="bg-surface border-t border-rule pt-12 md:pt-16 pb-8">
    <div className="site-container">
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3"><Image alt="" src="/TeamLogo.png" width={40} height={40} className="w-10 h-10 object-contain" /><span className="font-headline uppercase text-3xl font-bold">Team Cama<span className="text-primary">.</span></span></Link>
          <p className="text-ink-muted text-sm leading-relaxed max-w-sm mt-5">{site.name}.<br />A community built on the mat since {site.founded}.</p>
          <div className="flex gap-5 mt-5 text-sm"><a className="py-2 hover:text-primary" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a className="py-2 hover:text-primary" href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a></div>
        </div>
        <div>
          <h2 className="eyebrow mb-5">Make training a habit</h2>
          <ul className="space-y-4">{programs.map(program => <li key={program.id}><Link href={programPath(program)} className="text-sm font-medium hover:text-primary">{program.name} in Stockton</Link>{program.summary.map(line => <p key={line} className="text-ink-muted text-xs leading-relaxed mt-1">{line}</p>)}</li>)}</ul>
          <Link href="/classes#schedule" className="text-link mt-4">Full schedule <span aria-hidden="true">↗</span></Link>
        </div>
        <div>
          <h2 className="eyebrow mb-5">See you on the mat</h2>
          <address className="not-italic text-sm leading-relaxed space-y-4">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">{site.address.street}<br /><span className="text-ink-muted">{site.address.city}, {site.address.regionName} {site.address.postalCode}</span><br /><span className="text-xs underline underline-offset-4 mt-2 inline-block">Get directions ↗</span></a>
            <a href={`tel:${site.phoneE164}`} className="block hover:text-primary">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-primary">{site.email}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-rule mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-subtle"><p>© {new Date().getFullYear()} {site.name}.</p><span>Stockton roots. Since {site.founded}.</span></div>
    </div>
  </footer>;
}
