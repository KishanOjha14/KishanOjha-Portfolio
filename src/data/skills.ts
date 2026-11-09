export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["Java (8/11/17+)", "SQL", "Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      "Spring Boot",
      "Spring Framework",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "RESTful APIs",
      "Microservices",
      "JWT",
      "GraphQL",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Thymeleaf", "Vite"],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Vector Databases", "SQL Optimization", "Data Modeling"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["AWS Elastic Beanstalk", "Amazon S3", "Google Cloud Platform", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "ml",
    title: "Machine Learning & AI",
    skills: ["Python", "PyTorch", "Scikit-learn", "DenseNet121", "TensorFlow / Keras", "Computer Vision", "Grad-CAM", "Model Evaluation"],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    skills: ["Power BI", "Excel", "Tableau", "Pandas", "NumPy", "EDA", "Statistical Analysis", "Data Visualization"],
  },
  {
    id: "tools",
    title: "Development Tools",
    skills: ["Maven", "Gradle", "JUnit 5", "Mockito", "Postman", "Git", "GitHub"],
  },
  {
    id: "cs",
    title: "Core Computer Science",
    skills: ["OOP", "Data Structures", "System Design", "DBMS", "Computer Networks", "Operating Systems"],
  },
]
