import type { ClassProgram } from "@/content/types";

export function ClassSchedule({ programs, note }: { programs: ClassProgram[]; note?: string }) {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {programs.map((program) => (
          <div key={program.id} className="rounded-md border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-semibold text-foreground">{program.name}</h4>
              <span className="shrink-0 text-sm font-semibold text-gold">{program.price}</span>
            </div>
            {program.frequency ? (
              <div className="mt-0.5 text-xs text-muted-foreground">{program.frequency}</div>
            ) : null}
            <ul className="mt-2 space-y-1">
              {program.sessions.map((s, i) => (
                <li key={i} className="text-xs text-foreground/80">
                  <span className="font-medium">{s.day}</span> {s.time}
                  {s.detail ? <span className="text-muted-foreground"> · {s.detail}</span> : null}
                </li>
              ))}
            </ul>
            {program.note ? (
              <div className="mt-2 text-xs text-muted-foreground">{program.note}</div>
            ) : null}
          </div>
        ))}
      </div>
      {note ? <p className="text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}
