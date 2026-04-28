"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden py-32 md:py-40"
    >
      {/* Soft, restrained gradient + floating orbs (no AI-soup blobs) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(224,180,88,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.10),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-amber/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl text-white md:text-7xl"
        >
          Your next chapter
          <br />
          <span className="italic text-teal-400">starts today.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-body text-white/65 md:text-lg"
        >
          Join 2.4M learners building real careers, one ship at a time. Start
          free — keep what you build.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            setSubmitted(true);
          }}
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="cta-email" className="sr-only">
            Work email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
            placeholder="you@work.com"
            className="w-full flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-md transition-colors duration-150 focus:border-teal-500/60 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
          />
          <button
            type="submit"
            disabled={submitted}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-medium text-black shadow-glow transition-all duration-150 hover:bg-teal-400 hover:shadow-[0_0_60px_-8px_rgba(224,180,88,0.8)] disabled:opacity-60"
          >
            {submitted ? "You're in ✓" : "Start free trial"}
            {!submitted && (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
            )}
          </button>
        </motion.form>

        <p className="mt-5 text-xs text-white/40">
          No card required. Cancel in two clicks.
        </p>
      </div>
    </section>
  );
}
