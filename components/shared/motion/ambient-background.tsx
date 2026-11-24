"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const blobs = [
  {
    className: "-left-[12%] -top-[12%] h-[46vmax] w-[46vmax] bg-brand/10 dark:bg-brand/8",
    x: [0, 140, -40, 0],
    y: [0, 90, 170, 0],
    duration: 28,
  },
  {
    className: "-right-[14%] top-[28%] h-[38vmax] w-[38vmax] bg-[hsl(38_85%_60%/0.12)] dark:bg-[hsl(38_70%_50%/0.08)]",
    x: [0, -150, 60, 0],
    y: [0, -100, 40, 0],
    duration: 34,
  },
  {
    className:
      "bottom-[-20%] left-[22%] h-[42vmax] w-[42vmax] bg-[hsl(190_70%_60%/0.09)] dark:bg-[hsl(190_60%_45%/0.07)]",
    x: [0, 90, -110, 0],
    y: [0, -70, -130, 0],
    duration: 40,
  },
];

/**
 * Full-page backdrop: slowly drifting colour blobs over a faint dot grid.
 * Fixed behind everything, so it stays visible while the page scrolls.
 */
export function AmbientBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={cn("absolute rounded-full blur-3xl will-change-transform", blob.className)}
          animate={reduce ? undefined : { x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
