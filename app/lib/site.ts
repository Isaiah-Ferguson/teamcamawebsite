import { contactEmail } from "./contact";

/**
 * Single source of truth for the public origin and the business identity.
 * Everything Google reads (canonical URLs, sitemap, robots, JSON-LD, and the
 * address text rendered on pages) derives from here so the listing stays
 * identical everywhere. Keep it byte-for-byte in sync with the Google Business
 * Profile: "Concepcion Academy of Martial Arts", 8855 Thornton Rd Suite B.
 */
export const site = {
  /** Canonical origin. The bare domain and the Vercel alias redirect here. */
  url: "https://www.teamcama.com",
  name: "Concepcion Academy of Martial Arts",
  shortName: "Team Cama",
  alternateNames: ["Team Cama", "C.A.M.A."],
  description:
    "Train Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo at Concepcion Academy of Martial Arts in Stockton. A community built on the mat since 2011. Try your first class free.",
  founded: "2011",
  phone: "(209) 482-1352",
  phoneE164: "+12094821352",
  email: contactEmail,
  address: {
    street: "8855 Thornton Rd Suite B",
    city: "Stockton",
    region: "CA",
    regionName: "California",
    postalCode: "95209",
    country: "US",
  },
  geo: { latitude: 38.0305987, longitude: -121.3344911 },
  social: {
    instagram: "https://www.instagram.com/teamcama209",
    facebook: "https://www.facebook.com/teamcama",
  },
  /** Vercel's default production alias. Once the custom domain is live it redirects to `url`. */
  vercelHost: "teamcamawebsite.vercel.app",
} as const;

export const mapsUrl = "https://www.google.com/maps/search/?api=1&query=8855+Thornton+Rd+suite+b,+Stockton,+CA+95209";

/** Absolute URL on the canonical origin. Root has no trailing slash, matching Next's canonical output. */
export function absoluteUrl(path: string) {
  return path === "/" ? site.url : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
