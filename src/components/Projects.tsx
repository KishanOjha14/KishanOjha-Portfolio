"use client"

import { useState, useMemo } from "react"
import { Filter, Layers } from "lucide-react"
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/data/projects"
import ScrollReveal from "./ScrollReveal"
import SectionTitle from "./SectionTitle"
import ProjectDetail from "./ProjectDetail"

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  all: Layers,
  backend: Filter,
  fullstack: Filter,
  "machine-learning": Filter,
  "data-analytics": Filter,
}

export default function Projects() {
  type CategoryKey = (typeof PROJECT_CATEGORIES)[number]["key"]
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const [openProject, setOpenProject] = useState<Project | null>(null)

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) => activeCategory === "all" || p.category === activeCategory,
      ).sort((a, b) => Number(b.featured) - Number(a.featured)),
    [activeCategory],
  )

  return (
    <>
      <section id="projects" className="section border-t border-[var(--border)]" aria-labelledby="projects-title">
        <div className="container-page">
          <ScrollReveal delay={1}>
            <SectionTitle
              title="Featured Projects"
              subtitle="Selected work spanning backend systems, machine learning and data analytics."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.key]
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key as CategoryKey)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                      activeCategory === cat.key
                        ? "bg-accent border-accent text-white shadow-accent"
                        : "border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:text-[var(--text-heading)] hover:border-accent/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mr-2" />
                    {cat.label}
                  </button>
                )
              })}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
              <Filter className="w-4 h-4" /> {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const Icon = CATEGORY_ICONS[project.category]
              return (
                <div
                  key={project.id}
                  className="card group p-6 hover:border-accent/50 cursor-pointer"
                  onClick={() => setOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setOpenProject(project)
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    {project.featured && (
                      <span className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[var(--text-heading)] text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[var(--text-body)] text-sm leading-relaxed mb-4">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 4).map((s) => (
                      <span key={s} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--border-soft)]">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide">
                      View details →
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {openProject && <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />}
    </>
  )
}
