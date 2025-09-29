"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seventeen/LessonOverview';
import BodyParts from '../coursecomps/seventeen/BodyParts';
import HealthExpressions from '../coursecomps/seventeen/HealthExpressions';
import CommonHealthIssues from '../coursecomps/seventeen/CommonHealthIssues';
import MedicalVocabulary from '../coursecomps/seventeen/MedicalVocabulary';
import PracticeDialogue from '../coursecomps/seventeen/PracticeDialogue';
import CulturalNote from '../coursecomps/seventeen/CulturalNote';

export default function BeginnerSeventeen() {
  return (
    <LessonLayout 
      title="Health and Body" 
      level="beginner" 
      lessonNumber={17}
      previousLesson="beginner-sixteen"
      nextLesson="beginner-eighteen"
    >
      <LessonOverview />
      <BodyParts />
      <HealthExpressions />
      <CommonHealthIssues />
      <MedicalVocabulary />
      <PracticeDialogue />
      <CulturalNote />
    </LessonLayout>
  );
}