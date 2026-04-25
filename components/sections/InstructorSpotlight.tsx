"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Instructor = {
  name: string;
  credential: string;
  courses: number;
  portrait: string;
};

const INSTRUCTORS: Instructor[] = [
  {
    name: "Mei Lin",
    credential: "Principal Engineer, ex-Stripe",
    courses: 6,
    portrait:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Andre Cole",
    credential: "Design Director, ex-Apple",
    courses: 4,
    portrait:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Priya Sharma",
    credential: "Founding ML Engineer, ex-Anthropic",
    courses: 3,
    portrait:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Jonas Veldt",
    credential: "Cinematographer, A24",
    courses: 5,
    portrait:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=70",
  },
];

export function InstructorSpotlight() {
  return (
    <section
      id="instructors"
      className="relative bg-ink-900/40 py-24 md:py-32"
      aria-labelledby="instructors-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-teal-400">
              Spotlight
            </div>
            <Quote className="mt-6 h-8 w-8 text-teal-500/60" strokeWidth={1.5} />
            <blockquote className="font-display mt-2 text-3xl italic leading-[1.15] text-white md:text-5xl">
              &ldquo;The best craftspeople I&rsquo;ve ever worked with were also
              the best teachers. Prime Learning finally gives them the stage they
              deserve.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 text-sm">
              <div className="h-px w-10 bg-white/30" />
              <span className="text-white">Mei Lin</span>
              <span className="text-white/45">·</span>
              <span className="text-white/55">Principal Engineer, ex-Stripe</span>
            </figcaption>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 lg:col-span-5"
          >
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
              alt="Mei Lin, Principal Engineer"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="animate-ken-burns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white/85">
              <span className="font-display text-base">Mei Lin</span>
              <span className="rounded-full glass px-2.5 py-1">
                6 courses
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
          {INSTRUCTORS.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-ink-900">
                <Image
                  src={p.portrait}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-4">
                <div className="font-medium text-white">{p.name}</div>
                <div className="text-xs text-white/55">{p.credential}</div>
                <div className="mt-1 text-xs text-teal-400/80">
                  {p.courses} courses
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
