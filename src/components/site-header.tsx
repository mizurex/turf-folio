"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button2";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 border-b bg-background font-mono">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        <div className="flex items-center gap-4 ml-2 md:ml-20">
          <button
            type="button"
            className="md:hidden rounded-md px-2 py-1.5 text-sm hover:scale-105 transition-transform duration-200"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-5 bg-foreground transition-all" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground transition-all" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground transition-all" />
          </button>

          <nav className="hidden md:flex items-center gap-4">
            <button className="text-sm text-foreground hover:scale-110 transition-transform duration-200">
              <Link href="/components">Components</Link>
            </button>
            <button className="text-sm text-foreground hover:scale-110 transition-transform duration-200">
              <Link href="/blog">Blog</Link>
            </button>
          </nav>
        </div>

        <div className="hidden md:flex items-center justify-end pr-10 py-2 gap-3">
          <div className="flex items-center gap-2">
            <div className="flex justify-end">
              <div className="sm:flex items-center gap-2 justify-end w-fit border-b border-border">
                <Button className={cn({ "px-2": true })}>
                  <a
                    href="https://github.com/mizurex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                  >
                    <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
                  </a>
                </Button>

                <Button className={cn({ "px-2": true })}>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                  >
                    <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
                  </a>
                </Button>

                <Button className={cn({ "px-2": true })}>
                  <a
                    href="https://x.com/PotatoTurf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                  >
                    <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
                  </a>
                </Button>

                <Button className={cn({ "px-2": true })}>
                  <a
                    href="mailto:dhananjayadhal3@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                  >
                    <img src="/gmail.png" alt="Twitter" className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out",
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        )}
      >
        <div className="px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <Link
              href="/components"
              className="text-sm text-foreground hover:translate-x-0.5 transition-transform duration-200"
              onClick={() => setOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/blog"
              className="text-sm text-foreground hover:translate-x-0.5 transition-transform duration-200"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </nav>

          <div className="mt-4 flex items-center gap-2 border-t pt-4">
            <Button className={cn({ "px-2": true })}>
              <a
                href="https://github.com/mizurex"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
              >
                <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
              </a>
            </Button>
            <Button className={cn({ "px-2": true })}>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
              >
                <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
              </a>
            </Button>
            <Button className={cn({ "px-2": true })}>
              <a
                href="https://x.com/PotatoTurf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
              >
                <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
              </a>
            </Button>
            <Button className={cn({ "px-2": true })}>
              <a
                href="mailto:dhananjayadhal3@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
              >
                <img src="/gmail.png" alt="Twitter" className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
