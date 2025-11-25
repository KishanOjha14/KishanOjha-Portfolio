import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Project Intern",
      company: "Hindalco Industries Ltd.",
      details: [
    <div>
  <p>
    During my internship at Hindalco Industries Ltd, I had the opportunity to work on a real-world Java-based project, applying technical knowledge to practical scenarios and deepening my understanding of backend integration and database management.
  </p>
  <h2>Key Contributions & Learnings:</h2>
  <ul>
    <li>1. Built Java-based full-stack applications connected to MySQL databases.</li>
    <li>2. Handled data modeling, CRUD operations, and database optimization for performance.</li>
    <li>3. Collaborated with mentors and engineers to debug, document, and improve code quality following best practices.</li>
  </ul>
  <span>On-site • Internship</span>
</div>

  ],
      period: "Jul, 2024 - Aug, 2024",
      type: "On-site • Internship ",
      icon: "🏢",
    },
    // {
    //   title: "Content Writing",                                                                                      
    //   company: "Team Everest NGO",                                                                                                                                                 
    //   details: "Team Everest NGO •",
    //   period: "Nov, 2023",
    //   type: "Internship • online •",
    //   icon: "✍️",
    // },
    // {
    //   title: "Content Writing",
    //   company: "Earth 5R",
    //   details: "Earth 5R •",
    //   period: "Nov, 2023",
    //   type: "Internship • remote •",
    //   icon: "🌍",
    // },
    // {
    //   title: "Internshala Student Partner",
    //   company: "Internshala",
    //   details: "Internshala • Campus Ambassador",
    //   period: "Jun, 2024 - Aug, 2024",
    //   type: "Part-time • • Remote",
    //   icon: "📱",
    // },
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiences</h2>
      <p className="text-gray-600 mb-12">Current and previous collaborations with leading companies.</p>

      <div className="space-y-8 mb-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="text-3xl flex-shrink-0">{exp.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                </div>
                <p className="text-sm font-medium text-gray-600 text-right">{exp.period}</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">{exp.details}</p>
              <p className="text-xs text-gray-500">{exp.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Resume Button */}
      <div className="flex justify-center">
        <a href="https://drive.google.com/file/d/1C6794-uI4Jv4OUFcK7QesrUV7Xq7abg4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors">
            View Resume
          </button>
        </a>
      </div>
    </section>
  )
}
