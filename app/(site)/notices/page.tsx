import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { notices } from "@/content/notices";

export const metadata: Metadata = {
  title: "공지사항",
  description: "커뮤니티센터 공지사항, 휴무 및 점검 안내입니다.",
};

export default function NoticesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Notices"
        title="공지사항"
        description="휴무, 시설 점검, 새 소식을 안내해 드립니다."
      />
      {notices.length === 0 ? (
        <p className="text-sm text-muted-foreground">등록된 공지사항이 없습니다.</p>
      ) : (
        <ul className="space-y-3">
          {notices.map((notice) => (
            <li
              key={notice.id}
              id={notice.id}
              className="scroll-mt-24 space-y-1.5 rounded-md border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2">
                {notice.pinned ? (
                  <span className="rounded-full bg-gold-bg px-2 py-0.5 text-[10px] font-semibold text-gold">
                    고정
                  </span>
                ) : null}
                <span className="text-xs text-muted-foreground">{notice.publishedAt}</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground">
                {notice.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{notice.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
