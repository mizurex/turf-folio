"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";

export function CodeTabs(props: React.ComponentProps<typeof Tabs>) {
  const [value, setValue] = React.useState("manual"); // or "cli"

  return (
    <Tabs
      value={value}
      onValueChange={(v) => setValue(v)}
      {...props}
    />
  );
}