import type { Metadata } from 'next';
import React from 'react';
import { lessonOneSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonOne';
import { lessonTwoSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwo';
import { lessonThreeSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonThree';
import { lessonFourSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonFour';
import { lessonFiveSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonFive';
import { lessonSixSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonSix';
import { lessonSevenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonSeven';
import { lessonEightSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonEight';
import { lessonNineSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonNine';
import { lessonTenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTen';
import { lessonElevenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonEleven';
import { lessonTwelveSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwelve';
import { lessonThirteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonThirteen';
import { lessonFourteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonFourteen';
import { lessonFifteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonFifteen';
import { lessonSixteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonSixteen';
import { lessonSeventeenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonSeventeen';
import { lessonEighteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonEighteen';
import { lessonNineteenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonNineteen';
import { lessonTwentySEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwenty';
import { lessonTwentyOneSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyOne';
import { lessonTwentyTwoSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyTwo';
import { lessonTwentyThreeSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyThree';
import { lessonTwentyFourSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyFour';
import { lessonTwentyFiveSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyFive';
import { lessonTwentySixSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentySix';
import { lessonTwentySevenSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentySeven';
import { lessonTwentyEightSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyEight';
import { lessonTwentyNineSEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonTwentyNine';
import { lessonThirtySEO } from '@/components/lessonscomps/beginner/courses/SEO/lessonThirty';

const seoBySlug: Record<string, Metadata> = {
  'beginner-one': lessonOneSEO,
  'beginner-two': lessonTwoSEO,
  'beginner-three': lessonThreeSEO,
  'beginner-four': lessonFourSEO,
  'beginner-five': lessonFiveSEO,
  'beginner-six': lessonSixSEO,
  'beginner-seven': lessonSevenSEO,
  'beginner-eight': lessonEightSEO,
  'beginner-nine': lessonNineSEO,
  'beginner-ten': lessonTenSEO,
  'beginner-eleven': lessonElevenSEO,
  'beginner-twelve': lessonTwelveSEO,
  'beginner-thirteen': lessonThirteenSEO,
  'beginner-fourteen': lessonFourteenSEO,
  'beginner-fifteen': lessonFifteenSEO,
  'beginner-sixteen': lessonSixteenSEO,
  'beginner-seventeen': lessonSeventeenSEO,
  'beginner-eighteen': lessonEighteenSEO,
  'beginner-nineteen': lessonNineteenSEO,
  'beginner-twenty': lessonTwentySEO,
  'beginner-twenty-one': lessonTwentyOneSEO,
  'beginner-twenty-two': lessonTwentyTwoSEO,
  'beginner-twenty-three': lessonTwentyThreeSEO,
  'beginner-twenty-four': lessonTwentyFourSEO,
  'beginner-twenty-five': lessonTwentyFiveSEO,
  'beginner-twenty-six': lessonTwentySixSEO,
  'beginner-twenty-seven': lessonTwentySevenSEO,
  'beginner-twenty-eight': lessonTwentyEightSEO,
  'beginner-twenty-nine': lessonTwentyNineSEO,
  'beginner-thirty': lessonThirtySEO,
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = seoBySlug[params.slug];
  if (meta) return meta;

  const readable = params.slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

  return {
    title: `${readable} | Darija App`,
    description:
      'Explore Moroccan Darija lessons covering vocabulary, dialogues, and cultural context across beginner, intermediate, and advanced levels.',
    robots: { index: true, follow: true },
  } satisfies Metadata;
}

export default function LessonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}