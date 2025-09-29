"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twelve/LessonOverview';
import BusinessVocabulary from '../coursecomps/twelve/BusinessVocabulary';
import MeetingLanguage from '../coursecomps/twelve/MeetingLanguage';
import NegotiationPhrases from '../coursecomps/twelve/NegotiationPhrases';
import ProfessionalEmailPhrases from '../coursecomps/twelve/ProfessionalEmailPhrases';
import PhoneCommunication from '../coursecomps/twelve/PhoneCommunication';
import PracticeDialogue from '../coursecomps/twelve/PracticeDialogue';
import CulturalNote from '../coursecomps/twelve/CulturalNote';

export default function IntermediateTwelve() {
  return (
    <LessonLayout 
      title="Business and Professional Communication" 
      level="intermediate" 
      lessonNumber={12}
      previousLesson="intermediate-eleven"
      nextLesson="intermediate-thirteen"
    >
      <LessonOverview />
      <BusinessVocabulary />
      <MeetingLanguage />
      <NegotiationPhrases />
      <ProfessionalEmailPhrases />
      <PhoneCommunication />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Congratulations! 🎉</h2>
        <p>You've completed Intermediate Lesson 12: Business and Professional Communication!</p>
      </div>
    </LessonLayout>
  );
}