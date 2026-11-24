"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { type VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number; size: number };

export interface RippleButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/** Button (or link) with a Material-style ripple that expands from the pointer on press. */
export function RippleButton({
  href,
  variant,
  size,
  type = "button",
  disabled,
  className,
  children,
  onClick,
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const isOnSurface = variant === "outline" || variant === "ghost";
  const rippleTone = isOnSurface ? "bg-foreground/15" : "bg-primary-foreground/30";

  function spawnRipple(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const size = Math.max(rect.width, rect.height) * 2.4;
    setRipples((list) => [...list, { id, x: event.clientX - rect.left, y: event.clientY - rect.top, size }]);
    window.setTimeout(() => setRipples((list) => list.filter((r) => r.id !== id)), 700);
  }

  const classes = cn(buttonVariants({ variant, size }), "relative isolate overflow-hidden", className);

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            aria-hidden
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              marginLeft: -ripple.size / 2,
              marginTop: -ripple.size / 2,
            }}
            className={cn("pointer-events-none absolute z-0 rounded-full", rippleTone)}
          />
        ))}
      </AnimatePresence>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} onPointerDown={spawnRipple}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick} onPointerDown={spawnRipple}>
      {content}
    </button>
  );
}
