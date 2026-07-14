import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { FacilityCard } from "@/components/site/facility-card";
import { facilities } from "@/content/facilities";

export const metadata: Metadata = {
  title: "시설 안내",
  description: "운영시간, 이용요금, 강습 일정을 시설별로 확인하세요.",
};

export default function FacilitiesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Facilities"
        title="시설 안내"
        description="시설을 선택하면 운영시간, 이용요금, 강습, 이용규칙을 한 페이지에서 확인할 수 있습니다."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
}
