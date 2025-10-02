"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyfour/LessonOverview';
import HealthSymptoms from '../coursecomps/twentyfour/HealthSymptoms';
import MakingAppointment from '../coursecomps/twentyfour/MakingAppointment';
import PharmacyPhrases from '../coursecomps/twentyfour/PharmacyPhrases';
import InsuranceBilling from '../coursecomps/twentyfour/InsuranceBilling';
import PracticeDialogue from '../coursecomps/twentyfour/PracticeDialogue';

export default function IntermediateTwentyFour() {
  return (
    <LessonLayout 
      title="Healthcare and Medical Visits" 
      level="intermediate" 
      lessonNumber={24}
      previousLesson="intermediate-twenty-three"
      nextLesson={undefined}
    >
      <LessonOverview />
      <HealthSymptoms />
      <MakingAppointment />
      <PharmacyPhrases />
      <InsuranceBilling />
      <PracticeDialogue />

      <div className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 p-8 rounded-lg text-center">
        <div className="text-5xl mb-3">🩺</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Great job!</h2>
        <p className="text-gray-700">
          You can now describe symptoms, book appointments, and handle pharmacy and billing conversations in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}