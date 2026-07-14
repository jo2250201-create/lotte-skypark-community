import type { Notice } from "./types";

/**
 * Seed data for the notices module. This is the first module intended to be
 * managed by a future admin CMS (pin/unpin, publish, expire) rather than by
 * editing code — the schema is final even though today it's a static array.
 */
export const notices: Notice[] = [
  {
    id: "notice-v2-launch",
    title: "커뮤니티센터 이용안내 홈페이지가 새롭게 개편되었습니다",
    body: "시설별 안내, 통합 검색, 오늘의 운영 상태를 새로 제공합니다. 이용 중 불편한 점은 인포데스크로 알려주세요.",
    level: "info",
    pinned: true,
    publishedAt: "2026-07-01",
  },
];

export function getActiveNotices(today: Date = new Date()): Notice[] {
  const todayStr = today.toISOString().slice(0, 10);
  return notices
    .filter((n) => !n.expiresAt || n.expiresAt >= todayStr)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));
}
