"use client";

import { useMobile } from "@/providers/mobile-provider";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export function ComponentsHeader() {
  const { isMobile, isMobileMenuOpen, toggleMobileMenu } = useMobile();

  // Only render header on mobile
  const mobileHeader = useMemo(() => {
    if (!isMobile) return null;

    return (
      <header className="sticky top-0 h-8 z-50 bg-background">
        <div className="flex justify-between items-center w-full px-4 h-full">
         
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
    );
  }, [isMobile, isMobileMenuOpen, toggleMobileMenu]);

  return mobileHeader;
}

