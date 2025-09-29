"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/four/LessonOverview';
import BasicComparativeStructure from '../coursecomps/four/BasicComparativeStructure';
import CommonComparativeAdjectives from '../coursecomps/four/CommonComparativeAdjectives';
import SuperlativeForms from '../coursecomps/four/SuperlativeForms';
import EqualityComparisons from '../coursecomps/four/EqualityComparisons';
import ComparingQuantities from '../coursecomps/four/ComparingQuantities';
import PracticeConversation from '../coursecomps/four/PracticeConversation';
import CommonMistakes from '../coursecomps/four/CommonMistakes';
import CulturalTips from '../coursecomps/four/CulturalTips';

export default function IntermediateFour() {
  return (
    <LessonLayout
      title="Lesson 4: Comparative Forms"
      level="intermediate"
      lessonNumber={4}
      previousLesson="intermediate-three"
      nextLesson="intermediate-five"
    >
      <LessonOverview />
      <BasicComparativeStructure />
      <CommonComparativeAdjectives />
      <SuperlativeForms />
      <EqualityComparisons />
      <ComparingQuantities />
      <PracticeConversation />
      <CommonMistakes />
      <CulturalTips />
    </LessonLayout>
  );
}