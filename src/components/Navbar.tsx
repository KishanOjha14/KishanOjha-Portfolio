'use client';

import { useEffect, useState, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { KOBrand } from './KOBrand';
import ThemeToggle from './ThemeToggle';
import { NAV_ITEMS, RESUMES } from '@/data/content';

interface NavbarProps {
  onResumeDownload: (file: string) => void;
}

export default function Navbar({ onResumeDownload }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0% -60% 0%' }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.replace('#', ''));
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-surface)]/90 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="container-page flex items-center justify-between h-20 px-0">
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => handleNavClick('#home')}
        >
          <KOBrand size={30} className="text-accent" />
          <span className="font-bold text-[var(--text)] text-sm tracking-tight">Kishan Ojha</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-xs font-medium transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'text-accent'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-body)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <button
            onClick={() => onResumeDownload(RESUMES[0].file)}
            className="flex items-center gap-2 btn btn-sm btn-primary"
            aria-label="Download AI/ML Resume"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg-surface)] border-l border-[var(--border)] transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <KOBrand size={26} className="text-accent" />
            <span className="font-bold text-[var(--text)] text-sm tracking-tight">KO</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-xl border border-[var(--border)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
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
              className={`block px-4 py-3.5 text-sm font-medium rounded-2xl transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'bg-accent text-white'
                  : 'text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] hover:text-[var(--text-body)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-[var(--border)] space-y-3">
          {RESUMES.map((r) => (
            <button
              key={r.label}
              onClick={() => {
                setMenuOpen(false);
                onResumeDownload(r.file);
              }}
              className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:bg-[var(--bg-surface-2)] hover:text-accent transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
            >
              <Download className="w-3.5 h-3.5 mr-2" /> {r.label}
              <p className="text-[0.7rem] text-[var(--text-muted)] mt-1">{r.description}</p>
            </button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
