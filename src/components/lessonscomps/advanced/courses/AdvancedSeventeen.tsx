"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seventeen/LessonOverview';
import ClimateChange from '../coursecomps/seventeen/ClimateChange';
import RenewableEnergy from '../coursecomps/seventeen/RenewableEnergy';
import ConservationBiodiversity from '../coursecomps/seventeen/ConservationBiodiversity';
import PollutionWaste from '../coursecomps/seventeen/PollutionWaste';
import SustainableDevelopment from '../coursecomps/seventeen/SustainableDevelopment';
import EnvironmentalPolicies from '../coursecomps/seventeen/EnvironmentalPolicies';
import GreenTechnology from '../coursecomps/seventeen/GreenTechnology';
import EnvironmentalDialogue from '../coursecomps/seventeen/EnvironmentalDialogue';
import CulturalNote from '../coursecomps/seventeen/CulturalNote';

export default function AdvancedSeventeen() {
  const [completedChallenges] = useState(0);
  const [masteryScore] = useState(0);

  return (
    <LessonLayout 
      title="Environmental Science and Sustainability" 
      level="advanced" 
      lessonNumber={17}
      previousLesson="advanced-sixteen"
      nextLesson="advanced-eighteen"
    >
      <LessonOverview />
      <ClimateChange />
      <RenewableEnergy />
      <ConservationBiodiversity />
      <PollutionWaste />
      <SustainableDevelopment />
      <EnvironmentalPolicies />
      <GreenTechnology />
      <EnvironmentalDialogue />
      <CulturalNote />

      {/* Congratulations Section */}
      {completedChallenges >= 5 && (
        <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-black p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">🎉 Congratulations!</h2>
          <p className="text-lg">You've mastered Environmental Science and Sustainability vocabulary! Your mastery score: {masteryScore}%</p>
        </div>
      )}
    </LessonLayout>
  );
}