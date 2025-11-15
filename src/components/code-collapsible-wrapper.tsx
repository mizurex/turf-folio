"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import * as MX from 'mx-icons'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  return (
    <Collapsible
      className={cn("group/collapsible not-prose relative mt-3", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <div className="absolute top-9 right-10 w-fit z-10 flex items-center justify-center gap-2 w-[70%] cursor-pointer group-data-[state=closed]/collapsible:hidden">
        <MX.ArrowUp1Linear
  size={15}
 color="#8d91a0"
/>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        className="overflow-hidden data-[state=closed]:max-h-80 data-[state=closed]:rounded-b-lg [&>figure]:my-0"
        forceMount
      >
        {children}
      </CollapsibleContent>

      <CollapsibleTrigger className=" absolute inset-x-0 bottom-0 flex h-24 items-end justify-center rounded-b-lg bg-linear-to-t from-code from-25% to-transparent pb-4 text-sm font-medium text-muted-foreground group-data-[state=open]/collapsible:hidden">
      <MX.ArrowDownLinear
      className="cursor-pointer"
   size={15}
 color="#8d91a0"
/>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
