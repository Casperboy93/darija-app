import { Metadata } from 'next';

export const lessonSixSEO: Metadata = {
  title: 'Beginner Lesson 6: Shopping and Markets | Darija App',
  description:
    'Navigate Moroccan markets and shops with essential vocabulary for buying and bargaining.',
  keywords: [
    'Darija', 'Moroccan Arabic', 'Beginner Lesson 6', 'Shopping', 'Markets', 'Bargaining', 'Learn Arabic', 'Dialect'
  ],
  alternates: { canonical: '/lessons/beginner-six' },
  openGraph: {
    title: 'Beginner Lesson 6: Shopping and Markets',
    description: 'Shopping vocabulary and bargaining phrases in Darija.',
    type: 'article',
    url: '/lessons/beginner-six',
    siteName: 'Darija App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beginner Lesson 6: Shopping and Markets',
    description: 'Shop and bargain using Moroccan Darija.',
  },
  robots: { index: true, follow: true },
  category: 'Education',
};