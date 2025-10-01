"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/thirteen/LessonOverview';
import ScientificFields from '../coursecomps/thirteen/ScientificFields';
import ResearchMethodology from '../coursecomps/thirteen/ResearchMethodology';
import TechnicalTerminology from '../coursecomps/thirteen/TechnicalTerminology';
import AcademicPresentations from '../coursecomps/thirteen/AcademicPresentations';
import ScientificDiscussion from '../coursecomps/thirteen/ScientificDiscussion';
import ResearchDialogue from '../coursecomps/thirteen/ResearchDialogue';
import CulturalNote from '../coursecomps/thirteen/CulturalNote';

export default function AdvancedThirteen() {
  const [completedChallenges, setCompletedChallenges] = useState<number>(0);
  const [masteryScore, setMasteryScore] = useState<number>(0);

  return (
    <LessonLayout 
      title="Scientific and Technical Discourse" 
      level="advanced" 
      lessonNumber={13}
      previousLesson="advanced-twelve"
      nextLesson="advanced-fourteen"
    >
      <LessonOverview />
      <ScientificFields />
      <ResearchMethodology />
      <TechnicalTerminology />
      <AcademicPresentations />
      <ScientificDiscussion />
      <ResearchDialogue />
      <CulturalNote />

      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
        <p className="text-xl mb-4">You've completed Advanced Lesson 13: Scientific and Technical Discourse!</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
          <p className="text-lg">You've mastered scientific vocabulary and can now engage in technical discussions with confidence!</p>
        </div>
        <div className="flex justify-center space-x-4 text-sm">
          <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
            <span className="font-semibold">Challenges Completed:</span> {completedChallenges}/8
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
            <span className="font-semibold">Mastery Score:</span> {masteryScore}%
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}