import { Metadata } from 'next';

export const lessonThreeSEO: Metadata = {
  title: 'Beginner Lesson 3: Basic Phrases | Darija App',
  description:
    'Essential everyday phrases for shopping, asking for help, expressing gratitude, and common interactions.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Beginner Lesson 3',
    'Basic phrases',
    'Shopping phrases',
    'Gratitude',
    'Learn Arabic',
    'Dialect',
  ],
  alternates: { canonical: '/lessons/beginner-three' },
  openGraph: {
    title: 'Beginner Lesson 3: Basic Phrases',
    description: 'Essential everyday phrases in Darija.',
    type: 'article',
    url: '/lessons/beginner-three',
    siteName: 'Darija App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beginner Lesson 3: Basic Phrases',
    description: 'Practice basic phrases in Moroccan Darija.',
  },
  robots: { index: true, follow: true },
  category: 'Education',
};