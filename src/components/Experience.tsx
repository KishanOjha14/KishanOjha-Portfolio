"use client"

import { EXPERIENCE } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
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
          <SectionHeader
            title="Experience and Achievements"
            subtitle="Real-world engineering exposure and startup leadership."
          />
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto space-y-0">
          <div className="absolute left-[31px] top-0 bottom-0 w-[1px] bg-[var(--border-soft)]" />
          {EXPERIENCE.map((exp, idx) => {
            const Icon = ICONS[exp.icon] || Code2
            const isLast = idx === EXPERIENCE.length - 1
            return (
              <ScrollReveal key={exp.company} delay={(((2 + idx) % 3) + 1) as 1 | 2 | 3} className="relative pl-12 pb-10 group">
                <div className="absolute left-[27px] top-2 w-3 h-3 rounded-full bg-[var(--text)] ring-[2px] ring-[var(--bg-surface)] group-hover:ring-accent transition-colors z-10" />
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-[var(--text)] text-sm">{exp.role}</h3>
                      <p className="text-accent font-medium text-[0.8rem]">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[0.7rem] text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-[var(--text-body)] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 text-[var(--text-body)] text-sm leading-relaxed list-disc list-inside">
                    {exp.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                {!isLast && (
                  <div className="absolute left-[30px] -top-[calc(100%+8px)] w-[1px] h-[calc(100%+16px)] bg-[var(--border-soft)]" />
                )}
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
