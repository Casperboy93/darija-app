import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateFiveSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 5: Opinions and Preferences | Darija App',
  shortTitle: 'Intermediate Lesson 5: Opinions & Preferences',
  description:
    'Express opinions and preferences clearly in Darija. Practice common topics like food, movies, weather, work, travel, and social media.',
  slug: 'intermediate-five',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 5',
    'Opinions',
    'Preferences',
    'Conversation',
  ],
});