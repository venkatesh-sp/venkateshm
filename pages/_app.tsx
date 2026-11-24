import type { AppProps } from "next/app";
import { MotionConfig } from "motion/react";

import { Analytics } from "@/components/shared/analytics";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // "user" honours the OS reduced-motion setting for every motion component on the page.
  return (
    <MotionConfig reducedMotion="user">
      <Analytics />
      <Component {...pageProps} />
    </MotionConfig>
  );
}
