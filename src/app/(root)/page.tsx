"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import LeetContribution from "@/components/lc";
import ContributionsDisplay from "@/components/github-graph";
import DiagonalPattern from "@/components/pattern";
import Separator from "@/components/line-separator";

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center bg-background overflow-x-hidden">
      <div className="max-w-3xl w-full px-6">
      <DiagonalPattern side="left" />
      <DiagonalPattern side="right" />
      <div className=" hidden min-[1500px]:block pointer-events-none dark:border-[#333333] border-l border-border absolute top-0 left-15 w-full h-full"></div>
      <div
  className="
    hidden       /* default: invisible on small screens */
    min-[1500px]:block     /* visible on large screens */
    pointer-events-none 
    border-l border-border 
    dark:border-[#333333]
    absolute top-0 left-96
    fixed w-full h-full
  "
></div>
      <div className=" hidden min-[1500px]:block pointer-events-none dark:border-[#333333] border-l border-border absolute top-0 left-283 w-full h-[154px]"></div>
      <div className=" hidden min-[1500px]:block pointer-events-none dark:border-[#333333] border-l border-border absolute top-0 left-367 w-full h-full"></div>
        <section className="">
          {/* ... Profile content ... */}
          <div className=" flex items-start justify-between gap-3 ">
            <div className="border-l border-r border-border dark:border-[#333333] pl-4 pr-15 pt-3">
              <Separator width="w-[200rem]" />
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
              <Separator width="w-[150rem] " />
              <div className=" flex items-center gap-3 py-[4px]">
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
              <Separator width="w-[150rem]" className="" />
              <div className="flex items-center gap-4   ">
              
                
              
                
              </div>

              <p
                className="text-sm sm:text-base text-muted-foreground dark:text-foreground font-normal whitespace-pre-line leading-relaxed sm:text-left py-[4px]"
                style={{ fontWeight: 400 }}
              >
                I’m a full stack developer.
                <br />
                <span>
                  I enjoy building things from scratch
                  <span className="hidden sm:inline"> — from idea to production.</span>
                </span>
                <br />
                I write TypeScript and Tailwind.
                <span className="hidden sm:inline"> Open to collaborations and opportunities.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="border-l border-border dark:border-[#333333]">
          <Separator width="w-[150rem] " />
          <div className="flex justify-center border-r border-dashed border-border w-fit px-4">
            <h2 className="text-2xl font-mono font-light  text-center">
              Projects
            </h2>
          </div>
          <Separator width="w-[150rem]" />

          <div className="grid grid-cols-1  gap-2 px-2">
            
            <Projects />
          </div>
        </section>
<Separator width="w-[150rem]" />
        <section className="border-l border-border dark:border-[#333333]">
          <div className=" w-full">
            
            <div className="flex  w-fit border-r border-dashed border-border">
              <h2 className="text-2xl font-mono font-light px-4">
                Contributions
              </h2>
            </div>
            <Separator width="w-[150rem]" />

            <div className="grid grid-cols-1 gap-4 py-[4px] ">
              <Contributions />
            </div>
          </div>
        </section>

        <section className=" border-l border-border dark:border-[#333333]">
          <Separator width="w-[150rem]" />
          <div className="flex  w-fit border-r border-dashed border-border">
            <h2 className="text-2xl font-mono font-light  px-4">Stack</h2>
        
          </div>
       

          <div className="grid grid-cols-5 ">
            {techStack().map((tech) => (
              <a
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:px-10 group items-center justify-center  border-r border-border "
                aria-label={tech.name}
              >
               <Separator width="w-[150rem]" />
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="size-8 object-contain dark:invert transition-all pt-[4px]  group-hover:scale-90 duration-300 delay-100"
                />

                <span className="hidden md:block text-xs font-mono  pb-[2px] text-center">  {tech.name}</span>
               
              </a>
            ))}
          </div>
        </section>
        <section className=" border-l  border-border dark:border-[#333333]">
      
        <Separator width="w-[150rem]" />
          <div className="flex w-fit border-r border-dashed border-border ">
            <h2 className="text-lg font-mono font-light  px-4">GitHub</h2>
          </div>
          <Separator width="w-[150rem]" />

          <div className=" ml-1 overflow-auto bg-background flex justify-center items-center">
          <ContributionsDisplay username="mizurex" variant='compact' />
          </div>
        </section>
        <section className=" border-l border-border dark:border-[#333333]">


        
          <Separator width="w-[150rem]" />

          <div className="flex w-fit border-r border-dashed border-border dark:border-[#333333] ">
            <h2 className="text-lg font-mono  px-4">LeetCode</h2>
          </div>
   
          <Separator width="w-[150rem]" />
          <div className="bg-background flex justify-center items-center">
            <LeetContribution
              username="dhananjaycw"
              theme="monochrome"
              blockAnimate="bounce"
            />
          </div>
        </section>
        <section className="mb-6">
          <Separator width="w-[150rem]" />
          <div className="flex justify-center  relative  border-r border-border dark:border-[#333333] border-l px-2 py-10">
            <h4 className="font-mono text-sm md:text-lg opacity-70 text-center  ">
              {" "}
              Thanks a lot for checking out my work!{" "}
            </h4>
          </div>
          <Separator width="w-[150rem]" />
        </section>
      
      </div>
    </main>
  );
}


