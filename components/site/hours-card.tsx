import type { HoursRow } from "@/content/types";

export function HoursCard({ hours, note }: { hours: HoursRow[]; note?: string }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {hours.map((row) => (
          <div key={row.label} className="border-l-2 border-gold bg-warm px-4 py-3">
            <div className="text-sm font-semibold text-foreground">{row.label}</div>
            <div className="text-sm font-medium text-foreground/80">{row.time}</div>
            {row.note ? (
              <div className="mt-1 text-xs text-muted-foreground">{row.note}</div>
            ) : null}
          </div>
        ))}
      </div>
      {note ? <p className="text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}
