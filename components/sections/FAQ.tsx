"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "What's your refund policy?",
    a: "Every plan includes a 14-day money-back guarantee, no questions asked. If you cancel after that, you keep access until the end of the current billing period.",
  },
  {
    q: "Are the certificates actually recognized?",
    a: "Yes. We work directly with 500+ hiring partners — including Stripe, Notion, Airbnb, and Spotify — who explicitly recognize Prime Learning track certificates in their hiring rubrics.",
  },
  {
    q: "Can I learn on mobile?",
    a: "Native iOS and Android apps with full offline downloads, watch-speed control, and progress sync across devices. Designed for commutes, gyms, and 4 AM project crunches.",
  },
  {
    q: "Who teaches the courses?",
    a: "Practitioners — not professional course creators. Every instructor either currently leads or has led a meaningful function at a company you'd recognize. We turn down ~9 in 10 instructor applications.",
  },
  {
    q: "Do you offer group or team discounts?",
    a: "Yes. Teams pricing starts at 5 seats with sliding discounts up to 35% at 100+ seats. SSO, admin dashboards, and custom learning tracks are included.",
  },
  {
    q: "Will I get mentor feedback on my projects?",
    a: "On Pro and Teams, yes. Each major project is reviewed by a vetted mentor — typically a working senior in the field — within 48 hours. Expect line-by-line, not rubber-stamp.",
  },
  {
    q: "How current is the content?",
    a: "Tracks are versioned. Major curriculum reviews happen quarterly; individual courses receive interim updates whenever the underlying tools or best practices shift meaningfully.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Anytime, in two clicks, no retention call. We'd rather you come back later than feel trapped.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="italic text-teal-400">answered.</span>
            </>
          }
        />

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium text-white md:text-lg">
                    {item.q}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/85 transition-colors duration-150 group-hover:border-teal-500/40 group-hover:text-teal-400"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm leading-body text-white/65 md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
