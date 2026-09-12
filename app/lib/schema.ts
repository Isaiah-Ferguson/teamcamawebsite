import { absoluteUrl, mapsUrl, openingHours, site } from "./site";
import { programPath, programs, type Program } from "./programs";

const businessId = `${site.url}/#business`;
const city = { "@type": "City", name: site.address.city };

function serviceNode(program: Program) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(programPath(program))}#service`,
    name: `${program.name} classes`,
    alternateName: program.aliases,
    serviceType: program.name,
    description: program.seo.description,
    url: absoluteUrl(programPath(program)),
    image: absoluteUrl(program.image),
    provider: { "@id": businessId },
    areaServed: city,
    audience: { "@type": "Audience", audienceType: program.audience },
    offers: { "@type": "Offer", name: "Free first class", price: "0", priceCurrency: "USD" },
  };
}

/** LocalBusiness block rendered once in the root layout. */
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: site.alternateNames,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: absoluteUrl("/og.png"),
    logo: absoluteUrl("/TeamLogo.png"),
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    hasMap: mapsUrl,
    openingHoursSpecification: openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: [site.social.instagram, site.social.facebook],
    areaServed: city,
    knowsAbout: programs.flatMap(program => [program.name, ...program.aliases]),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Martial arts programs",
      itemListElement: programs.map(program => ({ "@type": "Offer", itemOffered: serviceNode(program) })),
    },
  };
}

/** Service block for one discipline page. */
export function programSchema(program: Program) {
  return { "@context": "https://schema.org", ...serviceNode(program) };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
