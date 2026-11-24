"use client";

import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const bulletList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const bulletItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-10 border-t border-border py-16">
      <SectionHeading id="experience-title" index="04" title="Professional Experience" icon={Briefcase} />

      <ol className="space-y-8">
        {experience.map((job, index) => {
          const current = index === 0;
          return (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="grid gap-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8"
            >
              <div className="md:pt-7 md:text-right">
                <p className="m-0 flex items-center gap-2 text-[13px] font-semibold tabular-nums text-muted-foreground md:justify-end">
                  <CalendarDays size={14} aria-hidden />
                  {job.period}
                </p>
                {current && (
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-[12px] font-semibold text-brand">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                    </span>
                    Current role
                  </span>
                )}
                <p className="m-0 mt-3 flex items-center gap-1.5 text-[13px] text-muted-foreground md:justify-end">
                  <MapPin size={13} aria-hidden />
                  {job.location}
                </p>
              </div>

              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border bg-card/85 backdrop-blur-sm p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 sm:p-7",
                  current ? "border-brand/30" : "border-border",
                )}
              >
                {current && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand/60 to-transparent"
                  />
                )}

                <h3 className="m-0 text-[20px] font-semibold tracking-[-0.015em]">{job.role}</h3>
                <p className="m-0 mt-1 text-[15px] font-medium text-brand">{job.company}</p>

                <motion.ul
                  variants={bulletList}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-6 space-y-3.5 border-t border-border pt-6"
                >
                  {job.highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      variants={bulletItem}
                      className="flex gap-3 text-[14.5px] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
