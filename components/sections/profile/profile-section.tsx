import { IdCard } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { profileSummary } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section id="profile" aria-labelledby="profile-title" className="scroll-mt-10 py-16">
      <SectionHeading id="profile-title" index="01" title="Profile" icon={IdCard} />
      <p className="text-[17px] leading-[1.8] text-foreground/80">{profileSummary}</p>
    </section>
  );
}
