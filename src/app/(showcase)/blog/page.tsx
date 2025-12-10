import Card from "@/components/card";
import Link from "next/link";
import { getAllPosts } from "@/features/blog/data/posts";
import DiagonalPattern from "@/components/pattern";
import Separator from "@/components/line-separator";

export default function BlogIndex() {
  const posts = getAllPosts();
  const formatDate = (d: unknown) => {
    if (!d) return "";
    try {
      if (typeof d === "string") return d;
      if (d instanceof Date) return d.toISOString().slice(0, 10);
      return String(d);
    } catch {
      return "";
    }
  };
  return (
    <div className="">
       
    <main className="min-h-dvh border-l  border-border/80 dark:border-[#333333]/50 max-w-3xl w-full mx-auto px-6 py-8">
      <DiagonalPattern side="left" />
       <DiagonalPattern side="right" />
      <div>
        <div className="">
          <Separator width="w-[150rem]" />
          <h1 className="text-2xl text-left font-mono font-light border-r border-border dark:border-[#333333]/50 w-fit pr-4">Find my blogs </h1>
          <Separator width="w-[150rem]" />
          <p className="text-muted-foreground mt-2 font-mono">
            Stay tuned for updates...
          </p>
        </div>
        <Separator width="w-[150rem]" />
       
        <div className="mt-10 grid gap-4 z-10 ">
          {posts.map((p) => (
            <Card key={p.slug} className="w-full text-left relative">
              <div className="pb-5">
                <h2 className="text-lg font-mono">{p.metadata.title}</h2>
                {p.metadata.createdAt ? (
                  <div className="text-xs text-muted-foreground font-mono">{formatDate(p.metadata.createdAt)}</div>
                ) : null}
                {p.metadata.description ? (
                  <p className="text-muted-foreground mt-2 font-mono">{p.metadata.description}</p>
                ) : null}
              </div>
              <div className="absolute bottom-0 right-5">
                <Link href={`/blog/${p.slug}`}>
                  <span className="bg-background  rounded-[30px] text-sm text-muted-foreground font-mono underline hover:text-link">Read more</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main> 
    </div>
  );
}


