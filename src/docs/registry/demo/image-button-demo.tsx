"use client";
import { useState } from "react";
import ImageContextBadge from "../components/image-button";
const SAMPLE_IMAGE = {
  dataUrl:
    'https://th.bing.com/th/id/OIP.eCqdI9BWZowQzhPLtQJF4QAAAA?w=153&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
};
export default function ImageButtonDemo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <button
        type="button"
        className="rounded-md border border-dashed px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
        onClick={() => {
          setVisible(true);
          setIsExpanded(false);
        }}
      >
        Reset image button
      </button>
    );
  }
  return (
    <ImageContextBadge
      image={SAMPLE_IMAGE}
      displayName="Froggy"
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded((prev) => !prev)}
      onRemove={() => setVisible(false)}
    />
  );
}


