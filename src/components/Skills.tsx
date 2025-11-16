"use client"

import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Programming Languages")

  const skillCategories = {
    "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    "Frontend Development": ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    "Backend Development": ["Node.js", "Express", "REST APIs", "GraphQL" , "Django"],
    "Database Management": ["PostgreSQL", "MongoDB", "Firebase"],
    "Tools and Technologies": ["Figma", "Adobe XD", "Prototyping" , "Notion"],
    "DevOps & Deployment": ["Docker", "Git", "GitHub", "Vercel"],
    "AI/ML & Data Science": ["TensorFlow", "OpenCV", "Pandas", "NumPy"],

  }

  const categories = Object.keys(skillCategories)

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools and Stack</h2>
      <p className="text-gray-600 mb-8">Frequently used technologies and platforms.</p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600">{skill.charAt(0)}</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{skill}</p>
              <p className="text-xs text-gray-500">{activeCategory}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
