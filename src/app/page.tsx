"use client";

import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/WordsFlip";
import { ExternalLink, ListStartIcon, ArrowUpRight, Github } from "lucide-react";

const cn = (...classes: string[]) => classes.join(" ");

const projects = [
  {
    title: "Portfolio Widget",
    image: "/widget.png",
    live: "https://yourportfolio.com",
    github: "https://github.com/org/portfolio",
  },
  {
    title: "Minimal Billing Demo",
    image: "/minimal.png",
    live: "https://billingdemo.com",
    github: "https://github.com/org/repo",
  },
  {
    title: "Chatbot Widget",
    image: "/pixel.png",
    live: "https://yourchatbotdemo.com",
    github: "https://github.com/org/chatbot-widget",
  },
  {
    title: "Printin Store",
    image: "/printin.png",
    live: "https://mystore.com",
    github: "https://github.com/org/store",
  },
  {
    title: "Baka Blog",
    image: "/baka.png",
    live: "https://blogsite.com",
    github: "https://github.com/org/blog",
  },
  {
    title: "Weather App",
    image: "/projects/weather.png",
    live: "https://weatherapp.com",
    github: "https://github.com/org/weather",
  },
];

const contributions = [
  {
    title: "feat(mem0): add complete mcp server with mem0 API integration",
    year: "2025",
    description:
      "Added mem0 MCP integration to the Klavis AI ecosystem, contributing to tools that other developers actually use.",
    link: "#",
  },
  {
    title: "feat: interactive component playground",
    year: "2025",
    description:
      "Added an interactive component playground to the Dodopayments billingsdk.",
    link: "#",
  },
  {
    title:
      "fix: removed deprecated github (luclid icon) to react icon",
    year: "2025",
    description:
      "Replaced deprecated github (lucid icon) to react icon.",
    link: "#",
  },
  {
    title: "perf: optimize images and fix linting warnings",
    year: "2025",
    description:
      "Optimized images and fixed linting warnings in the Dodopayments billingsdk.",
    link: "#",
  },
  {
    title: "fix: fixed the year on the sidebar",
    year: "2025",
    description:
      "Fixed the year on the sidebar of the Tambo AI website.",
    link: "#",
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
  { name: "Vercel", icon: "/vercel.svg", href: "https://vercel.com/" },
];

export default function Home() {
  const [showMore, setShowMore] = useState(4);
  
  return (
    <main className="flex flex-col items-center justify-center bg-white text-gray-800 py-2">
      <div className="max-w-3xl w-full bg-white pt-2 px-1 border-x  border-gray-300">
        <div className=" w-[700px] h-[100px] flex justify-center rounded-lg border-b border-gray-300 mx-auto">
          <div >
        <h4 className="text-4xl text-center font-mono text-gray-900 mt-8"><WordRotate words={["HI!!", "HELLO!!", "WELCOME!!", "GOOD DAY!!", "GOOD MORNING!!", "GOOD EVENING!!", "GOOD NIGHT!!"]} /></h4>
        </div>
        </div>

               
        
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-mono text-xl text-gray-900">About Me</h3>
              <p className="mt-2 text-sm text-gray-600 leading-6">
                I'm a beginner developer who loves learning by building. I enjoy exploring new tools and
                turning ideas into small, useful projects. This portfolio is a simple place to share what I'm
                working on and track my progress.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                <img src="/github.webp" alt="GitHub" className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                <img src="/linkedin.webp" alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                <img src="/x.webp" alt="Twitter" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-gray-700">TypeScript</span>
            <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-gray-700">React</span>
            <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-gray-700">Next.js</span>
            <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-gray-700">Tailwind</span>
            <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-mono text-gray-700">Node.js</span>
          </div>
        </div>
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
        <div className="flex grid grid-cols-3 overflow-hidden">
         
          <div className="col-span-1 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-mono text-gray-900">Check Out My Projects</h2>
          </div>
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
        </div>
        
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-300 rounded-lg p-4">
          {projects.slice(0, showMore).map((project, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
              <div className="relative h-40 md:h-44">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-2 border-t p-3">
                <h3 className="font-mono text-sm text-gray-900 truncate">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    aria-label="Open live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    aria-label="Open repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {showMore < projects.length && (
            <button
              className="col-span-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setShowMore(showMore + 4)}
            >
              Show More
            </button>
          )}
        </div>
        
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
       
        <div className="flex grid grid-cols-3 overflow-hidden ">
          <div className="col-span-2 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-mono text-gray-900">Tools & Tech I Use</h2>
          </div>
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
          <div className="col-span-3 border border-gray-200 rounded-lg overflow-hidden p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 transition hover:border-gray-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                  aria-label={tech.name}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-50 ring-1 ring-inset ring-gray-200 transition group-hover:bg-white">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-600 group-hover:text-gray-800">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
    
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>

        <div className="flex grid grid-cols-3 overflow-hidden">
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
          <div className="col-span-1 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-mono text-gray-900">Experience</h2>
          </div>
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>

          <div className="col-span-3 border border-gray-300 rounded-lg overflow-hidden p-4 bg-white">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-lg text-gray-900">Experience loading…</h3>
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-indigo-500 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-indigo-500" />
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Still waiting to fill this section.</p>
            <p className="mt-1 text-xs text-gray-500">Collecting XP — please stand by while I level up.</p>
          </div>
        </div>

        <div className="flex grid grid-cols-3 overflow-hidden">
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
          <div className="col-span-2 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-mono text-gray-900">My Contributions</h2>
          </div>

          <div className="col-span-3 border border-gray-300 rounded-lg overflow-hidden">
            {contributions.map((item, idx) => (
              <div key={idx} className={idx === 0 ? "px-4 py-4" : "px-4 py-4 border-t border-gray-200"}>
                <div className="flex items-start gap-3">
                  <h3 className="font-mono text-lg text-gray-900 flex-1">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50"
                    aria-label="Open contribution link"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>




        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
        
        <div className="flex items-center justify-end">
          
          <div>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/github.webp" alt="GitHub" className="w-12 h-12" />
          </a>
        </div>
        <div></div>
        <div>
          <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.webp" alt="LinkedIn" className="w-12 h-12" />
          </a>
        </div>
        <div></div>
        <div>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="x.webp" alt="Twitter" className="w-12 h-12" />
          </a>
        </div>
        </div>
      </div>
    

      <div className="text-center text-gray-600">
      <p>Inspired by <a href="https://leo-neves.com/" target="_blank" rel="noopener noreferrer">Leo Neves</a></p>
      </div>
    </main>
  );
}

function Separator() {
  return (
    <div
      className="relative flex h-[100px] w-full 
        before:absolute before:inset-0
        before:bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#d1d5db_1px,transparent_0,transparent_50%)]
        before:bg-[length:10px_10px] border-t border-gray-200"
    />
  );
}