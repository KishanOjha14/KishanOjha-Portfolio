"use client"

import { useState, useCallback } from "react"
import { X, ExternalLink, Github as GithubIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { PROJECTS, type Project } from "@/data/projects"

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [tab, setTab] = useState<"overview" | "detail">("overview")

  const close = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onKeyDown={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-[var(--border)] bg-[var(--bg-surface)]/80 backdrop-blur sticky top-0 z-10">
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-surface-2)] transition-colors focus:outline-none focus-2 focus:ring-2 focus:ring-accent"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setTab("overview")}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                tab === "overview"
                  ? "bg-accent text-white"
                  : "text-[var(--text-body)] hover:bg-[var(--bg-surface-2)]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setTab("detail")}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                tab === "detail"
                  ? "bg-accent text-white"
                  : "text-[var(--text-body)] hover:bg-[var(--bg-surface-2)]"
              }`}
            >
              Technical Detail
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 flex flex-col">
              <img
                src={project.image}
                alt={`${project.name} visual`}
                className="w-full h-64 object-cover rounded-xl border border-[var(--border)] bg-[var(--bg-surface-2)] shadow-soft"
                loading="lazy"
                decoding="async"
              />
              <div className="mt-4 space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full btn btn-outline text-sm justify-center"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub Repository
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full btn btn-outline text-sm justify-center"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.statusNote && (
                  <p className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface-2)] p-3 rounded border border-[var(--border)]">
                    {project.statusNote}
                  </p>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h2 id="project-detail-title" className="text-3xl font-bold text-[var(--text-heading)] mb-2">
                {project.name}
              </h2>
              <p className="text-accent font-semibold text-sm mb-6 uppercase tracking-wide">{project.tagline}</p>
              <p className="text-[var(--text-body)] leading-relaxed mb-6">{project.description}</p>

              {tab === "overview" ? (
                <>
                  <section className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[var(--text-heading)] mb-2">Problem</h4>
                      <p className="text-[var(--text-body)] leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-heading)] mb-2">Solution</h4>
                      <p className="text-[var(--text-body)] leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-heading)] mb-2">Key Features</h4>
                      <ul className="space-y-2 text-[var(--text-body)] leading-relaxed list-disc list-inside">
                        {project.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-heading)] mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span key={s} className="skill-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[var(--text-heading)] mb-2">Technical Implementation</h4>
                      <p className="text-[var(--text-body)] leading-relaxed">{project.implementation}</p>
                    </div>
                    {project.backend && (
                      <div>
                        <h4 className="font-semibold text-[var(--text-heading)] mb-2">Backend & Architecture</h4>
                        <ul className="space-y-2 text-[var(--text-body)] leading-relaxed list-disc list-inside">
                          {project.backend.architecture && <li>Architecture: {project.backend.architecture}</li>}
                          {project.backend.api && <li>API design: {project.backend.api}</li>}
                          {project.backend.auth && <li>Authentication: {project.backend.auth}</li>}
                          {project.backend.database && <li>Database: {project.backend.database}</li>}
                          {project.backend.deployment && <li>Deployment: {project.backend.deployment}</li>}
                        </ul>
                      </div>
                    )}
                    {project.aiML && (
                      <div>
                        <h4 className="font-semibold text-[var(--text-heading)] mb-2">Machine Learning Details</h4>
                        {project.aiML.dataset && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Dataset</p>
                            <p className="text-[var(--text-body)] leading-relaxed">{project.aiML.dataset}</p>
                          </div>
                        )}
                        {project.aiML.architecture && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Model Architecture</p>
                            <p className="text-[var(--text-body)] leading-relaxed">{project.aiML.architecture}</p>
                          </div>
                        )}
                        {project.aiML.methodology && project.aiML.methodology.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Evaluation Methodology</p>
                            <ul className="text-[var(--text-body)] leading-relaxed list-disc list-inside space-y-1">
                              {project.aiML.methodology.map((m) => (
                                <li key={m}>{m}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.aiML.metrics && project.aiML.metrics.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Reported Metrics</p>
                            <ul className="text-[var(--text-body)] leading-relaxed list-disc list-inside space-y-1">
                              {project.aiML.metrics.map((m) => (
                                <li key={m}>{m}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.aiML.explainability && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Explainability</p>
                            <p className="text-[var(--text-body)] leading-relaxed">{project.aiML.explainability}</p>
                          </div>
                        )}
                        {project.aiML.limitations && project.aiML.limitations.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">Limitations</p>
                            <ul className="text-[var(--text-body)] leading-relaxed list-disc list-inside space-y-1">
                              {project.aiML.limitations.map((l) => (
                                <li key={l}>{l}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
