"use client";

import { useEffect, useState } from "react";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10); 
}

function getColor(count: number) {
  if (count < 2) return "#aff0b4"; 
  if (count < 4) return "#01b328"; 
  if (count < 6) return "#008024"; 
  return "#22c55e"; 
}

export default function LeetContributionGraph({ username }: { username: string }) {
  const [calendar, setCalendar] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
const [data, setData] = useState<any>(null);
const easySolved = data?.easySolved || 0;
const mediumSolved = data?.mediumSolved || 0;
const hardSolved = data?.hardSolved || 0;
const totalEasy = data?.totalEasy || 0;
const totalMedium = data?.totalMedium || 0;
const totalHard = data?.totalHard || 0;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`); //credits --- https://github.com/JeremyTsaii/leetcode-stats-api
        const json = await res.json();
        const cal = json && json.submissionCalendar ? json.submissionCalendar : {};
        setCalendar(cal);
        setData(json);
      } catch (e) {
        setCalendar({});
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
       <span className="text-sm text-gray-500">Loading...</span>
    );
  }

  const dateToCount: any = {};
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

  const days: any[] = [];
  const cursor = new Date(start);
  while (cursor <= today) {
    const key = formatDate(cursor);
    const count = dateToCount[key] || 0;
    days.push({ date: key, count });
    cursor.setDate(cursor.getDate() + 1);
  }

  const weeks: any[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  let total = 0;
  for (let i = 0; i < days.length; i++) total += days[i].count;

  return (
    <div className="py-1 px-3 rounded-lg shadow-md w-full max-w-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-x-auto">
   
   <span className="pb-3"><strong>{total}</strong> submissions in the past one year</span>
      <div className="mt-2">
        <div className="inline-block w-max">
          <div className="flex gap-1">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1 shrink-0">
                {week.map((day: any, row: number) => {
                  const isEmpty = day.count === 0;
                  const style = isEmpty ? undefined : { backgroundColor: getColor(day.count) };
                  const cls = `w-2 h-2 rounded-[2px] cursor-pointer ${isEmpty ? "bg-neutral-200 dark:bg-neutral-800" : ""}`;
                  return (
                    <div
                      key={row}
                      className={cls}
                      style={style}
                      title={`${day.date} — ${day.count} submissions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
  <div>
    <div className="flex justify-end gap-2 mt-3">
        <div className="flex bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md gap-2">
            <span className="text-sm text-teal-500 font-medium ">Easy</span>
            <span className="text-sm text-foreground ">{easySolved}/{totalEasy}</span>
        </div>
        <div className="flex bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md gap-2">
            <span className="text-sm text-yellow-500 font-medium ">Med.</span>
            <span className="text-sm text-foreground ">{mediumSolved}/{totalMedium}</span>
        </div>
        <div className="flex bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md gap-2">
            <span className="text-sm text-red-500 font-medium ">Hard</span>
            <span className="text-sm text-foreground ">{hardSolved}/{totalHard}</span>
        </div>   
    </div>
  </div>
    </div>
  );
}

