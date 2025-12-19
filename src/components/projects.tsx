"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <div className="space-y-0.5 py-[4px]">
      {projectsData.slice(0, 7).map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.03 }}
          className="group relative"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-2 py-2 border-l-2 border-transparent hover:border-tan-primary/60 hover:bg-muted/20 dark:hover:bg-muted/5 transition-all duration-200 rounded-r-[3px]"
          >
            <div className="flex items-center justify-between gap-3">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="text-sm font-satoshi text-foreground/80 group-hover:text-tan-primary transition-colors truncate">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-tan-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground font-satoshi leading-snug" style={{ fontWeight: 300 }}>
                  {project.description}
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-muted/40 dark:hover:bg-muted/20 rounded-[3px] transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                </a>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}