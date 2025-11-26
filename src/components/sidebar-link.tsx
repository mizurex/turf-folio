"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/lib/navigation";
import { AnimatePresence, motion } from "motion/react";

interface SidebarLinkProps {
  item: NavigationItem;
  level?: number;
  onNavigate?: () => void;
}

export function SidebarLink({ item, level = 0, onNavigate }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center relative w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "text-muted-foreground",
          
        level > 0 && "pl-6"
      )}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
    >
      {isActive &&(
        <AnimatePresence 
        initial={false}
        >
          <motion.span
            key="line"
            className="absolute -left-[18px] top-0 bottom-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <svg
            width="4"
            height="20"
            viewBox="0 0 4 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C2.20914 0 4 1.79086 4 4V16C4 18.2091 2.20914 20 0 20V0Z"
              fill="#000000"
            />
          </svg>
        </motion.span>

        </AnimatePresence>
          
      )}
      {item.title}
    </Link>
  );
}

