import { Metadata } from 'next';

export const lessonTwoSEO: Metadata = {
  title: 'Beginner Lesson 2: Numbers and Counting | Darija App',
  description:
    'Master numbers from 1-100, learn to tell time, and practice counting in everyday situations.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Beginner Lesson 2',
    'Numbers',
    'Counting',
    'Tell time',
    'Learn Arabic',
    'Dialect',
  ],
  alternates: { canonical: '/lessons/beginner-two' },
  openGraph: {
    title: 'Beginner Lesson 2: Numbers and Counting',
    description: 'Numbers, counting, and telling time in Darija.',
    type: 'article',
    url: '/lessons/beginner-two',
    siteName: 'Darija App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beginner Lesson 2: Numbers and Counting',
    description: 'Learn numbers and counting in Moroccan Darija.',
  },
  robots: { index: true, follow: true },
  category: 'Education',
};