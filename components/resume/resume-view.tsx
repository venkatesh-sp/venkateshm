"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, ExternalLink, Github, Globe, Mail, MapPin, Phone } from "lucide-react";

import { DownloadResumeButton } from "@/components/resume/download-resume-button";
import { PrintPdfButton } from "@/components/resume/print-pdf-button";
import { mapsUrl } from "@/lib/maps";
import { cn } from "@/lib/utils";
import { experience, education, coreStack, projects, profileParagraphs } from "@/data/portfolio";
import { profile, siteUrl, socialProfiles } from "@/data/site";

const websiteLabel = siteUrl.replace(/^https?:\/\//, "");

/** Small uppercase heading with a rule, used for each resume section. */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0 print:mt-7 print:break-inside-avoid">
      <h2 className="mb-5 flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">
        {title}
        <span aria-hidden className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}

function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-[12.5px] text-foreground/80 print:border-slate-300 print:bg-white print:text-slate-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ResumeView() {
  return (
    <div className="min-h-screen bg-muted/40 print:bg-white">
      {/* Toolbar: hidden when printing */}
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 print:hidden">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <PrintPdfButton />
            <DownloadResumeButton />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 print:max-w-none print:p-0">
        <article className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-12 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          {/* Header */}
          <header className="border-b border-border pb-8 print:pb-5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-brand print:text-[11px]">Resume</p>
            <h1 className="mt-3 text-[clamp(32px,6vw,48px)] font-semibold leading-[1.05] tracking-[-0.03em] print:text-[30px]">
              {profile.name}
            </h1>
            <p className="mt-2 text-[18px] font-medium text-brand print:text-[14px]">{profile.title}</p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-foreground/80 print:mt-3 print:text-[12px]">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-brand">
                  <Mail size={15} aria-hidden className="text-brand" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 hover:text-brand">
                  <Phone size={15} aria-hidden className="text-brand" />
                  {profile.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={15} aria-hidden className="text-brand" />
                {profile.location}
              </li>
              <li>
                <a href={siteUrl} className="inline-flex items-center gap-2 hover:text-brand">
                  <Globe size={15} aria-hidden className="text-brand" />
                  {websiteLabel}
                </a>
              </li>
              {socialProfiles.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-brand"
                  >
                    <Github size={15} aria-hidden className="text-brand" />
                    {url.replace(/^https?:\/\/(www\.)?/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <Section title="Profile">
            <div className="space-y-4">
              {profileParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="m-0 text-[16px] leading-[1.85] text-foreground/85 print:text-[12px] print:leading-[1.6]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <Section title="Core stack">
            <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
              {coreStack.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border bg-background/60 p-5 print:border-slate-300 print:bg-white"
                >
                  <h3 className="m-0 text-[15px] font-semibold">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Professional experience">
            <div className="space-y-8 print:space-y-5">
              {experience.map((job) => (
                <div
                  key={job.company + job.period}
                  className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 print:grid-cols-[150px_minmax(0,1fr)] print:gap-5 print:break-inside-avoid"
                >
                  <div className="text-[13px] text-muted-foreground print:text-[11px]">
                    <p className="m-0 inline-flex items-center gap-2 font-semibold tabular-nums text-foreground/80">
                      <CalendarDays size={13} aria-hidden />
                      {job.period}
                    </p>
                    <p className="m-0 mt-2 inline-flex items-center gap-2">
                      <MapPin size={13} aria-hidden />
                      {job.location}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      {job.logo && (
                        <span className="grid h-10 shrink-0 place-items-center rounded-lg bg-white px-2 ring-1 ring-black/5 print:ring-slate-300">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={120}
                            height={20}
                            unoptimized
                            style={{ height: 20, width: "auto" }}
                          />
                        </span>
                      )}
                      <div>
                        <h3 className="m-0 text-[17px] font-semibold print:text-[14px]">{job.role}</h3>
                        <p className="m-0 mt-0.5 text-[14px] font-medium text-brand print:text-[12px]">{job.company}</p>
                      </div>
                    </div>
                    {job.website && (
                      <p className="m-0 mt-2 text-[13px]">
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-brand"
                        >
                          <Globe size={13} aria-hidden />
                          {job.website.replace(/^https?:\/\//, "")}
                        </a>
                      </p>
                    )}
                    <ul className="m-0 mt-4 list-none space-y-2.5 p-0 print:mt-2 print:space-y-1">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5 text-[14.5px] leading-[1.7] text-foreground/80 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand print:text-[12px] print:leading-[1.55]"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-6 print:space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-border p-6 print:break-inside-avoid print:rounded-none print:border-slate-300 print:p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="m-0 text-[17px] font-semibold print:text-[14px]">{project.title}</h3>
                    <span className="text-[13px] font-medium tabular-nums text-muted-foreground print:text-[11px]">
                      {project.period}
                    </span>
                  </div>
                  <p className="m-0 mt-1 text-[14px] font-medium text-brand print:text-[12px]">{project.subtitle}</p>
                  <p className="m-0 mt-3 text-[14.5px] leading-[1.7] text-foreground/80 print:mt-2 print:text-[12px] print:leading-[1.55]">
                    {project.summary}
                  </p>

                  {project.points.length > 0 && (
                    <ul className="m-0 mt-4 list-none space-y-2 p-0 print:mt-2 print:space-y-1">
                      {project.points.map((point) =>
                        point.text ? (
                          <li
                            key={point.label ?? point.text}
                            className="relative pl-5 text-[14px] leading-[1.65] text-foreground/80 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand print:text-[11.5px]"
                          >
                            {point.label && <span className="font-semibold text-foreground">{point.label}: </span>}
                            {point.text}
                          </li>
                        ) : null,
                      )}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-2 print:mt-3">
                    {project.stack.map((tech) => (
                      <Chip key={tech} className="text-[12px]">
                        {tech}
                      </Chip>
                    ))}
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center gap-1 text-[13px] font-medium text-brand hover:underline print:hidden"
                      >
                        {link.label}
                        <ExternalLink size={12} aria-hidden />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <div className="space-y-5 print:space-y-3">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="grid gap-1 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 print:grid-cols-[150px_minmax(0,1fr)] print:gap-5 print:break-inside-avoid"
                >
                  <p className="m-0 text-[13px] font-semibold tabular-nums text-muted-foreground print:text-[11px]">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="m-0 text-[16px] font-semibold print:text-[13px]">{item.degree}</h3>
                    <p className="m-0 mt-0.5 text-[14px] text-foreground/80 print:text-[12px]">{item.institution}</p>
                    {item.address ? (
                      <a
                        href={mapsUrl(`${item.institution}, ${item.address}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-brand print:text-[11px]"
                      >
                        <MapPin size={13} aria-hidden />
                        {item.address}
                      </a>
                    ) : (
                      <p className="m-0 mt-1 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground print:text-[11px]">
                        <MapPin size={13} aria-hidden />
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <footer className="mt-12 border-t border-border pt-6 text-center text-[12.5px] text-muted-foreground print:mt-8">
            {profile.name} · {websiteLabel}
          </footer>
        </article>
      </main>
    </div>
  );
}
