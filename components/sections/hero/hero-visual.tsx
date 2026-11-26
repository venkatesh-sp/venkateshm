"use client";

import Image from "next/image";
import { useState } from "react";

import { DeveloperArt } from "@/components/shared/developer-art";
import { profile } from "@/data/site";

/**
 * Hero visual: the profile photo when it exists, otherwise an animated developer.
 * `hasPhoto` is decided at build time (the server output matches the real choice); `onError` covers a photo removed later.
 */
export function HeroVisual({ hasPhoto }: { hasPhoto: boolean }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return hasPhoto && !photoFailed ? (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl border border-border shadow-xl shadow-black/5 xl:max-w-none">
      <Image
        src={profile.image}
        alt={`${profile.name}, ${profile.title}`}
        fill
        priority
        sizes="(min-width: 1280px) 340px, 280px"
        className="object-cover"
        onError={() => setPhotoFailed(true)}
      />
    </div>
  ) : (
    <AnimatedDeveloper />
  );
}

/** Animated illustration of a developer typing at a laptop with code scrolling on the screen. Pure SVG + CSS. */
function AnimatedDeveloper() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[280px] xl:max-w-none"
      role="img"
      aria-label="Animated illustration of a developer coding at a laptop"
    >
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-gradient-to-br from-brand/20 via-brand/5 to-transparent blur-2xl"
      />
      <DeveloperArt idPrefix="hero" />
    </div>
  );
}
