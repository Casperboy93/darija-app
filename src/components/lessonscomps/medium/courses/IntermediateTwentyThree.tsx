"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentythree/LessonOverview';
import RentingVocabulary from '../coursecomps/twentythree/RentingVocabulary';
import FindingApartment from '../coursecomps/twentythree/FindingApartment';
import LeaseUtilities from '../coursecomps/twentythree/LeaseUtilities';
import PracticeDialogue from '../coursecomps/twentythree/PracticeDialogue';

export default function IntermediateTwentyThree() {
  return (
    <LessonLayout 
      title="Housing and Renting" 
      level="intermediate" 
      lessonNumber={23}
      previousLesson="intermediate-twenty-two"
    >
      <LessonOverview />
      <RentingVocabulary />
      <FindingApartment />
      <LeaseUtilities />
      <PracticeDialogue />

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">🏠</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Well done!</h2>
        <p className="text-gray-700">
          You can now handle conversations about housing, renting, and utilities in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}