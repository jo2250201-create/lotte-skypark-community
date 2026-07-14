import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { HoursCard } from "@/components/site/hours-card";
import { PriceTable } from "@/components/site/price-table";
import { ClassSchedule } from "@/components/site/class-schedule";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { StatusPill } from "@/components/site/status-pill";
import { WindowStatusBadge } from "@/components/site/window-status-badge";
import { facilities, getFacilityBySlug } from "@/content/facilities";
import { getFaqByTag } from "@/content/faq";
import { site } from "@/content/site";
import { getFacilityImage } from "@/lib/facility-image";

export function generateStaticParams() {
  return facilities.map((facility) => ({ slug: facility.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return {};
  return {
    title: facility.name,
    description: facility.shortDescription,
  };
}

const RESERVATION_LABEL: Record<string, string> = {
  apartner: "아파트너 앱",
  infodesk: "인포데스크 방문 · 전화",
  both: "아파트너 앱 · 인포데스크",
};

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) notFound();

  const relatedFaq = getFaqByTag(facility.slug);
  const image = getFacilityImage(facility.slug);

  return (
    <div className="space-y-12">
      <PageHeader eyebrow="Facilities" title={facility.name} description={facility.shortDescription}>
        <StatusPill facility={facility} className="text-sm" />
      </PageHeader>

      {image ? (
        <div className="relative -mt-6 h-56 w-full overflow-hidden rounded-lg bg-warm sm:h-72">
          <Image
            src={image}
            alt={facility.name}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      ) : null}

      <Section title="운영시간" id="hours">
        <HoursCard hours={facility.hours} note={facility.hoursNote} />
      </Section>

      {facility.pricing ? (
        <Section title="이용요금" id="pricing">
          <PriceTable rows={facility.pricing} note={facility.pricingNote} />
        </Section>
      ) : null}

      {facility.classes ? (
        <Section
          title="강습 안내"
          id="classes"
          action={
            facility.registrationWindow ? (
              <WindowStatusBadge
                spec={{ kind: "open-ended", openDay: facility.registrationWindow.opensOnDay }}
              />
            ) : undefined
          }
        >
          <ClassSchedule programs={facility.classes} note={facility.classesNote} />
        </Section>
      ) : null}

      <Section title="예약 · 등록 방법" id="reservation">
        <div className="rounded-md border border-border bg-card p-4">
          <div className="text-sm font-semibold text-foreground">
            {RESERVATION_LABEL[facility.reservation.method]}
          </div>
          {facility.reservation.note ? (
            <p className="mt-1 text-sm text-muted-foreground">{facility.reservation.note}</p>
          ) : null}
        </div>
      </Section>

      {facility.rules.length > 0 ? (
        <Section
          title="이용 규칙"
          id="rules"
          action={
            facility.cancellationWindow ? (
              <WindowStatusBadge
                spec={{
                  kind: "range",
                  startDay: facility.cancellationWindow.startDay,
                  endDay: facility.cancellationWindow.endDay,
                }}
              />
            ) : undefined
          }
        >
          <ul className="space-y-1.5">
            {facility.rules.map((rule, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-gold">·</span>
                {rule}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {relatedFaq.length > 0 ? (
        <Section title="관련 FAQ" id="faq">
          <FAQAccordion items={relatedFaq} />
        </Section>
      ) : null}

      <p className="text-center text-xs text-muted-foreground">
        추가 문의는 커뮤니티센터 인포데스크{" "}
        <a href={`tel:${site.infodeskPhoneTel}`} className="text-gold hover:underline">
          {site.infodeskPhone}
        </a>
        로 연락해 주세요.
      </p>
    </div>
  );
}
