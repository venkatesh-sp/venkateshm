"use client";

import { motion, type Variants } from "motion/react";
import { Code2 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { TechChip } from "@/components/shared/tech-chip";
import { alsoComfortableWith, coreStack } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

/** One colour family per core stack. Class names are written out in full so Tailwind picks them up. */
const accents = [
  {
    text: "text-teal-600 dark:text-teal-400",
    medallion: "from-teal-500 to-teal-700 shadow-teal-600/30",
    glow: "bg-teal-500/20",
    span: "lg:col-span-3",
  },
  {
    text: "text-amber-600 dark:text-amber-400",
    medallion: "from-amber-400 to-orange-600 shadow-amber-600/30",
    glow: "bg-amber-500/20",
    span: "lg:col-span-3",
  },
  {
    text: "text-sky-600 dark:text-sky-400",
    medallion: "from-sky-500 to-blue-700 shadow-sky-600/30",
    glow: "bg-sky-500/20",
    span: "lg:col-span-2",
  },
  {
    text: "text-violet-600 dark:text-violet-400",
    medallion: "from-violet-500 to-fuchsia-700 shadow-violet-600/30",
    glow: "bg-violet-500/20",
    span: "lg:col-span-2",
  },
  {
    text: "text-emerald-600 dark:text-emerald-400",
    medallion: "from-emerald-500 to-green-700 shadow-emerald-600/30",
    glow: "bg-emerald-500/20",
    span: "md:col-span-2 lg:col-span-2",
  },
];

/** Concentric orbit rings with a slowly turning dashed ring, drawn behind each tile's content. */
function OrbitRings({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={cn("pointer-events-none absolute -right-14 -top-14 h-56 w-56", className)}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="36" strokeOpacity="0.45" strokeWidth="1" />
      <circle cx="100" cy="100" r="66" strokeOpacity="0.32" strokeWidth="1" />
      <circle cx="100" cy="100" r="96" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="100" cy="100" r="84" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="3 9">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="40s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="184" cy="100" r="4" fill="currentColor" stroke="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-10 border-t border-border py-10 sm:py-12">
      <SectionHeading id="skills-title" index="02" title="Skills" icon={Code2} />

      <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Core stack</p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-6"
      >
        {coreStack.map((group, index) => {
          const accent = accents[index % accents.length];
          return (
            <motion.article
              key={group.title}
              variants={item}
              className={cn(
                "group relative isolate overflow-hidden rounded-3xl border border-border bg-card/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-7",
                accent.span,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -bottom-16 -left-10 -z-10 h-40 w-40 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125",
                  accent.glow,
                )}
              />
              <OrbitRings className={accent.text} />

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105",
                    accent.medallion,
                  )}
                >
                  <group.icon size={24} aria-hidden />
                </span>
                <span className={cn("text-[28px] font-semibold tabular-nums leading-none", accent.text)}>
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mb-0 mt-6 text-[20px] font-semibold tracking-[-0.01em]">{group.title}</h3>

              <div className="relative mt-5 flex flex-wrap gap-2.5">
                {group.items.map((name) => (
                  <TechChip
                    key={name}
                    name={name}
                    variant="outline"
                    className="bg-background/70 transition-colors duration-200 hover:border-brand/50 hover:text-foreground"
                  />
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="mt-12">
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
