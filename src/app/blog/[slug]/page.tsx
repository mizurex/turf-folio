// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = params.slug; // your lookup
  if (!post) notFound();
  return <article>
    <p>Stay tuned for updates... {post}</p>
  </article>;
}

// Only pre-render these slugs. Any other slug should 404.
export const dynamicParams = false;


export async function generateStaticParams() {
  const slugs = ["1", "2", "3"];
  return slugs.map((slug: string) => ({ slug }));
}