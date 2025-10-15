import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const advancedTwoSEO: Metadata = makeLessonSEO({
  titleFull: 'Advanced Lesson 2: Dialectal Variations | Darija App',
  shortTitle: 'Advanced Lesson 2: Dialectal Variations',
  description:
    'Explore regional differences in Darija across Morocco and understand various accents and vocabulary.',
  slug: 'advanced-two',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Advanced Lesson 2',
    'Regional dialects',
    'Accents',
    'Vocabulary differences',
    'Morocco regions',
    'Variations',
    'Pronunciation',
  ],
});