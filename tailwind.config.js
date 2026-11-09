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
        ink: {
          900: "#090a0b",
          800: "#0f1113",
          700: "#16181b",
          600: "#1e2023",
        },
        surface: {
          DEFAULT: "#141619",
          elevated: "#1a1d21",
        },
        border: {
          DEFAULT: "#272a2f",
          soft: "#1f2226",
        },
        accent: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
          soft: "rgba(99, 102, 241, 0.12)",
        },
        text: {
          heading: "#f8fafc",
          body: "#cbd5e1",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "1.15", letterTracking: "-0.02em" }],
      },
      spacing: {
        15: "3.75rem",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(0, 0, 0, 0.45)",
        card: "0 8px 30px -6px rgba(0, 0, 0, 0.5)",
        accent: "0 0 40px -12px rgba(99, 102, 241, 0.25)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
