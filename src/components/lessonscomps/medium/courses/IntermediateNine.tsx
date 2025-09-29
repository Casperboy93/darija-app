"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/nine/LessonOverview';
import MoroccanFestivals from '../coursecomps/nine/MoroccanFestivals';
import TraditionalCustoms from '../coursecomps/nine/TraditionalCustoms';
import TraditionalArtsCrafts from '../coursecomps/nine/TraditionalArtsCrafts';
import TraditionalMusicDance from '../coursecomps/nine/TraditionalMusicDance';
import CulturalConversation from '../coursecomps/nine/CulturalConversation';
import TraditionalClothing from '../coursecomps/nine/TraditionalClothing';
import ReligiousSpiritualPractices from '../coursecomps/nine/ReligiousSpiritualPractices';
import PracticeExercise from '../coursecomps/nine/PracticeExercise';
import CulturalEtiquette from '../coursecomps/nine/CulturalEtiquette';

export default function IntermediateNine() {
  return (
    <LessonLayout 
      title="Culture and Traditions" 
      level="intermediate" 
      lessonNumber={9}
      previousLesson="intermediate-eight"
      nextLesson="intermediate-ten"
    >
      <LessonOverview />
      <MoroccanFestivals />
      <TraditionalCustoms />
      <TraditionalArtsCrafts />
      <TraditionalMusicDance />
      <CulturalConversation />
      <TraditionalClothing />
      <ReligiousSpiritualPractices />
      <PracticeExercise />
      <CulturalEtiquette />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Cultural Mastery Achieved!
        </h2>
        <p className="text-lg">You've gained deep insight into Moroccan culture and traditions! You can now participate meaningfully in cultural discussions, understand traditional practices, and appreciate the rich heritage of Morocco. You're truly connecting with the heart of Moroccan society!</p>
      </div>
    </LessonLayout>
  );
}