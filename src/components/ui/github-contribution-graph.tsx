'use client'

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

interface GitHubContributionsProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username,
  compact = false,
  className = ""
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {

    light:  ["#f5f5f5", "#dcdcdc", "#9a9a9a", "#050505","#050505"],
    dark: ["#1f1f1f", "#1f1f1f", "#4c4c4c", "#f5f5f5","#f5f5f5"],
  };

  if (!mounted) {
    return (
      <div className={`w-full ${compact ? 'h-[120px]' : 'h-[160px]'} rounded-xl bg-muted animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${compact ? 'p-1' : 'p-3'} `}>
          <div className="gh-calendar-wrapper">
            <GitHubCalendar
              username={username}
              colorScheme={resolvedTheme as "light" | "dark"}
              fontSize={compact ? 12 : 12}
              blockSize={compact ? 10 : 12}
              blockMargin={compact ? 3 : 4}
              theme={theme}
            />
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .gh-calendar-wrapper :global(rect) {
          rx: ${Math.round((compact ? 10 : 12) / 2)}px;
          ry: ${Math.round((compact ? 10 : 12) / 2)}px;
          filter: none !important;
          stroke: none !important;
          shape-rendering: geometricPrecision;
        }
      `}</style>
    </div>
  );
};

export default GitHubContributions;