"use client"
import { motion } from "motion/react";

interface ButtonProps {
  text?: string;
}

export default function BouncyButton({ text }: ButtonProps){
   return(
    <motion.button
     whileHover={{ scale: 1.09, rotate: 1.25 }}
     whileTap={{ scale: 0.95, rotate: 0.75 }}
     className="relative flex items-center gap-2 justify-center py-2 px-2 cursor-pointer text-black dark:text-white overflow-hidden"
    >
  <span className="relative z-10 flex items-center gap-2 font-mono text-lg font-light"> {text ? text : "Hover me"} </span>
  <span
  className="absolute inset-0 p-[1px] bg-gradient-to-r from-[#d890fc] via-[#cacaca] via-[#f8fafc]  to-[#d890fc] [background-size:200%_200%] animate-[gradient-move_1s_ease-in-out_infinite]">
    <span className="block h-full w-full bg-white dark:bg-neutral-900" />
  </span>
</motion.button>
   )
}