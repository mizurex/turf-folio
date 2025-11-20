"use client"
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  className?: string;
  children?: React.ReactNode;
}

export default function BouncyButton({ className, children, ...props }: ButtonProps) {
   return(
    <button
     className={cn(
        "relative flex items-center gap-2 justify-center py-2 px-6 cursor-pointer text-black dark:text-white overflow-hidden hover:scale-110 hover:rotate-1 active:scale-95 active:rotate-0 transition-all duration-300 ease-in-out",
        className
     )}
     {...props}
    >
      <span className="relative z-10 flex items-center gap-2 font-mono text-lg font-light">
        {children}
      </span>
      <span className="absolute inset-0 p-[1px] bg-gradient-to-r from-[#d890fc] via-[#cacaca] via-[#f8fafc] to-[#d890fc] [background-size:200%_200%] animate-[gradient-move_1s_ease-in-out_infinite] -z-10">
        <span className="block h-full w-full bg-white dark:bg-neutral-900" />
      </span>
    </button>
   )
}