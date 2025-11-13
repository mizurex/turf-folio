import fs from "node:fs";
import path from "node:path";
import { MDXTutorial } from "@/docs/components/mdx";
import { Separator } from "@/components/ui/separator";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

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
      <p className="text-center text-sm text-muted-foreground pt-3">A collection built with React and Tailwind CSS</p>

      <section aria-label="About these components" className="mt-4">
        <div className="rounded-lg border border-border bg-accent/30 p-4">
         
          <p className={cn("mt-1 text-sm text-foreground text-center font-mono leading-relaxed whitespace-pre-line")}>
            I like crafting small UI pieces. This is my own collection of
            reusable components that you can drop into your projects.
          </p>
        </div>
      </section>
     
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


