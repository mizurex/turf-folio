import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { contributionsData } from "@/data/contribution";


export default function Contributions() {
    return(
        <div>
               {contributionsData.map((item, idx) => (
               <div key={idx} className="group relative p-2 transition focus-within:ring-2 focus-within:ring-gray-300 border-b border-gray-200">
                 <div className="grid grid-cols-3 items-start gap-2">
                   <div className="col-span-2">
                     <motion.a
                      
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group/title inline-flex items-center gap-1 font-mono text-sm text-gray-900 truncate"
                       aria-label={`${item.title} link`}
                     >
                       <span className="truncate text-blue-700 hover:underline">{item.title}</span>
                       <motion.div>
                         <ArrowUpRight className="h-4 w-4 text-indigo-500" size={16} />
                       </motion.div>
                     </motion.a>
                     <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                   </div>
                   <div className="col-span-1 flex items-start justify-end">
                     <span className="text-xs text-gray-500">{item.year}</span>
                   </div>
                 </div>
               </div>
             ))} 
        </div>
    )
  }