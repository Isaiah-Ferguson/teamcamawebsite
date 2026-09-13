import { sessionsOn, weekdayName, weekdays, type Program } from "../lib/programs";

const clock = (time: string) => time.split(" ")[0];
const period = (time: string) => time.split(" ")[1];

/**
 * Seven-day strip for one program. Training days get a red rule and the start
 * time in display type; the rest read "No class" so the whole week is answered
 * at a glance. Below md, only training days are listed, as rows. The strip
 * needs the full container width until xl, so the page stacks the heading
 * above it before that.
 */
export default function WeekSchedule({ program }: { program: Program }) {
  return <ol aria-label={`${program.name} weekly schedule`} className="grid md:grid-cols-7 gap-x-3 gap-y-6 md:gap-y-0">
    {weekdays.map(day => {
      const sessions = sessionsOn(program, day);
      const active = sessions.length > 0;
      return <li key={day} className={`border-t-2 pt-3 md:min-h-40 ${active ? "border-primary flex md:block gap-6" : "border-rule hidden md:block"}`}>
        <p className="eyebrow text-ink shrink-0 w-24 md:w-auto"><span className="md:hidden">{weekdayName(day)}</span><abbr title={weekdayName(day)} className="hidden md:inline no-underline">{day}</abbr></p>
        {active
          ? <ul className="md:mt-4 space-y-5">
              {sessions.map(session => <li key={session.start + session.group}>
                <p className="font-headline font-semibold uppercase leading-none"><span className="text-5xl md:text-3xl xl:text-4xl whitespace-nowrap">{clock(session.start)}</span><span className="text-base md:text-sm ml-1">{period(session.start)}</span></p>
                <p className="text-sm text-ink-muted mt-1">to {session.end}</p>
                <p className="text-xs text-ink-muted mt-2 leading-snug">{session.group}</p>
              </li>)}
            </ul>
          : <p className="text-xs text-ink-subtle mt-4">No class</p>}
      </li>;
    })}
  </ol>;
}
