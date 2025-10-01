"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twelve/LessonOverview';
import FormalProtocol from '../coursecomps/twelve/FormalProtocol';
import DiplomaticVocabulary from '../coursecomps/twelve/DiplomaticVocabulary';
import NegotiationTechniques from '../coursecomps/twelve/NegotiationTechniques';
import OfficialCorrespondence from '../coursecomps/twelve/OfficialCorrespondence';
import MediationSkills from '../coursecomps/twelve/MediationSkills';
import DiplomaticDialogue from '../coursecomps/twelve/DiplomaticDialogue';
import CulturalNote from '../coursecomps/twelve/CulturalNote';

export default function AdvancedTwelve() {
  return (
    <LessonLayout 
      title="Diplomatic and Formal Communication" 
      level="advanced" 
      lessonNumber={12}
      previousLesson="advanced-eleven"
      nextLesson="advanced-thirteen"
    >
      <LessonOverview />
      <FormalProtocol />
      <DiplomaticVocabulary />
      <NegotiationTechniques />
      <OfficialCorrespondence />
      <MediationSkills />
      <DiplomaticDialogue />
      <CulturalNote />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🏛️ Diplomatic Mastery!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 12: Diplomatic and Formal Communication!</p>
          <p className="text-lg opacity-90">
            You've mastered the sophisticated language of diplomacy and formal communication in Darija.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for the next advanced challenge? 🎯</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}