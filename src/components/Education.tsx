"use client"

import { EDUCATION } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"
import { GraduationCap, BookOpen } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
}

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionTitle
            title="Education"
            subtitle="Academic background in computer applications."
          />
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto space-y-0">
          <div className="absolute left-[34px] top-0 bottom-0 w-0.5 bg-[var(--border-soft)]" />
          {EDUCATION.map((edu, idx) => {
            const Icon = ICONS[edu.icon] || GraduationCap
            const isLast = idx === EDUCATION.length - 1
            return (
              <ScrollReveal key={edu.institution} delay={(((2 + idx) % 3) + 1) as 1 | 2 | 3} className="relative pl-12 pb-12 md:pb-0 group">
                <div className="absolute left-[28px] top-3 w-4 h-4 rounded-full bg-accent ring-8 ring-[var(--bg-surface)] z-10" />
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-[var(--text-heading)]">{edu.degree}</h3>
                      <p className="text-accent font-medium text-sm">{edu.institution}</p>
                      {edu.specialization && (
                        <p className="text-[var(--text-body)] text-sm mt-1">{edu.specialization}</p>
                      )}
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4 md:mb-0">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {edu.location}
                    </span>
                  </div>
                  {isLast ? null : (
                    <div className="absolute left-[32px] -top-[calc(100%+8px)] w-0.5 h-[calc(100%+16px)] bg-[var(--border-soft)]" />
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
        <div className="mt-8 text-right hidden md:block">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">MCA expected May 2027 · BCA July 2022 – July 2025</p>
        </div>
      </div>
    </section>
  )
}
