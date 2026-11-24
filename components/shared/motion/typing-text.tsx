"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface TypingTextProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

/** Types out each phrase, holds, erases, then moves to the next. Starts fully written for SSR and reduced motion. */
export function TypingText({ phrases, typeSpeed = 70, deleteSpeed = 38, pause = 1700, className }: TypingTextProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = phrases[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === full) delay = pause;
    if (deleting && text === "") delay = 350;

    const timer = window.setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, phrases, reduce, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {reduce ? phrases[0] : text}
      <motion.span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-current align-baseline"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
