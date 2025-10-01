"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/six/LessonOverview';
import BusinessVocabulary from '../coursecomps/six/BusinessVocabulary';
import FormalExpressions from '../coursecomps/six/FormalExpressions';
import ProfessionalScenarios from '../coursecomps/six/ProfessionalScenarios';
import EmailCommunication from '../coursecomps/six/EmailCommunication';
import PracticeExercises from '../coursecomps/six/PracticeExercises';
import CulturalNotes from '../coursecomps/six/CulturalNotes';
import ProfessionalTips from '../coursecomps/six/ProfessionalTips';

export default function AdvancedSix() {
  return (
    <LessonLayout 
      title="Professional Communication" 
      level="advanced" 
      lessonNumber={6}
      previousLesson="advanced-five"
      nextLesson="advanced-seven"
    >
      <LessonOverview />
      <BusinessVocabulary />
      <FormalExpressions />
      <ProfessionalScenarios />
      <EmailCommunication />
      <PracticeExercises />
      <CulturalNotes />
      <ProfessionalTips />
      
      {/* Congratulations Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Excellent Work!</h2>
          <p className="text-xl mb-4">You've completed Advanced Lesson 6: Professional Communication!</p>
          <p className="text-lg opacity-90">
            You now have the skills to communicate professionally in Darija across various business contexts.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full">
            <span className="text-lg font-semibold">Ready for Advanced Lesson 7? 🚀</span>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}