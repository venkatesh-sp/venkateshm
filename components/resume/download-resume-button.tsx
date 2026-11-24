"use client";

import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

import { RippleButton, type RippleButtonProps } from "@/components/shared/motion/ripple-button";
import { profile } from "@/data/site";

type DownloadResumeButtonProps = Omit<RippleButtonProps, "onClick" | "children" | "href">;

/** Builds the resume PDF in the browser from the portfolio data and downloads it. */
export function DownloadResumeButton(props: DownloadResumeButtonProps) {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  async function download() {
    if (busy) return;
    setBusy(true);
    setFailed(false);
    try {
      // Loaded on demand so the PDF engine stays out of the first page load.
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/resume/resume-document"),
      ]);
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${profile.name.replace(/\s+/g, "-")}-Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <RippleButton {...props} onClick={download} disabled={busy}>
      {busy ? <Loader2 size={16} aria-hidden className="animate-spin" /> : <Download size={16} aria-hidden />}
      {busy ? "Preparing PDF…" : failed ? "Try again" : "Download resume"}
    </RippleButton>
  );
}
