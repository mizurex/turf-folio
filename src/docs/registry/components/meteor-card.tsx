"use client";
import Meteors from "@/components/ui-components/meteor";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const instrumentSans = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MeteorCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );
  const number = 50;
  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);
  return (
    <div className="w-[250px] h-[400px] rounded-md overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={image}
          alt="meteor"
          className="size-full object-cover rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <Meteor meteorStyles={meteorStyles} />
      <motion.h1
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white z-20 text-center",
          instrumentSans.className
        )}
      >
        {title}
      </motion.h1>
    </div>
  );
}

function Meteor({ meteorStyles }: { meteorStyles: React.CSSProperties[] }) {
  return (
    <div className="relative">
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute left-1/2 top-100 rounded-full size-0.5 rotate-[200deg] animate-meteor-effect bg-slate-500"
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[8px] -translate-y-1/2 bg-gradient-to-r from-slate-700 via-[#cacaca] to-transparent" />
        </span>
      ))}
    </div>
  );
}
