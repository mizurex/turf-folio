"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
export default function Home() {

  
  return (
    <main className="
     relative min-h-dvh grid 
        [background-image:linear-gradient(to_right,#FBFAF5_1px,transparent_1px),linear-gradient(to_bottom,#FBFAF5_1px,transparent_1px)]
        [background-size:40px_40px]
    
    flex flex-col items-center justify-center  text-black selection:bg-selection selection:text-selection-foreground ">
   
      <div className="max-w-3xl w-full px-6 bg-[#FFFFFC]">
        <section className="py-2">
        
       
          <div className="relative flex items-start justify-between gap-3 pt-4">
         
            <div>
            <div className="flex items-start border-b border-border"> 
               <h3 className="font-mono text-2xl text-black underline mb-3">About Me</h3>
            </div>
             
              <h2 className="font-mono text-lg text-black mt-4 border-b border-border w-fit">Jay (@PotatoTurf)</h2>
              <p className="mt-2 text-sm text-black leading-relaxed font-mono ">
              Building real-time infrastructure and developer tools.
              I care about type safety, clean code. 
              Writing TypeScript and Tailwind.
              Trying to contirbute to the open source community.
              </p>
            </div>
          
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-start border-b border-border">
              <h2 className="text-2xl font-mono text-black mb-3 underline">Projects</h2>
          </div>
          <div>
            <h3 className="font-mono text-lg text-black mb-3 pt-6 ">All Projects <strong className="text-muted-foreground">{'>'}</strong></h3>

          </div>
          
       
        <div className="grid grid-cols-1  gap-2">
          <Projects/>
         <div className="flex justify-end">
          <p className="text-sm text-black mt-1 font-mono">More projects on my github...</p>
         </div>
        </div>
        </section>

        <section className="mt-10">
          <div className=" overflow-hidden">
           
          <div className="flex items-start border-b border-border w-full">
              <h2 className="text-2xl font-mono text-black mb-3 underline">Contributions</h2>
          </div>

          <div>
            <h3 className="font-mono text-lg text-black mb-3 pt-6 ">All Contributions </h3>

          </div>
           <div className="grid grid-cols-1 gap-2">
            <Contributions/>
           </div>
          </div>
        </section>

        <section className="mt-10">
        <div className="flex items-start border-b border-border w-full">
              <h2 className="text-2xl font-mono text-black mb-3 underline">Stack</h2>
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
                <span className="text-xs text-black">{tech.name}</span>
                </a>
              ))}
            </div>
        </section>

  
     
        <section className="py-20">
          <div className="flex justify-center items-center border-b border-border relative">
            
            <h4 className="font-mono text-lg text-black mb-3 pt-6 "> Thanks a lot for checking out my work! </h4>
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