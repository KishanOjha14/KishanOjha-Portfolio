export default function Projects() {
  const projects = [
    {
      title: "Chatbot with Machine Learning and Python",
      authors:
        "Kishan Ojha",
      venue: "SRM IST University",
      image: "https://img-c.udemycdn.com/course/750x422/5914768_8635_2.jpg",
    },
    {
      title: "Image Classification with TensorFlow",
      authors: "Kishan Ojha",
      venue: "SRM IST University",
      image: "https://www.kdnuggets.com/wp-content/uploads/chugh_guide_train_image_classification_model_tensorflow_1.jpg",
    },
    {
      title: "Management System",
      authors: "Kishan Ojha",
      venue: "SRM IST University",
      image: "https://raw.githubusercontent.com/RaviSingla23/Hospital-Management-System/master/ScreenShots/login.png",
    },
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
      <p className="text-gray-600 mb-12">Research papers and project work.</p>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="flex gap-6">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-48 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{project.authors}</p>
              <p className="text-sm text-gray-500">{project.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
