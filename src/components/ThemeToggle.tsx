"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-5 h-5" />
          <span className="sr-only">Light mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" />
          <span className="sr-only">Dark mode</span>
        </>
      )}
    </button>
  )
}
