import {Lock} from "lucide-react";
import { AiFillHome } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";

interface BrowserProps {
    url?: string;
    content?: React.ReactNode | string;
}

export default function Browser({url, content}: BrowserProps) {
  return (
      <div className="bg-code h-60 w-70 rounded-md border border-border dark:border-neutral-700 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border dark:border-neutral-700">
          <div className="flex items-center gap-1 p-2 ">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-neutral-200" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-neutral-200 mx-0.5" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-neutral-200" />
          </div>
          <div className="flex items-center bg-[color-mix(in_oklab,var(--color-edge)_40%,transparent)] justify-center p-1.5 w-full flex justify-start border border-border dark:border-neutral-700 m-2 rounded-md gap-2">
            <MdRefresh className="w-3 h-3 text-muted-foreground mt-0.5" />
            <AiFillHome className="w-3 h-3 text-muted-foreground" />
            
            <div className="pl-2">
                <p className="text-xs text-muted-foreground font-mono">
                    {url || ""}
                </p>
            </div>
          </div>
        </div>    
        <div className="p-3 space-y-1">
            {typeof content === "string" ? <p className="text-xs text-muted-foreground font-mono">{content}</p> : content}
        </div>
      </div>
  );
}
