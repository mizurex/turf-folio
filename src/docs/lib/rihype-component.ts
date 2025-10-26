import fs from "node:fs";
import path from "node:path";

import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

import { TutorialRegistry } from "@/docs/registry";

export function rehypeComponentTutorial() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      const nameAttr = getAttr(node, "name");
      const srcAttr = getAttr(node, "src");
      const titleAttr = getAttr(node, "title");
      const showLineNumbersAttr = getAttr(node, "showLineNumbers");

      if (node.name === "ComponentSource") {
        if (!nameAttr && !srcAttr) return null;

        try {
          const src = srcAttr
            ? path.join(process.cwd(), srcAttr.value as string)
            : TutorialRegistry[nameAttr?.value as string]?.files?.[0]?.path;

          if (!src) return null;
          let source = fs.readFileSync(src, "utf8");
          source = source.replaceAll("export default", "export");
          const titleValue = (titleAttr?.value as string) || path.basename(src);
          const showLineNumbers = Boolean(showLineNumbersAttr);

          if (!node.children) node.children = [];
          node.children.push(
            u("element", {
              tagName: "pre",
              properties: {},
              children: [
                u("element", {
                  tagName: "code",
                  properties: { className: ["language-tsx"] },
                  data: {
                    meta: [
                      titleValue ? `title="${titleValue}"` : "",
                      showLineNumbers ? "showLineNumbers" : "",
                    ].join(" "),
                  },
                  children: [{ type: "text", value: source }],
                }),
              ],
            })
          );
        } catch (e) {
          console.error(e);
        }
      }

      if (node.name === "ComponentPreview") {
        const name = nameAttr?.value as string;
        if (!name) return null;

        try {
          const src = TutorialRegistry[name]?.files?.[0]?.path;
          if (!src) return null;
          let source = fs.readFileSync(src, "utf8");
          source = source.replaceAll("export default", "export");
          const titleValue = (titleAttr?.value as string) || path.basename(src);
          const showLineNumbers = Boolean(showLineNumbersAttr);

          if (!node.children) node.children = [];
          node.children.push(
            u("element", {
              tagName: "pre",
              properties: {},
              children: [
                u("element", {
                  tagName: "code",
                  properties: { className: ["language-tsx"] },
                  data: {
                    meta: [
                      titleValue ? `title="${titleValue}"` : "",
                      showLineNumbers ? "showLineNumbers" : "",
                    ].join(" "),
                  },
                  children: [{ type: "text", value: source }],
                }),
              ],
            })
          );
        } catch (e) {
          console.error(e);
        }
      }
    });
  };
}

function getAttr(node: UnistNode, attr: string) {
  return node.attributes?.find((a) => a.name === attr);
}


