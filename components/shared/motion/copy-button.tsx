"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { RippleButton, type RippleButtonProps } from "@/components/shared/motion/ripple-button";

interface CopyButtonProps extends Omit<RippleButtonProps, "onClick" | "href" | "children"> {
  value: string;
  label: string;
  copiedLabel?: string;
}

/** Copies a value to the clipboard and swaps its icon and label to confirm. */
export function CopyButton({ value, label, copiedLabel = "Copied!", ...buttonProps }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return; // Clipboard blocked (insecure context or permissions); nothing to confirm.
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <RippleButton {...buttonProps} onClick={copy}>
      <span className="relative grid h-4 w-4 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 grid place-items-center"
          >
            {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          </motion.span>
        </AnimatePresence>
      </span>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </RippleButton>
  );
}
