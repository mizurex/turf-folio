"use client";

import Image from "next/image";
import { useState } from "react";
import { WordRotate } from "@/components/WordsFlip";
import { ExternalLink, ListStartIcon,  } from "lucide-react";

const cn = (...classes: string[]) => classes.join(" ");

const projects = [
  {
    image: "/widget.png",
    live: "https://yourportfolio.com",
    github: "https://github.com/org/portfolio",
  },
  {
    image: "/minimal.png",
    live: "https://billingdemo.com",
    github: "https://github.com/org/repo",
  },
  {
    image: "/pixel.png",
    live: "https://yourchatbotdemo.com",
    github: "https://github.com/org/chatbot-widget",
  },
  {
    image: "/printin.png",
    live: "https://mystore.com",
    github: "https://github.com/org/store",
  },
  {
    image: "/baka.png",
    live: "https://blogsite.com",
    github: "https://github.com/org/blog",
  },
  {
    image: "/projects/weather.png",
    live: "https://weatherapp.com",
    github: "https://github.com/org/weather",
  },
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

               
        
        <div className="font-mono">
        <p className="text-gray-500 font-mono">I'm a novice programmer and this is my portfolio. I love to learn new things and make things.</p>
        <p className="text-gray-500 font-mono">Having made so many things and learned so many things, I decided to make a portfolio to show off my work and my skills.</p>
        <p className="text-gray-500 font-mono">Have a look at my work and feel free to suggest improvements for my projects.</p>
        </div>
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
        <div className="flex grid grid-cols-3 overflow-hidden">
          <div className="col-span-2 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-4xl text-center font-mono text-gray-900 mt-8">Check Out My Projects</h2>
          </div>
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>    
        </div>
        
        <div className="h-[30px] overflow-hidden border border-gray-300 rounded-lg">
           <Separator />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-300 rounded-lg py-5 px-5 overflow-hidden">
          {projects.slice(0, showMore).map((project, index) => (
         <div
         key={index}
         className="group relative h-[220px] rounded-lg border border-gray-200 overflow-hidden"
       >
         {/* Project thumbnail */}
         <Image
           src={project.image}
           alt="Project thumbnail"
           fill
           className="object-cover group-hover:scale-105 transition-transform"
         />

         {/* Action icons */}
         <div className="absolute bottom-2 right-2 flex gap-2">
           <a
             href={project.live}
             target="_blank"
             rel="noopener noreferrer"
             className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
           >
             <ExternalLink className="w-4 h-4 text-gray-700" />
           </a>
           <a
             href={project.github}
             target="_blank"
             rel="noopener noreferrer"
             className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
           >
             <ListStartIcon className="w-4 h-4 text-gray-700" />
           </a>
         </div>
       </div>
          ))}
          
          {showMore < projects.length && (
            <div 
              className="text-center text-gray-600 hover:text-black cursor-pointer font-medium py-6 md:col-span-2 " 
              onClick={() => setShowMore(showMore + 4)}
            >
              Show More
            </div>
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

          <div className=" grid grid-cols-3 justify-center items-center border border-gray-200 rounded-lg overflow-hidden ">
          <div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="ts.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="react.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="nextjs2-light.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="tailwindcss.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="js.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="mysql.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div>
          </div>
          <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
          <div className=" grid grid-cols-3 justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="nodejs.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="mongodb.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="motion.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div><div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="git.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="docker.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              <img src="ts.svg" alt="TypeScript" className="w-12 h-12" />
            </a>
          </div>
          
          </div>


        </div>
     
        <div className="flex grid grid-cols-3 overflow-hidden">
        <div className="col-span-1  border border-gray-200 rounded-lg overflow-hidden">
            <Separator />
          </div>
          <div className="col-span-2 flex justify-center items-center border border-gray-200 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-mono text-gray-900">My Contributions</h2>
          </div>
         
         <ul className="mb-4 ml-4   border-l border-gray-200 mt-3 ">
        
            <li className="ml-4 relative ">
              <span className=" text-gray-500">DodoPayments/billing sdk</span>
              <span className="absolute inline-flex items-center justify-center top-2 right-2 ">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-indigo-500 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-indigo-500" />
           
          </span>
             
            </li>
            <li className="ml-4 relative ">
              <span className=" text-gray-500">Link 1</span>
            
             
            </li>

            <li className="ml-4 relative ">
              <span className=" text-gray-500">Link 2</span>
            
             
            </li>
      
          
       
         </ul>
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