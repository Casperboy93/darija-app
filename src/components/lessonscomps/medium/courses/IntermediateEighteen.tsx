"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eighteen/LessonOverview';
import NaturalEnvironmentsEcosystems from '../coursecomps/eighteen/NaturalEnvironmentsEcosystems';
import FloraFauna from '../coursecomps/eighteen/FloraFauna';
import ClimateWeatherPatterns from '../coursecomps/eighteen/ClimateWeatherPatterns';
import EnvironmentalIssues from '../coursecomps/eighteen/EnvironmentalIssues';
import ConservationSustainability from '../coursecomps/eighteen/ConservationSustainability';
import MoroccoEnvironmentalInitiatives from '../coursecomps/eighteen/MoroccoEnvironmentalInitiatives';
import EnvironmentalActions from '../coursecomps/eighteen/EnvironmentalActions';
import PracticeDialogue from '../coursecomps/eighteen/PracticeDialogue';
import CulturalNote from '../coursecomps/eighteen/CulturalNote';

export default function IntermediateEighteen() {
  return (
    <LessonLayout 
      title="Environment and Nature" 
      level="intermediate" 
      lessonNumber={18}
      previousLesson="intermediate-seventeen"
      nextLesson="intermediate-nineteen"
    >
      <LessonOverview />
      <NaturalEnvironmentsEcosystems />
      <FloraFauna />
      <ClimateWeatherPatterns />
      <EnvironmentalIssues />
      <ConservationSustainability />
      <MoroccoEnvironmentalInitiatives />
      <EnvironmentalActions />
      <PracticeDialogue />
      <CulturalNote />

      {/* Congratulations Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200">
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h2>
          <p className="text-gray-700">
            You've completed Lesson 18: Environment and Nature. You've learned essential vocabulary 
            for discussing environmental topics, climate, conservation, and Morocco's environmental initiatives.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}