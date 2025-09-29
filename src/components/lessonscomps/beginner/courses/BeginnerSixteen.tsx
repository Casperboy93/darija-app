"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/sixteen/LessonOverview';
import CommonProfessions from '../coursecomps/sixteen/CommonProfessions';
import WorkExpressions from '../coursecomps/sixteen/WorkExpressions';
import WorkplaceVocabulary from '../coursecomps/sixteen/WorkplaceVocabulary';
import PracticeDialogue from '../coursecomps/sixteen/PracticeDialogue';
import CulturalNote from '../coursecomps/sixteen/CulturalNote';

export default function BeginnerSixteen() {
  return (
    <LessonLayout 
      title="Work and Professions" 
      level="beginner" 
      lessonNumber={16}
      previousLesson="beginner-fifteen"
      nextLesson="beginner-seventeen"
    >
      <LessonOverview />
      <CommonProfessions />
      <WorkExpressions />
      <WorkplaceVocabulary />
      <PracticeDialogue />
      <CulturalNote />
    </LessonLayout>
  );
}