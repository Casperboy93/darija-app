"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/six/LessonOverview';
import ShoppingVocabulary from '../coursecomps/six/ShoppingVocabulary';
import BargainingPhrases from '../coursecomps/six/BargainingPhrases';
import PracticeDialogue from '../coursecomps/six/PracticeDialogue';
import CulturalTips from '../coursecomps/six/CulturalTips';
import PracticeExercise from '../coursecomps/six/PracticeExercise';

export default function BeginnerSix() {
  return (
    <LessonLayout 
      title="Shopping and Markets" 
      level="beginner" 
      lessonNumber={6}
      previousLesson="beginner-five"
      nextLesson="beginner-seven"
    >
      <LessonOverview />
      <ShoppingVocabulary />
      <BargainingPhrases />
      <PracticeDialogue />
      <CulturalTips />
      <PracticeExercise />
    </LessonLayout>
  );
}