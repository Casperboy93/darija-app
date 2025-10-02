"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentyseven/LessonOverview';
import ShoppingVocabulary from '../coursecomps/twentyseven/ShoppingVocabulary';
import BargainingPayments from '../coursecomps/twentyseven/BargainingPayments';
import CustomerServiceReturns from '../coursecomps/twentyseven/CustomerServiceReturns';
import OnlineShoppingDelivery from '../coursecomps/twentyseven/OnlineShoppingDelivery';
import PracticeDialogue from '../coursecomps/twentyseven/PracticeDialogue';

export default function IntermediateTwentySeven() {
  return (
    <LessonLayout 
      title="Shopping & Consumer Services" 
      level="intermediate" 
      lessonNumber={27}
      previousLesson="intermediate-twenty-six"
      nextLesson="intermediate-twenty-eight"
    >
      <LessonOverview />
      <ShoppingVocabulary />
      <BargainingPayments />
      <CustomerServiceReturns />
      <OnlineShoppingDelivery />
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
          You've completed Intermediate Lesson 27! You can now shop confidently, negotiate prices,
          and handle customer service interactions in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}