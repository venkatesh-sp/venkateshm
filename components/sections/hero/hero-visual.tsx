"use client";

import Image from "next/image";
import { useState } from "react";

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
      <svg viewBox="0 0 320 300" className="relative h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="dev-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#13243b" />
            <stop offset="1" stopColor="#0b1626" />
          </linearGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="160" cy="272" rx="118" ry="11" fill="#0F1F33" opacity="0.1" />

        {/* Desk */}
        <rect x="40" y="226" width="240" height="10" rx="5" fill="#64748B" />
        <rect x="60" y="236" width="8" height="36" rx="3" fill="#475569" />
        <rect x="252" y="236" width="8" height="36" rx="3" fill="#475569" />

        {/* Developer, seated behind the screen */}
        <g className="dev-bob">
          <rect x="100" y="150" width="84" height="80" rx="26" fill="#0F766E" />
          <rect x="150" y="128" width="12" height="26" rx="4" fill="#E8B796" />
          <circle cx="156" cy="118" r="26" fill="#F4C9A6" />
          <path
            d="M130 116 C129 92 145 86 158 87 C173 87 185 98 182 116 C178 104 168 100 156 101 C143 101 134 106 130 116 Z"
            fill="#1E293B"
          />
          <path
            d="M129 118 Q127 90 156 90 Q185 90 183 118"
            fill="none"
            stroke="#334155"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <rect x="124" y="112" width="9" height="15" rx="4" fill="#334155" />
          <rect x="179" y="112" width="9" height="15" rx="4" fill="#334155" />
          <circle className="dev-blink" cx="147" cy="120" r="2.6" fill="#1E293B" />
          <circle className="dev-blink" cx="165" cy="120" r="2.6" fill="#1E293B" />
          <circle cx="141" cy="130" r="3.5" fill="#F08C8C" opacity="0.45" />
          <circle cx="171" cy="130" r="3.5" fill="#F08C8C" opacity="0.45" />
          <path d="M149 131 Q156 136 163 131" fill="none" stroke="#9A4D3A" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Screen */}
        <rect x="104" y="152" width="104" height="58" rx="6" fill="#334155" />
        <rect x="110" y="158" width="92" height="46" rx="3" fill="url(#dev-screen)" />
        <rect
          className="dev-code"
          x="116"
          y="164"
          width="52"
          height="4"
          rx="2"
          fill="#5EEAD4"
          style={{ animationDelay: "0s" }}
        />
        <rect
          className="dev-code"
          x="122"
          y="173"
          width="38"
          height="4"
          rx="2"
          fill="#FBBF24"
          style={{ animationDelay: "0.5s" }}
        />
        <rect
          className="dev-code"
          x="122"
          y="182"
          width="60"
          height="4"
          rx="2"
          fill="#A5B4FC"
          style={{ animationDelay: "1s" }}
        />
        <rect
          className="dev-code"
          x="116"
          y="191"
          width="30"
          height="4"
          rx="2"
          fill="#5EEAD4"
          style={{ animationDelay: "1.5s" }}
        />
        <rect className="dev-caret" x="150" y="189" width="2" height="8" fill="#F8FAFC" />

        {/* Laptop base */}
        <path d="M96 210 L212 210 L204 221 L104 221 Z" fill="#94A3B8" />
        <rect x="140" y="212" width="36" height="4" rx="2" fill="#64748B" />

        {/* Coffee cup with steam */}
        <rect x="236" y="212" width="16" height="14" rx="3" fill="#F8FAFC" stroke="#334155" strokeWidth="1.5" />
        <path
          d="M241 204 Q238 199 241 194"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          className="dev-steam"
        />
        <path
          d="M247 204 Q244 198 247 192"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeLinecap="round"
          className="dev-steam dev-steam-2"
        />

        {/* Floating code symbols */}
        <text x="30" y="108" fontSize="26" fontFamily="monospace" fontWeight="700" fill="#0F766E" className="dev-float">
          {"</>"}
        </text>
        <text
          x="262"
          y="140"
          fontSize="22"
          fontFamily="monospace"
          fontWeight="700"
          fill="#D97706"
          className="dev-float dev-float-2"
        >
          {"{ }"}
        </text>
        <text
          x="70"
          y="170"
          fontSize="18"
          fontFamily="monospace"
          fontWeight="700"
          fill="#64748B"
          className="dev-float dev-float-3"
        >
          {"( )"}
        </text>

        {/* Sparkles */}
        <circle cx="52" cy="80" r="3" fill="#0F766E" className="dev-pulse" />
        <circle cx="282" cy="82" r="2.5" fill="#D97706" className="dev-pulse dev-pulse-2" />
        <circle cx="268" cy="196" r="2" fill="#0F766E" className="dev-pulse dev-pulse-3" />
      </svg>
    </div>
  );
}
