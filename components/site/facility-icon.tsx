import {
  Waves,
  Dumbbell,
  Flame,
  BookOpen,
  Table2,
  Coffee,
  Sparkles,
  Baby,
  Blocks,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { FacilityIcon } from "@/content/types";

const ICONS: Record<FacilityIcon, LucideIcon> = {
  waves: Waves,
  dumbbell: Dumbbell,
  golf: Target,
  flame: Flame,
  "book-open": BookOpen,
  "table-2": Table2,
  coffee: Coffee,
  sparkles: Sparkles,
  baby: Baby,
  blocks: Blocks,
};

export function FacilityIconGlyph({
  icon,
  className,
}: {
  icon: FacilityIcon;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} strokeWidth={1.75} />;
}
