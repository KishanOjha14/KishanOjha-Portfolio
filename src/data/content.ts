export const NAME = "Kishan Kumar Ojha"

export const HERO = {
  name: NAME,
  title: "Software Engineer | Backend Development | Java & Spring Boot | AI/ML Enthusiast",
  description:
    "Software engineer focused on building reliable backend systems, scalable APIs and intelligent applications. Experienced in Java, Spring Boot, cloud deployment, Python and machine learning, with practical exposure to production software and data-driven projects.",
  actions: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Download Resume", href: "#resume", variant: "outline" },
    { label: "Contact Me", href: "#contact", variant: "outline" },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/KishanOjha14", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kishankumarojha/", icon: "linkedin" },
    { label: "Kaggle", url: "https://www.kaggle.com/kishanojha34", icon: "kaggle" },
  ],
}

export const ABOUT = {
  title: "About Me",
  intro:
    "I am a software engineer with hands-on backend development experience and additional capabilities in AI/ML and data analytics. I am currently pursuing a Master of Computer Applications (MCA) specializing in Generative AI at SRM Institute of Science and Technology (expected May 2027), after completing my Bachelor of Computer Applications (BCA) at IMS Ghaziabad (July 2022 – July 2025).",
  highlights: [
    {
      label: "Backend Development",
      text: "Software Engineering Intern at Scramble Labs Technology (May 2025 – April 2026), where I enhanced a production enterprise CRM platform using Spring Boot, Hibernate and MySQL, designed 15+ RESTful APIs, and deployed containerized services with Docker and Kubernetes on AWS Elastic Beanstalk.",
    },
    {
      label: "Cloud & DevOps",
      text: "Experience with AWS Elastic Beanstalk, Amazon S3, Google Cloud Platform, Docker, Kubernetes and CI/CD workflows, diagnosing issues across API, business logic and database layers.",
    },
    {
      label: "AI/ML & Analytics",
      text: "Built an ML research pipeline with PyTorch and DenseNet121 (NIH ChestX-ray14), a lung cancer detection system with Streamlit and TensorFlow/Keras CNNs, and a telco churn analytics pipeline with SQL Server and Power BI across 7,000+ records.",
    },
    {
      label: "Leadership",
      text: "Co-founder at ArnoLabs, a SaaS startup where we built web platforms, APIs and automation workflows for business clients alongside a 10+ employee team.",
    },
  ],
}

export const EXPERIENCE = [
  {
    company: "Scramble Labs Technology Pvt. Ltd.",
    role: "Software Engineering Intern — Technical Department",
    period: "May 2025 – April 2026",
    location: "Hybrid, Delhi",
    type: "Internship",
    icon: "code-2",
    achievements: [
      "Enhanced a production backend platform for an enterprise CRM, improving reliability for 10+ business clients using Spring Boot, Hibernate and MySQL",
      "Designed and implemented 15+ RESTful APIs and backend modules",
      "Collaborated with Product, QA and frontend engineering teams in an Agile environment",
      "Containerized and deployed backend services using Docker and Kubernetes on AWS Elastic Beanstalk",
      "Used Amazon S3 for application storage; worked across AWS and Google Cloud Platform environments",
      "Diagnosed backend issues across API, business logic and database layers",
      "Participated in code reviews, testing and production deployments",
    ],
  },
  {
    company: "Hindalco Industries Ltd. — Aditya Birla Group",
    role: "Project Intern — IT Department",
    period: "July 2024 – August 2024",
    location: "Renukoot, Uttar Pradesh",
    type: "Internship",
    icon: "building-2",
    achievements: [
      "Developed backend modules for a Java-based Car Rental Management System using Java and JDBC",
      "Worked across five core modules: booking, customer management, rental tracking, billing and reporting",
      "Optimized database operations for 1,000+ records",
      "Improved data consistency through SQL query and JOIN design",
      "Performed debugging and unit testing; documented 3+ system workflows and technical specifications",
    ],
  },
  {
    company: "ArnoLabs",
    role: "Co-founder",
    period: "Ongoing",
    location: "India",
    type: "Leadership",
    icon: "award",
    achievements: [
      "Co-founded a SaaS startup with a 10+ employee team",
      "Developed scalable software solutions and custom client products",
      "Built web platforms, APIs and automation workflows for multiple business clients",
      "ML-resume-verified delivery for 15+ business clients",
    ],
  },
]

export const EDUCATION = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Master of Computer Applications (MCA)",
    specialization: "Specialization: Generative AI",
    period: "Expected May 2027",
    location: "India",
    icon: "graduation-cap",
  },
  {
    institution: "IMS Ghaziabad — University Courses Campus",
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "",
    period: "July 2022 – July 2025",
    location: "Ghaziabad, Uttar Pradesh",
    icon: "book-open",
  },
]

export const LEADERSHIP = {
  title: "Leadership",
  company: "ArnoLabs",
  role: "Co-founder",
  description:
    "Co-founded a SaaS startup and led development of scalable software solutions and custom client products. The team built web platforms, APIs and automation workflows for multiple business clients (ML-resume-verified delivery for 15+ business clients).",
  focus: [
    "Product development for web platforms and APIs",
    "SaaS solutions and custom client products",
    "Automation workflows for business clients",
    "Team collaboration and client-facing software delivery",
  ],
}

export const CONTACT = {
  title: "Get in Touch",
  email: "work.kishanojha@gmail.com",
  phone: "+91 8739047520",
  location: "Noida, India",
}

export const SOCIALS = [
  { label: "Email", url: "mailto:work.kishanojha@gmail.com", icon: "mail" },
  { label: "GitHub", url: "https://github.com/KishanOjha14", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/kishankumarojha/", icon: "linkedin" },
  { label: "Kaggle", url: "https://www.kaggle.com/kishanojha34", icon: "kaggle" },
]

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
]
