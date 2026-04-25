"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import {
  GoogleMark,
  StripeMark,
  AirbnbMark,
  NotionMark,
  SpotifyMark,
} from "@/components/ui/Logos";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Provided video — DO NOT MODIFY */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
          type="video/mp4"
        />
      </video>

      {/* Stacked overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/60 to-black"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-radial-vignette"
      />
      <div aria-hidden="true" className="grain z-[3]" />

      {/* Content */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="container relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-32"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/85"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-teal-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          New · 2026 cohort enrolling now
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display mt-6 max-w-4xl text-5xl text-white sm:text-6xl md:text-7xl"
        >
          Master what matters.
          <br />
          <span className="italic text-teal-400">Learn from the best.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-xl text-base leading-body text-white/70 md:text-lg"
        >
          10,000+ courses taught by world-class practitioners. Watch, build,
          and ship — at your pace.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-medium text-black shadow-glow transition-all duration-150 hover:bg-teal-400 hover:shadow-[0_0_60px_-8px_rgba(20,184,166,0.8)]"
          >
            Start free trial
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-colors duration-150 hover:bg-white/[0.07] hover:text-white"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10">
              <Play className="h-2.5 w-2.5 fill-white text-white" />
            </span>
            Watch how it works
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-12"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Trusted by learners at
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-60">
            <GoogleMark className="h-5 w-auto text-white/80" />
            <StripeMark className="h-5 w-auto text-white/80" />
            <AirbnbMark className="h-5 w-auto text-white/80" />
            <NotionMark className="h-5 w-auto text-white/80" />
            <SpotifyMark className="h-5 w-auto text-white/80" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom: scroll cue + live stats */}
      <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-7xl items-end justify-between px-6">
        <div className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex">
          <div className="relative h-12 w-px overflow-hidden bg-white/15">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-3 w-px animate-drop-dot bg-teal-400"
            />
          </div>
          Scroll
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-white/55">
          <span>
            <span className="text-white">2.4M</span> learners
          </span>
          <span className="text-white/25">·</span>
          <span>
            <span className="text-white">12k</span> courses
          </span>
          <span className="text-white/25">·</span>
          <span>
            <span className="text-white">98%</span> completion
          </span>
        </div>
      </div>
    </section>
  );
}
