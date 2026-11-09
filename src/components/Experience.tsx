"use client"

import { EXPERIENCE } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"
import { Code2, Building2, Award } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  "code-2": Code2,
  "building-2": Building2,
  award: Award,
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionTitle
            title="Experience"
            subtitle="Professional internships, engineering work and startup leadership."
          />
        </ScrollReveal>

        <div className="relative space-y-0">
          <div className="absolute left-[34px] top-0 bottom-0 w-0.5 bg-[var(--border-soft)]" />
          {EXPERIENCE.map((exp, idx) => {
            const Icon = ICONS[exp.icon] || Code2
            const isLast = idx === EXPERIENCE.length - 1
            return (
              <ScrollReveal key={exp.company} delay={(((2 + idx) % 3) + 1) as 1 | 2 | 3} className="relative pl-12 pb-12 md:pb-0 group">
                <div className="absolute left-[28px] top-3 w-4 h-4 rounded-full bg-[var(--text-heading)] ring-8 ring-[var(--bg-surface)] group-hover:ring-accent transition-all z-10" />
                <div className="card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-[var(--text-heading)]">{exp.role}</h3>
                      <p className="text-accent font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-3 text-[var(--text-body)] text-sm leading-relaxed">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] shrink-0 mt-[7px]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                {!isLast && (
                  <div className="absolute left-[32px] -top-[calc(100%+8px)] w-0.5 h-[calc(100%+16px)] bg-[var(--border-soft)]" />
                )}
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
