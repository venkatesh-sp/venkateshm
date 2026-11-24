"use client";

import { useEffect, useState } from "react";

/**
 * On desktop the sidebar layout makes <main id="scroll-root"> the scroll container;
 * on mobile the window scrolls. These helpers hide that difference from the UI.
 */
export function getScroller(): HTMLElement | Window {
  const main = document.getElementById("scroll-root");
  if (main && main.scrollHeight > main.clientHeight && getComputedStyle(main).overflowY !== "visible") {
    return main;
  }
  return window;
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  const scroller = getScroller();
  if (scroller instanceof HTMLElement) {
    scroller.scrollTo({ top: 0, behavior });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

export interface ScrollInfo {
  top: number;
  /** 0 at the top, 1 at the bottom. */
  ratio: number;
}

/** Live scroll position of whichever element is scrolling the page. */
export function useScrollInfo(): ScrollInfo {
  const [info, setInfo] = useState<ScrollInfo>({ top: 0, ratio: 0 });

  useEffect(() => {
    const update = () => {
      const scroller = getScroller();
      if (scroller instanceof HTMLElement) {
        const max = scroller.scrollHeight - scroller.clientHeight;
        setInfo({ top: scroller.scrollTop, ratio: max > 0 ? scroller.scrollTop / max : 0 });
      } else {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setInfo({ top: window.scrollY, ratio: max > 0 ? window.scrollY / max : 0 });
      }
    };

    const main = document.getElementById("scroll-root");
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    main?.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      main?.removeEventListener("scroll", update);
    };
  }, []);

  return info;
}
