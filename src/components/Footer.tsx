'use client';

import { useTheme } from '@/hooks/useTheme';

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--bg-surface)] py-12"
      aria-label="Footer"
    >
      <div className="container-page flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <path d="M16 11v3a4 4 0 01-8 0v-3M8 15h8" />
          </svg>
          <span className="font-bold text-sm text-[var(--text)] tracking-tight">
            Kishan Kumar Ojha
          </span>
        </div>
        <div className="flex items-center gap-6 text-[0.7rem] text-[var(--text-muted)]">
          <span>AI Engineer &middot; Generative AI &middot; Machine Learning</span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-pressed={theme === 'dark'}
            className="inline-flex items-center gap-1.5 hover:text-[var(--text-body)] transition-colors focus:outline-none"
          >
            {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          </button>
          <span>© {year} Kishan Kumar Ojha.</span>
        </div>
      </div>
    </footer>
  );
}
