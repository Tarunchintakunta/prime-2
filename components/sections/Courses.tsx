"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Course = {
  title: string;
  instructor: string;
  avatar: string;
  thumbnail: string;
  rating: number;
  reviews: string;
  price: string;
  original: string;
  level: "Beginner" | "Advanced" | "New";
};

const COURSES: Course[] = [
  {
    title: "Designing Systems at Scale: A Senior Engineer's Playbook",
    instructor: "Mei Lin",
    avatar: "https://i.pravatar.cc/80?img=47",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=70",
    rating: 4.9,
    reviews: "12.4k",
    price: "AED 329",
    original: "AED 549",
    level: "Advanced",
  },
  {
    title: "From Sketch to Ship: Modern Product Design Fundamentals",
    instructor: "Andre Cole",
    avatar: "https://i.pravatar.cc/80?img=12",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=70",
    rating: 4.8,
    reviews: "8.1k",
    price: "AED 249",
    original: "AED 469",
    level: "Beginner",
  },
  {
    title: "Building LLM Apps in Production with TypeScript",
    instructor: "Priya Sharma",
    avatar: "https://i.pravatar.cc/80?img=32",
    thumbnail:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=70",
    rating: 4.9,
    reviews: "5.6k",
    price: "AED 359",
    original: "AED 659",
    level: "New",
  },
  {
    title: "The Art of Storytelling for Founders & Operators",
    instructor: "Marcus Reid",
    avatar: "https://i.pravatar.cc/80?img=15",
    thumbnail:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=70",
    rating: 4.7,
    reviews: "3.2k",
    price: "AED 219",
    original: "AED 359",
    level: "Beginner",
  },
  {
    title: "Data Visualization with D3 and React 19",
    instructor: "Sara Okafor",
    avatar: "https://i.pravatar.cc/80?img=44",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    rating: 4.8,
    reviews: "4.4k",
    price: "AED 289",
    original: "AED 509",
    level: "Advanced",
  },
  {
    title: "Cinematic Photography: Light, Mood, and Composition",
    instructor: "Jonas Veldt",
    avatar: "https://i.pravatar.cc/80?img=21",
    thumbnail:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=70",
    rating: 4.9,
    reviews: "9.0k",
    price: "AED 269",
    original: "AED 469",
    level: "Beginner",
  },
  {
    title: "Negotiation Mastery: Lessons from the Boardroom",
    instructor: "Elena Vance",
    avatar: "https://i.pravatar.cc/80?img=28",
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=70",
    rating: 4.7,
    reviews: "2.8k",
    price: "AED 329",
    original: "AED 579",
    level: "Advanced",
  },
  {
    title: "Brand Identity in 2026: Beyond the Logo",
    instructor: "Theo Park",
    avatar: "https://i.pravatar.cc/80?img=68",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=70",
    rating: 4.8,
    reviews: "3.6k",
    price: "AED 229",
    original: "AED 439",
    level: "New",
  },
];

const FILTERS = ["All", "Beginner", "Advanced", "New"] as const;
type Filter = (typeof FILTERS)[number];

export function Courses() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <section
      id="courses"
      className="relative py-24 md:py-32"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Library"
            title={
              <>
                Trending <span className="italic text-teal-400">this week.</span>
              </>
            }
            subtitle="Hand-picked by editors. Updated every Monday."
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs transition-all duration-150",
                  filter === f
                    ? "border-teal-500/60 bg-teal-500/15 text-teal-300 shadow-glow-sm"
                    : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/20 hover:text-white",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="no-scrollbar mx-auto max-w-[100vw] overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))]">
          <ul className="flex snap-x snap-mandatory gap-5 pb-4">
            {visible.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group h-[420px] w-80 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-glow-sm"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={c.thumbnail}
                    alt={c.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-500 text-black shadow-glow">
                      <Play className="h-5 w-5 fill-black" />
                    </span>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                    {c.level}
                  </span>
                </div>
                <div className="flex h-[calc(420px-180px)] flex-col p-5">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={c.avatar}
                      alt=""
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="text-xs text-white/70">{c.instructor}</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-base font-medium leading-snug text-white">
                    {c.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/65">
                    <Star className="h-3.5 w-3.5 fill-amber text-amber" />
                    <span className="text-white">{c.rating}</span>
                    <span className="text-white/40">({c.reviews})</span>
                  </div>
                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="font-display text-2xl text-white">
                      {c.price}
                    </span>
                    <span className="text-sm text-white/40 line-through">
                      {c.original}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
