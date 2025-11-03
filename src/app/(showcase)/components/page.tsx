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
  const analogWatchDemoPath = path.join(
    process.cwd(),
    "src/docs/content/analog-watch.mdx"
  );
  const bouncyButtonDemoPath = path.join(
    process.cwd(),
    "src/docs/content/bouncy-button.mdx"
  );
  const dashedButtonDemoPath = path.join(
    process.cwd(),
    "src/docs/content/dashed-button.mdx"
  );
  const leetcodeGraphDemoPath = path.join(
    process.cwd(),
    "src/docs/content/leetcode-graph.mdx"
  );
  const leetcodeGraphPath = path.join(
    process.cwd(),
    "src/docs/registry/components/leetcode-graph.tsx"
  );
  const analogWatchDemoCode = fs.readFileSync(analogWatchDemoPath, "utf8");
  const browserDemoCode = fs.readFileSync(browserDemoPath, "utf8");
  const bouncyButtonDemoCode = fs.readFileSync(bouncyButtonDemoPath, "utf8");
  const dashedButtonDemoCode = fs.readFileSync(dashedButtonDemoPath, "utf8");
  const leetcodeGraphDemoCode = fs.readFileSync(leetcodeGraphDemoPath, "utf8");
  const leetcodeGraphCode = fs.readFileSync(leetcodeGraphPath, "utf8");
  return (
    <div className="mx-auto my-5 max-w-[820px] p-6">
      <h1 className="text-2xl font-semibold text-center"> Components</h1>
     
      <div className="mt-1">
        <MDXTutorial code={code} />
        <Separator className="my-4 border-border" />
        <MDXTutorial code={browserDemoCode} />
        <Separator className="my-4 border-border" />
        <MDXTutorial code={bouncyButtonDemoCode} />
        <Separator className="my-4 border-border" />
        <MDXTutorial code={dashedButtonDemoCode} />
        <Separator className="my-4 border-border" />
        <MDXTutorial code={leetcodeGraphDemoCode} />
      </div>
    </div>
  );
}


