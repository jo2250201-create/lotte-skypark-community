import { holidays2026 } from "@/content/holidays";
import type { DayType, Facility, TimeRange } from "@/content/types";

export type FacilityStatusState = "open" | "closing-soon" | "break" | "closed";

export interface FacilityStatus {
  state: FacilityStatusState;
  label: string;
}

function localDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/** Formats minutes-since-midnight as "HH:mm", prefixing "익일" if it falls past midnight (>= 24h). */
function formatClock(totalMinutes: number): string {
  const dayMinutes = 24 * 60;
  const wrapped = ((totalMinutes % dayMinutes) + dayMinutes) % dayMinutes;
  const h = String(Math.floor(wrapped / 60)).padStart(2, "0");
  const m = String(wrapped % 60).padStart(2, "0");
  const prefix = totalMinutes >= dayMinutes ? "익일 " : "";
  return `${prefix}${h}:${m}`;
}

function isWithinRange(nowMinutes: number, range: TimeRange): boolean {
  const start = toMinutes(range.start);
  const end = toMinutes(range.end);
  if (end <= 24 * 60) {
    return nowMinutes >= start && nowMinutes < end;
  }
  // Range crosses midnight, e.g. 06:00~25:00 (open until 01:00 the next day).
  return nowMinutes >= start || nowMinutes < end - 24 * 60;
}

interface DayContext {
  dayType: DayType;
  isFullHoliday: boolean;
  holidayName?: string;
}

function getDayContext(date: Date): DayContext {
  const dateStr = localDateStr(date);
  const holiday = holidays2026.find((h) => h.date === dateStr);
  if (holiday?.isSubstitute) {
    return { dayType: "altHoliday", isFullHoliday: false, holidayName: holiday.name };
  }
  if (holiday) {
    return { dayType: "weekend", isFullHoliday: true, holidayName: holiday.name };
  }
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const dayType: DayType = day === 0 || day === 6 ? "weekend" : "weekday";
  return { dayType, isFullHoliday: false };
}

/** Computes live open/closed status for a facility. Must be called client-side (browser-local time). */
export function getFacilityStatus(facility: Facility, now: Date = new Date()): FacilityStatus {
  if (!facility.statusRule) {
    return { state: "closed", label: "강습 시간표 확인" };
  }
  const { dayType, isFullHoliday, holidayName } = getDayContext(now);

  if (isFullHoliday && facility.statusRule.closedOnHoliday) {
    return { state: "closed", label: `휴무 · ${holidayName}` };
  }

  const range = facility.statusRule.hours[dayType] ?? facility.statusRule.hours.weekday;
  if (!range) {
    return { state: "closed", label: "휴무" };
  }

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const endMinutes = toMinutes(range.end);

  const breaks = facility.statusRule.breaks?.[dayType] ?? [];
  for (const b of breaks) {
    if (isWithinRange(nowMinutes, b)) {
      return { state: "break", label: `브레이크타임 · ${formatClock(toMinutes(b.end))}까지` };
    }
  }

  if (isWithinRange(nowMinutes, range)) {
    const cutoff = facility.statusRule.entryCutoffMinutes;
    if (cutoff) {
      const entryDeadline = endMinutes - cutoff;
      if (nowMinutes >= entryDeadline) {
        return {
          state: "closing-soon",
          label: `입장마감 임박 · ${formatClock(entryDeadline)}까지 입장`,
        };
      }
    }
    return { state: "open", label: `운영중 · ${formatClock(endMinutes)}까지` };
  }

  const startMinutes = toMinutes(range.start);
  if (nowMinutes < startMinutes) {
    return { state: "closed", label: `영업 전 · ${range.start}부터` };
  }
  return { state: "closed", label: "영업 종료" };
}
