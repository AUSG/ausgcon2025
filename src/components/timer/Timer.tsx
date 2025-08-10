"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const msToDHMS = (
  ms: number,
): { days: number; hours: number; minutes: number; seconds: number } => {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
};

const pad2 = (n: number): string => String(n).padStart(2, "0");

const TimeBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="">{value}</div>
    <div className="font-pretendard text-lg font-semibold">{label}</div>
  </div>
);

type TimerProps = {
  target: Date | number | string;
  intervalMs?: number;
};

const Timer = ({ target, intervalMs = 1000 }: TimerProps) => {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [left, setLeft] = useState(() => msToDHMS(targetMs - Date.now()));

  useEffect(() => {
    const tick = () => {
      const diff = targetMs - Date.now();
      const next = msToDHMS(diff);
      setLeft(next);
    };

    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [targetMs, intervalMs]);

  return (
    <div className="flex items-center gap-5 text-5xl text-white">
      <TimeBox label="DAYS" value={pad2(left.days)} />
      :
      <TimeBox label="HOURS" value={pad2(left.hours)} />
      :
      <TimeBox label="MINUTES" value={pad2(left.minutes)} />
      :
      <TimeBox label="SECONDS" value={pad2(left.seconds)} />
    </div>
  );
};

export default Timer;
