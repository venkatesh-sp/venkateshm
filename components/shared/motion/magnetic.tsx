"use client";

import * as React from "react";
import { motion, useSpring } from "motion/react";

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element follows the pointer (0 to 1). */
  strength?: number;
}

/** Pulls its child gently toward the mouse pointer; springs back on leave. */
export function Magnetic({ children, strength = 0.25 }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 250, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 250, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-block"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
