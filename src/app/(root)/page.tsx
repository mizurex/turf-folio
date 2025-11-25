"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import LeetContribution from "@/components/ui-components/lc";
import ContributionsDisplay from "@/components/github-graph";

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center bg-background overflow-x-hidden">
      <div className="max-w-3xl w-full px-6">
        <section className="">
          {/* ... Profile content ... */}
          <div className="relative flex items-start justify-between gap-3 ">
            <div className="border-l border-border px-4 py-3">
              <Separator width="w-[100rem]" />
              <div className="flex items-center gap-2 border-r border-border w-fit pr-2">
                <div className="relative p-2 group z-40">
                  <Image
                    src="/pfp.jpg"
                    alt="Potato"
                    width={100}
                    height={100}
                    className="rounded-sm"
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-1s border-l-1 border-primary/30 "></div>
                  
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-1s border-r-1 border-primary/30 "></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-1s border-l-1 border-primary/30 "></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-1s border-r-1 border-primary/30 "></div>
                </div>
                
              </div>
              <Separator width="w-[100rem]" />
              <Separator width="w-[100rem]" className="my-[12px]" />
              <div className="flex items-center gap-4   ">
                <h2 className="font-mono text-lg mt-4  pb-2 border-border w-fit">
                  <span className="bg-accent text-foreground border border-border rounded-md px-2 py-1 text-sm">
                    Jay
                  </span>{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    (@PotatoTurf)
                  </span>
                </h2>
                
                <div className=" flex items-center gap-3 pt-3">
                  <a
                    href="https://github.com/mizurex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img
                      src="/linkedin.webp"
                      alt="LinkedIn"
                      className="h-4 w-4"
                    />
                  </a>
                  <a
                    href="https://x.com/PotatoTurf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:dhananjayadhal3@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src="/gmail.png" alt="Email" className="h-4 w-4" />
                  </a>
                </div>
                
              </div>

              <p className="text-xs sm:text-sm leading-relaxed font-mono text-muted-foreground text-left">
                Building and learning<br />
                Writing{" "}
                <span className="bg-accent text-foreground border border-border rounded-md px-2 text-sm">
                  TypeScript
                </span>{" "}
                and{" "}
                <span className="bg-accent text-foreground border border-border rounded-md px-2 text-sm">
                  Tailwind
                </span>
                <br />
              
                Open to collaborations and{" "}
                <span className="bg-accent text-foreground border border-border rounded-md px-2 text-sm">
                  opportunities
                </span>
                
              </p>
            </div>
          </div>
        </section>

        <section className="border-l border-border">
          <Separator width="w-[100rem] " />
          <div className="flex justify-center border-r border-border w-fit px-4">
            <h2 className="text-2xl font-mono font-light  text-center">
              Projects
            </h2>
          </div>
          <Separator width="w-[100rem]" />

          <div className="grid grid-cols-1  gap-2 px-2">
            <Projects />
          </div>
        </section>

        <section className="border-l border-border">
          <div className=" ">
            <Separator width="w-[100rem]" />
            <div className="flex  w-fit border-r border-border">
              <h2 className="text-2xl font-mono font-light px-4">
                Contributions
              </h2>
            </div>
            <Separator width="w-[100rem]" />

            <div className="grid grid-cols-1 gap-2 ">
              <Contributions />
            </div>
          </div>
        </section>

        <section className=" border-l border-border">
          <Separator width="w-[100rem]" />
          <div className="flex  w-fit border-r border-border">
            <h2 className="text-2xl font-mono font-light  px-4">Stack</h2>
          </div>
          <Separator width="w-[100rem]" />

          <div className="grid grid-cols-5 ">
            {techStack().map((tech) => (
              <a
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:px-10  p-4 group items-center justify-center "
                aria-label={tech.name}
              >
               
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="size-8 object-contain dark:invert transition-all group-hover:scale-90 duration-300 delay-100"
                />

                <span className="hidden md:block text-xs font-mono  pt-[2px] text-center">  {tech.name}</span>
               
              </a>
            ))}
          </div>
        </section>
        <section className=" border-l border-border">
      
        <Separator width="w-[100rem]" />
          <div className="flex w-fit border-r border-border ">
            <h2 className="text-lg font-mono font-light  px-4">GitHub</h2>
          </div>
          <Separator width="w-[100rem]" />

          <div className=" ml-1 overflow-auto bg-background flex justify-center items-center">
          <ContributionsDisplay username="mizurex" variant='compact' />
          </div>
        </section>
        <section className=" border-l border-border">


        
          <Separator width="w-[100rem]" />

          <div className="flex w-fit border-r border-border ">
            <h2 className="text-lg font-mono  px-4">LeetCode</h2>
          </div>
   
          <Separator width="w-[100rem]" />
          <div className="bg-background flex justify-center items-center">
            <LeetContribution
              username="dhananjaycw"
              theme="monochrome"
              blockAnimate="bounce"
            />
          </div>
        </section>
        <section className="mb-6">
          <Separator width="w-[100rem]" />
          <div className="flex justify-center  relative  border-r border-border border-l px-2 py-10">
            <h4 className="font-mono text-sm md:text-lg opacity-70 text-center  ">
              {" "}
              Thanks a lot for checking out my work!{" "}
            </h4>
          </div>
          <Separator width="w-[100rem]" />
        </section>
      
      </div>
    </main>
  );
}

function Separator({ width = "w-[30rem]" ,className}: { width?: string ,className?: string }) {
  return (
    <div
      className={`${width} relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-b border-border dark:border-[#333333] ${className}`}
    />
  );
}
