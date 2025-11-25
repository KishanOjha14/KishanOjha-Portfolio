export default function Education() {
  const education = [
    {
      period: "2025 - Present",
      degree: "Master's in Computer Applications (Generative AI)",
      institution: "SRM University, (IST)",
      description:
        [
          <div>
            <p>
              I am currently pursuing my Master’s with a specialization in Generative AI, where I am exploring advanced concepts in machine learning, deep learning, and AI-driven system development. My academic journey focuses on understanding neural architectures, LLMs, model training pipelines, and practical applications of generative models. Through various projects and research-oriented coursework, I am developing the ability to design intelligent, scalable, and production-ready AI solutions tailored to industry needs.
            </p>
            <h2>Key Highlights:</h2>
            <ul>
              <li>Specializing in Generative AI with a focus on advanced ML, DL, and LLM-based systems.</li>
              <li>Studying neural architectures, model training, and AI deployment workflows.</li>
              <li>Working on projects involving generative models and practical AI applications.</li>
              <li>Developing strong research, analytical, and model-building skills for real-world use cases.</li>
            </ul>
          </div>

        ],
    },
    {
      period: "2022 - 2025",
      degree: "Bachelor's in Computer Applications",
      institution: "IMS Ghaziabad (Ghaziabad, Uttar Pradesh)",
      description: [
        <div>
          <p>
            During my Bachelor's, I built a strong foundation in core computer science, software engineering, and application development. I gained hands-on experience with Java, Python, HTML, CSS, JavaScript, SQL, and Django while working on multiple academic and personal projects. My studies included essential topics such as data structures, algorithms, operating systems, and full-stack web development, enabling me to solve real-world problems with structured thinking and efficient coding. I also actively participated in workshops, seminars, and coding competitions, which strengthened my analytical abilities, teamwork, and technical confidence.
          </p>
          <h3>Key Highlights:</h3>
          <ul>
            <li>Built strong fundamentals in programming, computer science, and software development.</li>
            <li>Worked extensively with Java, Python, HTML, CSS, JavaScript, SQL, and Django.</li>
            <li>Completed projects involving data structures, algorithms, OS, databases, and full-stack development.</li>
            <li>Participated in workshops, hackathons, and coding challenges to enhance problem-solving skills.</li>
            <li>Gained practical exposure to building scalable applications and managing end-to-end development workflows.</li>
          </ul>
        </div>

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
