"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggleNext } from "@/components/ui/theme-toggle-next";
import Mascot from "@/components/ui/mascot";
import { Menu } from "lucide-react";
import { useMobile } from "@/providers/mobile-provider";
import { usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const { toggleMobileMenu } = useMobile();
  const pathname = usePathname();
  

  const isComponentsPage = pathname?.startsWith('/components');

  return (
    <div className="sticky top-0 z-50 border-b dark:border-[#333333] border-border bg-background font-mono">
      <div className="flex items-center justify-between max-w-3xl w-full mx-auto px-6 py-2">
        <Link href="/" className="flex items-center">
          <Mascot />
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link href="/components" className="text-sm hover:text-primary transition-colors font-sans font-medium text-muted-foreground dark:text-muted-foreground">
            Components
          </Link>
          <Link href="/blog" className="text-sm hover:text-primary transition-colors font-sans font-medium text-muted-foreground dark:text-muted-foreground">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggleNext />
          
          {isComponentsPage && (
            <button
              type="button"
              className="md:hidden p-2"
              aria-label="Toggle sidebar"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          
          {!isComponentsPage && (
            <button
              type="button"
              className="md:hidden p-2"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg 
                className="h-5 w-5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pb-4 border-t">
          <nav className="flex flex-col gap-3 pt-4">
            <Link
              href="/components"
              className="text-sm hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/blog"
              className="text-sm hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </nav>

      
        </div>
      </div>
    </div>
  );
}
