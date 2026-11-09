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
        // Light theme
        ink: {
          bg: "#F6F5F2",
          surface: "#FFFFFF",
          surfaceSoft: "#F2F0EC",
          border: "#E8E6E0",
          borderSoft: "#F0EEEA",
          text: "#191919",
          textBody: "#3A3A3A",
          textMuted: "#686868",
          accent: "#6557D2",
          accentHover: "#5246B8",
          accentSoft: "rgba(101, 87, 210, 0.10)",
          accentSoftHover: "rgba(101, 87, 210, 0.16)",
          inverse: "#111216",
        },
        // Dark theme
        inverse: {
          bg: "#111216",
          surface: "#1A1B22",
          surfaceSoft: "#21222A",
          border: "#2A2B32",
          borderSoft: "#1E1F26",
          text: "#F4F3F1",
          textBody: "#C9C7C4",
          textMuted: "#A5A5AE",
          accent: "#A99AFF",
          accentHover: "#C2B8FF",
          accentSoft: "rgba(169, 154, 255, 0.15)",
          accentSoftHover: "rgba(169, 154, 255, 0.22)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(48px, 8vw, 80px)", { lineHeight: "1.05", letterTracking: "-0.02em" }],
        "section": ["clamp(30px, 5vw, 44px)", { lineHeight: "1.2", letterTracking: "-0.015em" }],
        "card-title": ["clamp(18px, 2.5vw, 24px)", { lineHeight: "1.3" }],
        "body": ["clamp(15px, 1.5vw, 18px)", { lineHeight: "1.7" }],
        "body-sm": ["clamp(13px, 1.2vw, 15px)", { lineHeight: "1.6" }],
        "meta": ["clamp(11px, 1vw, 13px)", { lineHeight: "1.5" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        90: "22.5rem",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "40px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        cardHover: "0 20px 40px -10px rgb(0 0 0 / 0.10), 0 8px 16px -6px rgb(0 0 0 / 0.06)",
        accent: "0 0 40px -16px rgba(101, 87, 210, 0.35)",
        accentDark: "0 0 50px -16px rgba(169, 154, 255, 0.30)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float": "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
