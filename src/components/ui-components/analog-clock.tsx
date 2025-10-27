"use client";
import { useEffect, useState } from "react";

export default function AnalogClock2() {
  const [angles, setAngles] = useState(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    return {
      rotateH: hour * 30 + minute * 0.5 + second * 0.05 + millisecond * (0.05 / 1000),
      rotateM: minute * 6 + second * 0.1 + millisecond * (0.1 / 1000),
      rotateS: second * 6 + millisecond * (6 / 1000)
    };
  });
  useEffect(() => {
    let animationId: number;

    const updateAngles = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const millisecond = date.getMilliseconds();
      setAngles({
        rotateH: hour * 30 + minute * 0.5 + second * 0.05 + millisecond * (0.05 / 1000),
        rotateM: minute * 6 + second * 0.1 + millisecond * (0.1 / 1000),
        rotateS: second * 6 + millisecond * (6 / 1000)
      });
      animationId = requestAnimationFrame(updateAngles);
    };

    animationId = requestAnimationFrame(updateAngles);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative rounded-full w-40 h-40 bg-neutral-50 border-1 border-neutral-300 dark:border-neutral-700 flex items-center justify-center select-none">
      {/* Hour hand */}
      <div
        className="absolute left-1/2 top-10 w-1 h-10 bg-neutral-700 rounded"
        style={{
          transform: ` rotate(${angles.rotateH}deg)`,
          transformOrigin: "50% 90%",
          transition: "none",
        }}
      />
      {/* Minute hand */}
      <div
        className="absolute left-18 top-5 w-0.5 h-14 bg-neutral-700 rounded"
        style={{
          transform: ` rotate(${angles.rotateM}deg)`,
          transformOrigin: "50% 96%",
          transition: "none",
          
        }}
      />
      {/* Second hand */}
      <div
        className="absolute left-18 top-3 w-0.5 h-16 bg-red-500 rounded-full"
        style={{
          transform: `rotate(${angles.rotateS}deg)`,
          transformOrigin: "50% 98%",
          transition: "none"
        }}
      />
      <div
        className="absolute left-19 top-19 w-3 h-3 bg-neutral-800 rounded-full "
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}