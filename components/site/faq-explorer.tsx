"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { facilities } from "@/content/facilities";
import type { FAQItem } from "@/content/types";

const TAG_LABELS: Record<string, string> = {
  membership: "회원가입",
  reservation: "예약방법",
  guestroom: "게스트룸",
  programs: "커뮤니티 프로그램",
  ...Object.fromEntries(facilities.map((f) => [f.slug, f.name])),
};

export function FaqExplorer({ items }: { items: FAQItem[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const availableTags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.tags.forEach((t) => set.add(t)));
    return Array.from(set).filter((t) => TAG_LABELS[t]);
  }, [items]);

  const filtered = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter((item) => {
      const matchesTag = !activeTag || item.tags.includes(activeTag);
      const haystack = `${item.question} ${item.answer}`.toLowerCase();
      const matchesQuery = tokens.every((token) => haystack.includes(token));
      return matchesTag && matchesQuery;
    });
  }, [items, activeTag, query]);

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="질문 검색 (예: 무료, 등록, 해지)"
        className="h-10 w-full rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-gold"
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            activeTag === null
              ? "border-gold bg-gold-bg text-gold"
              : "border-border text-muted-foreground hover:border-gold/50",
          )}
        >
          전체
        </button>
        {availableTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              activeTag === tag
                ? "border-gold bg-gold-bg text-gold"
                : "border-border text-muted-foreground hover:border-gold/50",
            )}
          >
            {TAG_LABELS[tag]}
          </button>
        ))}
      </div>
      <FAQAccordion items={filtered} />
    </div>
  );
}
