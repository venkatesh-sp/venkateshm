"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Brand } from "@/components/shared/brand";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";

/** Mobile and tablet header; the desktop sidebar takes over at large widths. */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur lg:hidden">
      <nav className="shell flex h-16 items-center justify-between" aria-label="Main navigation">
        <Brand />

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-16 flex-col gap-1 border-b border-border bg-background px-4 py-4 shadow-sm",
            menuOpen ? "flex" : "hidden",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-2.5 text-[15px] text-foreground hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a href={`mailto:${profile.email}`} onClick={closeMenu}>
              Contact
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
