export interface WindowStatus {
  isOpenNow: boolean;
  label: string;
}

/** A monthly window that opens on `openDay` and stays open through month-end (e.g. 강습 등록: 매월 23일~말일). */
export function getMonthlyOpenEndedWindow(openDay: number, now: Date = new Date()): WindowStatus {
  const day = now.getDate();
  if (day >= openDay) {
    return { isOpenNow: true, label: "다음 달 강습 등록 가능" };
  }
  return {
    isOpenNow: false,
    label: `${openDay}일부터 다음 달 강습 등록 가능 (D-${openDay - day})`,
  };
}

/** A monthly window open only between startDay and endDay, inclusive (e.g. GX 해지: 15~23일). */
export function getMonthlyRangeWindow(
  startDay: number,
  endDay: number,
  now: Date = new Date(),
): WindowStatus {
  const day = now.getDate();
  if (day >= startDay && day <= endDay) {
    return { isOpenNow: true, label: `지금 해지 신청 가능 (${endDay}일까지)` };
  }
  if (day < startDay) {
    return { isOpenNow: false, label: `${startDay}일부터 해지 신청 가능 (D-${startDay - day})` };
  }
  return { isOpenNow: false, label: `다음 달 ${startDay}일부터 해지 신청 가능` };
}
