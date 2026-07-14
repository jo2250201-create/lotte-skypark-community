"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  getMonthlyOpenEndedWindow,
  getMonthlyRangeWindow,
  type WindowStatus,
} from "@/lib/registration-window";

type WindowSpec =
  | { kind: "open-ended"; openDay: number }
  | { kind: "range"; startDay: number; endDay: number };

function computeStatus(spec: WindowSpec): WindowStatus {
  return spec.kind === "open-ended"
    ? getMonthlyOpenEndedWindow(spec.openDay)
    : getMonthlyRangeWindow(spec.startDay, spec.endDay);
}

export function WindowStatusBadge({ spec }: { spec: WindowSpec }) {
  const [status, setStatus] = useState<WindowStatus | null>(null);

  useEffect(() => {
    function update() {
      setStatus(computeStatus(spec));
    }
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!status) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        status.isOpenNow ? "bg-status-open-bg text-status-open" : "bg-status-closed-bg text-status-closed",
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", status.isOpenNow ? "bg-status-open" : "bg-status-closed")}
      />
      {status.label}
    </span>
  );
}
