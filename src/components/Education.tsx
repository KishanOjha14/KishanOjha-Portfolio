"use client"

import { EDUCATION } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { GraduationCap, BookOpen } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
}

export default function Education() {
  return (
    <section id="education" className="section border-t border-[var(--border)]" aria-labelledby="education-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader
            title="Education"
            subtitle="Academic background in computer applications."
          />
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto space-y-0">
          <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-[var(--border-soft)]" />
          {EDUCATION.map((edu, idx) => {
            const Icon = ICONS[edu.icon] || GraduationCap
            const isLast = idx === EDUCATION.length - 1
            return (
              <ScrollReveal key={edu.institution} delay={(((2 + idx) % 3) + 1) as 1 | 2 | 3} className="relative pl-12 pb-10 group">
                <div className="absolute left-[27px] top-2 w-3 h-3 rounded-full bg-accent ring-[2px] ring-[var(--bg-surface)] z-10" />
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-[var(--text)] text-sm">{edu.degree}</h3>
                      <p className="text-accent font-medium text-[0.8rem]">{edu.institution}</p>
                      {edu.specialization && (
                        <p className="text-[var(--text-body)] text-[0.8rem] mt-1">{edu.specialization}</p>
                      )}
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[0.7rem] text-[var(--text-muted)] mb-4 md:mb-0">
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent" /> {edu.location}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="absolute left-[30px] -top-[calc(100%+8px)] w-[1px] h-[calc(100%+16px)] bg-[var(--border-soft)]" />
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
