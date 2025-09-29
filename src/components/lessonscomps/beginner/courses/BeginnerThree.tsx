"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/three/LessonOverview';
import EssentialPhrases from '../coursecomps/three/EssentialPhrases';
import AskingForHelp from '../coursecomps/three/AskingForHelp';
import CommonResponses from '../coursecomps/three/CommonResponses';
import PracticeScenarios from '../coursecomps/three/PracticeScenarios';
import CulturalTips from '../coursecomps/three/CulturalTips';

export default function BeginnerThree() {
  return (
    <LessonLayout 
      title="Basic Phrases" 
      level="beginner" 
      lessonNumber={3}
      nextLesson="beginner-four"
    >
      <LessonOverview />
      <EssentialPhrases />
      <AskingForHelp />
      <CommonResponses />
      <PracticeScenarios />
      <CulturalTips />
    </LessonLayout>
  );
}