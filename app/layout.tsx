import type { Metadata } from "next";
import { Noto_Serif, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { businessSchema } from "./lib/schema";
import { site } from "./lib/site";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const display = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Hard-coded canonical origin. An env var here once produced localhost URLs in production.
  metadataBase: new URL(site.url),
  title: { default: "Team Cama | Brazilian Jiu-Jitsu, Muay Thai & Taekwondo in Stockton, CA", template: "%s | Team Cama" },
  description: site.description,
  applicationName: site.shortName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.shortName,
    title: "Team Cama | Martial Arts in Stockton",
    description: "Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo. A community built on the mat since 2011.",
    images: [{ url: "/og.png", alt: "Team Cama — Brazilian Jiu-Jitsu, Muay Thai, Taekwondo. Stockton, California. Est. 2011." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Cama | Martial Arts in Stockton",
    description: "Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo. Find your place on the mat.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${inter.variable} ${display.variable} dark`}
    >
      <body className="bg-background text-on-surface font-body selection:bg-primary selection:text-white antialiased">
        <JsonLd data={businessSchema()} />
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
