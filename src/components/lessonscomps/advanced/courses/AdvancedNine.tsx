"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/nine/LessonOverview';
import PhilosophicalVocabulary from '../coursecomps/nine/PhilosophicalVocabulary';
import ExistentialQuestions from '../coursecomps/nine/ExistentialQuestions';
import PhilosophicalDialogue from '../coursecomps/nine/PhilosophicalDialogue';
import AbstractReasoning from '../coursecomps/nine/AbstractReasoning';
import PracticeExercises from '../coursecomps/nine/PracticeExercises';
import PhilosophicalTips from '../coursecomps/nine/PhilosophicalTips';

export default function AdvancedNine() {
  return (
    <LessonLayout 
      title="Philosophy & Abstract Thinking" 
      level="advanced" 
      lessonNumber={9}
      previousLesson="advanced-eight"
      nextLesson="advanced-ten"
    >
      <LessonOverview />
      <PhilosophicalVocabulary />
      <ExistentialQuestions />
      <PhilosophicalDialogue />
      <AbstractReasoning />
      <PracticeExercises />
      <PhilosophicalTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🧠 Philosophy Master!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 9: Philosophy & Abstract Thinking!</p>
          <p className="text-lg opacity-90">
            You now have the skills to engage in deep philosophical discourse and express complex abstract ideas in Darija.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for Advanced Lesson 10? 🎯</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}