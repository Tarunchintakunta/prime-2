"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, FolderGit2, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Track = {
  title: string;
  duration: string;
  courses: number;
  hours: number;
  projects: number;
  blurb: string;
  badge: string;
};

const TRACKS: Track[] = [
  {
    title: "Become a Full-Stack Engineer",
    duration: "9 months",
    courses: 28,
    hours: 240,
    projects: 12,
    blurb:
      "Type-safe, ship-ready stacks. From your first deploy to running a production service.",
    badge: "FSE Certified",
  },
  {
    title: "Product Designer Track",
    duration: "6 months",
    courses: 18,
    hours: 160,
    projects: 9,
    blurb:
      "Master research, systems, and craft. Build a portfolio reviewed by industry leads.",
    badge: "PD Certified",
  },
  {
    title: "Data Scientist Path",
    duration: "8 months",
    courses: 22,
    hours: 200,
    projects: 10,
    blurb:
      "From SQL to LLM eval pipelines. Real datasets, real stakeholder critique.",
    badge: "DS Certified",
  },
];

export function LearningPaths() {
  return (
    <section
      id="tracks"
      className="relative py-24 md:py-32"
      aria-labelledby="tracks-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tracks"
          title={
            <>
              Curated tracks for{" "}
              <span className="italic text-teal-400">serious learners.</span>
            </>
          }
          subtitle="Months — not weekends. Each track is sequenced, mentored, and ends with a portfolio piece you'd actually share."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TRACKS.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-850 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-glow-sm glow-border-hover"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/65">
                  {t.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-teal-400">
                  <BadgeCheck className="h-3.5 w-3.5" /> {t.badge}
                </span>
              </div>

              <h3 className="font-display mt-6 text-3xl text-white">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-white/60">{t.blurb}</p>

              <dl className="mt-7 grid grid-cols-3 gap-3 border-y border-white/5 py-5 text-center">
                <Stat icon={BookOpen} label="Courses" value={t.courses} />
                <Stat icon={Clock} label="Hours" value={t.hours} />
                <Stat icon={FolderGit2} label="Projects" value={t.projects} />
              </dl>

              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-white/85 transition-colors duration-150 hover:text-teal-400"
              >
                Explore the track
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}) {
  return (
    <div>
      <Icon className="mx-auto h-4 w-4 text-white/40" />
      <div className="font-display mt-2 text-xl text-white">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
    </div>
  );
}
