import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";
import * as MX from 'mx-icons'

export default function Projects() {
  return (
    <div className="text-xs font-satoshi text-primary dark:text-foreground/78 whitespace-none sm:text-left py-[4px]">
      {projectsData.slice(0, 7).map((project, index) => (
        <motion.a
          key={index}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative cursor-pointer p-2 transition-all rounded-[5px] block"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.1 }}
          aria-label={`${project.title} live demo`}
        >
          <div className="grid grid-cols-3 items-start gap-2">
            <div className="col-span-2">
              <span className="group/title inline-flex items-center gap-1 text-primary truncate">
                <span className="hover:underline text-foreground/80 text-sm">
                  {project.title}
                </span>
                <motion.div>
                  <MX.Link21Linear size={15} color="#0076fc" />
                </motion.div>
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
