"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/seven/LessonOverview';
import AcademicVocabulary from '../coursecomps/seven/AcademicVocabulary';
import IntellectualExpressions from '../coursecomps/seven/IntellectualExpressions';
import AcademicDiscussions from '../coursecomps/seven/AcademicDiscussions';
import AbstractConcepts from '../coursecomps/seven/AbstractConcepts';
import AcademicWriting from '../coursecomps/seven/AcademicWriting';
import PracticeExercises from '../coursecomps/seven/PracticeExercises';
import AcademicTips from '../coursecomps/seven/AcademicTips';

export default function AdvancedSeven() {
  return (
    <LessonLayout 
      title="Academic & Intellectual Discourse" 
      level="advanced" 
      lessonNumber={7}
      previousLesson="advanced-six"
      nextLesson="advanced-eight"
    >
      <LessonOverview />
      <AcademicVocabulary />
      <IntellectualExpressions />
      <AcademicDiscussions />
      <AbstractConcepts />
      <AcademicWriting />
      <PracticeExercises />
      <AcademicTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Outstanding Achievement!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 7: Academic & Intellectual Discourse!</p>
          <p className="text-lg opacity-90">
            You now possess the sophisticated language skills needed for academic discussions and intellectual discourse in Darija.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for Advanced Lesson 8? 🚀</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}