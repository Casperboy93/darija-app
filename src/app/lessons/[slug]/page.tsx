"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import BeginnerOne from '@/components/lessonscomps/beginner/BeginnerOne';
import BeginnerTwo from '@/components/lessonscomps/beginner/BeginnerTwo';
import BeginnerThree from '@/components/lessonscomps/beginner/BeginnerThree';
import BeginnerFour from '@/components/lessonscomps/beginner/BeginnerFour';
import BeginnerFive from '@/components/lessonscomps/beginner/BeginnerFive';
import BeginnerSix from '@/components/lessonscomps/beginner/BeginnerSix';
import BeginnerSeven from '@/components/lessonscomps/beginner/BeginnerSeven';
import BeginnerEight from '@/components/lessonscomps/beginner/BeginnerEight';
import BeginnerNine from '@/components/lessonscomps/beginner/BeginnerNine';
import BeginnerTen from '@/components/lessonscomps/beginner/BeginnerTen';
import IntermediateOne from '@/components/lessonscomps/medium/IntermediateOne';
import IntermediateTwo from '@/components/lessonscomps/medium/IntermediateTwo';
import IntermediateThree from '@/components/lessonscomps/medium/IntermediateThree';
import IntermediateFour from '@/components/lessonscomps/medium/IntermediateFour';
import IntermediateFive from '@/components/lessonscomps/medium/IntermediateFive';
import IntermediateSix from '@/components/lessonscomps/medium/IntermediateSix';
import IntermediateSeven from '@/components/lessonscomps/medium/IntermediateSeven';
import IntermediateEight from '@/components/lessonscomps/medium/IntermediateEight';
import IntermediateNine from '@/components/lessonscomps/medium/IntermediateNine';
import IntermediateTen from '@/components/lessonscomps/medium/IntermediateTen';
import AdvancedOne from '@/components/lessonscomps/advanced/AdvancedOne';
import AdvancedTwo from '@/components/lessonscomps/advanced/AdvancedTwo';
import AdvancedThree from '@/components/lessonscomps/advanced/AdvancedThree';
import AdvancedFour from '@/components/lessonscomps/advanced/AdvancedFour';
import AdvancedFive from '@/components/lessonscomps/advanced/AdvancedFive';
import AdvancedSix from '@/components/lessonscomps/advanced/AdvancedSix';
import AdvancedSeven from '@/components/lessonscomps/advanced/AdvancedSeven';
import AdvancedEight from '@/components/lessonscomps/advanced/AdvancedEight';
import AdvancedNine from '@/components/lessonscomps/advanced/AdvancedNine';
import AdvancedTen from '@/components/lessonscomps/advanced/AdvancedTen';

// Define valid slug types
type LessonSlug = 
  | 'beginner-one' | 'beginner-two' | 'beginner-three' | 'beginner-four' | 'beginner-five'
  | 'beginner-six' | 'beginner-seven' | 'beginner-eight' | 'beginner-nine' | 'beginner-ten'
  | 'intermediate-one' | 'intermediate-two' | 'intermediate-three' | 'intermediate-four' | 'intermediate-five'
  | 'intermediate-six' | 'intermediate-seven' | 'intermediate-eight' | 'intermediate-nine' | 'intermediate-ten'
  | 'advanced-one' | 'advanced-two' | 'advanced-three' | 'advanced-four' | 'advanced-five'
  | 'advanced-six' | 'advanced-seven' | 'advanced-eight' | 'advanced-nine' | 'advanced-ten';

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
        <p>Sorry, the lesson you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  return <LessonComponent />;
}