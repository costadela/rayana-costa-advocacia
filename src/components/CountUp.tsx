"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  disableFormatting?: boolean;
}

export default function CountUp({
  target,
  duration = 2000,
  disableFormatting = false,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const effectiveDuration = target <= 5 ? 800 : duration;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / effectiveDuration, 1);

      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutProgress * target);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  // Evita Hydration Mismatch renderizando o estado estático até a montagem no cliente
  const isYear = target >= 1900 && target <= 2100;

  if (!isMounted) {
    return <span>0</span>;
  }

  if (disableFormatting || isYear) {
    return <span>{count}</span>;
  }

  return <span>{count.toLocaleString("pt-BR")}</span>;
}