"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildSearchIndex } from "@/content/search-index";

interface SearchContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const docs = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches =
      tokens.length === 0
        ? docs
        : docs.filter((doc) => {
            const haystack = `${doc.title} ${doc.snippet} ${doc.tags.join(" ")}`.toLowerCase();
            return tokens.every((token) => haystack.includes(token));
          });

    const byCategory = new Map<string, typeof docs>();
    for (const doc of matches.slice(0, 40)) {
      const list = byCategory.get(doc.category) ?? [];
      list.push(doc);
      byCategory.set(doc.category, list);
    }
    return Array.from(byCategory.entries());
  }, [docs, query]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(url: string) {
    setOpen(false);
    router.push(url);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setQuery("");
  }

  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="top-24 max-w-lg -translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-xl"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>검색</DialogTitle>
            <DialogDescription>시설, 요금, 강습, FAQ를 한 번에 검색합니다</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="예: 게스트룸 키, 수영장 휴무, 헬스장 무료"
              className="h-6 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                검색 결과가 없습니다. 인포데스크 031-378-8797로 문의해 주세요.
              </p>
            ) : (
              results.map(([category, items]) => (
                <div key={category} className="mb-2">
                  <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {category}
                  </div>
                  {items.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => go(doc.url)}
                      className="flex w-full flex-col items-start gap-0.5 rounded-md px-3 py-2 text-left hover:bg-muted"
                    >
                      <span className="text-sm font-medium text-foreground">{doc.title}</span>
                      <span className="line-clamp-1 text-xs text-muted-foreground">
                        {doc.snippet}
                      </span>
                    </button>
                  ))}
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </SearchContext.Provider>
  );
}
