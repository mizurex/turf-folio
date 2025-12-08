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
  light: [
    "#ecebe1ff", // softer white
    "#bcbcbcff", // gentle grey
    "#aebef4ff", // soft muted blue
    "#7c94ccff", // medium soft blue
    "#4a5f9eff"  // dim deep blue
  ],

  dark: [
    "#1a1a1a", // slightly softer black
    "#242424", // muted dark grey
    "#5a5a5a", // soft grey for mid elements
    "#c3d8faff", // pale soft blue (readable highlight)
    "#aebef4ff"  // dim bright accent
  ],
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
   
    </div>
  );
};

export default GitHubContributions;