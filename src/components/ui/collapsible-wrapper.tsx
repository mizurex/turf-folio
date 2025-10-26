"use client";

import React from "react";

export function CodeCollapsibleWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`relative ${className || ""}`}>
      {open ? (
        <div>{children}</div>
      ) : (
        <div className="relative max-h-80 overflow-hidden rounded-b-lg">
          <div>{children}</div>
          <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-gradient-to-t from-[#111]/30 to-transparent pb-4 text-sm text-gray-400">
            <button
              className="rounded-md border px-3 py-1"
              onClick={() => setOpen(true)}
            >
              Expand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}