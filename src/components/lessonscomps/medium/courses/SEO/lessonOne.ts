import { Metadata } from 'next';
import { makeLessonSEO } from '@/components/lessonscomps/beginner/courses/SEO/seoUtil';

export const intermediateOneSEO: Metadata = makeLessonSEO({
  titleFull: 'Intermediate Lesson 1: Past Tense and Common Verbs | Darija App',
  shortTitle: 'Intermediate Lesson 1: Past Tense and Verbs',
  description:
    'Build fluency with past tense formation, common verbs, negatives, and time expressions. Practice with a conversation to reinforce usage.',
  slug: 'intermediate-one',
  keywords: [
    'Darija',
    'Moroccan Arabic',
    'Intermediate Lesson 1',
    'Past tense',
    'Common verbs',
    'Negative form',
    'Time expressions',
  ],
});