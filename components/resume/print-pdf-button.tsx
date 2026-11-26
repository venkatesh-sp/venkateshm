"use client";

import { useState } from "react";
import { Loader2, Printer } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Prints the same PDF that the download button produces, so printed output matches the downloaded file.
 * The tab is opened synchronously (to avoid pop-up blocking) and then pointed at the generated PDF.
 */
export function PrintPdfButton({ className }: { className?: string }) {
  const [busy, setBusy] = useState(false);

  async function print() {
    if (busy) return;
    setBusy(true);
    const tab = window.open("", "_blank");
    try {
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/resume/resume-document"),
      ]);
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      if (tab) {
        tab.location.href = url;
      } else {
        window.open(url, "_blank");
      }
    } catch {
      tab?.close();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={print}
      disabled={busy}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] font-medium transition-colors hover:bg-secondary disabled:opacity-60",
        className,
      )}
    >
      {busy ? <Loader2 size={15} className="animate-spin" aria-hidden /> : <Printer size={15} aria-hidden />}
      {busy ? "Preparing…" : "Print"}
    </button>
  );
}
