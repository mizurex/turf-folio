"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface NavBarProps {
  tabs?: { label: string; href: string }[];
  colors?: string[];
}

const defaultTabs: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "About", href: "#" },
];
export default function NavBar({ tabs, colors }: NavBarProps) {
  const defaultColors = [
    "#FF0080", // Vivid Pink
    "#FFDE00", // Vivid Yellow
    "#32FF7A", // Neon Green
    "#00CFFF", // Bright Blue
    "#FF3D00", // Vibrant Orange-Red
    "#FF61A6", // Disco Pink
    "#8A2BE2", // Blue Violet
    "#FFD300", // Bright Gold
    "#FF6F00", // Vivid Orange
    "#21D4FD", // Light Neon Blue
    "#A259FF", // Purple
    "#FEE440", // Disco Yellow
    "#00FFB0", // Neon Aqua
    "#FD5E53", // Disco Coral
    "#46C3DB", // Cyan
  ];

  type TabRef = HTMLButtonElement | null;
  const [tabRefs, _] = useState<TabRef[]>([]);

  const navRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const elRect = tabRefs[activeIdx ?? -1]?.getBoundingClientRect();
  const navRect = navRef.current?.getBoundingClientRect();
  const activeTabRect =
    elRect && navRect
      ? {
          top: elRect.top - navRect.top,
          left: elRect.left - navRect.left,
          width: elRect.width,
          height: elRect.height,
        }
      : null;
  const randomColor = colors
    ? colors[Math.floor(Math.random() * colors.length)]
    : defaultColors[Math.floor(Math.random() * defaultColors.length)];

  return (
    <nav ref={navRef} className="bg-background relative flex items-center p-2">
      {tabs
        ? tabs.map((tab, index) => (
            <button
              ref={(el) => {
                tabRefs[index] = el;
              }}
              key={tab.label}
              className="px-2.5 py-1.5 z-10 font-medium cursor-pointer "
              onClick={() => setActiveIdx(index)}
            >
              <Link href={tab.href}> {tab.label}</Link>
            </button>
          ))
        : defaultTabs.map((tab, index) => (
            <button
              ref={(el) => {
                tabRefs[index] = el;
              }}
              key={tab.label}
              className="px-2.5 py-1.5 z-10 font-medium cursor-pointer "
              onClick={() => setActiveIdx(index)}
            >
              <Link href={tab.href}> {tab.label} </Link>
            </button>
          ))}
      <AnimatePresence>
        {activeTabRect ? (
          <motion.button
            className="absolute rounded-full"
            style={{
              backgroundColor: `${randomColor}`,
            }}
            initial={{
              top: activeTabRect.top,
              left: activeTabRect.left,
              width: activeTabRect.width,
              height: activeTabRect.height,
              opacity: 0,
            }}
            animate={{
              top: activeTabRect.top,
              left: activeTabRect.left,
              width: activeTabRect.width,
              height: activeTabRect.height,
              opacity: 1,
            }}
            transition={{
              duration: 0.17,
            }}
          />
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
