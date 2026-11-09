"use client"

import { ABOUT } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import { Code2, Brain, Layers, Award } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  "Backend Development": Code2,
  "AI/ML & Analytics": Brain,
  Leadership: Award,
}

export default function About() {
  return (
    <section id="about" className="section border-t border-[var(--border)]" aria-labelledby="about-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader title="About Me" subtitle="A concise professional introduction." />
        </ScrollReveal>

        <ScrollReveal delay={2} className="mt-10">
          <div className="space-y-6">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--text-body)] leading-relaxed text-sm md:text-base">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
