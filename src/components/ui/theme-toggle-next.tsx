"use client";

import { Eclipse, Moon, MoonStar, SunDimIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

export function ThemeToggleNext({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const label = current === "dark" ? "Light" : "Dark";

  const handleThemeToggle = () => {
    // Check if browser supports View Transition API
    if (!document.startViewTransition) {
      setTheme(current === "dark" ? "light" : "dark");
      return; // Exit early for old browsers
    }

    // Use View Transition API for smooth animation
    document.startViewTransition(() => {
      setTheme(current === "dark" ? "light" : "dark");
    });
  };

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      className={`p-[3px] bg-tan-primary/10 shadow-sm rounded-[5px] text-muted-foreground hover:text-foreground cursor-pointer ${className || ""}`}
    >

      <span className="shadow-xl">
        {current === "dark" ? (
          <SunDimIcon className="size-4 hover:[animation:spin_0.8s_linear] hover:text-primary" />
        ) : (
          <Moon className="size-4 shadow-xl hover:text-primary" />
        )}
        <style>
          {`@keyframes spin { to { transform: rotate(360deg); } }`}
        </style>
      </span>


    </button>
  );
}




