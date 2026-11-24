import { ArrowRight, Mail } from "lucide-react";

import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { DownloadResumeButton } from "@/components/resume/download-resume-button";
import { CountUp } from "@/components/shared/motion/count-up";
import { Magnetic } from "@/components/shared/motion/magnetic";
import { RippleButton } from "@/components/shared/motion/ripple-button";
import { TypingText } from "@/components/shared/motion/typing-text";
import { heroRoles, heroStats } from "@/data/portfolio";
import { profile } from "@/data/site";

export function HeroSection({ hasPhoto = false }: { hasPhoto?: boolean }) {
  return (
    <div className="mt-8 border-b border-border pb-16 max-[1023px]:mt-4">
      <section
        id="home"
        className="animate-fade-up relative isolate overflow-hidden rounded-3xl border border-border bg-background/80 px-6 backdrop-blur-sm pb-16 pt-16 sm:px-10 lg:px-14 max-[1023px]:pt-12"
      >
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <p className="mb-6 flex items-center gap-3 text-[13px] font-medium text-muted-foreground">
              <span aria-hidden className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {profile.location} · 7+ years of experience
            </p>

            <h1 className="text-shimmer text-[clamp(28px,9vw,64px)] font-semibold leading-[1.05] tracking-[-0.03em] [overflow-wrap:anywhere]">
              {profile.name}
            </h1>

            <p className="mt-4 h-8 text-[20px] font-medium text-brand" aria-label={heroRoles.join(", ")}>
              <TypingText phrases={heroRoles} />
            </p>

            <p className="mt-5 max-w-[820px] text-[18px] leading-relaxed text-foreground/75">
              I build reliable web applications, APIs and cloud deployments with Python, Django and Next.js, taking
              systems from design to production.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <RippleButton href={`mailto:${profile.email}`}>
                  <Mail size={16} aria-hidden />
                  Get in touch
                </RippleButton>
              </Magnetic>
              <RippleButton href="#projects" variant="outline" className="bg-background/70 backdrop-blur">
                View projects
                <ArrowRight size={16} aria-hidden />
              </RippleButton>
              <DownloadResumeButton variant="outline" className="bg-background/70 backdrop-blur" />
            </div>
          </div>
          <div>
            <HeroVisual hasPhoto={hasPhoto} />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-background/80 p-6 backdrop-blur transition-colors hover:bg-background">
              <dd className="m-0 text-[28px] font-semibold tracking-[-0.02em] text-brand">
                <CountUp value={stat.value} />
              </dd>
              <dt className="mt-2 text-[13px] leading-snug text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
