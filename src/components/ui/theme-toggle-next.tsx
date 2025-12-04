"use client";

import { Eclipse, Moon, MoonStar, SunDimIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FaGhost, FaSun, FaUmbrellaBeach } from "react-icons/fa";

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
      className={`p-[3px] rounded-full border border-border  dark:bg-neutral-800 cursor-pointer ${className || ""}`}
    >

      {current === "dark" ? <span className=""><SunDimIcon className="size-5" /></span> : <span className=""><Moon className="size-5" /></span>}


    </button>
  );
}




