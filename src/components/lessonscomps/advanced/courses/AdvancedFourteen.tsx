"use client";

import React, { useState } from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/fourteen/LessonOverview';
import MediaTypes from '../coursecomps/fourteen/MediaTypes';
import NewsReporting from '../coursecomps/fourteen/NewsReporting';
import InterviewTechniques from '../coursecomps/fourteen/InterviewTechniques';
import BroadcastingVocabulary from '../coursecomps/fourteen/BroadcastingVocabulary';
import MediaEthics from '../coursecomps/fourteen/MediaEthics';
import NewsWritingStyles from '../coursecomps/fourteen/NewsWritingStyles';
import PressConferenceDialogue from '../coursecomps/fourteen/PressConferenceDialogue';
import CulturalNote from '../coursecomps/fourteen/CulturalNote';

export default function AdvancedFourteen() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [masteryScore, setMasteryScore] = useState(0);

  return (
    <LessonLayout 
      title="Media and Journalism" 
      level="advanced" 
      lessonNumber={14}
      previousLesson="advanced-thirteen"
      nextLesson="advanced-fifteen"
    >
      <LessonOverview />
      <MediaTypes />
      <NewsReporting />
      <InterviewTechniques />
      <BroadcastingVocabulary />
      <MediaEthics />
      <NewsWritingStyles />
      <PressConferenceDialogue />
      <CulturalNote />
      
      {/* Congratulations Section */}
      {completedChallenges >= 5 && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-2">Excellent Progress!</h3>
          <p>You've mastered media and journalism vocabulary! Your mastery score: {masteryScore}%</p>
        </div>
      )}
    </LessonLayout>
  );
}