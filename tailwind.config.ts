import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#061224",
          900: "#0a192f",
          850: "#0e1726",
          800: "#112240",
          700: "#162133",
        },
        teal: {
          DEFAULT: "#e0b458",
          300: "#f2d184",
          400: "#e0b458",
          500: "#d4a44a",
          600: "#b88d3a",
        },
        amber: {
          DEFAULT: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        display: "-0.03em",
      },
      lineHeight: {
        body: "1.6",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(224,180,88,0.55)",
        "glow-sm": "0 0 24px -6px rgba(224,180,88,0.45)",
        "glow-amber": "0 0 32px -8px rgba(245,158,11,0.4)",
      },
      backgroundImage: {
        "radial-vignette":
          "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.95) 100%)",
        "mesh-teal":
          "radial-gradient(circle at 20% 20%, rgba(224,180,88,0.18), transparent 45%), radial-gradient(circle at 80% 60%, rgba(99,102,241,0.12), transparent 50%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        "drop-dot": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.08) translate(-1%,-1%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        "drop-dot": "drop-dot 2.4s ease-in-out infinite",
        "ken-burns": "ken-burns 14s ease-in-out infinite alternate",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
