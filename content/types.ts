/**
 * Content schema for the community center platform.
 *
 * These interfaces are the contract a future CMS/admin backend must satisfy.
 * Today, data files in this directory (facilities.ts, guestroom.ts, ...)
 * implement these types as static exports. When a real backend exists,
 * only the fetch layer changes (e.g. `facilities` becomes the result of
 * `await fetchFacilities()`) — every UI component keeps working unchanged.
 */

export type DayType = "weekday" | "weekend" | "altHoliday";

/** "HH:mm" in 24h time. Hours >= 24 mean "past midnight" (e.g. "25:00" = 01:00 next day). */
export type TimeString = string;

export interface TimeRange {
  start: TimeString;
  end: TimeString;
}

/** Machine-readable operating hours, used to compute live open/closed status. */
export interface OperatingStatusRule {
  hours: Partial<Record<DayType, TimeRange>>;
  breaks?: Partial<Record<DayType, TimeRange[]>>;
  closedOnHoliday: boolean;
  /** Entry closes N minutes before closing time. */
  entryCutoffMinutes?: number;
}

/** Human-readable hours row, shown as-is in the UI (one row per day-type). */
export interface HoursRow {
  label: string;
  time: string;
  note?: string;
}

export interface PriceRow {
  item: string;
  price: string;
  note?: string;
}

export interface ClassSession {
  day: string;
  time: string;
  detail?: string;
}

export interface ClassProgram {
  id: string;
  name: string;
  frequency?: string;
  sessions: ClassSession[];
  price: string;
  note?: string;
}

export type ReservationMethod = "apartner" | "infodesk" | "both";

export interface ReservationInfo {
  method: ReservationMethod;
  note?: string;
}

export interface Facility {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  icon: FacilityIcon;
  /** Absent for program-only entries that have no daily open/close (e.g. GX classes). */
  statusRule?: OperatingStatusRule;
  hours: HoursRow[];
  hoursNote?: string;
  pricing?: PriceRow[];
  pricingNote?: string;
  classes?: ClassProgram[];
  classesNote?: string;
  /** Day of month new-class registration opens for the following month (e.g. 23 → "매월 23일부터"). */
  registrationWindow?: { opensOnDay: number };
  /** Day-of-month range during which cancellation/해지 requests are accepted (e.g. 15~23일). */
  cancellationWindow?: { startDay: number; endDay: number };
  reservation: ReservationInfo;
  rules: string[];
  updatedAt: string;
}

export type FacilityIcon =
  | "waves"
  | "dumbbell"
  | "golf"
  | "flame"
  | "book-open"
  | "table-2"
  | "coffee"
  | "sparkles"
  | "baby"
  | "blocks";

export interface GuestRoom {
  id: string;
  name: string;
  type: string;
  bed: string;
  capacity: string;
  weekdayPrice: string;
  weekendPrice: string;
}

export interface GuestRoomKeySchedule {
  label: string;
  time: string;
  note?: string;
}

export interface MembershipStep {
  step: number;
  title: string;
  detail: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  highlight?: boolean;
  updatedAt: string;
}

export type NoticeLevel = "info" | "urgent";

export interface Notice {
  id: string;
  title: string;
  body: string;
  level: NoticeLevel;
  pinned: boolean;
  publishedAt: string;
  /** ISO date after which the notice is no longer surfaced on the home page. */
  expiresAt?: string;
}

export interface SearchDoc {
  id: string;
  title: string;
  snippet: string;
  url: string;
  category: string;
  tags: string[];
}
