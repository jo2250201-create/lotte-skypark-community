"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { SearchTrigger } from "@/components/site/search-command";
import { useSearch } from "@/components/site/search-provider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/facilities", label: "시설안내" },
  { href: "/guestroom", label: "게스트룸" },
  { href: "/membership", label: "회원가입" },
  { href: "/faq", label: "FAQ" },
  { href: "/notices", label: "공지사항" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setOpen: setSearchOpen } = useSearch();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 flex-col leading-none">
          <span className="font-serif text-sm font-bold text-foreground sm:text-base">
            {site.shortName}
          </span>
          <span className="text-[10px] tracking-widest text-gold">
            {site.brandLine}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-gold",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden max-w-64 flex-1 sm:block">
          <SearchTrigger />
        </div>

        <a
          href={`tel:${site.infodeskPhoneTel}`}
          className="hidden shrink-0 items-center gap-1.5 rounded-md border border-gold px-3 py-1.5 text-sm font-semibold text-gold transition-colors hover:bg-gold-bg md:inline-flex"
        >
          <Phone className="size-3.5" />
          {site.infodeskPhone}
        </a>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="ml-auto flex size-9 items-center justify-center rounded-md border border-border sm:hidden"
          aria-label="검색"
        >
          <Search className="size-4" />
        </button>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="flex size-9 items-center justify-center rounded-md border border-border sm:ml-auto lg:hidden"
            aria-label="메뉴 열기"
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="font-serif text-left">{site.shortName}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              <div className="mb-2">
                <SearchTrigger />
              </div>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-warm"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${site.infodeskPhoneTel}`}
                className="mt-2 flex items-center gap-1.5 rounded-md border border-gold px-3 py-2.5 text-sm font-semibold text-gold"
              >
                <Phone className="size-3.5" />
                {site.infodeskPhone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
