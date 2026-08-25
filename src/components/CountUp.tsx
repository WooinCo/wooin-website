"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** 목표 숫자 */
  to: number;
  /** 숫자 앞에 붙는 접두 텍스트 (예: "" ) */
  prefix?: string;
  /** 숫자 뒤에 붙는 접미 텍스트 (예: "건") */
  suffix?: string;
  duration?: number;
  className?: string;
}

/** 화면에 보이면 0에서 목표 숫자까지 카운트업되는 숫자. */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / (duration * 1000), 1);
          // easeOutExpo — 초반에 빠르게 튀어오르고 끝에서 부드럽게 안착
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setValue(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
