"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarDays, FolderGit2, Layers } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechChip } from "@/components/shared/tech-chip";
import { projects } from "@/data/portfolio";
import type { Project, ProjectPoint } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const ALL = "All";

/** One numbered component or step of a project's architecture. */
function StepCard({ point, number }: { point: ProjectPoint; number: number }) {
  return (
    <li className="group/step rounded-xl border border-border bg-background/70 p-5 transition-colors duration-300 hover:border-brand/40">
      <div className="flex items-center gap-3">
        <span className="grid h-6 min-w-[1.5rem] place-items-center rounded-md bg-secondary px-1.5 text-[11px] font-semibold tabular-nums text-muted-foreground transition-colors group-hover/step:bg-brand-soft group-hover/step:text-brand">
          {String(number).padStart(2, "0")}
        </span>
        {point.label && <p className="m-0 text-[14px] font-semibold text-foreground">{point.label}</p>}
      </div>
      {point.text && <p className="m-0 mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{point.text}</p>}
      {point.bullets && (
        <ul className="mb-0 mt-3 list-disc space-y-2 pl-4 text-[13px] leading-relaxed text-muted-foreground">
          {point.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-card/85 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5 sm:p-7",
        featured ? "border-brand/35 md:col-span-2" : "border-foreground/15",
      )}
    >
      {/* Accent line that grows across the top edge on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand via-brand/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex min-h-[4.75rem] flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            aria-hidden
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand/50 text-[18px] font-semibold text-primary-foreground shadow-md shadow-brand/20"
          >
            {project.title.charAt(0)}
          </span>
          <div>
            <h3 className="m-0 text-[22px] font-semibold leading-tight tracking-[-0.015em]">{project.title}</h3>
            <p className="m-0 mt-1 text-[14px] font-medium text-brand">{project.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {featured && (
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-foreground">
              Featured
            </span>
          )}
          <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[12.5px] font-medium tabular-nums text-muted-foreground">
            <CalendarDays size={13} aria-hidden />
            {project.period}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-0.5 text-[11.5px] font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-0 mt-5 min-h-[6rem] text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-5 flex min-h-[4rem] flex-wrap content-start gap-2">
        {project.stack.map((tech) => (
          <TechChip key={tech} name={tech} variant="outline" />
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline"
            >
              {link.label}
              <ArrowUpRight size={14} aria-hidden />
            </a>
          ))}
        </div>
      )}

      {project.points.length > 0 && (
        <div className="mt-7 border-t border-border pt-6">
          <Disclosure
            closedLabel={featured ? "View architecture" : "View details"}
            openLabel="Hide details"
            defaultOpen={index === 0}
          >
            <ol className={cn("grid gap-4", featured && "sm:grid-cols-2")}>
              {project.points.map((point, pointIndex) => (
                <StepCard key={pointIndex} point={point} number={pointIndex + 1} />
              ))}
            </ol>
          </Disclosure>
        </div>
      )}
    </article>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState(ALL);

  const filters = useMemo(() => [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags)))], []);
  const visible = active === ALL ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-10 border-t border-border py-10 sm:py-12"
    >
      <SectionHeading id="projects-title" index="03" title="Projects" icon={FolderGit2} />

      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = filter === active;
            const count = filter === ALL ? projects.length : projects.filter((p) => p.tags.includes(filter)).length;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(filter)}
                className="relative rounded-full px-4 py-1.5 text-[13px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10 flex items-center gap-2 transition-colors",
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[11px] tabular-nums",
                      isActive ? "bg-primary-foreground/15" : "bg-secondary",
                    )}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="m-0 flex items-center gap-2 text-[13px] text-muted-foreground">
          <Layers size={15} aria-hidden className="text-brand" />
          {visible.length} of {projects.length} projects shown
        </p>
      </div>

      <motion.div layout className="grid items-start gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className={cn(project === projects[0] && active === ALL && "md:col-span-2")}
            >
              <ProjectCard project={project} index={index} featured={project === projects[0] && active === ALL} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
