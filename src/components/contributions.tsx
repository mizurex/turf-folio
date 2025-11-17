import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { contributionsData, PalisaFoundationContributions, tamboContributionsData } from "@/data/contribution";
import Pulse from "./pulse";
import * as MX from 'mx-icons'


export default function Contributions() {
    return(
        <div>
          <div className="flex items-center  justify-start">
            <div className="pt-3.5">
                <Pulse/>
            </div>
          
            <h3 className="font-mono text-lg text-foreground mb-3 pt-6 ">billingSDK <strong className="text-muted-foreground">{'>'}</strong></h3>
          </div>
            
               {contributionsData.map((item, idx) => (
               <div key={idx} className="group relative p-2 transition focus-within:ring-2 focus-within:ring-border border-b border-border">
                 <div className="grid grid-cols-3 items-start gap-2">
                   <div className="col-span-2">
                     <motion.a
                      
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-1 font-mono text-sm text-foreground truncate"
                       aria-label={`${item.title} link`}
                     >
                       <span className="truncate text-link hover:underline">{item.title}</span>
                      <motion.div>
                      <MX.Link21Linear
  size={15}
  color="#1c5db8"
/>
                       </motion.div>
                     </motion.a>
                     <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                   </div>
                   <div className="col-span-1 flex items-start justify-end">
                     <span className="text-xs text-muted-foreground">{item.year}</span>
                   </div>
                 </div>
               </div>
             ))}
            <div className="flex items-center  justify-start">
            <div className="pt-3.5">
                <Pulse/>
            </div>
          
            <h3 className="font-mono text-lg text-foreground mb-3 pt-6 ">tambo ai <strong className="text-muted-foreground">{'>'}</strong></h3>
          </div>  
            {tamboContributionsData.map((item, idx) => (
               <div key={idx} className="group relative p-2 transition focus-within:ring-2 focus-within:ring-border border-b border-border">
                 <div className="grid grid-cols-3 items-start gap-2">
                   <div className="col-span-2">
                     <motion.a
                      
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-1 font-mono text-sm text-foreground truncate"
                       aria-label={`${item.title} link`}
                     >
                       <span className="truncate text-link hover:underline">{item.title}</span>
                       <motion.div>
                         <ArrowUpRight className="h-4 w-4 text-indigo-500" size={16} />
                       </motion.div>
                     </motion.a>
                     <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                   </div>
                   <div className="col-span-1 flex items-start justify-end">
                     <span className="text-xs text-muted-foreground">{item.year}</span>
                   </div>
                 </div>
               </div>
             ))}

<div className="flex items-center  justify-start">
            <div className="pt-3.5">
                <Pulse/>
            </div>
          
            <h3 className="font-mono text-lg text-foreground mb-3 pt-6 "> Palisa Foundation <strong className="text-muted-foreground">{'>'}</strong></h3>
          </div>  
            {PalisaFoundationContributions.map((item, idx) => (
               <div key={idx} className="group relative p-2 transition focus-within:ring-2 focus-within:ring-border border-b border-border">
                 <div className="grid grid-cols-3 items-start gap-2">
                   <div className="col-span-2">
                     <motion.a
                      
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-1 font-mono text-sm text-foreground truncate"
                       aria-label={`${item.title} link`}
                     >
                       <span className="truncate text-link hover:underline">{item.title}</span>
                       <motion.div>
                         <ArrowUpRight className="h-4 w-4 text-indigo-500" size={16} />
                       </motion.div>
                     </motion.a>
                     <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                   </div>
                   <div className="col-span-1 flex items-start justify-end">
                     <span className="text-xs text-muted-foreground">{item.year}</span>
                   </div>
                 </div>
               </div>
             ))}
        </div>
    )
  }