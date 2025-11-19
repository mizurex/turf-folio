"use client";

import Image from "next/image";
import Projects from "@/components/projects";
import Contributions from "@/components/contributions";
import techStack from "@/data/techtsack";
import LeetContribution from "@/components/ui-components/lc";
export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col items-center justify-center bg-background">
      <div className="max-w-3xl w-full px-6">
        <section className="py-2">
          <div className="relative flex items-start justify-between gap-3 pt-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative p-2 group">
                  <Image
                    src="/pfp.jpg"
                    alt="Potato"
                    width={100}
                    height={100}
                    className="rounded-sm"
                  />
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-75 group-hover:top-2 group-hover:left-2"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary transition-all duration-75 group-hover:top-2 group-hover:right-2"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary transition-all duration-75 group-hover:bottom-2 group-hover:left-2"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary transition-all duration-75 group-hover:bottom-2 group-hover:right-2"></div>
                </div>
              </div>
              <div className="flex items-center gap-4  ">
                <h2 className="font-mono text-lg mt-4 border-b pb-2 border-border w-fit">
                <span className="bg-accent text-foreground border border-border rounded-md px-2 py-1 text-sm">
  Jay
</span> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">(@PotatoTurf)
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

              <p className="mt-2 text-sm leading-relaxed font-mono text-muted-foreground">
                Building and learning, I care
                about type safety, clean code. Writing <span className="bg-accent text-foreground border border-border rounded-md px-2  text-sm">
  TypeScript
</span> and <span className="bg-accent text-foreground border border-border rounded-md px-2  text-sm">
  Tailwind
</span>.
                Trying to contirbute to the open source community. Open to collaborations and <span className="bg-accent text-foreground border border-border rounded-md px-2  text-sm">
  opportunities
</span>
              </p>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-start border-b border-border">
            <h2 className="text-2xl font-mono font-light mb-3 underline">
              Projects
            </h2>
          </div>
          <div>
            <h3 className="font-mono text-lg mb-3 pt-6 ">
              All Projects{" "}
              <strong className="text-muted-foreground">{">"}</strong>
            </h3>
          </div>

          <div className="grid grid-cols-1  gap-2">
            <Projects />
            <div className="flex justify-end">
              <p className="text-sm text-muted-foreground mt-1 font-mono">
                More projects on my github...
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className=" overflow-hidden">
            <div className="flex items-start border-b border-border w-full">
              <h2 className="text-2xl font-mono font-light mb-3 underline">
                Contributions
              </h2>
            </div>

            <div>
              <h3 className="font-mono text-lg mb-3 pt-6 ">
                All Contributions{" "}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Contributions />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-start border-b border-border w-full">
            <h2 className="text-2xl font-mono font-light mb-3 underline">
              Stack
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-2 pt-6">
            {techStack().map((tech) => (
              <a
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 p-2 group"
                aria-label={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="size-8 object-contain dark:invert transition-all group-hover:scale-110"
                />
                <span className="text-xs text-muted-foreground">
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </section>
<section className="mt-10">
  <h2 className="text-2xl font-mono font-light mb-3 underline">
    LeetCode Contributions
  </h2>
<div className="ml-3">
  <LeetContribution username="dhananjaycw" theme="orange" blockAnimate="bounce"/>
</div>

</section>
        <section className="py-20">
          <div className="flex justify-center items-center border-b border-border relative">
            <h4 className="font-mono text-sm opacity-70 mb-3 pt-6 ">
              {" "}
              Thanks a lot for checking out my work!{" "}
            </h4>
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
