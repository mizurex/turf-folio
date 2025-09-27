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
             . <SVG/>
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

export const SVG = ()=>{
    return(
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Abbott</title><path d="M20.812 2.4H0v3.197h19.773V5.6a1.03 1.03 0 0 1 1.032 1.031v10.742l-.004.007a1.034 1.034 0 0 1-1.034 1.025H4.23c-.569 0-1.033-.46-1.033-1.033v-4.34c0-.57.464-1.032 1.033-1.032H17.6V8.803H3.188A3.185 3.185 0 0 0 0 11.99v6.423A3.188 3.188 0 0 0 3.188 21.6h17.624A3.187 3.187 0 0 0 24 18.412V5.587A3.186 3.186 0 0 0 20.812 2.4"/></svg>
    )
}

export const SVG2 = ()=>{
    return(
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Akamai</title><path d="M13.0548 0C6.384 0 .961 5.3802.961 12.0078.961 18.6354 6.3698 24 13.0548 24c.6168 0 .6454-.3572.0859-.5293-4.9349-1.5063-8.5352-6.069-8.5352-11.4629 0-5.4656 3.6725-10.0706 8.6934-11.5195C13.8153.3448 13.6716 0 13.0548 0Zm2.3242 1.8223c-5.2648 0-9.5254 4.2606-9.5254 9.5254 0 1.2193.2285 2.3818.6445 3.4433.1722.459.4454.4584.4024.0137-.0287-.3156-.0567-.6447-.0567-.9746 0-5.2648 4.2606-9.5254 9.5254-9.5254 4.9779 0 6.4698 2.2235 6.6563 2.08.2008-.1577-1.808-4.5624-7.6465-4.5624zm.4687 4.0703c-1.8622.0592-3.651.7168-5.1035 1.8554-.2582.2009-.1567.3284.1445.1993 2.4675-1.076 5.5812-1.1046 8.6368-.043 2.0514.7173 3.2413 1.7364 3.3418 1.6934.1578-.0718-1.1915-2.2226-3.6446-3.1407-1.1135-.4196-2.2576-.6-3.375-.5644z"/></svg>
    )
}