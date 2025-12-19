"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Dashboard } from "@/data/dashboards";

interface DashboardCardProps {
  dashboard: Dashboard;
  index: number;
}

export default function DashboardCard({ dashboard, index }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative border-y shadow-xs  border-border/30 dark:border-[#333333]/50 hover:border-border dark:hover:border-[#333333] transition-all duration-300 overflow-hidden"
    >
      <div 
        className="absolute dark:opacity-[0.1] opacity-[0.07] inset-0 w-[20px] h-full border dark:border-[#333333] border-border"
        style={{
          backgroundImage: 'repeating-linear-gradient(-35deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 4px)'
        }}
      />
       <div 
        className="absolute dark:opacity-[0.1] opacity-[0.07]  w-[20px] right-0 h-full border dark:border-[#333333] border-border"
        style={{
          backgroundImage: 'repeating-linear-gradient(-35deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 4px)'
        }}
      />
      {/* Image Container - image smaller and centered so pattern is visible */}
      <div className="relative aspect-video overflow-hidden  flex items-center justify-center">
        <div className="relative w-4/5 h-4/5 min-w-[140px] min-h-[120px] ">
          <Image
            src={dashboard.image}
            alt={dashboard.title}
            fill
            className="object-cover transition-transform opacity-80 shadow-lg duration-500 group-hover:scale-105 dark:opacity-70 rounded-md"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Hover Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={dashboard.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-muted backdrop-blur-sm  rounded-[5px] hover:bg-background transition-colors"
            aria-label={`View ${dashboard.title} live`}
          >
            <ArrowUpRight className="h-4 w-4 text-foreground" />
          </a>
     
        </div>
      </div>
    
      
    </motion.div>
  );
}