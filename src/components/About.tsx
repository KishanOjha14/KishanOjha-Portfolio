export default function About() {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <img src="https://github.com/KishanOjha14/KishanOjha-Portfolio/blob/main/public/WhatsApp%20Image%202025-10-23%20at%2011.28.07%20AM.jpeg?raw=true" alt="About" className="w-full rounded-lg object-cover mb-6" />
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello, I’m Kishan Kumar Ojha. I’m currently pursuing a Master’s in Computer Applications at SRM University, specializing in Generative AI, and I expect to graduate in May 2027. I earned my Bachelor’s degree in Computer Applications from IMS Ghaziabad (2022–2025). I have strong expertise in machine learning and AI, particularly in deep learning (CNN, RNN, LSTM), computer vision, and natural language processing, and I’m proficient with tools like TensorFlow and PyTorch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I enjoy applying these skills in impactful projects, such as a CNN-based lung disease detection system and an optimized image segmentation model for visual data analysis. During my summer internship at Hindalco Industries Ltd., I developed a full-stack car rental system to automate internal IT workflows and improve efficiency. Outside of academics, I’m an active contributor and lifelong learner: I participated in Hacktoberfest in 2024 and 2025, and I’m completing Google’s AI Agent Intensive program this November. I also completed Tata Group’s Cybersecurity Analyst job simulation on Forage, which gave me practical experience in network security analysis.
          </p>
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Java Developer",
                "Machine Learning",
                "Software Development",
                "Deep Learning",
              ].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
