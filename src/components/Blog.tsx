'use client';

import { BLOG_INTRO, BLOG_POSTS } from '@/data/blog';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

export default function Blog() {
  const unpublished = BLOG_POSTS.filter((p) => !p.published);

  return (
    <section
      id="blog"
      className="section border-t border-[var(--border)]"
      aria-labelledby="blog-title"
    >
      <div className="container-page">
        <ScrollReveal delay={1}>
          <SectionHeader
            title="Technical Writing & Research Notes"
            subtitle={BLOG_INTRO.subtitle}
          />
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <div className="card p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-[body] text-[var(--text-body)] leading-relaxed mb-4">
                  {BLOG_INTRO.emptyState}
                </p>
              </div>
              {unpublished.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="badge badge-accent text-[0.65rem] uppercase tracking-wider">
                    {unpublished.length} in progress
                  </span>
                </div>
              )}
            </div>
            {unpublished.length > 0 && (
              <>
                <h4 className="font-semibold text-[var(--text)] text-sm mb-4 uppercase tracking-wide">
                  Drafts & In Progress
                </h4>
                <div className="space-y-4">
                  {unpublished.map((post) => (
                    <div
                      key={post.slug}
                      className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface-2)] hover:bg-[var(--bg-surface)] transition-colors cursor-default"
                    >
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--text-muted)] mt-[10px]" />
                      <div>
                        <p className="font-medium text-[var(--text)] text-sm leading-relaxed">
                          {post.title}
                        </p>
                        <p className="text-[var(--text-muted)] text-[0.75rem] leading-relaxed">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge text-[0.65rem] border-[var(--border)] text-[var(--text-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[0.75rem] text-[var(--text-muted)] leading-relaxed">
                  These notes are written as I learn. None are presented as published or
                  peer-reviewed work. Check back as they develop, or explore the{' '}
                  <a
                    href="#projects"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    projects
                  </a>
                  section to see what I've built.
                </p>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
