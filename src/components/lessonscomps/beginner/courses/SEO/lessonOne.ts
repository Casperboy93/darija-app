import { Metadata } from 'next';

export const lessonOneSEO: Metadata = {
  title: 'Beginner Lesson 1: Greetings and Introductions | Darija App',
  description:
    'Learn Moroccan Darija greetings and introductions in Beginner Lesson 1. Practice basic phrases, common greetings, and introductions to start conversations.',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Beginner Lesson 1',
    'Greetings',
    'Introductions',
    'Morocco',
    'Learn Arabic',
    'Dialect',
  ],
  alternates: {
    canonical: '/lessons/beginner-one',
  },
  openGraph: {
    title: 'Beginner Lesson 1: Greetings and Introductions',
    description: 'Start your Darija journey with greetings and introductions.',
    type: 'article',
    url: '/lessons/beginner-one',
    siteName: 'Darija App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beginner Lesson 1: Greetings and Introductions',
    description: 'Learn greetings and introductions in Moroccan Darija.',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Education',
};