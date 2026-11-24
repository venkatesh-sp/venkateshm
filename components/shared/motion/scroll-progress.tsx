"use client";

import { useScrollInfo } from "@/lib/scroll";

/** Thin brand bar across the top of the viewport showing how far the page has been read. */
export function ScrollProgress() {
  const { ratio } = useScrollInfo();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full origin-left bg-brand transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${ratio})` }}
      />
    </div>
  );
}
