"use client";
import LineLeft from "@/components/svg/line-left";
import LineTop from "@/components/svg/line-right";
import LineRight from "@/components/svg/line-right";
import MiddleLine from "@/components/svg/middle-line";
import SleepLine from "@/components/svg/sleep-line";
import { motion } from "motion/react";
import { use } from "react";

export default function usemotion() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-[radial-gradient(circle,_#f8fafc_1px,_transparent_1px)] [background-size:10px_10px] ">
        {/* container for stacking the absolute lines and the center box */}
        <div className="relative ">
          {/* Left horizontal line — placed immediately to the left (flush) */}
          <div className="absolute flex right-0 translate-x-0.5 bottom-20 ">

<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />
<SleepLine className="w-80 h-8 absolute right-full text-gray-700" />




         </div >
          <div className="relative flex items-center">
    <div className="relative flex flex-col pt-8 max-w-40 overflow-hidden">
  {/* First left line */}
  <LineLeft className="w-40 h-8 absolute bottom-0 text-gray-700" />

  {/* Second left line above the first */}
  <LineLeft className="w-40 h-8 absolute top-0 text-gray-500" />
</div>
      

  
          
  
          {/* Center pill */}
          <div className="z-10 flex items-center relative justify-center text-2xl overflow-hidden font-mono w-20 h-20 bg-neutral-100 rounded-sm p-px">
          
              <div className="w-full h-full bg-white rounded-[3px] relative z-20 flex justify-center text-white ">  <span>
                . <SVG2/>
            </span></div> 
            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_50%,transparent_80%)] animate-spin scale-[1]"></div>
            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_50%,transparent_60%)] animate-spin scale-[1.4] [animation-delay:1.6s]"></div>
            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_50%,transparent_60%)] animate-spin scale-[1.8]"></div>
          </div>
        
        <div className="relative flex flex-col pt-8  max-w-40 overflow-hidden">
  {/* First left line */}
  <MiddleLine    className="w-40 h-8 absolute bottom-0 text-gray-700" />

  
</div>
<div className="z-10 flex items-center relative justify-center text-2xl overflow-hidden font-mono w-20 h-20 bg-neutral-100 rounded-sm p-px">
          
          <div className="w-full h-full bg-white rounded-[3px] relative z-20 flex justify-center text-white ">  <span>
             . <SVG1/>
        </span></div> 
        <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_50%,transparent_80%)] animate-spin scale-[1]"></div>
            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_50%,transparent_60%)] animate-spin scale-[1.4] [animation-delay:1.6s]"></div>
            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_50%,transparent_60%)] animate-spin scale-[1.8]"></div>
      </div>
    
          </div>
      
          <div className="relative flex ml-100 ">

 <LineTop className="w-80 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 <LineTop className="w-40 h-8 absolute right-full text-gray-700" />
 


          </div >
       
        </div>
      </div>

    )
}
 const SVG1 = ()=>{
    return(
       <p>hii</p>
    )
}

 const SVG2 = ()=>{
    return(
      <p>hii</p>
    )
}