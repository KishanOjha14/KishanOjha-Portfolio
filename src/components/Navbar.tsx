"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Menu, X, Download, ArrowRight } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { NAV_ITEMS } from "@/data/content"

interface NavbarProps {
  onResumeDownload: () => void
}

export default function Navbar({ onResumeDownload }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false)
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35, rootMargin: "-10% 0% -60% 0%" },
    )

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""))
      if (el) {
        sectionRefs.current[item.href.replace("#", "")] = el
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-surface)]/95 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="container-page flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2" onClick={() => handleNavClick("#home")} style={{ cursor: "pointer" }}>
            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
              <path d="M16 11v3a4 4 0 0 1-8 0v-3M8 15h8" />
            </svg>
            <span className="font-bold text-lg text-[var(--text-heading)] tracking-tight">KO</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-accent"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onResumeDownload}
              className="hidden sm:flex items-center gap-2 btn btn-outline px-4 py-2 text-sm"
              aria-label="Download Software Engineering Resume"
            >
              <Download className="w-4 h-4" /> Resume (SE)
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`fixed inset-0 z-40 bg-[var(--bg-surface)] border-r border-[var(--border)] transform transition-transform duration-300 ease-smooth ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between h-16 px-6">
            <span className="font-bold text-lg text-[var(--text-heading)] tracking-tight">KO</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 rounded-lg border border-[var(--border)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-accent text-white"
                    : "text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] hover:text-[var(--text-heading)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-3">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onResumeDownload()
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
              >
                <Download className="w-4 h-4 mr-2" /> Download Resume (Software Engineering)
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  const el = document.getElementById("ai-ml-resume")
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
              >
                <Download className="w-4 h-4 mr-2" /> Download Resume (AI/ML)
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
