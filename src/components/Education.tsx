export default function Education() {
  const education = [
    {
      period: "2025 - Present",
      degree: "Master's in Computer Applications (Generative AI)",
      institution: "SRM University, (IST)",
      description:
        "I am currently pursuing my Master’s with a specialization in Generative AI, where I am exploring advanced concepts in machine learning, deep learning, and AI-driven system development. My academic journey focuses on understanding neural architectures, LLMs, model training pipelines, and practical applications of generative models. Through various projects and research-oriented coursework, I am developing the ability to design intelligent, scalable, and production-ready AI solutions tailored to industry needs.",
    },
    {
      period: "2022 - 2025",
      degree: "Bachelor's in Computer Applications",
      institution: "IMS Ghaziabad (Ghaziabad, Uttar Pradesh)",
      description: [
        "Developed a strong foundation in computer science, programming, and software development.",
        "Worked with languages and tools such as Java, Python, HTML, CSS, JavaScript, SQL, and Django.",
        "Gained practical experience in full-stack web development and database management.",
        "Explored topics like data structures, algorithms, and operating systems through academic projects.",
        "Participated in workshops and coding challenges that strengthened problem-solving and teamwork skills."
    ],
}
,
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
      <p className="text-gray-600 mb-12">Academic background and qualifications</p>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-900 mt-2"></div>
              {idx < education.length - 1 && <div className="w-0.5 h-24 bg-gray-200 mt-2"></div>}
            </div>
            <div className="pb-8">
              <p className="text-sm font-medium text-gray-500 mb-2">{edu.period}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-600 mb-3">{edu.institution}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
