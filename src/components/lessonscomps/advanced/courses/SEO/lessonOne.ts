import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const advancedOneSEO: Metadata = makeLessonSEO({
  titleFull: 'Advanced Lesson 1: Idiomatic Expressions | Darija App',
  shortTitle: 'Advanced Lesson 1: Idiomatic Expressions',
  description:
    'Master advanced Darija idioms and expressions that will make you sound like a native speaker.',
  slug: 'advanced-one',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Advanced Lesson 1',
    'Idioms',
    'Expressions',
    'Native phrases',
    'Colloquial',
    'Advanced vocabulary',
  ],
});