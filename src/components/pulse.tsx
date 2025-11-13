export default function Pulse() {
    return (
        <div className="relative flex items-center justify-center w-5 h-5">
            <span className="absolute inline-flex h-[6px] w-[6px] rounded-full bg-neutral-900 opacity-90 animate-ping border-1 border-neutral-800"></span>
            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-neutral-700 border-2 border-neutral-400"></span>
        </div>
           
       
    )
}