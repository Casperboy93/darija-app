"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/three/LessonOverview';
import TypesOfConditionals from '../coursecomps/three/TypesOfConditionals';
import CommonConditionalExpressions from '../coursecomps/three/CommonConditionalExpressions';
import GivingAdviceWithConditionals from '../coursecomps/three/GivingAdviceWithConditionals';
import ConditionalQuestions from '../coursecomps/three/ConditionalQuestions';
import PracticeConversation from '../coursecomps/three/PracticeConversation';
import CulturalNotes from '../coursecomps/three/CulturalNotes';

export default function IntermediateThree() {
  return (
    <LessonLayout 
      title="Conditional Forms" 
      level="intermediate" 
      lessonNumber={3}
      nextLesson="intermediate-four"
    >
      <LessonOverview />
      <TypesOfConditionals />
      <CommonConditionalExpressions />
      <GivingAdviceWithConditionals />
      <ConditionalQuestions />
      <PracticeConversation />
      <CulturalNotes />
    </LessonLayout>
  );
}