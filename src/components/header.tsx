"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button2";
import { cn } from "@/lib/utils";
import { ThemeToggleNext } from "@/components/ui/theme-toggle-next";
import Mascot from "@/components/ui/mascot";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 border-b bg-background/60 backdrop-blur font-mono">
      <div className="flex items-center justify-between px-4 md:px-6 py-2">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Mascot size={30}/>
          </Link>
          
          <nav className="hidden md:flex items-center gap-3 ml-6">
            <Link href="/components" className="text-sm hover:text-primary transition-colors">
              Components
            </Link>
            <Link href="/blog" className="text-sm hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/mizurex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/PotatoTurf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
            </a>
            <a
              href="mailto:dhananjayadhal3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/gmail.png" alt="Email" className="h-4 w-4" />
            </a>
          </div>
          
          <ThemeToggleNext />
          
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
        </div>
      </div>

      {/* Mobile dropdown */}
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

          <div className="mt-4 flex items-center gap-3 border-t pt-4">
            <a
              href="https://github.com/mizurex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/PotatoTurf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
            </a>
            <a
              href="mailto:dhananjayadhal3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src="/gmail.png" alt="Email" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
