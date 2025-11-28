"use client";

import React from "react";

import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TutorialRegistry } from "../registry";

export function ComponentPreview({
  name,
  children,
  codeCollapsible = false,
}: {
  name: string;
  children?: React.ReactNode;
  codeCollapsible?: boolean;
}) {
  const Component = React.useMemo(() => TutorialRegistry[name]?.component, [name]);

  return (
    <div className="my-6 not-prose">
      <Tabs defaultValue="preview" className="gap-4">
        <TabsList className="flex gap-2 bg-zinc-100 border border-border dark:bg-zinc-950 py-3 rounded-[4px] dark:border-border">
          <TabsTrigger value="preview" className="group dark:data-[state=active]:bg-black dark:data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-border data-[state=active]:bg-neutral-50 data-[state=active]:text-neutral-900 data-[state=active]:rounded-[4px] transition-all duration-200 font-sans font-medium dark:border-transparent">
            <span>Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="group dark:data-[state=active]:bg-black dark:data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-border data-[state=active]:bg-neutral-50 data-[state=active]:text-neutral-900 data-[state=active]:rounded-[4px] transition-all duration-200 font-sans font-medium dark:border-transparent">
            <span>Code</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="rounded-[8px] dark:border dark:border-border bg-zinc-950/0.75 bg-[repeating-linear-gradient(40deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_1px,transparent_5px)] bg-center p-4 [--pattern-foreground:var(--color-zinc-600)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
          style={{
            boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px -1px rgba(0, 0, 0, 0.06), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)"
          }}
          >
            <div className="flex min-h-80 items-center justify-center font-sans">
              <React.Suspense fallback={<div className="text-sm text-muted-foreground">Loading…</div>}>
                {Component ? <Component /> : <div className="text-sm text-muted-foreground">Component not found: {name}</div>}
              </React.Suspense>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="[&>figure]:m-0">
          {codeCollapsible ? (
            <CodeCollapsibleWrapper className="my-0">{children}</CodeCollapsibleWrapper>
          ) : (
            children
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}


