"use client"

import { ArrowRight, Mail, MapPin } from "lucide-react"
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
    <section id="home" className="section relative overflow-hidden" aria-labelledby="hero-title">
      <div className="container-page relative z-10">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-6">
            <ScrollReveal delay={1} className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/5 text-accent text-[0.75rem] font-semibold tracking-wide uppercase mb-6">
                Available for collaboration
              </div>
              <h1 id="hero-title" className="text-[2.5rem] md:text-[3.25rem] font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-5 text-balance">
                Kishan Kumar Ojha
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-body)] leading-relaxed mb-7 max-w-[46ch]">
                {HERO.introduction}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" onClick={scrollTo("projects")} className="btn btn-primary px-6 py-3 text-xs">
                  Explore Projects <ArrowRight className="w-3 h-3 ml-1" />
                </a>
                <button onClick={scrollTo("blog")} className="btn btn-outline px-6 py-3 text-xs">
                  Read Technical Notes
                </button>
                <button onClick={scrollTo("resume")} className="btn btn-outline px-6 py-3 text-xs">
                  Download Resume
                </button>
                <button onClick={scrollTo("contact")} className="btn btn-outline px-6 py-3 text-xs">
                  Contact Me
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-5 text-[var(--text-muted)] text-xs">
                {HERO.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--text-body)] transition-colors">
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 lg:col-span-6 flex justify-center">
            <ScrollReveal delay={2} className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite]" />
              <img
                src="/profile-photo.jpg"
                alt="Kishan Kumar Ojha"
                className="w-full h-auto rounded-[var(--radius-3xl)] border border-[var(--border)] shadow-card relative z-10 block mx-auto max-w-[320px]"
                width="640"
                height="640"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--bg-surface)] shadow-card p-5 flex flex-col gap-2 pointer-events-none z-20">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 12c0-1.884-.663-3.484-1.649-4.72-.776-.972-1.772-1.46-2.807-1.38a3.43 3.43 0 00-3.43 0c-1.035-.08-2.031.408-2.807 1.38C9.663 8.516 9 10.116 9 12s.663 3.484 1.649 4.72c.776.972 1.772 1.46 2.807 1.38a3.43 3.43 0 003.43 0c1.035.08 2.031-.408 2.807-1.38C21.337 15.484 22 13.884 22 12zM2 12a10 10 0 1120 0 10 10 0 01-20 0z" />
                  </svg>
                  <span className="text-xs text-[var(--text-body)]">work.kishanojha@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.006 6.689a1 1 0 01-.116 1.404l-6.997 4.417a1 1 0 01-1.293-.523l.067-1.055a1 1 0 011.404-.116l6.997 4.417a1 1 0 01-.117 1.404l-6.997 4.417a1 1 0 01-1.293-.523l.067-1.055a1 1 0 011.404-.116l6.997 4.417a1 1 0 01-.116 1.404l-6.997 4.417A1 1 0 012 22V2a1 1 0 011.116-.215l6.997 4.417a1 1 0 01-.117 1.404l-6.997 4.417A1 1 0 012 8.405l.067-1.055a1 1 0 011.404-.116l6.997 4.417a1 1 0 01-.116 1.404l-6.997 4.417A1 1 0 012 12z" />
                  </svg>
                  <span className="text-xs text-[var(--text-body)]">Noida, India</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
          <img src="/assets/images/hero-visual.svg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
