'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme, resolved } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title="Toggle theme"
      className="relative flex items-center justify-center w-10 h-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text)] transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50 hover:border-accent/40"
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
        <Sun className="w-5 h-5 text-[var(--text-muted)]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
        <Moon className="w-5 h-5 text-[var(--text-muted)]" />
      </div>
      {resolved === 'dark' ? (
        <Moon className="w-5 h-5 z-10 text-accent" />
      ) : (
        <Sun className="w-5 h-5 z-10 text-accent" />
      )}
    </button>
  );
}
