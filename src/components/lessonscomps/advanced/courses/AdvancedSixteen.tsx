"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/sixteen/LessonOverview';
import InternationalOrganizations from '../coursecomps/sixteen/InternationalOrganizations';
import DiplomaticProtocols from '../coursecomps/sixteen/DiplomaticProtocols';
import TreatiesAgreements from '../coursecomps/sixteen/TreatiesAgreements';
import GlobalIssues from '../coursecomps/sixteen/GlobalIssues';
import DiplomaticLanguage from '../coursecomps/sixteen/DiplomaticLanguage';
import MultilateralDiplomacy from '../coursecomps/sixteen/MultilateralDiplomacy';
import DiplomaticDialogue from '../coursecomps/sixteen/DiplomaticDialogue';
import CulturalNote from '../coursecomps/sixteen/CulturalNote';

export default function AdvancedSixteen() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [masteryScore, setMasteryScore] = useState(0);

  const handleChallengeComplete = () => {
    setCompletedChallenges(prev => prev + 1);
    setMasteryScore(prev => prev + 20);
  };

  return (
    <LessonLayout 
      title="International Relations and Diplomacy" 
      level="advanced" 
      lessonNumber={16}
      previousLesson="advanced-fifteen"
      nextLesson="advanced-seventeen"
    >
      <LessonOverview />
      <InternationalOrganizations />
      <DiplomaticProtocols />
      <TreatiesAgreements />
      <GlobalIssues />
      <DiplomaticLanguage />
      <MultilateralDiplomacy />
      <DiplomaticDialogue />
      <CulturalNote />

      {/* Congratulations Section */}
      {completedChallenges >= 5 && (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">🎉 Excellent Progress!</h3>
          <p className="text-lg">You've mastered international relations and diplomacy vocabulary!</p>
          <p className="text-sm mt-2">Mastery Score: {masteryScore}%</p>
        </div>
      )}
    </LessonLayout>
  );
}