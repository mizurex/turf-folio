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

 // GitHub-like default green color palette for contribution graph
const theme = {
  light: [
    "#ebedf0", // GitHub light background
    "#9be9a8", // GitHub contribution level 1
    "#40c463", // GitHub contribution level 2
    "#30a14e", // GitHub contribution level 3
    "#216e39"  // GitHub contribution level 4 (darkest green)
  ],
  dark: [
    "#161b22", // GitHub dark background
    "#0e4429", // GitHub dark level 1
    "#006d32", // GitHub dark level 2
    "#26a641", // GitHub dark level 3
    "#39d353"  // GitHub dark level 4 (brightest green)
  ]
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