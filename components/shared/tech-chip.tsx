import { Badge, type BadgeProps } from "@/components/ui/badge";
import { brandLogos } from "@/data/brand-logos";
import { brandIcons, conceptIcons, fallbackTechIcon } from "@/data/tech-icons";
import { cn } from "@/lib/utils";

interface TechChipProps extends Omit<BadgeProps, "children"> {
  name: string;
  /** Icon size in pixels. */
  iconSize?: number;
}

/** Logos are passed as data URIs, not injected as markup, so no HTML is parsed at runtime. */
function svgSource(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Badge pairing a technology with its brand logo (or a concept icon when no logo exists). */
export function TechChip({ name, iconSize = 14, className, variant, ...props }: TechChipProps) {
  const brand = brandIcons[name] ? brandLogos[brandIcons[name]] : undefined;
  const ConceptIcon = conceptIcons[name] ?? fallbackTechIcon;

  return (
    <Badge variant={variant} className={cn("gap-1.5", className)} {...props}>
      {brand ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- data URI logos, not optimisable */}
          <img
            src={svgSource(brand.light)}
            alt=""
            aria-hidden
            width={iconSize}
            height={iconSize}
            className="shrink-0 dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- data URI logos, not optimisable */}
          <img
            src={svgSource(brand.dark)}
            alt=""
            aria-hidden
            width={iconSize}
            height={iconSize}
            className="hidden shrink-0 dark:inline-block"
          />
        </>
      ) : (
        <ConceptIcon size={iconSize} aria-hidden className="shrink-0 opacity-80" />
      )}
      {name}
    </Badge>
  );
}
