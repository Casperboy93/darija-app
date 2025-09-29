"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/four/LessonOverview';
import ImmediateFamily from '../coursecomps/four/ImmediateFamily';
import ExtendedFamily from '../coursecomps/four/ExtendedFamily';
import MaritalStatus from '../coursecomps/four/MaritalStatus';
import CommonExpressions from '../coursecomps/four/CommonExpressions';
import PracticeConversations from '../coursecomps/four/PracticeConversations';
import CulturalTips from '../coursecomps/four/CulturalTips';

export default function BeginnerFour() {
  return (
    <LessonLayout 
      title="Family and Relations" 
      level="beginner" 
      lessonNumber={4}
      nextLesson="beginner-five"
    >
      <LessonOverview />
      <ImmediateFamily />
      <ExtendedFamily />
      <MaritalStatus />
      <CommonExpressions />
      <PracticeConversations />
      <CulturalTips />
    </LessonLayout>
  );
}