import type { GuestRoom, GuestRoomKeySchedule } from "./types";

export const guestRooms: GuestRoom[] = [
  {
    id: "room-1",
    name: "1번룸",
    type: "대형 (거실+방)",
    bed: "킹사이즈 1",
    capacity: "기준 2인 / 최대 4인",
    weekdayPrice: "90,000원",
    weekendPrice: "100,000원",
  },
  {
    id: "room-2",
    name: "2번룸",
    type: "소형 원룸",
    bed: "더블사이즈 1",
    capacity: "기준 2인 / 최대 2인",
    weekdayPrice: "60,000원",
    weekendPrice: "70,000원",
  },
  {
    id: "room-3",
    name: "3번룸",
    type: "소형 원룸",
    bed: "싱글 2개",
    capacity: "기준 2인 / 최대 2인",
    weekdayPrice: "60,000원",
    weekendPrice: "70,000원",
  },
  {
    id: "room-4",
    name: "4번룸",
    type: "대형 원룸",
    bed: "킹사이즈 1",
    capacity: "기준 2인 / 최대 4인",
    weekdayPrice: "90,000원",
    weekendPrice: "100,000원",
  },
];

export const guestRoomAmenities = {
  included:
    "바디워시 · 샴푸 · 수건 4장 · 전자레인지 · 커피포트 · 헤어드라이기 (생수 미제공)",
  bedding: "기본 침구 1세트(1인용) 제공 / 추가 침구 +10,000원",
};

export const guestRoomRules: { item: string; detail: string }[] = [
  { item: "예약 방법", detail: "아파트너 앱" },
  { item: "입실 / 퇴실", detail: "15:00 / 익일 11:00까지 완료" },
  {
    item: "예약 제한",
    detail:
      "세대당 연 20박까지 / 1회 최대 2박까지만 예약 가능. 연속 2박 초과 예약 시 2박 이후 예약은 취소될 수 있습니다.",
  },
  { item: "취사", detail: "불가 (취식·배달은 가능)" },
  {
    item: "미성년자",
    detail: "미성년자만 숙박 절대 금지 — 발견 시 환불 없이 즉시 퇴실 조치됩니다.",
  },
  { item: "인원 초과", detail: "입실 가능 인원 초과 불가" },
  { item: "지연 퇴실", detail: "10분마다 10,000원 추가 부과" },
];

export const guestRoomCancellation: string[] = [
  "결제 30분 이후 당일 입실 예약은 취소 불가",
  "1주일 전 취소 시 100% 환불 / 1주일~전날 취소 시 50% 환불",
  "취소 문의: 031-378-8797",
];

export const guestRoomKeySchedule: GuestRoomKeySchedule[] = [
  {
    label: "평일",
    time: "15:00 ~ 23:00",
    note: "수령 장소: 인포데스크 · 입실은 반드시 15:00 이후 가능",
  },
  {
    label: "주말",
    time: "15:00 ~ 17:30",
    note: "18:00~19:00 관리사무소 휴게시간 · 19:00~22:00 관리사무소에서 수령 · 22:00 이후 입실 불가",
  },
];

export const guestRoomBedding = {
  note: "1번룸·4번룸 3~4인 입실 시 침구 추가는 의무가 아닙니다. 가정에서 침구를 직접 가져오셔도 됩니다.",
  composition: "1인용 매트 · 베개 · 이불",
  cost: "10,000원",
  applyDeadline: "당일 입실 15:00 예약 전까지 (평일 18:00 / 주말 16:00 마감)",
  applyMethod: "아파트너 예약 시 사전 신청 또는 마감 전 인포데스크 유선 신청",
  cancelDeadline: "평일·주말 모두 15:00까지",
};
