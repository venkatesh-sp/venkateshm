import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface ProjectPoint {
  /** Optional bold lead-in, e.g. "Watcher" or "Converter". */
  label?: string;
  /** Plain description for a single point. */
  text?: string;
  /** Sub-points rendered as a nested list under the label. */
  bullets?: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  /** Filter categories shown as pills in the Projects section. */
  tags: string[];
  summary: string;
  points: ProjectPoint[];
  stack: string[];
  /** Optional live site and source links shown under the tech stack. */
  links?: { label: string; url: string }[];
}

export interface ExperienceItem {
  /** Logo in /public/logos, shown on a white tile. */
  logo?: string;
  website?: string;
  /** Street address, opened as a map pin. */
  address?: string;
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  /** Campus photo in /public/schools. A placeholder is shown when it is missing. */
  photo?: string;
  /** Street address, opened as a map pin. */
  address?: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Syntax-highlight tones are no longer used; kept out of the type model. */
