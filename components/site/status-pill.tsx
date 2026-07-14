"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getFacilityStatus, type FacilityStatus } from "@/lib/facility-status";
import type { Facility } from "@/content/types";

const STATE_STYLES: Record<FacilityStatus["state"], string> = {
  open: "bg-status-open-bg text-status-open",
  "closing-soon": "bg-status-break-bg text-status-break",
  break: "bg-status-break-bg text-status-break",
  closed: "bg-status-closed-bg text-status-closed",
};

const STATE_DOT: Record<FacilityStatus["state"], string> = {
  open: "bg-status-open",
  "closing-soon": "bg-status-break",
  break: "bg-status-break",
  closed: "bg-status-closed",
};

export function StatusPill({ facility, className }: { facility: Facility; className?: string }) {
  const [status, setStatus] = useState<FacilityStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getFacilityStatus(facility));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [facility]);

  if (!facility.statusRule) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground",
          className,
        )}
      >
        {facility.classes ? "강습 프로그램" : "인포데스크 문의"}
      </span>
    );
  }

  if (!status) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground",
          className,
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
        상태 확인 중
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        STATE_STYLES[status.state],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", STATE_DOT[status.state])} />
      {status.label}
    </span>
  );
}
