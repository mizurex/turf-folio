"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function Home() {

  
  return (
    <main className="flex flex-col items-center justify-center text-gray-800  bg-white selection:bg-neutral-100 ">
    
      <div className="max-w-3xl w-full bg-white  px-6 ">
      
        <section className="py-2">
          <div className="flex justify-end">

             <div className="sm:flex items-center gap-2 justify-end py-5 w-fit border-b border-gray-200">
              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://github.com/mizurex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white hover:scale-110 transition-transform duration-200"
                >
                  <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white hover:scale-110 transition-transform duration-200"
                >
                  <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://x.com/PotatoTurf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white hover:scale-110 transition-transform duration-200"
                >
                  <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="mailto:dhananjayadhal3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white hover:scale-110 transition-transform duration-200"
                >
                  <img src="/gmail.png" alt="Twitter" className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
       
          <div className="flex items-start justify-between gap-3 pt-4">
            <div>
            <div className="flex items-start border-b border-gray-200"> 
               <h3 className="font-mono text-2xl text-gray-900 underline mb-3">About Me</h3>
            </div>
             
              <h2 className="font-mono text-lg text-gray-900 mt-4">Dhananjay (@PotatoTurf)</h2>
              <p className="mt-2 text-sm text-stone-900 leading-relaxed font-mono selection:bg-neutral-100">
                • Passionate developer<br/>
                • Love exploring new technologies and turning ideas into code<br/>
                • This website showcases my journey and work<br/>
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
            <h3 className="font-mono text-lg text-gray-900 mb-3 pt-6 ">All Contributions </h3>

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
              {techStack().map((tech) => (
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

  
        <div className="max-w-3xl  pt-2 ">
            <Separator />
      </div>
        <section className="py-20">
          <div className="flex justify-center items-center border-b border-gray-200 relative">
            
            <h4 className="font-mono text-lg text-gray-900 mb-3 pt-6 selection:bg-neutral-100"> Thanks a lot for checking out my work! </h4>
          </div>
        </section>
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
        before:bg-[length:10px_10px] "
    />
  );
}