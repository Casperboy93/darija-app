import { Metadata } from 'next';

export const lessonsPageSEO: Metadata = {
  title: 'Moroccan Arabic (Darija) Lessons: Beginner to Advanced | Darija App',
  description:
    'Browse all Darija lessons — beginner basics, intermediate conversations, and advanced mastery. Practice with interactive exercises, authentic content, and cultural context.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Lessons',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Course',
    'Vocabulary',
    'Grammar',
    'Learn Arabic',
    'Dialect',
  ],
  alternates: {
    canonical: '/lessons',
  },
  openGraph: {
    title: 'Darija Lessons: Beginner, Intermediate, Advanced',
    description:
      'Explore Moroccan Arabic (Darija) lessons across all levels with real conversations and cultural insights.',
    url: '/lessons',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darija Lessons: Beginner, Intermediate, Advanced',
    description:
      'Explore Moroccan Arabic (Darija) lessons across all levels with real conversations and cultural insights.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
};