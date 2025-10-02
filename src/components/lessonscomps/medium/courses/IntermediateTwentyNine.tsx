"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twentynine/LessonOverview';
import RestaurantVocabulary from '../coursecomps/twentynine/RestaurantVocabulary';
import OrderingFood from '../coursecomps/twentynine/OrderingFood';
import DietaryPreferences from '../coursecomps/twentynine/DietaryPreferences';
import ReservationsDiningEtiquette from '../coursecomps/twentynine/ReservationsDiningEtiquette';
import PracticeDialogue from '../coursecomps/twentynine/PracticeDialogue';

export default function IntermediateTwentyNine() {
  return (
    <LessonLayout 
      title="Dining & Restaurants" 
      level="intermediate" 
      lessonNumber={29}
      previousLesson="intermediate-twenty-eight"
    >
      <LessonOverview />
      <RestaurantVocabulary />
      <OrderingFood />
      <DietaryPreferences />
      <ReservationsDiningEtiquette />
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
          You've completed Intermediate Lesson 29! You can confidently navigate restaurant situations: vocabulary,
          ordering, dietary needs, reservations, and polite etiquette in Darija.
        </p>
      </div>
    </LessonLayout>
  );
}