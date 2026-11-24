"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeading } from "@/components/shared/section-heading";
import { education } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Education as a milestone track, most recent first.
 * Phones: a vertical rail with each qualification beside it. Desktop: a horizontal track with three columns.
 */
export function EducationSection() {
  // education data is newest first, so the most recent qualification leads the timeline.
  const milestones = education;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-10 border-t border-b border-border py-16"
    >
      <SectionHeading id="education-title" index="05" title="Education" icon={GraduationCap} />

      <div className="relative">
        {/* Desktop: horizontal line joining the nodes. */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-brand via-brand to-border md:block"
        />
        {/* Phone: vertical rail through the node column. */}
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-6 left-6 top-6 w-px origin-top bg-gradient-to-b from-brand via-brand/50 to-border md:hidden"
        />

        <ol className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {milestones.map((item, index) => {
            const isLatest = index === 0;
            return (
              <motion.li
                key={item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.15, ease: "easeOut" }}
                className="relative pl-16 md:flex md:flex-col md:pl-0"
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 z-10 grid h-12 w-12 place-items-center rounded-full border-2 bg-background md:relative md:left-auto md:top-auto",
                    isLatest ? "border-brand bg-brand text-brand-foreground" : "border-brand/60 text-brand",
                  )}
                >
                  <GraduationCap size={20} />
                </span>

                <article className="rounded-2xl border border-border bg-card/85 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 sm:p-6 md:mt-5 md:flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-[12px] font-semibold tabular-nums tracking-[0.1em] text-brand">
                      {item.period}
                    </span>
                    {isLatest && (
                      <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                        Highest
                      </span>
                    )}
                  </div>
                  <h3 className="m-0 mt-3 text-[17px] font-semibold leading-snug tracking-[-0.01em] sm:text-[18px]">
                    {item.degree}
                  </h3>
                  <p className="m-0 mt-2 text-[14px] font-medium leading-snug text-foreground/80">{item.institution}</p>
                  <p className="m-0 mt-3 flex items-start gap-1.5 text-[13px] text-muted-foreground">
                    <MapPin size={13} aria-hidden className="mt-[3px] shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
