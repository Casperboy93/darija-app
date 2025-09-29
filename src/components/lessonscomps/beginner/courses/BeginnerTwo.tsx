"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/two/LessonOverview';
import NumbersOneToTen from '../coursecomps/two/NumbersOneToTen';
import NumbersElevenToTwenty from '../coursecomps/two/NumbersElevenToTwenty';
import PracticalUsage from '../coursecomps/two/PracticalUsage';
import CulturalTips from '../coursecomps/two/CulturalTips';

export default function BeginnerTwo() {
  return (
    <LessonLayout 
      title="Numbers and Counting" 
      level="beginner" 
      lessonNumber={2}
      nextLesson="beginner-three"
    >
      <LessonOverview />
      <NumbersOneToTen />
      <NumbersElevenToTwenty />
      <PracticalUsage />
      <CulturalTips />
    </LessonLayout>
  );
}