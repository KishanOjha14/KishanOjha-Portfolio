"use client"

import { useCallback } from "react"
import { X, ExternalLink, Github as GithubIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { PROJECTS, type Project } from "@/data/projects"

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  all: "All",
  "ai-generative": "Generative AI / AI",
  "machine-learning": "Machine Learning",
  "deep-learning-vision": "Deep Learning / Computer Vision",
  "data-analytics": "Data Analytics",
  "software-engineering": "Software Engineering",
}

type ProjectCategory = (typeof PROJECTS)[number]["category"]

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const close = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose],
  )

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onKeyDown={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-3xl)] shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur sticky top-0 z-10">
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-body)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 flex flex-col">
              <img
                src={project.image}
                alt={`${project.name} visual`}
                className="w-full h-64 object-cover rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg-surface-2)] shadow-card"
                loading="lazy"
                decoding="async"
              />
              <div className="mt-5 space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full btn btn-outline text-xs justify-center"
                  >
                    <GithubIcon className="w-3 h-3" /> GitHub Repository
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full btn btn-outline text-xs justify-center"
                  >
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                )}
                {project.statusNote && (
                  <p className="text-[0.75rem] text-[var(--text-muted)] bg-[var(--bg-surface-2)] p-3 rounded-[var(--radius-xl)] border border-[var(--border)]">
                    {project.statusNote}
                  </p>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="badge text-[0.65rem] uppercase tracking-wider">
                  {CATEGORY_LABELS[project.category]}
                </span>
                {project.featured && (
                  <span className="badge text-[0.65rem] border-accent/40 bg-accent/5 text-accent uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>
              <h2 id="project-detail-title" className="text-[1.75rem] md:text-[2rem] font-bold text-[var(--text)] leading-[1.25] mb-3">
                {project.name}
              </h2>
              <p className="text-[var(--text-body)] leading-relaxed mb-6 max-w-[48ch]">
                {project.description}
              </p>

              <section className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-[var(--text-body)] leading-relaxed text-sm">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-[var(--text-body)] leading-relaxed text-sm">{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-2">
                    Technical Implementation
                  </h4>
                  <p className="text-[var(--text-body)] leading-relaxed text-sm">{project.implementation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-[var(--text-body)] leading-relaxed text-sm list-disc list-inside">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {project.aiML && (
                  <div className="border-t border-[var(--border)] pt-6">
                    <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-3">
                      Machine Learning Details
                    </h4>
                    {project.aiML.dataset && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Dataset
                        </p>
                        <p className="text-[var(--text-body)] leading-relaxed text-sm">
                          {project.aiML.dataset}
                        </p>
                      </div>
                    )}
                    {project.aiML.architecture && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Model Architecture
                        </p>
                        <p className="text-[var(--text-body)] leading-relaxed text-sm">
                          {project.aiML.architecture}
                        </p>
                      </div>
                    )}
                    {project.aiML.methodology && project.aiML.methodology.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Evaluation Methodology
                        </p>
                        <ul className="text-[var(--text-body)] leading-relaxed text-sm list-disc list-inside space-y-1">
                          {project.aiML.methodology.map((m) => (
                            <li key={m}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.aiML.metrics && project.aiML.metrics.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Reported Metrics
                        </p>
                        <ul className="text-[var(--text-body)] leading-relaxed text-sm list-disc list-inside space-y-1">
                          {project.aiML.metrics.map((m) => (
                            <li key={m}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.aiML.explainability && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Explainability
                        </p>
                        <p className="text-[var(--text-body)] leading-relaxed text-sm">
                          {project.aiML.explainability}
                        </p>
                      </div>
                    )}
                    {project.aiML.limitations && project.aiML.limitations.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Limitations
                        </p>
                        <ul className="text-[var(--text-body)] leading-relaxed text-sm list-disc list-inside space-y-1">
                          {project.aiML.limitations.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {project.backend && (
                  <div className="border-t border-[var(--border)] pt-6">
                    <h4 className="font-semibold text-[var(--text)] text-[0.8rem] uppercase tracking-wider mb-3">
                      Backend & Architecture
                    </h4>
                    <ul className="space-y-2 text-[var(--text-body)] leading-relaxed text-sm list-disc list-inside">
                      {project.backend.architecture && <li>Architecture: {project.backend.architecture}</li>}
                      {project.backend.api && <li>API design: {project.backend.api}</li>}
                      {project.backend.auth && <li>Authentication: {project.backend.auth}</li>}
                      {project.backend.database && <li>Database: {project.backend.database}</li>}
                      {project.backend.deployment && <li>Deployment: {project.backend.deployment}</li>}
                    </ul>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
