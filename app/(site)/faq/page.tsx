import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { FaqExplorer } from "@/components/site/faq-explorer";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "입주민들이 자주 문의하는 질문과 답변을 모았습니다.",
};

export default function FaqPage() {
  return (
    <div>
      <PageHeader
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="시설별 태그로 필터링하거나 검색해서 원하는 답변을 빠르게 찾아보세요."
      />
      <FaqExplorer items={faqItems} />
    </div>
  );
}
