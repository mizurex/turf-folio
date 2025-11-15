import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";
import { Link21Linear } from "mx-icons";

export default function Projects() {
  return (
    <div>
      {projectsData.slice(0, 6).map((project, index) => (
        <div
          key={index}
          className="group relative  p-2 transition focus-within:ring-2 focus-within:ring-border border-b border-border"
        >
          <div className="pointer-events-none absolute -top-28 left-1/2 z-10 w-40 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="overflow-hidden rounded-md bg-background shadow-md ring-1 ring-border">
              <div className="relative h-24 w-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 items-start gap-2">
            <div className="col-span-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/title inline-flex items-center gap-1 font-mono text-sm text-foreground truncate"
                aria-label={`${project.title} live demo`}
              >
                <span className="truncate text-link hover:underline">
                  {project.title}
                </span>
                <motion.div>
                  <Link21Linear size={15} color="#1c5db8" />
                </motion.div>
              </motion.a>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
            <div className="col-span-1 flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                aria-label={`${project.title} repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
