"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import DashboardCard from "./dashboard-card";
import { dashboardsData } from "@/data/dashboards";

export default function Dashboards() {
  const [showAll, setShowAll] = useState(false);
  const hasMore = dashboardsData.length > 2;

  return (
    <div className="px-2 py-[4px] space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dashboardsData.slice(0, 2).map((dashboard, index) => (
          <DashboardCard key={index} dashboard={dashboard} index={index} />
        ))}
        
        <AnimatePresence mode="wait">
          {showAll && dashboardsData.slice(2).map((dashboard, index) => (
            <motion.div
              key={index + 2}
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto", 
                marginBottom: 16,
                transition: { 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.08 
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0, 
                marginBottom: 0,
                transition: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                  delay: (dashboardsData.slice(2).length - 1 - index) * 0.05
                }
              }}
              style={{ overflow: "hidden" }}
            >
              <DashboardCard dashboard={dashboard} index={index + 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center pt-2">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-satoshi text-muted-foreground  rounded-[5px] transition-all duration-200 hover:bg-muted/30 dark:hover:bg-muted/5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
     
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>
      )}
    </div>
  );
}