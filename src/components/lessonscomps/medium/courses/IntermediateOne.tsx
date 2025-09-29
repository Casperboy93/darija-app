"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/one/LessonOverview';
import PastTenseFormation from '../coursecomps/one/PastTenseFormation';
import CommonVerbs from '../coursecomps/one/CommonVerbs';
import TimeExpressions from '../coursecomps/one/TimeExpressions';
import PracticeConversation from '../coursecomps/one/PracticeConversation';
import NegativeForm from '../coursecomps/one/NegativeForm';

export default function IntermediateOne() {
  return (
    <LessonLayout 
      title="Past Tense" 
      level="intermediate" 
      lessonNumber={1}
      nextLesson="intermediate-two"
    >
      <LessonOverview />
      <PastTenseFormation />
      <CommonVerbs />
      <TimeExpressions />
      <PracticeConversation />
      <NegativeForm />
    </LessonLayout>
  );
}