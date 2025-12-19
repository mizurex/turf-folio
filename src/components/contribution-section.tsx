import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Pulse from "./pulse";
import * as MX from "mx-icons";
import { cn } from "@/lib/utils";

interface ContributionItem {
  title: string;
  link: string;
  description: string;
  year: string;
}

interface ContributionSectionProps {
  title: string;
  sectionId: string;
  items: ContributionItem[];
  isOpen: boolean;
  onToggle: () => void;
  openItems: { [key: string]: boolean };
  onToggleItem: (itemId: string) => void;
  iconColor?: string;
  useCustomIcon?: boolean;
}

export function ContributionSection({
  title,
  sectionId,
  items,
  isOpen,
  onToggle,
  openItems,
  onToggleItem,
  iconColor = "#1c5db8",
  useCustomIcon = false,
}: ContributionSectionProps) {
  return (
    <div className="overflow-hidden">
      {/* Section Header */}
      <button
        onClick={onToggle}
        className="w-full px-5.5 flex items-center justify-between  group cursor-pointer hover:bg-accent/70  transition-colors"
      >
        <div className="flex items-center pl-3 gap-2">
          <Pulse />
          <h3 className="font-satoshi text-sm sm:text-base text-foreground/78">
            {title}
          </h3>
        </div>
        <div className={cn( !isOpen ?"bg-tan-primary/10  rounded-[5px] " :"")}>
             <ChevronDown
          className={`h-4 w-4 text-muted-foreground hover:text-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        </div>
     
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative ml-6 pl-6 pr-6 py-2 border-l-1 dark:border-[#333333] border-border">
              <div className="space-y-1">
                {items.map((item, idx) => {
                  const itemId = `${sectionId}-${idx}`;
                  const isItemOpen = openItems[itemId];

                  return (
                    <div key={idx} className="group relative">
                      <button
                        onClick={() => onToggleItem(itemId)}
                        className="w-full flex items-center justify-between py-[4px] hover:bg-accent font-satoshi transition-colors cursor-pointer px-[10px]"
                      >
                        <div className="flex items-center gap-2">
                          <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground cursor-pointer hover:px-[2px]  transition-all delay-100 duration-75"
                            aria-label={`${item.title} link`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="text-foreground/80 font-satoshi text-left hover:underline text-xs sm:text-sm">
                              {item.title}
                            </span>
                            {useCustomIcon ? (
                              <MX.Link21Linear size={15} color={iconColor} />
                            ) : (
                              <ArrowUpRight
                                className="h-4 w-4"
                                style={{ color: iconColor }}
                              />
                            )}
                          </motion.a>
                          <span className="text-xs text-muted-foreground">
                            {item.year}
                          </span>
                        </div>
                        <div className={cn( !isItemOpen ?" bg-tan-primary/10  rounded-[5px] " :"")}>
                           <ChevronDown
                          className={`h-4 w-4 text-muted-foreground hover:text-foreground transition-transform duration-300 ${
                            isItemOpen ? "rotate-180" : ""
                          }`}
                        />
                        </div>
                       
                      </button>

                      {/* Description Dropdown */}
                      <AnimatePresence>
                        {isItemOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden font-satoshi"
                          >
                            <div className="ml-4 pl-4 py-2 border-l-1 dark:border-[#333333] border-border">
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

