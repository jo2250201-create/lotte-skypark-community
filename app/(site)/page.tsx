import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/site/section";
import { SearchTrigger } from "@/components/site/search-command";
import { StatusPill } from "@/components/site/status-pill";
import { FacilityIconGlyph } from "@/components/site/facility-icon";
import { NoticeBanner } from "@/components/site/notice-banner";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { facilities } from "@/content/facilities";
import { faqItems } from "@/content/faq";
import { getActiveNotices } from "@/content/notices";
import { site } from "@/content/site";

export default function HomePage() {
  const notices = getActiveNotices();
  const highlightedFaq = faqItems.filter((f) => f.highlight).slice(0, 4);

  return (
    <div className="space-y-16">
      <section className="space-y-6 text-center sm:space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            {site.name}
          </span>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            오늘, 궁금한 걸
            <br className="sm:hidden" /> 바로 확인하세요
          </h1>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            시설 운영 상태, 요금, 예약 방법, 자주 묻는 질문을 한 곳에서 검색할 수 있습니다.
          </p>
        </div>
        <div className="mx-auto max-w-xl space-y-3">
          <SearchTrigger size="large" />
          <a
            href={`tel:${site.infodeskPhoneTel}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-gold"
          >
            <Phone className="size-3.5" />
            급한 문의는 인포데스크 {site.infodeskPhone}
          </a>
        </div>
      </section>

      {notices.length > 0 ? (
        <div className="space-y-3">
          {notices.map((notice) => (
            <NoticeBanner key={notice.id} notice={notice} />
          ))}
        </div>
      ) : null}

      <Section title="오늘의 시설 운영 상태">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <Link
              key={facility.id}
              href={`/facilities/${facility.slug}`}
              className="flex items-center justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 transition-colors hover:border-gold/50"
            >
              <span className="flex items-center gap-2.5">
                <FacilityIconGlyph icon={facility.icon} className="size-4 text-gold" />
                <span className="text-sm font-medium text-foreground">{facility.name}</span>
              </span>
              <StatusPill facility={facility} />
            </Link>
          ))}
        </div>
      </Section>

      <Section title="자주 찾는 질문">
        <FAQAccordion items={highlightedFaq} />
        <Link
          href="/faq"
          className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
        >
          FAQ 전체 보기
          <ArrowRight className="size-3.5" />
        </Link>
      </Section>

      <Section title="바로가기">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <QuickLink
            href="/facilities"
            title="시설 안내"
            description="운영시간 · 이용요금 · 강습 일정"
          />
          <QuickLink
            href="/guestroom"
            title="게스트룸"
            description="객실 요금 · 예약 · 이용 규정"
          />
          <QuickLink
            href="/membership"
            title="회원가입 안내"
            description="입주민 등록 절차 5단계"
          />
        </div>
      </Section>
    </div>
  );
}

function QuickLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-gold/50"
    >
      <div className="space-y-1">
        <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <span className="flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
        이동하기
        <ArrowRight className="size-3.5" />
      </span>
    </Link>
  );
}
