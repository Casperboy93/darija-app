"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/five/LessonOverview';
import ExpressingLikesAndDislikes from '../coursecomps/five/ExpressingLikesAndDislikes';
import OpinionExpressions from '../coursecomps/five/OpinionExpressions';
import AskingForOpinions from '../coursecomps/five/AskingForOpinions';
import PracticeConversation from '../coursecomps/five/PracticeConversation';
import CommonOpinionTopics from '../coursecomps/five/CommonOpinionTopics';
import CulturalTips from '../coursecomps/five/CulturalTips';

export default function IntermediateFive() {
  return (
    <LessonLayout 
      title="Expressing Opinions" 
      level="intermediate" 
      lessonNumber={5}
      previousLesson="intermediate-four"
      nextLesson="intermediate-six"
    >
      <LessonOverview />
      <ExpressingLikesAndDislikes />
      <OpinionExpressions />
      <AskingForOpinions />
      <PracticeConversation />
      <CommonOpinionTopics />
      <CulturalTips />
    </LessonLayout>
  );
}