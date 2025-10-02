"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyone/LessonOverview';
import EverydayVocabulary from '../coursecomps/twentyone/EverydayVocabulary';
import SmallTalkOpeners from '../coursecomps/twentyone/SmallTalkOpeners';
import ClarificationConfirmations from '../coursecomps/twentyone/ClarificationConfirmations';
import PoliteRequests from '../coursecomps/twentyone/PoliteRequests';
import PracticeDialogue from '../coursecomps/twentyone/PracticeDialogue';

export default function IntermediateTwentyOne() {
  return (
    <LessonLayout 
      title="Everyday Dialogues and Expressions" 
      level="intermediate" 
      lessonNumber={21}
      previousLesson="intermediate-twenty"
      nextLesson="intermediate-twenty-two"
    >
      <LessonOverview />
      <EverydayVocabulary />
      <SmallTalkOpeners />
      <ClarificationConfirmations />
      <PoliteRequests />
      <PracticeDialogue />

      <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">💬</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Nice work!</h2>
        <p className="text-gray-700">
          You can now navigate everyday chats, openers, and polite clarifications in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}