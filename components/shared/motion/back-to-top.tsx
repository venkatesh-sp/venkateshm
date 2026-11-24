"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { scrollToTop, useScrollInfo } from "@/lib/scroll";

/** Floating button that fades in after scrolling and returns the reader to the top. */
export function BackToTop() {
  const { top } = useScrollInfo();
  const reduce = useReducedMotion();
  const visible = top > 600;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollToTop(reduce ? "auto" : "smooth")}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowUp size={18} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
