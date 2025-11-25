export default function Pulse() {
    return (
        <div className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inline-flex h-[3px] w-[3px] rounded-full bg-foreground opacity-90 animate-ping "></span>
            <span className="relative inline-flex rounded-full h-[3px] w-[3px] bg-foreground border-2 border-neutral-300"></span>
        </div>
           
       
    )
}