"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyeight/LessonOverview';
import TechVocabulary from '../coursecomps/twentyeight/TechVocabulary';
import SocialMedia from '../coursecomps/twentyeight/SocialMedia';
import OnlineShopping from '../coursecomps/twentyeight/OnlineShopping';
import DigitalCommunication from '../coursecomps/twentyeight/DigitalCommunication';
import TechTrends from '../coursecomps/twentyeight/TechTrends';

export default function BeginnerTwentyEight() {
  return (
    <LessonLayout 
      title="Technology and Modern Life" 
      level="beginner" 
      lessonNumber={28}
      previousLesson="beginner-twenty-seven"
      nextLesson="beginner-twenty-nine"
    >
      <LessonOverview />
      <TechVocabulary />
      <SocialMedia />
      <OnlineShopping />
      <DigitalCommunication />
      <TechTrends />
    </LessonLayout>
  );
}