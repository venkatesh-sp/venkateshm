"use client";

import { useEffect, useState } from "react";
import { Briefcase, Circle, Code2, FolderGit2, GraduationCap, IdCard, Mail, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

import { navLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  About: IdCard,
  Skills: Code2,
  Projects: FolderGit2,
  Experience: Briefcase,
  Education: GraduationCap,
  Contact: Mail,
};

/** Desktop sidebar: identity and a scroll-tracked, icon-led section index. */
export function SiteSidebar() {
  const [active, setActive] = useState<string>(navLinks[0].href.slice(1));

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:overflow-hidden lg:py-12 lg:pl-[clamp(24px,3vw,48px)] lg:pr-6">
      <div>
        <a href="#home" className="block text-[26px] font-semibold leading-[1.15] tracking-[-0.02em]">
          {profile.name}
        </a>
        <p className="mb-0 mt-2 text-[14px] font-medium text-brand">{profile.title}</p>

        <nav aria-label="Section navigation" className="mt-12">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              const Icon = navIcons[link.label] ?? Circle;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-3 py-1.5 text-[14px] transition-colors",
                      isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn("h-px transition-all duration-300", isActive ? "w-6 bg-brand" : "w-3 bg-border")}
                    />
                    <motion.span
                      aria-hidden
                      initial={false}
                      animate={isActive ? { scale: [1, 1.18, 1], rotate: [0, -8, 0] } : { scale: 1, rotate: 0 }}
                      whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.12 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className={cn(
                        "grid h-7 w-7 place-items-center rounded-md transition-colors duration-300",
                        isActive
                          ? "bg-brand-soft text-brand ring-1 ring-brand/20"
                          : "bg-secondary/60 text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      <Icon size={15} />
                    </motion.span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
