"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage can be unavailable (private mode); the switch still works for this visit.
  }
}

/**
 * Floating light/dark switch pinned to the top-right corner so it is always reachable.
 * A segmented pill with a sliding knob under the active option.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    applyTheme(next);
  }

  const option = (value: Theme, label: string, Icon: typeof Sun) => {
    const active = theme === value;
    return (
      <button
        type="button"
        onClick={() => choose(value)}
        aria-pressed={active}
        aria-label={label}
        title={label}
        className={cn(
          "relative z-10 grid h-6 w-6 place-items-center rounded-full transition-colors duration-300",
          active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Icon size={12} aria-hidden />
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn(
        "relative grid grid-cols-2 items-center rounded-full border border-border bg-background/80 p-0.5 shadow-md shadow-black/5",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute bottom-0.5 left-0.5 top-0.5 w-6 rounded-full bg-primary shadow-sm transition-transform duration-300 ease-out",
          theme === "dark" && "translate-x-6",
        )}
      />
      {option("light", "Light theme", Sun)}
      {option("dark", "Dark theme", Moon)}
    </div>
  );
}
