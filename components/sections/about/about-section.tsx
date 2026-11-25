import { User } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { aboutParagraphs, professionalHighlights } from "@/data/portfolio";

import { AboutIllustration } from "@/components/sections/about/about-illustration";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-10 py-10 sm:py-12">
      <SectionHeading id="about-title" index="01" title="About" icon={User} />

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="max-w-[820px] space-y-5">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="m-0 text-[16px] leading-[1.8] text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
        <AboutIllustration className="mx-auto w-full max-w-[420px]" />
      </div>

      <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
        {professionalHighlights.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-border bg-card/85 p-5 backdrop-blur-sm last:sm:col-span-2 last:xl:col-span-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-black/5"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand/15">
              <item.icon size={17} aria-hidden />
            </span>
            <h3 className="m-0 mt-4 text-[15px] font-semibold">{item.title}</h3>
            <p className="m-0 mt-2 text-[14px] leading-relaxed text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
