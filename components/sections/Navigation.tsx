"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Courses", href: "#categories" },
  { label: "Instructors", href: "#instructors" },
  { label: "For Business", href: "#tracks" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
          scrolled
            ? "border-b border-white/5 bg-black/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
          aria-label="Primary"
        >
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 font-display text-xl tracking-tight text-white"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-teal-500 to-teal-600 shadow-glow-sm">
              <Sparkles className="h-4 w-4 text-black" strokeWidth={2.5} />
            </span>
            <span>Prime Learning</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#"
              className="rounded-full px-4 py-2 text-sm text-white/80 transition-colors duration-150 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="#pricing"
              className="group relative inline-flex items-center gap-1.5 rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-black shadow-glow-sm transition-shadow duration-300 hover:shadow-glow"
            >
              Start Learning
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-md text-white/80 transition-colors hover:text-white md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-ink-900 p-6"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile menu"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-xl">Prime Learning</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-md text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="#"
                  className="rounded-full border border-white/15 px-5 py-3 text-center text-sm text-white/90 hover:bg-white/5"
                >
                  Sign In
                </Link>
                <Link
                  href="#pricing"
                  className="rounded-full bg-teal-500 px-5 py-3 text-center text-sm font-medium text-black shadow-glow-sm"
                >
                  Start Learning
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
