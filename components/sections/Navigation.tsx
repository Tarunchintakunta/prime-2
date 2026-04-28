"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Paths", href: "#paths" },
  { label: "For Business", href: "#features" },
  { label: "For Universities", href: "#trust" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const delta = y - lastY;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-white/85 hover:text-white";
  const iconBtnClass = "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-[#0a192f]/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full pl-3 pr-3 sm:pl-4 sm:pr-5 md:pl-6 md:pr-10 h-20 sm:h-24 md:h-28 grid grid-cols-[auto_1fr_auto] items-center gap-2">
          <a href="#top" className="flex items-center -my-2 justify-self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-dark.svg"
              alt="Prime Learning"
              className="h-14 sm:h-16 md:h-20 w-auto"
            />
          </a>

          <ul className="hidden md:flex gap-8 justify-self-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${linkClass} transition-colors text-sm tracking-wide whitespace-nowrap`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-4 justify-self-end">
            <a
              href="#"
              className={`hidden sm:inline-block ${linkClass} text-sm tracking-wide px-2 py-2 transition-colors`}
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="hidden sm:inline-block bg-[#e0b458] hover:bg-[#f2d184] text-[#0a192f] px-4 md:px-5 py-2 text-sm font-semibold tracking-wide transition-colors"
            >
              Get started
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 ${iconBtnClass}`}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 liquid-glass-light" />
          <div className="relative z-10 flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Prime Learning" className="h-8 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="liquid-glass-light rounded-full p-2.5 text-slate-700"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl text-slate-900"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="#"
                className="text-slate-800 text-base font-medium px-4 py-3 text-center"
              >
                Sign in
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="bg-[#e0b458] hover:bg-[#f2d184] text-[#0a192f] rounded-full px-5 py-3.5 text-sm font-medium text-center"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
