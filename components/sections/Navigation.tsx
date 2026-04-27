"use client";

import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Courses", href: "#courses" },
  { label: "Paths", href: "#paths" },
  { label: "For Business", href: "#features" },
  { label: "For Universities", href: "#trust" },
  { label: "Pricing", href: "#pricing" },
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

  const linkClass = scrolled
    ? "text-slate-700 hover:text-slate-900"
    : "text-white/85 hover:text-white";
  const iconBtnClass = scrolled ? "text-slate-700" : "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-transform duration-300 ease-out ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "liquid-glass-light" : ""
          }`}
        >
          <div className="flex items-center gap-8">
            <a href="#top" className="flex items-center relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={scrolled ? "/logo.svg" : "/logo-dark.svg"}
                alt="Prime Learning"
                className="h-8 w-auto transition-opacity"
              />
            </a>
            <ul className="hidden md:flex gap-7 relative z-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`${linkClass} transition-colors text-sm font-medium`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 md:gap-3 relative z-10">
            <button
              type="button"
              aria-label="Search"
              className={`${
                scrolled ? "liquid-glass-light" : "liquid-glass-dark"
              } rounded-full p-2.5 ${iconBtnClass} transition-colors hidden sm:inline-flex`}
            >
              <Search size={18} className="relative z-10" />
            </button>
            <a
              href="#"
              className={`hidden sm:inline-block ${linkClass} text-sm font-medium px-4 py-2 transition-colors`}
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="bg-[#e0b458] hover:bg-[#f2d184] text-[#0a192f] rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Get started
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={`md:hidden ${
                scrolled ? "liquid-glass-light" : "liquid-glass-dark"
              } rounded-full p-2.5 ${iconBtnClass}`}
            >
              <Menu size={18} className="relative z-10" />
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
