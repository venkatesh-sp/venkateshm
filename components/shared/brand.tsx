import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
}

export function Brand({ className }: BrandProps) {
  return (
    <a href="#home" className={cn("text-[16px] font-semibold tracking-[-0.01em]", className)}>
      {profile.name}
    </a>
  );
}
