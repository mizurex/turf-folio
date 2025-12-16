import fs from "node:fs";
import path from "node:path";
import { MDXTutorial } from "@/docs/components/mdx";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const mdxPath = path.join(
    process.cwd(),
    `src/docs/content/${slug}.mdx`
  );

  if (!fs.existsSync(mdxPath)) {
    notFound();
  }

  const code = fs.readFileSync(mdxPath, "utf8");

  // Convert slug to title case for display
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className=" max-w-4xl py-6 lg:py-10 mx-auto font-satoshi ">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className={cn("inline-block font-light text-3xl tracking-tight lg:text-4xl text-foreground/80 ")}>
          {title}
        </h1>
      </div>
      <MDXTutorial code={code} />
    </div>
  );
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/docs/content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

