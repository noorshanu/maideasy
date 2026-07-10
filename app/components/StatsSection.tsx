"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiUsers, FiShield, FiSmile, FiHeadphones } from "react-icons/fi";
import type { IconType } from "react-icons";

type Stat = {
  id: number;
  target?: number;
  suffix?: string;
  display?: string;
  label: string;
  icon: IconType;
};

const stats: Stat[] = [
  {
    id: 1,
    target: 5000,
    suffix: "+",
    label: "Happy Families",
    icon: FiUsers,
  },
  {
    id: 2,
    target: 10000,
    suffix: "+",
    label: "Verified Helpers",
    icon: FiShield,
  },
  {
    id: 3,
    target: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    icon: FiSmile,
  },
  {
    id: 4,
    display: "24/7",
    label: "Support Available",
    icon: FiHeadphones,
  },
];

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, start, duration]);

  return count;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.target ?? 0, isInView && stat.target !== undefined);

  const displayValue =
    stat.display ??
    `${count.toLocaleString()}${stat.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4"
    >
      <stat.icon className="text-4xl text-accent-dark opacity-90" />
      <div>
        <h4 className="font-bold text-2xl md:text-3xl text-white mb-1 tabular-nums">
          {displayValue}
        </h4>
        <p className="text-white/80 text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
