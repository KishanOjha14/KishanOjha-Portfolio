"use client"

import { useEffect, useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { NAV_ITEMS } from "@/data/content"

interface NavbarProps {
  onResumeDownload: () => void
}

export default function Navbar({ onResumeDownload }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

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
      { threshold: 0.3, rootMargin: "-10% 0% -60% 0%" },
    )

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""))
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-surface)]/90 backdrop-blur-md" aria-label="Main navigation">
      <div className="container-page flex items-center justify-between h-16 px-4">
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => handleNavClick("#home")}
        >
          <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <path d="M16 11v3a4 4 0 01-8 0v-3M8 15h8" />
          </svg>
          <span className="font-bold text-sm text-[var(--text)] tracking-tight">KO</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-xs font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-accent"
                  : "text-[var(--text-muted)] hover:text-[var(--text-body)]"
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
            className="hidden md:flex items-center gap-2 btn btn-outline px-4 py-2 text-xs"
            aria-label="Download AI/ML Resume"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume (AI/ML)
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg-surface)] border-r border-[var(--border)] transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--border)]">
          <span className="font-bold text-sm text-[var(--text)] tracking-tight">KO</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg border border-[var(--border)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
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
                  : "text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] hover:text-[var(--text-body)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-[var(--border)] space-y-3">
          <button
            onClick={() => {
              setMenuOpen(false)
              onResumeDownload()
            }}
            className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
          >
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume (AI/ML)
          </button>
          <button
            onClick={() => {
              setMenuOpen(false)
              const el = document.getElementById("resume")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
            className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
          >
            Download Resume (Software Engineering)
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
