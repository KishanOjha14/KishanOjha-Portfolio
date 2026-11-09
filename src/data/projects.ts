export type ProjectCategory =
  | "all"
  | "backend"
  | "fullstack"
  | "machine-learning"
  | "data-analytics"

export interface Project {
  id: string
  name: string
  tagline: string
  category: ProjectCategory
  featured: boolean
  description: string
  problem: string
  solution: string
  implementation: string
  features: string[]
  stack: string[]
  image: string
  github: string
  live?: string
  metrics?: { label: string; value: string }[]
  aiML?: {
    dataset?: string
    architecture?: string
    methodology?: string[]
    metrics?: string[]
    explainability?: string
    limitations?: string[]
  }
  backend?: {
    architecture?: string
    api?: string
    auth?: string
    database?: string
    deployment?: string
  }
  statusNote?: string
}

export const PROJECTS: Project[] = [
  {
    id: "campusflow",
    name: "CampusFlow — Student Management System",
    tagline: "Role-based student, course and enrollment platform",
    category: "fullstack",
    featured: true,
    description:
      "A role-based management platform for educational institutions built with Spring Boot. Provides secure administrative access and full CRUD lifecycle for students, courses and enrollments, with a Thymeleaf-rendered dashboard.",
    problem:
      "Institutions need a centralized, access-controlled system to manage student records, course catalogs and enrollments without relying on scattered spreadsheets or paper processes.",
    solution:
      "Built a Spring Boot web application with Spring Security authentication, Spring Data JPA persistence to MySQL, and a Thymeleaf frontend. Implemented role-based route protection, validation, and model-to-DTO mapping with ModelMapper.",
    implementation:
      "Layered Spring Boot architecture (controllers, services, repositories, models). Spring Security protects administrative routes with login authentication. MySQL stores students, courses and enrollments with automatic schema creation. Thymeleaf templates render the dashboard and management views.",
    features: [
      "Secure login and role-based access control (Spring Security)",
      "Student, course and enrollment CRUD operations",
      "Administrative dashboard with system overview",
      "Thymeleaf server-side rendered UI",
      "Validation and ModelMapper-based DTO mapping",
      "MySQL persistence via Spring Data JPA",
    ],
    stack: ["Java 21", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "MySQL", "Thymeleaf", "ModelMapper", "Maven"],
    image: "/assets/images/campusflow.svg",
    github: "https://github.com/KishanOjha14/Student-Management-System",
    backend: {
      architecture: "Layered Spring Boot architecture: Controllers → Services → Repositories → Models",
      api: "Server-side rendered Thymeleaf views with form-backed controllers",
      auth: "Spring Security form login protecting administrative routes",
      database: "MySQL (student_mgmt_db), Spring Data JPA repositories, automatic schema creation",
      deployment: "Runs locally via Maven wrapper (./mvnw spring-boot:run) on http://localhost:8080",
    },
  },
  {
    id: "corebank",
    name: "CoreBank Engine — Bank Management System",
    tagline: "Object-oriented core banking application",
    category: "backend",
    featured: true,
    description:
      "Console-based banking application written in Core Java demonstrating OOP architecture, domain modeling, custom exception handling and in-memory data management. Companion learning modules cover JDBC, Hibernate, JPA, Spring Boot and Spring Security.",
    problem:
      "Banking operations require reliable domain models with strict validation — preventing negative deposits, overdrafts and invalid transfers while maintaining a clear transaction history.",
    solution:
      "Implemented Account, Customer and Transaction domain entities with repository and service layers, custom exceptions (InsufficientFundsException, AccountNotFoundException, ValidationException), UUID-based IDs and Java Streams API for queries.",
    implementation:
      "Core Java console application with a domain-driven structure: app/Main.java CLI entry point, domain models, in-memory repositories (HashMap/ArrayList), service interfaces and implementations, and input validation. Additional repositories in the project explore JDBC, Hibernate, JPA and Spring Boot.",
    features: [
      "Open Savings/Current accounts with auto-generated account numbers",
      "Deposits, withdrawals and inter-account transfers",
      "Chronological account statements and account search/listing",
      "Custom exception handling for invalid operations",
      "Java 8 Streams API and lambda expressions",
    ],
    stack: ["Java (8+)", "OOP Design", "Java Streams API", "JDBC", "Hibernate", "JPA", "Spring Boot", "Spring Security"],
    image: "/assets/images/corebank.svg",
    github: "https://github.com/KishanOjha14/Bank-Management-System",
    backend: {
      architecture: "Domain-driven layered design: domain models, repositories, services, validation utilities",
      api: "Interactive console menu (no network API)",
      auth: "Not applicable — single-user console application",
      database: "In-memory storage (HashMap, ArrayList); sibling modules explore JDBC/Hibernate/JPA",
      deployment: "Compile with javac and run via java (local only)",
    },
    statusNote: "Academic / learning project — not a production deployment.",
  },
  {
    id: "lungcancer",
    name: "Lung Cancer Detection System",
    tagline: "ML risk assessment + CNN CT-scan classification",
    category: "machine-learning",
    featured: true,
    description:
      "Streamlit web application combining tabular-data machine learning with a TensorFlow/Keras CNN for lung cancer risk assessment. Users input 17 health and lifestyle parameters for risk classification, or upload chest CT-scan images for binary Normal vs Lung Cancer prediction.",
    problem:
      "Early lung cancer risk assessment can support awareness and triage, but non-specialist users need an accessible interface to evaluate risk from health parameters or CT-scan imagery.",
    solution:
      "Built a multi-page Streamlit app with an ML prediction engine (scikit-learn models trained on 17 lifestyle/health features) and a deep-learning image classifier (2D CNN with sigmoid output, binary crossentropy, RMSprop) trained on chest CT-scan images from Kaggle. Prediction history is stored in SQLite.",
    implementation:
      "Tabular pipeline: data cleaning, train/test split, supervised learning with SVM, Decision Tree, KNN and Linear Regression; best model serialized with pickle. Image pipeline: Keras image preprocessing, CNN training over 15 epochs with train/validation generators, confusion matrices and accuracy plots exposed in the UI. Streamlit option-menu navigation with file upload for CT scans.",
    features: [
      "Tabular risk prediction from 17 health and lifestyle parameters",
      "CT-scan image upload and binary CNN classification with confidence score",
      "Model performance comparison (SVM, Decision Tree, KNN, Linear Regression)",
      "Training vs validation accuracy/loss visualization",
      "Prediction history stored in SQLite database",
      "Educational dashboard on lung cancer risk factors",
    ],
    stack: ["Python", "Streamlit", "TensorFlow / Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQLite"],
    image: "/assets/images/lungcancer.svg",
    github: "https://github.com/KishanOjha14/Lung-Cancer-Streamlit",
    aiML: {
      dataset: "Tabular lung cancer dataset (17 features incl. Age, Gender, Smoking, Fatigue, etc.); chest CT-scan images from Kaggle (chest-ctscan-images)",
      architecture: "Scikit-learn supervised classifiers for tabular data; custom 2D CNN (Conv2D + MaxPooling, sigmoid output) for CT-scan binary classification",
      methodology: ["Train/test split with stratification", "Confusion matrices and classification reports", "15-epoch CNN training with train/validation generators", "Pickle-serialized tabular model; Keras .h5 image model"],
      metrics: ["Project-reported test accuracies in the 95–100% range for tabular models (self-reported in repository README; treat as indicative, not clinically validated)"],
      explainability: "Confusion matrices, correlation matrix and training/validation plots exposed in the UI",
      limitations: ["Educational/research prototype — not a clinically validated diagnostic product; no external validation on held-out clinical data"],
    },
    statusNote: "Educational project — not a clinically validated diagnostic product.",
  },
  {
    id: "telco",
    name: "Telco Customer Churn Analysis",
    tagline: "End-to-end churn analytics pipeline & KPI dashboards",
    category: "data-analytics",
    featured: true,
    description:
      "End-to-end analytics project on 7,000+ telecom records: data cleaning, normalization, transformation and validation with Python and SQL Server, loaded into Power BI for interactive dashboards tracking churn, tenure, contract type, internet service and customer lifetime value.",
    problem:
      "Telecom providers lose customers without clear visibility into which segments are at risk or what drives churn, making retention efforts hard to target.",
    solution:
      "Built an analysis-ready pipeline from raw telecom records to validated datasets, with interactive Power BI dashboards and Excel-based reconciliation to surface churn patterns, customer segmentation and retention recommendations.",
    implementation:
      "Cleaned and transformed 7,000+ records using Python and SQL Server; computed KPIs around churn rate, tenure, contract type and internet service; visualized in Power BI; cross-checked data quality in Excel. Translated trends into retention and segmentation recommendations.",
    features: [
      "Data cleaning, normalization, transformation and validation (Python, SQL Server)",
      "7,000+ telecom records analyzed",
      "Interactive Power BI dashboards: churn, tenure, contract type, internet service, CLV",
      "Customer segmentation and retention recommendations",
      "Excel-based dataset reconciliation and data-quality checks",
    ],
    stack: ["SQL Server", "Power BI", "Python", "Scikit-learn", "Excel", "ETL"],
    image: "/assets/images/telco.svg",
    github: "https://github.com/KishanOjha14/Telco-Customer-Churn-Analysis-.",
    statusNote: "GitHub repository is currently empty; project details sourced from the AI/ML resume.",
  },
  {
    id: "selfwise",
    name: "SelfWise Library Management System",
    tagline: "Library catalog, membership and issue tracking",
    category: "backend",
    featured: false,
    description:
      "Spring Boot library management application with Thymeleaf UI for managing books, students and issue records, backed by an H2 database during development.",
    problem:
      "Small libraries need a simple digital system to catalog books, track members and manage book issues and returns.",
    solution:
      "Spring Boot application with REST-style Thymeleaf controllers, JPA entities (Book, Student, Issue), services and repositories, with form validation.",
    implementation:
      "Maven-based Spring Boot 3.2 app (Java 17): controllers for books/students/issues, JPA repositories backed by H2, Thymeleaf templates for list/add/edit views, and static CSS/JS assets.",
    features: ["Book catalog management", "Student membership records", "Issue/return tracking", "Thymeleaf UI", "H2 database", "JUnit tests"],
    stack: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Thymeleaf", "H2", "Maven"],
    image: "/assets/images/selfwise.svg",
    github: "https://github.com/KishanOjha14/library_management_system",
    backend: {
      architecture: "Controller → Service → Repository layered Spring Boot app",
      api: "Thymeleaf server-rendered views",
      auth: "Not implemented",
      database: "H2 in-memory database",
      deployment: "Local via Maven",
    },
  },
  {
    id: "sentiment",
    name: "Sentiment Analysis Dashboard",
    tagline: "NLP sentiment classification on product reviews",
    category: "machine-learning",
    featured: false,
    description:
      "Streamlit dashboard for sentiment analysis on Amazon reviews. Compares classical ML models (BernoulliNB, Logistic Regression, LinearSVC, Gradient Boosting) with a Hugging Face DistilBERT pipeline, including lemmatization, stop-word removal, oversampling and ROC-AUC evaluation.",
    problem:
      "Understanding customer sentiment at scale requires text preprocessing, model comparison and transparent evaluation metrics.",
    solution:
      "Python pipeline that preprocesses review text (NLTK tokenization, lemmatization, stop-word removal), addresses class imbalance with random oversampling, vectorizes with CountVectorizer, and benchmarks multiple classifiers plus a DistilBERT transformer in a Streamlit UI with confusion matrices.",
    implementation:
      "NLTK-based text preprocessing, RandomOverSampler for class balance, CountVectorizer feature extraction, benchmarking of BernoulliNB/Logistic Regression/LinearSVC/Gradient Boosting and a Hugging Face DistilBERT pipeline, with Streamlit UI rendering classification reports, ROC-AUC and confusion matrices.",
    features: [
      "Text preprocessing with NLTK (tokenization, lemmatization, stop-word removal)",
      "Class imbalance handling via RandomOverSampler",
      "BernoulliNB, Logistic Regression, LinearSVC, Gradient Boosting",
      "DistilBERT transformer pipeline via Hugging Face",
      "Classification reports and ROC-AUC evaluation",
      "Streamlit UI with confusion-matrix visualization",
    ],
    stack: ["Python", "Streamlit", "Scikit-learn", "Hugging Face Transformers", "NLTK", "Pandas", "Plotly"],
    image: "/assets/images/sentiment.svg",
    github: "https://github.com/KishanOjha14/Sentiment-Analysis-Dashboard",
    aiML: {
      dataset: "Amazon reviews CSV (verified_reviews, feedback)",
      architecture: "CountVectorizer with custom LemmaTokenizer; classical classifiers and DistilBERT pipeline",
      methodology: ["Train/test split (stratified, 25% test)", "Random oversampling for class balance", "Classification report + ROC-AUC evaluation"],
      limitations: ["Notebook-based exploration; no production deployment"],
    },
  },
]

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "backend", label: "Backend Development" },
  { key: "fullstack", label: "Full Stack Development" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "data-analytics", label: "Data Analytics" },
] as const
