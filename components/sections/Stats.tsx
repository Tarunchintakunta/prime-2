"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  format?: (n: number) => string;
};

const STATS: Stat[] = [
  {
    value: 2.4,
    suffix: "M+",
    label: "Learners",
    format: (n) => n.toFixed(1),
  },
  {
    value: 12000,
    label: "Courses",
    format: (n) => Math.round(n).toLocaleString(),
  },
  {
    value: 850,
    suffix: "+",
    label: "Instructors",
    format: (n) => Math.round(n).toLocaleString(),
  },
  {
    value: 98,
    suffix: "%",
    label: "Completion",
    format: (n) => Math.round(n).toString(),
  },
];

export function Stats() {
  return (
    <section
      aria-label="Platform statistics"
      className="relative border-y border-white/5 bg-ink-900/50 py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-x-8">
        {STATS.map((s, i) => (
          <Counter key={s.label} stat={s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function Counter({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const formatted = useTransform(mv, (latest) =>
    stat.format ? stat.format(latest) : Math.round(latest).toString(),
  );
  const [text, setText] = useState<string>(stat.format ? stat.format(0) : "0");

  useEffect(() => {
    return formatted.on("change", (v) => setText(v));
  }, [formatted]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, stat.value, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, mv, stat.value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center md:text-left"
    >
      <div className="font-display text-5xl text-white md:text-6xl">
        {text}
        {stat.suffix && <span className="text-teal-400">{stat.suffix}</span>}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
        {stat.label}
      </div>
    </motion.div>
  );
}
