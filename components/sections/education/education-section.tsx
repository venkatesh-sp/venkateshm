"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { education } from "@/data/portfolio";
import { mapsUrl } from "@/lib/maps";
import { cn } from "@/lib/utils";

/** Campus photo from /public/schools. Falls back to a styled placeholder when the file is missing. */
function CampusPhoto({ src, institution }: { src?: string; institution: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/25 via-brand/10 to-secondary">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.18),transparent_55%)]"
        />
        <GraduationCap size={56} aria-hidden className="relative text-brand/70" />
        <span className="sr-only">Photo of {institution} coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${institution} campus`}
      fill
      unoptimized
      sizes="(min-width: 1024px) 60vw, 100vw"
      className="object-contain p-3 sm:p-4"
      onError={() => setFailed(true)}
    />
  );
}

export function EducationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = education[activeIndex];

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-10 border-t border-border py-10 sm:py-12"
    >
      <SectionHeading id="education-title" index="05" title="Education" icon={GraduationCap} />

      <div role="group" aria-label="Institutions" className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2">
        {education.map((entry, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={entry.degree}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative shrink-0 rounded-full border px-5 py-2.5 text-left text-[14px] font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring",
                selected
                  ? "border-transparent text-primary-foreground"
                  : "border-border bg-card/70 text-muted-foreground hover:border-brand/30 hover:text-foreground",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="education-tab"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10">{entry.institution}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={activeIndex}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-6 overflow-hidden rounded-3xl border border-border bg-card/85 shadow-sm"
        >
          <div className="relative h-72 w-full overflow-hidden bg-secondary sm:h-80">
            <CampusPhoto src={item.photo} institution={item.institution} />
            {activeIndex === 0 && (
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[12px] font-semibold text-brand shadow-sm">
                Highest qualification
              </span>
            )}
          </div>

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="min-w-0">
              <h3 className="m-0 text-[22px] font-semibold tracking-[-0.015em] sm:text-[26px]">{item.degree}</h3>
              <p className="m-0 mt-2 text-[16px] font-medium text-brand">{item.institution}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[12.5px] font-medium tabular-nums text-foreground/80">
                  <CalendarDays size={13} aria-hidden />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[12.5px] text-muted-foreground">
                  <MapPin size={13} aria-hidden />
                  {item.location}
                </span>
              </div>
            </div>

            {item.address && (
              <a
                href={mapsUrl(`${item.institution}, ${item.address}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4 text-[13.5px] leading-snug text-foreground/80 transition-colors hover:border-brand/40 md:max-w-[280px]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                  <MapPin size={17} aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Campus address</span>
                  {item.address}
                  <span className="mt-1 block text-[12.5px] font-medium text-brand group-hover:underline">
                    Open in Maps →
                  </span>
                </span>
              </a>
            )}
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
