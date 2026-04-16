import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
};

export default nextConfig;
