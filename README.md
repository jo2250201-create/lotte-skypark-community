# 롯데캐슬스카이파크 커뮤니티센터 — 입주민 플랫폼 V2

입주민 전용 커뮤니티센터 이용안내 플랫폼. Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui.

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

## 배포

Cloudflare Pages를 대상으로 정적 export를 사용합니다.

```bash
npm run build
```

`out/` 디렉토리가 생성되며, 이를 그대로 Cloudflare Pages에 배포합니다.

## 콘텐츠 수정하기

모든 안내 콘텐츠(운영시간, 요금, 강습, 게스트룸, 회원가입, FAQ, 공지사항)는 코드가 아니라
`content/` 디렉토리의 데이터 파일에 있습니다. 가격이나 운영시간이 바뀌면 해당 파일만 수정하면 됩니다.

- `content/facilities.ts` — 시설별 운영시간·요금·강습
- `content/guestroom.ts` — 게스트룸 요금·규정
- `content/membership.ts` — 회원가입 절차
- `content/faq.ts` — 자주 묻는 질문
- `content/notices.ts` — 공지사항
- `content/holidays.ts` — 공휴일 목록 (설날·추석 등 음력 공휴일은 매년 직접 추가 필요)
- `content/types.ts` — 위 데이터들의 스키마. 향후 관리자 CMS/DB를 연동할 때 이 인터페이스가 API 계약이 됩니다.

## 프로젝트 구조

- `app/(site)/` — 페이지 라우트 (홈, 시설안내, 게스트룸, 회원가입, FAQ, 공지사항)
- `components/site/` — 이 프로젝트 전용 컴포넌트
- `components/ui/` — shadcn/ui 기본 컴포넌트 (Base UI 기반)
- `lib/facility-status.ts` — "오늘 운영 상태" 실시간 계산 로직
