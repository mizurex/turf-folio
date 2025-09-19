"use client";

import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/WordsFlip";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const cn = (...classes: string[]) => classes.join(" ");

const projects = [
  {
    title: "Flowidget",
    image: "/flowidget.png",
    live: "https://flowidget.projects.turfworks.site/",
    github: "https://github.com/mizurex/flowidget",
    description: "Embedding widget for your website,trained on your custom data to answer questions.",
  },
  {
    title: "Turfex",
    image: "/minimal.png",
    live: "https://turfex.vercel.app/",
    github: "https://github.com/mizurex/turfex",
    description: "An AI-powered academic assistant, with bring your own key feature.",
  },
  {
    title: "8ightbit",
    image: "/8ightbit.jpeg",
    live: "https://8ightbit.turfworks.site/",
    github: "https://github.com/mizurex/8ightbit",
    description: "A free canvas to make pixel art.",
  },
  {
    title: "Printin",
    image: "/printin.png",
    live: "https://printin.projects.turfworks.site/",
    github: "https://github.com/mizurex/printin",
    description: "Fast A4 printing service for businesses, with options for color and black & white,lamination,and binding.",
  },
  {
    title: "Grid Vault",
    image: "/vault.jpeg",
    live: "https://gridvault.projects.turfworks.site/",
    github: "https://github.com/mizurex/grid-vault",
    description: "A collection of bento grid layouts you can copy and paste into your project, built with Tailwind CSS.",
  },
];

const contributions = [
  {
    title: "feat: added a new ui component",
    year: "2025",
    description:
      "Added a new cancel subscription component with transaction flow to the billingsdk.",
    link: "https://github.com/dodopayments/billingsdk/pull/158",
  },
  {
    title: "fix: fixed hydration error",
    year: "2025",
    description:
      "Fixed hydration error for better SEO performance.",
    link: "https://github.com/dodopayments/billingsdk/pull/225",
  },
  {
    title:
      "fix: fixed ui inconsistency",
    year: "2025",
    description:
      "Fixed UI consistency in hero section and components.",
    link: "https://github.com/dodopayments/billingsdk/pull/127",
  },
  {
    title: "feat: added a new ui component with animations,form validation",
    year: "2025",
    description:
      "Added a Payment Card component with two-panel UI, validation, inline errors, animations, and responsive design.",
    link: "https://github.com/dodopayments/billingsdk/pull/223",
  },
];

const techStack = [
  { name: "TypeScript", icon: "/ts.svg", href: "https://www.typescriptlang.org/" },
  { name: "React", icon: "/react.svg", href: "https://react.dev/" },
  { name: "Next.js", icon: "/nextjs2-light.svg", href: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg", href: "https://tailwindcss.com/" },
  { name: "JavaScript", icon: "/js.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "MySQL", icon: "/mysql.svg", href: "https://www.mysql.com/" },
  { name: "Node.js", icon: "/nodejs.svg", href: "https://nodejs.org/" },
  { name: "MongoDB", icon: "/mongodb.svg", href: "https://www.mongodb.com/" },
  { name: "Framer Motion", icon: "/motion.svg", href: "https://www.framer.com/motion/" },
  { name: "Git", icon: "/git.svg", href: "https://git-scm.com/" },
  { name: "Docker", icon: "/docker.svg", href: "https://www.docker.com/" },
];

export default function Home() {

  
  return (
    <main className="flex flex-col items-center justify-center text-gray-800  bg-white">
       <div className="max-w-3xl w-full bg-white ">
            <Separator />
      </div>
      <div className="max-w-3xl w-full bg-white pt-2 px-6 ">
      
        <section className="py-2">
          <div className="flex justify-end">

             <div className="hidden sm:flex items-center gap-2 justify-end py-5 w-fit border-b border-gray-200">
              <a href="https://github.com/mizurex" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white hover:scale-110 transition-transform duration-200">
                <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white hover:scale-110 transition-transform duration-200">
                <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a href="https://x.com/PotatoTurf" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white hover:scale-110 transition-transform duration-200">
                <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
              </a>
              <a href="mailto:dhananjayadhal3@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white hover:scale-110 transition-transform duration-200">
                <img src="/gmail.png" alt="Twitter" className="h-4 w-4" />
              </a>
            </div>
          </div>
       
          <div className="flex items-start justify-between gap-3 pt-4">
            <div>
            <div className="flex items-start border-b border-gray-200"> 
               <h3 className="font-mono text-2xl text-gray-900 underline mb-3">About Me</h3>
            </div>
             
              <h2 className="font-mono text-lg text-gray-900 mt-4">Dhananjay (Turf)</h2>
              <p className="mt-2 text-sm text-stone-900 leading-relaxed font-mono">
                • Passionate developer who learns by building real projects<br/>
                • Love exploring new technologies and turning ideas into code<br/>
                • Actively seeking internships and full-time development roles<br/>
                • This portfolio showcases my journey<br/>
                • Recently started contributing to open source projects, and its been a great experience.
              </p>
            </div>
          
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-start border-b border-gray-200">
              <h2 className="text-2xl font-mono text-gray-900 mb-3 underline">Projects</h2>
          </div>
          <div>
            <h3 className="font-mono text-lg text-gray-900 mb-3 pt-6 ">All Projects <strong className="text-gray-500">{'>'}</strong></h3>

          </div>
          
       
        <div className="grid grid-cols-1  gap-2">
          {projects.slice(0, 5).map((project, index) => (
            <div
              key={index}
              className="group relative  p-2 transition focus-within:ring-2 focus-within:ring-gray-300 border-b border-gray-200"
            >
              <div className="pointer-events-none absolute -top-28 left-1/2 z-10 w-40 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="overflow-hidden rounded-md bg-white shadow-md ring-1 ring-gray-200">
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
                    className="group/title inline-flex items-center gap-1 font-mono text-sm text-gray-900 truncate"
                    aria-label={`${project.title} live demo`}
                  >
                    <span className="truncate text-blue-700 hover:underline">{project.title}</span>
                    <motion.div >
                      <ArrowUpRight className="h-4 w-4 text-indigo-500" size={16}/>
                    </motion.div>
                  </motion.a>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
                <div className="col-span-1 flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-700"
                    aria-label={`${project.title} repository`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
         <div className="flex justify-end">
          <p className="text-sm text-gray-600 mt-1 font-mono">More projects on my github...</p>
         </div>
        </div>
        </section>

        <section className="mt-10">
          <div className=" overflow-hidden">
           
          <div className="flex items-start border-b border-gray-200 w-full">
              <h2 className="text-2xl font-mono text-gray-900 mb-3 underline">Contributions</h2>
          </div>

          <div>
            <h3 className="font-mono text-lg text-gray-900 mb-3 pt-6 ">All Contributions <strong className="text-gray-500">{'>'}</strong></h3>

          </div>
           <div className="grid grid-cols-1 gap-2">
             {contributions.map((item, idx) => (
               <div key={idx} className="group relative p-2 transition focus-within:ring-2 focus-within:ring-gray-300 border-b border-gray-200">
                 <div className="grid grid-cols-3 items-start gap-2">
                   <div className="col-span-2">
                     <motion.a
                      
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group/title inline-flex items-center gap-1 font-mono text-sm text-gray-900 truncate"
                       aria-label={`${item.title} link`}
                     >
                       <span className="truncate text-blue-700 hover:underline">{item.title}</span>
                       <motion.div>
                         <ArrowUpRight className="h-4 w-4 text-indigo-500" size={16} />
                       </motion.div>
                     </motion.a>
                     <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                   </div>
                   <div className="col-span-1 flex items-start justify-end">
                     <span className="text-xs text-gray-500">{item.year}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        
          
        
          </div>
        </section>

        <section className="mt-10">
        <div className="flex items-start border-b border-gray-200 w-full">
              <h2 className="text-2xl font-mono text-gray-900 mb-3 underline">Stack</h2>
          </div>
          <div className="grid grid-cols-5 gap-2 pt-6">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-2"
                  aria-label={tech.name}
                >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                <span className="text-xs text-gray-600">{tech.name}</span>
                </a>
              ))}
            </div>
        </section>

        <section className="mt-10 pb-10">
        <div className="flex items-start border-b border-gray-200 w-full">
              <h2 className="text-2xl font-mono text-gray-900 mb-3 underline">Experience</h2>
          </div>
          <div className="rounded-md p-3 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-lg text-gray-900">Experience loading…</h3>
           
            </div>
            <p className="mt-2 text-sm text-gray-600 ">Still waiting to fill this section.</p>
            
            <a href="https://icons8.com/icon/GodD4Rx442rU/sad">
             <img src="sad.png" alt="" className="w-6 h-6" />
            </a>
           
            
          </div>
        </section>
        
      
      </div>
      <div className="max-w-3xl w-full bg-white pt-2 ">
            <Separator />
      </div>
    

    
    </main>
  );
}

function Separator() {
  return (
    <div
      className="relative flex h-[30px] w-full 
        before:absolute before:inset-0
        before:bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#d1d5db_1px,transparent_0,transparent_50%)]
        before:bg-[length:10px_10px] border-t border-gray-200"
    />
  );
}