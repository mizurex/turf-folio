import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { findNeighbour, getAllPosts, getPostBySlug } from "@/features/blog/data/posts";
import Link from "next/link";
import { Link2 } from "lucide-react";
export default async function Post({
  params,
}: {params: Promise<{ slug: string[] }>
}) {

  const slug = (await params).slug.join("/");
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { metadata, content } = post;
  return (
    <article className="mx-auto max-w-3xl p-6 prose dark:prose-invert">
        <div className="h-40 rounded-[3px] relative border border-border bg-zinc-950/0.75 bg-[repeating-linear-gradient(130deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_1px,transparent_5px)] bg-center p-4 [--pattern-foreground:var(--color-zinc-600)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5 ">
            {metadata.title? <h1 className="font-light absolute bottom-0 right-0 px-3 text-xl" >{metadata.title}</h1> : null} 
        </div>
<div className="mt-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
  <span className=" text-sm text-muted-foreground">
        Links
    </span>
    <span className="flex items-center gap-2 text-muted-foreground">
        <Link2 className="size-4 mt-0.5" />
        {metadata.link ? (
            <Link
                href={metadata.link}
                className="text-sm text-muted-foreground font-mono underline" 
            >
                Read
            </Link>
        ) : null}
    </span>

    </div>
  
 <span className=" text-sm text-foreground">
    [4 min read]
 </span>
</div>
<div className="mt-2 border-t border-border pt-2">
     <MDXRemote source={content} />
</div> 
<div className="mt-6 flex items-center gap-2 text-muted-foreground justify-between border-t border-border pt-2" >
    <span className="text-sm">
        jay @potatoturf
    </span>
    <span className="text-sm">
        Nov-2025
    </span>
</div>   
    </article>
  ); 
}

export async function generateStaticParams() { 
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: [p.slug] }));
}

export const dynamicParams = false;


