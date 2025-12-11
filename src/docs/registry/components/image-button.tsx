"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon, X } from "lucide-react";

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
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={cn(
          "relative flex items-center rounded-lg border overflow-hidden",
          "border-border bg-background hover:bg-muted cursor-pointer",
          "transition-[width,height,padding] duration-200 ease-in-out",
          isExpanded ? "w-40 h-28 p-0" : "w-32 h-9 pl-3 pr-8 gap-2",
        )}
      >
        {isExpanded && (
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-150",
              "opacity-100 delay-100",
            )}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.dataUrl}
                alt={displayName}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1 left-2 right-2 text-white text-xs font-medium truncate">
                {displayName}
              </div>
            </div>
          </div>
        )}
        <span
          className={cn(
            "flex items-center gap-1.5 text-sm text-foreground truncate leading-none transition-opacity duration-150",
            isExpanded ? "opacity-0" : "opacity-100 delay-100",
          )}
        >
          <ImageIcon className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{displayName}</span>
        </span>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute -top-1 -right-1 w-5 h-5 bg-background border border-border text-muted-foreground rounded-full flex items-center justify-center hover:bg-muted hover:text-foreground transition-colors shadow-sm z-10"
        aria-label={`Remove ${displayName}`}
      >
        <X className="w-3 h-3" />
      </button>
      
    </div>
  );

export default ImageContextBadge;