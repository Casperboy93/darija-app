"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/one/LessonOverview';
import CommonGreetings from '../coursecomps/one/CommonGreetings';
import Introductions from '../coursecomps/one/Introductions';
import PracticeConversation from '../coursecomps/one/PracticeConversation';
import CulturalTips from '../coursecomps/one/CulturalTips';

export default function BeginnerOne() {
  return (
    <LessonLayout 
      title="Greetings and Introductions" 
      level="beginner" 
      lessonNumber={1}
      nextLesson="beginner-two"
    >
      <LessonOverview />
      <CommonGreetings />
      <Introductions />
      <PracticeConversation />
      <CulturalTips />
    </LessonLayout>
  );
}
        
