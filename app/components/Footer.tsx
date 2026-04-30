import Link from "next/link";
import Image from "next/image";

const schedule = [
  {
    name: "Brazilian Jiu-Jitsu",
    times: ["Mon, Wed, Fri  •  5:30–7:15 PM"],
  },
  {
    name: "Muay Thai",
    times: ["Mon, Wed, Fri  •  7:15–8:15 PM"],
  },
  {
    name: "Taekwondo",
    times: [
      "Tue, Thu  •  5:30–8:30 PM",
      "Sat  •  9:30–11:30 AM",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 w-full pt-20 pb-10 px-6 md:px-10 border-t border-rule">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto">
        <div className="md:col-span-4 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <Image
              alt=""
              className="h-8 w-auto"
              src="https://preblobaccount.blob.core.windows.net/prerecordedblob/TeamLogo.png"
              width={96}
              height={32}
            />
            <span className="text-base font-headline font-bold text-ink">
              Team Cama
            </span>
          </Link>
          <p className="text-ink-muted text-sm leading-relaxed max-w-sm">
            Concepcion Academy of Martial Arts. A community gym in Stockton,
            teaching Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo since 2011.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              className="text-ink-muted hover:text-accent text-sm transition-colors"
              href="https://www.instagram.com/teamcama_209"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span aria-hidden="true" className="text-rule-strong">
              /
            </span>
            <a
              className="text-ink-muted hover:text-accent text-sm transition-colors"
              href="https://www.facebook.com/teamcama"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-headline text-sm font-bold text-ink mb-5">
            Class schedule
          </h2>
          <ul className="space-y-4">
            {schedule.map((row) => (
              <li key={row.name}>
                <p className="text-ink font-medium text-[15px] mb-1">
                  {row.name}
                </p>
                {row.times.map((t) => (
                  <p key={t} className="text-ink-muted text-sm">
                    {t}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-headline text-sm font-bold text-ink mb-5">
            Find us
          </h2>
          <address className="not-italic text-ink-muted text-sm space-y-3">
            <p className="text-ink">8855 Thornton Rd Suite B</p>
            <p>Stockton, California</p>
            <p>
              <a href="tel:+12094821352" className="hover:text-accent">
                (209) 482-1352
              </a>
            </p>
            <p>
              <a
                href="mailto:Cama5638@gmail.com"
                className="hover:text-accent"
              >
                Cama5638@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-subtle">
        <p>© {new Date().getFullYear()} Concepcion Academy of Martial Arts. All rights reserved.</p>
        <p>Established 2011, Stockton, California.</p>
      </div>
    </footer>
  );
}
