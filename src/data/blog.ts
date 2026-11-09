export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date?: string;
  readTime?: string;
  published: boolean;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'understanding-rag',
    title: 'Understanding Retrieval-Augmented Generation',
    description:
      'How RAG combines retrieval and generation to ground LLM responses in external knowledge — and where it falls short.',
    category: 'Generative AI',
    tags: ['RAG', 'LLM', 'Vector Databases', 'Embeddings'],
    published: false,
  },
  {
    slug: 'cnn-architecture-explained',
    title: 'CNN Architecture Explained',
    description:
      'A walkthrough of convolutional neural networks, from filters and pooling to the CT-scan classification pipeline I built.',
    category: 'Deep Learning',
    tags: ['CNN', 'Computer Vision', 'TensorFlow'],
    published: false,
  },
  {
    slug: 'model-evaluation-medical-imaging',
    title: 'Model Evaluation in Medical Imaging',
    description:
      'Why AUROC and F1-optimal thresholds matter more than accuracy when evaluating cardiomegaly and pleural effusion classifiers.',
    category: 'Machine Learning',
    tags: ['PyTorch', 'DenseNet121', 'Grad-CAM', 'Evaluation'],
    published: false,
  },
  {
    slug: 'customer-churn-analytics',
    title: 'Understanding Customer Churn with Data Analytics',
    description:
      'Turning 7,000+ telecom records into churn KPIs, customer segments and retention recommendations with SQL Server and Power BI.',
    category: 'Data Analytics',
    tags: ['Power BI', 'SQL', 'Churn Analysis', 'Segmentation'],
    published: false,
  },
];

export const BLOG_CATEGORIES = [
  'All',
  'Generative AI',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'LLM Engineering',
  'AI Tools and Experiments',
  'Technical Tutorials',
  'Data Analytics',
] as const;

export const BLOG_INTRO = {
  title: 'Technical Writing & Research Notes',
  subtitle:
    'A place to work through ideas in AI, machine learning and software engineering. These notes are written as I learn — some are polished, others are works in progress. Nothing here is presented as peer-reviewed research.',
  emptyState:
    "No published articles yet. I'm drafting notes on Generative AI, computer vision and data analytics — check back soon, or explore the projects section to see what I've built.",
};
