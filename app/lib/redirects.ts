/**
 * Permanent redirects from the previous www.teamcama.com site to the new routes.
 * Every URL in the old site's sitemap.xml is covered so Google can carry its
 * index over instead of finding dead pages. Sources are written without a
 * trailing slash; Next.js normalizes "/path/" to "/path" before matching.
 *
 * Old URLs that keep the same path (/, /classes, /classes/taekwondo) need no entry.
 */
export const legacyRedirects = [
  { source: "/classes/jiu-jitsu", destination: "/classes/brazilian-jiu-jitsu" },
  { source: "/classes/kickboxing", destination: "/classes/muay-thai" },
  { source: "/classes/private-instruction", destination: "/contact" },
  { source: "/memberships", destination: "/contact" },
  { source: "/directions", destination: "/contact" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/instructors", destination: "/about#coaches" },
  { source: "/our-philosophy", destination: "/about" },
  { source: "/our-facility", destination: "/about" },
  { source: "/our-facility/testimonials", destination: "/about" },
  { source: "/news-events", destination: "/about" },
  { source: "/our-facility/photo-gallery", destination: "/gallery" },
  { source: "/photos", destination: "/gallery" },
  { source: "/sitemap", destination: "/" },
] as const;
