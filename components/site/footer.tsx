import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-warm px-4 py-8 text-center sm:px-6">
      <p className="text-sm font-semibold text-foreground/80">
        문의 : 커뮤니티센터 인포데스크{" "}
        <a href={`tel:${site.infodeskPhoneTel}`} className="text-gold hover:underline">
          {site.infodeskPhone}
        </a>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">운영시간 내 문의 가능</p>
      <p className="mt-4 font-serif text-xs tracking-[0.2em] text-gold">{site.brandLine}</p>
    </footer>
  );
}
