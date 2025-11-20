"use client";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function DashedButton({
  text,
  className,
  children,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "relative group p-3 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 border border-border/20 border-neutral-400 flex items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      <div className="absolute top-0 right-0 -translate-y-0 -translate-x-0 w-0 h-0 border-r-2 opacity-0 border-t-2 border-primary group-hover:w-[8px] group-hover:h-[8px] group-hover:opacity-100 transition-all duration-300 delay-200 ease-out" />

      <div className="absolute -translate-y-0 -translate-x-0 bottom-0 left-0 w-0 h-0 border-l-2 opacity-0 border-b-2 border-primary group-hover:w-[8px] group-hover:h-[8px] group-hover:opacity-100 transition-all duration-300 delay-200 ease-out" />
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {children}
      </span>
    </button>
  );
}
