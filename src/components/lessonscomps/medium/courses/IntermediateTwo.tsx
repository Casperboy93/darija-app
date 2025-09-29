"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/two/LessonOverview';
import FutureTenseFormation from '../coursecomps/two/FutureTenseFormation';
import FutureTenseVariations from '../coursecomps/two/FutureTenseVariations';
import CommonFutureExpressions from '../coursecomps/two/CommonFutureExpressions';
import TimeExpressionsForFuture from '../coursecomps/two/TimeExpressionsForFuture';
import MakingPlansAndPredictions from '../coursecomps/two/MakingPlansAndPredictions';
import PracticeConversation from '../coursecomps/two/PracticeConversation';
import NegativeFuture from '../coursecomps/two/NegativeFuture';
import CulturalTips from '../coursecomps/two/CulturalTips';

export default function IntermediateTwo() {
  return (
    <LessonLayout 
      title="Future Tense" 
      level="intermediate" 
      lessonNumber={2}
      nextLesson="intermediate-three"
    >
      <LessonOverview />
      <FutureTenseFormation />
      <FutureTenseVariations />
      <CommonFutureExpressions />
      <TimeExpressionsForFuture />
      <MakingPlansAndPredictions />
      <PracticeConversation />
      <NegativeFuture />
      <CulturalTips />
    </LessonLayout>
  );
}