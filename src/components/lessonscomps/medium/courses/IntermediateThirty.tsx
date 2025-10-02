"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/thirty/LessonOverview';
import EmergencyVocabulary from '../coursecomps/thirty/EmergencyVocabulary';
import ReportingIncidents from '../coursecomps/thirty/ReportingIncidents';
import MedicalEmergency from '../coursecomps/thirty/MedicalEmergency';
import PoliceAssistance from '../coursecomps/thirty/PoliceAssistance';
import PracticeDialogue from '../coursecomps/thirty/PracticeDialogue';

export default function IntermediateThirty() {
  return (
    <LessonLayout 
      title="Emergencies & Safety" 
      level="intermediate" 
      lessonNumber={30}
      previousLesson="intermediate-twenty-nine"
    >
      <LessonOverview />
      <EmergencyVocabulary />
      <ReportingIncidents />
      <MedicalEmergency />
      <PoliceAssistance />
      <PracticeDialogue />

      {/* Congratulations */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Congratulations!
        </h2>
        <p className="text-gray-700">
          You've completed Intermediate Lesson 30! You can handle emergency situations and communicate clearly
          with staff, medical professionals, and police in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}