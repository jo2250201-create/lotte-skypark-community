import type { FAQItem } from "./types";

const UPDATED = "2026-07-01";

export const faqItems: FAQItem[] = [
  {
    id: "faq-move-in",
    question: "이사 오자마자 바로 이용 가능한가요?",
    answer:
      "커뮤니티센터 이용을 위해서는 먼저 관리사무소에서 입주자카드를 작성·등록하시고, 아파트너 앱 가입 후 관리사무소 입주자 승인을 받으셔야 합니다. 이후 인포데스크를 방문해 안면인식을 등록하시면 당일부터 대부분의 시설을 이용하실 수 있습니다. 단, 사우나·수영장은 안면인식 등록 후 동기화에 최대 1시간이 소요됩니다.",
    tags: ["membership", "pool", "sauna"],
    highlight: true,
    updatedAt: UPDATED,
  },
  {
    id: "faq-class-midterm",
    question: "강습 중도 등록이 가능한가요?",
    answer:
      "네, 남은 수업 횟수만큼 일할 계산하여 등록 가능합니다. 인포데스크로 문의해 주세요.",
    tags: ["programs", "pool"],
    updatedAt: UPDATED,
  },
  {
    id: "faq-fitness-free",
    question: "헬스장 무료 이용 기준이 어떻게 되나요?",
    answer:
      "세대당 1인이 무료로 이용 가능합니다. 추가 세대원은 1인당 10,000원/월이며, 무료 세대원 변경은 매월 1~5일에만 가능합니다.",
    tags: ["fitness"],
    highlight: true,
    updatedAt: UPDATED,
  },
  {
    id: "faq-class-registration-date",
    question: "강습 등록은 언제 할 수 있나요?",
    answer:
      "매월 23일 이후부터 다음 달 강습을 등록하실 수 있습니다. 정원이 있으므로 빠른 등록을 권장합니다.",
    tags: ["programs", "pool"],
    highlight: true,
    updatedAt: UPDATED,
  },
  {
    id: "faq-apartner-required",
    question: "아파트너 앱이 꼭 필요한가요?",
    answer:
      "골프 타석, 독서실, 탁구장, 실내체육관, 게스트룸 예약은 아파트너 앱을 통해 이용하실 수 있습니다. 강습 등록은 인포데스크 방문으로 진행됩니다.",
    tags: ["golf", "studyroom", "gym", "guestroom", "reservation"],
    updatedAt: UPDATED,
  },
  {
    id: "faq-auto-renewal",
    question: "수강 등록 후 자동으로 연장되나요?",
    answer:
      "네, 모든 프로그램은 별도의 해지 신청이 없을 경우 매월 자동으로 연장됩니다. 수강을 중단하시려면 반드시 해지 신청을 해주셔야 합니다.",
    tags: ["programs", "pool"],
    updatedAt: UPDATED,
  },
  {
    id: "faq-gx-cancel",
    question: "GX 프로그램 해지는 언제 신청할 수 있나요?",
    answer:
      "매월 15일부터 23일까지만 해지 신청이 가능합니다. 해당 기간 외에는 접수가 불가하오니 유의해 주시기 바랍니다.",
    tags: ["programs"],
    highlight: true,
    updatedAt: UPDATED,
  },
  {
    id: "faq-signup-documents",
    question: "회원가입할 때 준비물이 있나요?",
    answer:
      "입주민임을 확인할 수 있는 서류가 필요합니다. 전입신고가 완료된 신분증 또는 등본을 지참해 주세요. 전입신고가 되지 않은 직계비존속의 경우 가족관계증명서와 신분증을 함께 지참하시면 됩니다.",
    tags: ["membership"],
    updatedAt: UPDATED,
  },
  {
    id: "faq-residents-only",
    question: "입주민만 이용 가능한 시설인가요?",
    answer:
      "네, 커뮤니티센터 시설은 입주민만 이용 가능한 공간입니다. 게스트룸을 제외한 모든 시설은 안면인식이 등록된 입주민만 이용하실 수 있습니다.",
    tags: ["membership", "guestroom"],
    updatedAt: UPDATED,
  },
];

export function getFaqByTag(tag: string): FAQItem[] {
  return faqItems.filter((f) => f.tags.includes(tag));
}
