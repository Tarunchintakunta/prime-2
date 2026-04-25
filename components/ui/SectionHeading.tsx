"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  as: As = "h2",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-teal-400"
        >
          <span className="h-px w-8 bg-teal-500/60" />
          {eyebrow}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <As className="font-display text-4xl text-white md:text-5xl lg:text-6xl">
          {title}
        </As>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base leading-body text-white/60 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
