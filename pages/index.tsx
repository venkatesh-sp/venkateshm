import fs from "node:fs";
import path from "node:path";

import type { GetStaticProps } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteSidebar } from "@/components/layout/site-sidebar";
import { Seo } from "@/components/shared/seo";
import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { EducationSection } from "@/components/sections/education/education-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { AmbientBackground } from "@/components/shared/motion/ambient-background";
import { BackToTop } from "@/components/shared/motion/back-to-top";
import { ScrollProgress } from "@/components/shared/motion/scroll-progress";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { profile } from "@/data/site";

interface HomeProps {
  hasPhoto: boolean;
}

/** Checks at build time whether the configured profile photo exists, so the server renders the right hero visual. */
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const hasPhoto = Boolean(profile.image) && fs.existsSync(path.join(process.cwd(), "public", profile.image));
  return { props: { hasPhoto } };
};

export default function Home({ hasPhoto }: HomeProps) {
  return (
    <>
      <Seo />

      <AmbientBackground />
      <ScrollProgress />
      <ThemeToggle className="fixed right-5 top-5 z-50 hidden lg:grid" />
      <SiteHeader />

      {/* Desktop: the sidebar is a full-height column and only <main> scrolls. */}
      <div className="page lg:grid lg:h-screen lg:grid-cols-[333px_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:overflow-hidden">
        <SiteSidebar />

        <main
          id="scroll-root"
          className="min-w-0 px-4 sm:px-6 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:px-[clamp(40px,5vw,96px)]"
        >
          <HeroSection hasPhoto={hasPhoto} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
          <SiteFooter />
        </main>
      </div>

      <BackToTop />
    </>
  );
}
