import { DeveloperArt } from "@/components/shared/developer-art";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
}

/** Header logo: the animated developer mark beside the name. */
export function Brand({ className }: BrandProps) {
  return (
    <a href="#home" className={cn("flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.01em]", className)}>
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-secondary/70 ring-1 ring-border">
        <DeveloperArt idPrefix="brand" viewBox="30 50 260 260" className="h-full w-full scale-110" />
      </span>
      {profile.name}
    </a>
  );
}
