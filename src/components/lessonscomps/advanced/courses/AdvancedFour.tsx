"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/four/LessonOverview';
import CodeSwitchingFundamentals from '../coursecomps/four/CodeSwitchingFundamentals';
import FormalVocabularyElevation from '../coursecomps/four/FormalVocabularyElevation';
import GrammaticalStructures from '../coursecomps/four/GrammaticalStructures';
import ContextSpecificApplications from '../coursecomps/four/ContextSpecificApplications';
import PracticeConversation from '../coursecomps/four/PracticeConversation';
import AdvancedTips from '../coursecomps/four/AdvancedTips';

export default function AdvancedFour() {
  return (
    <LessonLayout 
      title="Literary Arabic Influence" 
      level="advanced" 
      lessonNumber={4}
      nextLesson="advanced-five"
    >
      <LessonOverview />
      <CodeSwitchingFundamentals />
      <FormalVocabularyElevation />
      <GrammaticalStructures />
      <ContextSpecificApplications />
      <PracticeConversation />
      <AdvancedTips />
      
      {/* Congratulations Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Excellent Work!</h2>
        <p className="text-purple-100">You've mastered the art of code-switching between Darija and Fusha. This sophisticated skill will elevate your communication in formal and professional contexts!</p>
      </div>
    </LessonLayout>
  );
}