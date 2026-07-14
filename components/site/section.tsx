import { cn } from "@/lib/utils";

export function Section({
  title,
  id,
  className,
  action,
  children,
}: {
  title: string;
  id?: string;
  className?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-4", className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
          <span className="h-4 w-[3px] bg-gold" />
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
