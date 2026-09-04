import type { Metadata } from "next";
import { Noto_Serif, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Team Cama | Martial Arts in Stockton, CA", template: "%s | Team Cama" },
  description: "Train Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo at Concepcion Academy of Martial Arts in Stockton. A community built on the mat since 2011. Try your first class free.",
  openGraph: {
    type: "website",
    siteName: "Team Cama",
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
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
