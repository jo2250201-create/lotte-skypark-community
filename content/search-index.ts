import { facilities } from "./facilities";
import { faqItems } from "./faq";
import {
  guestRooms,
  guestRoomKeySchedule,
  guestRoomCancellation,
  guestRoomRules,
  guestRoomBedding,
} from "./guestroom";
import { membershipSteps } from "./membership";
import { notices } from "./notices";
import type { SearchDoc } from "./types";

/**
 * Flattens every content module into one search index. This is the single
 * source both the UI search box and a future AI assistant / RAG retriever
 * should read from — keeping one shape means the two never drift apart.
 */
export function buildSearchIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const facility of facilities) {
    docs.push({
      id: `facility-${facility.id}`,
      title: facility.name,
      snippet: [
        facility.shortDescription,
        facility.hours.map((h) => `${h.label} ${h.time}`).join(" · "),
      ]
        .filter(Boolean)
        .join(" — "),
      url: `/facilities/${facility.slug}`,
      category: "시설 안내",
      tags: [facility.slug, "시설", "운영시간", "이용요금"],
    });

    for (const cls of facility.classes ?? []) {
      docs.push({
        id: `class-${cls.id}`,
        title: `${facility.name} · ${cls.name}`,
        snippet: [
          cls.sessions.map((s) => `${s.day} ${s.time}${s.detail ? ` (${s.detail})` : ""}`).join(", "),
          `수강료 ${cls.price}`,
        ].join(" — "),
        url: `/facilities/${facility.slug}#classes`,
        category: "강습 안내",
        tags: [facility.slug, "강습", cls.name],
      });
    }
  }

  for (const faq of faqItems) {
    docs.push({
      id: `faq-${faq.id}`,
      title: faq.question,
      snippet: faq.answer,
      url: `/faq#${faq.id}`,
      category: "자주 묻는 질문",
      tags: [...faq.tags, "FAQ"],
    });
  }

  for (const room of guestRooms) {
    docs.push({
      id: `guestroom-${room.id}`,
      title: `게스트룸 ${room.name}`,
      snippet: `${room.type} · ${room.bed} · ${room.capacity} · 평일 ${room.weekdayPrice} / 주말 ${room.weekendPrice}`,
      url: `/guestroom#${room.id}`,
      category: "게스트룸",
      tags: ["guestroom", room.name],
    });
  }

  docs.push({
    id: "guestroom-key",
    title: "게스트룸 객실키 수령 안내",
    snippet: guestRoomKeySchedule
      .map((s) => `${s.label} ${s.time}${s.note ? ` (${s.note})` : ""}`)
      .join(" / "),
    url: "/guestroom#key",
    category: "게스트룸",
    tags: ["guestroom", "키", "수령"],
  });

  docs.push({
    id: "guestroom-cancellation",
    title: "게스트룸 취소 규정",
    snippet: guestRoomCancellation.join(" / "),
    url: "/guestroom#cancellation",
    category: "게스트룸",
    tags: ["guestroom", "취소", "환불"],
  });

  docs.push({
    id: "guestroom-rules",
    title: "게스트룸 이용 규정",
    snippet: guestRoomRules.map((r) => `${r.item}: ${r.detail}`).join(" / "),
    url: "/guestroom#rules",
    category: "게스트룸",
    tags: ["guestroom", "예약", "입실", "퇴실"],
  });

  docs.push({
    id: "guestroom-bedding",
    title: "게스트룸 침구 추가 안내",
    snippet: `${guestRoomBedding.composition} · 추가 비용 ${guestRoomBedding.cost} · ${guestRoomBedding.applyDeadline}`,
    url: "/guestroom#bedding",
    category: "게스트룸",
    tags: ["guestroom", "침구"],
  });

  docs.push({
    id: "membership-overview",
    title: "회원가입 방법",
    snippet: membershipSteps.map((s) => `${s.step}. ${s.title}`).join(" → "),
    url: "/membership",
    category: "회원가입",
    tags: ["membership", "회원가입", "등록"],
  });

  for (const notice of notices) {
    docs.push({
      id: `notice-${notice.id}`,
      title: notice.title,
      snippet: notice.body,
      url: `/notices#${notice.id}`,
      category: "공지사항",
      tags: ["notice", "공지"],
    });
  }

  return docs;
}
