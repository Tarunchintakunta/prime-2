"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Hammer, Award, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  rotating: string;
  visual: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    icon: GraduationCap,
    title: "Learn from practitioners",
    body: "Instructors who've shipped at Stripe, Pixar, NASA — and bring receipts.",
    rotating: "Practitioners.",
    visual: <PractitionerVisual />,
  },
  {
    icon: Hammer,
    title: "Build, don't just watch",
    body: "Hands-on projects reviewed by mentors, not graded by bots.",
    rotating: "Projects.",
    visual: <BuildVisual />,
  },
  {
    icon: Award,
    title: "Career-grade certificates",
    body: "Recognized by 500+ hiring partners. Not another decorative PDF.",
    rotating: "Recognition.",
    visual: <CertificateVisual />,
  },
  {
    icon: Sparkles,
    title: "Learn in flow",
    body: "Adaptive paths powered by AI, calibrated to your pace and goals.",
    rotating: "Flow.",
    visual: <FlowVisual />,
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Map [0..1] across N features (0 .. N-1)
  const idx = useTransform(scrollYProgress, [0, 1], [0, FEATURES.length - 1]);

  return (
    <section
      id="features"
      className="relative bg-ink-950 py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Prime Learning"
          title={
            <>
              Built for outcomes,
              <br />
              <span className="italic text-teal-400">not for views.</span>
            </>
          }
          subtitle="Four reasons our learners ship — and stay shipping."
        />
      </div>

      <div ref={ref} className="relative mx-auto mt-12 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Sticky left rail */}
          <div className="relative">
            <div className="md:sticky md:top-32">
              <div className="text-xs uppercase tracking-[0.2em] text-teal-400/80">
                The Prime Learning difference
              </div>
              <RotatingHeadline indexMV={idx} items={FEATURES.map((f) => f.rotating)} />
              <p className="mt-6 max-w-md text-white/55">
                Every course is engineered against the same bar — clarity,
                rigor, and craft. Scroll to see how.
              </p>
              <div className="mt-10 hidden gap-1 md:flex">
                {FEATURES.map((_, i) => (
                  <ProgressDot key={i} indexMV={idx} target={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right scrolling features */}
          <div className="flex flex-col gap-24 md:gap-40">
            {FEATURES.map((f, i) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[60vh] flex-col justify-center"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white md:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-white/65">{f.body}</p>
                <div className="mt-8 h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
                  {f.visual}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type IndexMV = ReturnType<typeof useTransform<number, number>>;

function RotatingHeadline({
  indexMV,
  items,
}: {
  indexMV: IndexMV;
  items: string[];
}) {
  return (
    <div className="relative mt-4 h-[1.15em] overflow-hidden font-display text-5xl leading-[1.1] text-white md:text-7xl">
      {items.map((label, i) => (
        <RotatingHeadlineItem
          key={label}
          label={label}
          index={i}
          indexMV={indexMV}
        />
      ))}
    </div>
  );
}

function RotatingHeadlineItem({
  label,
  index,
  indexMV,
}: {
  label: string;
  index: number;
  indexMV: IndexMV;
}) {
  const opacity = useTransform(indexMV, (v: number) =>
    Math.max(0, 1 - Math.min(Math.abs(v - index), 1)),
  );
  const y = useTransform(indexMV, (v: number) => (index - v) * 60);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 italic text-teal-400"
    >
      {label}
    </motion.div>
  );
}

function ProgressDot({
  indexMV,
  target,
}: {
  indexMV: IndexMV;
  target: number;
}) {
  const width = useTransform(indexMV, (v: number) =>
    Math.abs(v - target) < 0.5 ? 32 : 12,
  );
  const opacity = useTransform(indexMV, (v: number) =>
    Math.abs(v - target) < 0.5 ? 1 : 0.35,
  );
  return (
    <motion.span
      style={{ width, opacity }}
      className="h-1 rounded-full bg-teal-400 transition-[width] duration-300 ease-out"
    />
  );
}

/* ── Lightweight inline "illustrations" ─────────────────────────────────── */

function PractitionerVisual() {
  const companies = [
    "Stripe",
    "Pixar",
    "NASA",
    "Google",
    "Apple",
    "Meta",
    "OpenAI",
    "Tesla",
    "Netflix",
  ];
  return (
    <div className="relative h-full w-full bg-mesh-teal">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-5">
        {companies.map((name, i) => (
          <div
            key={name}
            className="grid place-items-center rounded-md border border-white/5 bg-white/[0.03] text-[11px] font-medium uppercase tracking-[0.18em] text-white/70"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-teal-400 shadow-glow-sm" />
    </div>
  );
}
function BuildVisual() {
  return (
    <div className="relative h-full w-full bg-mesh-teal p-5">
      <div className="h-full w-full rounded-lg border border-white/10 bg-ink-950 p-3 font-mono text-[11px] leading-relaxed text-white/60">
        <div className="text-teal-400">$ prime submit project-04</div>
        <div className="text-white/45">↳ uploading 14 files…</div>
        <div className="text-white/45">↳ tests passed (28/28)</div>
        <div>
          <span className="text-amber">★</span> mentor review queued — ETA 6h
        </div>
      </div>
    </div>
  );
}
function CertificateVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center bg-mesh-teal p-6">
      <div className="aspect-[16/10] w-full max-w-sm rounded-lg border border-teal-500/30 bg-gradient-to-br from-ink-900 to-ink-850 p-5 shadow-glow-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-teal-400/80">
          Certificate
        </div>
        <div className="font-display mt-2 text-xl text-white">Mei Lin</div>
        <div className="mt-1 text-xs text-white/55">
          Distributed Systems · Distinction
        </div>
        <div className="mt-6 flex items-center justify-between text-[10px] text-white/40">
          <span>Prime Learning · 2026</span>
          <span>verified</span>
        </div>
      </div>
    </div>
  );
}
function FlowVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-mesh-teal">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 200">
        <path
          d="M0,140 C80,40 160,180 240,90 C300,30 360,150 400,80"
          stroke="url(#g)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#e0b458" />
            <stop offset="1" stopColor="#f2d184" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
