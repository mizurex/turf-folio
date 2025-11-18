"use client";

import { CheckIcon, CircleXIcon, Copy } from "lucide-react";
import React, { useOptimistic, useTransition } from "react";

import { cn } from "@/lib/utils";
import {motion} from "motion/react";
export function CopyButton({
  value,
  className,
  ...props
}: {
  value: string;
  className?: string;
}) {
  const [state, setState] = useOptimistic<"idle" | "copied" | "failed">("idle");
  const [, startTransition] = useTransition();

  return (
    <motion.button
    whileHover={{
      scale: 1.02,
    }}
      className={cn("z-10 absolute top-4 right-4 cursor-pointer", className)}
      onClick={() => {
        startTransition(async () => {
          try {
            await navigator.clipboard.writeText(value);
            setState("copied");
          } catch {
            setState("failed");
          }
          await new Promise((resolve) => setTimeout(resolve, 2000));
        });
      }}
      {...props}
    >
      {state === "idle" ? (
        <Copy className="size-3" />
      ) : state === "copied" ? (
        <CheckIcon className="size-3" />
      ) : state === "failed" ? (
        <CircleXIcon className="size-3" />
      ) : null}
      <span className="sr-only">Copy</span>
    </motion.button>
  );
}
