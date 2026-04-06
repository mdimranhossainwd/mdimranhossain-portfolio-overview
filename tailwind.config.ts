import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — single source of truth
        brand: {
          pink: "#FF2D78",
          "pink-light": "#FF6BA0",
          "pink-dim": "rgba(255,45,120,0.15)",
          "pink-glow": "rgba(255,45,120,0.08)",
        },
        dark: {
          950: "#050508",
          900: "#0A0A0F",
          800: "#111118",
          700: "#18181F",
          600: "#1E1E28",
          500: "#2A2A38",
          400: "#3A3A50",
        },
        muted: {
          DEFAULT: "#6B6B80",
          light: "#9090A8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,45,120,0.12) 0%, transparent 65%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,45,120,0.06) 0%, transparent 60%)",
        "glow-gradient":
          "radial-gradient(circle at center, rgba(255,45,120,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "ping-slow": "ping 3s cubic-bezier(0,0,0.2,1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        typewriter: "typewriter 3s steps(20) infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        pink: "0 0 40px rgba(255,45,120,0.25)",
        "pink-sm": "0 0 20px rgba(255,45,120,0.15)",
        "inner-pink": "inset 0 1px 0 rgba(255,45,120,0.2)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
