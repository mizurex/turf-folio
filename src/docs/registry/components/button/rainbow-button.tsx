"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function RainbowGlowButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center cursor-pointer gap-2 rounded-full px-[2px] py-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className
      )}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full opacity-60 blur-[8px]"
        style={{
          backgroundImage:
            "conic-gradient(from 0deg,rgb(4, 230, 7),rgb(235, 3, 53),rgb(7, 10, 195),rgb(33, 253, 114),rgb(255, 171, 110))",
        }}
      />

      <span className="relative inline-flex items-center gap-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 px-5 py-2.5 shadow-lg">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.04),_transparent)]" />
        <span className="relative">{children}</span>
      </span>
    </motion.button>
  );
}

export default RainbowGlowButton;
