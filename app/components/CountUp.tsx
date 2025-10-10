"use client";
import { useEffect, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
}: CountUpProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * (to - from) + from);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
