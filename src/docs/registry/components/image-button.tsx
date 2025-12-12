"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageContextBadgeProps {
  image: {
    dataUrl: string;
  };
  displayName: string;
  isExpanded: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

const ImageContextBadge = ({
  image,
  displayName,
  isExpanded,
  onToggle,
  onRemove,
}: ImageContextBadgeProps) => (
  <div className="relative group flex-shrink-0">
    {/* Main button */}
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      className={cn(
        "relative flex items-center overflow-hidden cursor-pointer rounded-xl",
        "bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950",
        "border border-zinc-200/80 dark:border-zinc-800/80",
        "shadow-[0_1px_3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)]",
        "dark:shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
        "hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]",
        "dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]",
        "transition-all duration-300 ease-out",
        isExpanded ? "w-44 h-32 p-0" : "w-40 h-10 pl-1.5 pr-9 gap-2.5"
      )}
    >
      {/* Expanded image view */}
      {isExpanded && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-200",
            "opacity-100 delay-75"
          )}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={image.dataUrl}
              alt={displayName}
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <div className="absolute bottom-2 left-3 right-3">
              <p className="text-white text-xs font-medium truncate drop-shadow-xl">
                {displayName}
              </p>
            </div>
          </div>
        </div>
      )}

      {!isExpanded && (
        <span
        className={cn(
          "flex items-center gap-2.5 text-sm truncate leading-none transition-all duration-200",    
        )}
      >
        <span className="relative flex-shrink-0 w-7 h-7 rounded-[8px] overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 bg-background" >
          <Image
            src={image.dataUrl}
            alt={displayName}
            fill
            unoptimized
            className="object-cover"
          />
        </span>
        <span className="truncate font-medium text-zinc-700 dark:text-zinc-300">
          {displayName}
        </span>
      </span>
 
      )}
     
    </button>

    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
      className={cn(
        "absolute z-10 flex items-center justify-center transition-all duration-200 ease-out cursor-pointer",
        isExpanded ? "-right-1 -top-1" : "-right-5 top-2.5",
        "w-5 h-5 rounded-full",
        "bg-zinc-900 dark:bg-zinc-100",
        "text-zinc-100 dark:text-zinc-900",
        "border-2 border-white dark:border-zinc-900",
        "shadow-md",
        "hover:bg-red-500 hover:border-red-500 dark:hover:bg-red-500 dark:hover:border-red-500",
        "hover:text-white dark:hover:text-white",
        "hover:scale-110 active:scale-95",
        "transition-all duration-200 ease-out",
        "opacity-0 group-hover:opacity-100"
      )}
      aria-label={`Remove ${displayName}`}
    >
      <X className="w-3 h-3" strokeWidth={2.5} />
    </button>
  </div>
);

export default ImageContextBadge;