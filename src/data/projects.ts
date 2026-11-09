export type ProjectCategory =
  | 'all'
  | 'ai-generative'
  | 'machine-learning'
  | 'deep-learning-vision'
  | 'data-analytics'
  | 'software-engineering';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  description: string;
  problem: string;
  solution: string;
  implementation: string;
  features: string[];
  stack: string[];
  image: string;
  github?: string;
  live?: string;
  statusNote?: string;
  aiML?: {
    dataset?: string;
    architecture?: string;
    methodology?: string[];
    metrics?: string[];
    explainability?: string;
    limitations?: string[];
  };
  backend?: {
    architecture?: string;
    api?: string;
    auth?: string;
    database?: string;
    deployment?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'lung-cancer',
    name: 'Lung Cancer Detection System',
    tagline: 'ML risk assessment + CNN CT-scan classification',
    category: 'deep-learning-vision',
    featured: true,
    description:
      'A Streamlit web application that predicts lung cancer risk from patient health parameters and classifies chest CT-scan images using a trained Convolutional Neural Network.',
    problem:
      'Early lung cancer risk assessment can support awareness and triage, but non-specialist users need an accessible interface to evaluate risk from health data or CT-scan imagery.',
    solution:
      'Built a multi-page Streamlit app with a tabular ML prediction engine (17 health and lifestyle features) and a deep-learning image classifier for binary Normal vs Lung Cancer classification on CT scans. Prediction history is stored in SQLite.',
    implementation:
      'Tabular pipeline: cleaned data, train/test split, benchmarked supervised learning models (SVM, Decision Tree, KNN, Linear Regression) with Scikit-learn; best model serialized with pickle. Image pipeline: Keras image preprocessing, custom 2D CNN (Conv2D + MaxPooling layers, sigmoid output, binary crossentropy, RMSprop) trained over 15 epochs with train/validation generators. Streamlit option-menu navigation with file upload for CT scans.',
    features: [
      'Tabular risk prediction from 17 health and lifestyle parameters',
      'CT-scan image upload and binary CNN classification with confidence score',
      'Model performance comparison across supervised learning algorithms',
      'Training vs validation accuracy and loss visualization',
      'Prediction history stored in a SQLite database',
      'Educational dashboard on lung cancer risk factors',
    ],
    stack: [
      'Python',
      'Streamlit',
      'TensorFlow / Keras',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SQLite',
    ],
    image: '/assets/images/lungcancer.svg',
    github: 'https://github.com/KishanOjha14/Lung-Cancer-Streamlit',
    aiML: {
      dataset:
        'Tabular lung cancer dataset (17 features incl. Age, Gender, Smoking, Fatigue, etc.); chest CT-scan images from Kaggle (chest-ctscan-images)',
      architecture:
        'Scikit-learn supervised classifiers for tabular data; custom 2D CNN (Conv2D + MaxPooling, sigmoid output) for CT-scan binary classification',
      methodology: [
        'Train/test split on tabular data',
        'Confusion matrices and classification reports',
        '15-epoch CNN training with train/validation generators',
        'Pickle-serialized tabular model; Keras .h5 image model',
      ],
      metrics: [
        'Project README reports test accuracies in the 95–100% range for tabular models (self-reported; treat as indicative, not clinically validated)',
      ],
      explainability:
        'Confusion matrices, correlation matrix and training/validation plots exposed in the UI',
      limitations: [
        'Educational project — not a clinically validated diagnostic product',
        'No external validation on held-out clinical data',
        'Tabular model accuracy self-reported in repository README',
      ],
    },
    statusNote: 'Educational project — not a clinically validated diagnostic product.',
  },
  {
    id: 'telco-churn',
    name: 'Telco Customer Churn Analysis',
    tagline: 'End-to-end churn analytics pipeline & KPI dashboards',
    category: 'data-analytics',
    featured: true,
    description:
      'An end-to-end analytics project on 7,000+ telecom records: data cleaning, normalization, transformation and validation with Python and SQL Server, loaded into Power BI for interactive dashboards tracking churn, tenure, contract type, internet service and customer lifetime value.',
    problem:
      'Telecom providers lose customers without clear visibility into which segments are at risk or what drives churn, making retention efforts hard to target.',
    solution:
      'Built an analysis-ready pipeline from raw telecom records to validated datasets, with interactive Power BI dashboards and Excel-based reconciliation to surface churn patterns, customer segmentation and retention recommendations.',
    implementation:
      'Cleaned and transformed 7,000+ records using Python and SQL Server; computed KPIs around churn rate, tenure, contract type and internet service; visualized in Power BI; cross-checked data quality in Excel. Translated trends into retention and segmentation recommendations.',
    features: [
      'Data cleaning, normalization, transformation and validation (Python, SQL Server)',
      '7,000+ telecom records analyzed',
      'Interactive Power BI dashboards: churn, tenure, contract type, internet service, CLV',
      'Customer segmentation and retention recommendations',
      'Excel-based dataset reconciliation and data-quality checks',
    ],
    stack: ['SQL Server', 'Power BI', 'Python', 'Scikit-learn', 'Excel', 'ETL'],
    image: '/assets/images/telco.svg',
    github: 'https://github.com/KishanOjha14/Telco-Customer-Churn-Analysis-.',
    statusNote:
      'GitHub repository is currently empty; project details sourced from the AI/ML resume.',
  },
  {
    id: 'xray-calibration',
    name: 'X-ray Calibration & Threshold Optimization',
    tagline: 'Medical imaging research with DenseNet121',
    category: 'machine-learning',
    featured: true,
    description:
      'A reproducible medical imaging research pipeline using a frozen DenseNet121 multi-label classifier to evaluate cardiomegaly and pleural effusion on the NIH ChestX-ray14 dataset.',
    problem:
      'Medical imaging models benefit from careful threshold calibration and explainability, but default decision thresholds often misrepresent real-world performance for imbalanced conditions.',
    solution:
      'Evaluated a frozen DenseNet121 classifier with patient-level 70/15/15 train-validation-test splits, implemented validation-fitted temperature scaling, compared five class-specific decision-threshold policies, and added Grad-CAM explainability with bootstrap confidence intervals.',
    implementation:
      'Frozen DenseNet121 multi-label classifier on NIH ChestX-ray14; patient-level splits to avoid leakage; temperature scaling fitted on validation data; threshold policies compared per class; F1-optimal thresholds applied; bootstrap confidence intervals and confidence-based error analysis integrated; Grad-CAM used for explainability.',
    features: [
      'Reproducible medical imaging research pipeline',
      'NIH ChestX-ray14 dataset, patient-level 70/15/15 splits',
      'Frozen DenseNet121 multi-label classifier',
      'Validation-fitted temperature scaling',
      'Five class-specific decision-threshold policies compared',
      'Test AUROC: 0.897 (cardiomegaly), 0.859 (pleural effusion)',
      'Test F1: 0.354 (cardiomegaly), 0.487 (pleural effusion) at F1-optimal thresholds',
      'Bootstrap confidence intervals and Grad-CAM explainability',
    ],
    stack: ['Python', 'PyTorch', 'DenseNet121', 'SciPy', 'Grad-CAM'],
    image: '/assets/images/xray.svg',
    github: undefined,
    aiML: {
      dataset: 'NIH ChestX-ray14 dataset',
      architecture: 'Frozen DenseNet121 multi-label classifier',
      methodology: [
        'Patient-level 70/15/15 train-validation-test split',
        'Validation-fitted temperature scaling',
        'Five class-specific decision-threshold policies',
        'Bootstrap confidence intervals and confidence-based error analysis',
        'Grad-CAM explainability',
      ],
      metrics: [
        'Test AUROC: 0.897 for cardiomegaly',
        'Test AUROC: 0.859 for pleural effusion',
        'Test F1: 0.354 for cardiomegaly at F1-optimal threshold',
        'Test F1: 0.487 for pleural effusion at F1-optimal threshold',
      ],
      explainability: 'Grad-CAM heatmaps for model explainability',
      limitations: [
        'Presented as ML research and model evaluation — not a clinically validated diagnostic product',
        'Separate from the Lung Cancer Streamlit repository (different dataset, architecture and metrics)',
        'No public GitHub repository; details sourced from the AI/ML resume',
      ],
    },
    statusNote:
      'ML research and model-evaluation project — not a clinically validated diagnostic product. Separate from the Lung Cancer Streamlit project.',
  },
  {
    id: 'campusflow',
    name: 'CampusFlow — Student Management System',
    tagline: 'Role-based student, course and enrollment platform',
    category: 'software-engineering',
    featured: true,
    description:
      'A role-based management platform for educational institutions built with Spring Boot. Provides secure administrative access and full CRUD lifecycle for students, courses and enrollments, with a Thymeleaf-rendered dashboard.',
    problem:
      'Institutions need a centralized, access-controlled system to manage student records, course catalogs and enrollments without relying on scattered spreadsheets or paper processes.',
    solution:
      'Built a Spring Boot web application with Spring Security authentication, Spring Data JPA persistence to MySQL, and a Thymeleaf frontend. Implemented role-based route protection, validation, and model-to-DTO mapping with ModelMapper.',
    implementation:
      'Layered Spring Boot architecture (controllers, services, repositories, models). Spring Security protects administrative routes with login authentication. MySQL stores students, courses and enrollments with automatic schema creation. Thymeleaf templates render the dashboard and management views.',
    features: [
      'Secure login and role-based access control (Spring Security)',
      'Student, course and enrollment CRUD operations',
      'Administrative dashboard with system overview',
      'Thymeleaf server-side rendered UI',
      'Validation and ModelMapper-based DTO mapping',
      'MySQL persistence via Spring Data JPA',
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Spring Security',
      'MySQL',
      'Thymeleaf',
      'ModelMapper',
      'Maven',
    ],
    image: '/assets/images/campusflow.svg',
    github: 'https://github.com/KishanOjha14/Student-Management-System',
    backend: {
      architecture:
        'Layered Spring Boot architecture: Controllers → Services → Repositories → Models',
      api: 'Server-side rendered Thymeleaf views with form-backed controllers',
      auth: 'Spring Security form login protecting administrative routes',
      database: 'MySQL (student_mgmt_db), Spring Data JPA repositories, automatic schema creation',
      deployment:
        'Runs locally via Maven wrapper (./mvnw spring-boot:run) on http://localhost:8080',
    },
  },
  {
    id: 'corebank',
    name: 'CoreBank Engine — Bank Management System',
    tagline: 'Object-oriented core banking application',
    category: 'software-engineering',
    featured: false,
    description:
      'A console-based banking application written in Core Java demonstrating OOP architecture, domain modeling, custom exception handling and in-memory data management. Companion learning modules cover JDBC, Hibernate, JPA, Spring Boot and Spring Security.',
    problem:
      'Banking operations require reliable domain models with strict validation — preventing negative deposits, overdrafts and invalid transfers while maintaining a clear transaction history.',
    solution:
      'Implemented Account, Customer and Transaction domain entities with repository and service layers, custom exceptions (InsufficientFundsException, AccountNotFoundException, ValidationException), UUID-based IDs and Java Streams API for queries.',
    implementation:
      'Core Java console application with a domain-driven structure: app/Main.java CLI entry point, domain models, in-memory repositories (HashMap/ArrayList), service interfaces and implementations, and input validation. Additional repositories in the project explore JDBC, Hibernate, JPA and Spring Boot.',
    features: [
      'Open Savings/Current accounts with auto-generated account numbers',
      'Deposits, withdrawals and inter-account transfers',
      'Chronological account statements and account search/listing',
      'Custom exception handling for invalid operations',
      'Java 8 Streams API and lambda expressions',
    ],
    stack: [
      'Java (8+)',
      'OOP Design',
      'Java Streams API',
      'JDBC',
      'Hibernate',
      'JPA',
      'Spring Boot',
      'Spring Security',
    ],
    image: '/assets/images/corebank.svg',
    github: 'https://github.com/KishanOjha14/Bank-Management-System',
    backend: {
      architecture:
        'Domain-driven layered design: domain models, repositories, services, validation utilities',
      api: 'Interactive console menu (no network API)',
      auth: 'Not applicable — single-user console application',
      database:
        'In-memory storage (HashMap, ArrayList); sibling modules explore JDBC/Hibernate/JPA',
      deployment: 'Compile with javac and run via java (local only)',
    },
    statusNote: 'Academic / learning project — not a production deployment.',
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analysis Dashboard',
    tagline: 'NLP sentiment classification on product reviews',
    category: 'machine-learning',
    featured: false,
    description:
      'A Streamlit dashboard for sentiment analysis on Amazon reviews. Compares classical ML models with a Hugging Face DistilBERT pipeline, including lemmatization, stop-word removal, oversampling and ROC-AUC evaluation.',
    problem:
      'Understanding customer sentiment at scale requires text preprocessing, model comparison and transparent evaluation metrics.',
    solution:
      'Python pipeline that preprocesses review text (NLTK tokenization, lemmatization, stop-word removal), addresses class imbalance with random oversampling, vectorizes with CountVectorizer, and benchmarks multiple classifiers plus a DistilBERT transformer in a Streamlit UI with confusion matrices.',
    implementation:
      'NLTK-based text preprocessing, RandomOverSampler for class balance, CountVectorizer feature extraction, benchmarking of BernoulliNB/Logistic Regression/LinearSVC/Gradient Boosting and a Hugging Face DistilBERT pipeline, with Streamlit UI rendering classification reports, ROC-AUC and confusion matrices.',
    features: [
      'Text preprocessing with NLTK (tokenization, lemmatization, stop-word removal)',
      'Class imbalance handling via RandomOverSampler',
      'BernoulliNB, Logistic Regression, LinearSVC, Gradient Boosting',
      'DistilBERT transformer pipeline via Hugging Face',
      'Classification reports and ROC-AUC evaluation',
      'Streamlit UI with confusion-matrix visualization',
    ],
    stack: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Hugging Face Transformers',
      'NLTK',
      'Pandas',
      'Plotly',
    ],
    image: '/assets/images/sentiment.svg',
    github: 'https://github.com/KishanOjha14/Sentiment-Analysis-Dashboard',
    aiML: {
      dataset: 'Amazon reviews CSV (verified_reviews, feedback)',
      architecture:
        'CountVectorizer with custom LemmaTokenizer; classical classifiers and DistilBERT pipeline',
      methodology: [
        'Train/test split (stratified, 25% test)',
        'Random oversampling for class balance',
        'Classification report + ROC-AUC evaluation',
      ],
      limitations: ['Notebook-based exploration; no production deployment'],
    },
  },
  {
    id: 'selfwise',
    name: 'SelfWise Library Management System',
    tagline: 'Library catalog, membership and issue tracking',
    category: 'software-engineering',
    featured: false,
    description:
      'A Spring Boot library management application with Thymeleaf UI for managing books, students and issue records, backed by an H2 database during development.',
    problem:
      'Small libraries need a simple digital system to catalog books, track members and manage book issues and returns.',
    solution:
      'Spring Boot application with Thymeleaf controllers, JPA entities (Book, Student, Issue), services and repositories, with form validation.',
    implementation:
      'Maven-based Spring Boot 3.2 app (Java 17): controllers for books/students/issues, JPA repositories backed by H2, Thymeleaf templates for list/add/edit views, and static CSS/JS assets.',
    features: [
      'Book catalog management',
      'Student membership records',
      'Issue/return tracking',
      'Thymeleaf UI',
      'H2 database',
      'JUnit tests',
    ],
    stack: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Thymeleaf', 'H2', 'Maven'],
    image: '/assets/images/selfwise.svg',
    github: 'https://github.com/KishanOjha14/library_management_system',
    backend: {
      architecture: 'Controller → Service → Repository layered Spring Boot app',
      api: 'Thymeleaf server-rendered views',
      auth: 'Not implemented',
      database: 'H2 in-memory database',
      deployment: 'Local via Maven',
    },
  },
];

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai-generative', label: 'Generative AI / AI' },
  { key: 'machine-learning', label: 'Machine Learning' },
  { key: 'deep-learning-vision', label: 'Deep Learning / Computer Vision' },
  { key: 'data-analytics', label: 'Data Analytics' },
  { key: 'software-engineering', label: 'Software Engineering' },
] as const;
