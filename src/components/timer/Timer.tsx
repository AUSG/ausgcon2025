"use client";
import { useEffect, useMemo, useState } from "react";

const msToDHMS = (ms: number) => {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
};

const pad2 = (n: number): string => String(n).padStart(2, "0");

const TimeBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center gap-1 lg:gap-2">
    <div className="">{value}</div>
    <div className="font-pretendard text-base font-semibold lg:text-lg">
      {label}
    </div>
  </div>
);

type TimerProps = {
  target: Date | number | string;
  intervalMs?: number;
};

const Timer = ({ target, intervalMs = 1000 }: TimerProps) => {
  const [mounted, setMounted] = useState(false); // ✅ 클라이언트 전용 게이트
  useEffect(() => setMounted(true), []);

  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [left, setLeft] = useState(() => msToDHMS(targetMs - Date.now()));

  useEffect(() => {
    const tick = () => setLeft(msToDHMS(targetMs - Date.now()));
    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [targetMs, intervalMs]);

  if (!mounted) return null; // 서버/프리렌더 단계에선 렌더 안 함

  return (
    <div className="flex items-center gap-2 px-4 text-xl text-white lg:gap-5 lg:text-5xl">
      <TimeBox label="DAYS" value={pad2(left.days)} />:
      <TimeBox label="HOURS" value={pad2(left.hours)} />:
      <TimeBox label="MINUTES" value={pad2(left.minutes)} />:
      <TimeBox label="SECONDS" value={pad2(left.seconds)} />
    </div>
  );
};

export default Timer;
