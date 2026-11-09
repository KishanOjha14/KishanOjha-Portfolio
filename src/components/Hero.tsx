"use client"

import { ArrowRight, Mail, MapPin, Cpu, Layers } from "lucide-react"
import { HERO } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import { KOBrand } from "./KOBrand"

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const scrollTo = (id: string) => () => {
    onNavigate(id)
  }

  return (
    <section id="home" className="relative section-full overflow-hidden" aria-labelledby="hero-title">
      <div className="container-page relative z-10">
        {/* Left: content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div className="flex-1 lg:max-w-[58%] order-2 lg:order-1">
            <ScrollReveal delay={1} className="max-w-none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl border border-accent/20 bg-accent/5 text-accent text-[0.75rem] font-semibold tracking-wide uppercase mb-7">
                {HERO.availability}
              </div>
              <h1 id="hero-title" className="text-[hero] font-bold text-[var(--text)] mb-6 tracking-tight">
                Kishan Kumar Ojha
              </h1>
              <p className="text-[body] text-[var(--text-body)] leading-relaxed mb-8 max-w-[52ch]">
                {HERO.introduction}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Generative AI", color: "accent" },
                  { label: "Deep Learning", color: "muted" },
                  { label: "Computer Vision", color: "muted" },
                  { label: "Data Analytics", color: "muted" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className={`badge ${t.color === "accent" ? "badge-accent" : ""}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" onClick={scrollTo("projects")} className="btn btn-primary">
                  Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="#blog" onClick={scrollTo("blog")} className="btn btn-outline">
                  Read Technical Notes
                </a>
                <a href="#resume" onClick={scrollTo("resume")} className="btn btn-outline">
                  Download AI/ML Resume
                </a>
                <a href="#contact" onClick={scrollTo("contact")} className="btn btn-outline">
                  Contact Me
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 text-[var(--text-muted)] text-xs">
                {HERO.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--text-body)] transition-colors">
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: photograph */}
          <div className="flex-1 lg:max-w-[42%] order-1 lg:order-2 flex justify-center">
            <ScrollReveal delay={2} className="relative w-full max-w-[480px]">
              {/* Decorative ring behind photo */}
              <div className="absolute inset-0 rounded-[var(--radius-4xl)] border border-accent/20 bg-accent/5 blur-[60px] opacity-50 animate-[pulse-soft_4s_ease-in-out_infinite]" />
              <div className="relative z-10">
                <img
                  src="/profile-avatar.png"
                  alt="Kishan Kumar Ojha"
                  className="w-full h-auto rounded-[var(--radius-3xl)] border border-[var(--border)] shadow-card relative z-10 block mx-auto max-w-[400px] shadow-accent"
                  width="800"
                  height="800"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* Floating metadata card */}
              <div className="absolute -bottom-10 -left-6 w-72 rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--bg-surface)] shadow-card p-5 z-20 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <div>
                    <p className="text-[0.7rem] font-semibold text-[var(--text)] leading-none">Email</p>
                    <p className="text-[0.75rem] text-[var(--text-body)] leading-tight">work.kishanojha@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <div>
                    <p className="text-[0.7rem] font-semibold text-[var(--text)] leading-none">Location</p>
                    <p className="text-[0.75rem] text-[var(--text-body)] leading-tight">Noida, India</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Decorative AI geometry - bottom right corner, behind content */}
        <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute right-[-5%] top-[60%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]" />
        </div>
      </div>
    </section>
  )
}
