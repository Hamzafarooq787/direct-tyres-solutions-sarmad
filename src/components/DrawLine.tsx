"use client";

import { useEffect, useRef } from "react";

type DrawLineProps = {
  containerClassName?: string;
  stroke?: string;
  strokeWidth?: number;
  linecap?: "round" | "butt" | "square";
};

export default function DrawLine({
  containerClassName = "absolute top-10 left-[15%] right-[15%] h-1 bg-border-color hidden md:block rounded-full",
  stroke = "#FFD700",
  strokeWidth = 4,
  linecap = "round",
}: DrawLineProps) {
  const ref = useRef<SVGLineElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("active");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("active"), 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={containerClassName}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line
          ref={ref}
          className="draw-line"
          stroke={stroke}
          strokeLinecap={linecap}
          strokeWidth={strokeWidth}
          x1="0"
          x2="100%"
          y1="2"
          y2="2"
        />
      </svg>
    </div>
  );
}
