import { Metadata } from 'next';

export const homepageSEO: Metadata = {
  title: 'Darija App – Learn Moroccan Arabic (Darija) with Interactive Lessons',
  description:
    'Learn Moroccan Arabic (Darija) through structured lessons, real conversations, cultural insights, and a built-in translator. Start speaking confidently from day one.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Learn Darija',
    'Interactive lessons',
    'Translator',
    'Vocabulary',
    'Grammar',
    'Culture',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Course',
    'Education',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Darija App – Learn Moroccan Arabic (Darija)',
    description:
      'Structured lessons, real conversations, and cultural insights to master Moroccan Arabic.',
    url: '/',
    siteName: 'Darija App',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darija App – Learn Moroccan Arabic (Darija)',
    description:
      'Structured lessons, real conversations, and cultural insights to master Moroccan Arabic.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'education',
};