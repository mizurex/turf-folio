import fs from "node:fs";
import path from "node:path";

import { MDXTutorial } from "@/docs/components/mdx";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const mdxPath = path.join(
    process.cwd(),
    "src/docs/content/demo.mdx"
  );
  const code = fs.readFileSync(mdxPath, "utf8");
  const browserDemoPath = path.join(
    process.cwd(),
    "src/docs/content/browser-demo.mdx"
  );
  const browserDemoCode = fs.readFileSync(browserDemoPath, "utf8");
  return (
    <div className="mx-auto my-5 max-w-[820px] p-6">
      <h1 className="text-2xl font-semibold text-center"> Components</h1>
     
      <div className="mt-1">
        <MDXTutorial code={code} />
        <Separator className="my-4 border-border" />
        <MDXTutorial code={browserDemoCode} />
      </div>
    </div>
  );
}


