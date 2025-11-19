import Card from "@/components/card";
import Link from "next/link";
import { getAllPosts } from "@/features/blog/data/posts";

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
    <main className="min-h-dvh max-w-3xl w-full mx-auto px-6 py-8">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-mono">Find my blogs and learning resources</h1>
          <p className="text-muted-foreground mt-2 font-mono">
            Stay tuned for updates...
          </p>
        </div>
       
        <div className="mt-10 grid gap-4">
          {posts.map((p) => (
            <Card key={p.slug} className="w-full text-left relative">
              <div>
                <h2 className="text-lg font-mono">{p.metadata.title}</h2>
                {p.metadata.createdAt ? (
                  <div className="text-xs text-muted-foreground font-mono">{formatDate(p.metadata.createdAt)}</div>
                ) : null}
                {p.metadata.description ? (
                  <p className="text-muted-foreground mt-2 font-mono">{p.metadata.description}</p>
                ) : null}
              </div>
              <div className="absolute bottom-5 right-5">
                <Link href={`/blog/${p.slug}`}>
                  <span className="bg-background border border-border p-2 rounded-[30px] text-sm text-muted-foreground font-mono underline">Read more</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main> 
  );
}


