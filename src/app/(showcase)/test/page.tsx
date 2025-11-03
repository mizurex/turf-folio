"use client"
import { cn } from "@/lib/utils";
import { CircleDot, Dot, Plus } from "lucide-react";
import { motion } from "motion/react";

export default function Button(){
  return(
   <div className="flex items-center justify-center h-screen w-full">
      <motion.button
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={cn("relative px-3 py-1 border border-dashed border-neutral-400 border-[1px] text-black dark:text-white cursor-pointer select-none font-light")}
      >
        <motion.span
          variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8, transition: { duration: 0.18 } } }}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-xs font-medium"
        >
          <Dot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1, transition: { duration: 0.22, delay: 0.04 } } }}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-xs font-medium"
        >
          <CircleDot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8, transition: { duration: 0.18 } } }}
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium"
        >
          <Dot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1, transition: { duration: 0.22, delay: 0.04 } } }}
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium"
        >
          <CircleDot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8, transition: { duration: 0.18 } } }}
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-xs font-medium"
        >
          <Dot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1, transition: { duration: 0.22, delay: 0.04 } } }}
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-xs font-medium"
        >
          <CircleDot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 1, scale: 1 }, hover: { opacity: 0, scale: 0.8, transition: { duration: 0.18 } } }}
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-xs font-medium"
        >
          <Dot className="size-4" />
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1, transition: { duration: 0.22, delay: 0.04 } } }}
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-xs font-medium"
        >
          <CircleDot className="size-4" />
        </motion.span>
        Hover Me
      </motion.button>
     </div>
    )
}