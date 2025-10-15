import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateTwoSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 2: Future Tense Formation and Usage | Darija App',
  shortTitle: 'Intermediate Lesson 2: Future Tense',
  description:
    'Master future tense in Darija with gha/ghadi, negative forms, variations, and cultural tips. Includes practice dialogue using future plans.',
  slug: 'intermediate-two',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 2',
    'Future tense',
    'Negative future',
    'Conversation practice',
  ],
});