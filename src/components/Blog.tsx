"use client"

import { BLOG_INTRO, BLOG_POSTS } from "@/data/blog"
import ScrollReveal from "./ScrollReveal"
import SectionHeader from "./SectionHeader"

export default function Blog() {
  const unpublished = BLOG_POSTS.filter((p) => !p.published)

  return (
    <section id="blog" className="section border-t border-[var(--border)]" aria-labelledby="blog-title">
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader
            title="Technical Writing & Research Notes"
            subtitle={BLOG_INTRO.subtitle}
          />
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="card p-8 lg:p-10">
            <p className="text-[var(--text-body)] leading-relaxed text-sm md:text-base mb-6">
              {BLOG_INTRO.emptyState}
            </p>
            {unpublished.length > 0 && (
              <>
                <h4 className="font-semibold text-[var(--text)] text-sm mb-3 uppercase tracking-wide">
                  In Progress
                </h4>
                <div className="space-y-3">
                  {unpublished.map((post) => (
                    <div key={post.slug} className="flex items-start gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-surface-2)]">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--text-muted)] mt-[9px]" />
                      <div>
                        <p className="font-medium text-[var(--text)] text-sm leading-relaxed">
                          {post.title}
                        </p>
                        <p className="text-[var(--text-muted)] text-[0.75rem] leading-relaxed">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="badge text-[0.65rem] border-[var(--border)] text-[var(--text-muted)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[0.75rem] text-[var(--text-muted)] leading-relaxed">
                  These notes are written as I learn. None are presented as published or peer-reviewed
                  work. Check back as they develop, or explore the <a href="#projects" className="text-accent hover:text-accent/80 transition-colors">projects</a>
                  section to see what I've built.
                </p>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
