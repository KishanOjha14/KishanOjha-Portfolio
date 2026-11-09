export interface SkillGroup {
  id: string
  title: string
  note?: string
  skills: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["Python", "SQL", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    note: "Hands-on with model training, evaluation and explainability.",
    skills: ["PyTorch", "Scikit-learn", "DenseNet121", "CNN", "Model Evaluation", "Computer Vision"],
  },
  {
    id: "analytics",
    title: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "Power BI", "Excel", "Tableau", "EDA", "Statistical Analysis"],
  },
  {
    id: "genai",
    title: "Generative AI & Emerging",
    note: "Exploratory study — not yet applied in a shipped project.",
    skills: ["Large Language Models", "Prompt Engineering", "RAG", "Embeddings", "Vector Databases", "AI Agents"],
  },
  {
    id: "backend",
    title: "Backend & Development",
    skills: ["Spring Boot", "Spring Framework", "REST APIs", "Hibernate", "JDBC", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Docker", "AWS", "Google Cloud Platform"],
  },
]
