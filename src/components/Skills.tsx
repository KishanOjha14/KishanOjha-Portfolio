"use client"

import { SKILLS } from "@/data/skills"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-[var(--border)]" aria-labelledby="skills-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionTitle
            title="Technical Skills"
            subtitle="Organized by discipline — no proficiency percentages, just the tools I work with."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group) => (
            <ScrollReveal key={group.id} delay={2} className="card p-6">
              <h3 className="font-semibold text-[var(--text-heading)] mb-4 text-sm tracking-wide uppercase">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
