"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyeight/LessonOverview';
import TransportModes from '../coursecomps/twentyeight/TransportModes';
import BuyingTickets from '../coursecomps/twentyeight/BuyingTickets';
import DirectionsNavigation from '../coursecomps/twentyeight/DirectionsNavigation';
import CommutingProblems from '../coursecomps/twentyeight/CommutingProblems';
import PracticeDialogue from '../coursecomps/twentyeight/PracticeDialogue';

export default function IntermediateTwentyEight() {
  return (
    <LessonLayout 
      title="Travel & Transportation" 
      level="intermediate" 
      lessonNumber={28}
      previousLesson="intermediate-twenty-seven"
      nextLesson="intermediate-twenty-nine"
    >
      <LessonOverview />
      <TransportModes />
      <BuyingTickets />
      <DirectionsNavigation />
      <CommutingProblems />
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
          You've completed Intermediate Lesson 28! You can travel around Morocco
          with confidence, buying tickets, asking directions, and handling common commuting issues.
        </p>
      </div>
    </LessonLayout>
  );
}