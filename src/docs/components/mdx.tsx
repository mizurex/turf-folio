import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeExternalLinks from "rehype-external-links";
import type { LineElement } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import { CodeTabs } from "@/components/code-tabs";
import { getIconForLanguageExtension, Icons } from "@/components/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { ComponentPreview } from "@/docs/components/component-preview";
import { ComponentSource } from "@/docs/components/component-source";
import { CopyButton } from "@/docs/components/copy-button";
import { rehypeComponentTutorial } from "@/docs/lib/rihype-component";

const components: MDXRemoteProps["components"] = {
  ComponentPreview,
  ComponentSource,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  CodeTabs,
  figure({ className, ...props }: React.ComponentProps<"figure">) {
    const hasPrettyCode = "data-rehype-pretty-code-figure" in (props as Record<string, unknown>);
    return (
      <figure className={(hasPrettyCode ? "not-prose " : "") + (className || "")} {...props} />
    );
  },
  figcaption: ({ children, ...props }: React.ComponentProps<"figcaption">) => {
    const p = props as Record<string, unknown> & { [key: string]: unknown };
    const iconExtension =
      "data-language" in p && typeof p["data-language"] === "string"
        ? getIconForLanguageExtension(p["data-language"] as string)
        : null;

    return (
      <figcaption {...props}>
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Steps: (props: React.ComponentProps<"div">) => (
    <div className="md:ml-3.5 md:border-l md:pl-7.5 prose-h3:text-wrap" {...props} />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={cn("step", className)} {...props} />
  ),
  TabsTriggerShadcnCLI: () => (
    <TabsTrigger className="pl-2" value="cli">
      <Icons.shadcn />
      shadcn CLI
    </TabsTrigger>
  ),
  pre(
    props: { __rawString__?: string; __withMeta__?: boolean } & React.ComponentProps<"pre">
  ) {
    const { __rawString__, __withMeta__, ...rest } = props as any;
    return (
      <>
        <pre {...rest} />
        {__rawString__ ? <CopyButton value={__rawString__} /> : null}
      </>
    );
  },
};

const options: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: "nofollow noopener noreferrer" },
      ],
      rehypeSlug,
      rehypeComponentTutorial,
      () => (tree: unknown) => {
        visit(tree as never, (node: unknown) => {
          const n = node as any;
          if (n?.type === "element" && n?.tagName === "pre") {
            const [codeEl] = n.children || [];
            if (!codeEl || codeEl.tagName !== "code") return;
            n.__rawString__ = codeEl.children?.[0]?.value;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: { dark: githubDark as any, light: githubLight as any },
          keepBackground: false,
          onVisitLine(node: LineElement) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " } as any];
            }
          },
        },
      ],
      () => (tree: unknown) => {
        visit(tree as never, (node: unknown) => {
          const n = node as any;
          if (n?.type === "element" && n?.tagName === "figure") {
            const pre = n.children?.at ? n.children.at(-1) : n.children?.[n.children.length - 1];
            if (!pre || pre.tagName !== "pre") return;
            (pre as any).properties["__withMeta__"] = n.children?.[0]?.tagName === "figcaption";
            (pre as any).properties["__rawString__"] = (n as any).__rawString__;
          }
        });
      },
    ],
  },
};

export function MDXTutorial({ code }: { code: string }) {
  return <MDXRemote source={code} components={components} options={options} />;
}


