"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seven/LessonOverview';
import TransportationVocabulary from '../coursecomps/seven/TransportationVocabulary';
import AskingDirections from '../coursecomps/seven/AskingDirections';
import DirectionWords from '../coursecomps/seven/DirectionWords';
import PracticeDialogue from '../coursecomps/seven/PracticeDialogue';
import TransportationTips from '../coursecomps/seven/TransportationTips';
import PracticeExercise from '../coursecomps/seven/PracticeExercise';

export default function BeginnerSeven() {
  return (
    <LessonLayout 
      title="Transportation and Directions" 
      level="beginner" 
      lessonNumber={7}
      previousLesson="beginner-six"
      nextLesson="beginner-eight"
    >
      <LessonOverview />
      <TransportationVocabulary />
      <AskingDirections />
      <DirectionWords />
      <PracticeDialogue />
      <TransportationTips />
      <PracticeExercise />
    </LessonLayout>
  );
}