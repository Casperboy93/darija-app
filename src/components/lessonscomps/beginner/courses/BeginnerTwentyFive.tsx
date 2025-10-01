"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyfive/LessonOverview';
import VocabularyReview from '../coursecomps/twentyfive/VocabularyReview';
import GrammarSummary from '../coursecomps/twentyfive/GrammarSummary';
import PracticalPhrases from '../coursecomps/twentyfive/PracticalPhrases';
import SelfAssessment from '../coursecomps/twentyfive/SelfAssessment';
import NextSteps from '../coursecomps/twentyfive/NextSteps';

export default function BeginnerTwentyFive() {
  return (
    <LessonLayout 
      title="Final Review and Assessment" 
      level="beginner" 
      lessonNumber={25}
      previousLesson="beginner-twenty-four"
      nextLesson="beginner-twenty-six"
    >
      <LessonOverview />
      <VocabularyReview />
      <GrammarSummary />
      <PracticalPhrases />
      <SelfAssessment />
      <NextSteps />
    </LessonLayout>
  );
}