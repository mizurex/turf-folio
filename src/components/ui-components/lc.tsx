"use client";

import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const leetGraphVariants = cva(
  "py-2 px-4  w-full max-w-3xl overflow-x-auto transition-all",
  {
    variants: {
      variant: {
        default:
          " bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
        shadow:
          "border-none bg-neutral-100 dark:bg-neutral-800 shadow-md shadow-neutral-200 dark:shadow-neutral-700 text-neutral-900 dark:text-neutral-100 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const blockVariants = cva(
  " border transition-all cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-transparent",
        outline: "border-neutral-300 dark:border-neutral-700",
      },
      size: {
        sm: "size-2",
        default: "size-2.5",
        lg: "size-4",
        xl: "size-5",
      },
      animate: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animate: "none",
    },
  }
);

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

type Theme =
  | "green"
  | "blue"
  | "red"
  | "orange"
  | "purple"
  | "yellow"
  | "monochrome";

function getColor(
  count: number,
  theme: Theme = "green",
  scheme: "light" | "dark" = "light"
) {
  const halloweenOrange =
    scheme === "dark"
      ? ["#27212a", "#53354a", "#a64e1e", "#ffd580", "#ff9900"]
      : ["#ffe0b3", "#ffd580", "#ff9900", "#b34700", "#27212a"];
  const blackAndWhite =
    scheme === "dark"
      ? ["#c3d8faff", "#aebef4ff", "#7c94ccff", "#4a5f9eff"]
      : ["#bcd3f6ff", "#96b4e6ff", "#728fcaff", "#4e66aaff"];
  const themes: Record<Theme, string[]> = {
    green: ["#aff0b4", "#01b328", "#008024", "#22c55e"],
    blue: ["#b3d9ff", "#3399ff", "#0066cc", "#004488"],
    red: ["#ffb3b3", "#ff3333", "#cc0000", "#880000"],
    orange: halloweenOrange,
    purple: ["#d9b3ff", "#9933ff", "#6600cc", "#440088"],
    yellow: ["#fff2b3", "#ffcc33", "#cc9900", "#886600"],
    monochrome: blackAndWhite,
  };

  const colors = themes[theme] || themes.green;

  const index = Math.min(colors.length - 1, Math.floor(count / 2));
  return colors[index];
}

export interface LeetContributionGraphProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof leetGraphVariants> {
  username: string;
  blockVariant?: VariantProps<typeof blockVariants>["variant"];
  blockSize?: VariantProps<typeof blockVariants>["size"];
  blockAnimate?: VariantProps<typeof blockVariants>["animate"];
  theme?: Theme;
}

function LeetContribution({
  username,
  className,
  variant,
  blockVariant,
  blockSize,
  blockAnimate,
  theme = "green",
  ...props
}: LeetContributionGraphProps) {
  const [calendar, setCalendar] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const { resolvedTheme } = useTheme();
  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    async function fetchData() {
      const CACHE_KEY = `leetcode-stats-${username}`;
      const CACHE_DURATION = 1000 * 60 * 60;

      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const age = Date.now() - timestamp;

        if (age < CACHE_DURATION) {
          setCalendar(data.submissionCalendar || {});
          setData(data);
          setLoading(false);
          return;
        }
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const json = await res.json();

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: json,
            timestamp: Date.now(),
          })
        );

        const cal =
          json && json.submissionCalendar ? json.submissionCalendar : {};
        setCalendar(cal);
        setData(json);
      } catch (e) {
        setCalendar({});
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  const { weeks, total, easy, medium, hard } = useMemo(() => {
    const easy = { solved: data?.easySolved || 0, total: data?.totalEasy || 0 };
    const medium = {
      solved: data?.mediumSolved || 0,
      total: data?.totalMedium || 0,
    };
    const hard = { solved: data?.hardSolved || 0, total: data?.totalHard || 0 };

    const dateToCount: Record<string, number> = {};
    for (const key in calendar) {
      const d = new Date(Number(key) * 1000);
      const k = formatDate(d);
      dateToCount[k] = Number(calendar[key]);
    }

    const today = new Date();
    const start = new Date(today);
    start.setDate(start.getDate() - 365);
    while (start.getDay() !== 0) {
      start.setDate(start.getDate() - 1);
    }

    const days: { date: string; count: number }[] = [];
    const cursor = new Date(start);

    while (cursor <= today) {
      const key = formatDate(cursor);
      const count = dateToCount[key] || 0;
      days.push({ date: key, count });
      cursor.setDate(cursor.getDate() + 1);
    }

    const calculatedWeeks: any[] = [];
    for (let i = 0; i < days.length; i += 7) {
      calculatedWeeks.push(days.slice(i, i + 7));
    }

    const calculatedTotal = days.reduce((acc, day) => acc + day.count, 0);

    return {
      weeks: calculatedWeeks,
      total: calculatedTotal,
      easy,
      medium,
      hard,
    };
  }, [calendar, data]);

  if (loading) {
    return (
      <div
        className={cn(
          leetGraphVariants({ variant }),
          "h-[200px] flex items-center justify-center",
          className
        )}
        {...props}
      >
        <span className="text-sm text-muted-foreground">
          Loading
        </span>
      </div>
    );
  }

  return (
    <div className={cn(leetGraphVariants({ variant }), className)} {...props}>
      <div className="py-2 text-sm">
        <span className="font-semibold text-foreground">{total}</span>{" "}
        submissions in the past year
      </div>

      <div className="mt-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700">
        <div className="inline-flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px] ">
              {week.map((day: any, row: number) => {
                const isEmpty = day.count === 0;
                const isHighActivity = day.count > 7;
                return (
                  <Tooltip key={row}>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          blockVariants({
                            variant: blockVariant,
                            size: blockSize,
                            animate: isHighActivity ? blockAnimate : "none",
                          }),
                          isEmpty ? "bg-neutral-100 dark:bg-neutral-800" : "",
                          "",
                        )}
                        style={
                          !isEmpty
                            ? {
                                backgroundColor: getColor(
                                  day.count,
                                  theme,
                                  colorScheme
                                ),
                                borderRadius: "2px",
                                ...(isHighActivity && blockAnimate === "pulse" && {
                                  borderColor: getColor(
                                    day.count,
                                    theme,
                                    colorScheme
                                  ),
                                }),
                              }
                            : undefined
                        }
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {day.date} — {day.count} submissions
                      </p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3 mt-4 border-t pt-2 border-neutral-100 dark:border-neutral-800">
        <StatBadge
          label="Easy"
          color="text-foreground"
          solved={easy.solved}
          total={easy.total}
        />
        <StatBadge
          label="Med."
          color="text-foreground"
          solved={medium.solved}
          total={medium.total}
        />
        <StatBadge
          label="Hard"
          color="text-foreground"
          solved={hard.solved}
          total={hard.total}
        />
      </div>
    </div>
  );
}

function StatBadge({
  label,
  color,
  solved,
  total,
}: {
  label: string;
  color: string;
  solved: number;
  total: number;
}) {
  return (
    <div className="flex items-center w-fit gap-2 text-xs bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md">
      <span className={`font-medium ${color}`}>{label}</span>
      <span className="text-muted-foreground font-mono">
        {solved}
        <span className="text-neutral-300 dark:text-neutral-200">/</span>
        {total}
      </span>
    </div>
  );
}

export default LeetContribution;
export { LeetContribution, leetGraphVariants };
