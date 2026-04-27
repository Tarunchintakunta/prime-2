"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelAnim = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fade = (target: number, onDone?: () => void) => {
      cancelAnim();
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0");
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / FADE_MS);
        const value = from + (target - from) * t;
        video.style.opacity = String(value);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          rafRef.current = null;
          onDone?.();
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleLoaded = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fade(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      if (
        !fadingOutRef.current &&
        video.currentTime >= video.duration - FADE_OUT_LEAD
      ) {
        fadingOutRef.current = true;
        fade(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        try {
          video.currentTime = 0;
          video.play().catch(() => {});
        } catch {
          // ignore
        }
        fadingOutRef.current = false;
        fade(1);
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) handleLoaded();

    return () => {
      cancelAnim();
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    console.log("hero email signup:", data.get("email"));
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0a192f] pt-32 pb-20"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={VIDEO_URL}
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{ opacity: 0, transition: "none" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.25) 40%, rgba(2,6,23,0.75) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="liquid-glass-dark rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-xs font-medium text-white/90">
          <Sparkles size={14} className="text-[#e0b458] relative z-10" />
          <span className="relative z-10">Now with AI-powered learning paths</span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-white mt-6 mb-6 tracking-tight leading-[1.05]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Learn <em className="italic text-[#e0b458]">anything</em>. Become someone.
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Master in-demand skills with world-class instructors from Stanford, MIT, and
          Google. Earn certificates that move careers forward — at your pace, on your
          schedule.
        </p>

        <form
          onSubmit={onSubmit}
          className="max-w-xl mx-auto liquid-glass-dark rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email to start free"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-white/50 text-base relative z-10"
          />
          <button
            type="submit"
            className="bg-[#e0b458] hover:bg-[#f2d184] text-[#0a192f] rounded-full px-6 py-3 flex items-center gap-2 text-sm font-medium transition-colors relative z-10"
          >
            Start free
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/70 flex-wrap">
          <span>✓ No credit card required</span>
          <span>✓ 7-day free trial</span>
          <span>✓ Cancel anytime</span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <span className="liquid-glass-dark rounded-full px-4 py-2 text-xs text-white/90 relative">
            <span className="relative z-10">🎓 Trusted by 2M+ learners</span>
          </span>
          <span className="liquid-glass-dark rounded-full px-4 py-2 text-xs text-white/90 relative">
            <span className="relative z-10">⭐ 4.8 average course rating</span>
          </span>
          <span className="liquid-glass-dark rounded-full px-4 py-2 text-xs text-white/90 relative">
            <span className="relative z-10">🏆 92% completion rate</span>
          </span>
        </div>
      </div>
    </section>
  );
}
