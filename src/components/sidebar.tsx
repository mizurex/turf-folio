"use client";

import { externalLinks, navigation, NavigationItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { memo, useMemo } from "react";
import { SidebarLink } from "./sidebar-link";
import { useMobile } from "@/providers/mobile-provider";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface SidebarProps {
  className?: string;
}

const NavSection = memo(
  ({
    item,
    level = 0,
    onNavigate,
  }: {
    item: NavigationItem;
    level?: number;
    onNavigate?: () => void;
  }) => {
    if (item.href === "#" && item.children) {
      return (
        <div className="space-y-3">
          {level === 0 && (
            <h3 className="px-3 text-sm font-bold text-muted-foreground tracking-wider uppercase">
              {item.title}
            </h3>
          )}
          <div className={cn("space-y-1", level > 0 && "pl-2")}>
            {item.children.map((child) => {
              if (child.href === "#" && child.children) {
                return (
                  <div key={child.title} className="space-y-1">
                    <h4 className="px-3 text-sm font-semibold text-muted-foreground tracking-wider">
                      {child.title}
                    </h4>
                    {child.children.map((grandchild) => (
                      <NavSection
                        key={grandchild.title}
                        item={grandchild}
                        level={level + 2}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </div>
                );
              }
              return (
                <SidebarLink
                  key={child.title}
                  item={child}
                  level={level + 1}
                  onNavigate={onNavigate}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return <SidebarLink item={item} level={level} onNavigate={onNavigate} />;
  },
);
NavSection.displayName = "NavSection";

export function Sidebar({ className }: SidebarProps) {
  const { isMobile, isMobileMenuOpen, closeMobileMenu } = useMobile();

  const sidebarContent = useMemo(() => {
    const topNavItems = navigation.filter(
      (item) => item.href === "/" || item.href === "/blog"
    );
    
    const introItems = navigation.filter(
      (item) => item.href === "/components"
    );

    const componentItems = navigation.filter(
      (item) => item.href === "#" && item.children
    );

    return (
      <>
        <div className="flex flex-col flex-grow font-satoshi">
          <nav className="flex flex-col space-y-4">
            {topNavItems.length > 0 && (
              <div className="space-y-1">
                {topNavItems.map((item) => (
                  <NavSection
                    key={item.title}
                    item={item}
                    onNavigate={closeMobileMenu}
                  />
                ))}
              </div>
            )}

            {/* Divider */}
            {topNavItems.length > 0 && (introItems.length > 0 || componentItems.length > 0) && (
              <div className="border-t border-border/100" />
            )}

            {/* Introduction section - highlighted */}
            {introItems.length > 0 && (
              <div className="space-y-1">
                {introItems.map((item) => (
                  <NavSection
                    key={item.title}
                    item={item}
                    onNavigate={closeMobileMenu}
                  />
                ))}
              </div>
            )}

            {/* Components section */}
            {componentItems.map((item) => (
              <NavSection
                key={item.title}
                item={item}
                onNavigate={closeMobileMenu}
              />
            ))}

            {/* Render external links */}
            <div className="pt-4 border-t border-border/40 md:hidden">
              {externalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent text-sm text-muted-foreground hover:text-accent-foreground transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.icon === "github" && (
                    <FaGithub className="h-4 w-4" />
                  )}
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </>
    );
  }, [closeMobileMenu]);

  // Memoize desktop sidebar - only render on desktop
  const desktopSidebar = useMemo(() => {
    if (isMobile) return null;

    return (
      <aside
        className={cn(
          "fixed top-14 bottom-0 left-0 w-64 z-40",
          "bg-background border-r border-primary/10",
          "p-4 overflow-y-auto flex flex-col",
          className,
        )}
      >
        {sidebarContent}
      </aside>
    );
  }, [isMobile, sidebarContent, className]);

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={closeMobileMenu}
        />
      )}

      {/* Desktop sidebar - always visible */}
      {desktopSidebar}

      {/* Mobile sidebar - slides in when open */}
      {isMobile && isMobileMenuOpen && (
        <aside
          className={cn(
            "fixed top-13 bottom-0 left-0 w-64 z-40",
            "bg-background border-r border-border/40",
            "p-4 overflow-y-auto flex flex-col",
            "transform transition-transform duration-200",
            className,
          )}
        >
          {sidebarContent}
        </aside>
      )}
    </>
  );
}
