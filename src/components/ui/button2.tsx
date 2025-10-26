import { cn } from "@/lib/utils"

export default function ButtonTwo({children, className}:{children:React.ReactNode, className?:string}){
    return(
    
        <button className={cn("relative px-3 py-1 border border-dashed border-neutral-400 border-[1px]  text-black cursor-pointer", className)}>
         {/* Top-left + */}
         <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-xs font-medium">+</span>
         {/* Top-right + */}
         <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium">+</span>
         {/* Bottom-left + */}
         <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-xs font-medium">+</span>
         {/* Bottom-right + */}
         <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-xs font-medium">+</span>
 
         {children}
       </button>
 
    
    )
 }