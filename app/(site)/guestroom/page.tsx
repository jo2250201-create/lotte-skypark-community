import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import {
  guestRooms,
  guestRoomAmenities,
  guestRoomRules,
  guestRoomCancellation,
  guestRoomKeySchedule,
  guestRoomBedding,
} from "@/content/guestroom";

export const metadata: Metadata = {
  title: "게스트룸",
  description: "게스트룸 4개 객실의 요금, 예약, 이용 규정을 확인하세요.",
};

export default function GuestRoomPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Guest Room"
        title="게스트룸"
        description="방문 가족·지인을 위한 입주민 전용 게스트룸입니다. 예약은 아파트너 앱으로 진행합니다."
      />

      <Section title="객실 요금" id="rooms">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {guestRooms.map((room) => (
            <div
              key={room.id}
              id={room.id}
              className="scroll-mt-24 space-y-2 rounded-md border border-border bg-card p-5"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-semibold text-foreground">{room.name}</h3>
                <span className="text-xs text-muted-foreground">{room.type}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {room.bed} · {room.capacity}
              </div>
              <div className="flex gap-4 pt-1 text-sm">
                <div>
                  <span className="text-muted-foreground">평일 </span>
                  <span className="font-semibold text-gold">{room.weekdayPrice}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">주말 </span>
                  <span className="font-semibold text-gold">{room.weekendPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1 rounded-md bg-warm p-4 text-xs leading-relaxed text-muted-foreground">
          <p>기본 비품: {guestRoomAmenities.included}</p>
          <p>{guestRoomAmenities.bedding}</p>
        </div>
      </Section>

      <Section title="이용 규정" id="rules">
        <ul className="space-y-2">
          {guestRoomRules.map((rule) => (
            <li key={rule.item} className="rounded-md bg-warm p-3 text-sm">
              <span className="font-semibold text-foreground">{rule.item}</span>
              <span className="text-muted-foreground"> — {rule.detail}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="취소 규정" id="cancellation">
        <ul className="space-y-1.5">
          {guestRoomCancellation.map((line, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-gold">·</span>
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="객실키 수령 안내" id="key">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {guestRoomKeySchedule.map((s) => (
            <div key={s.label} className="rounded-md border-l-2 border-gold bg-warm p-4">
              <div className="text-sm font-semibold text-foreground">{s.label}</div>
              <div className="text-sm font-medium text-foreground/80">{s.time}</div>
              {s.note ? (
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section title="침구 추가 안내" id="bedding">
        <div className="space-y-1.5 rounded-md border border-border bg-card p-4 text-sm">
          <p className="text-muted-foreground">{guestRoomBedding.note}</p>
          <p>
            <span className="font-medium text-foreground">구성</span>{" "}
            <span className="text-muted-foreground">{guestRoomBedding.composition}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">추가 비용</span>{" "}
            <span className="font-semibold text-gold">{guestRoomBedding.cost}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">신청</span>{" "}
            <span className="text-muted-foreground">
              {guestRoomBedding.applyMethod} / {guestRoomBedding.applyDeadline}
            </span>
          </p>
          <p>
            <span className="font-medium text-foreground">취소 마감</span>{" "}
            <span className="text-muted-foreground">{guestRoomBedding.cancelDeadline}</span>
          </p>
        </div>
      </Section>
    </div>
  );
}
