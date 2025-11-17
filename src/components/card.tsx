import { cn } from "@/lib/utils";

export default function Card({children, className}:{children:React.ReactNode, className?:string}) {
    return (
    <div className={cn(" p-4 border", className)}>
        {children}
    </div>
    )
}
