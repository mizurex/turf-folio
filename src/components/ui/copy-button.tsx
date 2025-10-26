"use client";

import { useState, useTransition } from "react";

export function CopyButton({ value }: { value: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          try {
            await navigator.clipboard.writeText(value);
            setStatus("copied");
          } catch {
            setStatus("failed");
          }
          setTimeout(() => setStatus("idle"), 1500);
        });
      }}
      className="absolute top-2 right-2 rounded-md bg-zinc-200 px-2 py-1 text-xs text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
      aria-label="Copy code"
    >
      {status === "idle" ? "Copy" : status === "copied" ? "Copied" : "Failed"}
    </button>
  );
}


