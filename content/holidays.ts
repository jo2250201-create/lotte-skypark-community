/**
 * Seed holiday list used to compute "오늘 운영 상태" on facility/home pages.
 *
 * Only fixed-date (solar calendar) national holidays are pre-filled here,
 * since those dates don't change year to year. Lunar-calendar holidays
 * (설날/추석 연휴, 부처님오신날) and their substitute holidays (대체공휴일)
 * shift every year and must be entered manually each year — this is
 * intentionally a plain data file so that can be done without touching code.
 *
 * Format: "YYYY-MM-DD".
 */

export interface HolidayEntry {
  date: string;
  name: string;
  /** True if this date should be treated as a 대체공휴일 (shortened hours) rather than a full holiday closure. */
  isSubstitute?: boolean;
}

export const holidays2026: HolidayEntry[] = [
  { date: "2026-01-01", name: "신정" },
  { date: "2026-03-01", name: "삼일절" },
  { date: "2026-03-02", name: "삼일절 대체공휴일", isSubstitute: true },
  { date: "2026-05-05", name: "어린이날" },
  { date: "2026-06-06", name: "현충일" },
  { date: "2026-08-15", name: "광복절" },
  { date: "2026-08-17", name: "광복절 대체공휴일", isSubstitute: true },
  { date: "2026-10-03", name: "개천절" },
  { date: "2026-10-09", name: "한글날" },
  { date: "2026-12-25", name: "크리스마스" },
  // 설날 연휴, 추석 연휴, 부처님오신날은 음력 기준이라 매년 관리자가 직접 추가해야 합니다.
];
