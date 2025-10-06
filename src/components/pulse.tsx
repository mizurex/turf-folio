export default function Pulse() {
    return (
        <div className="relative flex items-center justify-center w-5 h-5">
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-neutral-700 opacity-75 animate-ping border-1 border-neutral-400"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-700 border-1 border-neutral-400"></span>
          
        </div>
           
       
    )
}