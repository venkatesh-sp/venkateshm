"use client";

import { motion, type Variants } from "motion/react";
import { Code2 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { TechChip } from "@/components/shared/tech-chip";
import { alsoComfortableWith, headlineSkills, skillGroups } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-10 border-t border-border py-16">
      <SectionHeading id="skills-title" index="02" title="Skills" icon={Code2} />

      <div className="mb-12">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Core stack</p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {headlineSkills.map((skill) => (
            <motion.div key={skill} variants={item}>
              <TechChip
                name={skill}
                iconSize={18}
                className="px-4 py-2.5 text-[14px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.article
            key={group.title}
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/85 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-transform duration-500 group-hover:scale-150"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand/50 text-primary-foreground shadow-md shadow-brand/20">
                  <group.icon size={18} aria-hidden />
                </span>
                <h3 className="m-0 text-[16px] font-semibold">{group.title}</h3>
              </div>
              <span className="rounded-full border border-border px-2.5 py-0.5 text-[12px] font-medium tabular-nums text-muted-foreground">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2.5">
              {group.items.map((name) => (
                <TechChip
                  key={name}
                  name={name}
                  variant="outline"
                  className="transition-colors duration-200 hover:border-brand/50 hover:text-foreground"
                />
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-14">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Also comfortable with
        </p>
        <div className="marquee relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max gap-3">
            {[...alsoComfortableWith, ...alsoComfortableWith].map((name, index) => (
              <TechChip
                key={`${name}-${index}`}
                name={name}
                variant="outline"
                className="shrink-0 px-3.5 py-1.5 text-[13px]"
                aria-hidden={index >= alsoComfortableWith.length || undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
