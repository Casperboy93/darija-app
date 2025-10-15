import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateTwentyFourSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 24: Healthcare and Medical Visits | Darija App',
  shortTitle: 'Intermediate Lesson 24: Healthcare & Medical Visits',
  description:
    'Describe symptoms, book appointments, talk at pharmacies, and handle billing in medical contexts.',
  slug: 'intermediate-twenty-four',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 24',
    'Healthcare',
    'Medical',
    'Pharmacy',
    'Appointments',
    'Billing',
  ],
});