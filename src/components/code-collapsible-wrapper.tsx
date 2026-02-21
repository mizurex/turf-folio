"use client";
import * as MX from 'mx-icons'
import { motion } from "motion/react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  return (
    <Collapsible
      className={cn("group/collapsible not-prose relative mt-3 ", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute px-2 py-2 bg-zinc-100 cursor-pointer shadow-sm dark:bg-zinc-700 rounded-full left-1/2 bottom-6 -translate-x-1/2 w-fit z-10 flex items-center justify-center gap-2 group-data-[state=closed]/collapsible:hidden">
          <MX.ArrowUp1Linear size={15} color="#8d91a0" />
        </motion.div>
      </CollapsibleTrigger>

      <CollapsibleContent
        className="overflow-hidden data-[state=closed]:max-h-80 data-[state=closed]:rounded-b-lg [&>figure]:my-0"
        forceMount
      >
        {children}
      </CollapsibleContent>

      <CollapsibleTrigger className=" absolute cursor-pointer inset-x-0 bottom-0 flex h-24 items-end justify-center rounded-b-lg bg-linear-to-t from-code from-25% to-transparent pb-4 text-sm font-medium text-muted-foreground group-data-[state=open]/collapsible:hidden">
      <motion.div className=" ">
      Expand
      </motion.div>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
