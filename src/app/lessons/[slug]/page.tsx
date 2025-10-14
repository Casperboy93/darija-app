"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import BeginnerOne from '@/components/lessonscomps/beginner/courses/BeginnerOne';
import BeginnerTwo from '@/components/lessonscomps/beginner/courses/BeginnerTwo';
import BeginnerThree from '@/components/lessonscomps/beginner/courses/BeginnerThree';
import BeginnerFour from '@/components/lessonscomps/beginner/courses/BeginnerFour';
import BeginnerFive from '@/components/lessonscomps/beginner/courses/BeginnerFive';
import BeginnerSix from '@/components/lessonscomps/beginner/courses/BeginnerSix';
import BeginnerSeven from '@/components/lessonscomps/beginner/courses/BeginnerSeven';
import BeginnerEight from '@/components/lessonscomps/beginner/courses/BeginnerEight';
import BeginnerNine from '@/components/lessonscomps/beginner/courses/BeginnerNine';
import BeginnerTen from '@/components/lessonscomps/beginner/courses/BeginnerTen';
import BeginnerEleven from '@/components/lessonscomps/beginner/courses/BeginnerEleven';
import BeginnerTwelve from '@/components/lessonscomps/beginner/courses/BeginnerTwelve';
import BeginnerThirteen from '@/components/lessonscomps/beginner/courses/BeginnerThirteen';
import BeginnerFourteen from '@/components/lessonscomps/beginner/courses/BeginnerFourteen';
import BeginnerFifteen from '@/components/lessonscomps/beginner/courses/BeginnerFifteen';
import BeginnerSixteen from '@/components/lessonscomps/beginner/courses/BeginnerSixteen';
import BeginnerSeventeen from '@/components/lessonscomps/beginner/courses/BeginnerSeventeen';
import BeginnerEighteen from '@/components/lessonscomps/beginner/courses/BeginnerEighteen';
import BeginnerNineteen from '@/components/lessonscomps/beginner/courses/BeginnerNineteen';
import BeginnerTwenty from '@/components/lessonscomps/beginner/courses/BeginnerTwenty';
import BeginnerTwentyOne from '@/components/lessonscomps/beginner/courses/BeginnerTwentyOne';
import BeginnerTwentyTwo from '@/components/lessonscomps/beginner/courses/BeginnerTwentyTwo';
import BeginnerTwentyThree from '@/components/lessonscomps/beginner/courses/BeginnerTwentyThree';
import BeginnerTwentyFour from '@/components/lessonscomps/beginner/courses/BeginnerTwentyFour';
import BeginnerTwentyFive from '@/components/lessonscomps/beginner/courses/BeginnerTwentyFive';
import BeginnerTwentySix from '@/components/lessonscomps/beginner/courses/BeginnerTwentySix';
import BeginnerTwentySeven from '@/components/lessonscomps/beginner/courses/BeginnerTwentySeven';
import BeginnerTwentyEight from '@/components/lessonscomps/beginner/courses/BeginnerTwentyEight';
import BeginnerTwentyNine from '@/components/lessonscomps/beginner/courses/BeginnerTwentyNine';
import BeginnerThirty from '@/components/lessonscomps/beginner/courses/BeginnerThirty';
import IntermediateOne from '@/components/lessonscomps/medium/courses/IntermediateOne';
import IntermediateTwo from '@/components/lessonscomps/medium/courses/IntermediateTwo';
import IntermediateThree from '@/components/lessonscomps/medium/courses/IntermediateThree';
import IntermediateFour from '@/components/lessonscomps/medium/courses/IntermediateFour';
import IntermediateFive from '@/components/lessonscomps/medium/courses/IntermediateFive';
import IntermediateSix from '@/components/lessonscomps/medium/courses/IntermediateSix';
import IntermediateSeven from '@/components/lessonscomps/medium/courses/IntermediateSeven';
import IntermediateEight from '@/components/lessonscomps/medium/courses/IntermediateEight';
import IntermediateNine from '@/components/lessonscomps/medium/courses/IntermediateNine';
import IntermediateTen from '@/components/lessonscomps/medium/courses/IntermediateTen';
import IntermediateEleven from '@/components/lessonscomps/medium/courses/IntermediateEleven';
import IntermediateTwelve from '@/components/lessonscomps/medium/courses/IntermediateTwelve';
import IntermediateThirteen from '@/components/lessonscomps/medium/courses/IntermediateThirteen';
import IntermediateFourteen from '@/components/lessonscomps/medium/courses/IntermediateFourteen';
import IntermediateFifteen from '@/components/lessonscomps/medium/courses/IntermediateFifteen';
import IntermediateSixteen from '@/components/lessonscomps/medium/courses/IntermediateSixteen';
import IntermediateSeventeen from '@/components/lessonscomps/medium/courses/IntermediateSeventeen';
import IntermediateEighteen from '@/components/lessonscomps/medium/courses/IntermediateEighteen';
import IntermediateNineteen from '@/components/lessonscomps/medium/courses/IntermediateNineteen';
import IntermediateTwenty from '@/components/lessonscomps/medium/courses/IntermediateTwenty';
import IntermediateTwentyOne from '@/components/lessonscomps/medium/courses/IntermediateTwentyOne';
import IntermediateTwentyTwo from '@/components/lessonscomps/medium/courses/IntermediateTwentyTwo';
import IntermediateTwentyThree from '@/components/lessonscomps/medium/courses/IntermediateTwentyThree';
import IntermediateTwentyFour from '@/components/lessonscomps/medium/courses/IntermediateTwentyFour';
import IntermediateTwentyFive from '@/components/lessonscomps/medium/courses/IntermediateTwentyFive';
import IntermediateTwentySix from '@/components/lessonscomps/medium/courses/IntermediateTwentySix';
import IntermediateTwentySeven from '@/components/lessonscomps/medium/courses/IntermediateTwentySeven';
import IntermediateTwentyEight from '@/components/lessonscomps/medium/courses/IntermediateTwentyEight';
import IntermediateTwentyNine from '@/components/lessonscomps/medium/courses/IntermediateTwentyNine';
import IntermediateThirty from '@/components/lessonscomps/medium/courses/IntermediateThirty';
import AdvancedOne from '@/components/lessonscomps/advanced/courses/AdvancedOne';
import AdvancedTwo from '@/components/lessonscomps/advanced/courses/AdvancedTwo';
import AdvancedThree from '@/components/lessonscomps/advanced/courses/AdvancedThree';
import AdvancedFour from '@/components/lessonscomps/advanced/courses/AdvancedFour';
import AdvancedFive from '@/components/lessonscomps/advanced/courses/AdvancedFive';
import AdvancedSix from '@/components/lessonscomps/advanced/courses/AdvancedSix';
import AdvancedSeven from '@/components/lessonscomps/advanced/courses/AdvancedSeven';
import AdvancedEight from '@/components/lessonscomps/advanced/courses/AdvancedEight';
import AdvancedNine from '@/components/lessonscomps/advanced/courses/AdvancedNine';
import AdvancedTen from '@/components/lessonscomps/advanced/courses/AdvancedTen';
import AdvancedEleven from '@/components/lessonscomps/advanced/courses/AdvancedEleven';
import AdvancedTwelve from '@/components/lessonscomps/advanced/courses/AdvancedTwelve';
import AdvancedThirteen from '@/components/lessonscomps/advanced/courses/AdvancedThirteen';
import AdvancedFourteen from '@/components/lessonscomps/advanced/courses/AdvancedFourteen';
import AdvancedFifteen from '@/components/lessonscomps/advanced/courses/AdvancedFifteen';
import AdvancedSixteen from '@/components/lessonscomps/advanced/courses/AdvancedSixteen';
import AdvancedSeventeen from '@/components/lessonscomps/advanced/courses/AdvancedSeventeen';
import AdvancedEighteen from '@/components/lessonscomps/advanced/courses/AdvancedEighteen';
import AdvancedNineteen from '@/components/lessonscomps/advanced/courses/AdvancedNineteen';
import AdvancedTwenty from '@/components/lessonscomps/advanced/courses/AdvancedTwenty';

// Define valid slug types
type LessonSlug = 
  | 'beginner-one' | 'beginner-two' | 'beginner-three' | 'beginner-four' | 'beginner-five'
  | 'beginner-six' | 'beginner-seven' | 'beginner-eight' | 'beginner-nine' | 'beginner-ten'
  | 'beginner-eleven' | 'beginner-twelve' | 'beginner-thirteen' | 'beginner-fourteen' | 'beginner-fifteen'
  | 'beginner-sixteen' | 'beginner-seventeen' | 'beginner-eighteen' | 'beginner-nineteen' | 'beginner-twenty'
  | 'beginner-twenty-one' | 'beginner-twenty-two' | 'beginner-twenty-three' | 'beginner-twenty-four' | 'beginner-twenty-five'
  | 'beginner-twenty-six' | 'beginner-twenty-seven' | 'beginner-twenty-eight' | 'beginner-twenty-nine' | 'beginner-thirty'
  | 'intermediate-one' | 'intermediate-two' | 'intermediate-three' | 'intermediate-four' | 'intermediate-five'
  | 'intermediate-six' | 'intermediate-seven' | 'intermediate-eight' | 'intermediate-nine' | 'intermediate-ten'
  | 'intermediate-eleven' | 'intermediate-twelve' | 'intermediate-thirteen' | 'intermediate-fourteen' | 'intermediate-fifteen'
  | 'intermediate-sixteen' | 'intermediate-seventeen' | 'intermediate-eighteen' | 'intermediate-nineteen' | 'intermediate-twenty'
  | 'intermediate-twenty-one' | 'intermediate-twenty-two' | 'intermediate-twenty-three'
  | 'intermediate-twenty-four'
  | 'intermediate-twenty-five' | 'intermediate-twenty-six' | 'intermediate-twenty-seven' | 'intermediate-twenty-eight' | 'intermediate-twenty-nine'
  | 'intermediate-thirty'
  | 'advanced-one' | 'advanced-two' | 'advanced-three' | 'advanced-four' | 'advanced-five'
  | 'advanced-six' | 'advanced-seven' | 'advanced-eight' | 'advanced-nine' | 'advanced-ten'
  | 'advanced-eleven' | 'advanced-twelve' | 'advanced-thirteen' | 'advanced-fourteen' | 'advanced-fifteen'
  | 'advanced-sixteen' | 'advanced-seventeen' | 'advanced-eighteen' | 'advanced-nineteen' | 'advanced-twenty';

export default function LessonPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Map slugs to components
  const lessonComponents = {
    'beginner-one': BeginnerOne,
    'beginner-two': BeginnerTwo,
    'beginner-three': BeginnerThree,
    'beginner-four': BeginnerFour,
    'beginner-five': BeginnerFive,
    'beginner-six': BeginnerSix,
    'beginner-seven': BeginnerSeven,
    'beginner-eight': BeginnerEight,
    'beginner-nine': BeginnerNine,
    'beginner-ten': BeginnerTen,
    'beginner-eleven': BeginnerEleven,
    'beginner-twelve': BeginnerTwelve,
    'beginner-thirteen': BeginnerThirteen,
    'beginner-fourteen': BeginnerFourteen,
    'beginner-fifteen': BeginnerFifteen,
    'beginner-sixteen': BeginnerSixteen,
    'beginner-seventeen': BeginnerSeventeen,
    'beginner-eighteen': BeginnerEighteen,
    'beginner-nineteen': BeginnerNineteen,
    'beginner-twenty': BeginnerTwenty,
    'beginner-twenty-one': BeginnerTwentyOne,
    'beginner-twenty-two': BeginnerTwentyTwo,
    'beginner-twenty-three': BeginnerTwentyThree,
    'beginner-twenty-four': BeginnerTwentyFour,
    'beginner-twenty-five': BeginnerTwentyFive,
    'beginner-twenty-six': BeginnerTwentySix,
    'beginner-twenty-seven': BeginnerTwentySeven,
    'beginner-twenty-eight': BeginnerTwentyEight,
    'beginner-twenty-nine': BeginnerTwentyNine,
    'beginner-thirty': BeginnerThirty,
    'intermediate-one': IntermediateOne,
    'intermediate-two': IntermediateTwo,
    'intermediate-three': IntermediateThree,
    'intermediate-four': IntermediateFour,
    'intermediate-five': IntermediateFive,
    'intermediate-six': IntermediateSix,
    'intermediate-seven': IntermediateSeven,
    'intermediate-eight': IntermediateEight,
    'intermediate-nine': IntermediateNine,
    'intermediate-ten': IntermediateTen,
    'intermediate-eleven': IntermediateEleven,
    'intermediate-twelve': IntermediateTwelve,
    'intermediate-thirteen': IntermediateThirteen,
    'intermediate-fourteen': IntermediateFourteen,
    'intermediate-fifteen': IntermediateFifteen,
    'intermediate-sixteen': IntermediateSixteen,
    'intermediate-seventeen': IntermediateSeventeen,
    'intermediate-eighteen': IntermediateEighteen,
    'intermediate-nineteen': IntermediateNineteen,
    'intermediate-twenty': IntermediateTwenty,
    'intermediate-twenty-one': IntermediateTwentyOne,
    'intermediate-twenty-two': IntermediateTwentyTwo,
    'intermediate-twenty-three': IntermediateTwentyThree,
    'intermediate-twenty-four': IntermediateTwentyFour,
    'intermediate-twenty-five': IntermediateTwentyFive,
    'intermediate-twenty-six': IntermediateTwentySix,
    'intermediate-twenty-seven': IntermediateTwentySeven,
    'intermediate-twenty-eight': IntermediateTwentyEight,
    'intermediate-twenty-nine': IntermediateTwentyNine,
    'intermediate-thirty': IntermediateThirty,
    'advanced-one': AdvancedOne,
    'advanced-two': AdvancedTwo,
    'advanced-three': AdvancedThree,
    'advanced-four': AdvancedFour,
    'advanced-five': AdvancedFive,
    'advanced-six': AdvancedSix,
    'advanced-seven': AdvancedSeven,
    'advanced-eight': AdvancedEight,
    'advanced-nine': AdvancedNine,
    'advanced-ten': AdvancedTen,
    'advanced-eleven': AdvancedEleven,
    'advanced-twelve': AdvancedTwelve,
    'advanced-thirteen': AdvancedThirteen,
    'advanced-fourteen': AdvancedFourteen,
    'advanced-fifteen': AdvancedFifteen,
    'advanced-sixteen': AdvancedSixteen,
    'advanced-seventeen': AdvancedSeventeen,
    'advanced-eighteen': AdvancedEighteen,
    'advanced-nineteen': AdvancedNineteen,
    'advanced-twenty': AdvancedTwenty,
  } as const;
  
  // Check if the slug is a valid key in our components map
  const isValidSlug = (s: string): s is LessonSlug => {
    return Object.keys(lessonComponents).includes(s);
  };
  
  // Get the component based on the slug
  const LessonComponent = isValidSlug(slug) ? lessonComponents[slug] : null;
  
  if (!LessonComponent) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Lesson Not Found</h1>
        <p>Sorry, the lesson you’re looking for doesn’t exist.</p>
      </div>
    );
  }
  
  return <LessonComponent />;
}