"use client"

import { LEADERSHIP } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"
import { Award } from "lucide-react"

export default function Leadership() {
  return (
    <section id="leadership" className="section border-t border-[var(--border)]" aria-labelledby="leadership-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionTitle
            title="Leadership"
            subtitle="ArnoLabs — co-founded SaaS startup delivering software solutions to business clients."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={2} className="card p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 mb-5">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">ArnoLabs</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-4">Co-founder</h3>
            <p className="text-[var(--text-body)] leading-relaxed mb-6">
              {LEADERSHIP.description}
            </p>
            <h4 className="font-semibold text-[var(--text-heading)] mb-3">Focus areas</h4>
            <ul className="space-y-3 text-[var(--text-body)] text-sm leading-relaxed">
              {LEADERSHIP.focus.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] shrink-0 mt-[7px]" />
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="card p-5">
                <p className="text-2xl font-bold text-[var(--text-heading)]">SaaS Startup</p>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Co-founded venture</p>
              </div>
              <div className="card p-5">
                <p className="text-2xl font-bold text-[var(--text-heading)]">10+</p>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Team members (resume 1)</p>
              </div>
              <div className="card p-5 lg:col-span-2">
                <p className="text-2xl font-bold text-[var(--text-heading)]">15+</p>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide">
                  Business clients served (per ML resume)
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
