import fs from "node:fs";
import path from "node:path";
import { MDXTutorial } from "@/docs/components/mdx";
import { Separator } from "@/components/ui/separator";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const instrumentSans = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

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
  const meteorCardDemoPath = path.join(
    process.cwd(),
    "src/docs/content/meteor-card.mdx"
  );
  const analogWatchDemoCode = fs.readFileSync(analogWatchDemoPath, "utf8");
  const browserDemoCode = fs.readFileSync(browserDemoPath, "utf8");
  const bouncyButtonDemoCode = fs.readFileSync(bouncyButtonDemoPath, "utf8");
  const dashedButtonDemoCode = fs.readFileSync(dashedButtonDemoPath, "utf8");
  const leetcodeGraphDemoCode = fs.readFileSync(leetcodeGraphDemoPath, "utf8");
  const meteorCardDemoCode = fs.readFileSync(meteorCardDemoPath, "utf8");
  return (
    <div className="mx-auto  max-w-[820px] p-6">
      <h1 className={cn("text-4xl font-semibold text-center", instrumentSans.className)}> Components</h1>
      <p className="text-center text-sm text-muted-foreground">A collection of built with Tailwind CSS</p>
     
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
        <Separator className="my-4 border-border" />
        <MDXTutorial code={meteorCardDemoCode} />
      </div>
    </div>
  );
}


