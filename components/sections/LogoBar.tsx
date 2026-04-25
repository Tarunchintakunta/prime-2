"use client";

import { motion } from "framer-motion";
import {
  ForbesMark,
  TechCrunchMark,
  WSJMark,
  WiredMark,
  FastCoMark,
} from "@/components/ui/Logos";

export function LogoBar() {
  return (
    <section
      aria-label="Press"
      className="relative border-y border-white/5 bg-ink-900/60 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
          As featured in
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/55"
        >
          <ForbesMark className="h-5 w-auto" />
          <TechCrunchMark className="h-5 w-auto" />
          <WSJMark className="h-5 w-auto" />
          <WiredMark className="h-5 w-auto" />
          <FastCoMark className="h-5 w-auto" />
        </motion.div>
      </div>
    </section>
  );
}
