"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/twenty/LessonOverview';
import PhilosophyWisdom from '../coursecomps/twenty/PhilosophyWisdom';
import TraditionalArtsCrafts from '../coursecomps/twenty/TraditionalArtsCrafts';
import LiteraturePoetry from '../coursecomps/twenty/LiteraturePoetry';
import ArchitectureUrbanPlanning from '../coursecomps/twenty/ArchitectureUrbanPlanning';
import SocialDynamicsRelationships from '../coursecomps/twenty/SocialDynamicsRelationships';
import SpiritualReligiousConcepts from '../coursecomps/twenty/SpiritualReligiousConcepts';
import CulturalAnalysisExpressions from '../coursecomps/twenty/CulturalAnalysisExpressions';
import PracticeDialogue from '../coursecomps/twenty/PracticeDialogue';
import CulturalNote from '../coursecomps/twenty/CulturalNote';

export default function IntermediateTwenty() {
  return (
    <LessonLayout
      title="Advanced Cultural and Philosophical Vocabulary"
      level="intermediate"
      lessonNumber={20}
      previousLesson="intermediate-nineteen"
    >
      <LessonOverview />
      <PhilosophyWisdom />
      <TraditionalArtsCrafts />
      <LiteraturePoetry />
      <ArchitectureUrbanPlanning />
      <SocialDynamicsRelationships />
      <SpiritualReligiousConcepts />
      <CulturalAnalysisExpressions />
      <PracticeDialogue />
      <CulturalNote />
      
      {/* Congratulations Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-8 rounded-lg text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Congratulations!</h2>
        <p className="text-lg text-gray-700 mb-4">
          You have successfully completed Lesson 20 - Advanced Cultural and Philosophical Vocabulary!
        </p>
        <p className="text-gray-600">
          You've mastered sophisticated cultural concepts and philosophical terms, completing the intermediate level of Darija learning. 
          You can now engage in intellectual discussions about culture, philosophy, and society with confidence!
        </p>
      </div>
    </LessonLayout>
  );
}