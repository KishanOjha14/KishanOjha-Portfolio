"use client"

import { ABOUT } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"
import { Github, Layers, Cloud, BrainCircuit } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  "Backend Development": Github,
  "Cloud & DevOps": Cloud,
  "AI/ML & Analytics": BrainCircuit,
  Leadership: Layers,
}

export default function About() {
  return (
    <section id="about" className="section border-t border-[var(--border)]" aria-labelledby="about-title">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-1">
            <ScrollReveal delay={1}>
              <SectionTitle title="About Me" subtitle="Professional background in one place." />
            </ScrollReveal>
            <ScrollReveal delay={2} className="mt-8">
              <p className="text-[var(--text-body)] leading-relaxed text-sm md:text-base mb-6">
                {ABOUT.intro}
              </p>
              <p className="text-[var(--text-body)] leading-relaxed text-sm md:text-base mb-8">
                My work sits at the intersection of reliable backend engineering and data-driven
                intelligence — production Java and Spring Boot services on one side, Python-based
                machine learning and analytics on the other.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal delay={1} className="space-y-6">
              {ABOUT.highlights.map((h) => {
                const Icon = ICONS[h.label]
                return (
                  <div key={h.label} className="card p-5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-[var(--text-heading)] mb-2">{h.label}</h3>
                    <p className="text-[var(--text-body)] text-sm leading-relaxed">{h.text}</p>
                  </div>
                )
              })}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
