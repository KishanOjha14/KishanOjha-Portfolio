'use client';

import { useState, useMemo } from 'react';
import { Filter, Layers } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '@/data/projects';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import ProjectDetail from './ProjectDetail';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  all: Layers,
  'ai-generative': Filter,
  'machine-learning': Filter,
  'deep-learning-vision': Filter,
  'data-analytics': Filter,
  'software-engineering': Filter,
};

export default function Projects() {
  type CategoryKey = (typeof PROJECT_CATEGORIES)[number]['key'];
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => activeCategory === 'all' || p.category === activeCategory).sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      ),
    [activeCategory]
  );

  return (
    <>
      <section
        id="projects"
        className="section border-t border-[var(--border)]"
        aria-labelledby="projects-title"
      >
        <div className="container-page">
          <ScrollReveal delay={1}>
            <SectionHeader
              title="Projects / Things I've Built"
              subtitle="Selected work spanning AI/ML, data analytics and software engineering."
            />
          </ScrollReveal>
          <div className="flex flex-wrap justify-between items-center gap-3 mb-10">
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat.key];
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key as CategoryKey)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all border ${
                      activeCategory === cat.key
                        ? 'bg-accent border-accent text-white'
                        : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-body)] hover:text-[var(--text)] hover:border-accent/40'
                    }`}
                  >
                    <Icon className="w-3 h-3 mr-2" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
              <Filter className="w-3 h-3" /> {filtered.length} project
              {filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const Icon = CATEGORY_ICONS[project.category];
              return (
                <div
                  key={project.id}
                  className="card p-7 hover:border-accent/50 cursor-pointer transition-colors group relative overflow-hidden"
                  onClick={() => setOpenProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setOpenProject(project);
                  }}
                >
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors pointer-events-none" />
                  <div className="relative z-10 flex justify-between items-start mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5 text-accent group-hover:text-accent-hover" />
                    </div>
                    {project.featured && (
                      <span className="badge badge-accent text-[0.65rem] uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[var(--text)] text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[var(--text-body)] text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-7">
                    {project.stack.slice(0, 5).map((s) => (
                      <span key={s} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="pt-5 border-t border-[var(--border-soft)]">
                    <p className="text-[0.7rem] font-semibold text-accent uppercase tracking-wide">
                      View details &rarr;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {openProject && <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />}
    </>
  );
}
