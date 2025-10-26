"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGhost, FaSun, FaUmbrellaBeach } from "react-icons/fa";

export function ThemeToggleNext({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const label = current === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`rounded-md border px-3 py-1.5 text-sm cursor-pointer ${className || ""}`}
    >
    
     {current === "dark"?<FaUmbrellaBeach className="w-4 h-4" />: <FaGhost className="w-4 h-4" />}
        
      
    </button>
  );
}


