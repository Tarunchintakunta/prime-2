"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Category = {
  name: string;
  count: string;
  image: string;
  area: string; // tailwind grid area
};

const CATEGORIES: Category[] = [
  {
    name: "Engineering",
    count: "2,841 courses",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=70",
    area: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Design",
    count: "1,512 courses",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=70",
    area: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Business",
    count: "1,204 courses",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70",
    area: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Data",
    count: "987 courses",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    area: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Creative",
    count: "1,318 courses",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=70",
    area: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Leadership",
    count: "612 courses",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=70",
    area: "md:col-span-2 md:row-span-1",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="relative py-24 md:py-32"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Browse"
          title={
            <>
              Find your <span className="italic text-teal-400">craft.</span>
            </>
          }
          subtitle="Six disciplines, one library. Pick a track and start shipping in week one."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-glow-sm glow-border-hover",
                c.area,
              )}
            >
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 grayscale-[40%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="font-display text-2xl text-white md:text-3xl">
                  {c.name}
                </h3>
                <div className="mt-1.5 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    {c.count}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex translate-y-1 items-center gap-1 text-xs font-medium text-teal-400 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Browse <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
