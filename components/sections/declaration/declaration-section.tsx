import { PenLine } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { declaration } from "@/data/portfolio";

export function DeclarationSection() {
  return (
    <section id="declaration" aria-labelledby="declaration-title" className="scroll-mt-10 py-16">
      <SectionHeading id="declaration-title" index="06" title="Declaration" icon={PenLine} />
      <blockquote className="m-0 border-l-2 border-brand pl-6 text-[17px] leading-[1.8] text-foreground/80">
        <p className="mb-0">{declaration}</p>
      </blockquote>
    </section>
  );
}
