"use client";

import React from 'react';
import LessonLayout from '../../common/LessonLayout';
import LessonOverview from '../coursecomps/ten/LessonOverview';
import AdvancedExpressionTechniques from '../coursecomps/ten/AdvancedExpressionTechniques';
import StorytellingTechniques from '../coursecomps/ten/StorytellingTechniques';
import DebatePersuasion from '../coursecomps/ten/DebatePersuasion';
import ComplexConversationExample from '../coursecomps/ten/ComplexConversationExample';
import AdvancedIdiomaticExpressions from '../coursecomps/ten/AdvancedIdiomaticExpressions';
import AdvancedSocialInteractions from '../coursecomps/ten/AdvancedSocialInteractions';
import AdvancedPracticeScenarios from '../coursecomps/ten/AdvancedPracticeScenarios';
import CulturalConversationNuances from '../coursecomps/ten/CulturalConversationNuances';
import FinalMasteryChallenge from '../coursecomps/ten/FinalMasteryChallenge';

export default function IntermediateTen() {
  return (
    <LessonLayout 
      title="Advanced Conversation Skills" 
      level="intermediate" 
      lessonNumber={10}
      previousLesson="intermediate-nine"
      nextLesson="intermediate-eleven"
    >
      <LessonOverview />
      <AdvancedExpressionTechniques />
      <StorytellingTechniques />
      <DebatePersuasion />
      <ComplexConversationExample />
      <AdvancedIdiomaticExpressions />
      <AdvancedSocialInteractions />
      <AdvancedPracticeScenarios />
      <CulturalConversationNuances />
      <FinalMasteryChallenge />

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Conversation Master!
        </h2>
        <p className="text-lg">Congratulations! You've reached an advanced level of conversational Darija! You can now engage in sophisticated discussions, express complex ideas, tell compelling stories, and navigate any social situation with confidence. You're ready to connect deeply with Moroccan culture and people. Bravo!</p>
        <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
          <p className="text-sm">🎓 You've completed the Intermediate Level! Ready for Advanced Lessons?</p>
        </div>
      </div>
    </LessonLayout>
  );
}