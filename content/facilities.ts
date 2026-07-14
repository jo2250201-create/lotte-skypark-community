import type { Facility } from "./types";

const UPDATED = "2026-07-01";

export const facilities: Facility[] = [
  {
    id: "pool",
    slug: "pool",
    name: "수영장",
    shortDescription: "성인·아동 정규 강습 운영, 자유 수영 가능",
    icon: "waves",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "22:00" },
        weekend: { start: "09:00", end: "18:00" },
        altHoliday: { start: "09:00", end: "18:00" },
      },
      breaks: {
        weekday: [
          { start: "12:00", end: "13:00" },
          { start: "17:00", end: "18:00" },
        ],
        weekend: [{ start: "12:00", end: "13:00" }],
      },
      closedOnHoliday: true,
      entryCutoffMinutes: 60,
    },
    hours: [
      { label: "평일", time: "06:00 ~ 22:00" },
      { label: "주말", time: "09:00 ~ 18:00" },
      { label: "대체공휴일", time: "09:00 ~ 18:00" },
      { label: "공휴일", time: "휴무" },
    ],
    hoursNote:
      "브레이크: 평일 12~13시, 17~18시 / 주말 12~13시 · 입장마감 1시간 전 · 키오스크 락커키 발권 후 입장",
    pricing: [
      { item: "수영 정기권", price: "60,000원/월", note: "아파트너 / 인포데스크" },
    ],
    classes: [
      {
        id: "swim-am-mwf",
        name: "성인수영 오전 (월·수·금)",
        frequency: "주3회 월12회",
        sessions: [
          { day: "월·수·금", time: "06:10", detail: "초중급" },
          { day: "월·수·금", time: "07:10", detail: "중상급" },
          { day: "월·수·금", time: "08:10", detail: "입문·기초·초급" },
          { day: "월·수·금", time: "09:10", detail: "초중급" },
          { day: "월·수·금", time: "10:10", detail: "중상급" },
        ],
        price: "60,000원",
      },
      {
        id: "swim-am-tt",
        name: "성인수영 오전 (화·목)",
        frequency: "주2회 월8회",
        sessions: [
          { day: "화·목", time: "06:10", detail: "상급" },
          { day: "화·목", time: "07:10", detail: "입문기초 (모집중/미개설)" },
          { day: "화·목", time: "10:10", detail: "상급" },
        ],
        price: "50,000원",
      },
      {
        id: "swim-pm-mw",
        name: "성인수영 저녁 (월·수)",
        frequency: "주2회 월8회",
        sessions: [
          { day: "월·수", time: "19:00 / 20:00 / 21:00", detail: "입문기초 / 중상급 / 초중급" },
        ],
        price: "50,000원",
      },
      {
        id: "swim-pm-tt",
        name: "성인수영 저녁 (화·목)",
        frequency: "주2회 월8회",
        sessions: [
          { day: "화·목", time: "19:00 / 20:00 / 21:00", detail: "초중급 / 입문기초 / 고급반" },
        ],
        price: "50,000원",
      },
      {
        id: "swim-fri-pm",
        name: "성인수영 금요일 저녁반",
        frequency: "주1회 월4회",
        sessions: [{ day: "금", time: "20:50", detail: "초중급" }],
        price: "30,000원",
      },
      {
        id: "aquarobic",
        name: "아쿠아로빅 (화·목)",
        frequency: "주2회 월8회",
        sessions: [{ day: "화·목", time: "14:00", detail: "단체강습" }],
        price: "60,000원",
      },
      {
        id: "swim-kids-entry-mon",
        name: "초등부 입문기초반 (월요일)",
        frequency: "주1회 월4회",
        sessions: [{ day: "월", time: "16:00", detail: "입문기초 · 배영이상 등록불가" }],
        price: "75,000원",
      },
      {
        id: "swim-kids-basic-tt",
        name: "초등부 초급반 (화·목)",
        frequency: "주2회 월8회",
        sessions: [{ day: "화·목", time: "16:00", detail: "초급반(8~13세) · 배영이상 등록가능" }],
        price: "95,000원",
      },
      {
        id: "swim-kids-wed",
        name: "초등부 (수요일)",
        frequency: "주1회 월4회",
        sessions: [{ day: "수", time: "16:00" }],
        price: "75,000원",
      },
      {
        id: "swim-preschool-wed",
        name: "유치부 (수요일)",
        frequency: "주1회 월4회",
        sessions: [{ day: "수", time: "15:00", detail: "정원 8명" }],
        price: "85,000원",
      },
      {
        id: "swim-preschool-fri",
        name: "유치부 (금요일)",
        frequency: "주1회 월4회",
        sessions: [{ day: "금", time: "19:30", detail: "정원 8명" }],
        price: "85,000원",
      },
      {
        id: "swim-preschool-weekend",
        name: "유치부 주말반 (토·일)",
        frequency: "주2회 월8회",
        sessions: [{ day: "토·일", time: "09:30", detail: "혼합반" }],
        price: "120,000원",
      },
      {
        id: "swim-kids-weekend",
        name: "초등부 주말반 (토·일)",
        frequency: "주2회 월8회",
        sessions: [{ day: "토·일", time: "10:30", detail: "혼합반" }],
        price: "95,000원",
      },
    ],
    classesNote:
      "월 최대 수강횟수 강습 진행 시 5주차 수업 없음 / 월 요금은 해당 월 일자에 따라 변동될 수 있습니다. 등록은 인포데스크 방문 또는 전화 문의.",
    registrationWindow: { opensOnDay: 23 },
    reservation: {
      method: "both",
      note: "정기권은 아파트너 앱 또는 인포데스크 / 강습 등록은 인포데스크 방문 또는 전화",
    },
    rules: [
      "약 25M 길이의 4레인 실내수영장 + 어린이 전용 유아풀 운영",
      "보호자 1명만 강습시간에 수영장 참관 가능 (다른 자녀 동반 입장 불가)",
      "안면인식 등록이 완료되어야 입장 가능 (등록 후 동기화 최대 1시간 소요)",
    ],
    updatedAt: UPDATED,
  },
  {
    id: "fitness",
    slug: "fitness",
    name: "헬스장",
    shortDescription: "세대당 1인 무료 이용, PT 프로그램 운영",
    icon: "dumbbell",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "23:00" },
        weekend: { start: "09:00", end: "18:00" },
        altHoliday: { start: "09:00", end: "18:00" },
      },
      closedOnHoliday: true,
    },
    hours: [
      { label: "평일", time: "06:00 ~ 23:00" },
      { label: "주말", time: "09:00 ~ 18:00" },
      { label: "대체공휴일", time: "09:00 ~ 18:00" },
      { label: "공휴일", time: "휴무" },
    ],
    pricing: [
      { item: "무료 세대원 (1인)", price: "무료", note: "세대당 1인" },
      { item: "추가 세대원", price: "10,000원/월", note: "1인당" },
      { item: "헬스 락카", price: "5,000원/월", note: "아파트너 예약" },
      { item: "PT 1회", price: "50,000원", note: "60분" },
      { item: "PT 4회", price: "220,000원", note: "50분" },
      { item: "PT 8회", price: "400,000원", note: "50분" },
      { item: "PT 2:1 (8회)", price: "600,000원", note: "50분" },
    ],
    pricingNote: "무료 세대원 변경은 매월 1~5일만 가능합니다.",
    reservation: {
      method: "infodesk",
      note: "회원가입은 인포데스크 방문 등록 (최초 1회 등본 또는 신분증 지참, 재등록·세대원 추가 시 불필요)",
    },
    rules: ["20여종의 다양한 운동장비 보유", "안면인식 등록이 완료되어야 입장 가능"],
    updatedAt: UPDATED,
  },
  {
    id: "golf",
    slug: "golf",
    name: "골프연습장",
    shortDescription: "55분 타임제 정기권, 레슨 프로그램 운영 (실내골프클럽)",
    icon: "golf",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "23:00" },
        weekend: { start: "09:00", end: "18:00" },
        altHoliday: { start: "09:00", end: "18:00" },
      },
      closedOnHoliday: true,
    },
    hours: [
      { label: "평일", time: "06:00 ~ 23:00" },
      { label: "주말", time: "09:00 ~ 18:00" },
      { label: "대체공휴일", time: "09:00 ~ 18:00" },
      { label: "공휴일", time: "휴무" },
    ],
    hoursNote: "55분 타임제 — 정시부터 55분 이용, 55분에 티업기 자동 멈춤",
    pricing: [
      { item: "정기권", price: "60,000원/월", note: "아파트너 예약" },
      { item: "일일권", price: "8,000원", note: "인포데스크 발권" },
      { item: "락카 (상단)", price: "8,000원/월", note: "아파트너" },
      { item: "락카 (하단)", price: "10,000원/월", note: "아파트너" },
      { item: "레슨 8회", price: "220,000원" },
      { item: "레슨 16회", price: "400,000원" },
    ],
    reservation: {
      method: "both",
      note: "정기권은 아파트너 / 인포데스크, 일일권은 인포데스크 방문 발권",
    },
    rules: ["비거리 3M의 12개 타석 + 스크린골프 2석 운영"],
    updatedAt: UPDATED,
  },
  {
    id: "sauna",
    slug: "sauna",
    name: "사우나",
    shortDescription: "세대당 월 2회 무료, 초과분 키오스크 자동 결제",
    icon: "flame",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "22:00" },
        weekend: { start: "09:00", end: "18:00" },
        altHoliday: { start: "09:00", end: "18:00" },
      },
      breaks: {
        weekday: [
          { start: "12:00", end: "13:00" },
          { start: "17:00", end: "18:00" },
        ],
      },
      closedOnHoliday: true,
      entryCutoffMinutes: 30,
    },
    hours: [
      { label: "평일", time: "06:00 ~ 22:00" },
      { label: "주말", time: "09:00 ~ 18:00" },
      { label: "대체공휴일", time: "09:00 ~ 18:00" },
      { label: "공휴일", time: "휴무" },
    ],
    hoursNote:
      "브레이크: 평일 12~13시, 17~18시 · 입장마감 30분 전 · 키오스크 락커키 발권 후 입장",
    pricing: [
      { item: "월 1~2회", price: "무료", note: "세대당 월 2회" },
      { item: "월 3회 이상 초과분", price: "5,000원/회", note: "키오스크 자동 결제" },
    ],
    reservation: { method: "infodesk" },
    rules: ["락카장을 갖춘 탈의실과 냉온탕, 건식사우나 운영", "안면인식 등록이 완료되어야 입장 가능"],
    updatedAt: UPDATED,
  },
  {
    id: "studyroom",
    slug: "studyroom",
    name: "독서실",
    shortDescription: "연중무휴, 6개월 단위로 좌석 갱신",
    icon: "book-open",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "25:00" },
        weekend: { start: "06:00", end: "25:00" },
        altHoliday: { start: "06:00", end: "25:00" },
      },
      closedOnHoliday: false,
    },
    hours: [
      { label: "매일", time: "06:00 ~ 익일 01:00" },
      { label: "공휴일 · 대체공휴일", time: "동일 운영 (연중무휴)" },
    ],
    hoursNote: "일일권은 아파트너 또는 인포데스크에서 발권합니다.",
    pricing: [
      { item: "정기권", price: "60,000원", note: "아파트너 예약 / 6개월 리셋" },
      { item: "VIP 정기권", price: "80,000원", note: "아파트너 예약 / VIP 구역 / 6개월 리셋" },
      { item: "일일권", price: "3,000원", note: "아파트너 / 인포데스크 발권" },
    ],
    pricingNote:
      "좌석은 6개월마다 갱신됩니다 (상반기 12/29 오픈 · 하반기 6/29 오픈). 익월 선(先) 신청은 불가하며, 당월에 같은 자리 재등록만 가능합니다.",
    reservation: {
      method: "both",
      note: "안면 등록 시 아파트너 신청 가능, 안면 미등록 시 인포데스크 방문 후 일일권 신청",
    },
    rules: [],
    updatedAt: UPDATED,
  },
  {
    id: "gym",
    slug: "gym",
    name: "실내체육관 · 탁구장",
    shortDescription: "1세대 1회 1시간, 체육관 전체대관 가능",
    icon: "table-2",
    statusRule: {
      hours: {
        weekday: { start: "06:00", end: "22:00" },
        weekend: { start: "06:00", end: "22:00" },
        altHoliday: { start: "09:00", end: "18:00" },
      },
      closedOnHoliday: true,
    },
    hours: [
      { label: "평일 · 주말", time: "06:00 ~ 22:00" },
      { label: "대체공휴일", time: "09:00 ~ 18:00" },
      { label: "공휴일", time: "휴무" },
    ],
    pricing: [
      { item: "실내체육관", price: "1세대 1회 1시간", note: "아파트너 예약" },
      {
        item: "실내체육관 전체대관",
        price: "50,000원 / 4시간",
        note: "이용일 기준 4일 전부터 예약 가능, 인포 방문 필수",
      },
      { item: "탁구장", price: "1세대 1회 1시간", note: "아파트너 예약" },
    ],
    reservation: { method: "apartner" },
    rules: ["2개층 높이의 실내체육관 — 날씨와 상관없이 이용 가능", "미성년자 이용 시 보호자 동반 필수"],
    updatedAt: UPDATED,
  },
  {
    id: "cafeteria",
    slug: "cafeteria",
    name: "카페테리아",
    shortDescription: "라스트오더 18:30, 공휴일 휴무",
    icon: "coffee",
    statusRule: {
      hours: {
        weekday: { start: "09:00", end: "19:00" },
        weekend: { start: "09:00", end: "19:00" },
        altHoliday: { start: "09:00", end: "19:00" },
      },
      closedOnHoliday: true,
    },
    hours: [
      { label: "평일 · 주말", time: "09:00 ~ 19:00" },
      { label: "대체공휴일", time: "09:00 ~ 19:00" },
      { label: "공휴일", time: "휴무" },
    ],
    hoursNote: "라스트오더 18:30",
    reservation: { method: "infodesk" },
    rules: [],
    updatedAt: UPDATED,
  },
  {
    id: "programs",
    slug: "programs",
    name: "커뮤니티 프로그램",
    shortDescription: "GX · 필라테스 · 영유아 프로그램 (다목적홀)",
    icon: "sparkles",
    hours: [{ label: "안내", time: "정규 편성 수업 시간표 참고" }],
    hoursNote:
      "303동 지하1층 12라인 앞 다목적홀에서 진행됩니다. 매월 23일 이후부터 다음 달 강습을 등록할 수 있습니다.",
    classes: [
      {
        id: "kiriki-english",
        name: "키리키 영어놀이터",
        frequency: "매주 금",
        sessions: [
          { day: "금", time: "16:30", detail: "24~40개월 · 위드맘" },
          { day: "금", time: "17:20", detail: "36~52개월 · 위드맘" },
          { day: "금", time: "18:10", detail: "5~6세" },
        ],
        price: "54,000원 + 재료비 20,000원",
        note: "정원 타임당 14명 선착순",
      },
      {
        id: "dingdong-play",
        name: "딩동댕 오감놀이",
        frequency: "매주 화",
        sessions: [
          { day: "화", time: "11:30", detail: "5~8개월" },
          { day: "화", time: "12:20", detail: "7~12개월" },
          { day: "화", time: "13:10", detail: "10~18개월" },
        ],
        price: "41,000원 + 재료비 14,000원",
        note: "정원 타임당 14명 선착순",
      },
      {
        id: "yoga",
        name: "요가",
        frequency: "주2회 월8회",
        sessions: [{ day: "월·수", time: "10:00" }],
        price: "40,000원",
      },
      {
        id: "zumba",
        name: "줌바",
        frequency: "주2회 월8회",
        sessions: [
          { day: "화·목", time: "09:00 / 10:00" },
          { day: "월·수", time: "21:00" },
          { day: "화·목", time: "21:00" },
        ],
        price: "45,000원",
      },
      {
        id: "kids-inline",
        name: "키즈인라인",
        frequency: "주1회 월4회",
        sessions: [
          { day: "월·수", time: "17:00", detail: "초급" },
          { day: "화·목", time: "17:00", detail: "중급" },
        ],
        price: "100,000원",
      },
      {
        id: "pilates",
        name: "기구필라테스",
        frequency: "주2회 월8회",
        sessions: [{ day: "월~토", time: "오전 · 오후 다수 시간대" }],
        price: "140,000원",
      },
    ],
    classesNote:
      "재료비는 강사님께 직접 매월 별도 결제하며 결제 후 환불이 불가합니다. 주1회 수업은 월 4회, 주2회 수업은 월 8회 강습 진행 / 월 최대 수강횟수 진행 시 5주차 수업 없음.",
    registrationWindow: { opensOnDay: 23 },
    cancellationWindow: { startDay: 15, endDay: 23 },
    reservation: {
      method: "infodesk",
      note: "등록은 인포데스크 방문 또는 전화 문의",
    },
    rules: [
      "모든 프로그램은 별도 해지 신청이 없으면 매월 자동 연장됩니다.",
      "해지 신청은 매월 15일~23일에만 가능합니다.",
    ],
    updatedAt: UPDATED,
  },
  {
    id: "kidscafe",
    slug: "kidscafe",
    name: "키즈카페",
    shortDescription: "부모와 아이가 함께 즐기는 실내 놀이공간",
    icon: "baby",
    hours: [{ label: "안내", time: "인포데스크 문의" }],
    hoursNote:
      "운영시간·이용요금 정보는 준비 중입니다. 자세한 내용은 커뮤니티센터 인포데스크 031-378-8797로 문의해 주세요.",
    reservation: {
      method: "infodesk",
      note: "이용 방법은 인포데스크로 문의해 주세요.",
    },
    rules: [],
    updatedAt: UPDATED,
  },
  {
    id: "kidsgym",
    slug: "kidsgym",
    name: "키즈짐",
    shortDescription: "실내에서 아이들이 안전하게 뛰놀 수 있는 놀이시설",
    icon: "blocks",
    hours: [{ label: "안내", time: "인포데스크 문의" }],
    hoursNote:
      "운영시간·이용요금 정보는 준비 중입니다. 자세한 내용은 커뮤니티센터 인포데스크 031-378-8797로 문의해 주세요.",
    reservation: {
      method: "infodesk",
      note: "이용 방법은 인포데스크로 문의해 주세요.",
    },
    rules: [],
    updatedAt: UPDATED,
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((f) => f.slug === slug);
}
