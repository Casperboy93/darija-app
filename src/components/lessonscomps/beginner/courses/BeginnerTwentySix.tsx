"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentysix/LessonOverview';
import ConversationStarters from '../coursecomps/twentysix/ConversationStarters';
import ExpressingOpinions from '../coursecomps/twentysix/ExpressingOpinions';
import SocialEtiquette from '../coursecomps/twentysix/SocialEtiquette';
import AdvancedDialogue from '../coursecomps/twentysix/AdvancedDialogue';

export default function BeginnerTwentySix() {
  return (
    <LessonLayout
      title="Advanced Conversations and Social Interactions"
      level="beginner"
      lessonNumber={26}
      previousLesson="beginner-twenty-five"
      nextLesson="beginner-twenty-seven"
    >
      <LessonOverview />
      <ConversationStarters />
      <ExpressingOpinions />
      <SocialEtiquette />
      <AdvancedDialogue />
    </LessonLayout>
  );
}