import { cn } from "@/lib/utils"

export default function ButtonTwo({children, className}:{children:React.ReactNode, className?:string}){
    return(
    
        <button className={cn("", className)}>
         {/* Top-left + */}
 
 
         {children}
       </button>
 
    
    )
 }