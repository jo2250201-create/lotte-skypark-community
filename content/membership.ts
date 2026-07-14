import type { MembershipStep } from "./types";

export const membershipSteps: MembershipStep[] = [
  {
    step: 1,
    title: "관리사무소 방문",
    detail: "입주자카드 작성 및 등록",
  },
  {
    step: 2,
    title: "아파트너 앱 가입",
    detail: "앱 가입 후 관리사무소 입주자 승인 요청",
  },
  {
    step: 3,
    title: "커뮤니티센터 인포데스크 방문",
    detail:
      "전입신고된 등본 또는 신분증 지참 / 세대원 중 전입 미신고 시 가족관계증명서 지참",
  },
  {
    step: 4,
    title: "회원가입 신청서 작성 및 전산 등록",
    detail: "인포데스크에서 신청서를 작성하고 전산에 등록합니다.",
  },
  {
    step: 5,
    title: "안면인식 등록 후 개별 프로그램 신청",
    detail: "안면인식 등록이 완료되면 원하는 프로그램을 바로 신청할 수 있습니다.",
  },
];

export const membershipNotes: string[] = [
  "세대원도 동일한 절차로 등록 가능합니다. 등록 후 자동으로 세대원으로 편입됩니다.",
];

export const householdMemberSimplifiedRegistration = {
  title: "세대원 등록 간소화",
  detail:
    "세대주가 관리사무소 승인 및 인포데스크 회원가입을 완료한 경우, 나머지 세대원은 관리사무소 절차 없이 인포데스크 방문 + 관계 증빙서류만 지참하시면 바로 등록 가능합니다.",
};
