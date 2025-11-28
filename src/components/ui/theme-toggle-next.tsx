"use client";

import { MoonStar } from "lucide-react";
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
      className={`shadow-md rounded-full  cursor-pointer ${className || ""}`}
    >
    
     {current === "dark"?<span className=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" className ="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg></span>: <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" className ="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg></span>}
        
      
    </button>
  );
}



function SunIcon({props}:{props:React.SVGProps<SVGSVGElement>}){
  return(
    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" {...props}><path d="M21 2L20 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 2L4 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 16L20 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16L4 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 18H15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 21H14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
  )
}

