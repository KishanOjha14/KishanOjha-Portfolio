'use client';

import { SKILLS } from '@/data/skills';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section border-t border-[var(--border)]"
      aria-labelledby="skills-title"
    >
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader
            title="Technical Toolkit"
            subtitle="Organized by discipline — no proficiency percentages, just the tools I work with."
          />
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="grid lg:grid-cols-2 gap-7">
            {SKILLS.map((group) => (
              <div key={group.id} className="card p-7">
                <div className="flex items-center gap-2 mb-5">
                  <h3 className="font-semibold text-[var(--text)] text-sm tracking-tight">
                    {group.title}
                  </h3>
                  {group.note && (
                    <span className="badge text-[0.65rem] border-[var(--border)] text-[var(--text-muted)] uppercase tracking-wider">
                      Exploratory
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                {group.note && (
                  <p className="mt-5 text-[0.75rem] text-[var(--text-muted)] leading-relaxed">
                    {group.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
