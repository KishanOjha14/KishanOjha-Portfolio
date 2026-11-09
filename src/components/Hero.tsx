"use client"

import { ArrowRight } from "lucide-react"
import { HERO } from "@/data/content"
import ScrollReveal from "./ScrollReveal"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollTo = (id: string) => () => {
    onNavigate(id)
  }

  return (
    <section id="home" className="relative section overflow-hidden" aria-labelledby="hero-title">
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal delay={1} className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-6">
                Available for opportunities
              </div>
              <h1 id="hero-title" className="text-[3.5rem] lg:text-[4.5rem] font-bold text-[var(--text-heading)] leading-[1.1] tracking-tight mb-6 text-balance">
                Kishan Kumar Ojha
              </h1>
              <p className="text-xl lg:text-2xl text-[var(--text-body)] leading-relaxed mb-8 max-w-xl">
                {HERO.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  onClick={scrollTo("projects")}
                  className="btn btn-primary px-8 py-3.5 text-sm"
                >
                  View Projects <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <button
                  onClick={scrollTo("resume")}
                  className="btn btn-outline px-8 py-3.5 text-sm"
                >
                  Download Resume
                </button>
                <button
                  onClick={scrollTo("contact")}
                  className="btn btn-outline px-8 py-3.5 text-sm"
                >
                  Contact Me
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-[var(--text-muted)] text-sm">
                {HERO.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--text-heading)] transition-colors">
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={2} className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full opacity-50 animate-float" />
              <img
                src="/profile-photo.jpg"
                alt="Kishan Kumar Ojha"
                className="w-full h-auto rounded-2xl border border-[var(--border)] shadow-card relative z-10 block mx-auto max-w-[320px]"
                width="640"
                height="640"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-card p-4 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12c0-1.884-.663-3.484-1.649-4.72-.776-.972-1.772-1.46-2.807-1.38a3.43 3.43 0 0 0-3.43 0c-1.035-.08-2.031.408-2.807 1.38C9.663 8.516 9 10.116 9 12s.663 3.484 1.649 4.72c.776.972 1.772 1.46 2.807 1.38a3.43 3.43 0 0 0 3.43 0c1.035.08 2.031-.408 2.807-1.38C21.337 15.484 22 13.884 22 12zM2 12a10 10 0 1 1 20 0A10 10 0 0 1 2 12z" /></svg>
                  <span className="text-xs text-[var(--text-body)]">work.kishanojha@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.006 6.689a1 1 0 0 1-.116 1.404l-6.997 4.417a1 1 0 0 1-1.293-.523l.067-1.055a1 1 0 0 1 1.404-.116l6.997 4.417a1 1 0 0 1-.117 1.404l-6.997 4.417a1 1 0 0 1-1.293-.523l.067-1.055a1 1 0 0 1 1.404-.116l6.997 4.417a1 1 0 0 1-.116 1.404l-6.997 4.417a1 1 0 0 1-1.293-.523l.067-1.055a1 1 0 0 1 1.404-.116l6.997 4.417a1 1 0 0 1-.116 1.404l-6.997 4.417A1 1 0 0 1 2 22V2a1 1 0 0 1 1.116-.215l6.997 4.417a1 1 0 0 1-.117 1.404l-6.997 4.417A1 1 0 0 1 2 8.405l.067-1.055a1 1 0 0 1 1.404-.116l6.997 4.417a1 1 0 0 1-.116 1.404l-6.997 4.417A1 1 0 0 1 2 12z" /></svg>
                  <span className="text-xs text-[var(--text-body)]">Noida, India</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 flex gap-3 items-end">
          {HERO.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-body)] hover:text-accent hover:border-accent hover:shadow-accent transition-all focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
              aria-label={s.label}
            >
              {s.label === "GitHub" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              {s.label === "LinkedIn" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.613 1.347 3.613 4.253v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.915.753 1.938 1.704 0 .946-.746 1.704-1.986 1.704zm-2.007 11.019h3.954v-9.646H3.33v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              )}
              {s.label === "Kaggle" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 0H4C1.9 0 0 1.9 0 4v16c0 2.1 1.9 4 4 4h16c2.1 0 4-1.9 4-4V4c0-2.1-1.9-4-4-4zm0 2v11h-8V2h8zm-9 0v11H4V2h7z" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <img src="/assets/images/hero-visual.svg" alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
