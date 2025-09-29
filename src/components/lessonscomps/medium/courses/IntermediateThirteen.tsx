"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/thirteen/LessonOverview';
import GreetingsSocialInteractions from '../coursecomps/thirteen/GreetingsSocialInteractions';
import HospitalityCustoms from '../coursecomps/thirteen/HospitalityCustoms';
import ReligiousCulturalSensitivity from '../coursecomps/thirteen/ReligiousCulturalSensitivity';
import TableMannersDiningEtiquette from '../coursecomps/thirteen/TableMannersDiningEtiquette';
import GiftGivingSocialOccasions from '../coursecomps/thirteen/GiftGivingSocialOccasions';
import PracticeDialogue from '../coursecomps/thirteen/PracticeDialogue';
import CulturalNote from '../coursecomps/thirteen/CulturalNote';

export default function IntermediateThirteen() {
  return (
    <LessonLayout
      title="Cultural Customs and Etiquette"
      level="intermediate"
      lessonNumber={13}
      previousLesson="intermediate-twelve"
      nextLesson="intermediate-fourteen"
    >
      <LessonOverview />
      <GreetingsSocialInteractions />
      <HospitalityCustoms />
      <ReligiousCulturalSensitivity />
      <TableMannersDiningEtiquette />
      <GiftGivingSocialOccasions />
      <PracticeDialogue />
      <CulturalNote />
      
      <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Congratulations!
        </h2>
        <p className="text-gray-700">
          You've completed the lesson on Moroccan cultural customs and etiquette. You now understand the importance of proper greetings, hospitality customs, religious sensitivity, and social behavior in Moroccan culture.
        </p>
      </div>
    </LessonLayout>
  );
}