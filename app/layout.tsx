import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Team Cama, Stockton martial arts",
  description: "Concepcion Academy of Martial Arts. Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo for adults and kids in Stockton, California, since 2011.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${inter.variable}`}
    >
      <body className="bg-surface text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
