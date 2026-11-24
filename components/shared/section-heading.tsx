import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  id: string;
  /** Number shown before the title, e.g. "01". */
  index: string;
  title: string;
  icon: LucideIcon;
}

/** Editorial section heading: brand icon tile, numbered label, title and a hairline rule. */
export function SectionHeading({ id, index, title, icon: Icon }: SectionHeadingProps) {
  return (
    <header className="mb-10 flex items-center gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand/15">
        <Icon size={18} aria-hidden />
      </span>
      <span className="text-[12px] font-semibold tracking-[0.18em] text-brand">{index}</span>
      <h2 id={id} className="text-[24px] font-semibold tracking-[-0.02em] text-foreground sm:text-[28px]">
        {title}
      </h2>
      <span aria-hidden className="hidden h-px flex-1 bg-border sm:block" />
    </header>
  );
}
