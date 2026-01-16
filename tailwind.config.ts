import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        // Primary Color Palette - Indigo (Trust, Professionalism, Technology)
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // Main primary
          600: "#4f46e5", // Primary actions
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        // Secondary Color Palette - Purple (Creativity, Innovation)
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea", // Main secondary
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        // Accent Color Palette - Blue (Call-to-Action Emphasis)
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Main accent
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // Semantic Colors
        success: {
          DEFAULT: "#10b981", // Green-500
          light: "#34d399", // Green-400
          dark: "#059669", // Green-600
        },
        destructive: {
          DEFAULT: "#ef4444", // Red-500
          light: "#f87171", // Red-400
          dark: "#dc2626", // Red-600
        },
        // Background & Surface Colors
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f9fafb", // Neutral-50
          muted: "#f3f4f6", // Neutral-100
          dark: "#030712", // Neutral-950
          "dark-secondary": "#111827", // Neutral-900
          "dark-muted": "#1f2937", // Neutral-800
        },
        // Border Colors
        border: {
          DEFAULT: "#e5e7eb", // Neutral-200
          muted: "#d1d5db", // Neutral-300
          subtle: "#f3f4f6", // Neutral-100
          dark: "#374151", // Neutral-700
          "dark-muted": "#4b5563", // Neutral-600
        },
        // Text Colors with proper hierarchy
        foreground: {
          DEFAULT: "#111827", // Neutral-900
          secondary: "#4b5563", // Neutral-600
          muted: "#6b7280", // Neutral-500
          subtle: "#9ca3af", // Neutral-400
          dark: "#f9fafb", // Neutral-50
          "dark-secondary": "#d1d5db", // Neutral-300
          "dark-muted": "#9ca3af", // Neutral-400
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        "wiggle-once": "wiggle 1s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in-from-bottom": "slideInFromBottom 0.5s ease-out",
        "slide-in-from-bottom-4": "slideInFromBottom4 0.6s ease-out",
        "slide-in-from-bottom-6": "slideInFromBottom6 0.7s ease-out",
        "slide-in-from-bottom-8": "slideInFromBottom8 0.8s ease-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromBottom4: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromBottom6: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromBottom8: {
          "0%": { transform: "translateY(32px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
