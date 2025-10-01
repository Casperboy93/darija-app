"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/eleven/LessonOverview';
import ClassicalPoetryInfluence from '../coursecomps/eleven/ClassicalPoetryInfluence';
import LiteraryVocabulary from '../coursecomps/eleven/LiteraryVocabulary';
import TraditionalPoetryForms from '../coursecomps/eleven/TraditionalPoetryForms';
import MetaphorsAndImagery from '../coursecomps/eleven/MetaphorsAndImagery';
import CreativeWritingExercise from '../coursecomps/eleven/CreativeWritingExercise';
import LiteraryDialogue from '../coursecomps/eleven/LiteraryDialogue';
import CulturalNote from '../coursecomps/eleven/CulturalNote';

export default function AdvancedEleven() {
  return (
    <LessonLayout 
      title="Literary and Poetic Expression" 
      level="advanced" 
      lessonNumber={11}
      previousLesson="advanced-ten"
      nextLesson="advanced-twelve"
    >
      <LessonOverview />
      <ClassicalPoetryInfluence />
      <LiteraryVocabulary />
      <TraditionalPoetryForms />
      <MetaphorsAndImagery />
      <CreativeWritingExercise />
      <LiteraryDialogue />
      <CulturalNote />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎭 Literary Achievement!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 11: Literary and Poetic Expression!</p>
          <p className="text-lg opacity-90">
            You've explored the rich world of Moroccan literary traditions and learned to create beautiful expressions in Darija.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for the final advanced lesson? 📚</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}