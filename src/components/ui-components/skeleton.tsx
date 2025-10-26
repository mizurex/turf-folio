import { Image, Lock } from "lucide-react";

export default function Skeleton() {
  return (
   
      <div className="bg-neutral-100 h-60 w-70 rounded-md border border-neutral-300">
        <div className="flex items-center justify-between border-b border-neutral-300">
          <div className="flex items-center gap-1 p-2 ">
            <div className="h-2 w-2 rounded-full bg-[#ff5f56] border border-neutral-200" />
            <div className="h-2 w-2 rounded-full bg-[#ffbd2e] border border-neutral-200 mx-0.5" />
            <div className="h-2 w-2 rounded-full bg-[#27c93f] border border-neutral-200" />
          </div>
          <div className="flex items-center justify-center p-1.5 w-full flex justify-start border border-neutral-300 m-2 rounded-md">
            <Lock className="w-3 h-3 text-neutral-500" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="animate-pulse flex flex-col gap-3">
            <div className="flex items-center gap-14">
              <div className="h-9 w-9 bg-neutral-300/50 rounded-full" />
              <div className="h-4 w-3/5 bg-neutral-300/40 rounded" />
            </div>
            <div className="space-y-2 mt-2">
              <div className="h-4 w-2/3 bg-neutral-300/30 rounded" />
              <div className="h-4 w-5/6 bg-neutral-300/30 rounded" />
              <div className="h-4 w-2/3 bg-neutral-300/20 rounded" />
            </div>
            <div className="h-4 w-full bg-neutral-200/40 rounded mt-2" />
          </div>
        </div>
      </div>
 
  );
}
