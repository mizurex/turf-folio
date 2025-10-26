"use client";

import { Tabs } from "./ui/tabs";

export function CodeTabs(props: React.ComponentProps<typeof Tabs>) {
  return (
    <Tabs
      value="manual"
      onValueChange={(value) => {
        console.log(value);
      }}
      {...props}
    />
  );
}
