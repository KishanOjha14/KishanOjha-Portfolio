/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          bg: "#ffffff",
          bgInverse: "#09090b",
          surface: "#f4f4f5",
          surfaceInverse: "#18181b",
          border: "#e7e5e4",
          borderInverse: "#27272a",
          text: "#18181b",
          textInverse: "#fafafa",
          muted: "#71717a",
          mutedInverse: "#a1a1aa",
          accent: "#4f46e5",
          accentInverse: "#818cf8",
          accentSoft: "rgba(79, 70, 229, 0.10)",
          accentSoftInverse: "rgba(129, 140, 248, 0.15)",
          gray: {
            100: "#f4f4f5",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#71717a",
            600: "#57534e",
            700: "#3f3a35",
            800: "#292524",
            900: "#1c1917",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "display": ["2.75rem", { lineHeight: "1.1", letterTracking: "-0.02em" }],
        "h1": ["1.75rem", { lineHeight: "1.3" }],
        "h2": ["1.5rem", { lineHeight: "1.35" }],
        "h3": ["1.25rem", { lineHeight: "1.4" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "sm": ["0.9rem", { lineHeight: "1.55" }],
        "xs": ["0.8rem", { lineHeight: "1.5" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "10px",
        "2xl": "12px",
        "3xl": "16px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        cardHover: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
}
