import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FacilityIconGlyph } from "@/components/site/facility-icon";
import { StatusPill } from "@/components/site/status-pill";
import { getFacilityImage } from "@/lib/facility-image";
import type { Facility } from "@/content/types";

export function FacilityCard({ facility }: { facility: Facility }) {
  const image = getFacilityImage(facility.slug);

  return (
    <Link
      href={`/facilities/${facility.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gold/50"
    >
      {image ? (
        <div className="relative h-32 w-full overflow-hidden bg-warm">
          <Image
            src={image}
            alt={facility.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-md bg-gold-bg text-gold">
            <FacilityIconGlyph icon={facility.icon} className="size-5" />
          </div>
          <StatusPill facility={facility} />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif text-lg font-semibold text-foreground">{facility.name}</h3>
          <p className="text-sm text-muted-foreground">{facility.shortDescription}</p>
        </div>
        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
          자세히 보기
          <ArrowRight className="size-3.5" />
        </div>
      </div>
    </Link>
  );
}
