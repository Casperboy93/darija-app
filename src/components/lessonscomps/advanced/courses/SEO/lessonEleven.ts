import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const advancedElevenSEO: Metadata = makeLessonSEO({
  titleFull: 'Advanced Lesson 11: Literary and Poetic Expression | Darija App',
  shortTitle: 'Advanced Lesson 11: Literary and Poetic Expression',
  description:
    'Master the art of literary expression and classical poetry in Darija with sophisticated vocabulary.',
  slug: 'advanced-eleven',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Advanced Lesson 11',
    'Literary',
    'Poetry',
    'Metaphor',
    'Imagery',
    'Classical forms',
  ],
});