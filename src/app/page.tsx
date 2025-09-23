"use client";

import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/WordsFlip";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";






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
    <main className="flex flex-col items-center justify-center text-gray-800  bg-white selection:bg-neutral-100">
    
      <div className="max-w-3xl w-full bg-white  px-6 ">
      
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
             
              <h2 className="font-mono text-lg text-gray-900 mt-4">Dhananjay (@PotatoTurf)</h2>
              <p className="mt-2 text-sm text-stone-900 leading-relaxed font-mono selection:bg-neutral-100">
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
          <Projects/>
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
            <Contributions/>
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