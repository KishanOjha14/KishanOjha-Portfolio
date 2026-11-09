export const NAME = 'Kishan Kumar Ojha';

export const IDENTITY = {
  name: NAME,
  headline: 'AI Engineer | Generative AI | Machine Learning',
  tagline:
    'Building intelligent applications through Machine Learning, Generative AI and software engineering.',
  introduction:
    "I'm Kishan Kumar Ojha, an MCA candidate specializing in Generative AI at SRM Institute of Science and Technology. I build intelligent applications and explore machine learning, deep learning, computer vision and data-driven systems, combining AI capabilities with software engineering fundamentals.",
  location: 'Noida, India',
  email: 'work.kishanojha@gmail.com',
  phone: '+91 8739047520',
};

export const HERO = {
  name: NAME,
  headline: IDENTITY.headline,
  tagline: IDENTITY.tagline,
  introduction: IDENTITY.introduction,
  availability: 'Available for collaboration',
  actions: [
    { label: 'Explore Projects', href: '#projects', variant: 'primary' },
    { label: 'Read Technical Notes', href: '#blog', variant: 'outline' },
    { label: 'Download AI/ML Resume', href: '#resume', variant: 'outline' },
    { label: 'Contact Me', href: '#contact', variant: 'outline' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/KishanOjha14', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kishankumarojha/', icon: 'linkedin' },
    { label: 'Kaggle', url: 'https://www.kaggle.com/kishanojha34', icon: 'kaggle' },
  ],
};

export const ABOUT = {
  title: 'About Me',
  subtitle: 'A concise professional introduction.',
  paragraphs: [
    "I'm an MCA candidate specializing in Generative AI at SRM Institute of Science and Technology (expected May 2027), building on a Bachelor of Computer Applications from IMS Ghaziabad (July 2022 – July 2025). My academic journey has given me a structured foundation in computer science, while my projects and internships have taught me how to turn that foundation into working software.",
    "On the AI side, I've worked with PyTorch and Scikit-learn to build machine learning models, trained a CNN for CT-scan image classification, and explored medical imaging research using DenseNet121 and the NIH ChestX-ray14 dataset. I've also analyzed 7,000+ telecom records end-to-end — from SQL Server data preparation to Power BI dashboards — surfacing churn patterns and retention insights.",
    "On the engineering side, I spent time as a Software Engineering Intern at Scramble Labs Technology, enhancing a production enterprise CRM platform with Spring Boot, Hibernate and MySQL, designing 15+ RESTful APIs, and deploying containerized services on AWS. Before that, I built backend modules for a Java-based Car Rental Management System at Hindalco Industries. I'm also a co-founder at ArnoLabs, where we build web platforms, APIs and automation workflows for business clients.",
    'I see myself as an aspiring AI Engineer: comfortable with models and data, but grounded in the software engineering practices — APIs, databases, cloud deployment, testing — that make intelligent applications reliable enough to ship.',
  ],
  leftColumn: [
    { label: 'Education', value: 'MCA · Generative AI', sub: 'SRM IST · Expected May 2027' },
    { label: 'Focus', value: 'AI Engineering', sub: 'ML · Deep Learning · CV' },
    { label: 'Location', value: 'Noida, India', sub: 'Open to collaboration' },
  ],
};

export const CURRENTLY_EXPLORING = {
  title: 'Currently Exploring',
  subtitle:
    "What I'm learning and building right now. I separate hands-on experience from areas I'm actively studying.",
  items: [
    {
      label: 'Generative AI',
      status: 'Learning',
      description:
        'Large language models, prompt engineering and RAG patterns. Exploratory study — not yet applied in a shipped project.',
    },
    {
      label: 'AI Agents & Tool Use',
      status: 'Learning',
      description:
        'Agent orchestration and tool-calling workflows. Research and experimentation stage.',
    },
    {
      label: 'Retrieval-Augmented Generation (RAG)',
      status: 'Learning',
      description:
        'Vector databases, embeddings and retrieval pipelines. Conceptual and prototype stage.',
    },
    {
      label: 'Computer Vision',
      status: 'Hands-on',
      description:
        'Trained CNNs on CT-scan imagery and explored DenseNet121 for chest X-ray classification.',
    },
    {
      label: 'Model Evaluation & Explainability',
      status: 'Hands-on',
      description:
        'AUROC, F1-optimal thresholds, temperature scaling and Grad-CAM in medical imaging research.',
    },
    {
      label: 'Data Analytics',
      status: 'Hands-on',
      description:
        'End-to-end churn analysis with SQL Server, Python and Power BI across 7,000+ records.',
    },
    {
      label: 'Backend Engineering',
      status: 'Hands-on',
      description:
        'Spring Boot, Hibernate, MySQL, Docker, Kubernetes and AWS Elastic Beanstalk in production CRM work.',
    },
  ],
};

export const EXPERIENCE = [
  {
    company: 'Scramble Labs Technology Pvt. Ltd.',
    role: 'Software Engineering Intern — Technical Department',
    period: 'May 2025 – April 2026',
    location: 'Hybrid, Delhi',
    type: 'Internship',
    icon: 'code-2',
    description:
      'Enhanced a production enterprise CRM platform, improving reliability for 10+ business clients using Spring Boot, Hibernate and MySQL.',
    achievements: [
      'Designed and implemented 15+ RESTful APIs and backend modules',
      'Collaborated with Product, QA and frontend engineering teams',
      'Containerized and deployed backend services using Docker and Kubernetes on AWS Elastic Beanstalk',
      'Used Amazon S3 for application storage; worked across AWS and Google Cloud Platform environments',
      'Diagnosed backend issues across API, business logic and database layers',
      'Participated in Agile development, code reviews, testing and production deployments',
    ],
  },
  {
    company: 'Hindalco Industries Ltd. — Aditya Birla Group',
    role: 'Project Intern — IT Department',
    period: 'July 2024 – August 2024',
    location: 'Renukoot, Uttar Pradesh',
    type: 'Internship',
    icon: 'building-2',
    description:
      'Developed backend modules for a Java-based Car Rental Management System using Java and JDBC.',
    achievements: [
      'Worked across five core modules: booking, customer management, rental tracking, billing and reporting',
      'Optimized database operations for 1,000+ records',
      'Improved data consistency through SQL query and JOIN design',
      'Performed debugging and unit testing',
      'Documented 3+ system workflows and technical specifications',
    ],
  },
  {
    company: 'ArnoLabs',
    role: 'Co-founder',
    period: 'Ongoing',
    location: 'India',
    type: 'Leadership',
    icon: 'award',
    description:
      'Co-founded a SaaS startup building web platforms, APIs and automation workflows for business clients.',
    achievements: [
      'Co-founded a SaaS startup with a 10+ employee team',
      'Developed scalable software solutions and custom client products',
      'Built web platforms, APIs and automation workflows for multiple business clients',
      'ML-resume-verified delivery for 15+ business clients',
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'Master of Computer Applications (MCA)',
    specialization: 'Specialization: Generative AI',
    period: 'Expected May 2027',
    location: 'India',
    icon: 'graduation-cap',
  },
  {
    institution: 'IMS Ghaziabad — University Courses Campus',
    degree: 'Bachelor of Computer Applications (BCA)',
    specialization: '',
    period: 'July 2022 – July 2025',
    location: 'Ghaziabad, Uttar Pradesh',
    icon: 'book-open',
  },
];

export const CONTACT = {
  title: "Let's Connect",
  subtitle:
    'Interested in AI engineering, Generative AI, machine learning and building useful intelligent applications. Always open to meaningful technical conversations and collaboration.',
  email: 'work.kishanojha@gmail.com',
  phone: '+91 8739047520',
  location: 'Noida, India',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  locationLabel: 'Location',
};

export const SOCIALS = [
  { label: 'Email', url: 'mailto:work.kishanojha@gmail.com', icon: 'mail' },
  { label: 'GitHub', url: 'https://github.com/KishanOjha14', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kishankumarojha/', icon: 'linkedin' },
  { label: 'Kaggle', url: 'https://www.kaggle.com/kishanojha34', icon: 'kaggle' },
];

export const RESUMES = [
  {
    label: 'AI/ML Resume',
    file: '/assets/resumes/Kishan-Kumar-Ojha-AI-ML-Resume.pdf',
    description: 'Primary resume for AI/ML and Generative AI roles',
    icon: 'file',
  },
  {
    label: 'Software Engineering Resume',
    file: '/assets/resumes/Kishan-Kumar-Ojha-Software-Engineering-Resume.pdf',
    description: 'Backend and software development focused resume',
    icon: 'file',
  },
];

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Writing', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];
