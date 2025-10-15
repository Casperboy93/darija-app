import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateEightSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 8: Health and Medical | Darija App',
  shortTitle: 'Intermediate Lesson 8: Health & Medical',
  description:
    'Learn health and medical Darija: body parts, common symptoms, doctor visits, pharmacy vocabulary, emergencies, and cultural health tips.',
  slug: 'intermediate-eight',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 8',
    'Health',
    'Medical',
    'Symptoms',
    'Doctor',
    'Pharmacy',
    'Emergency',
  ],
});