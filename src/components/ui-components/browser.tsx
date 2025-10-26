import {Lock} from "lucide-react";

interface BrowserProps {
    url?: string;
    content?: React.ReactNode | string;
}

export default function Browser({url, content}: BrowserProps) {
  return (
      <div className="bg-code h-60 w-70 rounded-md border border-border overflow-hidden">
        <div className="flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-1 p-2 ">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-neutral-200" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-neutral-200 mx-0.5" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-neutral-200" />
          </div>
          <div className="flex items-center bg-[color-mix(in_oklab,var(--color-edge)_40%,transparent)] justify-center p-1.5 w-full flex justify-start border border-border m-2 rounded-md">
            <Lock className="w-3 h-3 text-muted-foreground" />
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
