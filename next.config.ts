import type { NextConfig } from "next";
import { legacyRedirects } from "./app/lib/redirects";
import { site } from "./app/lib/site";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preblobaccount.blob.core.windows.net',
        pathname: '/prerecordedblob/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  async redirects() {
    // Once www.teamcama.com points at Vercel, set CANONICAL_HOST_LIVE=1 in the Vercel
    // project so the *.vercel.app alias stops serving a second copy of the site.
    // Leave it unset until then, or the preview URL would bounce to the old site.
    const hostRedirect = process.env.CANONICAL_HOST_LIVE === "1"
      ? [{
          source: "/:path*",
          has: [{ type: "host" as const, value: site.vercelHost }],
          destination: `${site.url}/:path*`,
          permanent: true,
        }]
      : [];
    return [
      ...hostRedirect,
      ...legacyRedirects.map(redirect => ({ ...redirect, permanent: true })),
    ];
  },
};

export default nextConfig;
