"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/lib/navigation";

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
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive
          ? "bg-accent text-accent-foreground font-semibold"
          : "text-muted-foreground",
        level > 0 && "pl-6"
      )}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
    >
      {item.title}
    </Link>
  );
}

