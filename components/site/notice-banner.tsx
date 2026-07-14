import { Megaphone } from "lucide-react";
import type { Notice } from "@/content/types";

export function NoticeBanner({ notice }: { notice: Notice }) {
  return (
    <div
      id={notice.id}
      className="flex items-start gap-3 rounded-md border border-gold/30 bg-gold-bg px-4 py-3"
    >
      <Megaphone className="mt-0.5 size-4 shrink-0 text-gold" />
      <div className="space-y-0.5">
        <div className="text-sm font-semibold text-foreground">{notice.title}</div>
        <div className="text-sm leading-relaxed text-muted-foreground">{notice.body}</div>
      </div>
    </div>
  );
}
