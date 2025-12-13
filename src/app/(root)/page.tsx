"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import LeetContribution from "@/components/ui-components/lc";
import ContributionsDisplay from "@/components/github-graph";
import DiagonalPattern from "@/components/pattern";
import Separator from "@/components/line-separator";
import { useEffect, useState } from "react";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [date,setDate] = useState<Date | null>(null);

  useEffect(()=>{
     setDate(new Date());

  const id = setInterval(() => {
    setDate(new Date());
  }, 1000); 

  return () => clearInterval(id);
  },[])
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
        <div className=" hidden min-[1500px]:block pointer-events-none dark:border-[#333333]/50 border-l border-border/60 absolute top-0 left-283 w-full h-full"></div>
        <div className=" hidden min-[1500px]:block pointer-events-none dark:border-[#333333]/50 border-l border-border/60 absolute top-0 left-367 w-full h-full"></div>
        <section className="">
          {/* ... Profile content ... */}
          <div className=" flex items-start justify-between gap-3 ">
            <div className="border-l  border-border dark:border-[#333333]/50 pl-4 pr-15 pt-3 relative">
              <Separator width="w-[200rem]" />
              <div className="flex items-center gap-2 border-r border-border w-fit pr-2 ">
                <div className="relative p-2 group z-40">
                  <Image
                    src="/pfp.jpg"
                    alt="Potato"
                    width={100}
                    height={100}
                    className="rounded-sm group-hover:invert transition-all duration-200 delay-100"
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-1s border-l-1 border-primary/30 "></div>

                  <div className="absolute top-0 right-0 w-4 h-4 border-t-1s border-r-1 border-primary/30 "></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-1s border-l-1 border-primary/30 "></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-1s border-r-1 border-primary/30 "></div>
                    <div
    className="
      w-2 h-2 bg-green-500 rounded-full absolute top-1 left-1 z-10
   
    "
  />
                </div>
                <div className="absolute right-0 top-27">
                <span className = 'text-xs text-muted-foreground flex justify-center items-center gap-1.5'> <Clock className='size-3 mt-[2px]'/> {date?.toLocaleTimeString()}</span> 
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

                <div>
                  <button
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                    className="bg-primary text-background px-[5px]  py-[3px] text-xs cursor-pointer hover:opacity-90 transition-opacity">quick message</button>
                </div>
              </div>
              <Separator width="w-[150rem]" className="" />
              <div className="flex items-center gap-4   ">




              </div>

              <p
                className="text-sm sm:text-base text-muted-foreground dark:text-foreground/78 font-normal whitespace-pre-line leading-relaxed sm:text-left py-[4px]"
                style={{ fontWeight: 400 }}
              >
                Full stack developer.
                <br />
                <span>
                  I enjoy building things.
                </span>
                <br />
                Writing TypeScript and Tailwind.
                <span className="hidden sm:inline"> Open to collaborations.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="border-l border-border dark:border-[#333333]/50">
          <Separator width="w-[150rem] " />
          <div className="flex justify-center border-r border-dashed border-border w-fit px-4">
            <h2 className="text-2xl font-mono font-light  text-center">
              Projects
            </h2>
          </div>
          <Separator width="w-[150rem]" />

          <div className="grid grid-cols-1  gap-2 px-2   ">
         
            <Projects />
          </div>
        </section>
        <Separator width="w-[150rem]" />
        <section className="border-l border-border dark:border-[#333333]/50">
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

        <section className=" border-l border-border dark:border-[#333333]/50">
          <Separator width="w-[150rem]" />
          <div className="flex  w-fit border-r border-dashed border-border">
            <h2 className="text-2xl font-mono font-light  px-4">Stack</h2>

          </div>
          <Separator width="w-[150rem]" />

          <div className="grid grid-cols-5 ">
            {techStack().map((tech) => (
              <a
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:px-10 group items-center justify-center py-[4px] "
                aria-label={tech.name}
              >

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
        <section className=" border-l  border-border dark:border-[#333333]/50">

          <Separator width="w-[150rem]" />
          <div className="flex w-fit border-r border-dashed border-border ">
            <h2 className="text-2xl font-mono font-light  px-4">GitHub</h2>
          </div>
          <Separator width="w-[150rem]" />

          <div className=" ml-1 overflow-auto bg-background flex justify-center items-center">
            <ContributionsDisplay username="mizurex" variant='compact' />
          </div>
        </section>
        <section className=" border-l border-border dark:border-[#333333]/50">



          <Separator width="w-[150rem]" />

          <div className="flex w-fit border-r border-dashed border-border dark:border-[#333333]/50 ">
            <h2 className="text-2xl font-mono font-light  px-4">LeetCode</h2>
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
        <Separator width="w-[150rem]" />
        <section className=" border-l border-border dark:border-[#333333]/50">
          
          <div className="flex w-fit border-r border-dashed border-border">
            <h2 className="text-2xl font-mono font-light px-4">Blogs</h2>
          </div>
          <Separator width="w-[150rem]" />
          
          <div className="px-2 py-[4px]">
            <Link 
              href="/blog"
              className="group block border border-border/60 dark:border-[#333333]/50 hover:border-border dark:hover:border-[#333333] transition-colors"
            >
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-mono text-sm sm:text-base text-foreground/78 group-hover:text-foreground transition-colors">
                      Read my latest thoughts
                    </h3>
                  </div>
                  
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed">
                  Exploring ideas, sharing learnings, and documenting my journey in software development.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-muted-foreground font-mono">View all posts</span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground border rounded-[4px] bg-neutral-100 dark:bg-background flex-shrink-0" />
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="mb-6">
          <Separator width="w-[150rem]" />
          <div className="flex justify-center  relative   border-border dark:border-[#333333]/50 border-l px-2 py-10">
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


