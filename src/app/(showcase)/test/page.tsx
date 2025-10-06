
export default function Button(){
   return(
    <div className="flex items-center justify-center h-screen w-full  ">
            <button className="relative px-3 py-1 border border-dashed border-neutral-400 border-[1px] bg-[#e6ecf9] text-black cursor-pointer hover:bg-[#d1d9f0]/70">
        {/* Top-left + */}
        <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-xs font-medium">+</span>
        {/* Top-right + */}
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium">+</span>
        {/* Bottom-left + */}
        <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-xs font-medium">+</span>
        {/* Bottom-right + */}
        <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-xs font-medium">+</span>

        Hello
      </button>

    </div>
   )
}