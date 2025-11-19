export default function Pulse() {
    return (
        <div className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inline-flex h-[4px] w-[4px] rounded-full bg-[#6ad3ad] opacity-90 animate-ping "></span>
            <span className="relative inline-flex rounded-full h-[4px] w-[4px] bg-[#6ad3ad] border-2 border-neutral-300"></span>
        </div>
           
       
    )
}