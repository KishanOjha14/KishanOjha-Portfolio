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
          <SectionHeader
            title="Currently Exploring"
            subtitle="What I'm learning and building right now — separated from hands-on experience."
          />
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CURRENTLY_EXPLORING.items.map((item) => {
              const isHandsOn = item.status === "Hands-on"
              return (
                <div
                  key={item.label}
                  className="card p-5 hover:border-accent/50 transition-colors cursor-default"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-[var(--text)] text-sm">{item.label}</span>
                    <span
                      className={`badge ${
                        isHandsOn
                          ? "border-accent/40 bg-accent/5 text-accent"
                          : "border-[var(--border)] text-[var(--text-muted)]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={3} className="mt-8">
          <Callout title="How to read this">
            <p className="text-sm text-[var(--text-body)] leading-relaxed">
              Items marked <span className="font-medium text-accent">Hands-on</span> reflect work I've
              actually built or applied. Items marked <span className="font-medium text-[var(--text-muted)]">Learning</span>
              are areas I'm actively studying — exploratory, not yet shipped in a project.
            </p>
          </Callout>
        </ScrollReveal>
      </div>
    </section>
  )
}
