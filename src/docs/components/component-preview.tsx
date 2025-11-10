"use client";

import React from "react";

import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TutorialRegistry } from "../registry";
import { CodeIcon, EyeIcon } from "lucide-react";

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
        <TabsList>
          <TabsTrigger value="preview"><EyeIcon className="w-4 h-4 " /></TabsTrigger>
          <TabsTrigger value="code"><CodeIcon className="w-4 h-4 " /></TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="rounded-lg border border-edge bg-zinc-950/0.75 bg-[repeating-linear-gradient(40deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_1px,transparent_5px)] bg-center p-4 [--pattern-foreground:var(--color-zinc-600)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
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


