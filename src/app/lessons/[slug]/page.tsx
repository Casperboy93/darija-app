"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import BeginnerOne from '@/components/lessonscomps/beginner/BeginnerOne';
import BeginnerTwo from '@/components/lessonscomps/beginner/BeginnerTwo';
import BeginnerThree from '@/components/lessonscomps/beginner/BeginnerThree';
import BeginnerFour from '@/components/lessonscomps/beginner/BeginnerFour';
import BeginnerFive from '@/components/lessonscomps/beginner/BeginnerFive';
import IntermediateOne from '@/components/lessonscomps/medium/IntermediateOne';
import IntermediateTwo from '@/components/lessonscomps/medium/IntermediateTwo';
import IntermediateThree from '@/components/lessonscomps/medium/IntermediateThree';
import IntermediateFour from '@/components/lessonscomps/medium/IntermediateFour';
import IntermediateFive from '@/components/lessonscomps/medium/IntermediateFive';
import AdvancedOne from '@/components/lessonscomps/advanced/AdvancedOne';
import AdvancedTwo from '@/components/lessonscomps/advanced/AdvancedTwo';
import AdvancedThree from '@/components/lessonscomps/advanced/AdvancedThree';
import AdvancedFour from '@/components/lessonscomps/advanced/AdvancedFour';
import AdvancedFive from '@/components/lessonscomps/advanced/AdvancedFive';

// Define valid slug types
type LessonSlug = 
  | 'beginner-one' | 'beginner-two' | 'beginner-three' | 'beginner-four' | 'beginner-five'
  | 'intermediate-one' | 'intermediate-two' | 'intermediate-three' | 'intermediate-four' | 'intermediate-five'
  | 'advanced-one' | 'advanced-two' | 'advanced-three' | 'advanced-four' | 'advanced-five';

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
    'intermediate-one': IntermediateOne,
    'intermediate-two': IntermediateTwo,
    'intermediate-three': IntermediateThree,
    'intermediate-four': IntermediateFour,
    'intermediate-five': IntermediateFive,
    'advanced-one': AdvancedOne,
    'advanced-two': AdvancedTwo,
    'advanced-three': AdvancedThree,
    'advanced-four': AdvancedFour,
    'advanced-five': AdvancedFive,
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