"use client";
import Meteors from "@/components/ui-components/meteor";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const instrumentSans = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MeteorCard({ image, title }: { image: string, title: string }) {
  return (
    <div className="w-[250px] h-[400px] rounded-md overflow-hidden relative">
     <div className="absolute top-0 left-0 w-full h-full">
       <img src={image} alt="meteor" className="size-full object-cover rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
     </div>
   <Meteors number={50} />
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
   className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white z-20 text-center", instrumentSans.className)}>{title}</motion.h1>
 </div>
  );
}