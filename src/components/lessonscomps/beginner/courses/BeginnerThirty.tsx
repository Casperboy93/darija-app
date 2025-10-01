"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/thirty/LessonOverview';
import ComprehensiveReview from '../coursecomps/thirty/ComprehensiveReview';
import AdvancedExercises from '../coursecomps/thirty/AdvancedExercises';

export default function BeginnerThirty() {
  return (
    <LessonLayout
      title="Final Mastery and Certification Preparation"
      level="beginner"
      lessonNumber={30}
      previousLesson="beginner-twenty-nine"
    >
      <LessonOverview />
      <ComprehensiveReview />
      <AdvancedExercises />
    </LessonLayout>
  );
}