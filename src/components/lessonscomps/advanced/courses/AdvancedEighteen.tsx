"use client";

import React, { useState } from 'react';
import LessonOverview from '../coursecomps/eighteen/LessonOverview';
import MedicalSpecialties from '../coursecomps/eighteen/MedicalSpecialties';
import MedicalResearch from '../coursecomps/eighteen/MedicalResearch';
import PharmaceuticalDevelopment from '../coursecomps/eighteen/PharmaceuticalDevelopment';
import HealthcareSystems from '../coursecomps/eighteen/HealthcareSystems';
import MedicalTechnology from '../coursecomps/eighteen/MedicalTechnology';
import PublicHealth from '../coursecomps/eighteen/PublicHealth';
import MedicalDialogue from '../coursecomps/eighteen/MedicalDialogue';
import CulturalNote from '../coursecomps/eighteen/CulturalNote';
import LessonLayout from '../../common/LessonLayout';

export default function AdvancedEighteen() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [masteryScore, setMasteryScore] = useState(0);

  return (
    <LessonLayout 
      title="Healthcare and Medical Research" 
      level="advanced" 
      lessonNumber={18}
      previousLesson="advanced-seventeen"
      nextLesson="advanced-nineteen"
    >
      <div className="space-y-8">
        <LessonOverview />
        <MedicalSpecialties />

        <MedicalResearch />

        <PharmaceuticalDevelopment />

        <HealthcareSystems />

        <MedicalTechnology />

        <PublicHealth />

        <MedicalDialogue />

        <CulturalNote />
        
        {/* Congratulations Section */}
        {completedChallenges >= 5 && (
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">🎉 Excellent Progress!</h2>
            <p className="text-lg">
              You've mastered healthcare and medical research terminology! 
              Your mastery score: {masteryScore}%
            </p>
          </div>
        )}
      </div>
    </LessonLayout>
  );
}