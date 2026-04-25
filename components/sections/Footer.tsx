"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Globe, Linkedin, Youtube, Instagram } from "lucide-react";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Courses", "Tracks", "For Teams", "Mobile", "Mentor Reviews"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Community", "Status", "Changelog"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Acceptable Use"],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        {/* Newsletter */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-md">
            <h2 className="font-display text-3xl text-white md:text-4xl">
              The weekly drop.
            </h2>
            <p className="mt-3 text-sm text-white/55">
              One handpicked course, one craft essay, one job worth applying
              to. Every Sunday.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@work.com"
              className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-teal-500/60 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors duration-150 hover:bg-teal-400"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 font-display text-xl text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-teal-500 to-teal-600">
                <Sparkles className="h-4 w-4 text-black" strokeWidth={2.5} />
              </span>
              Prime Learning
            </Link>
            <p className="mt-4 max-w-[18rem] text-sm text-white/55">
              Premium online learning. Taught by practitioners. Built for
              outcomes.
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-white/75 transition-colors duration-150 hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Prime Learning, Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 text-white/55">
            <Link href="#" aria-label="X" className="rounded-full p-2 hover:text-white">
              <XIcon className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube" className="rounded-full p-2 hover:text-white">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="rounded-full p-2 hover:text-white">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
          <label className="inline-flex items-center gap-2 text-xs text-white/55">
            <Globe className="h-3.5 w-3.5" />
            <select
              defaultValue="en"
              className="bg-transparent text-xs text-white/75 focus:outline-none"
              aria-label="Language"
            >
              <option value="en" className="bg-ink-900">English (US)</option>
              <option value="es" className="bg-ink-900">Español</option>
              <option value="fr" className="bg-ink-900">Français</option>
              <option value="de" className="bg-ink-900">Deutsch</option>
              <option value="ja" className="bg-ink-900">日本語</option>
            </select>
          </label>
        </div>
      </div>
    </footer>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.53 3H21l-7.4 8.46L22.5 21h-7l-5.47-6.86L3.78 21H.31l7.92-9.05L1.5 3H8.6l4.95 6.27L17.53 3Zm-1.23 16h2L7.8 5H5.7l10.6 14Z" />
    </svg>
  );
}
