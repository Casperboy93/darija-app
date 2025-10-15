import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateThreeSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 3: Conditionals and Hypotheticals | Darija App',
  shortTitle: 'Intermediate Lesson 3: Conditionals',
  description:
    'Learn real and unreal conditions in Darija: ila with present for future, and kun forms for hypotheticals. Clear structures with examples.',
  slug: 'intermediate-three',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 3',
    'Conditionals',
    'Hypotheticals',
    'Grammar',
  ],
});