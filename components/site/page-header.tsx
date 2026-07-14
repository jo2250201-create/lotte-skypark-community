import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("mb-10 flex flex-col gap-3 sm:mb-14", className)}>
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          {eyebrow}
        </span>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
