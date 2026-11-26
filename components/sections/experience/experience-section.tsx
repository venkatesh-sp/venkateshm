"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, CalendarDays, CheckCircle2, ExternalLink, Globe, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { mapsUrl } from "@/lib/maps";

/** Company logo on a white tile, so logos stay readable in light and dark themes. */
function LogoTile({ src, company, className }: { src?: string; company: string; className?: string }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-xl bg-white px-3 shadow-sm ring-1 ring-black/5",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={`${company} logo`}
          width={240}
          height={40}
          unoptimized
          style={{ height: 30, width: "auto" }}
        />
      ) : (
        <span className="text-[13px] font-semibold text-slate-700">{company}</span>
      )}
    </span>
  );
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const job = experience[activeIndex];
  const current = activeIndex === 0;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-10 border-t border-border py-10 sm:py-12"
    >
      <SectionHeading id="experience-title" index="04" title="Professional Experience" icon={Briefcase} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-8">
        {/* Company switcher: a row of tabs on phones, a stacked list on desktop */}
        <div
          role="group"
          aria-label="Companies"
          className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {experience.map((item, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={item.company}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative min-w-[250px] shrink-0 rounded-2xl border p-4 text-left transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring lg:min-w-0",
                  selected
                    ? "border-brand/40 bg-card shadow-lg shadow-black/5"
                    : "border-border bg-card/60 hover:border-brand/25 hover:bg-card/90",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="experience-tab"
                    aria-hidden
                    className="absolute inset-y-4 -left-px w-1 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <LogoTile src={item.logo} company={item.company} className="h-12 w-full justify-start" />
                <p className="m-0 mt-4 text-[15px] font-semibold leading-snug">{item.role}</p>
                <p className="m-0 mt-1 flex items-center gap-1.5 text-[12.5px] tabular-nums text-muted-foreground">
                  <CalendarDays size={12} aria-hidden />
                  {item.period}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected role */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative isolate overflow-hidden rounded-3xl border border-border bg-card/85 p-6 shadow-sm sm:p-8"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-brand/10 [mask-image:radial-gradient(closest-side,black_35%,transparent)]"
            />

            <header className="flex flex-col gap-5 border-b border-border pb-6">
              <div className="flex flex-wrap items-center gap-2">
                {current && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-[12px] font-semibold text-brand">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                    </span>
                    Current role
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[12.5px] font-medium tabular-nums text-foreground/80">
                  <CalendarDays size={13} aria-hidden />
                  {job.period}
                </span>
                {job.address ? (
                  <a
                    href={mapsUrl(`${job.company}, ${job.address}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[12.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                  >
                    <MapPin size={13} aria-hidden />
                    {job.location}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[12.5px] text-muted-foreground">
                    <MapPin size={13} aria-hidden />
                    {job.location}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <LogoTile src={job.logo} company={job.company} className="h-16 min-w-[220px] justify-start" />
                <div className="min-w-0">
                  <h3 className="m-0 text-[24px] font-semibold tracking-[-0.02em] sm:text-[28px]">{job.role}</h3>
                  <p className="m-0 mt-1 text-[16px] font-medium text-brand">{job.company}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                    {job.website && (
                      <a
                        href={job.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-foreground/80 underline-offset-4 hover:text-brand hover:underline"
                      >
                        <Globe size={14} aria-hidden />
                        {job.website.replace(/^https?:\/\//, "")}
                        <ExternalLink size={12} aria-hidden />
                      </a>
                    )}
                    {job.address && (
                      <a
                        href={mapsUrl(`${job.company}, ${job.address}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex max-w-full items-start gap-1.5 text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
                      >
                        <MapPin size={14} aria-hidden className="mt-[3px] shrink-0" />
                        <span>{job.address}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </header>

            <div className="mt-6 flex items-center justify-between">
              <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Key contributions
              </p>
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[12px] font-semibold tabular-nums text-foreground/70">
                {job.highlights.length}
              </span>
            </div>

            <ul className="m-0 mt-4 grid list-none gap-3 p-0 sm:grid-cols-2">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 rounded-2xl bg-background/60 p-4 text-[14.5px] leading-relaxed text-foreground/80 ring-1 ring-border"
                >
                  <CheckCircle2 size={18} aria-hidden className="mt-[2px] shrink-0 text-brand" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
