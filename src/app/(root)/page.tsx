"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import Button from "@/components/ui/button2";
import { cn } from "@/lib/utils";
export default function Home() {

  
  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground selection:bg-selection selection:text-selection-foreground ">
    
      <div className="max-w-3xl w-full   px-6 ">
      
        <section className="py-2">
          <div className="flex justify-end">

             <div className="sm:flex items-center gap-2 justify-end py-5 w-fit border-b border-border">
              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://github.com/mizurex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                >
                  <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                >
                  <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="https://x.com/PotatoTurf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                >
                  <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
                </a>
              </Button>

              <Button className={cn({ "px-2": true })}>
                <a
                  href="mailto:dhananjayadhal3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-background hover:scale-110 transition-transform duration-200"
                >
                  <img src="/gmail.png" alt="Twitter" className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
       
          <div className="flex items-start justify-between gap-3 pt-4">
            <div>
            <div className="flex items-start border-b border-border"> 
               <h3 className="font-mono text-2xl text-foreground underline mb-3">About Me</h3>
            </div>
             
              <h2 className="font-mono text-lg text-foreground mt-4">Dhananjay (@PotatoTurf)</h2>
              <p className="mt-2 text-sm text-foreground leading-relaxed font-mono ">
                • Passionate developer<br/>
                • Love exploring new technologies and turning ideas into code<br/>
                • This website showcases my journey and work<br/>
              </p>
            </div>
          
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-start border-b border-border">
              <h2 className="text-2xl font-mono text-foreground mb-3 underline">Projects</h2>
          </div>
          <div>
            <h3 className="font-mono text-lg text-foreground mb-3 pt-6 ">All Projects <strong className="text-muted-foreground">{'>'}</strong></h3>

          </div>
          
       
        <div className="grid grid-cols-1  gap-2">
          <Projects/>
         <div className="flex justify-end">
          <p className="text-sm text-muted-foreground mt-1 font-mono">More projects on my github...</p>
         </div>
        </div>
        </section>

        <section className="mt-10">
          <div className=" overflow-hidden">
           
          <div className="flex items-start border-b border-border w-full">
              <h2 className="text-2xl font-mono text-foreground mb-3 underline">Contributions</h2>
          </div>

          <div>
            <h3 className="font-mono text-lg text-foreground mb-3 pt-6 ">All Contributions </h3>

          </div>
           <div className="grid grid-cols-1 gap-2">
            <Contributions/>
           </div>
          </div>
        </section>

        <section className="mt-10">
        <div className="flex items-start border-b border-border w-full">
              <h2 className="text-2xl font-mono text-foreground mb-3 underline">Stack</h2>
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
                <span className="text-xs text-muted-foreground">{tech.name}</span>
                </a>
              ))}
            </div>
        </section>

  
        <div className="max-w-3xl  pt-2 ">
            <Separator />
      </div>
        <section className="py-20">
          <div className="flex justify-center items-center border-b border-border relative">
            
            <h4 className="font-mono text-lg text-foreground mb-3 pt-6 "> Thanks a lot for checking out my work! </h4>
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