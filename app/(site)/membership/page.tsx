import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Section } from "@/components/site/section";
import { Stepper } from "@/components/site/stepper";
import {
  membershipSteps,
  membershipNotes,
  householdMemberSimplifiedRegistration,
} from "@/content/membership";

export const metadata: Metadata = {
  title: "회원가입 안내",
  description: "입주민 회원가입 절차 5단계를 확인하세요.",
};

export default function MembershipPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Membership"
        title="회원가입 안내"
        description="커뮤니티센터 이용 전, 아래 순서대로 진행해 주시기 바랍니다."
      />

      <Section title="회원가입 절차">
        <Stepper steps={membershipSteps} />
        {membershipNotes.map((note, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            {note}
          </p>
        ))}
      </Section>

      <Section title={householdMemberSimplifiedRegistration.title}>
        <div className="rounded-md border border-gold/30 bg-gold-bg p-4 text-sm leading-relaxed text-foreground">
          {householdMemberSimplifiedRegistration.detail}
        </div>
      </Section>
    </div>
  );
}
