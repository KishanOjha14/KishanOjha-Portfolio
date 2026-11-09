"use client"

import { CURRENTLY_EXPLORING } from "@/data/content"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"
import Callout from "./Callout"

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="section border-t border-[var(--border)]" aria-labelledby="exploring-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader title="Currently Exploring" subtitle={CURRENTLY_EXPLORING.subtitle} />
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURRENTLY_EXPLORING.items.map((item) => {
              const isHandsOn = item.status === "Hands-on"
              return (
                <div key={item.label} className="card p-6 hover:border-accent/50 transition-colors group cursor-default">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-[var(--text)] text-sm leading-tight">{item.label}</span>
                    <span className={`badge px-3 py-1.5 ${isHandsOn ? "badge-accent" : "border-[var(--border)] text-[var(--text-muted)]"}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[body-sm] text-[var(--text-body)] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={3} className="mt-10">
          <Callout>
            <p className="text-[body-sm] text-[var(--text-body)] leading-relaxed">
              Items marked <span className="font-semibold text-accent">Hands-on</span> reflect work I've
              built or applied. Items marked <span className="font-medium text-[var(--text-muted)]">Learning</span>
              are areas I'm actively studying — exploratory, not yet shipped in a project.
            </p>
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
