"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  tagline: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    tagline: "Start exploring the library.",
    features: [
      "Access to 50+ starter courses",
      "Community Q&A",
      "Mobile + web access",
      "1 active project",
    ],
    cta: "Create account",
  },
  {
    name: "Pro",
    monthly: 89,
    annual: 69,
    tagline: "For serious, ongoing learners.",
    features: [
      "Full library — 12,000+ courses",
      "Mentor-reviewed projects",
      "Career-grade certificates",
      "Adaptive learning paths",
      "Offline mobile access",
    ],
    highlight: true,
    cta: "Start 14-day trial",
  },
  {
    name: "Teams",
    monthly: 179,
    annual: 145,
    tagline: "Per seat. Built for orgs of 5+.",
    features: [
      "Everything in Pro",
      "SSO + admin dashboard",
      "Team analytics + reporting",
      "Custom learning tracks",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={
            <>
              Simple plans.
              <br />
              <span className="italic text-teal-400">Serious value.</span>
            </>
          }
          subtitle="Pay monthly or save 20% annually. Cancel anytime — no awkward exit interview."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            <BillToggle
              active={!annual}
              onClick={() => setAnnual(false)}
              label="Monthly"
            />
            <BillToggle
              active={annual}
              onClick={() => setAnnual(true)}
              label="Annual"
              badge="Save 20%"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-7 transition-all duration-300",
                p.highlight
                  ? "z-10 border-teal-500/50 bg-gradient-to-b from-ink-900 to-ink-850 shadow-glow md:scale-[1.04]"
                  : "border-white/10 bg-ink-900",
              )}
            >
              {p.highlight && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black shadow-glow-sm">
                  Most popular
                </span>
              )}

              <div className="flex items-center gap-2 text-sm text-white/65">
                {p.highlight && <Sparkles className="h-3.5 w-3.5 text-teal-400" />}
                {p.name}
              </div>

              <div className="mt-4 flex items-baseline gap-1.5">
                {p.monthly === 0 ? (
                  <span className="font-display text-5xl text-white">Free</span>
                ) : (
                  <>
                    <span className="text-base font-medium text-white/70">AED</span>
                    <span className="font-display text-5xl text-white">
                      {annual ? p.annual : p.monthly}
                    </span>
                    <span className="text-sm text-white/50">/mo</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-sm text-white/55">{p.tagline}</p>

              <ul className="mt-7 space-y-3 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-teal-500/15 text-teal-400">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={cn(
                  "mt-8 w-full rounded-full px-5 py-3 text-sm font-medium transition-all duration-150",
                  p.highlight
                    ? "bg-teal-500 text-black shadow-glow-sm hover:bg-teal-400 hover:shadow-glow"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]",
                )}
              >
                {p.cta}
              </button>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/45">
          All plans include a 14-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}

function BillToggle({
  active,
  onClick,
  label,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors duration-150",
        active ? "bg-teal-500 text-black" : "text-white/65 hover:text-white",
      )}
    >
      {label}
      {badge && (
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] uppercase tracking-wide",
            active
              ? "bg-black/15 text-black/70"
              : "bg-teal-500/15 text-teal-300",
          )}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
