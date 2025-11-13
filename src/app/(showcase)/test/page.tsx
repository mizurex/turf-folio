"use client";
import Meteors from "@/components/ui-components/meteor";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import LineTop from "@/components/svg/line-right";
import LineLeft from "@/components/svg/line-left";

const instrumentSans = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

// page.tsx
export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen w-full relative">
      <div className="py-20">
        <LineTop/>
      </div>
      
      <LineLeft/>
 
    </div>
   
  );
}