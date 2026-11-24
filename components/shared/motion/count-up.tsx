"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  /** Display value such as "7+" or "3". Non-numeric values are shown as-is. */
  value: string;
  duration?: number;
  className?: string;
}

/** Counts up to a numeric value the first time it scrolls into view. */
export function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? 1 : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState<number | null>(target);
  const started = useRef(false);

  useEffect(() => {
    if (target === null || !inView || started.current) return;
    started.current = true;
    if (reduce) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(latest),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduce]);

  const shown = target === null || current === null ? value : `${current.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
