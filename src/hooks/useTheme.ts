"use client"

import { useEffect, useCallback, useState } from "react"

const STORAGE_KEY = "portfolio-theme"

export type Theme = "light" | "dark" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  const resolveTheme = useCallback((pref: Theme): "light" | "dark" => {
    if (pref === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return pref
  }, [])

  const applyTheme = useCallback((resolved: "light" | "dark") => {
    if (resolved === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    const initial: Theme = (stored as Theme) || "system"
    setTheme(initial)
    applyTheme(resolveTheme(initial))
  }, [applyTheme, resolveTheme])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY, theme)
    applyTheme(resolveTheme(theme))

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      if (theme === "system") {
        applyTheme(resolveTheme("system"))
      }
    }
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [theme, mounted, applyTheme, resolveTheme])

  return { theme, setTheme, mounted, resolved: resolveTheme(theme) }
}
