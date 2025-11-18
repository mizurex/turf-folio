"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getColor(count: number) {
  if (count < 2) return "#aff0b4";
  if (count >= 2 && count < 4) return "#01b328";
  if (count > 6) return "#008024";
  return "#22c55e";
}

export default function LeetContributionGraph({
  username,
}: {
  username: string;
}) {
  const [calendar, setCalendar] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

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
      <div className="py-4 px-4 rounded-[10px] w-full max-w-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[200px] flex items-center justify-center">
        <span className="text-sm text-muted-foreground animate-pulse">
          Loading
        </span>
      </div>
    );
  }

  return (
    <div className="py-3 px-4 rounded-[10px] w-full max-w-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-x-auto">
      <div className="pb-3 text-sm">
        <span className="font-semibold text-foreground">{total}</span>{" "}
        submissions in the past year
      </div>

      <div className="mt-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700">
        <div className="inline-flex gap-[2px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px] ">
              {week.map((day: any, row: number) => {
                const isEmpty = day.count === 0;
                const isHighActivity = day.count > 7;
                return (
                  <Tooltip key={row}>
                    <TooltipTrigger asChild>
                      <div
                        className={`w-[10px] h-[10px] rounded-[1px] cursor-pointer transition-all ${
                          isEmpty ? "bg-neutral-100 dark:bg-neutral-800" : ""
                        } ${
                          isHighActivity 
                            ? "animate-pulse border-1 border-green-400 dark:border-green-500" 
                            : ""
                        }`}
                        style={
                          !isEmpty
                            ? { 
                                backgroundColor: getColor(day.count),
                                ...(isHighActivity && {
                                  boxShadow: "0 0 3px rgba(14, 250, 100, 0.9)"
                                })
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
          color="text-teal-500"
          solved={easy.solved}
          total={easy.total}
        />
        <StatBadge
          label="Med."
          color="text-yellow-500"
          solved={medium.solved}
          total={medium.total}
        />
        <StatBadge
          label="Hard"
          color="text-red-500"
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
