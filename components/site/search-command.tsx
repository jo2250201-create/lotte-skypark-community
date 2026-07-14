"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearch } from "@/components/site/search-provider";

export function SearchTrigger({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const { setOpen } = useSearch();

  if (size === "large") {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-14 w-full items-center gap-3 rounded-lg border border-border bg-card px-5 text-left shadow-sm transition-colors hover:border-gold/60",
          className,
        )}
      >
        <Search className="size-5 text-gold" />
        <span className="flex-1 text-sm text-muted-foreground sm:text-base">
          궁금한 내용을 검색해보세요 — 예: 게스트룸 키, 수영장 휴무
        </span>
        <kbd className="hidden rounded border border-border bg-warm px-2 py-1 text-xs font-medium text-muted-foreground sm:inline">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        "flex h-9 w-full items-center gap-2 rounded-md border border-border bg-warm px-3 text-sm text-muted-foreground transition-colors hover:border-gold/60 sm:w-64",
        className,
      )}
    >
      <Search className="size-4" />
      <span className="flex-1 text-left">검색</span>
      <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium sm:inline">
        ⌘K
      </kbd>
    </button>
  );
}
