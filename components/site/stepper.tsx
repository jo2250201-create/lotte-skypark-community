import type { MembershipStep } from "@/content/types";

export function Stepper({ steps }: { steps: MembershipStep[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step) => (
        <li key={step.step} className="flex gap-4 rounded-md bg-warm p-4">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
            {step.step}
          </div>
          <div className="space-y-0.5">
            <div className="text-sm font-semibold text-foreground">{step.title}</div>
            <div className="text-sm leading-relaxed text-muted-foreground">{step.detail}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
