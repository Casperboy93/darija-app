"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fifteen/LessonOverview';
import PhilosophicalSchools from '../coursecomps/fifteen/PhilosophicalSchools';
import EthicalConcepts from '../coursecomps/fifteen/EthicalConcepts';
import PhilosophicalArguments from '../coursecomps/fifteen/PhilosophicalArguments';
import ExistentialQuestions from '../coursecomps/fifteen/ExistentialQuestions';
import EthicalDilemmas from '../coursecomps/fifteen/EthicalDilemmas';
import FamousPhilosophers from '../coursecomps/fifteen/FamousPhilosophers';
import PhilosophicalDialogue from '../coursecomps/fifteen/PhilosophicalDialogue';
import CulturalNote from '../coursecomps/fifteen/CulturalNote';

export default function AdvancedFifteen() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [masteryScore, setMasteryScore] = useState(0);

  return (
    <LessonLayout 
      title="Philosophy and Ethics" 
      level="advanced" 
      lessonNumber={15}
      previousLesson="advanced-fourteen"
      nextLesson="advanced-sixteen"
    >
      <LessonOverview />
      <PhilosophicalSchools />
      <EthicalConcepts />
      <PhilosophicalArguments />
      <ExistentialQuestions />
      <EthicalDilemmas />
      <FamousPhilosophers />
      <PhilosophicalDialogue />
      <CulturalNote />

      {/* Congratulations Section */}
      {completedChallenges >= 5 && (
        <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">🎉 Excellent Progress!</h2>
          <p className="text-lg">You've mastered philosophical discourse in Darija! Your mastery score: {masteryScore}%</p>
        </div>
      )}
    </LessonLayout>
  );
}