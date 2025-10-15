import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateSixSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 6: Travel and Directions | Darija App',
  shortTitle: 'Intermediate Lesson 6: Travel & Directions',
  description:
    'Navigate travel and directions in Moroccan Darija: transportation terms, booking and reservations, detailed directions, and planning conversations.',
  slug: 'intermediate-six',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 6',
    'Travel',
    'Directions',
    'Transport',
    'Booking',
    'Reservations',
    'Maps',
  ],
});