import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface DisclosureProps {
  closedLabel: string;
  openLabel: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/** Show/hide panel with an animated chevron and label swap. */
export function Disclosure({ closedLabel, openLabel, defaultOpen = false, children }: DisclosureProps) {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="group h-8 gap-1.5 px-3 text-[13px]">
          <span className="group-data-[state=open]:hidden">{closedLabel}</span>
          <span className="hidden group-data-[state=open]:inline">{openLabel}</span>
          <ChevronDown
            size={15}
            aria-hidden
            className="transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pt-4">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
