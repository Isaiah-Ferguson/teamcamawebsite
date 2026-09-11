import Link from "next/link";
import { programPath, programs } from "../lib/programs";

export default function ClassSchedule() {
  return <div className="grid lg:grid-cols-3 gap-7">
    {programs.map(program => <section key={program.id} className="border-t-2 border-primary pt-5">
      <h3 className="font-headline text-3xl font-semibold uppercase mb-5">{program.name}</h3>
      <ul className="divide-y divide-rule">
        {program.schedule.map(row => <li key={row.day + row.group} className="py-4">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm font-medium"><span>{row.day}</span><span className="tabular-nums">{row.time}</span></div>
          <p className="text-ink-muted text-sm mt-2">{row.group}</p>
        </li>)}
      </ul>
      <Link href={programPath(program)} className="text-link mt-4">{program.shortName} program details <span aria-hidden="true">↗</span></Link>
    </section>)}
  </div>;
}
