"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

//credits: manu paaji
interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
     
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="relative">
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute left-1/2 top-100 rounded-full size-0.5 rotate-[200deg] animate-meteor-effect bg-slate-500",
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[8px] -translate-y-1/2 bg-gradient-to-r from-slate-700 via-[#cacaca] to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;